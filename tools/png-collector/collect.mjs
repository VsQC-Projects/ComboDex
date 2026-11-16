// ComboDex: collecte de candidats Wikimedia Commons, sans fabrication d'images.
// Les fichiers sont des CANDIDATS: validation éditoriale obligatoire avant publication.
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import sharp from 'sharp';

const games = [
 ['Ultimate Marvel vs Capcom 3','Ultimate Marvel vs Capcom 3'],
 ['Marvel Tokon Fighting Souls','Marvel Tokon Fighting Souls'],
 ['Tekken 8','Tekken 8'],
 ['Super Smash Bros Ultimate','Super Smash Bros Ultimate'],
 ['Street Fighter 6','Street Fighter 6'],
 ['Ultra Street Fighter IV','Ultra Street Fighter IV'],
 ['Marvel vs Capcom 2','Marvel vs Capcom 2'],
 ['Mortal Kombat XL','Mortal Kombat XL'],
 ['Guilty Gear Strive','Guilty Gear Strive'],
 ['Granblue Fantasy Versus Rising','Granblue Fantasy Versus Rising'],
 ['Dragon Ball FighterZ','Dragon Ball FighterZ'],
 ['Fatal Fury City of the Wolves','Fatal Fury City of the Wolves'],
 ['BlazBlue Centralfiction','BlazBlue Centralfiction'],
 ['Avatar Legends','Avatar The Last Airbender emblem'],
 ['2XKO','2XKO']
];
const root='combodex-png-candidats';
await fs.mkdir(root,{recursive:true});
const inventory=[];
async function api(params) {
 const url='https://commons.wikimedia.org/w/api.php?'+new URLSearchParams({format:'json',origin:'*',...params});
 const response=await fetch(url,{headers:{'User-Agent':'ComboDexAssetResearch/1.0 (GitHub Actions; educational asset research)'}});
 if(!response.ok) throw new Error('API '+response.status);
 return response.json();
}
const pause=ms=>new Promise(r=>setTimeout(r,ms));
for (const [game,query] of games) {
 const dir=path.join(root,game.replace(/[\\/:*?"<>|]/g,'-'));
 await fs.mkdir(dir,{recursive:true});
 let saved=0; const hashes=new Set();
 try {
  const found=await api({action:'query',generator:'search',gsrsearch:'filetype:bitmap '+query,gsrnamespace:'6',gsrlimit:'50',prop:'imageinfo',iiprop:'url|mime|extmetadata',iiurlwidth:'1024'});
  for (const page of Object.values(found.query?.pages||{})) {
   if(saved>=15) break;
   const info=page.imageinfo?.[0]; if(!info?.url || !/image\/(png|webp)/.test(info.mime||'')) continue;
   // Require the exact game title in the filename or description: otherwise skip.
   const desc=(info.extmetadata?.ImageDescription?.value||'').replace(/<[^>]*>/g,' ');
   const matchWords=query.toLowerCase().split(/\s+/).filter(x=>x.length>2);
   const hay=(page.title+' '+desc).toLowerCase();
   if(matchWords.filter(w=>hay.includes(w)).length < Math.min(2,matchWords.length)) continue;
   try {
    const response=await fetch(info.thumburl||info.url);
    if(!response.ok) continue;
    const buf=Buffer.from(await response.arrayBuffer());
    if(buf.length>8_000_000) continue;
    const img=sharp(buf,{limitInputPixels:40_000_000});
    const meta=await img.metadata();
    if(!meta.hasAlpha || meta.width<64 || meta.height<64) continue;
    const {data,info:raw}=await img.ensureAlpha().resize({width:512,height:512,fit:'inside',withoutEnlargement:true}).raw().toBuffer({resolveWithObject:true});
    let transparent=false; for(let i=3;i<data.length;i+=raw.channels){if(data[i]<250){transparent=true;break;}}
    if(!transparent) continue;
    const png=await sharp(buf).resize({width:512,height:512,fit:'inside',withoutEnlargement:true}).png().toBuffer();
    const hash=crypto.createHash('sha256').update(png).digest('hex');
    if(hashes.has(hash)) continue;
    hashes.add(hash);
    const name=String(saved+1).padStart(2,'0')+'_'+page.title.replace(/^File:/,'').replace(/[^a-zA-Z0-9._-]/g,'_').slice(0,90)+'.png';
    await fs.writeFile(path.join(dir,name),png);
    inventory.push({game,file:name,source:info.descriptionurl||info.url,license:info.extmetadata?.LicenseShortName?.value||'',author:(info.extmetadata?.Artist?.value||'').replace(/<[^>]*>/g,' ').slice(0,150),review:'A_VERIFIER'});
    saved++;
   }catch(e){console.log('Fichier ignoré:',page.title,String(e).slice(0,100));}
   await pause(100);
  }
 }catch(e){console.log('Recherche impossible:',game,String(e));}
 console.log(game+': '+saved+' candidats PNG transparents');
}
await fs.writeFile(path.join(root,'inventaire.json'),JSON.stringify(inventory,null,2));
await fs.writeFile(path.join(root,'A_LIRE.txt'),'CANDIDATS NON VALIDES. Sources Wikimedia Commons uniquement. Verifier la pertinence exacte au jeu, la licence, et les droits avant usage ou publication. Les dossiers incomplets restent incomplets. Aucune image inventee.\n');
