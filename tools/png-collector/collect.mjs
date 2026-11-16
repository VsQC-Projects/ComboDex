import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import sharp from 'sharp';

// Research catalog: query OBJECTS, not only game titles. These are search candidates,
// never proof of game ownership, licensing or source authenticity.
const catalog = [
 ['Ultimate Marvel vs Capcom 3',['Marvel vs Capcom 3 logo','Marvel Infinity Gems','Marvel Captain America shield','Marvel Doctor Strange Eye of Agamotto','Marvel Thor Mjolnir','Marvel Ghost Rider chain','Marvel Iron Man arc reactor']],
 ['Marvel Tokon Fighting Souls',['Marvel Tokon Fighting Souls logo','Marvel Spider-Man web shooter','Marvel Captain America shield','Marvel Doctor Doom mask','Marvel Loki helmet','Marvel Cyclops visor']],
 ['Tekken 8',['Tekken 8 logo','Tekken Mishima Zaibatsu emblem','Tekken G Corporation logo','Tekken King jaguar mask','Tekken Devil Jin wings','Tekken Heihachi hairstyle']],
 ['Super Smash Bros Ultimate',['Super Smash Bros logo','Super Mario mushroom','Super Mario coin','Sonic the Hedgehog ring','Pokemon Poke Ball','Zelda Triforce','Kirby Warp Star','Metroid Samus helmet']],
 ['Street Fighter 6',['Street Fighter 6 logo','Street Fighter Ryu headband','Street Fighter Chun Li bracelet','Street Fighter Shadaloo emblem','Street Fighter Hadouken','Street Fighter World Tour']],
 ['Ultra Street Fighter IV',['Ultra Street Fighter IV logo','Street Fighter Shadaloo emblem','Street Fighter Ryu headband','Street Fighter Akuma kanji','Street Fighter Chun Li bracelet']],
 ['Marvel vs Capcom 2',['Marvel vs Capcom 2 logo','Marvel Infinity Gems','Marvel Captain America shield','Marvel Gambit playing card','Marvel Wolverine claws','Marvel Spider-Man web shooter']],
 ['Mortal Kombat XL',['Mortal Kombat dragon logo','Mortal Kombat Scorpion kunai','Mortal Kombat Sub Zero mask','Mortal Kombat Lin Kuei emblem','Mortal Kombat Raiden hat']],
 ['Guilty Gear Strive',['Guilty Gear Strive logo','Guilty Gear Sol Badguy weapon','Guilty Gear Ky Kiske sword','Guilty Gear Backyard symbol','Guilty Gear Faust paper bag']],
 ['Granblue Fantasy Versus Rising',['Granblue Fantasy Versus Rising logo','Granblue Bahamut summon','Granblue Vyrn','Granblue Lyria crystal','Granblue skyfarer emblem']],
 ['Dragon Ball FighterZ',['Dragon Ball FighterZ logo','Dragon Ball dragon balls','Dragon Ball four star dragon ball','Dragon Ball Capsule Corp logo','Dragon Ball senzu bean','Dragon Ball scouter','Dragon Ball Potara earrings']],
 ['Fatal Fury City of the Wolves',['Fatal Fury City of the Wolves logo','Fatal Fury Terry Bogard cap','Fatal Fury Geese Howard emblem','Fatal Fury Rock Howard jacket','Fatal Fury South Town']],
 ['BlazBlue Centralfiction',['BlazBlue Centralfiction logo','BlazBlue Azure Grimoire','BlazBlue Ragna emblem','BlazBlue Hakumen emblem','BlazBlue Nox Nyctores','BlazBlue Rachel Alucard umbrella']],
 ['Avatar Legends',['Avatar The Last Airbender air nomads emblem','Avatar Fire Nation emblem','Avatar Water Tribe emblem','Avatar Earth Kingdom emblem','Avatar White Lotus tile','Avatar four elements']],
 ['2XKO',['2XKO logo','League of Legends Ekko hourglass','League of Legends Ahri orb','League of Legends Yasuo sword','League of Legends Darius axe','League of Legends Jinx rocket']]
];
const root='combodex-png-candidats-v2';
await fs.mkdir(root,{recursive:true});
const inventory=[], seen=new Set();
const pause=ms=>new Promise(r=>setTimeout(r,ms));
async function getJSON(url){
 for(let attempt=0;attempt<3;attempt++){
  try{const r=await fetch(url,{headers:{'User-Agent':'ComboDexAssetResearch/2.0 (asset provenance research)'}});
   if(!r.ok)throw Error('HTTP '+r.status);return await r.json();}
  catch(e){if(attempt===2)throw e;await pause(600*(attempt+1));}
 }
}
async function searchCommons(q){
 const params=new URLSearchParams({action:'query',format:'json',generator:'search',gsrsearch:q,gsrnamespace:'6',gsrlimit:'35',prop:'imageinfo',iiprop:'url|mime|extmetadata',iiurlwidth:'800'});
 const json=await getJSON('https://commons.wikimedia.org/w/api.php?'+params);
 return Object.values(json.query?.pages||{});
}
function clean(s){return String(s||'').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();}
function safe(s){return s.replace(/[^a-zA-Z0-9._-]/g,'_').slice(0,70);}
async function processCandidate(page,game,query,dir){
 const inf=page.imageinfo?.[0];if(!inf?.url||!/^image\/(png|jpeg|webp)$/i.test(inf.mime||''))return false;
 const title=page.title.replace(/^File:/,'');
 const queryWords=query.toLowerCase().split(/\s+/).filter(w=>w.length>=4);
 const hay=(title+' '+clean(inf.extmetadata?.ImageDescription?.value)).toLowerCase();
 if(queryWords.filter(w=>hay.includes(w)).length<Math.min(2,queryWords.length))return false;
 const source=inf.thumburl||inf.url;
 const response=await fetch(source);if(!response.ok)return false;
 const data=Buffer.from(await response.arrayBuffer());if(data.length>10_000_000)return false;
 const image=sharp(data,{limitInputPixels:30_000_000});const meta=await image.metadata();
 if((meta.width||0)<64||(meta.height||0)<64)return false;
 // JPEG is accepted as a SOURCE, but an opaque image is never misrepresented as cut out.
 const pixels=await image.resize({width:512,height:512,fit:'inside',withoutEnlargement:true}).ensureAlpha().raw().toBuffer({resolveWithObject:true});
 let alpha=false;for(let i=3;i<pixels.data.length;i+=pixels.info.channels)if(pixels.data[i]<250){alpha=true;break;}
 const hash=crypto.createHash('sha256').update(pixels.data).digest('hex');
 if(seen.has(hash))return false;
 seen.add(hash);
 const count=inventory.filter(x=>x.game===game&&x.transparent).length;
 const name=safe(title.replace(/\.[^.]+$/,''))+'_'+hash.slice(0,8)+'.png';
 const target=alpha?dir:path.join(dir,'needs-cutout');
 await fs.mkdir(target,{recursive:true});
 const png=await image.resize({width:512,height:512,fit:'inside',withoutEnlargement:true}).png().toBuffer();
 await fs.writeFile(path.join(target,name),png);
 inventory.push({game,file:path.relative(root,path.join(target,name)),query,source:inf.descriptionurl||inf.url,original_mime:inf.mime,transparent:alpha,license:clean(inf.extmetadata?.LicenseShortName?.value),artist:clean(inf.extmetadata?.Artist?.value).slice(0,150),status:'UNVERIFIED_CANDIDATE'});
 return alpha && count<15;
}
for(const [game,queries] of catalog){
 const dir=path.join(root,safe(game));await fs.mkdir(dir,{recursive:true});
 let good=0;
 for(const q of queries){
  if(good>=15)break;
  try{
   for(const page of await searchCommons(q)){
    if(good>=15)break;
    try{if(await processCandidate(page,game,q,dir))good++;}
    catch(e){console.log('skip',page.title,String(e).slice(0,100));}
   }
  }catch(e){console.log('search failed',q,String(e));}
  await pause(150);
 }
 console.log(game+': '+good+'/15 transparent candidates');
}
const counts=Object.fromEntries(catalog.map(([game])=>[game,inventory.filter(x=>x.game===game&&x.transparent).length]));
await fs.writeFile(path.join(root,'inventaire.json'),JSON.stringify({target:225,counts,items:inventory},null,2));
await fs.writeFile(path.join(root,'A_LIRE.txt'),'Recherche exploratoire : les fichiers ne sont PAS valides pour publication sans verification de pertinence, source et droits. Images opaques dans needs-cutout : NON detourees. Les dossiers incomplets ne sont pas remplis artificiellement. Le script ne contourne aucune restriction d acces.\\n');
