(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();const ke={mvc2:["Akuma","Amingo","Anakaris","B.B. Hood","Blackheart","Cable","Cammy","Captain America","Captain Commando","Charlie","Chun-Li","Colossus","Cyclops","Dan","Dhalsim","Doctor Doom","Felicia","Gambit","Guile","Hayato","Hulk","Iceman","Iron Man","Jill Valentine","Jin","Juggernaut","Ken","M. Bison","Magneto","Marrow","Mega Man","Morrigan","Omega Red","Psylocke","Rogue","Roll","Ruby Heart","Ryu","Sabretooth","Sakura","Sentinel","Servbot","Shuma-Gorath","Silver Samurai","SonSon","Spider-Man","Spiral","Storm","Strider Hiryu","Thanos","Tron Bonne","Venom","War Machine","Wolverine","Wolverine (Bone Claw)","Zangief"],umvc3:["Akuma","Amaterasu","Arthur","C. Viper","Captain America","Chris Redfield","Chun-Li","Dante","Deadpool","Doctor Doom","Doctor Strange","Dormammu","Felicia","Firebrand","Frank West","Ghost Rider","Haggar","Hawkeye","Hsien-Ko","Hulk","Iron Fist","Iron Man","Jill Valentine","M.O.D.O.K.","Magneto","Morrigan","Nemesis","Nova","Phoenix","Phoenix Wright","Rocket Raccoon","Ryu","Sentinel","She-Hulk","Shuma-Gorath","Spencer","Spider-Man","Storm","Strider Hiryu","Super-Skrull","Taskmaster","Thor","Trish","Tron Bonne","Vergil","Viewtiful Joe","Wesker","Wolverine","X-23","Zero"],tokon:["Black Panther","Blade","Captain America","Carnage","Champion","Danger","Deadpool","Doctor Doom","Ghost Rider","Green Goblin","Hulk","Iron Man","Jubilee","Loki","Magik","Magneto","Ms. Marvel","Peni Parker","Phoenix Cyclops","Spider-Man","Star-Lord","Storm","Thor (Jane Foster)","Venom","Wolverine"],"2xko":["Ahri","Akali","Blitzcrank","Braum","Caitlyn","Darius","Ekko","Illaoi","Jinx","Lux","Samira","Senna","Sett","Teemo","Thresh","Vi","Warwick","Yasuo"],dbfz:["Android 16","Android 17","Android 18","Android 21","Android 21 (Lab Coat)","Bardock","Beerus","Broly (DBS)","Broly (Z)","Captain Ginyu","Cell","Cooler","Frieza","Gogeta (SS4)","Gogeta (SSGSS)","Gohan (Adult)","Gohan (Teen)","Goku (Base)","Goku (GT)","Goku (SS4 DAIMA)","Goku (SSGSS)","Goku (SSJ)","Goku (UI)","Goku Black","Gotenks","Hit","Janemba","Jiren","Kefla","Kid Buu","Krillin","Majin Buu","Master Roshi","Nappa","Piccolo","Super Baby 2","Tien","Trunks","Vegeta (Base)","Vegeta (SSGSS)","Vegeta (SSJ)","Vegito (SSGSS)","Videl","Yamcha","Zamasu (Fused)"],sf6:["A.K.I.","Akuma","Alex","Arjun","Blanka","Bosch","C. Viper","Cammy","Chun-Li","Dee Jay","Dhalsim","E. Honda","Ed","Elena","Guile","Ingrid","JP","Jamie","Juri","Ken","Kimberly","Lily","Luke","M. Bison","Mai","Manon","Marisa","Rashid","Ryu","Sagat","Terry","Tifa","Yasmine","Zangief"],ggst:["A.B.A","Anji","Asuka R#","Axl","Baiken","Bedman?","Bridget","Chipp","Elphelt","Faust","Giovanna","Goldlewis","Happy Chaos","I-No","Jack-O'","Jam","Johnny","Ky","Leo","Lucy","May","Millia","Nagoriyuki","Potemkin","Queen Dizzy","Ramlethal","Robo-Ky","Sin","Slayer","Sol","Testament","Unika","Venom","Zato-1"],al:["Aang","Avatar State Aang","Azula","Bolin","Iroh","Katara","Korra","Kyoshi","Lin Beifong","Nightmare Korra","Ozai","Sokka","Tagah","Toph","Ty Lee","Zaheer","Zuko"],cotw:["Terry Bogard","Rock Howard","Mai Shiranui","Andy Bogard","Joe Higashi","Billy Kane","Blue Mary","Duck King","Kim Kaphwan","Kim Dong Hwan","Kim Jae Hoon","Hokutomaru","Hotaru Futaba","Gato","Tizoc","Marco Rodrigues","Preecha","B. Jenet","Kevin Rian","Kain R. Heinlein","Vox Reaper","Cristiano Ronaldo","Salvatore Ganacci","Ken Masters","Chun-Li","Mr. Big","Nightmare Geese","Wolfgang Krauser","Mr. Karate","Kenshiro","Rick Strowd","Manjiro \"Mikey\" Sano","Ken \"Draken\" Ryuguji","Laocorn Gaudeamus"],t8:["Alisa","Anna","Armor King","Asuka","Azucena","Bob","Bryan","Claudio","Clive","Devil Jin","Dragunov","Eddy","Fahkumram","Feng","Heihachi","Hwoarang","Jack-8","Jin","Jun","Kazuya","King","Kuma","Kunimitsu","Lars","Law","Lee","Leo","Leroy","Lidia","Lili","Miary Zo","Nina","Panda","Paul","Raven","Reina","Shaheen","Steve","Victor","Xiaoyu","Yoshimitsu","Zafina"],ssbu:["Mario","Donkey Kong","Link","Samus","Dark Samus","Yoshi","Kirby","Fox","Pikachu","Luigi","Ness","Captain Falcon","Jigglypuff","Peach","Daisy","Bowser","Ice Climbers","Sheik","Zelda","Dr. Mario","Pichu","Falco","Marth","Lucina","Young Link","Ganondorf","Mewtwo","Roy","Chrom","Mr. Game & Watch","Meta Knight","Pit","Dark Pit","Zero Suit Samus","Wario","Snake","Ike","Pokémon Trainer","Diddy Kong","Lucas","Sonic","King Dedede","Olimar","Lucario","R.O.B.","Toon Link","Wolf","Villager","Mega Man","Wii Fit Trainer","Rosalina & Luma","Little Mac","Greninja","Mii Fighter","Palutena","Pac-Man","Robin","Shulk","Bowser Jr.","Duck Hunt","Ryu","Ken","Cloud","Corrin","Bayonetta","Inkling","Ridley","Simon","Richter","King K. Rool","Isabelle","Incineroar","Piranha Plant","Joker","Hero","Banjo & Kazooie","Terry","Byleth","Min Min","Steve","Sephiroth","Pyra","Mythra","Kazuya","Sora"],mkxl:["Alien","Bo' Rai Cho","Cassie Cage","D'Vorah","Ermac","Erron Black","Ferra & Torr","Goro","Jacqui Briggs","Jason Voorhees","Jax","Johnny Cage","Kano","Kenshi","Kitana","Kotal Kahn","Kung Jin","Kung Lao","Leatherface","Liu Kang","Mileena","Predator","Quan Chi","Raiden","Reptile","Scorpion","Shinnok","Sonya Blade","Sub-Zero","Takeda Takahashi","Tanya","Tremor","Triborg"],gbvsr:["Gran","Djeeta","Katalina","Charlotta","Lancelot","Percival","Ladiva","Metera","Lowain","Ferry","Zeta","Vaseraga","Narmaya","Soriz","Zooey","Cagliostro","Yuel","Anre","Eustace","Seox","Vira","Anila","Siegfried","Grimnir","Nier","Beelzebub","Belial","Avatar Belial","Lucilius","2B","Vane","Beatrix","Versusia","Vikala","Sandalphon","Galleon","Wilnas","Meg","Ilsa","Id"],bbcf:["Amane Nishiki","Arakune","Azrael","Bang Shishigami","Bullet","Carl Clover","Celica A. Mercury","Es","Hakumen","Hazama","Hibiki Kohaku","Iron Tager","Izanami","Izayoi","Jin Kisaragi","Jubei","Kagura Mutsuki","Kokonoe","Lambda-11","Litchi Faye Ling","Mai Natsume","Makoto Nanaya","Mu-12","Naoto Kurogane","Nine the Phantom","Noel Vermillion","Nu-13","Platinum the Trinity","Rachel Alucard","Ragna the Bloodedge","Relius Clover","Susano'o","Taokaka","Tsubaki Yayoi","Valkenhayn R. Hellsing","Yuuki Terumi"],sf4:["Abel","Adon","Akuma","Balrog","Blanka","C. Viper","Cammy","Chun-Li","Cody","Dan","Decapre","Dee Jay","Dhalsim","Dudley","E. Honda","El Fuerte","Elena","Evil Ryu","Fei Long","Gen","Gouken","Guile","Guy","Hakan","Hugo","Ibuki","Juri","Ken","M. Bison","Makoto","Oni","Poison","Rolento","Rose","Rufus","Ryu","Sagat","Sakura","Seth","T. Hawk","Vega","Yang","Yun","Zangief"]},b={mvc2:{name:"Marvel vs. Capcom 2",short:"MvC2",aliases:["mvc2","marvel vs capcom 2","marvel versus capcom 2","marvel vs. capcom 2"],keys:["LP","MP","HP","LK","MK","HK","2LP","2MP","2HP","2LK","2MK","2HK","j.LP","j.MP","j.HP","j.LK","j.MK","j.HK","236","214","623","66","44","SJ","A1","A2"],meter:"Hyper Combo Gauge",meters:["Meterless","1 barre","2 barres","3 barres","4 barres","5 barres"],assists:["Sans assist","Assist A","Assist B","Deux assists"],dna:["Snapback","Unfly","THC","Guard break"],wiki:"https://wiki.supercombo.gg/w/Marvel_vs_Capcom_2"},umvc3:{name:"Ultimate Marvel vs. Capcom 3",short:"UMvC3",aliases:["umvc3","ultimate marvel vs capcom 3","ultimate marvel versus capcom 3","marvel vs capcom 3"],keys:["L","M","H","S","2L","2M","2H","5L","5M","5H","5S","2S","j.L","j.M","j.H","j.S","j.2H","236","214","623","66","44","SJ","A1","A2","5[H]","2[H]","j.[H]"],meter:"Hyper Combo Gauge",meters:["Meterless","1 barre","2 barres","3 barres","4 barres","5 barres"],assists:["Sans assist","Assist 1","Assist 2","Deux assists"],special:["X-Factor",["Sans X-Factor","Avec X-Factor"]],extras:[["xf","Niveau X-Factor",["Non précisé","Lv.1","Lv.2","Lv.3"]]],dna:["TAC","DHC","OTG","Wall bounce"],wiki:"https://wiki.supercombo.gg/w/Ultimate_Marvel_vs_Capcom_3"},tokon:{name:"Marvel Tōkon: Fighting Souls",short:"Tōkon",aliases:["tokon","marvel tokon","marvel tōkon","marvel token","fighting souls","mtfs"],keys:["L","M","H","S","U","5L","5M","5H","5S","2L","2M","2H","2S","j.L","j.M","j.H","j.S","j.2H","236","214","623","22","66","44","A","WS","Tag","dash","5[H]","2[H]","j.[H]"],meter:"Jauge de super",meters:["Meterless","1 niveau","2 niveaux","3 niveaux"],assists:["Sans assist","Avec assist","Extension d’équipe"],dna:["Tag","Assist"],wiki:"https://www.dustloop.com/w/MTFS"},"2xko":{name:"2XKO",short:"2XKO",aliases:["2xko","xko","2 xko"],keys:["L","M","H","S1","S2","5L","5M","5H","5[H]","2L","2M","2H","2[H]","5S1","5S2","2S1","2S2","j.L","j.M","j.H","j.[H]","j.2H","j.S1","j.S2","j.XX","236","214","623","66","44","T","dash","Parry","Assist","Limit Strike","4S2","4[S2]","5[S1]","5[S2]","6[S2]","2[S2]","j.[S2]","4[S1]","236L","236M","236H"],meter:"Super Meter",meters:["Meterless","1 barre","2 barres","3 barres"],assists:["Sans assist","Avec assist","Assist avant","Assist arrière"],assistLabel:"Assist du partenaire",extras:[["fuse","Fuse",["Non précisé","2X Assist","Double Down","Freestyle","Juggernaut","Sidekick","Teamfight"]]],dna:["Handshake Tag","Tag Launcher","Fury","Limit Strike"],wiki:"https://wiki.play2xko.com/en-us/",special:["Break Meter",["Non précisé","Disponible","Indisponible"]]},dbfz:{name:"Dragon Ball FighterZ",short:"DBFZ",aliases:["dbfz","dragon ball fighterz","dragon ball fighters","dragon ball fighter","dragon ball fighter z"],keys:["L","M","H","S","5L","5M","5H","2L","2M","2H","j.L","j.M","j.H","j.2H","236","214","66","44","A1","A2","SD","DR","Vanish","5[H]","2[H]","j.[H]"],meter:"Ki Gauge",meters:["Meterless","1 barre","2 barres","3 barres","4 barres","5 barres","6 barres","7 barres"],assists:["Sans assist","Assist 1","Assist 2","Deux assists"],special:["Sparking!",["Sans Sparking!","Avec Sparking!"]],dna:["Vanish","Dragon Rush","Super Dash","Jump cancel","Sparking"],wiki:"https://www.dustloop.com/w/DBFZ"},sf6:{name:"Street Fighter 6",short:"SF6",aliases:["sf6","street fighter 6","streetfighter 6","street fighter vi"],keys:["5LP","5MP","5HP","5LK","5MK","5HK","2LP","2MP","2HP","2LK","2MK","2HK","j.LP","j.MP","j.HP","j.LK","j.MK","j.HK","236","214","623","41236","63214","22","66","44","[4]6","[2]8","OD","DR","DRC","DI","DP","PDR","SA1","SA2","SA3","CA","Throw","PC","CH"],meter:"Super Art",meters:["Sans super","1 barre","2 barres","3 barres"],assists:["—"],noAssist:!0,extras:[["drive","Drive Gauge requise",["Non précisé","0 barre","1 barre","2 barres","3 barres","4 barres","5 barres","6 barres"]],["starter","Début du combo",["Normal","Counter Hit","Punish Counter","Drive Impact","Drive Rush"]],["controls","Contrôles",["Classique","Moderne"]],["burnout","Burnout",["Aucun","Adversaire en Burnout","Moi en Burnout"]]],dna:["Drive Rush","Juggle","Cross-up","Throw loop"],wiki:"https://wiki.supercombo.gg/w/Street_Fighter_6"},ggst:{name:"Guilty Gear -Strive-",short:"GGST",aliases:["ggst","guilty gear strive","guilty gear -strive-","strive","guilty gear"],keys:["5P","5K","c.S","f.S","5H","5D","6P","6K","6S","6H","2P","2K","2S","2H","2D","j.P","j.K","j.S","j.H","j.D","j.2K","236","214","623","41236","63214","22","66","44","236236","632146","WA","RRC","PRC","YRC","BRC","dc","jc","IAD","CH"],meter:"Tension",meters:["0 %","50 %","100 %"],assists:["—"],noAssist:!0,extras:[["rc","Roman Cancel",["Aucun","RRC (rouge)","PRC (violet)","YRC (jaune)","BRC (bleu)"]],["counter","Début du combo",["Normal","Counter Hit","Counter Hit (large)"]],["burst","Burst",["Non précisé","Burst disponible","Psych Burst utilisé"]],["wall","Mur",["Non précisé","Wall Break","Positive Bonus actif"]]],dna:["Wall break","Wall stick","Wild Assault","Dash cancel","Jump cancel"],wiki:"https://www.dustloop.com/w/GGST"},al:{name:"Avatar Legends: The Fighting Game",short:"AL",aliases:["al","avatar","avatar legends","légende","legende","avatar legends the fighting game"],keys:["5A","5B","5C","5F","2A","2B","2C","j.A","j.B","j.C","6C","236A","236B","236C","214A","214B","214C","66","44","EX","Super","Final","Throw","Flow","FS","FC","CH"],meter:"Chakra",meters:["0","1","2","3","4","5","7"],assists:["Support 1","Support 2","Support 3"],assistLabel:"Support",extras:[["flow","Flow",["Non précisé","Flow Cancel","Flow Stance","Unbalanced"]],["chi","Chi",["Non précisé","Chi OK","Chi bas","Chi vide"]],["support","Support",["Non précisé","Support 1","Support 2","Support 3"]]],dna:["Flow cancel","Unbalanced","Chakra Art","Air mobility","Support"],wiki:"https://wiki.supercombo.gg/w/Avatar_Legends"},cotw:{name:"Fatal Fury: City of the Wolves",short:"CotW",aliases:["cotw","fatal fury","city of the wolves","garou","fatal fury city of the wolves"],keys:["A","B","C","D","5A","5B","5C","5D","2A","2B","2C","2D","j.A","j.B","j.C","j.D","cl.A","f.A","236","214","623","22","66","44","AB","CD","REV","JD"],meter:"REV Gauge",meters:["Meterless","1 barre","2 barres"],assists:["—"],noAssist:!0,extras:[["rev","REV Blow",["Non précisé","REV disponible","REV utilisé"]]],dna:["Jump cancel","Super cancel","Corner"],wiki:"https://dreamcancel.com/wiki/Fatal_Fury:_City_of_the_Wolves"},t8:{name:"Tekken 8",short:"T8",aliases:["t8","tekken 8","tekken"],keys:["1","2","3","4","1+2","3+4","1+4","2+3","1+3","2+4","n","f","d","b","u","d/f","d/b","u/f","u/b","FC","SS","WS","WR","iWS","HD","CH"],meter:"Heat",meters:["Meterless","Heat"],assists:["—"],noAssist:!0,extras:[["heat","Heat",["Non précisé","Heat Dash","Heat Burst","Heat Smash"]],["starter","Début du combo",["Normal","Counter Hit","While Standing","While Running","Punish"]]],dna:["Heat Dash","Wall combo","Floor break","Tornado"],wiki:"https://wavu.wiki/t/Tekken_8"},ssbu:{name:"Super Smash Bros. Ultimate",short:"Smash",aliases:["ssbu","smash","smash ultimate","smash bros","super smash bros"],keys:["A","tilt","utilt","ftilt","dtilt","smash","fsmash","usmash","dsmash","B","grab","shield","jump","dodge","nair","fair","bair","dair","uair"],meter:"—",meters:["Meterless"],assists:["—"],noAssist:!0,extras:[["percent","Pourcentage",["Non précisé","0–50 %","50–100 %","100–150 %","150 %+"]]],dna:["Kill confirm","DI mix","Platform","Edgeguard"],wiki:"https://www.ssbwiki.com/Super_Smash_Bros._Ultimate"},mkxl:{name:"Mortal Kombat XL",short:"MKXL",aliases:["mkxl","mortal kombat xl","mortal kombat x","mkx","mk 10"],keys:["1","2","3","4","Throw","Block","Interact","Stance","236","214","623","66","44"],meter:"Jauge d’améliorations",meters:["Meterless","1 barre","2 barres","3 barres"],assists:["—"],noAssist:!0,dna:["Kombo","X-Ray","Air kombo"],wiki:"https://wiki.supercombo.gg/w/Mortal_Kombat_X"},gbvsr:{name:"Granblue Fantasy Versus: Rising",short:"GBVSR",aliases:["gbvsr","gbvs","granblue","grand blue","grandblue versus rising","granblue fantasy versus rising"],keys:["L","M","H","U","S","5L","5M","5H","2L","2M","2H","j.L","j.M","j.H","236","214","623","22","66","44","Throw","dash","5[H]","2[H]","j.[H]"],meter:"Jauge Skybound",meters:["Meterless","1 barre","2 barres","50%","100%"],assists:["—"],noAssist:!0,dna:["Brave Counter","Skybound Art","Super Skybound"],wiki:"https://www.dustloop.com/w/GBVSR"},bbcf:{name:"BlazBlue: Central Fiction",short:"BBCF",aliases:["bbcf","blazblue","blazblue central fiction","central fiction"],keys:["A","B","C","D","5A","5B","5C","5D","2A","2B","2C","2D","j.A","j.B","j.C","j.D","236","214","623","22","66","44","A+B","B+C","A+B+C"],meter:"Heat Gauge",meters:["Meterless","25%","50%","75%","100%"],assists:["—"],noAssist:!0,dna:["Rapid Cancel","Overdrive","Distortion"],wiki:"https://www.dustloop.com/w/BBCF"},sf4:{name:"Ultra Street Fighter IV",short:"USFIV",aliases:["sf4","street fighter 4","street fighter iv","ultra street fighter iv","usf4","usfiv"],keys:["LP","MP","HP","LK","MK","HK","2LP","2MP","2HP","2LK","2MK","2HK","j.LP","j.MP","j.HP","j.LK","j.MK","j.HK","236","214","623","66","44","Throw","Focus"],meter:"Super Combo Gauge",meters:["Meterless","1 barre","2 barres","3 barres","Ultra"],assists:["—"],noAssist:!0,dna:["FADC","Ultra","Red focus"],wiki:"https://wiki.supercombo.gg/w/Ultra_Street_Fighter_IV"}},z=["Débutant","Intermédiaire","Avancé"],Be=["Mid screen","Near corner","Corner","Anywhere"],a=e=>document.getElementById(e),Ne={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},l=e=>String(e??"").replace(/[&<>"']/g,t=>Ne[t]),w=e=>String(e||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim(),Se=()=>"c-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,9),y=(e,t,n=t+"s")=>`${e} ${cdxT(e>1?n:t)}`;const charLabel=n=>{const p=(window.CDX_CHARS||{})[window.cdxLang];return p&&p[n]||n};const charBlob=n=>{const c=window.CDX_CHARS||{};return w([n,(c.fr||{})[n],(c.es||{})[n]].filter(Boolean).join(" "))};function k(e,t,n){e.innerHTML=t.map(([s,r])=>`<option value="${l(s)}">${l(r)}</option>`).join(""),n!=null&&t.some(s=>s[0]===n)&&(e.value=n)}const TOK_BTN=/^(?:[cf]\.)?[1-9]?(?:[LMHSUPKD]|[LMH][PK]|S[12])$/i;const capBtn=s=>s.replace(/^([cf]\.)?(.+)$/i,(m,p,r)=>(p||"").toLowerCase()+r.toUpperCase());function normTok(e){const t=String(e??"").replace(/\s+/g," ").trim();if(!t)return[];let n=t.match(/^(?:delayed|delay|dl)(?![a-ik-z])[.\s]*(.*)$/i);if(n)return["dl",...(n[1]?n[1].split(" ").flatMap(normTok):[])];const p=t.split(" ");if(p.length>1&&p.every(x=>/^(?:delayed|delay|dl|j(?:ump)?\.?\S*|[cf]\.\S+|[1-9\[]\S*)$/i.test(x)))return p.flatMap(normTok);if(n=t.match(/^((?:j(?:ump)?[.\s]*)+)(.*)$/i)){const s=n[2].trim();if(!s)return["j"];if(TOK_BTN.test(s))return["j."+s.toUpperCase()]}return[TOK_BTN.test(t)?capBtn(t):t]}const normTokens=e=>(e||[]).flatMap(normTok),joinTokens=e=>(e||[]).reduce((t,n,s,r)=>t+(s?r[s-1]==="dl"?" ":" > ":"")+n,"");function migrateTokens(){let e=!1;for(const t of d.combos){const peeled=peelCombo(joinTokens(t.tokens));const n=peeled.tokens.length?peeled.tokens:normTokens(t.tokens);n.join("\0")!==(t.tokens||[]).join("\0")&&(t.tokens=n,e=!0);if(!t.desc){const dsc=peeled.desc||comboDescOf(t);if(dsc){t.desc=dsc;e=!0}}if(t.notes&&/Texte\s*:/.test(t.notes)){t.notes="Séquence importée à vérifier en lab.";e=!0}if(t.game&&t.tokens)harvestKeys(t.game,t.tokens)}for(const[t,n]of Object.entries(d.keys)){const s=[...new Set(normTokens(n))].filter(r=>r!=="dl"&&!(b[t]&&b[t].keys.includes(r)));s.join("\0")!==(n||[]).join("\0")&&(d.keys[t]=s,e=!0)}return e}const DNA_BASE=["Sol","Aérien","Rejump","Loop","Reset","Infini","Side switch","Extension assist","Super cancel","Spécifique perso"],dnaOf=g=>[...new Set([...DNA_BASE,...(b[g]&&b[g].dna||[])])].filter(t=>!(b[g]&&b[g].noAssist&&t==="Extension assist")),extraChips=e=>(b[e.game]&&b[e.game].extras||[]).map(([k,n,s])=>{const v=e.extra&&e.extra[k];return v&&v!==s[0]?`${cdxT(n)} : ${cdxT(v)}`:null}).filter(Boolean),dnaHtml=e=>(e.dna||[]).map(t=>`<span class="chip dna">${l(cdxT(t))}</span>`).join("");function renderExtras(e){const t=o.draft,n=b[t.game];t.extra={...t.extra||{}},t.dna=(t.dna||[]).filter(s=>dnaOf(t.game).includes(s));a("extrasWrap").innerHTML=(n.extras||[]).map(([s,r,i])=>`<div class="field"><label for="ex-${s}">${l(cdxT(r))}</label><select id="ex-${s}" data-extra="${s}">${i.map(c=>`<option value="${l(c)}"${!e&&t.extra[s]===c?" selected":""}>${l(cdxT(c))}</option>`).join("")}</select></div>`).join(""),a("dnaWrap").innerHTML=dnaOf(t.game).map(s=>`<button type="button" class="chip-toggle" data-dna="${l(s)}" aria-pressed="${t.dna.includes(s)}">${l(cdxT(s))}</button>`).join(""),a("editAssist").closest(".field").classList.toggle("hidden",!!n.noAssist)}function renderDnaFilter(){const e=[...new Set(q(o.game,o.char).flatMap(t=>t.dna||[]))];for(const t of[...o.dnaFilter])e.includes(t)||o.dnaFilter.delete(t);a("dnaFilter").innerHTML=e.length?`<span class="dna-label">${cdxT("Combo DNA")}</span>`+e.map(t=>`<button class="chip-toggle" data-dnaf="${l(t)}" aria-pressed="${o.dnaFilter.has(t)}">${l(t)}</button>`).join("")+(o.dnaFilter.size?'<button class="tiny" data-dnaf-clear>Tout afficher</button>':""):""}const PORTRAIT_TAG={mvc2:"MvC2",umvc3:"UMvC3",tokon:"Tokon","2xko":"2XKO",dbfz:"DBFZ",sf6:"SF6",ggst:"GGST",al:"AL",cotw:"CotW",t8:"T8",ssbu:"SSBU",mkxl:"MKXL",gbvsr:"GBVSR",bbcf:"BBCF",sf4:"SF4"},SSBU_SLUG={"Mario":"mario","Donkey Kong":"donkey_kong","Link":"link","Samus":"samus","Dark Samus":"dark_samus","Yoshi":"yoshi","Kirby":"kirby","Fox":"fox","Pikachu":"pikachu","Luigi":"luigi","Ness":"ness","Captain Falcon":"captain_falcon","Jigglypuff":"jigglypuff","Peach":"peach","Daisy":"daisy","Bowser":"bowser","Ice Climbers":"ice_climbers","Sheik":"sheik","Zelda":"zelda","Dr. Mario":"dr_mario","Pichu":"pichu","Falco":"falco","Marth":"marth","Lucina":"lucina","Young Link":"young_link","Ganondorf":"ganondorf","Mewtwo":"mewtwo","Roy":"roy","Chrom":"chrom","Mr. Game & Watch":"mr_game_and_watch","Meta Knight":"meta_knight","Pit":"pit","Dark Pit":"dark_pit","Zero Suit Samus":"zero_suit_samus","Wario":"wario","Snake":"snake","Ike":"ike","Pokémon Trainer":"pokemon_trainer","Diddy Kong":"diddy_kong","Lucas":"lucas","Sonic":"sonic","King Dedede":"king_dedede","Olimar":"olimar","Lucario":"lucario","R.O.B.":"rob","Toon Link":"toon_link","Wolf":"wolf","Villager":"villager","Mega Man":"mega_man","Wii Fit Trainer":"wii_fit_trainer","Rosalina & Luma":"rosalina_and_luma","Little Mac":"little_mac","Greninja":"greninja","Mii Fighter":"mii_fighter","Palutena":"palutena","Pac-Man":"pac_man","Robin":"robin","Shulk":"shulk","Bowser Jr.":"bowser_jr","Duck Hunt":"duck_hunt","Ryu":"ryu","Ken":"ken","Cloud":"cloud","Corrin":"corrin","Bayonetta":"bayonetta","Inkling":"inkling","Ridley":"ridley","Simon":"simon","Richter":"richter","King K. Rool":"king_k_rool","Isabelle":"shizue","Incineroar":"gaogaen","Piranha Plant":"packun_flower","Joker":"joker","Hero":"dq_hero","Banjo & Kazooie":"banjo_and_kazooie","Terry":"terry","Byleth":"byleth","Min Min":"minmin","Steve":"steve","Sephiroth":"sephiroth","Pyra":"homura","Mythra":"hikari","Kazuya":"kazuya","Sora":"sora"},PORTRAIT_WIKI={cotw:{api:"https://dreamcancel.com/w/api.php",page:c=>({"Manjiro \"Mikey\" Sano":"Fatal Fury: City of the Wolves/Manjiro Mikey Sano","Ken \"Draken\" Ryuguji":"Fatal Fury: City of the Wolves/Ken Draken Ryuguji"}[c]||("Fatal Fury: City of the Wolves/"+c))},t8:{api:"https://wavu.wiki/w/api.php",page:c=>c}},cdxPortraitCache={},portraitSrc=(e,t)=>{const n=PORTRAIT_TAG[e]||e,s=String(t).replace(/[<>:"/\\|?*]/g,"").replace(/[. ]+$/,"");const emb=window.CDX_PORTRAITS?.[`${n}/${s} - ${n}.png`];if(emb)return emb;if(e==="ssbu"&&SSBU_SLUG[t])return"https://www.smashbros.com/assets_v2/img/fighter/"+SSBU_SLUG[t]+"/main.png";return`portraits/${encodeURIComponent(n)}/${encodeURIComponent(`${s} - ${n}.png`)}`},gameLogo=e=>{const t=window.CDX_LOGOS?.[e];return t?`<img class="game-logo" src="${t}" alt="${l(b[e]?.name||e)}" title="${l(b[e]?.name||e)}">`:""},syncLogos=()=>{for(const[e,t]of[["peopleLogo",o.game],["ftLogo",o.game]]){const n=a(e);n&&(n.innerHTML=gameLogo(t))}},portrait=(e,t,n="sm")=>`<span class="portrait ${n}" aria-hidden="true"><img src="${l(portraitSrc(e,t))}" alt="" loading="lazy" referrerpolicy="no-referrer" data-cdx-game="${l(e)}" data-cdx-char="${l(t)}" onerror="window.cdxPortraitErr&&window.cdxPortraitErr(this)"></span>`,tokCls=(e,g=(o.draft&&o.tab==="create"?o.draft.game:o.game))=>{if(e==="dl")return" mod";const t=String(e).replace(/^j\./i,"").replace(/^[cf]\./i,"").replace(/^[1-9]+/,"").replace(/[\[\]]/g,"").toUpperCase();if(g==="ggst"){const c={P:" kP",K:" kK",S:" kGS",H:" kH",HS:" kH",D:" kD"}[t];if(c)return c}if(g==="al"||g==="cotw"){const c={A:" kL",B:" kM",C:" kH",D:" kS",F:" kS",AB:" kL",CD:" kH",REV:" kS"}[t];if(c)return c}if(g==="t8"){const btn=String(e).replace(/^(?:n|[ubf]|d(?:\/[fb])?|u\/[fb])\+/,"");const c={"1":" kL","2":" kM","3":" kH","4":" kS","1+2":" kL","3+4":" kS","1+4":" kH","2+3":" kM","1+3":" kL","2+4":" kM"}[btn];if(c)return c}if(g==="ssbu"){const c={A:" kL",B:" kH",SMASH:" kS",TILT:" kM",GRAB:" kS"}[t];if(c)return c}return/^(L|LP|LK)$/.test(t)?" kL":/^(M|MP|MK)$/.test(t)?" kM":/^(H|HP|HK)$/.test(t)?" kH":/^(S|S1|S2|U|A1|A2|T|PP|KK)$/.test(t)?" kS":""};const DIRN={1:"bas-arrière",2:"bas",3:"bas-avant",4:"arrière",5:"neutre",6:"avant",7:"haut-arrière",8:"haut",9:"haut-avant"};const MECH={dash:"Dash",dl:"Delayed — retarde la commande suivante",jc:"Jump cancel — annule le coup en saut",dc:"Dash cancel — annule le coup en dash",iad:"Instant Air Dash — dash aérien immédiat",sj:"Super jump — super saut",sjc:"Super jump cancel",ch:"Counter-hit — coup en contre",pc:"Punish Counter",od:"Overdrive",dr:"Drive Rush / Dragon Rush",drc:"Drive Rush Cancel",di:"Drive Impact",dp:"Drive Parry / Dragon Punch",pdr:"Perfect Drive Rush",sa1:"Super Art 1",sa2:"Super Art 2",sa3:"Super Art 3",ca:"Critical Art",throw:"Chope",wa:"Wild Assault",rrc:"Red Roman Cancel",prc:"Purple Roman Cancel",yrc:"Yellow Roman Cancel",brc:"Blue Roman Cancel",sd:"Super Dash",tag:"Tag — changement de perso",ws:"While Standing — attaque au lever",flow:"Flow — stance",fs:"Flow Stance",fc:"Flow Cancel",ex:"EX — version renforcée",super:"Super",final:"Final / Level 3",t:"Tag / Handshake",a1:"Assist 1",a2:"Assist 2",xx:"Super (deux attaques)",assist:"Assist",wr:"While Running — attaque en course",n:"Neutre (n)",fc:"Full Crouch — accroupi complet",ss:"Sidestep — pas de côté",iws:"Instant While Standing",hd:"Heat Dash",jd:"Just Defend",vanish:"Vanish","d/f":"Bas-avant (d/f)","d/b":"Bas-arrière (d/b)","u/f":"Haut-avant (u/f)","u/b":"Haut-arrière (u/b)",nair:"Neutral air",fair:"Forward air",bair:"Back air",dair:"Down air",uair:"Up air",tilt:"Tilt",smash:"Smash",grab:"Grab",shield:"Shield",dodge:"Esquive",rev:"REV Blow","limit strike":"Limit Strike — fin de combo en super (2XKO)"};async function cdxResolvePortrait(game,char){const key=game+":"+char;if(cdxPortraitCache[key])return Promise.resolve(cdxPortraitCache[key]);const slug=String(char||"").replace(/ /g,"_");const files=game==="t8"?{api:"https://wavu.wiki/w/api.php",names:[slug+"_portrait.png",slug+"T8.png",slug+".portrait.png"]}:game==="cotw"?{api:"https://dreamcancel.com/w/api.php",names:(()=>{const tag=slug.toUpperCase().replace(/[^A-Z0-9]+/g,"_");const first=tag.split("_")[0];const names=["COTW_"+first+"_Profile.png","COTW_"+tag+"_Profile.png","FF_COTW_"+first+"_Icon.png","FF_COTW_"+slug+"_Icon.png"];if(/laocorn/i.test(char))names.push("FF_COTW_Laocorn_Icon.png");return names})()}:null;if(files){try{const u=new URL(files.api);u.searchParams.set("action","query");u.searchParams.set("titles",files.names.map(f=>"File:"+f).join("|"));u.searchParams.set("prop","imageinfo");u.searchParams.set("iiprop","url");u.searchParams.set("format","json");u.searchParams.set("origin","*");u.searchParams.set("formatversion","2");const j=await fetch(u,{cache:"no-store"}).then(r=>r.json());for(const p of j.query&&j.query.pages||[]){const url=p.imageinfo&&p.imageinfo[0]&&p.imageinfo[0].url;if(url)return cdxPortraitCache[key]=url}}catch{}}const src=PORTRAIT_WIKI[game];if(!src)return"";try{const u=new URL(src.api);u.searchParams.set("action","parse");u.searchParams.set("page",src.page(char));u.searchParams.set("prop","text|images");u.searchParams.set("format","json");u.searchParams.set("origin","*");u.searchParams.set("formatversion","2");const j=await fetch(u,{cache:"no-store"}).then(r=>r.json());const images=j.parse&&j.parse.images||[];const pick=images.find(f=>/portrait|T8\.png|Profile/i.test(f)&&!/Transparent/i.test(f));if(pick&&files){const u2=new URL(src.api);u2.searchParams.set("action","query");u2.searchParams.set("titles","File:"+pick);u2.searchParams.set("prop","imageinfo");u2.searchParams.set("iiprop","url");u2.searchParams.set("format","json");u2.searchParams.set("origin","*");u2.searchParams.set("formatversion","2");const j2=await fetch(u2,{cache:"no-store"}).then(r=>r.json());const p=(j2.query&&j2.query.pages||[])[0];const url=p&&p.imageinfo&&p.imageinfo[0]&&p.imageinfo[0].url;if(url)return cdxPortraitCache[key]=url}const html=j.parse&&j.parse.text||"";const srcs=[...String(html).matchAll(/src="([^"]+\.(?:png|jpg|jpeg|webp)[^"]*)"/gi)].map(m=>m[1]).filter(s=>!/Transparent/i.test(s));if(!srcs.length)return"";let out=srcs[0].replace(/\/thumb\/(.+?)\/\d+px-[^/]+$/,"/$1");if(out.startsWith("//"))out="https:"+out;else if(out.startsWith("/"))out=new URL(src.api).origin+out;return cdxPortraitCache[key]=out}catch{return""}}window.cdxPortraitErr=function(img){if(!img)return;if(img.naturalWidth){img.style.display="";return}const n=Number(img.dataset.cdxTried||0);if(n>=2){img.style.display="none";return}img.dataset.cdxTried=String(n+1);cdxResolvePortrait(img.getAttribute("data-cdx-game"),img.getAttribute("data-cdx-char")).then(src=>{if(img.naturalWidth){img.style.display="";return}if(src){img.style.display="";if(src!==img.src)img.src=src}else img.style.display="none"})};function hydratePortraits(){const imgs=[...document.querySelectorAll('img[data-cdx-game="t8"],img[data-cdx-game="cotw"]')].filter(img=>!img.dataset.cdxHydra);imgs.forEach(img=>img.dataset.cdxHydra="1");let n=0;const run=()=>{const img=imgs[n++];if(!img)return;cdxResolvePortrait(img.getAttribute("data-cdx-game"),img.getAttribute("data-cdx-char")).then(src=>{if(src){img.src=src;img.style.display=""}}).finally(run)};run();run();run()}function tokBtnName(btn,g){const u=String(btn||"").toUpperCase();if(!u)return"";let nm=null;if(g==="al"||g==="cotw"){const a={A:"Léger (A)",B:"Moyen (B)",C:"Fort (C)",D:"Heavy (D)",F:"Flow",AB:"A+B",CD:"C+D",REV:"REV Blow"};if(a[u])nm=a[u]}else if(g==="t8"){const a={"1":"Poing gauche (1)","2":"Poing droit (2)","3":"Pied gauche (3)","4":"Pied droit (4)","1+2":"Deux poings","3+4":"Deux pieds","1+4":"Poing gauche + pied droit","2+3":"Poing droit + pied gauche","1+3":"Chope (1+3)","2+4":"Chope (2+4)"};if(a[u])nm=a[u]}else if(g==="ssbu"){const a={A:"Attaque (A)",B:"Spécial (B)",TILT:"Tilt",SMASH:"Smash",GRAB:"Grab",SHIELD:"Shield",JUMP:"Saut",DODGE:"Esquive"};if(a[u])nm=a[u]}else if((g==="tokon"||g==="mvc2"||g==="umvc3"||g==="dbfz")&&u==="A")nm="Assist";else if(g==="bbcf"){const a={A:"Léger (A)",B:"Moyen (B)",C:"Fort (C)",D:"Heavy (D)","A+B":"Barrier","B+C":"Chope","A+B+C":"Rapid Cancel"};if(a[u]||a[btn])nm=a[u]||a[btn]}else if(g==="mkxl"){const a={"1":"Front Punch (1)","2":"Back Punch (2)","3":"Front Kick (3)","4":"Back Kick (4)",THROW:"Chope",BLOCK:"Garde",INTERACT:"Interact",STANCE:"Stance"};if(a[u])nm=a[u]}else if(g==="gbvsr"){const a={L:"Léger (Light)",M:"Moyen (Medium)",H:"Fort (Heavy)",U:"Unique",S:"Skill",THROW:"Chope"};if(a[u])nm=a[u]}else if(g==="2xko"&&u==="PARRY")nm="Parry";else if(g==="ggst"){const a={P:"Punch",K:"Kick",S:"Slash",HS:"Heavy Slash",H:"Heavy Slash",D:"Dust"};if(a[u])nm=a[u]}if(!nm)nm={LP:"Light Punch",MP:"Medium Punch",HP:"Heavy Punch",LK:"Light Kick",MK:"Medium Kick",HK:"Heavy Kick",L:"Léger (Light)",M:"Moyen (Medium)",H:"Fort (Heavy)",S:"Special",S1:"Special 1",S2:"Special 2",U:"Unique",PP:"Deux punches",KK:"Deux kicks",A1:"Assist 1",A2:"Assist 2",A:"Assist",T:"Tag",P:"Punch",K:"Kick",HS:"Heavy Slash",D:"Dust",F:"Flow",PARRY:"Parry",THROW:"Chope",BLOCK:"Garde",INTERACT:"Interact",STANCE:"Stance",FOCUS:"Focus"}[u];return nm?cdxT(nm):btn}function tokArrText(s){s=String(s||"").replace(/^j\./i,"");const ch=s.match(/^\[(\d)\](\d)/);if(ch)return(PAD_ARROWS[ch[1]]||"")+(PAD_ARROWS[ch[2]]||"");const d=s.match(/^[1-9]+/);return d?[...d[0]].map(n=>PAD_ARROWS[n]||"").join(""):""}function tokTip(s,g){s=String(s||"");const low=s.toLowerCase();if(MECH[low])return cdxT(MECH[low]);if(g==="t8"){const dirs={n:"Neutre (n)",f:"Avant (f)",d:"Bas (d)",b:"Arrière (b)",u:"Haut (u)"};if(dirs[low])return cdxT(dirs[low]);const glued=s.match(/^(?:n|[ubf]|d(?:\/[fb])?|u\/[fb])\+([1-4](?:\+[1-4])?)$/i);if(glued)return (tokTip(s.slice(0,s.lastIndexOf("+")),g)||s.split("+")[0])+" + "+(tokBtnName(glued[1],g)||glued[1]);return tokBtnName(s,g)||s}if(g==="ssbu"){return tokBtnName(s,g)||MECH[low]||s}if(/\s/.test(s)||s.length>20)return"";const air=/^j\./i.test(s);let rest=s.replace(/^j\./i,""),parts=[];if(air)parts.push(cdxT("Saut"));const hold=rest.match(/^(\d*)\[([A-Za-z0-9]+)\]$/);if(hold){if(hold[1])parts.push((PAD_ARROWS[hold[1]]||hold[1]).trim());parts.push(cdxT("Chargé"));rest=hold[2]}else{const ch=rest.match(/^\[(\d)\](\d)(.*)$/);if(ch){parts.push(((PAD_ARROWS[ch[1]]||"")+" "+(PAD_ARROWS[ch[2]]||"")).trim());rest=ch[3]}else{const d=rest.match(/^([1-9]+)(.*)$/);if(d){parts.push([...d[1]].map(n=>PAD_ARROWS[n]||"").join(" "));rest=d[2]}}}if(rest)parts.push(MECH[rest.toLowerCase()]||tokBtnName(rest,g));return parts.filter(Boolean).join(" · ")||s}function tokMark(s,g,extra=""){const tip=tokTip(s,g);return `<span class="token${tokCls(s,g)}${extra}"${tip?` data-tip="${l(tip)}"`:""}>${l(s)}</span>`}const K=(e,t="Séquence non renseignée",g)=>(e||[]).map(n=>tokMark(n,g)).join('<span class="seq-sep" aria-hidden="true">&gt;</span>')||`<span class="muted small">${l(cdxT(t))}</span>`;let fe;function g(e,t=!1,n=null){e=cdxT(e);const s=a("toast");clearTimeout(fe),s.innerHTML=`<div class="status ${t?"bad":"good"}" role="status"><span>${l(e)}</span>${n?`<button class="tiny" data-toast-action>${l(n.label)}</button>`:""}<button class="tiny ghost" data-toast-close aria-label="${cdxT("Fermer")}">✕</button></div>`,s.onclick=r=>{r.target.closest("[data-toast-action]")&&(n==null||n.run()),r.target.closest("[data-toast-action],[data-toast-close]")&&(s.innerHTML="")},fe=setTimeout(()=>s.innerHTML="",n?8e3:4500)}function te(e){try{const t=new URL(e),n=t.hostname.toLowerCase();let s=null;return n==="youtu.be"||n==="www.youtu.be"?s=t.pathname.split("/")[1]:["youtube.com","www.youtube.com","m.youtube.com","music.youtube.com","youtube-nocookie.com","www.youtube-nocookie.com"].includes(n)&&(t.pathname==="/watch"?s=t.searchParams.get("v"):/^\/(shorts|embed|live)\//.test(t.pathname)&&(s=t.pathname.split("/")[2])),s&&/^[a-zA-Z0-9_-]{11}$/.test(s)?s:null}catch{return null}}
function xid(e){const raw=String(e||"").trim();if(/^\d{5,}$/.test(raw))return raw;try{const t=new URL(raw),n=t.hostname.toLowerCase().replace(/^www\./,"").replace(/^mobile\./,"").replace(/^m\./,"");if(n!=="x.com"&&n!=="twitter.com")return null;const m=t.pathname.match(/\/status(?:es)?\/(\d{5,})/);return m?m[1]:null}catch{return null}}
function hasVid(e){return !!(te(e)||xid(e))}
function xApproved(id){return !!(id&&(d.xOk||[]).includes(String(id)))}
function xHref(e){const id=xid(e);return id?"https://x.com/i/status/"+id:String(e||"")}
function xPlayer(id,{elId,controls}={}){const idAttr=elId?` id="${l(elId)}"`:"";return `<video${idAttr} class="video-frame" data-x-id="${l(id)}" playsinline preload="metadata"${controls===!1?"":" controls"}></video>`}
function xBlock(id,compact,preview){if(!id)return"";const href=xHref(id),ok=xApproved(id);if(!ok&&!isAtelier()&&!preview)return `<div class="x-wait muted">${l(cdxT("x.wait"))}<p class="small"><a href="${l(href)}" target="_blank" rel="noopener noreferrer">${l(cdxT("x.open"))}</a></p></div>`;const accept=(!ok&&isAtelier())?`<p class="row" style="margin-top:8px"><button type="button" class="primary" data-x-ok="${l(id)}">${l(cdxT("x.accept"))}</button></p>`:"";return `<div class="x-player">${xPlayer(id)}${accept}${compact?"":`<p class="small muted"><a href="${l(href)}" target="_blank" rel="noopener noreferrer">${l(cdxT("x.open"))}</a></p>`}</div>`}
function hydrateXVideos(root){
  const box=root&&root.querySelectorAll?root:document;
  [...box.querySelectorAll("video[data-x-id]")].forEach(v=>{
    if(v.dataset.xOn||v.getAttribute("src"))return;
    v.dataset.xOn="1";
    const id=v.getAttribute("data-x-id");
    xMeta(id).then(meta=>{
      if(!v.isConnected)return;
      if(meta&&meta.mp4){v.src=meta.mp4;return}
      const wrap=document.createElement("div");
      wrap.className="status bad";
      wrap.innerHTML=l(cdxT("x.novid"))+`<p class="small"><a href="${l(xHref(id))}" target="_blank" rel="noopener noreferrer">${l(cdxT("x.open"))}</a></p>`;
      v.replaceWith(wrap);
    });
  });
}
function reportedCombos(){return(d.combos||[]).filter(c=>Array.isArray(c.reports)&&c.reports.length)}
function reviewRows(){return(d.combos||[]).filter(c=>c&&c.review==="pending")}
function needsReview(c){return!!c&&(!!c.imported||!!c.video||(!!c.origin&&c.origin!=="create"))}
const myReview=new Set,xAsked=new Set;
function xRequest(x){if(!x||isAtelier()||xApproved(x)||xAsked.has(x))return;xAsked.add(x);queueWiki({id:"xreq-"+x,game:"_req",character:"_req",tokens:[],video:xHref(x),reqGame:o.game,reqChar:o.char,createdAt:new Date().toISOString()});saveWikiLive()}
function markReview(c){if(c&&!isAtelier()&&!L(c.id)&&needsReview(c)){c.review="pending";myReview.add(c.id)}return c}
function labRequests(){return(d.combos||[]).filter(c=>labState(c)==="pending")}
function editRequests(){return(d.combos||[]).filter(c=>c&&c.editReq&&c.editReq.patch&&typeof c.editReq.patch==="object"&&Object.keys(c.editReq.patch).length)}
function publishQuiet(list){const rows=queueWiki(list);rows.forEach(upsertCombo);return saveWikiLive()}
function pendingXRows(){const seen=new Set(),rows=[];for(const c of d.combos||[]){const id=xid(c.video);if(!id||xApproved(id)||seen.has(id)||c.review==="pending")continue;seen.add(id);rows.push({id,combo:c,href:xHref(c.video),name:c.name||id,game:c.game,char:c.character})}for(const r of d.xReqs||[]){if(xApproved(r.id)||seen.has(r.id))continue;seen.add(r.id);rows.push({id:r.id,combo:{id:r.req,name:"Replay Analyzer",game:r.game,character:r.character||""},href:xHref(r.id),name:"Replay Analyzer",game:r.game,char:r.character})}return rows}
async function Fe(e){try{return await navigator.clipboard.writeText(e),!0}catch{const t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select();const n=document.execCommand("copy");return t.remove(),n}}
const GUESS_PRIO=["sf6","t8","ggst","2xko","tokon","dbfz","gbvsr","cotw","al","bbcf","umvc3","mvc2","sf4","mkxl","ssbu"];
const GUESS_SHORT=new Set(["vi","ky","jp","2b"]);
const GUESS_STOP=new Set(["black","doctor","captain","iron","green","ghost","star","spider","silver","super","king","lord","the","omega","dark","shin","young","evil","true","great","mister","miss","lady","master","kid","big","little"]);
function guessFromTitle(title){
  const blob=" "+w(title)+" ";
  let bestG=null,bestGS=0;
  for(const[game,S] of Object.entries(b)){
    let sc=0;
    for(const al of S.aliases||[]) if(al&&blob.includes(" "+w(al)+" ")) sc+=3;
    if(S.name&&blob.includes(" "+w(S.name)+" ")) sc+=5;
    if(S.short&&w(S.short).length>=3&&blob.includes(" "+w(S.short)+" ")) sc+=4;
    if(sc>bestGS){bestGS=sc;bestG=game}
  }
  const has=s=>blob.includes(" "+s+" ");
  const hits=[];
  for(const[game,chars] of Object.entries(ke)){
    const names=chars.map(w);
    chars.forEach((v,i)=>{
      const n=names[i];
      if(!n||(n.length<3&&!GUESS_SHORT.has(n)))return;
      const parts=n.split(" ");
      if(has(n)||(parts.length>1&&(has(parts.join(""))||parts.every(p=>p.length>=3&&has(p))))){hits.push({game,char:v,strong:1,score:n.length+10});return}
      if(parts.length<2)return;
      const word=[parts[0],parts[parts.length-1]].find(p=>p.length>=4&&!GUESS_STOP.has(p)&&has(p)&&names.filter(m=>m.split(" ").includes(p)).length===1);
      if(word)hits.push({game,char:v,strong:0,score:word.length});
    });
  }
  if(!hits.length)return{game:bestGS>0?bestG:null,char:null,chars:[]};
  let game=bestGS>0?bestG:null;
  if(!game){
    const rank={};
    for(const h of hits){const r=rank[h.game]||(rank[h.game]={strong:0,score:0});r.strong+=h.strong;r.score+=h.score}
    const prio=g=>{const i=GUESS_PRIO.indexOf(g);return i<0?99:i};
    game=Object.keys(rank).sort((x,y)=>rank[y].strong-rank[x].strong||rank[y].score-rank[x].score||prio(x)-prio(y))[0];
  }
  const chars=[...new Set(hits.filter(h=>h.game===game).sort((x,y)=>y.score-x.score).map(h=>h.char))];
  return{game,char:chars[0]||null,chars};
}
async function ytTitleOf(id){
  try{const j=await bt("https://www.youtube.com/oembed",{url:"https://www.youtube.com/watch?v="+id},6000);if(j&&j.title)return String(j.title)}catch{}
  try{const r=await fetch("https://www.youtube.com/oembed?url="+encodeURIComponent("https://www.youtube.com/watch?v="+id)+"&format=json");if(r.ok){const j=await r.json();if(j&&j.title)return String(j.title)}}catch{}
  return"";
}
async function applyYtGuess(id,{fillImport}={}){
  const title=await ytTitleOf(id);
  if(!title)return null;
  const info=guessFromTitle(title);
  if(info.game){
    o.game=info.game;
    if(fillImport&&a("importGame")){a("importGame").value=info.game;me(info.game,info.char||void 0)}
  }
  if(info.char){
    o.char=info.char;
    if(fillImport&&a("importChar")&&info.game)a("importChar").value=info.char;
  }
  return info;
}
const xMetaCache={};
function xPickMp4(node){
  if(!node)return"";
  if(typeof node==="string")return/\.mp4(\?|$)/i.test(node)?node:"";
  const bag=[].concat(node.variants||[],(node.video_info&&node.video_info.variants)||[]);
  const mp4s=bag.filter(x=>x&&/mp4/i.test(x.content_type||x.type||x.url||"")).sort((a,b)=>(b.bitrate||0)-(a.bitrate||0));
  if(mp4s[0]&&mp4s[0].url)return mp4s[0].url;
  const u=node.url||node.src||"";
  return/\.mp4(\?|$)/i.test(u)?u:"";
}
async function xMeta(id){
  id=String(id||"");
  if(!id)return null;
  if(Object.prototype.hasOwnProperty.call(xMetaCache,id))return xMetaCache[id];
  try{
    const r=await fetch("https://api.fxtwitter.com/status/"+encodeURIComponent(id),{cache:"no-store"});
    if(!r.ok)return xMetaCache[id]=null;
    const j=await r.json();
    const tw=j.tweet||j;
    const media=tw.media||{};
    const videos=[].concat(media.videos||[],media.video?[media.video]:[],media.all||[],tw.video?[tw.video]:[]);
    let mp4="",dur=0;
    for(const v of videos){
      const u=xPickMp4(v);
      if(u){mp4=u;dur=Number(v.duration)||(v.durationMillis?v.durationMillis/1000:0)||0;break}
    }
    const text=String(tw.text||tw.raw_text||"");
    return xMetaCache[id]={text,title:text,mp4,duration:dur};
  }catch{return xMetaCache[id]=null}
}
async function applyXGuess(id,{fillImport}={}){
  const meta=await xMeta(id);
  if(!meta||!meta.text)return null;
  const info=guessFromTitle(meta.text);
  if(info.game){
    o.game=info.game;
    if(fillImport&&a("importGame")){a("importGame").value=info.game;me(info.game,info.char||void 0)}
  }
  if(info.char){
    o.char=info.char;
    if(fillImport&&a("importChar")&&info.game)a("importChar").value=info.char;
  }
  o.importChars=info.chars||(info.char?[info.char]:[]);
  return{...info,title:meta.text,mp4:meta.mp4};
}const Ce="combo-dex-final-v1",Le="combo-dex-ui-v1";let d={combos:[],keys:{},training:{},fav:new Set,_localCombos:[],pending:[],xOk:[]};function wikiStrip(e){if(!e||typeof e!="object")return e;const t={...e};delete t.favorite;return t}
function wikiFetch(url,headers){const opt={cache:"no-store"};if(headers)opt.headers=headers;try{opt.signal=AbortSignal.timeout(9e3)}catch{}return fetch(url,opt)}function persistPending(){try{localStorage.setItem("cdx-pending",JSON.stringify(d.pending||[]))}catch{}}
const WIKI_URL="https://adkziylvpzivjnajqqle.supabase.co/rest/v1/combos";
const REPORT_URL="https://adkziylvpzivjnajqqle.supabase.co/rest/v1/reports";
const WIKI_KEY="sb_publishable_qZN2tMZ0mJdqO4mkbXo4xQ_0PioAiFn";
function wikiHeaders(extra){
  const h={"apikey":WIKI_KEY,"Accept":"application/json"};
  if(extra) Object.assign(h,extra);
  return h;
}
function wikiApi(){return WIKI_URL}
const SITE_ID="cdx-site";
const HOME_FONTS={
  now:{f:"system-ui,-apple-system,\"Segoe UI\",sans-serif",l:".1em",w:"850",s:"clamp(52px,8.8vw,96px)"},
  pixel:{f:'"Press Start 2P",cursive',l:".06em",w:"400",s:"clamp(22px,4.8vw,44px)"},
  cabinet:{f:"Audiowide,sans-serif",l:".08em",w:"400",s:"clamp(48px,8.2vw,90px)"},
  marquee:{f:"Bungee,sans-serif",l:".03em",w:"400",s:"clamp(46px,7.8vw,86px)"},
  stencil:{f:'"Black Ops One",sans-serif',l:".05em",w:"400",s:"clamp(46px,8vw,88px)"}
};
function siteFontId(v){return HOME_FONTS[v]?v:null}
function wikiRow(c){
  const p=wikiStrip(c);
  return {id:p.id,game:p.game,character:p.character,payload:p,updated_at:p.updatedAt||new Date().toISOString()};
}
function upsertCombo(e){const n=wikiStrip(e);if(!n||!n.id||n.id===SITE_ID)return n;const i=d.combos.findIndex(c=>c.id===n.id);if(i>=0){Object.assign(d.combos[i],n);return d.combos[i]}d.combos.push(n);return n}
function queueWiki(list){const rows=(Array.isArray(list)?list:[list]).map(wikiStrip).filter(c=>c&&c.id&&c.id!==SITE_ID&&c.game&&c.character);if(!rows.length)return[];const ids=new Set(rows.map(c=>c.id));d.pending=(d.pending||[]).filter(c=>!ids.has(c.id)).concat(rows);persistPending();return rows}
async function saveWikiLive(){
  const list=(d.pending||[]).map(wikiStrip).filter(c=>c&&c.id&&c.game&&c.character&&((c.tokens&&c.tokens.length)||c.video));
  if(!list.length){d.pending=[];persistPending();return!0}
  try{
    const r=await fetch(wikiApi()+"?on_conflict=id",{method:"POST",headers:wikiHeaders({"Content-Type":"application/json","Prefer":"resolution=merge-duplicates,return=minimal"}),body:JSON.stringify(list.map(wikiRow)),cache:"no-store"});
    if(r.ok||r.status===201){d.pending=[];persistPending();return!0}
  }catch{}
  persistPending();
  return!1;
}
function publishWiki(combos){
  const list=queueWiki(combos);
  if(!list.length)return;
  list.forEach(upsertCombo);
  saveWikiLive().then(ok=>g(ok?cdxT("Combo gravé sur ComboDex pour tout le monde."):cdxT("Le combo est sur cet appareil, pas encore sur ComboDex pour les autres."),!ok));
}
async function loadWiki(){
  const byId=new Map(),reqs=[];
  const add=c=>{if(c&&c.id===SITE_ID){const f=siteFontId(c.homeFont);if(f)d.siteFont=f;d.xOk=Array.isArray(c.xOk)?[...new Set(c.xOk.map(x=>String(x)).filter(id=>/^\d{5,}$/.test(id)))]:(d.xOk||[]);return}if(c&&c.game==="_req"){const x=xid(c.video);if(x)reqs.push({id:x,req:c.id,game:c.reqGame,character:c.reqChar,at:c.createdAt});return}if(!c||!c.id||!c.game||!c.character||c.deleted)return;if(c.review==="pending"&&!isAtelier()&&!myReview.has(c.id))return;if(!Array.isArray(c.tokens))c.tokens=[];if(!c.tokens.length&&!c.video)return;const t=wikiStrip(c);byId.set(t.id,t)};
  try{
    const r=await wikiFetch(wikiApi()+"?select=payload&limit=10000",wikiHeaders());
    if(r.ok){
      const j=await r.json();
      (Array.isArray(j)?j:[]).forEach(row=>add(row&&row.payload?row.payload:row));
    }
  }catch{}
  d.pending=(d.pending||[]).filter(p=>p&&p.id&&p.id!==SITE_ID&&!byId.has(p.id));
  persistPending();
  for(const p of d.pending)add(p);
  for(const p of d._localCombos||[])if(p&&p.id&&!byId.has(p.id))add(p);
  d.combos=[...byId.values()];
  d.xReqs=reqs;
  if(d.pending.length)saveWikiLive();
}
function Ke(){try{const e=JSON.parse(localStorage.getItem(Ce));if(e){d.keys=e.keys&&typeof e.keys=="object"?e.keys:{};d.training=e.training&&typeof e.training=="object"?e.training:{};d.fav=new Set(Array.isArray(e.fav)?e.fav:(Array.isArray(e.combos)?e.combos.filter(c=>c&&c.favorite).map(c=>c.id):[]));d._localCombos=Array.isArray(e.combos)?e.combos.filter(t=>t&&t.id):[]}try{d.pending=JSON.parse(localStorage.getItem("cdx-pending"))||[]}catch{d.pending=[]}}catch{}}
function M(){try{localStorage.setItem(Ce,JSON.stringify({keys:d.keys,training:d.training,fav:[...d.fav]}));persistPending()}catch{g("Sauvegarde locale impossible (favoris / entraînement).",!0)}}
function $e(e){markReview(e);if(e&&e.favorite)d.fav.add(e.id);upsertCombo(e);publishWiki(e);M()}
function ae(e,t){const n=L(e);if(!n)return null;const patch={...t};if(!isAtelier()&&patch.video&&patch.video!==n.video){patch.review="pending";myReview.add(n.id)}if("favorite" in patch){patch.favorite?d.fav.add(e):d.fav.delete(e);delete patch.favorite}Object.assign(n,wikiStrip(patch),{updatedAt:new Date().toISOString()});if(Object.keys(patch).length)publishWiki(n);M();return n}
function labState(c){return c&&(c.lab==="ok"||c.lab==="pending"||c.lab==="")?c.lab:(c&&c.verified?"ok":"")}
function labPatch(s){return{lab:s,verified:s==="ok"}}
function labFromForm(checked,prev){const p=labState(prev);if(isAtelier())return checked?"ok":(p==="pending"?"pending":"");return p==="ok"?"ok":checked?"pending":p}
function labButton(c,id){const s=labState(c),at=isAtelier(),tip=at?(s==="ok"?"lab.tip.unset":"lab.tip.approve"):(s===""?"lab.tip.ask":s==="pending"?"lab.tip.cancel":"lab.locked"),ico=s==="ok"?"✔":s==="pending"?"⚠":"";return `<button class="tiny lab-btn lab-${s||"off"}" data-action="lab" data-id="${id}" aria-pressed="${s==="ok"?"true":s==="pending"?"mixed":"false"}" title="${l(cdxT(tip))}"><span class="lab-box" aria-hidden="true">${ico}</span>${l(cdxT(s==="pending"?"lab.pending":s==="ok"?"lab.ok":"lab.off"))}</button>`}
function labToggle(id){const c=L(id);if(!c)return;const s=labState(c);if(!isAtelier()&&s==="ok")return g(cdxT("lab.locked"));const next=isAtelier()?(s==="ok"?"":"ok"):(s===""?"pending":"");ae(id,labPatch(next));C()}
function ze(e,t){d.keys[e]=[...d.keys[e]||[],t],M()}function Ue(){try{return JSON.parse(localStorage.getItem(Le))||{}}catch{return{}}}function Ve(e){try{localStorage.setItem(Le,JSON.stringify(e))}catch{}}const L=e=>d.combos.find(t=>t.id===e),q=(e,t)=>d.combos.filter(n=>n.game===e&&n.character===t);function T(e){const t=ke[e]||[],n=[...new Set(d.combos.filter(s=>s.game===e&&!t.includes(s.character)).map(s=>s.character))];return[...t.map(s=>({name:s,orphan:!1})),...n.sort().map(s=>({name:s,orphan:!0}))]}const We=(e,t)=>T(e).some(n=>n.name===t);function hiddenKeys(g){return((H.hideKeys||{})[g]||[]).map(x=>String(x).toLowerCase())}function orderKeys(g,keys){const ord=(H.palOrder&&H.palOrder[g])||[];if(!ord.length)return keys;const rank=new Map(ord.map((k,i)=>[String(k).toLowerCase(),i]));return[...keys].sort((a,b)=>(rank.has(String(a).toLowerCase())?rank.get(String(a).toLowerCase()):1e6)-(rank.has(String(b).toLowerCase())?rank.get(String(b).toLowerCase()):1e6))}
function savePalOrder(g,keys){H.palOrder=H.palOrder||{};H.palOrder[g]=keys;oe()}
const Ae=e=>{const hide=new Set(hiddenKeys(e));return orderKeys(e,[...new Set([...b[e].keys,"dl",...d.keys[e]||[]])].filter(t=>!hide.has(String(t).toLowerCase())))};const H=Ue(),o={tab:["home","people","compare","replay","create","frames","import","knowledge"].includes(H.tab)?H.tab:"home",game:b[H.game]?H.game:"umvc3",char:H.char||"Ghost Rider",sort:H.sort||"recent",onlyWithCombos:!!H.onlyWithCombos,selected:new Set,focusId:null,draft:null,mode:"create",sourceId:null,insertAt:null,importPreview:[],importIdentity:null,trainId:null,trainGoal:5,trainStreak:0,dnaFilter:new Set,watchId:null,guestVideo:null,guestX:null,importChars:[],kcView:"hub"};let raPlayer=null,raVid="",raTick=0,raBound=false,raTool="play",raColor="#f6e7a3",raHudOn=true,raInkOn=true,raGhostOn=true,raStroke=null,raTextAt=null,raInkDur=3;cdxApplyHash();function U(){var e;We(o.game,o.char)||(o.char=(e=T(o.game)[0])==null?void 0:e.name)}function cdxHash(){if(o.tab==="home")return"#/home";if(o.tab==="knowledge")return"#/knowledge/"+o.kcView;let extra="";if(o.tab==="people"){const c=o.watchId?L(o.watchId):null;const vid=c&&te(c.video)||o.guestVideo;if(vid)extra="v/"+vid;else if(o.watchId)extra="c/"+encodeURIComponent(o.watchId)}else if(o.tab==="replay")extra=o.watchId?"c/"+encodeURIComponent(o.watchId)+"/replay":"replay";else extra=o.tab&&o.tab!=="people"?o.tab:"";const parts=[o.game,o.char?encodeURIComponent(o.char):"",extra].filter(Boolean);return"#/"+parts.join("/")}
function cdxApplyHash(){
  const h=(location.hash||"").replace(/^#\/?/,"");
  if(!h||h==="home"){o.tab="home";return}
  const bits=h.split("/").filter(Boolean).map(x=>{try{return decodeURIComponent(x)}catch{return x}});
  if(bits[0]==="knowledge"||bits[0]==="training"){o.tab="knowledge";const kv=["hub","encyclopedia","teams","matchups","challenge","patches"];if(kv.includes(bits[1]))o.kcView=bits[1];return}
  const tabs=new Set(["home","people","frames","compare","replay","create","import"]);
  let i=0;
  if(bits[i]&&b[bits[i]]){o.game=bits[i];i++}
  if(bits[i]&&!tabs.has(bits[i])&&bits[i]!=="c"&&bits[i]!=="v"){o.char=bits[i];i++}
  if(bits[i]==="c"&&bits[i+1]){const id=bits[i+1],combo=L(id);o.watchId=id;if(combo){o.game=combo.game;o.char=combo.character;o.focusId=combo.id}i+=2;if(!(bits[i]&&tabs.has(bits[i])))o.tab="people"}
  else if(bits[i]==="v"&&bits[i+1]){const vid=bits[i+1];o.guestVideo=/^[a-zA-Z0-9_-]{11}$/.test(vid)?vid:null;const combo=d.combos.find(c=>te(c.video)===vid&&c.game===o.game&&(!o.char||c.character===o.char));if(combo){o.char=combo.character;o.watchId=combo.id;o.focusId=combo.id;o.guestVideo=null}else o.watchId=null;i+=2;if(!(bits[i]&&tabs.has(bits[i])))o.tab="people"}
  if(bits[i]&&tabs.has(bits[i]))o.tab=bits[i];
}
let cdxRoute="";
function oe(){Ve(Object.assign(H,{tab:o.tab,game:o.game,char:o.char,sort:o.sort,onlyWithCombos:o.onlyWithCombos,kcView:o.kcView}));try{const hash=cdxHash(),route=o.tab+(o.tab==="knowledge"?"/"+o.kcView:"");if(location.hash!==hash){if(cdxRoute&&cdxRoute!==route)history.pushState(null,"",hash);else history.replaceState(null,"",hash)}cdxRoute=route}catch{}}const R={},V=(e,t)=>R[e]=t;function j(e){var t;if(e!=="replay")try{raPlayer&&raPlayer.pauseVideo&&raPlayer.pauseVideo()}catch{}try{a("tokFly")&&a("tokFly").classList.add("hidden")}catch{}o.tab=e,document.body.classList.toggle("on-home",e==="home"),document.querySelectorAll(".page").forEach(n=>n.classList.toggle("hidden",n.id!==e)),document.querySelectorAll(".nav .tab").forEach(n=>{const s=n.dataset.tab===e;n.classList.toggle("active",s),n.setAttribute("aria-current",s?"page":"false")}),(t=R[e])==null||t.call(R),oe();try{syncLogos()}catch{}if(e==="replay"||e==="create")setTimeout(()=>{try{padStatus();padScale()}catch{}},60)}function Qe(e,t){const n=[...t];return e.map(s=>{const r=n.indexOf(s);return r>=0&&n.splice(r,1),{t:s,diff:r<0}})}function et(){k(a("compareGame"),De(),o.game),we(o.game,o.char),a("compareChar").dataset.mode="char",Y()}const we=(e,t)=>k(a("compareChar"),T(e).map(n=>[n.name,charLabel(n.name)]),t);function cmpScope(){const s=a("compareScope");return s&&["char","game","all"].includes(s.value)?s.value:"char"}
function cmpCharOpts(sc,gm){const m=new Map();for(const c of d.combos||[]){if(!c||!c.game||!c.character||(sc==="game"&&c.game!==gm))continue;const v=sc==="all"?c.game+"|"+c.character:c.character;if(!m.has(v))m.set(v,[v,charLabel(c.character)+(sc==="all"?" · "+(b[c.game]?b[c.game].name:c.game):"")])}return[...m.values()].sort((x,z)=>x[1].localeCompare(z[1]))}
function cmpPick(sc,gm,v){if(!v)return[];if(sc!=="all")return q(gm,v);const i=v.indexOf("|");return q(v.slice(0,i),v.slice(i+1))}
function Y(){const sc=cmpScope(),gm=a("compareGame").value,c1=a("compareChar"),c2=a("compareChar2"),two=sc!=="char";a("compareGame").disabled=sc==="all";c2.closest(".field").classList.toggle("hidden",!two);a("cmpChars").classList.toggle("one",!two);a("compareCharLbl").textContent=cdxT(two?"cmp.char1":"Personnage");let A,B;if(!two){if(c1.dataset.mode!=="char"){we(gm,o.char);c1.dataset.mode="char"}A=B=q(gm,c1.value)}else{const opts=cmpCharOpts(sc,gm),mode=sc+":"+gm,p1=c1.dataset.mode===mode?c1.value:(sc==="all"?o.game+"|"+o.char:o.char),p2=c2.dataset.mode===mode?c2.value:"";k(c1,opts,p1);k(c2,opts,p2);c1.dataset.mode=c2.dataset.mode=mode;if(!opts.some(x=>x[0]===p2)){const o2=opts.find(x=>x[0]!==c1.value)||opts[0];if(o2)c2.value=o2[0]}A=cmpPick(sc,gm,c1.value);B=cmpPick(sc,gm,c2.value)}const lab=r=>two?r.name+" — "+charLabel(r.character)+(sc==="all"?" · "+(b[r.game]?b[r.game].name:r.game):""):r.name,t=a("compareA").value,n=a("compareB").value;k(a("compareA"),[["",cdxT("Choisir le combo A")],...A.map(r=>[r.id,lab(r)])],t);k(a("compareB"),[["",cdxT("Choisir le combo B")],...B.map(r=>[r.id,lab(r)])],n);!a("compareA").value&&A[0]&&(a("compareA").value=A[0].id);if(!a("compareB").value){const nb=B.find(r=>r.id!==a("compareA").value);if(nb)a("compareB").value=nb.id}_(two?(A.length&&B.length?2:0):A.length)}function _(e=1/0){
  const t=L(a("compareA").value),n=L(a("compareB").value),s=a("compareSummary");
  const bot=a("compareBot");if(bot)bot.disabled=!(t&&n);
  if(e<2){s.innerHTML=cmpScope()==="char"?`<div class="empty">${cdxT(e?"Ce personnage n’a qu’un seul combo":"Ce personnage n’a pas encore de combo")}${cdxT(" : il en faut deux pour comparer.")}</div>`:`<div class="empty">${l(cdxT("cmp.need"))}</div>`,a("compareOut").innerHTML="";return}
  const r=Number(t==null?void 0:t.damage)||0,i=Number(n==null?void 0:n.damage)||0;
  const who=c=>`${portrait(c.game,c.character,"sm")}<div><b>${l(charLabel(c.character))}</b><div class="muted small">${l(b[c.game]?b[c.game].name:c.game)}</div></div>`;
  const hero=t&&n?(t.game===n.game&&t.character===n.character?`<div class="compare-hero">${who(t)}<span class="hv-vs">VS</span></div>`:`<div class="compare-hero">${who(t)}<span class="hv-vs">VS</span>${who(n)}</div>`):"";
  s.innerHTML=t&&n?hero+`<p class="compare-diff small muted">${t.tokens.length} vs ${n.tokens.length} ${cdxT("commandes")}${!r||!i?"":r===i?" · "+cdxT("dégâts identiques"):` · combo <b class="good">${r>i?"A":"B"}</b> ${cdxT("plus fort de")} ${Math.abs(r-i).toLocaleString(window.cdxLang==="en"?"en":window.cdxLang==="es"?"es":"fr")} ${cdxT("dégâts")}`} · ${cdxT("les commandes surlignées n’apparaissent que dans l’un des deux combos.")}</p>`:"";
  a("compareOut").innerHTML=[t,n].map((c,m)=>{var f;if(!c)return`<div class="subpanel"><div class="empty">Combo ${m?"B":"A"} non sélectionné</div></div>`;const p=((f=[t,n][1-m])==null?void 0:f.tokens)||c.tokens,u=Qe(c.tokens,p).map(({t:h,diff:$})=>`<span class="token${tokCls(h)} ${$?"diff":""}">${l(h)}</span>`).join("");return`<div class="subpanel compare-card"><div class="row between"><h3>${l(c.name)}</h3><span class="cmp-badge">${m?"B":"A"}</span></div><div class="seq">${u}</div>
        <p>${cdxT("Difficulté")} : ${l(cdxT(c.difficulty||""))}<br>${cdxT("Position")} : ${l(cdxT(c.position||""))}<br>${cdxT("Ressource")} : ${l(cdxT(c.meter||""))}<br>
        ${cdxT("Assists")} : ${l(cdxT(c.assist||""))}<br>${cdxT("Dégâts :")} ${l(c.damage?String(c.damage):cdxT("non renseignés"))}<br>Lab : ${c.verified?cdxT("✓ Vérifié"):cdxT("Non vérifié")}</p></div>`}).join("");
}
function tt(){V("compare",et),a("compareGame").onchange=e=>{we(e.target.value),a("compareChar").dataset.mode="char",Y()},a("compareChar").onchange=()=>{a("compareA").value="";if(cmpScope()==="char")a("compareB").value="";Y()},a("compareChar2").onchange=()=>{a("compareB").value="";Y()};const sc=a("compareScope");if(sc)sc.onchange=()=>{a("compareA").value="";a("compareB").value="";Y()};a("compareA").onchange=()=>_(),a("compareB").onchange=()=>_();const bot=a("compareBot");if(bot)bot.onclick=openCompareBot}
function botFill(key){let s=cdxT(key);for(let i=1;i<arguments.length;i++)s=s.replace("{"+(i-1)+"}",arguments[i]);return s}
function botCmds(n){n=Number(n)||0;return n===1?cdxT("bot.cmd.one"):botFill("bot.cmd.many",String(n))}
function botPack(){return{A:L((a("compareA")||{}).value),B:L((a("compareB")||{}).value),game:(a("compareGame")||{}).value||o.game,char:(a("compareChar")||{}).value||o.char}}
function botOnly(aTok,bTok){const s=new Set(bTok||[]);return(aTok||[]).filter(t=>!s.has(t))}
function botEnder(tok){const s=String(tok||""),low=s.toLowerCase();if(/limit\s*strike/.test(low)||low==="ls")return"limit";if(/j\.xx/i.test(s)||/236236|632146/.test(s)||/\b(sa3|ca|lv\.?3|level\s*3)\b/i.test(s))return"lv3";if(/\b(sa[12]|236h|214h|super)\b/i.test(s))return"super";return"hit"}
function botStandCrouch(aTok,bTok){
  const pair=[["5H","2H"],["5HP","2HP"],["5C","2C"],["5S","2S"],["c.S","2S"]];
  for(const[st,cr] of pair){
    const aS=aTok.includes(st),aC=aTok.includes(cr),bS=bTok.includes(st),bC=bTok.includes(cr);
    if(aS&&!aC&&bC&&!bS)return[st,cr];
    if(aC&&!aS&&bS&&!bC)return[cr,st];
  }
  return null;
}
function botAnswer(q){
  const {A,B,game,char}=botPack();
  if(!A||!B)return cdxT("bot.need");
  const aTok=A.tokens||[],bTok=B.tokens||[];
  const onlyA=botOnly(aTok,bTok),onlyB=botOnly(bTok,aTok);
  const dA=Number(A.damage)||0,dB=Number(B.damage)||0;
  const blob=w(q||"");
  const wantDmg=/degat|damage|dano|fort|harder|fuerte|tape|pega|plus fort/.test(blob);
  const wantEnd=/fin|ender|super|limit|niveau|level|lv3|strike|final/.test(blob);
  const wantDiff=/change|diff|route|5h|2h|swap|autre|cambia/.test(blob);
  const wantLen=/court|short|corto|long|longueur|length/.test(blob);
  const wantMeter=/meter|barre|ressource|resource|assist/.test(blob);
  const wantPick=/mieux|better|mejor|choisi|pick|qui gagne|who wins/.test(blob);
  const lines=[];
  if(!blob){
    lines.push(cdxT("bot.hello"));
    lines.push(botFill("bot.who",charLabel(char),b[game]?b[game].name:game));
    lines.push(botFill("bot.vs",A.name||"A",botCmds(aTok.length),B.name||"B",botCmds(bTok.length)));
  }
  if(!blob||wantDmg||wantPick){
    if(!dA&&!dB)lines.push(cdxT("bot.dmg.miss"));
    else if(dA&&dB&&dA===dB)lines.push(cdxT("bot.dmg.same"));
    else if(dA>dB)lines.push(botFill("bot.dmg.a",String(dA),dB?String(dB):"—"));
    else if(dB>dA)lines.push(botFill("bot.dmg.b",String(dB),dA?String(dA):"—"));
    else lines.push(cdxT("bot.dmg.miss"));
  }
  if(!blob||wantDiff){
    const sw=botStandCrouch(aTok,bTok);
    if(sw)lines.push(botFill("bot.swap",sw[0],sw[1]));
    if(!onlyA.length&&!onlyB.length)lines.push(cdxT("bot.same.seq"));
    else{
      if(onlyA.length)lines.push(botFill("bot.only.a",onlyA.join(" · ")));
      if(onlyB.length)lines.push(botFill("bot.only.b",onlyB.join(" · ")));
    }
  }
  if(!blob||wantEnd){
    const eA=aTok[aTok.length-1]||"—",eB=bTok[bTok.length-1]||"—";
    const kA=botEnder(eA),kB=botEnder(eB);
    if(kA!==kB||kA==="limit"||kA==="lv3")lines.push(botFill("bot.end.mix",eA,eB));
    else if(kA==="limit")lines.push(botFill("bot.end.limit","A / B"));
    else if(kA==="lv3")lines.push(botFill("bot.end.lv3","A / B"));
    else lines.push(botFill("bot.end.hit","A",eA)+" "+botFill("bot.end.hit","B",eB));
  }
  if(wantLen||wantPick||!blob){
    if(aTok.length<bTok.length)lines.push(botFill("bot.len.a",String(aTok.length),String(bTok.length)));
    else if(bTok.length<aTok.length)lines.push(botFill("bot.len.b",String(bTok.length),String(aTok.length)));
    else lines.push(botFill("bot.len.same",String(aTok.length)));
  }
  if(wantMeter)lines.push(botFill("bot.meter",cdxT(A.meter||"—")+" / "+cdxT(A.assist||"—"),cdxT(B.meter||"—")+" / "+cdxT(B.assist||"—")));
  if(wantPick)lines.push(botFill("bot.pick",dA>dB?"A":dB>dA?"B":(aTok.length<=bTok.length?"A":"B")));
  if(blob&&!wantDmg&&!wantEnd&&!wantDiff&&!wantLen&&!wantMeter&&!wantPick)lines.push(cdxT("bot.fallback"));
  return lines.filter(Boolean).join("\n\n");
}
function botSay(who,text){
  const box=a("botChat");if(!box||!text)return;
  const p=document.createElement("div");
  p.className="bot-msg"+(who==="me"?" me":"");
  p.textContent=text;
  box.appendChild(p);
  box.scrollTop=box.scrollHeight;
}
function botAsk(q){
  q=String(q||"").trim();if(!q)return;
  botSay("me",q);
  const wait=a("botChat");
  setTimeout(()=>{if(a("botChat")===wait)botSay("bot",botAnswer(q))},280);
}
function openCompareBot(){
  const {A,B}=botPack();
  if(!A||!B){g(cdxT("bot.need"),!0);return}
  const chips=["bot.chip.dmg","bot.chip.end","bot.chip.diff","bot.chip.short"];
  ce(cdxT("Comparer par le bot"),`<p class="muted small" style="margin:0 0 8px">${l(cdxT("bot.tag"))}</p>
    <div class="bot-chat" id="botChat"></div>
    <div class="bot-chips" id="botChips">${chips.map(k=>`<button type="button" class="tiny" data-bot-q="${l(cdxT(k))}">${l(cdxT(k))}</button>`).join("")}</div>
    <form class="row bot-foot" id="botForm"><input class="grow" id="botAsk" maxlength="200" placeholder="${l(cdxT("bot.ask"))}" autocomplete="off"><button type="submit" class="primary">${l(cdxT("bot.send"))}</button></form>`);
  botSay("bot",botAnswer(""));
  const form=a("botForm"),chipsBox=a("botChips"),inp=a("botAsk");
  if(form)form.onsubmit=e=>{e.preventDefault();const v=(inp&&inp.value||"").trim();if(!v)return;if(inp)inp.value="";botAsk(v)};
  if(chipsBox)chipsBox.onclick=e=>{const b=e.target.closest("[data-bot-q]");b&&botAsk(b.getAttribute("data-bot-q"))};
  inp&&inp.focus();
}
const se={name:"editName",difficulty:"editDifficulty",position:"editPosition",meter:"editMeter",assist:"editAssist",special:"editSpecial",damage:"editDamage",video:"editVideo",labDate:"editLabDate",notes:"editNotes",desc:"editDesc"};function W(e=o.game,t=o.char){const n=b[e];return{id:"",game:e,character:t,name:"",difficulty:"Intermédiaire",position:"Mid screen",meter:n.meters[0],assist:n.assists[0],special:n.special?n.special[1][0]:"Aucune",extra:{},dna:[],tokens:[],damage:"",video:"",verified:!1,favorite:!1,labDate:"",notes:"",desc:"",source:"",origin:"",imported:!1}}function re(e,t,n=null){o.mode=e,o.sourceId=n,o.insertAt=null,o.draft=t,j("create")}const X=(e=o.game,t=o.char)=>re("create",W(e,t));function nt(e){const t=L(e);t&&(re("variant",{...t,id:"",name:t.name+" — Variante",tokens:[...t.tokens||[]],verified:!1,lab:"",labDate:"",imported:!1},t.id),g("Variante ouverte : l’original reste intact."))}function at(e){const t=L(e);t&&re("edit",{...W(t.game,t.character),...t,tokens:[...t.tokens||[]]},t.id)}function ie(){const e=o.draft;for(const[t,n]of Object.entries(se))e[t]=a(n).value;e.game=a("editGame").value,e.character=a("editChar").value,e.verified=a("editVerified").checked,e.favorite=a("editFavorite").checked,b[e.game].special||(e.special="Aucune"),e.extra=Object.fromEntries([...a("extrasWrap").querySelectorAll("[data-extra]")].map(t=>[t.dataset.extra,t.value]))}function Me(e){const t=o.draft,n=b[t.game];for(const[s,r]of Object.entries(se)){const i=a(r);i&&(i.value=e&&s!=="difficulty"&&s!=="position"?"":(t[s]??""))}a("meterLabel").textContent=cdxT(n.meter),k(a("editMeter"),n.meters.map(s=>[s,cdxT(s)]),e?n.meters[0]:t.meter),a("assistLabel").textContent=cdxT(n.assistLabel||"Assists"),k(a("editAssist"),n.assists.map(s=>[s,cdxT(s)]),e?n.assists[0]:t.assist),a("specialWrap").classList.toggle("hidden",!n.special),n.special?(a("specialLabel").textContent=cdxT(n.special[0]),k(a("editSpecial"),n.special[1].map(s=>[s,cdxT(s)]),e?n.special[1][0]:t.special)):a("editSpecial").innerHTML="",renderExtras(e)}const ot={create:["Créer un combo","Éditeur manuel · jeu et personnage","Enregistrer le combo"],variant:["Créer une variante","L’original reste inchangé : la copie sera ajoutée séparément.","Enregistrer la variante"],edit:["Modifier le combo","Les changements remplacent la fiche existante.","Enregistrer les modifications"]};function st(){o.draft||(o.draft=W());try{padStatus()}catch{}const e=o.draft;k(a("editGame"),De(),e.game),k(a("editChar"),T(e.game).map(r=>[r.name,charLabel(r.name)]),e.character),k(a("editDifficulty"),z.map(r=>[r,cdxT(r)]),e.difficulty),k(a("editPosition"),Be.map(r=>[r,cdxT(r)]),e.position);const[t,n,s]=ot[o.mode];a("editorTitle").textContent=cdxT(t),a("editorSub").textContent=cdxT(n),a("saveCombo").textContent=cdxT(s),a("cancelEdit").classList.toggle("hidden",o.mode==="create"),a("createTabLabel").textContent=cdxT(o.mode==="edit"?"Modifier":"Créer");for(const[r,i]of Object.entries(se))r!=="meter"&&r!=="assist"&&r!=="special"&&(a(i).value=e[r]||"");a("editVerified").checked=!!e.verified,a("editFavorite").checked=!!e.favorite,a("labDetails").open=!!(e.notes||e.labDate),a("editErrors").classList.add("hidden"),Me(!1),Z(),P(),x()}const PAD_ARROWS={7:"↖",8:"↑",9:"↗",4:"←",5:"●",6:"→",1:"↙",2:"↓",3:"↘"};
const PAD_BTNS={mvc2:["LP","MP","HP","LK","MK","HK","PP","KK","A1","A2"],umvc3:["L","M","H","S","A1","A2"],tokon:["L","M","H","S","U","Tag","dash"],"2xko":["L","M","H","S1","S2","T","Parry","dash"],dbfz:["L","M","H","S","A1","A2"],sf6:["LP","MP","HP","LK","MK","HK"],ggst:["P","K","S","HS","D"],al:["A","B","C","F"],cotw:["A","B","C","D","AB","CD","REV"],t8:["1","2","3","4","1+2","3+4","1+4","2+3"],ssbu:["A","tilt","smash","B","grab","shield","jump","dodge"],mkxl:["1","2","3","4","Throw","Block","Interact","Stance"],gbvsr:["L","M","H","U","S","Throw","dash"],bbcf:["A","B","C","D","A+B","B+C","A+B+C"],sf4:["LP","MP","HP","LK","MK","HK","Throw","Focus"]};
const PAD_FACE={mvc2:{0:"LK",1:"MK",2:"LP",3:"MP",4:"A1",5:"HP",6:"A2",7:"HK"},umvc3:{0:"S",1:"H",2:"L",3:"M",4:"A1",5:"A2"},tokon:{0:"Tag",1:"H",2:"L",3:"M",4:"dash",5:"U",6:"Tag",7:"S"},"2xko":{0:"T",1:"H",2:"L",3:"M",4:"Parry",5:"dash",6:"S1",7:"S2"},dbfz:{0:"S",1:"H",2:"L",3:"M",4:"A1",6:"A2"},sf6:{0:"LK",1:"MK",2:"LP",3:"MP",5:"HP",7:"HK"},ggst:{0:"K",1:"HS",2:"P",3:"S",5:"D"},al:{1:"C",2:"A",3:"B",5:"F"},cotw:{0:"B",1:"D",2:"A",3:"C",4:"AB",5:"REV",6:"CD"},t8:{0:"3",1:"4",2:"1",3:"2",4:"1+2",5:"3+4",6:"1+4",7:"2+3"},ssbu:{0:"A",1:"B",2:"A",3:"smash",4:"shield",5:"grab",6:"dodge",7:"jump"},mkxl:{0:"3",1:"4",2:"1",3:"2",4:"Throw",5:"Interact",6:"Stance",7:"Block"},gbvsr:{0:"U",1:"H",2:"L",3:"M",4:"Throw",5:"S",6:"dash",7:"Block"},bbcf:{0:"D",1:"C",2:"A",3:"B",4:"A+B",5:"B+C",6:"A+B+C"},sf4:{0:"LK",1:"MK",2:"LP",3:"MP",4:"Throw",5:"HP",6:"Focus",7:"HK"}};
let padPrev={};
function padGame(){return o.tab==="create"&&o.draft?o.draft.game:o.game}
function padQ(sel){return [...document.querySelectorAll(sel)]}
function padDir(gp){
  const x=(gp.axes&&gp.axes[0])||0,y=(gp.axes&&gp.axes[1])||0;
  const du=gp.buttons[12]&&gp.buttons[12].pressed, dd=gp.buttons[13]&&gp.buttons[13].pressed, dl=gp.buttons[14]&&gp.buttons[14].pressed, dr=gp.buttons[15]&&gp.buttons[15].pressed;
  let h=dl||-x>0.45?-1:dr||x>0.45?1:0;
  let v=du||-y>0.45?-1:dd||y>0.45?1:0;
  if(!h&&!v)return null;
  const g=padGame();
  if(g==="t8")return({[-1]:{[-1]:"u/b",[0]:"b",[1]:"d/b"},[0]:{[-1]:"u",[1]:"d"},[1]:{[-1]:"u/f",[0]:"f",[1]:"d/f"}})[h][v];
  if(g==="ssbu")return v<0?"jump":null;
  return({[-1]:{[-1]:"7",[0]:"4",[1]:"1"},[0]:{[-1]:"8",[1]:"2"},[1]:{[-1]:"9",[0]:"6",[1]:"3"}})[h][v];
}

function padKind(gp){
  const id=(gp&&gp.id||"").toLowerCase();
  if(/dualsense/.test(id))return"dualsense";
  if(/dualshock\s*4|ds4|054c/.test(id)&&!/dualsense/.test(id))return"ds4";
  if(/dualshock\s*3|ds3|playstation\s*3/.test(id))return"ds3";
  if(/xbox\s*360/.test(id))return"xbox360";
  if(/xbox\s*series/.test(id))return"xboxseries";
  if(/xbox|xinput|045e|microsoft/.test(id))return"xboxone";
  if(/switch|pro controller|nintendo|057e|joy-?con/.test(id))return"switch";
  if(/gamecube|mayflash|wii u gc/.test(id))return"gamecube";
  if(/fight\s*stick|arcade/.test(id))return"fightstick";
  if(/fight\s*pad/.test(id))return"fightpad";
  if(/\bnes\b/.test(id))return"nes";
  return gp?"xboxone":"dualsense";
}
const PAD_SKINS=[
  ["dualsense","DualSense (PS5)"],
  ["ds4","DualShock 4"],
  ["ds4w","DualShock 4 White"],
  ["ds3","DualShock 3"],
  ["ds3w","DualShock 3 White"],
  ["xboxone","Xbox One"],
  ["xboxonew","Xbox One White"],
  ["xboxseries","Xbox Series"],
  ["xbox360","Xbox 360"],
  ["switch","Switch Pro"],
  ["gamecube","GameCube"],
  ["n64","Nintendo 64"],
  ["nes","NES"],
  ["fightpad","FightPad"],
  ["fightstick","Fight Stick"]
];
const PAD_GPV={
  dualsense:{cls:"ds5",w:1000,h:792},
  ds4:{cls:"ds4",w:806,h:598},
  ds4w:{cls:"ds4 white",w:806,h:598},
  ds3:{cls:"ps",w:784,h:558},
  ds3w:{cls:"ps white",w:784,h:558},
  xboxone:{cls:"xbox",w:750,h:630},
  xboxonew:{cls:"xbox white",w:750,h:630},
  xboxseries:{cls:"xbox",w:750,h:630},
  xbox360:{cls:"xbox-old",w:668,h:544},
  switch:{cls:"nsw",w:550,h:420},
  gamecube:{cls:"gc",w:978,h:837},
  n64:{cls:"n64",w:810,h:851},
  nes:{cls:"nes",w:832,h:391},
  fightpad:{cls:"fpp",w:938,h:755},
  fightstick:{cls:"fight-stick",w:1122,h:534}
};
let padUserPick=false;
function padDrawInner(kind){
  const spec=PAD_GPV[kind]||PAD_GPV.dualsense;
  return `<div class="controller ${spec.cls}" data-w="${spec.w}" data-h="${spec.h}">
    <div class="triggers"><span class="trigger left" data-pad="l2"></span><span class="trigger right" data-pad="r2"></span></div>
    <span class="trigger-button left" data-pad="l2"></span><span class="trigger-button right" data-pad="r2"></span>
    <div class="bumpers"><span class="bumper left" data-pad="l1"></span><span class="bumper right" data-pad="r1"></span></div>
    <div class="arrows"><span class="back" data-pad="sel"></span><span class="start" data-pad="st"></span></div>
    <div class="abxy"><span class="button a" data-pad="b0"></span><span class="button b" data-pad="b1"></span><span class="button x" data-pad="b2"></span><span class="button y" data-pad="b3"></span></div>
    <div class="sticks"><span class="stick left" data-pad="ls"></span><span class="stick right" data-pad="rs"></span></div>
    <div class="dpad"><span class="face up" data-pad="du"></span><span class="face down" data-pad="dd"></span><span class="face left" data-pad="dl"></span><span class="face right" data-pad="dr"></span></div>
    <div class="meta" data-pad="ps"></div>
    <div class="touchpad" data-pad="tp"></div>
    <div class="quadrant p0"></div>
  </div>`;
}
function padFillSkins(){
  const sels=padQ(".pad-skin");
  for(const sel of sels){
    if(!sel.options.length){
      PAD_SKINS.forEach(([v,n])=>{const o=document.createElement("option");o.value=v;o.textContent=n;sel.appendChild(o)});
      sel.value="dualsense";
    }
    if(!sel.dataset.bound){
      sel.dataset.bound="1";
      sel.onchange=()=>{
        padUserPick=true;
        padQ(".pad-skin").forEach(s=>{s.value=sel.value});
        const pads=[...navigator.getGamepads?navigator.getGamepads():[]].filter(Boolean);
        padMount(pads[0]||null,true);
      };
    }
  }
}
function padSkinNow(gp){
  const sel=document.querySelector(".pad-skin");
  if(sel&&padUserPick)return sel.value;
  return padKind(gp);
}
function padScale(){
  padQ(".pad-body").forEach(root=>{
    const ctl=root.querySelector(".controller"); if(!ctl)return;
    const w=Number(ctl.dataset.w)||750, h=Number(ctl.dataset.h)||630;
    const cw=root.clientWidth||280;
    const s=Math.min(1, cw/w);
    root.style.height=(h*s)+"px";
    ctl.style.transform="scale("+s+")";
  });
}
function padMount(gp,force){
  padFillSkins();
  const bodies=padQ(".pad-body"); if(!bodies.length)return;
  const kind=padSkinNow(gp);
  if(!padUserPick)padQ(".pad-skin").forEach(sel=>{sel.value=kind});
  for(const root of bodies){
    if(force||root.dataset.kind!==kind||!root.querySelector(".controller")){
      root.dataset.kind=kind;
      root.className="pad-draw pad-body"+(gp?"":" off");
      root.innerHTML=padDrawInner(kind);
    }else root.classList.toggle("off",!gp);
  }
  requestAnimationFrame(()=>{padScale();requestAnimationFrame(padScale)});
}
function padName(gp){return (gp&&(gp.id||"").split("(")[0].trim())||cdxT("manette")}
function padRelabel(){}
function padPaint(gp,tok){
  const bodies=padQ(".pad-body"); if(!bodies.length)return;
  const liveTxt=tok?cdxT("Dernière touche")+" · "+tok:"";
  padQ(".pad-live").forEach(el=>{el.textContent=liveTxt});
  for(const root of bodies){
    root.classList.toggle("off",!gp);
    root.querySelectorAll(".pressed").forEach(el=>el.classList.remove("pressed"));
    const press=id=>root.querySelectorAll('[data-pad="'+id+'"]').forEach(el=>el.classList.add("pressed"));
    const nub=(id,x,y,clicked)=>{
      const el=root.querySelector('[data-pad="'+id+'"]'); if(!el)return;
      el.style.transform="translate("+((x||0)*22)+"px,"+((y||0)*22)+"px)";
      if(clicked||Math.hypot(x||0,y||0)>0.18)el.classList.add("pressed");
    };
    if(!gp){nub("ls",0,0,false);nub("rs",0,0,false);continue}
    const down=i=>gp.buttons[i]&&gp.buttons[i].pressed;
    if(down(0))press("b0"); if(down(1))press("b1"); if(down(2))press("b2"); if(down(3))press("b3");
    if(down(4))press("l1"); if(down(5))press("r1");
    if(down(6))press("l2"); if(down(7))press("r2");
    if(down(8))press("sel"); if(down(9))press("st");
    if(down(12))press("du"); if(down(13))press("dd"); if(down(14))press("dl"); if(down(15))press("dr");
    if(down(16))press("ps"); if(down(17))press("tp");
    const x=(gp.axes&&gp.axes[0])||0,y=(gp.axes&&gp.axes[1])||0;
    if(y<-0.45)press("du"); if(y>0.45)press("dd"); if(x<-0.45)press("dl"); if(x>0.45)press("dr");
    nub("ls",x,y,down(10));
    nub("rs",(gp.axes&&gp.axes[2])||0,(gp.axes&&gp.axes[3])||0,down(11));
  }
}
window.addEventListener("resize",padScale);
function padStatus(){
  const els=padQ(".pad-status"); if(!els.length)return;
  padFillSkins();
  const pads=[...navigator.getGamepads?navigator.getGamepads():[]].filter(Boolean);
  if(pads[0]&&!padUserPick)padQ(".pad-skin").forEach(sel=>{sel.value=padKind(pads[0])});
  padMount(pads[0]||null);
  if(!pads.length){els.forEach(el=>{el.textContent=cdxT("Branche une manette pour écrire la séquence.");el.classList.remove("on")});padPaint(null,"");return}
  els.forEach(el=>{el.textContent=padName(pads[0]);el.classList.add("on")});
  padPaint(pads[0],"");
}
function padTick(){
  requestAnimationFrame(padTick);
  if(o.tab!=="create"&&o.tab!=="replay")return;
  if(o.tab==="create"&&!o.draft)return;
  const game=padGame(); if(!game||!b[game])return;
  const pads=[...navigator.getGamepads?navigator.getGamepads():[]].filter(Boolean);
  if(!pads.length){padPaint(null,"");return}
  const gp=pads[0], map=PAD_FACE[game]||PAD_FACE.sf6;
  const face=[];
  for(const [idx,tok] of Object.entries(map)){
    const b=gp.buttons[Number(idx)];
    if(b&&b.pressed)face.push(tok);
  }
  const uniq=[...new Set(face)];
  const chord=uniq.length>=2&&(game==="t8"||game==="cotw"||game==="al")?uniq.slice(0,2).sort().join("+"):null;
  const dirNow=padDir(gp),btnNow=chord||uniq[0];
  const lastTok=o.tab==="create"?((o.draft.tokens||[])[(o.draft.tokens||[]).length-1]):((raInputs()[raInputs().length-1]||{}).tok);
  const tok=game==="t8"&&dirNow&&btnNow?(lastTok===dirNow?btnNow:dirNow+"+"+btnNow):btnNow||dirNow;
  padPaint(gp,tok);
  const ae=document.activeElement;
  if(ae&&(ae.tagName==="INPUT"||ae.tagName==="TEXTAREA"||ae.tagName==="SELECT"))return;
  const was=padPrev[gp.index]||"";
  if(tok&&tok!==was){
    if(o.tab==="create")it(tok);
    else raStamp(tok);
  }
  padPrev[gp.index]=tok||"";
}
window.addEventListener("gamepadconnected",e=>{padStatus();g(cdxT("Manette détectée : {0}.").replace("{0}",padName(e.gamepad)))});
window.addEventListener("gamepaddisconnected",()=>padStatus());
requestAnimationFrame(padTick);

function dirPadHtml(e){
  if(e==="ssbu")return "";
  if(e==="t8"){
    const cells=[["u/b","↖"],["u","↑"],["u/f","↗"],["b","←"],["",""],["f","→"],["d/b","↙"],["d","↓"],["d/f","↘"]];
    return `<div class="numpad tekken" role="group" aria-label="${cdxT("Directions")}">${cells.map(([key,arr])=>key?`<button type="button" data-key="${key}" data-tip="${key}"><span class="pad-arr" aria-hidden="true">${arr}</span></button>`:`<span class="pad-gap" aria-hidden="true"></span>`).join("")}</div>`;
  }
  return `<div class="numpad" role="group" aria-label="${cdxT("Pavé directionnel")}">${[7,8,9,4,5,6,1,2,3].map(n=>`<button type="button" data-key="${n}" data-tip="${PAD_ARROWS[n]} · ${cdxT({7:"haut-arrière",8:"haut",9:"haut-avant",4:"arrière",5:"neutre",6:"avant",1:"bas-arrière",2:"bas",3:"bas-avant"}[n])}"><span class="pad-arr" aria-hidden="true">${PAD_ARROWS[n]}</span><span class="pad-n">${n}</span></button>`).join("")}</div>`;
}
function palTokBtn(s,e,attr){return `<span class="pal-tok" data-pal="${l(s)}"><button type="button" ${attr} class="${tokCls(s,e).trim()}" data-tip="${l(tokTip(s,e))}">${l(s)}</button></span>`}
const ATELIER_K="cdx-atelier";
const ATELIER_H="810086e3fdf240ad45e1c0ccf8a7710a211729ae42e682afc76f780f7af18f3a";
let atelierLive=!1;
function isAtelier(){return atelierLive}
function atelierMark(){document.body.classList.toggle("is-atelier",atelierLive);const dash=a("atelierDash");if(dash)dash.classList.toggle("hidden",!atelierLive)}
function atelierForget(){atelierLive=!1;try{localStorage.removeItem(ATELIER_K)}catch{}atelierMark();const dash=a("atelierDash");if(dash)dash.innerHTML=""}
async function atelierHash(s){const buf=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(String(s||"").trim()));return[...new Uint8Array(buf)].map(b=>b.toString(16).padStart(2,"0")).join("")}
function askAtelier(after){
  ce(cdxT("Clef d'atelier"),`<p>${l(cdxT("atelier.body"))}</p><form id="atelierForm"><input id="atelierKey" type="password" autocomplete="off" autofocus placeholder="${l(cdxT("Clef d'atelier"))}"><div class="row" style="margin-top:10px"><button type="submit" class="primary">${l(cdxT("Ouvrir"))}</button></div></form>`);
  const form=a("atelierForm");if(form)form.onsubmit=async e=>{e.preventDefault();const h=await atelierHash((a("atelierKey")||{}).value||"");if(h!==ATELIER_H){g(cdxT("atelier.bad"),!0);return}atelierLive=!0;atelierMark();G();loadWiki().then(()=>{try{C()}catch{}try{renderAtelierDash()}catch{}try{if(o.tab==="replay"){raVid="";raRender()}}catch{}});const n=reportedCombos().length+pendingXRows().length+labRequests().length+editRequests().length+reviewRows().length;g(n?cdxT("atelier.notif.some").replace("{0}",n):cdxT("atelier.ok"));after&&after()};
}
let atelierView="home",atelierTop=0,atelierW=0,atelierY=-1;
function atelierBoxApply(){const dash=a("atelierDash");if(!dash)return;if(atelierW){dash.style.width=atelierW+"px";document.body.style.setProperty("--at-w",atelierW+"px")}if(atelierY>=0){dash.style.top=atelierY+"px";dash.style.bottom="0";dash.style.height="auto"}}
function atelierDrag(e,el,onMove){e.preventDefault();el.setPointerCapture(e.pointerId);const up=()=>{el.removeEventListener("pointermove",onMove);el.removeEventListener("pointerup",up);el.removeEventListener("pointercancel",up);document.body.classList.remove("atelier-dragging")};document.body.classList.add("atelier-dragging");el.addEventListener("pointermove",onMove);el.addEventListener("pointerup",up);el.addEventListener("pointercancel",up)}
document.addEventListener("pointerdown",e=>{const gx=e.target.closest("#atelierGripX");if(gx){atelierDrag(e,gx,ev=>{atelierW=Math.round(Math.max(260,Math.min(innerWidth*.85,innerWidth-ev.clientX)));atelierBoxApply()});return}const hd=e.target.closest("#atelierDash .atelier-head");if(!hd||e.target.closest("button,a,input,select"))return;const dash=a("atelierDash"),off=e.clientY-dash.getBoundingClientRect().top;atelierDrag(e,hd,ev=>{atelierY=Math.round(Math.max(0,Math.min(innerHeight-hd.offsetHeight,ev.clientY-off)));atelierBoxApply()})});
function atelierTopApply(){const bd=document.querySelector("#atelierDash .atelier-body");if(bd&&atelierTop)bd.style.setProperty("--at-top",atelierTop+"px")}
document.addEventListener("pointerdown",e=>{const sp=e.target.closest("#atelierSplit");if(!sp)return;const bd=sp.parentElement;e.preventDefault();sp.setPointerCapture(e.pointerId);const mv=ev=>{const r=bd.getBoundingClientRect();atelierTop=Math.round(Math.max(60,Math.min(r.height-80,ev.clientY-r.top)));atelierTopApply()},up=()=>{sp.removeEventListener("pointermove",mv);sp.removeEventListener("pointerup",up);sp.removeEventListener("pointercancel",up)};sp.addEventListener("pointermove",mv);sp.addEventListener("pointerup",up);sp.addEventListener("pointercancel",up)});
document.addEventListener("keydown",e=>{if(!e.target.closest||!e.target.closest("#atelierSplit")||(e.key!=="ArrowDown"&&e.key!=="ArrowUp"))return;e.preventDefault();const bd=e.target.parentElement,r=bd.getBoundingClientRect(),cur=atelierTop||bd.querySelector(".atelier-tree").getBoundingClientRect().height;atelierTop=Math.round(Math.max(60,Math.min(r.height-80,cur+(e.key==="ArrowDown"?24:-24))));atelierTopApply()});
setInterval(()=>{if(atelierLive&&!document.hidden)loadWiki().then(()=>{try{renderAtelierDash()}catch{}})},6e4);
function atelierPanel(){atelierDash()}
function atelierDash(view){
  if(view)atelierView=view;
  if(!atelierLive)return;
  atelierMark();
  renderAtelierDash();
}
function atelierPath(){
  const map={home:cdxT("atelier.dash"),font:cdxT("atelier.tree.font"),x:cdxT("atelier.tree.x"),reports:cdxT("atelier.tree.reports"),lab:cdxT("atelier.tree.lab"),import:cdxT("atelier.tree.import"),people:cdxT("atelier.tree.people"),portraits:cdxT("atelier.tree.portraits"),keys:cdxT("atelier.tree.keys"),replay:cdxT("atelier.tree.replay"),site:cdxT("atelier.tree.site")};
  const now=map[atelierView]||map.home;
  return cdxT("atelier.crumb")+" / COMBODEX / "+now;
}
function renderAtelierDash(){
  const dash=a("atelierDash");if(!dash)return;
  const pend=pendingXRows(),reps=reportedCombos(),labs=labRequests();
  const leaf=(v,label,n)=>`<button type="button" class="leaf${atelierView===v?" sel":""}" data-av="${v}">${l(label)}${n?`<span class="count">${n}</span>`:""}</button>`;
  const where=c=>`${b[c.game]?b[c.game].name:c.game} · ${charLabel(c.character)}`;
  const notif=(ico,kind,c,text,acts)=>`<div class="atelier-notif"><button type="button" class="atelier-notif-main" data-go-combo="${l(c.id)}"><span aria-hidden="true">${ico}</span><span><b>${l(cdxT(kind))}</b> · ${l(c.name||"")} <span class="muted">(${l(where(c))})</span>${text?`<br><span class="small">${l(text)}</span>`:""}</span></button><span class="atelier-notif-acts">${acts}</span></div>`;
  const items=[
    ...reviewRows().map(c=>notif("🛂","atelier.tree.review",c,c.video||cdxT(c.origin==="replay"?"Replay Analyzer":"Importé"),`${c.video?`<a class="tiny" href="${l(xid(c.video)?xHref(c.video):c.video)}" target="_blank" rel="noopener noreferrer">${l(cdxT("x.open"))}</a>`:""}<button type="button" class="tiny primary" data-review-set="${l(c.id)}" data-review="ok">${l(cdxT("review.ok"))}</button><button type="button" class="tiny danger" data-review-set="${l(c.id)}" data-review="no">${l(cdxT("review.no"))}</button>`)),
    ...reps.map(c=>notif("🚩","atelier.tree.reports",c,(c.reports[c.reports.length-1]||{}).note||cdxT("atelier.rep.nonote"),`<button type="button" class="tiny primary" data-rep-done="${l(c.id)}">${l(cdxT("atelier.rep.done"))}</button>`)),
    ...pend.map(p=>notif("🎬","atelier.tree.x",p.combo,"",`<a class="tiny" href="${l(p.href)}" target="_blank" rel="noopener noreferrer">${l(cdxT("x.open"))}</a><button type="button" class="tiny primary" data-x-ok="${l(p.id)}">${l(cdxT("x.accept"))}</button>`)),
    ...labs.map(c=>notif("🧪","atelier.tree.lab",c,"",`<button type="button" class="tiny primary" data-lab-set="${l(c.id)}" data-lab="ok">${l(cdxT("atelier.lab.ok"))}</button><button type="button" class="tiny" data-lab-set="${l(c.id)}" data-lab="">${l(cdxT("atelier.lab.no"))}</button>`)),
    ...editRequests().map(c=>notif("✏️","atelier.tree.edits",c,cdxT("atelier.edit.fields").replace("{0}",Object.keys(c.editReq.patch).join(", ")),`<button type="button" class="tiny primary" data-edit-set="${l(c.id)}" data-edit="ok">${l(cdxT("atelier.edit.ok"))}</button><button type="button" class="tiny" data-edit-set="${l(c.id)}" data-edit="">${l(cdxT("atelier.edit.no"))}</button>`))
  ];
  const bell=items.length?`<details class="atelier-bell-list" open><summary>🔔 ${l(cdxT("atelier.notif"))} <span class="count">${items.length}</span></summary>${items.join("")}</details>`:"";
  const games=De().map(([id,name])=>{
    const n=d.combos.filter(c=>c.game===id).length;
    return `<button type="button" class="leaf${atelierView==="people"&&o.game===id?" sel":""}" data-av="game" data-game="${l(id)}">${l(name)}${n?`<span class="count">${n}</span>`:""}</button>`;
  }).join("");
  const fonts=["now","pixel","cabinet","marquee","stencil"].map(id=>`<button type="button" data-home-font="${id}" aria-pressed="${homeFontId===id}">${l(cdxT("home.font."+id))}</button>`).join("");
  const work=atelierWorkHtml(pend,fonts);
  dash.innerHTML=`<div class="atelier-grip-x" id="atelierGripX" role="separator" aria-orientation="vertical"></div><div class="atelier-head"><b>${l(cdxT("atelier.dash"))}</b><button type="button" class="tiny" id="atelierOut">${l(cdxT("Fermer l’atelier"))}</button></div>
    <div class="atelier-bell" id="atelierBell">${bell||`<span class="muted small">🔔 ${l(cdxT("atelier.notif.none"))}</span>`}</div>
    <div class="atelier-crumb">${l(atelierPath())}</div>
    <div class="atelier-body">
      <nav class="atelier-tree" id="atelierTree" aria-label="${l(cdxT("atelier.path"))}">
        <button type="button" data-av="home" class="${atelierView==="home"?"sel":""}">COMBODEX</button>
        <button type="button" class="leaf${atelierView==="font"?" sel":""}" data-av="font">${l(cdxT("atelier.tree.font"))}</button>
        ${leaf("reports",cdxT("atelier.tree.reports"),reps.length)}
        ${leaf("x",cdxT("atelier.tree.x"),pend.length)}
        ${leaf("lab",cdxT("atelier.tree.lab"),labs.length)}
        <button type="button" class="leaf${atelierView==="import"?" sel":""}" data-av="import">${l(cdxT("atelier.tree.import"))}</button>
        <button type="button" class="leaf${atelierView==="people"?" sel":""}" data-av="people">${l(cdxT("atelier.tree.people"))}</button>
        ${games}
        <button type="button" class="leaf${atelierView==="portraits"?" sel":""}" data-av="portraits">${l(cdxT("atelier.tree.portraits"))}</button>
        <button type="button" class="leaf${atelierView==="keys"?" sel":""}" data-av="keys">${l(cdxT("atelier.tree.keys"))}</button>
        <button type="button" class="leaf${atelierView==="replay"?" sel":""}" data-av="replay">${l(cdxT("atelier.tree.replay"))}</button>
        <button type="button" class="leaf${atelierView==="site"?" sel":""}" data-av="site">${l(cdxT("atelier.tree.site"))}</button>
      </nav><div class="atelier-split" id="atelierSplit" role="separator" aria-orientation="horizontal" tabindex="0"></div>
      <div class="atelier-work" id="atelierWork">${work}</div>
    </div>`;
  atelierTopApply();atelierBoxApply();
  dash.onclick=e=>{
    const go=e.target.closest("[data-go-combo]"),done=e.target.closest("[data-rep-done]"),lab=e.target.closest("[data-lab-set]");
    if(go){const c=L(go.dataset.goCombo);if(c){o.game=c.game;o.char=c.character;o.focusId=c.id;j("people")}return}
    if(done){const c=L(done.dataset.repDone);if(c){c.reports=[];c.updatedAt=new Date().toISOString();publishQuiet(c)}renderAtelierDash();return}
    const rv=e.target.closest("[data-review-set]");
    if(rv){const c=L(rv.dataset.reviewSet);if(c){if(rv.dataset.review==="ok"){const x=xid(c.video);ae(c.id,{review:"ok"});if(x&&!xApproved(x))saveXOk(c.video)}else if(confirm(cdxT("review.confirmNo"))){wipeWiki([c.id]).then(()=>{dropLocal([c.id]);try{C()}catch{}renderAtelierDash()});return}}try{C()}catch{}renderAtelierDash();return}
    if(lab){ae(lab.dataset.labSet,labPatch(lab.dataset.lab));try{C()}catch{}renderAtelierDash();return}
    const ed=e.target.closest("[data-edit-set]");
    if(ed){const c=L(ed.dataset.editSet);if(c&&c.editReq){if(ed.dataset.edit==="ok"){const p={...c.editReq.patch};delete p.id;delete p.createdAt;ae(c.id,{...p,editReq:null})}else{c.editReq=null;c.updatedAt=new Date().toISOString();M();publishQuiet(c)}}try{C()}catch{}renderAtelierDash();return}
  };
  const tree=a("atelierTree");
  if(tree)tree.onclick=e=>{
    const b=e.target.closest("[data-av]");if(!b)return;
    const av=b.dataset.av;
    if(av==="game"){o.game=b.dataset.game;o.char=(T(o.game)[0]||{}).name||o.char;atelierView="people";j("people");renderAtelierDash();return}
    atelierView=av;
    if(av==="import")j("import");
    else if(av==="people")j("people");
    else if(av==="replay")j("replay");
    else if(av==="portraits"||av==="keys")j("people");
    renderAtelierDash();
  };
  const charsRow=a("atelierChars");if(charsRow)charsRow.onclick=e=>{const b=e.target.closest("[data-atelier-char]");if(!b)return;o.char=b.dataset.atelierChar;o.selected.clear();j("people");renderAtelierDash()};
  const fontsRow=a("atelierFonts");if(fontsRow)fontsRow.onclick=e=>{const b=e.target.closest("[data-home-font]");b&&saveSiteFont(b.dataset.homeFont)};
  const go=a("atelierXGo");if(go)go.onclick=()=>saveXOk((a("atelierX")||{}).value);
  const out=a("atelierOut");if(out)out.onclick=()=>{atelierForget();try{C()}catch{}g(cdxT("atelier.out"))};
}
function atelierWorkHtml(pend,fonts){
  if(atelierView==="font")return `<h3>${l(cdxT("atelier.tree.font"))}</h3><p class="muted small">${l(cdxT("atelier.font"))}</p><div class="home-font-row" id="atelierFonts" role="group">${fonts}</div>`;
  if(atelierView==="x"){
    const list=pend.length?pend.map(p=>`<article class="atelier-x-card"><div class="muted small">${l(b[p.game]?b[p.game].name:p.game)} · ${l(charLabel(p.char))}</div><div>${l(p.name)}</div><div class="row"><a href="${l(p.href)}" target="_blank" rel="noopener">${l(cdxT("x.open"))}</a><button type="button" class="primary" data-x-ok="${l(p.id)}">${l(cdxT("x.accept"))}</button></div></article>`).join(""):`<p class="muted small">${l(cdxT("atelier.x.none"))}</p>`;
    return `<h3>${l(cdxT("atelier.tree.x"))}</h3><p class="muted small">${l(cdxT("atelier.x"))}</p><div class="row"><input class="grow" id="atelierX" type="url" placeholder="https://x.com/compte/status/…"><button type="button" class="primary" id="atelierXGo">${l(cdxT("x.accept"))}</button></div><div id="atelierXList">${list}</div>`;
  }
  if(atelierView==="reports"){
    const list=reportedCombos().map(c=>`<article class="atelier-x-card"><div class="muted small">${l(b[c.game]?b[c.game].name:c.game)} · ${l(charLabel(c.character))}</div><div>${l(c.name||"")}</div>${c.reports.map(r=>`<p class="small" style="margin:4px 0">${r.note?l(r.note):`<span class="muted">${l(cdxT("atelier.rep.nonote"))}</span>`}</p>`).join("")}<div class="row"><button type="button" data-go-combo="${l(c.id)}">${l(cdxT("atelier.go"))}</button><button type="button" class="primary" data-rep-done="${l(c.id)}">${l(cdxT("atelier.rep.done"))}</button></div></article>`).join("");
    return `<h3>${l(cdxT("atelier.tree.reports"))}</h3>${list||`<p class="muted small">${l(cdxT("atelier.rep.none"))}</p>`}`;
  }
  if(atelierView==="lab"){
    const list=labRequests().map(c=>`<article class="atelier-x-card"><div class="muted small">${l(b[c.game]?b[c.game].name:c.game)} · ${l(charLabel(c.character))}</div><div>${l(c.name||"")}</div><div class="row"><button type="button" data-go-combo="${l(c.id)}">${l(cdxT("atelier.go"))}</button><button type="button" class="primary" data-lab-set="${l(c.id)}" data-lab="ok">${l(cdxT("atelier.lab.ok"))}</button><button type="button" data-lab-set="${l(c.id)}" data-lab="">${l(cdxT("atelier.lab.no"))}</button></div></article>`).join("");
    return `<h3>${l(cdxT("atelier.tree.lab"))}</h3>${list||`<p class="muted small">${l(cdxT("atelier.lab.none"))}</p>`}`;
  }
  if(atelierView==="import")return `<h3>${l(cdxT("atelier.tree.import"))}</h3><p class="muted small">${l(cdxT("atelier.dash.import"))}</p>`;
  if(atelierView==="people"){
    const chars=T(o.game).filter(r=>!r.orphan||q(o.game,r.name).length).map(r=>{const n=q(o.game,r.name).length;return `<button type="button" data-atelier-char="${l(r.name)}" aria-pressed="${o.char===r.name}">${l(charLabel(r.name))}${n?`<span class="count">${n}</span>`:""}</button>`}).join("");
    return `<h3>${l(b[o.game]?b[o.game].name:cdxT("atelier.tree.people"))}</h3><p class="muted small">${l(charLabel(o.char||""))} · ${y(q(o.game,o.char).length,"combo")}</p><div class="home-font-row atelier-chars" id="atelierChars" role="group">${chars}</div>`;
  }
  if(atelierView==="portraits")return `<h3>${l(cdxT("atelier.tree.portraits"))}</h3><p class="muted small">${l(cdxT("atelier.dash.portraits"))}</p><p>${l(b[o.game]?b[o.game].name:"")} · ${l(charLabel(o.char||""))}</p>`;
  if(atelierView==="keys"){const keys=Ae(o.game)||[];return `<h3>${l(cdxT("atelier.tree.keys"))}</h3><p class="muted small">${l(b[o.game]?b[o.game].name:"")}</p><div class="chips">${keys.map(k=>`<span class="chip">${l(k)}</span>`).join("")}</div>`}
  if(atelierView==="replay")return `<h3>${l(cdxT("atelier.tree.replay"))}</h3><p class="muted small">${l(cdxT("atelier.dash.replay"))}</p>`;
  if(atelierView==="site")return `<h3>${l(cdxT("atelier.tree.site"))}</h3><p>${y((d.combos||[]).length,"combo")} ${cdxT((d.combos||[]).length>1?"publics":"public")}</p><p class="muted small">${l(cdxT("atelier.font"))}</p>`;
  const n=pend.length;
  return `<h3>${l(cdxT("atelier.dash"))}</h3><p class="muted small">${l(cdxT("atelier.dash.lead"))}</p><p>${y((d.combos||[]).length,"combo")} · ${n?y(n,"vidéo")+" X "+cdxT("atelier.waiting"):cdxT("atelier.x.none")}</p>`;
}
async function saveSiteRow(){
  if(!isAtelier())return !1;
  const row=wikiRow({id:SITE_ID,game:"site",character:"site",name:"",tokens:["site"],homeFont:d.siteFont||homeFontId||"stencil",xOk:[...(d.xOk||[])],origin:"site",updatedAt:new Date().toISOString()});
  try{
    const r=await fetch(wikiApi()+"?on_conflict=id",{method:"POST",headers:wikiHeaders({"Content-Type":"application/json","Prefer":"resolution=merge-duplicates,return=minimal"}),body:JSON.stringify(row),cache:"no-store"});
    return r.ok||r.status===201;
  }catch{return !1}
}
async function saveSiteFont(id){
  const f=siteFontId(id)||"stencil";
  applyHomeFont(f);
  d.siteFont=f;
  if(!isAtelier())return;
  const ok=await saveSiteRow();
  g(ok?cdxT("atelier.font.ok"):cdxT("atelier.font.fail"),!ok);
  if(isAtelier())renderAtelierDash();
}
async function saveXOk(raw,reopen){
  const id=xid(raw);
  if(!id){g(cdxT("x.bad"),!0);return}
  if(!isAtelier()){g(cdxT("x.wait"),!0);return}
  d.xOk=d.xOk||[];
  if(!d.xOk.includes(id))d.xOk.push(id);
  const ok=await saveSiteRow();
  g(ok?cdxT("x.ok"):cdxT("x.fail"),!ok);
  try{C();renderPersonDock()}catch{}
  if(isAtelier())atelierDash("x");
}
if(!window.__cdxXOk){window.__cdxXOk=1;document.addEventListener("click",e=>{const b=e.target.closest("[data-x-ok]");if(!b)return;e.preventDefault();saveXOk(b.getAttribute("data-x-ok"))})}
function openAtelier(){
  if(atelierLive){atelierDash();return}
  askAtelier(()=>{atelierView=pendingXRows().length?"x":"home";atelierDash();try{C()}catch{}});
}
function dropLocal(ids){
  const set=new Set(ids);
  d.combos=d.combos.filter(c=>!set.has(c.id));
  d.pending=(d.pending||[]).filter(c=>!set.has(c.id));
  d._localCombos=(d._localCombos||[]).filter(c=>!set.has(c.id));
  for(const id of set)d.fav.delete(id);
  persistPending();M();
}
async function wipeWiki(ids){
  const list=[...new Set((Array.isArray(ids)?ids:[ids]).filter(Boolean))];
  let live=!0;
  for(const id of list){
    try{
      const r=await fetch(WIKI_URL+"?id=eq."+encodeURIComponent(id),{method:"DELETE",headers:wikiHeaders({"Prefer":"return=minimal"}),cache:"no-store"});
      if(!(r.ok||r.status===204))live=!1;
    }catch{live=!1}
  }
  if(live)return!0;
  const rows=list.map(id=>{
    const c=L(id)||{id,game:o.game,character:o.char};
    return wikiRow({...c,tokens:[],video:"",deleted:!0,updatedAt:new Date().toISOString()});
  });
  try{
    const r=await fetch(wikiApi()+"?on_conflict=id",{method:"POST",headers:wikiHeaders({"Content-Type":"application/json","Prefer":"resolution=merge-duplicates,return=minimal"}),body:JSON.stringify(rows),cache:"no-store"});
    return r.ok||r.status===201;
  }catch{return!1}
}
function askWipe(ids){
  const list=(ids||[]).map(id=>L(id)).filter(Boolean);
  if(!list.length)return;
  const names=list.map(c=>`${c.name||"Combo"} · ${charLabel(c.character||"")}`).join(" · ");
  ce(cdxT("Supprimer"),`<p style="margin:0 0 8px">${l(names)}</p><p class="muted small">${l(cdxT("atelier.wipe"))}</p><form id="wipeForm"><label class="muted small" for="atelierKey">${l(cdxT("Clef d'atelier"))}</label><input id="atelierKey" type="password" autocomplete="off" autofocus><div class="row" style="margin-top:12px;justify-content:flex-end;gap:8px"><button type="submit" class="danger">${l(cdxT("Supprimer"))}</button></div></form>`);
  const form=a("wipeForm");if(!form)return;
  form.onsubmit=async e=>{
    e.preventDefault();
    const h=await atelierHash((a("atelierKey")||{}).value||"");
    if(h!==ATELIER_H){g(cdxT("atelier.bad"),!0);return}
    atelierLive=!0;atelierMark();atelierDash("home");
    const idList=list.map(c=>c.id);
    G();
    const ok=await wipeWiki(idList);
    dropLocal(idList);
    if(o.watchId&&idList.includes(o.watchId))o.watchId=null;
    o.selected=new Set([...o.selected].filter(id=>!idList.includes(id)));
    C();
    g(ok?cdxT("atelier.wiped"):cdxT("atelier.wipefail"),!ok);
  };
}
function hideKey(game,tok){
  H.hideKeys=H.hideKeys||{};
  const arr=H.hideKeys[game]||[];
  if(!arr.includes(tok))arr.push(tok);
  H.hideKeys[game]=arr;
  const custom=(d.keys[game]||[]).filter(x=>x!==tok);
  if(custom.length!==(d.keys[game]||[]).length){d.keys[game]=custom;M()}
  oe();
}
function askHideKey(game,tok,after){
  ce(cdxT("Retirer cette touche ?"),`<p>${cdxT("Retirer")} <b>${l(tok)}</b> ${cdxT("de la palette")} ?</p><p class="muted small">${l(cdxT("pal.hide.hint"))}</p><div class="row"><button type="button" class="danger" id="hideKeyYes">${cdxT("Retirer")}</button><button type="button" id="hideKeyNo">${cdxT("Annuler")}</button></div>`);
  const yes=a("hideKeyYes"),no=a("hideKeyNo");
  if(yes)yes.onclick=()=>{hideKey(game,tok);G();after&&after()};
  if(no)no.onclick=G;
}
let palHeld=null,palTap={n:0,tok:"",t:0,timer:0,where:"",idx:-1},seqTap={n:0,i:-1,t:0,timer:0};
function palGame(){return o.tab==="create"&&o.draft?o.draft.game:o.game}
function palGhostShow(tok,x,y){const el=a("palGhost");if(!el)return;el.textContent=tok;el.classList.remove("hidden");el.style.transform=`translate(${x+12}px,${y+12}px)`}
function palGhostHide(){const el=a("palGhost");if(el)el.classList.add("hidden")}
function palPick(tok,from,index){
  palHeld={tok,from,index,game:palGame()};
  document.body.classList.add("pal-holding");
  document.querySelectorAll(".pal-tok.is-held").forEach(n=>n.classList.remove("is-held"));
  const hit=[...document.querySelectorAll(".pal-tok")].find(n=>n.dataset.pal===tok);
  if(hit)hit.classList.add("is-held");
  g(cdxT("pal.held").replace("{0}",tok));
}
function palCancelHold(){
  palHeld=null;
  document.body.classList.remove("pal-holding");
  document.querySelectorAll(".pal-tok.is-held").forEach(n=>n.classList.remove("is-held"));
  palGhostHide();
}
function palDropPal(beforeTok){
  if(!palHeld)return;
  const game=palHeld.game,tok=palHeld.tok,keys=Ae(game).slice();
  const from=keys.findIndex(k=>k===tok);
  const target=beforeTok&&beforeTok!==tok?keys.findIndex(k=>k===beforeTok):-1;
  if(from<0||target<0){palCancelHold();return}
  keys.splice(from,1);
  keys.splice(Math.max(0,Math.min(keys.length,target)),0,tok);
  savePalOrder(game,keys);
  palCancelHold();
  try{Z()}catch{}
  try{raPadDraw()}catch{}
}
function palDropSeq(at){
  if(!palHeld)return;
  if(palHeld.from==="seq"&&o.draft){
    const arr=o.draft.tokens,from=palHeld.index,tok=arr[from];
    if(tok==null){palCancelHold();return}
    const dest=Number(at);
    arr.splice(from,1);
    const to=Number.isFinite(dest)?Math.max(0,Math.min(arr.length,dest)):arr.length;
    arr.splice(to,0,tok);
    o.insertAt=null;P();x();
  }else if(o.draft){
    it(palHeld.tok);
  }
  palCancelHold();
}
function palFlush(){if(palTap.n===1&&palTap.timer&&palTap.fire){clearTimeout(palTap.timer);palTap.fire()}}
function palClickTok(e,kind){
  const btn=e.target.closest(kind==="replay"?"[data-ra-tok]":"[data-key]");
  if(!btn){if(palHeld)palCancelHold();return}
  const tok=kind==="replay"?btn.dataset.raTok:btn.dataset.key;
  if(!tok)return;
  if(palHeld){
    e.preventDefault();
    if(palHeld.from==="seq")palDropSeq(o.draft?o.draft.tokens.length:0);
    else palDropPal(tok);
    return;
  }
  if(palLP&&palLP.fired){palLP=null;e.preventDefault();return}
  const write=()=>{if(kind==="replay")raStamp(tok);else it(tok)};
  if(!isAtelier()){write();return}
  const now=Date.now(),game=palGame();
  if(palTap.tok!==tok||palTap.where!==kind||now-palTap.t>460){
    palFlush();
    palTap={n:1,tok,t:now,timer:0,where:kind};
  }else{palTap.n++;palTap.t=now}
  clearTimeout(palTap.timer);
  if(palTap.n>=3){
    palTap.n=0;
    askHideKey(game,tok,()=>{try{Z()}catch{}try{raPadDraw()}catch{}});
    return;
  }
  if(palTap.n===2){palTap.timer=setTimeout(()=>{if(palTap.n===2&&palTap.tok===tok){write();write()}},260);return}
  palTap.fire=()=>{palTap.timer=0;write()};
  palTap.timer=setTimeout(()=>{if(palTap.n!==1||palTap.tok!==tok)return;palTap.fire()},260);
}
let palLP=null;
document.addEventListener("pointerdown",e=>{const btn=e.target.closest("#palette [data-key],[data-ra-tok]");if(!btn||palHeld)return;const tok=btn.dataset.key||btn.dataset.raTok;if(palLP)clearTimeout(palLP.t);const lp={x:e.clientX,y:e.clientY,fired:!1};lp.t=setTimeout(()=>{lp.fired=!0;palPick(tok,"pal",-1)},2000);palLP=lp});
document.addEventListener("pointermove",e=>{if(palLP&&!palLP.fired&&Math.hypot(e.clientX-palLP.x,e.clientY-palLP.y)>12){clearTimeout(palLP.t);palLP=null}});
document.addEventListener("pointerup",()=>{if(palLP&&!palLP.fired){clearTimeout(palLP.t);palLP=null}});
document.addEventListener("pointercancel",()=>{if(palLP){clearTimeout(palLP.t);palLP=null}});
document.addEventListener("contextmenu",e=>{if(palLP&&e.target.closest("#palette [data-key],[data-ra-tok]"))e.preventDefault()});
document.addEventListener("mousemove",e=>{if(palHeld)palGhostShow(palHeld.tok,e.clientX,e.clientY)});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&palHeld){e.preventDefault();palCancelHold()}});
function palBucket(t,e){if(e==="t8"){if(/^(?:n|[ubf]|d(?:\/[fb])?|u\/[fb])$/.test(t))return"Directions";if(/^(?:[1-4]|[1-4]\+[1-4])$/.test(t)||/^(?:n|[ubf]|d(?:\/[fb])?|u\/[fb])\+[1-4]/.test(t))return"Debout";return"Mécaniques"}if(e==="ssbu"){if(/(?:air)$/i.test(t)||t==="jump")return"Saut";if(/^(?:A|B|tilt|utilt|ftilt|dtilt|smash|fsmash|usmash|dsmash|grab|shield|dodge)$/i.test(t))return"Debout";return"Mécaniques"}if(/^j\./i.test(t))return"Saut";if(/^2(?:\[|[A-Za-z.])/.test(t))return"Accroupi";if(/^[1-9]{2,}/.test(t)||/^\[[1-9]\]/.test(t)||/^[146]\[[A-Za-z]/.test(t))return"Spéciaux";if(TOK_BTN.test(t)||(PAD_BTNS[e]||[]).includes(t))return"Debout";if(/^(?:[cf]\.|cl\.)?[1-9]?[A-Z]{1,3}$/.test(t)||/^5[\[A-Z0-9\]]+$/i.test(t)||/^6[A-Z]$/.test(t))return"Debout";return"Mécaniques"}function Z(){const e=o.draft.game;try{padRelabel()}catch{}a("paletteGame").textContent="— "+b[e].name;
  a("padDock").innerHTML=`${dirPadHtml(e)}<div class="pad-attacks"><span class="pal-label">${cdxT("Touches")} ${l(b[e].short||b[e].name)}</span><div class="buttons">${(PAD_BTNS[e]||[]).map(s=>`<button data-key="${l(s)}" class="${tokCls(s,e).trim()}" data-tip="${l(tokTip(s,e))}">${l(s)}</button>`).join("")}</div></div>`;
  const g={Directions:[],Debout:[],Accroupi:[],Saut:[],"Spéciaux":[],"Mécaniques":[]};for(const t of Ae(e))g[palBucket(t,e)].push(t);a("palette").innerHTML=Object.entries(g).filter(([,t])=>t.length).map(([t,n])=>`<div class="pal-group"><span class="pal-label">${cdxT(t)}</span><div class="buttons">${n.map(s=>palTokBtn(s,e,`data-key="${l(s)}"`)).join("")}</div></div>`).join("")+(e==="ggst"?`<div class="legend small muted"><span><i class="kP"></i>P · Punch</span><span><i class="kK"></i>K · Kick</span><span><i class="kGS"></i>S · Slash</span><span><i class="kH"></i>H · Heavy Slash</span><span><i class="kD"></i>D · Dust</span><span><i class="mod"></i>${cdxT("dl = retardé")}</span></div>`:e==="t8"?`<div class="legend small muted"><span>↖ u/b</span><span>↑ u</span><span>↗ u/f</span><span>← b</span><span>→ f</span><span>↙ d/b</span><span>↓ d</span><span>↘ d/f</span><span>${cdxT("d/f+2 = direction + coup")}</span></div>`:e==="ssbu"?"":e==="sf6"?`<div class="legend small muted"><span><i class="kL"></i>LP</span><span><i class="kM"></i>MP</span><span><i class="kH"></i>HP</span><span><i class="kL"></i>LK</span><span><i class="kM"></i>MK</span><span><i class="kH"></i>HK</span><span><i class="mod"></i>DR · DI · OD</span></div>`:e==="al"?`<div class="legend small muted"><span><i class="kL"></i>A</span><span><i class="kM"></i>B</span><span><i class="kH"></i>C</span><span><i class="kS"></i>F · Flow</span><span><i class="mod"></i>${cdxT("dl = retardé")}</span></div>`:e==="cotw"?`<div class="legend small muted"><span><i class="kL"></i>A</span><span><i class="kM"></i>B</span><span><i class="kH"></i>C</span><span><i class="kS"></i>D</span><span>REV</span><span><i class="mod"></i>${cdxT("dl = retardé")}</span></div>`:`<div class="legend small muted"><span><i class="kL"></i>${cdxT("Léger")}</span><span><i class="kM"></i>${cdxT("Moyen")}</span><span><i class="kH"></i>${cdxT("Fort")}</span><span><i class="kS"></i>${cdxT("Spécial")}</span><span><i class="mod"></i>${cdxT("dl = retardé")}</span></div>`)}function P(){const e=o.draft.tokens;a("sequenceEditor").innerHTML=e.length?`<div class="seq seq-wiki">${e.map((s,r)=>`<span class="seq-item" data-remove="${r}" title="${cdxT("Retirer")}">${tokMark(s,o.draft.game)}</span>`).join('<span class="seq-sep" aria-hidden="true">&gt;</span>')}</div>`:`<span class="muted small">${cdxT("Séquence vide : clique sur une commande de la palette.")}</span>`;a("undoToken").disabled=a("clearTokens").disabled=!e.length;const n=a("insertHint");n.classList.add("hidden");n.innerHTML="";syncSeqNotch()}
function syncSeqNotch(){const el=a("seqNotch");if(!el||!o.draft||document.activeElement===el)return;el.value=joinTokens(o.draft.tokens||[])}
function applySeqNotch(){
  const el=a("seqNotch");if(!el||!o.draft)return;
  const raw=el.value.trim();
  if(!raw){o.draft.tokens=[];o.insertAt=null;P();Z();x();return}
  let toks=[];
  try{const peeled=peelCombo(raw);toks=peeled.tokens&&peeled.tokens.length?peeled.tokens:xe(raw)}catch{toks=xe(raw)}
  toks=(toks||[]).map(t=>String(t||"").trim()).filter(t=>t&&!isWikiJunk(t));
  if(!toks.length){g("Séquence non reconnue. Garde 5L > 5[H] > j.XX",!0);el.value=joinTokens(o.draft.tokens);return}
  o.draft.tokens=toks;o.insertAt=null;
  try{harvestKeys(o.draft.game,toks)}catch{}
  P();Z();x();g("Séquence mise à jour.");
}
function x(){ie();const e=o.draft,t=[e.difficulty,e.position,e.meter,b[e.game].noAssist?null:e.assist,b[e.game].special?e.special:null,...extraChips(e)].filter(Boolean).map(n=>`<span class="chip">${l(cdxT(n))}</span>`).join("")+dnaHtml(e);a("editPreview").innerHTML=`<b>${l(e.name||cdxT("Combo sans titre"))}</b>
    <div class="muted small">${l(b[e.game].name)} · ${l(charLabel(e.character))}</div>
    <div class="chips" style="margin:9px 0">${t}</div>
    <div class="seq">${K(e.tokens,cdxT("Aucune commande"),e.game)}</div>
    ${e.desc?`<div class="combo-desc"><span class="combo-desc-k">${cdxT("Description du combo")}</span><span class="combo-desc-v">${l(e.desc)}</span></div>`:""}
    <div class="muted small">${cdxT("Dégâts :")} ${l(e.damage||"—")} · ${e.verified?cdxT("✓ Testé en lab"):cdxT("Non vérifié")} · ${e.favorite?cdxT("★ Favori"):"☆"}</div>`}function rt(e){const t=[];return e.name.trim()||t.push(["editName","Donne un nom au combo."]),e.tokens.length||hasVid(e.video)||t.push([null,"Ajoute une séquence, ou seulement un lien YouTube ou X pour un combo vidéo."]),e.damage!==""&&(!Number.isFinite(Number(e.damage))||Number(e.damage)<0)&&t.push(["editDamage","Le nombre de dégâts doit être positif."]),e.video&&!hasVid(e.video)&&t.push(["editVideo","Le lien vidéo doit être YouTube (youtube.com, youtu.be) ou X (x.com, twitter.com)."]),t}function openSavePop(){
  if(!o.draft)return;
  ie();x();
  const e=o.draft,errs=rt(e),preview=a("editPreview").innerHTML;
  const err=errs.length?`<div class="status bad"><b>${cdxT("Impossible d’enregistrer :")}</b><ul>${errs.map(([,m])=>`<li>${l(cdxT(m))}</li>`).join("")}</ul></div>`:"";
  const btns=errs.length
    ?`<div class="row" style="margin-top:14px"><button type="button" data-save-cancel>${cdxT("Fermer")}</button></div>`
    :`<div class="row" style="margin-top:14px;gap:10px;justify-content:flex-end"><button type="button" data-save-cancel>${cdxT("Annuler")}</button><button type="button" class="save-combo" data-save-confirm>${cdxT("Enregistrer le combo")}</button></div>`;
  ce(cdxT("Aperçu de la fiche"), `<div class="save-pop"><div class="subpanel">${preview}</div>${err}${btns}</div>`);
}
function be(){ie();const e=o.draft,t=rt(e);for(const c of["editName","editDamage","editVideo"])a(c).removeAttribute("aria-invalid");const n=a("editErrors");if(t.length){for(const[m]of t)m&&a(m).setAttribute("aria-invalid","true");n.innerHTML="<b>"+cdxT("Impossible d’enregistrer :")+"</b><ul>"+t.map(([,m])=>`<li>${l(cdxT(m))}</li>`).join("")+"</ul>",n.classList.remove("hidden");const c=t.find(([m])=>m);c&&a(c[0]).focus();return}n.classList.add("hidden");const s={...e,name:e.name.trim(),tokens:[...e.tokens],video:xid(e.video)?xHref(e.video):e.video,origin:e.origin||"create"};Object.assign(s,labPatch(labFromForm(!!e.verified,o.mode==="edit"?L(o.sourceId):null)));harvestKeys(s.game,s.tokens);let r;if(o.mode==="edit"&&L(o.sourceId)&&!isAtelier()){const prev=L(o.sourceId),skip=new Set(["id","createdAt","updatedAt","lab","verified","reports","editReq","favorite"]),diff={};for(const k of Object.keys(s))if(!skip.has(k)&&JSON.stringify(s[k])!==JSON.stringify(prev[k]))diff[k]=s[k];const at=new Date().toISOString();Object.assign(prev,{lab:s.lab,verified:s.verified,updatedAt:at});if(Object.keys(diff).length)prev.editReq={patch:diff,at};M();publishQuiet(prev);o.game=prev.game,o.char=prev.character,o.focusId=prev.id,o.draft=null,o.mode="create",o.sourceId=null,j("people"),g(cdxT("edit.req.sent"));return}if(o.mode==="edit"&&L(o.sourceId)){const{id:c,createdAt:m,...p}=s;r=ae(o.sourceId,p)}else r={...s,id:Se(),createdAt:new Date().toISOString(),parentId:o.mode==="variant"?o.sourceId:null},$e(r);const i=o.mode==="edit"?"mis à jour":"enregistré";o.game=r.game,o.char=r.character,o.focusId=r.id,o.watchId=r.video?r.id:null,o.draft=null,o.mode="create",o.sourceId=null,j("people"),g(`Combo ${i} pour ${r.character}.`)}function it(e){const g=o.draft.game,t=o.draft.tokens,dir=/^[1-9]$/.test(e),atk=(PAD_BTNS[g]||[]).includes(e),last=t[t.length-1],glue=g!=="t8"&&g!=="ssbu";const t8dir=/^(?:n|[ubf]|d(?:\/[fb])?|u\/[fb])$/.test(e),t8btn=/^(?:[1-4]|[1-4]\+[1-4])$/.test(e);if(g==="t8"&&o.insertAt==null&&t8btn&&last&&/^(?:n|[ubf]|d(?:\/[fb])?|u\/[fb])$/.test(last))t[t.length-1]=last+"+"+e;else if(glue&&o.insertAt==null&&dir&&last&&/^[1-9]{1,5}$/.test(last)&&last.length<5)t[t.length-1]=last+e;else if(glue&&o.insertAt==null&&atk&&last&&/^[1-9]{1,5}$/.test(last))t[t.length-1]=last+e;else if(o.insertAt!=null)t.splice(o.insertAt,0,e),o.insertAt++;else t.push(e);P(),Z(),x()}function ct(){V("create",st),a("editGame").onchange=e=>{ie(),o.draft.game=e.target.value,o.draft.character=T(e.target.value)[0].name,k(a("editChar"),T(e.target.value).map(t=>[t.name,charLabel(t.name)]),o.draft.character),Me(!0),Z(),x()},Object.values(se).concat(["editChar","editVerified","editFavorite"]).forEach(e=>a(e).addEventListener("input",x)),a("editChar").addEventListener("change",x),a("extrasWrap").addEventListener("change",x),a("dnaWrap").onclick=e=>{const t=e.target.closest("[data-dna]");if(!t)return;const n=o.draft.dna||(o.draft.dna=[]),s=t.dataset.dna,r=n.indexOf(s);r<0?n.push(s):n.splice(r,1),t.setAttribute("aria-pressed",r<0),x()},a("palette").onclick=e=>palClickTok(e,"create"),a("padDock").onclick=e=>{if(palHeld){palCancelHold();return}const t=e.target.closest("[data-key]");t&&(palFlush(),it(t.dataset.key))},a("customKeyForm")&&(a("customKeyForm").onsubmit=e=>{e.preventDefault();const t=normTok(a("customKey").value);if(!t.length)return;const n=o.draft.game,f=t.filter(x=>!Ae(n).includes(x));if(!f.length)return g("Commande déjà présente dans la palette.",!0);f.forEach(x=>ze(n,x)),a("customKey").value="",Z(),g("Commande ajoutée à la palette de "+b[n].name+".")}),a("sequenceEditor").onclick=e=>{const t=e.target.closest("[data-remove]");if(!t||!o.draft)return;const s=Number(t.dataset.remove);if(!Number.isFinite(s))return;if(palHeld){palDropSeq(s);return}const now=Date.now();if(seqTap.i!==s||now-seqTap.t>460)seqTap={n:1,i:s,t:now,timer:0};else{seqTap.n++;seqTap.t=now}clearTimeout(seqTap.timer);if(seqTap.n>=2){seqTap.n=0;palPick(o.draft.tokens[s],"seq",s);return}seqTap.timer=setTimeout(()=>{if(seqTap.n!==1||seqTap.i!==s||!o.draft)return;o.draft.tokens.splice(s,1);o.insertAt=null;P();x()},260);},a("insertHint").onclick=e=>{e.target.closest("[data-cancel-insert]")&&(o.insertAt=null,P())},a("undoToken").onclick=()=>{palFlush(),o.draft.tokens.pop(),o.insertAt=null,P(),x()},a("clearTokens").onclick=()=>{o.draft.tokens.length>3&&!confirm(cdxT("Effacer toute la séquence ?"))||(o.draft.tokens=[],o.insertAt=null,P(),x())},a("seqNotch")&&(a("seqNotch").addEventListener("keydown",e=>{if(e.key==="Enter"&&!e.ctrlKey&&!e.metaKey){e.preventDefault();applySeqNotch()}}),a("seqNotch").addEventListener("change",applySeqNotch)),a("saveCombo").onclick=openSavePop;const _sc2=a("saveComboCmd");if(_sc2)_sc2.onclick=openSavePop;a("cancelEdit").onclick=()=>X(o.draft.game,o.draft.character),a("create").addEventListener("keydown",e=>{e.key==="Enter"&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),Ie()&&a("modalBody").querySelector("[data-save-confirm]")?(G(),be()):openSavePop())}),a("modalBody").addEventListener("click",e=>{if(e.target.closest("[data-save-confirm]")){e.preventDefault();G();be()}else if(e.target.closest("[data-save-cancel]")){e.preventDefault();G()}})}const Te=150,lt=/(?:Access Denied|Protected by Anubis|Anubis version|captcha|Just a moment|error code [a-f0-9]{8,})/i,ut=/\s*(?:→|›|>|\||,|»|\s+xx\s+)\s*/,je=e=>lt.test(e),xe=e=>normTokens(e.split(ut));function isWikiJunk(s){s=String(s||"").trim().toLowerCase();return/^(any|easy|medium|hard|very|corner|midscreen|anywhere|example|combo|toggle|notes?|title|damage|position|difficulty|team|meter|gain|this|that|the|and|with|from|into|then|works|basic|please|fill|better|documentation|template|header|notation)$/i.test(s)}
function isComboCmd(s){s=String(s||"").trim();if(!s||s.length>28||/\s/.test(s))return!1;if(isWikiJunk(s))return!1;const low=s.toLowerCase();if(MECH[low])return!0;if(/^(?:n|[ubf]|d(?:\/[fb])?|u\/[fb])(?:\+[1-4](?:\+[1-4])?)?$/.test(s))return!0;if(/^(?:[1-4](?:\+[1-4])?)$/.test(s))return!0;if(/^(jc|9jc|sjc|sj|land|dash|jump|wallbreak|wb|otg|tk|dl|ws|tag|ihc|ahc|adc)$/i.test(s))return!0;if(/^(?:66|44|236|214|623|421|22|9|8|7|6|4|3|1)$/.test(s))return!0;if(/^(?:j\.|c\.|f\.|s\.|sj\.|dl\.)?(?:[1-9]\d{0,7})?[A-Za-z]{1,4}(?:\+[A-Za-z0-9]{1,4})+$/i.test(s))return!0;if(/^(?:j\.|c\.|f\.|s\.|sj\.|dl\.)?(?:LP|MP|HP|LK|MK|HK|HS|PP|KK|XX|S[12]|A[12]|[LMHSPKABCDF]|[LMH][12])$/i.test(s))return!0;if(/^(?:j\.|c\.|f\.|s\.|sj\.|dl\.)?(?:\[\d\])?[1-9]\d{0,7}(?:XX|[A-Za-z]{1,4})$/i.test(s))return!0;if(/^(?:j\.|c\.|f\.|s\.|sj\.|dl\.)?(?:\d{0,8})?\[[A-Za-z0-9]{1,10}\]$/i.test(s))return!0;if(/^(?:j\.|c\.|f\.|s\.|sj\.|dl\.)?\[\d\][A-Za-z0-9]{1,8}$/i.test(s))return!0;if(/^(?:j\.|c\.|f\.|s\.|sj\.|dl\.)[A-Za-z]{1,4}$/i.test(s))return!0;if(/^[A-Z]{2,4}$/.test(s))return!0;return!1}
function looksLikeProse(s){s=String(s||"").trim();if(!s)return!1;if(/^(an|a|the|this|that|it'?s|its|very|extremely|basic|un|une|le|la|les|quick|easy|recommended|combo|example)\b/i.test(s))return!0;return s.length>=12&&/\s/.test(s)&&/[a-z]{4,}/.test(s)}
function isExampleRow(s){s=String(s||"");return/example combo|please fill in better combos|this is an example combo/i.test(s)}
function scrubWikiJunk(s){s=String(s||"").replace(/&gt;/gi,">").replace(/\u00a0/g," ").replace(/▷/g,">");s=s.replace(/([A-Za-z0-9])(?=[A-Z][a-z])/g,"$1 ");s=s.replace(/Toggle Notes?/gi," ");s=s.replace(/Example Combo/gi," ");s=s.replace(/\b(?:Any\s*,\s*)+Any\b/gi," ");s=s.replace(/[—–]+/g," ");s=s.replace(/\s+/g," ").trim();return s}
function peelCombo(raw){raw=scrubWikiJunk(raw);const parts=raw.split(/\s*(?:→|›|>|»|▷|\s+xx\s+)\s*/).map(x=>x.trim()).filter(Boolean),tokens=[],extra=[],cmdHead=/^((?:j\.|c\.|f\.|s\.|sj\.|dl\.)?(?:\[\d\])?(?:[1-9]\d{0,7})?(?:XX|[A-Za-z]{1,4}(?:\+[A-Za-z0-9]{1,4})*))(?:\s*,\s*|\s+)([\s\S]+)$/;for(const p of parts){const pack=x=>{const a=String(x||"").split(/\s+/).filter(Boolean);return a.length&&a.every(y=>isComboCmd(y)||MECH[String(y).toLowerCase()]||y==="dl")?a:null};const m=p.match(cmdHead);if(m&&isComboCmd(m[1])){const rest=pack(m[2]);if(rest){tokens.push(m[1],...rest);continue}if(looksLikeProse(m[2])||isWikiJunk(m[2].split(/\s+/)[0])){tokens.push(m[1]);if(!isWikiJunk(m[2])&&looksLikeProse(m[2]))extra.push(m[2].replace(/^[,.\s]+/,"").trim());continue}}const bits=p.split(/\s*(?:\||(?<!\d),(?!\d))\s*/).map(x=>x.trim()).filter(Boolean);for(let i=0;i<bits.length;i++){const bit=bits[i],hm=bit.match(cmdHead);if(hm&&isComboCmd(hm[1])){const rest=pack(hm[2]);if(rest){tokens.push(hm[1],...rest);continue}if(looksLikeProse(hm[2])||isWikiJunk(hm[2].split(/\s+/)[0])){tokens.push(hm[1]);if(looksLikeProse(hm[2]))extra.push(hm[2]);break}}const packed=pack(bit);if(packed){tokens.push(...packed);continue}if(isComboCmd(bit)||MECH[String(bit).toLowerCase()]){tokens.push(bit);continue}if(isWikiJunk(bit))continue;if(looksLikeProse(bit)||(bit.length>=10&&/[a-zA-Z]{4,}/.test(bit)&&!/^(mid\s*screen|midscreen|corner|anywhere|meterless|jump|near corner)$/i.test(bit))){extra.push(bits.slice(i).join(", "));break}}}return{tokens:normTokens(tokens).filter(t=>isComboCmd(t)||t==="dl"||MECH[String(t).toLowerCase()]),desc:extra.join(" ").replace(/^\s*[,|·•:\-–—]+\s*/,"").trim()}}
function comboLikely(s){s=scrubWikiJunk(s);if(!s||s.length<5||isExampleRow(s))return!1;const n=(s.match(/\b(?:j\.|c\.|f\.|dl\.)?(?:[1-9]\d{0,7})?[A-Za-z]{1,4}(?:\+[A-Za-z0-9]{1,4})?\b/g)||[]).length;return n>=2&&/[>→›»▷,]/.test(s)}
function lineToImport(u,n){const seq=typeof u==="object"&&u?u.seq:u,title=typeof u==="object"&&u?String(u.title||"").trim():"",hint=typeof u==="object"&&u?String(u.desc||"").trim():"";if(isExampleRow(String(seq)+" "+title+" "+hint))return null;const p=peelCombo(seq);if(p.tokens.length<2)return null;const desc=[hint,p.desc].filter(Boolean).join(" ").trim();return{name:title&&title.length<80?title:"Combo importé "+n,tokens:p.tokens,raw:joinTokens(p.tokens),desc}}
function comboDescOf(e){if(e&&e.desc)return String(e.desc).trim();const n=String(e&&e.notes||""),m=n.match(/Texte\s*:\s*([\s\S]+)/);if(m){const p=peelCombo(m[1]);return p.desc}return""}
function comboLabOf(e){const n=String(e&&e.notes||"");return/Texte\s*:/.test(n)||/^Séquence importée/.test(n)?"":n}
function cleanNotation(s){
  return String(s||"")
    .replace(/\(\s*(\d+)\s*hits?\s*\)\s*/gi,"")
    .replace(/(?:delayed\s*)?\bAir\s*(?=Air|delayed|\d|$)/g,"")
    .replace(/([1-9])\s*Neutral\s*/g,"$1")
    .replace(/j\.\s*Jumping\s*/gi,"j.")
    .replace(/dl\.\s*Delay\s*/gi,"dl.")
    .replace(/\bdelayed\s+/gi,"dl.")
    .replace(/\bj\.dl\./g,"dl.j.")
    .replace(/\bj\.5(?=[A-Z[])/g,"j.")
    .replace(/(^|[\s.>])([1-9])\s+(?=(?:[LMHSUAT]\d?|\[[A-Z0-9]+\])(?![a-z]))/g,"$1$2")
    .replace(/([LMHS]\d?|\])(?=[1-9](?:[LMHSUAT]|\[))/g,"$1 ")
    .replace(/[ \t]{2,}/g," ").trim();
}
function comboView(e){const peeled=peelCombo(joinTokens(e&&e.tokens||[]));const tokens=peeled.tokens.length?peeled.tokens:normTokens(e&&e.tokens||[]);const desc=cleanNotation(String(e&&e.desc||"").trim()||peeled.desc||comboDescOf(e));return{tokens,desc,lab:comboLabOf(e)}}
function harvestKeys(game,tokens){if(!game||!b[game])return 0;const have=new Set(Ae(game).map(x=>String(x).toLowerCase()));let n=0;for(const raw of tokens||[]){const t=String(raw||"").trim();if(!t||t==="dl"||have.has(t.toLowerCase())||isWikiJunk(t))continue;if(!(isComboCmd(t)||MECH[t.toLowerCase()]))continue;ze(game,t);have.add(t.toLowerCase());n++}return n}
function wikiExtract(doc){const out=[];const titleOf=el=>{const box=el.closest&&el.closest(".TheoryBoxContainer")||el;const t=box.querySelector&&box.querySelector(".TheoryBoxTitle span");return t?String(t.textContent||"").trim():""};
for(const box of doc.querySelectorAll(".TheoryBoxContainer")){const recipe=box.querySelector("code.ComboText, .ComboText");if(!recipe)continue;const seq=scrubWikiJunk(recipe.textContent);if(!comboLikely(seq))continue;let desc="";const p=recipe.closest("p");if(p){const clone=p.cloneNode(!0);clone.querySelectorAll("code, .ComboText, style, link, figure, video").forEach(x=>x.remove());desc=String(clone.textContent||"").replace(/\s+/g," ").trim()}out.push({seq,desc,title:titleOf(box)})}
for(const row of doc.querySelectorAll(".comboTableRow")){const blob=row.textContent||"";if(isExampleRow(blob))continue;const col=row.querySelector(".comboTableNotationColumn");if(!col)continue;const groups=[...col.querySelectorAll(".toggle-group-a, .toggle-group-b")];const seqs=[...new Set((groups.length?groups:[col]).map(g=>scrubWikiJunk(g.textContent)).filter(comboLikely))];const title=scrubWikiJunk((row.querySelector(".comboTableTitleColumn")||{}).textContent||"");const notes=scrubWikiJunk((row.querySelector(".comboTableNotesRow, .mw-collapsible")||{}).textContent||"");for(const seq of seqs)out.push({seq,desc:notes,title})}
return out}
function mt(e,t=""){let n=null;try{n=new URL(e)}catch{}const s=n?decodeURIComponent(n.pathname).replace(/[_-]/g," "):"",r=(n==null?void 0:n.hostname.toLowerCase())||"";let i="",c="";if(t&&/<[a-z][\s\S]*>/i.test(t)){const v=new DOMParser().parseFromString(t,"text/html");i=v.title||"",c=[...v.querySelectorAll("h1")].slice(0,2).map(S=>S.textContent).join(" ")}const m=[s,i,c].filter(Boolean).map(w),p={};for(const[v,S]of Object.entries(b)){p[v]=0;for(const D of m)S.aliases.some(J=>(" "+D+" ").includes(" "+w(J)+" "))&&(p[v]+=3)}if(r.endsWith("dustloop.com"))for(const[v,S]of[[/\bmtfs\b/i,"tokon"],[/\bdbfz\b/i,"dbfz"],[/\bumvc3\b/i,"umvc3"],[/\bmvc2\b/i,"mvc2"]])v.test(s)&&(p[S]+=6);if(r.endsWith("supercombo.gg"))for(const v of["umvc3","mvc2","dbfz","2xko"])new RegExp("\\b"+v+"\\b","i").test(s)&&(p[v]+=6);const u=Object.entries(p).sort((v,S)=>S[1]-v[1]),f=u[0][1]>0&&u[0][1]>u[1][1]?u[0][0]:null;if(!f)return{game:null,char:null,reason:"Jeu non identifié avec certitude"};const h=[];for(const v of ke[f]||[]){const S=w(v);if(!S)continue;let D=0;m.forEach((J,Ge)=>{(" "+J+" ").includes(" "+S+" ")&&(D+=Ge===0?5:3)}),D&&h.push({name:v,score:D})}h.sort((v,S)=>S.score-v.score||S.name.length-v.name.length);const $=h.length&&(!h[1]||h[0].score>h[1].score)?h[0].name:null;return{game:f,char:$,reason:$?"Jeu et personnage reconnus":"Personnage non identifié avec certitude"}}function dt(e){const t=/<(?:table|tr|td|div|p|li|span|code)\b/i.test(e)?"html":"text";let n=[];if(t==="html"){const u=new DOMParser().parseFromString(e,"text/html");u.querySelectorAll("script,style,nav,footer,header,aside,svg,.toc,#toc,.notation-banner").forEach(f=>f.remove());const wiki=wikiExtract(u);if(wiki.length)n=wiki;else{for(const f of u.querySelectorAll("tr")){const h=[...f.querySelectorAll(":scope > td")].map($=>scrubWikiJunk($.textContent)).filter(Boolean);const blob=h.join(" ");if(isExampleRow(blob))continue;const cell=h.find(comboLikely);if(cell)n.push(cell)}for(const f of u.querySelectorAll("code.ComboText, .ComboText, li, pre")){if(f.closest&&f.closest(".notation-banner"))continue;const h=scrubWikiJunk(f.textContent);if(comboLikely(h))n.push(h)}}}else n=e.split(/\r?\n/).map(scrubWikiJunk).filter(Boolean);const s=[],r=new Set;for(let u of n){const seq=typeof u==="object"?u.seq:u;if(!seq||seq.length<5||seq.length>800||r.has(seq)||isExampleRow(typeof u==="object"?u.title+" "+u.seq+" "+u.desc:seq))continue;const row=lineToImport(u,s.length+1);if(!row)continue;r.add(seq);s.push(row);if(s.length>=Te)break}return{results:s,sourceType:t}}function pt(e){const t=e.replace(/\u00a0/g," ").trim().split(/\r?\n/).map(i=>i.trim()).filter(Boolean),n=[],s=new Set,r=/(?:\b(?:[1-9][LMHSU]|j\.?[LMHSU]|LP|MP|HP|LK|MK|HK|236|214|623|22|qcf|qcb|sjc?|5[LMHS]|2[LMHS])\b|[↓↘→←])/i;for(const i of t){if(i.length>800||!r.test(i)||s.has(i))continue;const row=lineToImport(i,n.length+1);if(!row)continue;s.add(i);n.push(row);if(n.length>=Te)break}return n}function ft(e){const t=new URL(e),n=t.hostname.toLowerCase();if(!["https:","http:"].includes(t.protocol))throw Error("Adresse HTTP(S) requise");const s=n==="www.dustloop.com"||n==="dustloop.com"?"dustloop":n==="wiki.supercombo.gg"?"supercombo":null;if(!s)return null;const r=t.pathname.match(/^\/w\/(.+)$/);return r?{kind:s,origin:t.origin,page:decodeURIComponent(r[1])}:null}function He(e){var n,s;if(e!=null&&e.error)throw Error(e.error.info||e.error.code||"Erreur du wiki");if((n=e==null?void 0:e.parse)!=null&&n.text)return typeof e.parse.text=="string"?e.parse.text:e.parse.text["*"]||"";const t=(s=e==null?void 0:e.query)==null?void 0:s.pages;return Array.isArray(t)?t.map(r=>{var i,c,m,p,u,f;return((p=(m=(c=(i=r.revisions)==null?void 0:i[0])==null?void 0:c.slots)==null?void 0:m.main)==null?void 0:p.content)||((f=(u=r.revisions)==null?void 0:u[0])==null?void 0:f.content)||""}).join(`
`):t&&typeof t=="object"?Object.values(t).map(r=>{var i,c,m,p,u,f;return((p=(m=(c=(i=r.revisions)==null?void 0:i[0])==null?void 0:c.slots)==null?void 0:m.main)==null?void 0:p["*"])||((f=(u=r.revisions)==null?void 0:u[0])==null?void 0:f["*"])||""}).join(`
`):""}function bt(e,t,n=1e4){return new Promise((s,r)=>{const i="comboDexWiki_"+Math.random().toString(36).slice(2),c=document.createElement("script");let m=!1;const p=(h,$)=>{m||(m=!0,clearTimeout(u),c.remove(),delete window[i],h?r(h):s($))},u=setTimeout(()=>p(new Error("Délai dépassé")),n);window[i]=h=>p(null,h);const f=new URL(e);for(const[h,$]of Object.entries(t))f.searchParams.set(h,$);f.searchParams.set("format","json"),f.searchParams.set("callback",i),c.onerror=()=>p(new Error("API inaccessible")),c.src=f.href,document.head.appendChild(c)})}async function he(e,t){const n=new AbortController,s=setTimeout(()=>n.abort(),9500);try{const r=await fetch(e,{signal:n.signal});if(!r.ok)throw Error("HTTP "+r.status);return t==="json"?He(await r.json()):await r.text()}finally{clearTimeout(s)}}let I=null,E=null;function ce(e,t,{close:n}={}){I=document.activeElement,E=n||null,a("modalTitle").textContent=e,a("modalBody").innerHTML=t,a("modal").classList.remove("hidden");try{hydrateXVideos(a("modalBody"))}catch{}(a("modalBody").querySelector("[autofocus]")||a("closeModal")).focus()}function G(){var e;a("modal").classList.contains("hidden")||(a("modal").classList.add("hidden"),a("modalBody").innerHTML="",o.trainId=null,E==null||E(),E=null,(e=I==null?void 0:I.focus)==null||e.call(I))}const Ie=()=>!a("modal").classList.contains("hidden");function ytEmbedUrl(id,extra){const p=new URLSearchParams({rel:"0",modestbranding:"1",playsinline:"1",feature:"oembed"});Object.entries(extra||{}).forEach(([k,v])=>{if(v==null||v===""||k==="origin"||k==="widget_referrer")return;p.set(k,String(v))});return"https://www.youtube.com/embed/"+id+"?"+p.toString()}
function ytIframe(id,cls,extra,iframeId){const idAttr=iframeId?` id="${l(iframeId)}"`:"";return `<iframe${idAttr} class="${cls||"video-frame"}" title="YouTube" src="${l(ytEmbedUrl(id,extra))}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`}
function le(e){const t=te(e);if(t){const n="https://www.youtube.com/watch?v="+encodeURIComponent(t);return`<div>${ytIframe(t)}
    <p class="small muted">Si la vidéo ne se lance pas (intégration désactivée par YouTube ou par son auteur), utilise le lien ci-dessous.</p>
    <a href="${n}" target="_blank" rel="noopener noreferrer">▶ Regarder directement sur YouTube ↗</a></div>`}const x=xid(e);if(x)return xBlock(x,!1);return'<div class="status bad">'+l(cdxT("x.bad"))+"</div>"}function leDock(e,preview){const t=te(e);if(t)return ytIframe(t);const x=xid(e);return x?xBlock(x,!0,preview):""}
function renderPersonDock(){
  const dock=a("personDock"); if(!dock)return;
  if(o.watchId){const w=L(o.watchId); if(!w||w.game!==o.game||w.character!==o.char) o.watchId=null}
  const list=q(o.game,o.char);
  const watch=o.watchId?L(o.watchId):null;
  const vid=watch&&watch.video?watch:list.find(c=>c.video);
  const clip=vid&&vid.video||(o.guestVideo?"https://www.youtube.com/watch?v="+o.guestVideo:"");
  const canReplay=clip&&hasVid(clip);
  dock.innerHTML=`<div class="person-dock-actions"><button class="primary" data-empty="create">${cdxT("Créer un combo")}</button><button data-empty="import">${cdxT("Importer depuis une URL")}</button>${canReplay?`<button data-action="replay" data-id="${l(vid&&vid.id||"")}">${cdxT("Replay Analyzer")}</button>`:""}</div>`+(clip?`<div class="person-dock-video">${leDock(clip)}${vid&&vid.name?`<div class="muted small person-dock-cap">${l(vid.name)}</div>`:""}</div>`:`<div class="person-dock-slot"></div>`);
  try{hydrateXVideos(dock)}catch{}
}
function ht(e){const t=L(e);if(!t||!t.video)return;o.watchId=e;o.game=t.game;o.char=t.character;j("people")}function gt(e){var n;const t=L(e);t&&(ce("S’entraîner — "+t.character,""),o.trainId=e,o.trainStreak=0,ue(),(n=a("trainSuccess"))==null||n.focus())}function ue(){const e=L(o.trainId);if(!e)return;const t=d.training[e.id]||{best:0,attempts:0,successes:0},n=t.attempts?Math.round((t.successes||0)/t.attempts*100):null,s=o.trainStreak>=o.trainGoal;a("modalBody").innerHTML=`<h3>${l(e.name)}</h3>
    <div class="seq train-seq">${K(e.tokens,void 0,e.game)}</div>
    ${e.video?`<details><summary>Voir la vidéo</summary><div style="margin-top:9px">${le(e.video)}</div></details>`:""}
    <div class="row between train-goal">
      <span>Objectif : réussir le combo <b>${o.trainGoal}</b> fois d’affilée</span>
      <div class="row">
        <button class="goal-btn" data-goal="-1" aria-label="Diminuer l’objectif" ${o.trainGoal<=1?"disabled":""}>−</button>
        <button class="goal-btn" data-goal="1" aria-label="Augmenter l’objectif" ${o.trainGoal>=20?"disabled":""}>+</button>
      </div>
    </div>
    <div class="subpanel" style="text-align:center">
      <div style="font-size:30px;font-weight:750" aria-live="polite">${o.trainStreak} / ${o.trainGoal}</div>
      <div class="meter"><div style="width:${Math.min(100,o.trainStreak/o.trainGoal*100)}%"></div></div>
      <p class="muted small">Meilleure série : ${t.best} · Tentatives : ${t.attempts}${n!=null?` · Réussite : ${n} %`:""}</p>
      ${s?'<b style="color:var(--good)">Objectif atteint !</b>':""}
    </div>
    <div class="grid2" style="margin-top:12px">
      <button id="trainSuccess" class="primary">✓ Combo réussi <span class="kbd">(Entrée)</span></button>
      <button id="trainFail">✕ Combo raté <span class="kbd">(Retour arrière)</span></button>
    </div>
    <p class="muted small">Fais le combo en entier, puis clique sur « Combo réussi » ou « Combo raté ». Un raté remet la série à zéro.</p>`;try{hydrateXVideos(a("modalBody"))}catch{}}function O(e){var n;const t=d.training[o.trainId]||{best:0,attempts:0,successes:0};t.attempts++,e?(o.trainStreak++,t.successes=(t.successes||0)+1,t.best=Math.max(t.best,o.trainStreak)):o.trainStreak=0,d.training[o.trainId]=t,M(),ue(),(n=a(e?"trainSuccess":"trainFail"))==null||n.focus()}function vt(){a("closeModal").onclick=G,a("modal").onclick=e=>{e.target===a("modal")&&G()},a("modalBody").oninput=e=>{e.target.id==="trainGoal"&&(o.trainGoal=Number(e.target.value),o.trainStreak=0,ue(),a("trainGoal").focus())},a("modalBody").addEventListener("click",e=>{if(!o.trainId)return;const t=e.target.closest("[data-goal]");if(t){const n=t.dataset.goal;o.trainGoal=Math.min(20,Math.max(1,o.trainGoal+Number(n))),o.trainStreak=0,ue();const s=a("modalBody").querySelector(`[data-goal="${n}"]`);(s&&!s.disabled?s:a("trainSuccess")).focus();return}e.target.closest("#trainSuccess")?O(!0):e.target.closest("#trainFail")&&O(!1)}),document.addEventListener("keydown",e=>{if(Ie()){if(e.key==="Escape")return G();!o.trainId||e.target.matches("input[type=range]")||e.target.closest("button,summary,a")&&!e.target.closest("#trainSuccess,#trainFail")||(e.key==="Enter"||e.key===" "?(e.preventDefault(),O(!0)):(e.key==="Backspace"||e.key.toLowerCase()==="x")&&(e.preventDefault(),O(!1)))}})}const me=(e,t)=>k(a("importChar"),T(e).map(n=>[n.name,charLabel(n.name)]),t);function yt(){var e;(e=o.importIdentity)!=null&&e.game||(k(a("importGame"),De(),o.game),me(o.game,o.char))}function A(e,t=!1){a("importStatus").className="status "+(t?"bad":""),a("importStatus").textContent=e}function Pe(e=""){const t=mt(a("importURL").value.trim(),e);o.importIdentity=t,t.game&&(a("importGame").value=t.game,me(t.game,t.char||void 0)),a("importIdentity").textContent=t.game&&t.char?`Destination reconnue : ${b[t.game].name} · ${t.char}.`:`Destination incertaine : ${t.reason}. Sélectionne le jeu et le personnage avant de valider.`,a("importIdentity").className="status "+(t.game&&t.char?"good":"bad"),N()}function N(){const e=o.importIdentity,t=e&&e.game===a("importGame").value&&e.char===a("importChar").value;a("importConfirm").classList.toggle("hidden",!!t||!o.importPreview.length),a("importManualConfirm").checked=!1}const ge=e=>e.join(">").toLowerCase();function F(e,t){o.importPreview=e;const n=new Set(q(a("importGame").value,a("importChar").value).map(s=>ge(s.tokens||[])));a("importResults").innerHTML=e.length?`<h3>Prévisualisation : ${y(e.length,"séquence")}</h3>
      <p class="small muted">${l(t)} Les lignes déjà présentes dans la bibliothèque sont décochées.</p>
      <div class="buttons" style="margin-bottom:8px"><button class="tiny" data-check="all">Tout cocher</button><button class="tiny" data-check="none">Tout décocher</button></div>
      <div class="importpre">${e.map((s,r)=>{const i=n.has(ge(s.tokens));return`<label class="checkrow"><input type="checkbox" class="candidate" value="${r}" ${i?"":"checked"}><span class="small">${l(s.raw)}${s.desc?` <span class="muted">— ${l(s.desc.length>90?s.desc.slice(0,90)+"…":s.desc)}</span>`:""}${i?` <span class="orphan-tag">${cdxT("déjà enregistré")}</span>`:""}</span></label>`}).join("")}</div>
      <button id="commitImport" class="primary" style="margin-top:12px">Ajouter les combos sélectionnés</button>`:"",N()}function de(e){if(je(e)){F([],""),A("Ce wiki refuse la lecture automatique. Aucun combo ajouté. Colle les combos ou importe un fichier HTML.",!0);return}Pe(e);const t=dt(e);F(t.results,"Extraction automatique : contrôle les commandes et conditions avant validation."),t.results.length||(a("importResults").innerHTML='<div class="empty">Aucune séquence détectée. Essaie une section de combos plus précise ou le copier-coller.</div>'),A(`${y(t.results.length,"séquence")} détectée${t.results.length>1?"s":""} (${t.sourceType==="html"?"page HTML":"texte"}).`)}function kt(){const e=a("importPaste").value;if(!e.trim())return A("Colle d’abord les lignes de combos copiées sur le wiki.",!0);if(de(e),o.importPreview.length)return;const t=pt(e);F(t,"Importation manuelle : vérifie les séquences et leur personnage avant validation."),t.length||(a("importResults").innerHTML='<div class="empty">Aucune ligne de commande reconnue. Copie une ou plusieurs séquences de coups depuis la page.</div>'),A(`${y(t.length,"ligne")} reconnue${t.length>1?"s":""} dans le texte collé.`,!t.length)}async function St(){const e=a("importURL").value.trim();if(!e)return A("Colle d’abord l’adresse d’une page de combos, un lien YouTube, ou un lien X.",!0);
if(te(e)||xid(e)){a("importYouTube").value=e;ve();return;}let t;try{t=ft(e)}catch(c){return A("Adresse invalide : "+c.message,!0)}Pe(),F([],""),a("importResults").innerHTML="";const n=a("importFetch");n.disabled=!0,n.textContent="Importation…";const s=[],r=(c,m)=>{if(!c||je(c))throw Error("page protégée ou vide");if(de(c),!o.importPreview.length)throw Error("aucune séquence reconnue");return A(`${y(o.importPreview.length,"séquence")} trouvée${o.importPreview.length>1?"s":""} · ${m}. Vérifie-les avant validation.`),!0},i=[];if(t){const c=t.kind==="dustloop"?DUST:t.kind==="supercombo"?SUPER:t.origin+(t.origin.includes("dustloop")?"/wiki/api.php":"/api.php");const m={action:"parse",page:t.page,prop:"text",formatversion:"2"};i.push({name:"API wiki",run:()=>{const p=new URL(c);Object.entries({...m,format:"json",origin:"*"}).forEach(([u,f])=>p.searchParams.set(u,f));return he(p.href,"json").then(He)}});i.push({name:"API wiki (JSONP)",run:()=>bt(c,m).then(He)})}i.push({name:"Page originale",run:()=>he(e,"html")});try{for(const c of i){A("Lecture : "+c.name+"…");try{if(r(await c.run(),c.name))return}catch(m){s.push(c.name+" : "+m.message)}}a("manualImport").open=!0,A("Lecture automatique indisponible. Ouvre « Coller des combos ou un fichier HTML » ci-dessus et colle les lignes du wiki. Détails : "+s.join(" ; "),!0),a("importPaste").focus()}finally{n.disabled=!1,n.textContent="Importer"}}function Ct(){const e=[...document.querySelectorAll(".candidate:checked")].map(p=>Number(p.value));const t=a("importGame").value,n=a("importChar").value,s=a("importURL").value.trim(),r=a("importYouTube").value.trim();if(r&&!hasVid(r))return g(cdxT("x.bad"),!0);if(!e.length){if(!hasVid(r))return g("Sélectionne au moins une séquence, ou colle une vidéo.",!0);const chars=importCharsOf(t,n);const ids=chars.map(ch=>addVideoCombo(r,t,ch)).filter(Boolean);if(!ids.length)return g("Choisis le jeu et le personnage.",!0);o.game=t;o.char=chars[0];o.watchId=ids[0];o.focusId=ids[0];j("people");g("Combo vidéo ajouté pour "+chars.map(charLabel).join(" · ")+".");return}const i=o.importIdentity;if((!i||i.game!==t||i.char!==n)&&!a("importManualConfirm").checked)return a("importConfirm").classList.remove("hidden"),a("importManualConfirm").focus(),g("Confirme le jeu et le personnage de destination (case à cocher).",!0);const c=new Date().toISOString();let m=0;const added=[];for(const p of e){const u=o.importPreview[p];if(!u)continue;harvestKeys(t,u.tokens);added.push(upsertCombo(markReview({...W(t,n),id:Se(),name:u.name,tokens:u.tokens,source:s,video:r,imported:!0,desc:u.desc||"",notes:"Séquence importée à vérifier en lab.",createdAt:c})));m++}if(added.length){publishWiki(added);if(added.some(c=>c.review==="pending"))g(cdxT("review.sent"))}M();const last=d.combos.filter(c=>c.game===t&&c.character===n).at(-1);o.game=t;o.char=n;o.watchId=last&&last.video?last.id:null;o.focusId=last?last.id:null;o.importPreview=[];o.importIdentity=null;a("importResults").innerHTML="";a("importPaste").value="";A("Aucune importation en cours.");j("people");g(`${y(m,"combo")} importé${m>1?"s":""} pour ${n}.`)}function addVideoCombo(url,game,char,name,origin){
  if(!hasVid(url)||!b[game]||!char)return null;
  const x=xid(url);
  const id=Se();
  $e({...W(game,char),id,name:name||cdxT("Combo vidéo"),tokens:[],video:x?xHref(url):url,imported:!0,origin:origin||"import",notes:"Combo vidéo à vérifier en lab.",createdAt:new Date().toISOString()});
  if(!isAtelier())g(cdxT("review.sent"));else if(x&&!xApproved(x))atelierDash("x");
  return id;
}
function rosterNames(game){return new Set((T(game)||[]).map(p=>p.name))}
function importCharsOf(game,char){
  const roster=rosterNames(game);
  const extra=(o.importChars||[]).filter(n=>roster.has(n));
  const list=[...new Set([char,...extra].filter(n=>n&&roster.has(n)))];
  return list.length?list:char?[char]:[];
}
function comboFolder(c){
  if(!c)return"write";
  if(c.origin==="replay")return"replay";
  if(hasVid(c.video))return"video";
  return"write";
}
function showVidPop(url,field){
  const game=a("importGame").value,char=a("importChar").value,x=xid(url);
  const chars=importCharsOf(game,char);
  const who=chars.map(charLabel).join(" · ");
  ce(cdxT("Vidéo importée"),`<div class="video-pop">${leDock(url,!0)}
    <p class="status" style="margin:10px 0 6px"><b>${l(cdxT("atelier.ask"))}</b></p>
    <p class="muted small" style="margin:0">${l(cdxT(x?"x.hint":"La vidéo s’affichera sur la fiche du personnage, au même endroit que les combos écrits."))}</p>
    <div class="row" style="margin-top:10px">
      <button type="button" class="primary" id="ytAddChar"${game&&chars.length?"":" disabled"}>${l(cdxT("atelier.yes"))}${who?" — "+l(who):""}</button>
      <button type="button" id="ytDrop">${l(cdxT("atelier.no"))}</button>
    </div></div>`);
  const add=a("ytAddChar"),drop=a("ytDrop");
  drop&&(drop.onclick=()=>{if(a(field))a(field).value="";o.importChars=[];G()});
  add&&(add.onclick=()=>{
    const ids=chars.map(ch=>addVideoCombo(url,game,ch)).filter(Boolean);
    if(!ids.length){g("Choisis d’abord le jeu et le personnage.",!0);return}
    o.game=game;o.char=chars[0];o.watchId=ids[0];o.focusId=ids[0];o.importChars=[];G();j("people");
    g("Combo vidéo ajouté pour "+chars.map(charLabel).join(" · ")+".");
  });
}
function importManual(){o.importChars=[];const v=((a("importYouTube")||{}).value||"").trim();if(v)o.importGuessFor=v}
function ve(){
  const e=a("importYouTube").value.trim();
  if(!e)return;
  const x=xid(e),manual=o.importGuessFor===e;
  o.importGuessFor=e;
  if(x&&!te(e)){
    (manual?Promise.resolve(null):applyXGuess(x,{fillImport:!0})).then(info=>{
      showVidPop(e,"importYouTube");
      if(manual)return;
      if(info&&info.game&&info.chars&&info.chars.length) A("Vidéo reconnue : "+b[info.game].name+" · "+info.chars.map(charLabel).join(" · ")+".");
      else A(cdxT("x.hint"));
    });
    return;
  }
  const id=te(e);
  if(!id){g(cdxT("x.need"),!0);return}
  (manual?Promise.resolve(null):applyYtGuess(id,{fillImport:!0})).then(info=>{
    showVidPop(e,"importYouTube");
    if(manual)return;
    if(info&&info.game&&info.char) A("Vidéo reconnue : "+b[info.game].name+" · "+info.char+".");
  });
}
function Lt(){V("import",yt),a("importGame").onchange=e=>{importManual(),me(e.target.value),N()},a("importChar").onchange=()=>{importManual(),N()},a("importURL").oninput=()=>{o.importIdentity=null,a("importIdentity").className="status",a("importIdentity").textContent=cdxT("Clique sur Importer pour identifier la destination."),a("importResults").innerHTML="",o.importPreview=[]},a("importForm").onsubmit=e=>{e.preventDefault(),St()},a("parsePaste").onclick=kt,a("importHTML").onchange=async e=>{const t=e.target.files[0];t&&de(await t.text()),e.target.value=""},a("importResults").onclick=e=>{e.target.closest("#commitImport")&&Ct();const t=e.target.closest("[data-check]");t&&document.querySelectorAll(".candidate").forEach(n=>n.checked=t.dataset.check==="all")},a("importYouTube").addEventListener("change",ve);const ytBtn=a("importYtBtn");if(ytBtn)ytBtn.onclick=()=>{const u=(a("importYouTube").value||"").trim();if(!u)return A(cdxT("x.need"),!0);if(!a("importURL").value.trim())a("importURL").value=u;if(!hasVid(u))return A(cdxT("x.bad"),!0);ve()}}const De=()=>Object.entries(b).map(([e,t])=>[e,t.name]).sort((x,y)=>x[1].localeCompare(y[1],"fr",{sensitivity:"base"}));function pe(){const e=q(o.game,o.char).filter(n=>!a("onlyFavorites").checked||d.fav.has(n.id)).filter(n=>[...o.dnaFilter].every(t=>(n.dna||[]).includes(t))),t={recent:(n,s)=>String(s.createdAt||"").localeCompare(String(n.createdAt||"")),name:(n,s)=>n.name.localeCompare(s.name,"fr",{numeric:!0}),damage:(n,s)=>(Number(s.damage)||0)-(Number(n.damage)||0),difficulty:(n,s)=>z.indexOf(n.difficulty)-z.indexOf(s.difficulty),favorite:(n,s)=>+!!s.favorite-+!!n.favorite}[o.sort];return t?[...e].sort(t):e}function $t(e){const t=l(e.id),n=o.selected.has(e.id),s=e.damage!==""&&e.damage!=null,view=comboView(e),r=[e.position,e.meter,b[e.game]&&b[e.game].noAssist?null:e.assist,e.special&&e.special!=="Aucune"?e.special:null,...extraChips(e)].filter(Boolean).map(i=>`<span class="chip">${l(cdxT(i))}</span>`).join("")+dnaHtml(e);return`<article class="combo ${n?"checked":""}" data-combo="${t}">
    <div class="row between">
      <div class="rename-row"><h3>${l(e.name)}</h3><button class="rename-button" data-action="rename" data-id="${t}" title="${cdxT("Renommer")}" aria-label="${cdxT("Renommer")} ${l(e.name)}">✎</button></div>
      <div class="row">
        <label class="select-combo"><input type="checkbox" data-select-combo="${t}" ${n?"checked":""}> ${cdxT("Cocher")}</label>
        <span class="pill lvl-${l(e.difficulty)}">${l(cdxT(e.difficulty))}</span>
      </div>
    </div>
    <div class="chips" style="margin-top:9px">${r}</div>
    <div class="seq">${K(view.tokens,e.video&&!view.tokens.length?"Combo vidéo":void 0,e.game)}</div>
    ${e.video&&(o.watchId===t||!(view.tokens||[]).length)?'<div class="combo-video">'+leDock(e.video)+'</div>':''}
    ${view.desc?`<button type="button" class="combo-desc" data-action="desc" data-id="${t}" data-tip="${l(view.desc)}"><span class="combo-desc-k">${cdxT("Description du combo")}</span><span class="combo-desc-v">${l(view.desc)}</span></button>`:""}
    <div class="row between">
      <span class="muted small">${cdxT("Dégâts :")} ${s?l(Number(e.damage).toLocaleString(window.cdxLang==="es"?"es":window.cdxLang==="en"?"en":"fr-FR")):cdxT("non renseignés")}${e.imported?" · "+cdxT("Importé"):""}${e.review==="pending"?` · <b class="review-pill">⏳ ${l(cdxT("review.pending"))}</b>`:""}</span>
      <div class="fav-col"><button class="tiny" data-action="favorite" data-id="${t}" aria-pressed="${d.fav.has(e.id)}">${d.fav.has(e.id)?cdxT("★ Favori"):cdxT("☆ Favori")}</button>${labButton(e,t)}</div>
    </div>
    ${view.lab?`<p class="small muted">${l(view.lab)}</p>`:""}
    <div class="buttons" style="margin-top:10px">
      <button data-action="edit" data-id="${t}"${isAtelier()?"":` title="${l(cdxT("edit.req.tip"))}"`}>${cdxT("Modifier")}</button>
      <button data-action="variant" data-id="${t}" title="Crée une copie modifiable, l’original reste intact">${cdxT("Créer une variante")}</button>
      <button data-action="copy" data-id="${t}" title="Copier la séquence en texte">${cdxT("Copier")}</button>
      ${hasVid(e.video)?`<button data-action="replay" data-id="${t}">${cdxT("Replay Analyzer")}</button>`:""}
      ${e.video?`<button data-action="video" data-id="${t}">${cdxT("▶ Vidéo")}</button>`:""}
      <button data-action="delete" data-id="${t}">${cdxT("Signaler")}</button>
      ${isAtelier()?`<button class="danger" data-action="wipe" data-id="${t}">${cdxT("Supprimer")}</button>`:""}
    </div>
  </article>`}function Q(){U(),k(a("peopleGame"),De(),o.game),a("onlyWithCombos").checked=o.onlyWithCombos,a("sortCombos").value=o.sort,C(),B(),Ee()}function Ee(){const e=d.combos.length,t=[...d.fav].filter(id=>L(id)).length;a("headerStats").textContent=e?`${y(e,"combo")} ${cdxT(e>1?"publics":"public")} · ${y(t,"favori")}`:cdxT("Combos publics · Frame data · Entraînement")}function ee(){const e=w(a("charFilter").value),t=T(o.game),n=t.filter(r=>charBlob(r.name).includes(e)).map(r=>({...r,count:q(o.game,r.name).length})),s=o.onlyWithCombos?n.filter(r=>r.count):n;a("rosterCount").textContent=`${y(t.filter(r=>!r.orphan).length,"personnage")} ${cdxT("dans")} ${b[o.game].name}`,a("charList").innerHTML=s.map(r=>`<button class="tile ${o.char===r.name?"sel":""} ${r.count?"has-combos":"nocombo"}" data-char="${l(r.name)}" aria-pressed="${o.char===r.name}" title="${l(charLabel(r.name))}${r.count?` · ${y(r.count,"combo")}`:""}">
          ${portrait(o.game,r.name,"tile")}${r.count?`<b class="tile-count">${r.count}</b>`:""}
          <span class="tile-name">${l(charLabel(r.name))}</span>${r.orphan?`<span class="orphan-tag" title="${l(cdxT("Personnage absent du roster actuel"))}">${cdxT("hors roster")}</span>`:""}</button>`).join("")||`<div class="empty">${o.onlyWithCombos&&!e?cdxT("Aucun combo public pour ce jeu."):cdxT("Aucun personnage trouvé.")}</div>`,hydratePortraits()}function C(){U(),renderDnaFilter(),a("personTitle").textContent=charLabel(o.char),a("personPortrait").innerHTML=portrait(o.game,o.char,"lg"),a("personGame").textContent=b[o.game].name;const e=q(o.game,o.char),t=pe();const guest=(!o.guestVideo||t.some(n=>te(n.video)===o.guestVideo))?"":`<article class="combo" data-guest-video="${l(o.guestVideo)}"><div class="row between"><h3>${cdxT("Combo vidéo")}</h3></div><div class="combo-video">${leDock("https://www.youtube.com/watch?v="+o.guestVideo)}</div><div class="buttons" style="margin-top:10px"><button class="primary" data-keep-guest>${cdxT("Ajouter à ComboDex")}</button></div></article>`;if(a("combosHeading").textContent=e.length?`${cdxT("Combos")} (${e.length})`:cdxT("Combos"),a("personCombos").innerHTML=guest+(function(){if(!t.length)return e.length?`<div class="empty">${cdxT("Aucun favori pour ce personnage.")}</div>`:guest?"":`<div class="empty">${cdxT("Aucun combo pour {0} pour l’instant. Crée-en un ou importe-le : il restera sur ComboDex pour tout le monde.").replace("{0}",l(charLabel(o.char)))}</div>`;const folders=[["write",cdxT("Combo écrit")],["video",cdxT("Combo vidéo")],["replay",cdxT("Replay Analyzer")]];return folders.map(([id,title])=>{const list=t.filter(c=>comboFolder(c)===id);return `<details class="combo-folder"${list.length?" open":""}><summary>${l(title)} <span class="muted">(${list.length})</span></summary>${list.length?list.map($t).join(""):`<div class="empty">${cdxT("Aucun combo dans ce dossier.")}</div>`}</details>`}).join("")})(),renderPersonDock(),hydrateXVideos(a("personCombos")),ee(),qe(),Ee(),oe(),isAtelier()&&renderAtelierDash(),o.focusId){const n=document.querySelector(`[data-combo="${CSS.escape(o.focusId)}"]`);o.focusId=null,n&&(n.scrollIntoView({behavior:"smooth",block:"center"}),n.classList.add("flash"),setTimeout(()=>n.classList.remove("flash"),1600))}}function qe(){const e=new Set(pe().map(s=>s.id));for(const s of o.selected)e.has(s)||o.selected.delete(s);const t=o.selected.size,n=a("bulkActions");if(n.classList.toggle("hidden",!t),!t){n.innerHTML="";return}n.innerHTML=`<div class="row between"><strong>${y(t,"combo")} coché${t>1?"s":""}</strong>
    <div class="buttons"><button class="tiny" id="selectAllCombos">${cdxT("Tout cocher")}</button><button class="tiny" id="clearSelection">${cdxT("Décocher")}</button></div></div>
    <div class="row">${isAtelier()?`<select id="moveGame" aria-label="Jeu de destination"></select><select id="moveChar" aria-label="Personnage de destination"></select>
    <button id="moveSelected" class="primary">${cdxT("Déplacer")}</button>`:""}<button id="reportSelected">${cdxT("Signaler")}</button>${isAtelier()?`<button id="wipeSelected" class="danger">${cdxT("Supprimer")}</button>`:""}</div>
    ${isAtelier()?`<p class="muted small" style="margin:7px 0 0">Le déplacement conserve les séquences et les noms. Vérifie la destination avant de valider.</p>`:""}`,isAtelier()&&(k(a("moveGame"),De(),o.game),Oe(o.game,o.char))}const Oe=(e,t)=>k(a("moveChar"),T(e).map(n=>[n.name,charLabel(n.name)]),t);function At(){if(!isAtelier()||!a("moveGame"))return;const e=a("moveGame").value,t=a("moveChar").value,n=d.combos.filter(s=>o.selected.has(s.id));if(!b[e]||!t||!n.length)return g("Destination invalide.",!0);if(e===o.game&&t===o.char)return g("Les combos sont déjà ici.",!0);if(confirm(`Déplacer ${y(n.length,"combo")} vers ${b[e].name} · ${t} ?`)){for(const s of n)Object.assign(s,{game:e,character:t});publishWiki(n);M(),o.selected.clear(),o.game=e,o.char=t,Q(),g(`${y(n.length,"combo")} déplacé${n.length>1?"s":""} vers ${t}.`)}}function Re(e){if(!e.length)return;const list=e.map(id=>L(id)).filter(Boolean);if(!list.length)return;const names=list.map(c=>`${c.name||"Combo"} · ${charLabel(c.character||"")}`).join(" · ");ce(cdxT("Signaler un combo erroné"),`<p style="margin:0 0 8px">${l(names)}</p><p class="muted small">${l(cdxT("Le combo reste public : seul l’administrateur peut le retirer."))}</p><label class="muted small" for="reportNote">${l(cdxT("Explique l’erreur (optionnel)"))}</label><textarea id="reportNote" rows="4" style="width:100%;margin-top:6px" placeholder="${l(cdxT("Explique l’erreur (optionnel)"))}" autofocus></textarea><div class="row" style="margin-top:12px;justify-content:flex-end;gap:8px"><button type="button" class="primary" id="reportSend">${cdxT("Envoyer le signalement")}</button></div>`);a("reportSend").onclick=()=>{const note=(a("reportNote").value||"").trim();G();sendReport(list,note)}}
async function sendReport(list,note){const at=new Date().toISOString();for(const c of list){c.reports=[...(Array.isArray(c.reports)?c.reports:[]),{note:String(note||"").slice(0,300),at}].slice(-10);c.updatedAt=at}publishQuiet(list);try{const rows=list.map(c=>({combo_id:c.id,game:c.game||"",character:c.character||"",combo_name:c.name||"",note:String(note||"").slice(0,2000)}));const r=await fetch(REPORT_URL,{method:"POST",headers:wikiHeaders({"Content-Type":"application/json","Prefer":"return=minimal"}),body:JSON.stringify(rows.length===1?rows[0]:rows),cache:"no-store"});if(r.ok||r.status===201){g(cdxT("Signalement envoyé. Merci."));return}}catch{}g(cdxT("Impossible d’envoyer le signalement."),!0)}function wt(e){const t=L(e),n=document.querySelector(`[data-combo="${CSS.escape(e)}"] .rename-row`);if(!t||!n)return;n.innerHTML='<input class="rename-input" aria-label="Nouveau nom du combo" maxlength="100"><button class="tiny" data-save-name aria-label="Valider">✓</button><button class="tiny" data-cancel-name aria-label="Annuler">✕</button>';const s=n.querySelector("input");s.value=t.name,s.focus(),s.select();const r=()=>{const i=s.value.trim();if(!i)return g("Le nom ne peut pas être vide.",!0);ae(e,{name:i}),C(),g("Combo renommé.")};n.querySelector("[data-save-name]").onclick=r,n.querySelector("[data-cancel-name]").onclick=C,s.onkeydown=i=>{i.key==="Enter"&&r(),i.key==="Escape"&&(i.stopPropagation(),C())}}const Mt=Object.entries(b).flatMap(([e,t])=>[...t.aliases,t.name,t.short].map(n=>[w(n),e])).sort((e,t)=>t[0].length-e[0].length);function Tt(e){let t=" "+w(e)+" ",n=[];for(const[s,r]of Mt){const i=" "+s+" ";if(t.includes(i)){n=[r],t=t.replace(i," ");break}}return{games:n,terms:w(t).split(" ").filter(Boolean)}}function jt(e,t){const n=w([e.name,e.character,charBlob(e.character),e.position,e.meter,e.assist,e.special,Object.values(e.extra||{}).join(" "),(e.dna||[]).join(" "),e.difficulty,e.damage,e.notes,(e.tokens||[]).join(" "),e.verified?"verifie lab":"non verifie",e.favorite?"favori":"",e.imported?"importe":""].join(" "));return t.every(s=>n.includes(s))}function B(){const e=a("search").value.trim(),t=a("searchResults");if(a("clearSearch").classList.toggle("hidden",!e),t.classList.toggle("hidden",!e),a("peopleWorkspace").classList.toggle("hidden",!!e),!e)return;const n=Tt(e),s=d.combos.filter(i=>(!n.games.length||n.games.includes(i.game))&&jt(i,n.terms)),r=n.games.length?b[n.games[0]].name:cdxT("tous les jeux");t.innerHTML=`<hr><h3>${y(s.length,"résultat")} ${cdxT("dans")} ${l(r)}</h3>`+(s.length?s.map(i=>{var c;return`<button class="listitem result" data-open="${l(i.id)}"><span class="grow"><b>${l(i.name)}</b>${d.fav.has(i.id)?" ★":""}<br>
              <span class="muted small">${l(charLabel(i.character))} · ${l(((c=b[i.game])==null?void 0:c.name)||i.game)} · ${l(i.position)}</span>
              <span class="seq">${K(i.tokens,void 0,i.game)}</span></span><span>${cdxT("Ouvrir ›")}</span></button>`}).join(""):`<div class="empty">${d.combos.length?cdxT("Aucun combo ne correspond à tous ces mots-clés."):cdxT("Aucun combo public pour l’instant : crée ou importe le premier.")}</div>`)}function xt(e,t){if(e==="replay"){raOpen(t);return}const n=L(t);n&&(e==="favorite"?(d.fav.has(t)?d.fav.delete(t):d.fav.add(t),M(),C()):e==="lab"?labToggle(t):e==="rename"?wt(t):e==="edit"?at(t):e==="variant"?nt(t):e==="train"?gt(t):e==="video"?ht(t):e==="desc"?ce(cdxT("Description du combo"),`<p style="white-space:pre-wrap;margin:0;line-height:1.45">${l(comboView(n).desc||comboDescOf(n)||"")}</p>`):e==="copy"?Fe(joinTokens(comboView(n).tokens)).then(s=>g(s?"Séquence copiée.":"Copie impossible.",!s)):e==="wipe"?askWipe([t]):e==="delete"&&Re([t]))}function Ht(){V("people",Q),a("peopleGame").onchange=e=>{o.game=e.target.value,o.char=null,o.selected.clear(),a("charFilter").value="",C()},a("charFilter").oninput=ee,a("charFilter").onkeydown=e=>{if(e.key!=="Enter")return;const t=a("charList").querySelector("[data-char]");t&&t.click()},a("onlyWithCombos").onchange=e=>{o.onlyWithCombos=e.target.checked,ee(),oe()},a("charList").onclick=e=>{const t=e.target.closest("[data-char]");t&&(o.char=t.dataset.char,o.selected.clear(),C(),matchMedia("(max-width: 860px)").matches&&a("personTitle").scrollIntoView({behavior:"smooth",block:"start"}))},a("onlyFavorites").onchange=()=>{o.selected.clear(),C()},a("sortCombos").onchange=e=>{o.sort=e.target.value,C()},a("dnaFilter").onclick=e=>{const t=e.target.closest("[data-dnaf]");if(t){const n=t.dataset.dnaf;o.dnaFilter.has(n)?o.dnaFilter.delete(n):o.dnaFilter.add(n),C();return}e.target.closest("[data-dnaf-clear]")&&(o.dnaFilter.clear(),C())},a("newForPerson").onclick=()=>X(),a("search").oninput=B,a("search").onkeydown=e=>{e.key==="Escape"&&a("search").value&&(e.stopPropagation(),a("search").value="",B())},a("clearSearch").onclick=()=>{a("search").value="",B(),a("search").focus()},a("searchResults").onclick=e=>{const t=e.target.closest("[data-open]"),n=t&&L(t.dataset.open);n&&(o.game=n.game,o.char=n.character,o.focusId=n.id,a("search").value="",a("onlyFavorites").checked=!1,Q())},a("personCombos").onchange=e=>{var n;if(!e.target.matches("[data-select-combo]"))return;const t=e.target.dataset.selectCombo;e.target.checked?o.selected.add(t):o.selected.delete(t),(n=e.target.closest(".combo"))==null||n.classList.toggle("checked",e.target.checked),qe()},a("personCombos").onclick=e=>{if(e.target.closest("[data-keep-guest]")&&o.guestVideo){const cid=addVideoCombo("https://www.youtube.com/watch?v="+o.guestVideo,o.game,o.char);if(cid){o.watchId=cid;o.focusId=cid;o.guestVideo=null;C()}return}const t=e.target.closest("[data-empty]");if(t)return t.dataset.empty==="create"?X():j("import");const n=e.target.closest("[data-action]");n&&xt(n.dataset.action,n.dataset.id)},a("personDock")&&(a("personDock").onclick=e=>{const t=e.target.closest("[data-empty]");if(t)t.dataset.empty==="create"?X():j("import")}),a("bulkActions").onchange=e=>{e.target.id==="moveGame"&&Oe(e.target.value)},a("bulkActions").onclick=e=>{if(e.target.closest("#clearSelection"))o.selected.clear(),C();else if(e.target.closest("#selectAllCombos"))pe().forEach(t=>o.selected.add(t.id)),C();else if(e.target.closest("#moveSelected"))At();else if(e.target.closest("#reportSelected"))Re([...o.selected]);else if(e.target.closest("#wipeSelected"))askWipe([...o.selected])}}Ke();U();if(!window.__cdxBoot){window.__cdxBoot=1;Ht();tt();ct();Lt();vt()}j(o.tab);(async()=>{try{await loadWiki();try{migrateTokens()&&M()}catch{};try{applyHomeFont(d.siteFont||homeFontId||"stencil")}catch{}}catch(e){console.warn("ComboDex wiki",e)}try{Q()}catch{}try{if(o.tab==="compare")Y()}catch{}try{if(o.tab==="replay")raRender()}catch{}try{if(o.tab==="knowledge"&&window.CDX_KC)CDX_KC.render()}catch{}})();a("nav").addEventListener("click",e=>{const t=e.target.closest("[data-tab]");t&&(t.dataset.tab==="knowledge"&&(o.kcView="hub"),j(t.dataset.tab))});const ye=["people","frames","compare","replay","create","import"];let lastCombo=null;document.addEventListener("mouseover",e=>{const t=e.target.closest("article.combo[data-combo]");t&&(lastCombo=t.dataset.combo)});document.addEventListener("keydown",e=>{if(!(e.ctrlKey||e.metaKey)||e.altKey||e.shiftKey||e.key.toLowerCase()!=="e"||Ie())return;e.preventDefault();const t=document.activeElement?.closest?.("article.combo[data-combo]")?.dataset.combo,n=pe(),s=[t,lastCombo].find(r=>r&&n.some(i=>i.id===r))||n[0]?.id;if(!s)return g(o.char?"Aucun combo à entraîner pour ce personnage.":"Choisis d’abord un personnage.",!0);o.tab!=="people"&&j("people"),gt(s)});document.addEventListener("keydown",e=>{Ie()||e.ctrlKey||e.metaKey||e.altKey||e.target.closest("input,textarea,select,[contenteditable]")||(ye[Number(e.key)-1]?j(ye[Number(e.key)-1]):e.key==="/"&&(e.preventDefault(),j("people"),a("search").focus()))});(async()=>{var e,t;try{await((t=(e=navigator.storage)==null?void 0:e.persist)==null?void 0:t.call(e))}catch{}})();const DUST="https://www.dustloop.com/wiki/api.php",SUPER="https://wiki.supercombo.gg/api.php",DREAM="https://dreamcancel.com/w/api.php",WAVU="https://wavu.wiki/w/api.php";
const FT_SRC={
  ggst:{site:"Dustloop",api:DUST,table:"MoveData_GGST",page:"https://www.dustloop.com/w/GGST/",f:{input:"input",name:"name",type:"type",startup:"startup",active:"active",recovery:"recovery",damage:"damage",guard:"guard",onBlock:"onBlock",onHit:"onHit",invuln:"invuln",cancel:"cancel",notes:"notes",images:"images",hitboxes:"hitboxes"},
    alias:{"Anji":"Anji Mito","Axl":"Axl Low","Chipp":"Chipp Zanuff","Elphelt":"Elphelt Valentine","Goldlewis":"Goldlewis Dickinson","Jam":"Jam Kuradoberi","Ky":"Ky Kiske","Leo":"Leo Whitefang","Millia":"Millia Rage","Ramlethal":"Ramlethal Valentine","Sin":"Sin Kiske","Sol":"Sol Badguy","Jack-O'":"Jack-O","Bedman?":"Bedman","Asuka R#":"Asuka R"}},
  dbfz:{site:"Dustloop",api:DUST,table:"MoveData_DBFZ",page:"https://www.dustloop.com/w/DBFZ/",f:{input:"input",name:"name",type:"type",startup:"startup",active:"active",recovery:"recovery",damage:"damage",guard:"guard",onBlock:"onBlock",invuln:"invuln",notes:"notes",images:"images",hitboxes:"hitboxes"},
    alias:{"Broly (Z)":"Broly","Goku (Base)":"Goku","Goku (SSJ)":"Goku (Super Saiyan)","Goku (UI)":"Goku (Ultra Instinct)","Goku (SS4 DAIMA)":"Goku (SS4, DAIMA)","Vegeta (Base)":"Vegeta","Vegeta (SSJ)":"Vegeta (Super Saiyan)"}},
  tokon:{site:"Dustloop",api:DUST,table:"MoveData_MTFS",page:"https://www.dustloop.com/w/MTFS/",f:{input:"input",name:"name",type:"type",startup:"startup",active:"active",recovery:"recovery",damage:"damage",guard:"guard",onBlock:"onBlock",onHit:"onHit",invuln:"invuln",notes:"notes",images:"images",hitboxes:"hitboxes"},alias:{"Jane Foster":"Thor (Jane Foster)","Mighty Thor":"Thor (Jane Foster)"}},
  sf6:{site:"SuperCombo",api:SUPER,table:"SF6_FrameData",prefix:"Street Fighter 6/",page:"https://wiki.supercombo.gg/w/Street_Fighter_6/",f:{input:"input",name:"name",type:"moveType",startup:"startup",active:"active",recovery:"recovery",damage:"damage",guard:"guard",onBlock:"blockAdv",onHit:"hitAdv",invuln:"invuln",cancel:"cancel",notes:"notes",images:"images",hitboxes:"hitboxes"},
    alias:{"C. Viper":"C.Viper","Dee Jay":"Dee_Jay","E. Honda":"E.Honda","M. Bison":"M.Bison","AKI":"A.K.I."}},
  umvc3:{site:"SuperCombo",api:SUPER,mode:"parse",prefix:"UMVC3/",page:"https://wiki.supercombo.gg/w/UMVC3/",
    alias:{"Chris Redfield":"Chris","Jill Valentine":"Jill","Tron Bonne":"Tron","Strider Hiryu":"Strider","M.O.D.O.K":"M.O.D.O.K.","Nemesis":"Nemesis T-Type"}},
  mvc2:{site:"SuperCombo",api:SUPER,mode:"parse",prefix:"Marvel vs Capcom 2/",page:"https://wiki.supercombo.gg/w/Marvel_vs_Capcom_2/",
    alias:{"B.B. Hood":"B.B.Hood","Jill Valentine":"Jill","Shuma-Gorath":"Shuma-Gorath","Spider-Man":"Spiderman","M. Bison":"M.Bison","Strider Hiryu":"Strider","Wolverine":"Wolverine - Bone","Wolverine (Bone Claw)":"Wolverine - Bone","Wolverine (Claw)":"Wolverine - Claw"}},
  "2xko":{site:"2XKO Wiki",mode:"bucket",api:"https://wiki.play2xko.com/en-us/api.php",page:"https://wiki.play2xko.com/en-us/"},
  al:{site:"SuperCombo",api:SUPER,table:"AL_FrameData",prefix:"Avatar Legends/",page:"https://wiki.supercombo.gg/w/Avatar_Legends/",f:{input:"input",name:"name",type:"moveType",startup:"startup",active:"active",recovery:"recovery",damage:"damage",guard:"guard",onBlock:"onBlock",onHit:"onHit",invuln:"invuln",cancel:"cancel",notes:"properties",images:"images",hitboxes:"hitboxes"},alias:{"Avatar State Aang":"A.Aang","Avatar Aang":"A.Aang","Nightmare Korra":"Nightmare Korra"}},
  bbcf:{site:"Dustloop",api:DUST,table:"MoveData_BBCF",page:"https://www.dustloop.com/w/BBCF/",f:{input:"input",name:"name",type:"type",startup:"startup",active:"active",recovery:"recovery",damage:"damage",guard:"guard",onBlock:"onBlock",invuln:"invuln",cancel:"cancel",notes:"notes",images:"images",hitboxes:"hitboxes"}},
  gbvsr:{site:"Dustloop",api:DUST,table:"MoveData_GBVSR",page:"https://www.dustloop.com/w/GBVSR/",f:{input:"input",name:"name",type:"type",startup:"startup",active:"active",recovery:"recovery",damage:"damage",guard:"guard",onBlock:"onBlock",onHit:"onHit",invuln:"invuln",notes:"notes",images:"images",hitboxes:"hitboxes"}},
  sf4:{site:"SuperCombo",api:SUPER,table:"USFIV_FrameData",prefix:"Ultra Street Fighter IV/",page:"https://wiki.supercombo.gg/w/Ultra_Street_Fighter_IV/",f:{input:"input",name:"name",type:"moveType",startup:"startup",active:"active",recovery:"recovery",damage:"damage",guard:"guard",onBlock:"blockAdv",onHit:"hitAdv",cancel:"cancel",notes:"notes",images:"images",hitboxes:"hitboxes"},alias:{"C. Viper":"C. Viper","E. Honda":"E. Honda","M. Bison":"M. Bison","T. Hawk":"T. Hawk"}},
  mkxl:{site:"SuperCombo",api:SUPER,table:"MKX_FrameData",prefix:"Mortal Kombat X/",page:"https://wiki.supercombo.gg/w/Mortal_Kombat_X/",f:{input:"input",name:"name",type:"moveType",startup:"startup",active:"active",recovery:"recovery",damage:"damage",guard:"guard",onBlock:"blockAdv",onHit:"hitAdv",invuln:"invuln",cancel:"cancel",notes:"notes",images:"images",hitboxes:"hitboxes"},alias:{"Cassie Cage":"Cassie","Sonya Blade":"Sonya","Takeda Takahashi":"Takeda","Jacqui Briggs":"Jacqui","Jason Voorhees":"Jason","Ferra & Torr":"Ferra/Torr","Bo' Rai Cho":"Bo'Rai Cho"}},
  cotw:{site:"Dreamcancel",api:DREAM,table:"MoveData_COTW",prefix:"Fatal Fury: City of the Wolves/",page:"https://dreamcancel.com/wiki/Fatal_Fury:_City_of_the_Wolves/",f:{input:"input",name:"name",startup:"startup",active:"active",recovery:"recovery",damage:"damage",guard:"guard",cancel:"cancel",images:"images",hitboxes:"hitboxes"},alias:{"Manjiro \"Mikey\" Sano":"Manjiro Mikey Sano","Ken \"Draken\" Ryuguji":"Ken Draken Ryuguji"}},
  t8:{site:"Wavu",api:WAVU,table:"Move",splitId:!0,page:"https://wavu.wiki/t/",f:{input:"input",name:"name",startup:"startup",damage:"damage",onBlock:"block",onHit:"hit",guard:"target",images:"image"}}
};
const FT_TYPES={normal:"Normaux",unique:"Coups spéciaux de commande","command normal":"Normaux de commande",special:"Spéciaux",super:"Supers",throw:"Chopes",drive:"Drive",other:"Autres"};
const ftMoveLabel=m=>{const s=String(m.input||"");const p=/^j\./i.test(s)?"Saut":/^2/.test(s)?"Accroupi":/^[5cf]/i.test(s)?"Debout":"";return p?"Normal "+p.toLowerCase():""};
const PHASE_FR={startup:"Startup — démarrage",active:"Active — le coup touche",recovery:"Recovery — récupération"};
o.ft={moves:[],wiki:null,wikiList:[],move:null,view:"hitboxes",img:0,frame:1,sort:"",q:"",req:0,timer:null};

const ftCacheGet=k=>{try{const v=JSON.parse(localStorage.getItem("cdx-ft:"+k));return v&&Date.now()-v.t<6048e5?v.d:null}catch{return null}};
const ftCacheSet=(k,v)=>{try{localStorage.setItem("cdx-ft:"+k,JSON.stringify({t:Date.now(),d:v}))}catch{}};
const ftClean=v=>String(v??"").replace(/'''?/g,"").replace(/\[\[(?:[^|\]]*\|)?([^\]]*)\]\]/g,"$1").replace(/\{\{[^}]*\}\}/g,"").replace(/<br\s*\/?>/gi," · ").replace(/<[^>]+>/g,"").replace(/&nbsp;/g," ").replace(/\s+/g," ").trim();
const ftStripFiles=s=>String(s??"").replace(/\[\[(?:File|Image):[^\]]*\]\]/gi," ").replace(/\{\{[^}]*\}\}/g," ").replace(/<br\s*\/?>/gi," ").replace(/<[^>]+>/g," ");
const ftMotionFromWiki=s=>{const f=String(s||"").toLowerCase();if(/qcf|236/.test(f))return"236";if(/qcb|214/.test(f))return"214";if(/dp\.png|623/.test(f))return"623";if(/hcb|421/.test(f))return"421";if(/file:d\.png|\[\[d\.png/.test(f))return"2";if(/file:b\.png|\[\[b\.png/.test(f))return"4";if(/file:f\.png|\[\[f\.png/.test(f))return"6";if(/file:u\.png|\[\[u\.png/.test(f))return"8";if(/file:j\.png/.test(f))return"j.";return""};
function ftHoldKeep(s){
  s=String(s||"").replace(/\s+/g,"").trim();
  if(/^(?:j\.|c\.|f\.|s\.|sj\.|dl\.|w\.|r\.)?\d{0,8}\[[A-Za-z0-9]{1,10}\](?:[~+\-][A-Za-z0-9.\[\]]+)*$/i.test(s))return s;
  if(/^(?:j\.|c\.|f\.|s\.|sj\.|dl\.)?\[\d\][A-Za-z0-9]{1,8}$/i.test(s))return s;
  return"";
}
function ftChargeWrap(input,hint){
  let s=String(input||"").replace(/\s+/g,"").trim();
  if(!s)return"";
  const kept=ftHoldKeep(s);if(kept)return kept;
  const blob=String(hint||input||"");
  if(!/\bhold(?:\s+ok)?\b|\bcharg[eé]|\bcharged\b/i.test(blob))return s;
  if(/\[[A-Za-z0-9]+\]/.test(s))return s;
  const m=s.match(/^(j\.)?(\d*)([A-Za-z][A-Za-z0-9]*)$/);
  return m?(m[1]||"")+m[2]+"["+m[3]+"]":s;
}
function ftFixInput(ch,input,r){
  input=String(input||"");
  if(ch==="Samira"&&input==="2S2"&&/^18/.test(String((r&&r.startup)||"")))return"4[S2]";
  return ftChargeWrap(input,input+" "+((r&&(r.notes||r.name))||""));
}
function ftIsJunkWord(s){
  return /^(or|and|the|any|with|from|this|that|toggle|notes?|example|combo|during|while|toward|near|hold|also|see|air|ok|dash|corner|wall|jump|homing)$/i.test(String(s||"").trim());
}
function ftLooksCmd(s){
  s=String(s||"").trim();
  if(!s||s.length>56||/\.(png|jpg|gif|webp)|\d+px|^file:/i.test(s))return!1;
  if(ftIsJunkWord(s))return!1;
  if(/^(assist|throw|super|alpha|beta|gamma|level|hyper|snap)\b/i.test(s))return!0;
  if(/^(j\.?|c\.?|f\.?|s\.?)$/i.test(s))return!1;
  if(/^(?:j\.)?[1-9]$/.test(s))return!0;
  if(/^(?:j\.)?\d?\([A-Za-z]\+[A-Za-z]\)$/.test(s))return!0;
  if(/^\([1-9](?:\/[1-9])+\)[A-Za-z0-9]+$/.test(s))return!0;
  if(ftHoldKeep(s))return!0;
  if(/[a-z]{9,}/i.test(s.replace(/^(?:j\.|c\.|f\.|s\.|w\.|r\.)/i,"")))return!1;
  return/^(?:s\.|sj\.|j\.|c\.|f\.|dl\.|w\.|r\.){0,2}(?:\[\d\])?(?:\d{1,8})?(?:XX|\[[A-Za-z0-9]{1,10}\]|[A-Za-z]{1,8})(?:[+\-~./](?:\[[A-Za-z0-9]{1,10}\]|[A-Za-z0-9]+))*$/i.test(s);
}
function ftPickInput(raw,name,game){
  raw=String(raw||"");name=String(name||"");
  const kept=ftHoldKeep(raw)||ftHoldKeep(name);
  if(kept)return kept;
  const holdLine=String(raw+" "+name).replace(/\s+/g," ").trim().match(/(?:^|\s)(j\.\s*)?(\d)\s*([A-Za-z][A-Za-z0-9]*)\s*,?\s*Hold\s*Ok/i);
  if(holdLine)return(holdLine[1]?"j.":"")+holdLine[2]+"["+holdLine[3]+"]";
  const charged=ftChargeWrap(raw.replace(/\s+/g,""),raw+" "+name);
  if(charged&&/\[[A-Za-z]/.test(charged)&&ftLooksCmd(charged))return charged;
  const slash=raw.replace(/\s+/g,"").match(/^\([1-9](?:\/[1-9])+\)[A-Za-z0-9]+$/);
  if(slash)return slash[0];
  const pair=raw.replace(/\s+/g,"").match(/^(?:j\.)?\d?\([A-Za-z]\+[A-Za-z]\)$/);
  if(pair)return pair[0];
  const head=raw.split(/\s+(?:during|while|near|toward)\b/i)[0].split(/\/\/|\s+or\s+/i)[0];
  const compact=ftStripRest(head).replace(/\s*\([^)]*\)\s*/g,"").replace(/\s+/g,"").trim();
  if(/^(?:j\.)?[1-9]$/.test(compact)&&/^(?:j\.)?[1-9](?:\s|$)/.test(raw.trim())&&!/\(/.test(raw))return compact;
  if(compact&&ftLooksCmd(compact))return game==="al"?compact.replace(/D(?=$|[-])/g,"F"):compact;
  const both=raw+" "+name,blob=ftStripFiles(raw)+" "+ftStripFiles(name),cleaned=ftClean(blob);
  const hold=cleaned.replace(/\s+/g,"").match(/(?:j\.|c\.|f\.|s\.|sj\.|w\.|r\.)?\d{0,8}\[[A-Za-z0-9]{1,10}\]/i);
  if(hold)return hold[0];
  const hit=cleaned.match(/\b(?:j\.|c\.|f\.|s\.|sj\.|dl\.|w\.|r\.)?(?:\d{1,8})?(?:\[[A-Za-z0-9]{1,10}\]|XX|[A-Za-z]{1,4})(?:[+\-~][A-Za-z0-9]+)*\b/);
  let input=hit?hit[0].replace(/\s/g,""):"";
  if(input&&ftIsJunkWord(input))input="";
  if(/^[A-Za-z]{1,4}$/.test(input)){
    const restored=raw.replace(/\s+/g,"").match(new RegExp("(?:j\\.)?\\d{0,8}\\["+input+"\\]","i"));
    if(restored)input=restored[0];
  }
  if(!input||/^(A|B|C|D|F|EX)$/i.test(input)){
    const mot=ftMotionFromWiki(both);
    const btn=both.match(/AL_([ABCDF])_Button|AL-Button\|\s*([ABCDF])/i)||both.match(/\b([ABCFD]|LP|MP|HP|LK|MK|HK)\b/i);
    const b=(btn&&(btn[1]||btn[2]||btn[3])||"").toUpperCase();
    if(mot||b)input=(mot||"")+b;
  }
  if(!input&&/assist|throw|super|snap|hyper/i.test(cleaned))input=cleaned.split(/[,/]/)[0].trim();
  input=String(input||"").replace(/\s*\+\s*/g,"+").trim();
  if(game==="al")input=input.replace(/D(?=$|[-])/g,"F");
  return input;
}
function ftAltCmds(raw,name,game){
  raw=String(raw||"");
  if(!/\bor\b/i.test(raw)){
    const one=ftPickInput(raw,name,game);
    return one&&!ftIsJunkWord(one)?[one]:[];
  }
  const cmds=[];
  for(const p of raw.split(/\s+or\s+/i)){
    const c=ftPickInput(p,name,game);
    if(c&&!ftIsJunkWord(c))cmds.push(c);
  }
  const uniq=[...new Set(cmds)];
  if(uniq.length>1 && uniq.every(c=>/^(?:j\.)?\d?[A-Za-z]{0,3}$/.test(c)))return [uniq.join("/")];
  return uniq;
}
function ftIsMove(s){return ftLooksCmd(s)}
function ftMapType(t,input){t=String(t||"").toLowerCase();if(/throw/.test(t+" "+input))return"throw";if(/super/.test(t))return"super";if(/special|flow/.test(t))return"special";if(/unique|command/.test(t))return"command normal";if(/drive/.test(t))return"drive";if(/normal/.test(t))return"normal";return ftTypeFromInput(input)}
function ftNiceName(name){let n=ftClean(ftStripFiles(name)).replace(/\b\d+px\b/gi,"").replace(/\s*[-–]\s*$/,"").replace(/\s+/g," ").trim();if(!n||/\.(png|jpg)|link=/i.test(n)||/^(A|B|C|D|F|EX)$/i.test(n)||ftIsJunkWord(n))return"";return n}
function ftNormalizeMoves(rows,game){
  const seen=new Map,out=[];
  for(const m of rows){
    let cmds=ftAltCmds(m.input,m.name,game);
    if(!cmds.length){
      const input=ftPickInput(m.input,m.name,game)||String(m.input||"").trim();
      if(input)cmds=[input];
    }
    for(const input0 of cmds){
      let input=input0;
      if(ftIsJunkWord(input)||/^(j\.?|c\.?|f\.?)$/i.test(input))continue;
      if(!ftIsMove(input)&&!m.startup&&!m.name)continue;
      if(!input)input=ftNiceName(m.name)||"?";
      if(ftIsJunkWord(input)||input==="?"||/^(j\.?|c\.?|f\.?)$/i.test(input))continue;
      if(!ftIsMove(input)&&input.length<3)continue;
      const name=ftNiceName(m.name),type=ftMapType(m.type,input),k=String(input).toLowerCase();
      if(seen.has(k)){
        const prev=seen.get(k);
        if(!prev.hitboxes&&m.hitboxes)prev.hitboxes=m.hitboxes;
        if(!prev.images&&m.images)prev.images=m.images;
        if(!prev.startup&&m.startup)Object.assign(prev,m,{input,name:prev.name||name,type:prev.type||type});
        continue;
      }
      const row={...m,input,name,type};
      seen.set(k,row);out.push(row);
    }
  }
  return out;
}
const ftMapGet=()=>{try{return JSON.parse(localStorage.getItem("cdx-ft-map"))||{}}catch{return{}}};
const ftNum=v=>{const m=ftClean(v).match(/[-+]?\d+/);return m?Number(m[0]):null};
const ftFiles=v=>String(v||"").split(/[,;|\\\n]+/).map(s=>{s=s.trim().replace(/^\[\[(?:File|Image):/i,"").replace(/\]\].*$/,"").replace(/^File:/i,"");return s}).filter(Boolean);
function ftFileNick(game,chara){
  const spec={"Captain America":"Cap","C. Viper":"CViper","X-23":"X23","M.O.D.O.K.":"MODOK","M.O.D.O.K":"MODOK","Rocket Raccoon":"RocketRaccoon","She-Hulk":"SheHulk","Viewtiful Joe":"ViewtifulJoe","Doctor Doom":"DoctorDoom","Doctor Strange":"DoctorStrange","Ghost Rider":"GhostRider","Iron Fist":"IronFist","Iron Man":"IronMan","Phoenix Wright":"PhoenixWright","Super-Skrull":"SuperSkrull","Nemesis T-Type":"Nemesis","Tron Bonne":"Tron","Strider Hiryu":"Strider","Chris Redfield":"Chris","Jill Valentine":"Jill","Frank West":"FrankWest","Hsien-Ko":"HsienKo","Taskmaster":"Taskmaster","B.B. Hood":"BBHood"};
  if(spec[chara])return spec[chara];
  return chara.replace(/[.'']/g,"").replace(/ /g,game==="umvc3"?"":"_");
}
function ftGuessFiles(game,chara,input,kind){
  input=String(input||"").trim();
  if(!input)return[];
  const ch=chara.replace(/ /g,"_"),nick=ftFileNick(game,chara),j=input.replace(/^j\./i,"j"),jdot=input.replace(/^j\./i,"j."),low=input.toLowerCase(),out=[];
  const add=(...xs)=>xs.forEach(x=>x&&out.push(x));
  if(kind==="hitboxes"){
    if(game==="tokon")add(`MTFS_${ch}_${j}_Hitbox.png`,`MTFS_${ch}_${input}_Hitbox.png`);
    if(game==="dbfz")add(`DBFZ ${chara} ${input} Hitbox.png`,`DBFZ ${chara} ${jdot} Hitbox.png`,`DBFZ_${ch}_${input}_Hitbox.png`,`DBFZ_${ch}_${j}_Hitbox.png`);
    if(game==="ggst"){const short=chara.split(" ")[0];add(`GGST ${short} ${input} Hitbox.png`,`GGST ${chara} ${input} Hitbox.png`);}
    if(game==="sf6")add(`SF6_${ch}_${low}_hitbox.png`,`SF6_${nick}_${low}_hitbox.png`);
    if(game==="al")add(`AL ${chara} ${input} Hitbox.png`,`AL ${chara} ${input} HB.png`,`AL_${ch}_${input}_Hitbox.png`,`AL_${ch}_${input}_HB.png`);
    if(game==="umvc3")add(`UMVC3_${nick}_${input}_Hitbox.png`);
    if(game==="2xko")add(`${ch}_${input}_Hitbox.png`);
  }else{
    if(game==="tokon")add(`MTFS_${ch}_${j}.png`,`MTFS_${ch}_${input}.png`);
    if(game==="dbfz")add(`DBFZ ${chara} ${input}.png`,`DBFZ_${ch}_${input}.png`);
    if(game==="ggst")add(`GGST ${chara} ${input}.png`);
    if(game==="sf6")add(`SF6_${ch}_${low}.png`);
    if(game==="al")add(`AL ${chara} ${input}.png`,`AL_${ch}_${input}.png`);
    if(game==="umvc3")add(`UMVC3_${nick}_${input}.png`,`UMVC3_${nick}_${j}.png`);
    if(game==="mvc2"){const n=input.replace(/^s\./i,"5").replace(/^c\./i,"2").replace(/^f\./i,"6").replace(/^j\./i,"j");add(`MVC2_${ch}_${n}_01.png`,`MVC2_${ch}_${input}_01.png`,`MVC2_${nick}_${n}_01.png`)}
    if(game==="2xko")add(`${ch}_${input}.png`);
  }
  return out;
}
function ftMergeFiles(...lists){
  const seen=new Set,out=[];
  for(const list of lists){
    for(const f of (Array.isArray(list)?list:ftFiles(list))){
      const k=f.replace(/ /g,"_").toLowerCase();
      if(!f||seen.has(k))continue;seen.add(k);out.push(f);
    }
  }
  return out;
}
async function ftQuery(src,params){
  const all=[];
  for(let off=0;off<4000;off+=500){
    const j=await ftApi(src.api,{action:"cargoquery",tables:src.table,limit:"500",offset:String(off),...params});
    if(j.error)throw new Error(j.error.info||"Erreur du wiki");
    const rows=(j.cargoquery||[]).map(x=>x.title);
    all.push(...rows);
    if(rows.length<500)break;
  }
  return all;
}
const ftTypeFromInput=s=>{s=String(s||"");if(/throw/i.test(s))return"throw";if(/\bXX\b|Level 3|Level 1|SA[123]|236XX|214XX/i.test(s))return"super";if(/^[1-9]{2,}|S[12]/.test(s.replace(/^j\./i,"")))return"special";return"normal"};
function ftExpandWiki(s){
  s=String(s||"");
  const mot=[[/\{\{\s*qcf\s*\}\}/gi,"236"],[/\{\{\s*qcb\s*\}\}/gi,"214"],[/\{\{\s*dp\s*\}\}/gi,"623"],[/\{\{\s*hcb\s*\}\}/gi,"421"],[/\{\{\s*hcf\s*\}\}/gi,"412"],[/\{\{\s*360\s*\}\}/gi,"360"],[/\{\{\s*720\s*\}\}/gi,"720"],[/\{\{\s*22\s*\}\}/gi,"22"]];
  for(const[a,b]of mot)s=s.replace(a,b);
  s=s.replace(/\[\[(?:File|Image):*(Qcf|QCB|DP|Hcb|Hcf|D|B|F|U|J)\.png[^\]]*\]\]/gi,(_,n)=>({Qcf:"236",QCB:"214",DP:"623",Hcb:"421",Hcf:"412",D:"2",B:"4",F:"6",U:"8",J:"j."}[n]||""));
  const btn={lp:"LP",mp:"MP",hp:"HP",lk:"LK",mk:"MK",hk:"HK",hs:"HS",pp:"PP",kk:"KK",p:"P",k:"K",s:"S",l:"L",m:"M",h:"H",u:"8",d:"2",b:"4",f:"6",j:"j.",n:"5"};
  for(const a of Object.keys(btn).sort((x,y)=>y.length-x.length))s=s.replace(new RegExp("\\{\\{\\s*"+a+"\\s*\\}\\}","gi"),btn[a]);
  s=s.replace(/\{\{\s*AL-Button\s*\|\s*([ABCDF])\s*\}\}/gi,(_,b)=>b.toUpperCase());
  return s;
}
function ftStripRest(s){return ftClean(ftExpandWiki(s)).replace(/\{\{[^}]*\}\}/g," ").replace(/\[\[(?:File|Image):[^\]]*\]\]/gi," ").replace(/\s*\+\s*/g,"").replace(/\s+/g," ").trim()}
function ftField(block,keys){for(const k of keys){const m=String(block||"").match(new RegExp("\\|\\s*"+k.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"\\s*=\\s*([^\\n]+)","i"));if(m&&m[1].trim())return ftStripRest(m[1])}return""}
function ftFileField(block,keys){
  for(const k of keys){
    const m=String(block||"").match(new RegExp("\\|\\s*"+k.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"\\s*=\\s*([^\\n]+)","i"));
    if(!m||!m[1].trim())continue;
    const raw=m[1].trim();
    const files=[...raw.matchAll(/\[\[(?:File|Image):([^|\]]+)/gi)].map(x=>x[1].trim());
    if(files.length)return files.join(",");
    if(/\.(png|gif|jpg|webp)/i.test(raw))return raw.replace(/^File:/i,"").trim();
  }
  return"";
}
function ftBlankMove(){return{input:"",name:"",type:"",startup:"",active:"",recovery:"",damage:"",guard:"",onBlock:"",onHit:"",invuln:"",cancel:"",notes:"",images:"",hitboxes:""}}
function ftTakeTemplate(s){
  let depth=0,out="";
  for(let i=0;i<s.length;i++){
    if(s[i]==="{"&&s[i+1]==="{"){depth++;out+="{{";i++;continue}
    if(s[i]==="}"&&s[i+1]==="}"){depth--;out+="}}";i++;if(depth<=0)return out;continue}
    out+=s[i];
  }
  return out;
}
function ftSplitTemplates(wt,name){
  const re=new RegExp("\\{\\{\\s*"+name+"\\b","ig");
  const out=[];let m;
  while((m=re.exec(wt)))out.push(ftTakeTemplate(wt.slice(m.index)));
  return out;
}
function ftFillMove(m,src){
  m.input=ftStripRest(ftField(src,["input","linkname"])).split("//")[0].replace(/\s*\([^)]*\)\s*/g,"").trim()||m.input;
  m.name=ftField(src,["name"])||m.name;
  m.type=ftField(src,["moveType","type"])||m.type||ftTypeFromInput(m.input);
  m.startup=ftField(src,["startup","Startup"])||m.startup;
  m.active=ftField(src,["active","Active"])||m.active;
  m.recovery=ftField(src,["recovery","Recovery"])||m.recovery;
  m.damage=ftField(src,["damage","Damage"])||m.damage;
  m.guard=ftField(src,["guard","Guard"])||m.guard;
  m.onBlock=ftField(src,["onblock","onBlock","Adv. Guard"])||m.onBlock;
  m.onHit=ftField(src,["onhit","onHit","Adv. Hit"])||m.onHit;
  m.invuln=ftField(src,["invuln","properties","Special Property"])||m.invuln;
  m.cancel=ftField(src,["cancel","Cancel"])||m.cancel;
  m.notes=ftField(src,["description","properties"])||m.notes;
  m.images=ftFileField(src,["image","images","image2"])||m.images;
  m.hitboxes=ftFileField(src,["hitboxes","hitbox"])||m.hitboxes;
  return m;
}
function ftParseMoveList(wt){
  const exp=ftExpandWiki(wt);
  return exp.split(/\{\{\s*MoveListRow\b/i).slice(1).map(part=>{
    const chunk=part.split("}}")[0];
    const bits=chunk.split("|").map(x=>x.trim());
    if(!bits[0])bits.shift();
    const name=ftClean(bits[0]||"");
    const input=ftStripRest(bits[1]||"");
    const m=ftBlankMove();
    m.input=input;m.name=name;m.type=ftTypeFromInput(input);m.notes=ftClean(bits[3]||bits[2]||"");
    return m;
  }).filter(m=>m.input||m.name);
}
function ftParseMoveData(wt){
  return ftSplitTemplates(wt,"MoveData").map(part=>{
    const m=ftBlankMove();
    ftFillMove(m,part);
    return m;
  }).filter(m=>m.input||m.name);
}
function ftParseFrameDataAL(wt){
  return ftSplitTemplates(wt,"FrameData-AL").map(part=>{
    const m=ftBlankMove();
    ftFillMove(m,part);
    return m;
  }).filter(m=>m.input||m.name);
}
function ftParseMoveNew(wt){
  return ftSplitTemplates(wt,"MoveNew").concat(ftSplitTemplates(wt,"MoveInfo")).map(part=>{
    const m=ftBlankMove();
    ftFillMove(m,part);
    return m;
  }).filter(m=>m.input);
}
function ftPosArgs(src){
  const s=String(src||"").replace(/^\{\{[^|]*\|/,"").replace(/\}\}$/,"");
  const out=[];let cur="",d=0;
  for(let i=0;i<s.length;i++){
    if(s[i]==="{"&&s[i+1]==="{"){d++;cur+="{{";i++;continue}
    if(s[i]==="}"&&s[i+1]==="}"){d--;cur+="}}";i++;continue}
    if(s[i]==="|"&&d===0){out.push(cur.trim());cur="";continue}
    cur+=s[i];
  }
  out.push(cur.trim());
  return out;
}
function ftParseUSFIV(wt){
  return ftSplitTemplates(wt,"USFIVFrameDataRow").map(part=>{
    const b=ftPosArgs(part).map(x=>ftClean(ftExpandWiki(x)));
    const m=ftBlankMove();
    m.name=b[0]||"";
    m.input=ftStripRest(b[2]||b[4]||"");
    m.damage=b[5]||"";
    m.guard=b[8]||"";
    m.cancel=b[9]||"";
    m.startup=b[10]||"";
    m.active=b[11]||"";
    m.recovery=b[12]||"";
    m.onBlock=b[16]||"";
    m.onHit=b[17]||"";
    m.type=ftTypeFromInput(m.input);
    return m;
  }).filter(m=>m.input||m.name);
}
function ftParseAll(wt){return ftParseMoveData(wt).concat(ftParseMoveList(wt)).concat(ftParseFrameDataAL(wt)).concat(ftParseMoveNew(wt)).concat(ftParseUSFIV(wt))}
async function ftApi(api,params){
  const p={format:"json",origin:"*",...params};
  try{
    const r=await fetch(api+"?"+new URLSearchParams(p));
    if(r.ok){const j=await r.json();if(!j.error)return j}
  }catch{}
  try{return await bt(api,params,22000)}catch(err){return {error:{info:String(err&&err.message||err)}}}
}
async function ftFetchWT(api,page){
  try{
    const j=await ftApi(api,{action:"parse",page,prop:"wikitext",redirects:"1"});
    if(j.error)return"";
    const wt=j.parse&&j.parse.wikitext;
    return typeof wt==="string"?wt:(wt&&wt["*"]||"");
  }catch{return""}
}
function ftDataPages(src,chara){
  const pages=[];
  if(src.prefix)pages.push(src.prefix+chara,src.prefix+chara+"/Data");
  else if(src.page){
    const m=String(src.page).match(/\/w\/(.+)/);
    if(m){const root=decodeURIComponent(m[1]).replace(/\/Frame_Data\/?$|\/Game_Data\/?$/,"");pages.push(root+(root.endsWith("/")?"":"/")+chara,root+(root.endsWith("/")?"":"/")+chara+"/Data")}
  }
  return [...new Set(pages)];
}
async function ftBucket(src){
  const cached=ftCacheGet("2xko:b3");
  if(cached&&cached.length)return cached;
  const q="bucket('move').select('page_name','input','startup','active','recovery','onblock','damage','guard','cancel','invuln').limit(5000).run()";
  const j=await ftApi(src.api,{action:"bucket",query:q});
  let rows=(j.bucket||[]).filter(r=>r.page_name&&!/[:/]/.test(r.page_name)&&!/poc|sandbox|guideline/i.test(r.page_name));
  if(!rows.length){
    rows=(window.CDX_FT_2XKO||[]).filter(r=>r&&r[0]&&!/[:/]/.test(r[0])&&!/poc|sandbox|guideline/i.test(r[0])).map(r=>({
      page_name:r[0],input:r[1],startup:r[2],active:r[3],recovery:r[4],onblock:r[5],
      damage:r[6],guard:r[7],cancel:r[8],invuln:r[9]
    }));
  }
  if(rows.length)ftCacheSet("2xko:b3",rows);
  return rows;
}
async function ftAllpages(src){
  if(!src.prefix)return[];
  const list=[];let cont="";
  do{
    const p={action:"query",list:"allpages",apprefix:src.prefix,apfilterredir:"nonredirects",aplimit:"500"};
    if(cont)p.apcontinue=cont;
    const j=await ftApi(src.api,p);
    list.push(...((j.query&&j.query.allpages)||[]).map(x=>x.title.slice(src.prefix.length)).filter(t=>t&&!t.includes("/")&&!/^(Controls|FAQ|Game |Getting|Glossary|HUD|Infinites|Patch|Team |Notation|Resources|Beginner|Advanced|Strategy|Combos|Matchup|Frame Data|Game Data)/i.test(t)));
    cont=j.continue&&j.continue.apcontinue||"";
  }while(cont);
  return list;
}
function ftCleanCharList(list){
  return [...new Set((list||[]).filter(t=>t&&!/[:/]/.test(t)&&!/^(talk|user|poc)\b/i.test(t)))];
}
async function ftWikiChars(game){
  const cat=ftCatalog(game);
  if(cat.length){
    const listed=ftCleanCharList(cat.map(r=>r[0]));
    if(listed.length)return listed;
  }
  const cached=ftCacheGet(game+":c10");
  if(cached&&cached.length)return cached;
  const src=FT_SRC[game];
  let list=[];
  try{
    if(src.mode==="embed") list=(window.CDX_FT_2XKO||[]).map(r=>r[0]);
    else if(src.mode==="bucket") list=(await ftBucket(src)).map(r=>r.page_name);
    else if(src.mode==="parse") list=await ftAllpages(src);
    else{
      try{
        if(src.splitId) list=(ke[game]||[]).slice();
        else list=(await ftQuery(src,{fields:"chara",group_by:"chara"})).map(r=>r.chara);
      }catch(err){console.warn("chars cargo",err);list=[]}
      if(!list.length) list=await ftAllpages(src);
      else if(src.prefix&&list.length<(ke[game]||[]).length){
        try{list=ftCleanCharList([...list,...await ftAllpages(src)])}catch{}
      }
    }
  }catch(err){console.warn("chars",err);list=[]}
  list=ftCleanCharList(list);
  if(list.length)ftCacheSet(game+":c10",list);
  return list;
}
const ftMem={moves:{},pre:{}};
function ftMoveKey(game,chara){return game+":"+chara}
function ftMovesGet(game,chara){
  const k=ftMoveKey(game,chara);
  if(ftMem.moves[k]&&ftMem.moves[k].length)return ftMem.moves[k];
  if(ftCatalog(game).length)return null;
  const cached=ftCacheGet(game+":m15:"+chara);
  if(Array.isArray(cached)&&cached.length){ftMem.moves[k]=cached;return cached}
  return null;
}
function ftMovesPut(game,chara,rows){
  const k=ftMoveKey(game,chara);
  ftMem.moves[k]=rows||[];
  if(rows&&rows.length&&!ftCatalog(game).length)ftCacheSet(game+":m15:"+chara,rows);
}
function ftCharaOf(src,r,game){
  if(!src.splitId)return r.chara||"";
  const id=String(r.id||"");
  const names=(ke[game]||[]).slice().sort((a,b)=>b.length-a.length);
  for(const n of names){
    const slugs=[n,n.replace(/ /g,"-"),src.alias&&src.alias[n]].filter(Boolean);
    for(const slug of slugs){
      if(id===slug||id.toLowerCase().startsWith(String(slug).toLowerCase()+"-"))return n;
    }
  }
  return"";
}
function ftCargoWhere(src,chara){
  if(src.splitId){
    const names=[...new Set([chara,chara.replace(/ /g,"-"),src.alias&&src.alias[chara]].filter(Boolean))];
    return names.map(n=>`id LIKE '${String(n).replace(/'/g,"")}-%'`).join(" OR ");
  }
  return `chara="${chara.replace(/"/g,'\\"').replace(/#/g,"")}"`;
}
function ftCatalog(game){
  if(game==="2xko")return window.CDX_FT_2XKO||[];
  const rows=(window.CDX_FT||{})[game];
  return Array.isArray(rows)?rows:[];
}
function ftRowFromCatalog(r){
  const m=ftBlankMove();
  m.input=r[1]||"";m.name=r[2]||"";m.startup=r[3]||"";m.active=r[4]||"";m.recovery=r[5]||"";
  m.onBlock=r[6]||"";m.onHit=r[7]||"";m.damage=r[8]||"";m.guard=r[9]||"";
  m.type=ftTypeFromInput(m.input);
  return m;
}
function ftMovesFromCatalog(game,chara){
  const rows=ftCatalog(game).filter(r=>!chara||r[0]===chara);
  if(game==="2xko")return rows.map(r=>{
    const [ch,input,startup,active,recovery,onblock,damage,guard,cancel,invuln]=r;
    return ftRowFromBucket(ch,{input:ftFixInput(ch,input,{startup,notes:""}),startup,active,recovery,onblock,damage,guard,cancel,invuln});
  });
  return rows.map(ftRowFromCatalog);
}
function ftRowFromCargo(src,r){
  const m=ftBlankMove();
  for(const k of Object.keys(src.f))m[k]=k==="images"||k==="hitboxes"?r[k]||"":ftClean(r[k]);
  return m;
}
function ftRowFromBucket(chara,r){
  const m=ftBlankMove();
  m.input=ftFixInput(chara,r.input,r);m.startup=r.startup;m.active=r.active;m.recovery=r.recovery;
  m.onBlock=r.onblock;m.damage=r.damage;m.guard=r.guard;m.cancel=r.cancel;m.invuln=r.invuln;
  m.type=ftTypeFromInput(r.input);
  const file=`${chara.replace(/ /g,"_")}_${String(r.input||"").replace(/ /g,"_")}`;
  m.images=file+".png";m.hitboxes=file+"_Hitbox.png";
  return m;
}
async function ftPrefetchGame(game){
  if(ftMem.pre[game])return ftMem.pre[game];
  const src=FT_SRC[game];
  if(!src)return;
  ftMem.pre[game]=(async()=>{
    try{
      const grouped={};
      for(const r of ftCatalog(game)){
        const ch=r[0];if(!ch)continue;
        const move=game==="2xko"?ftRowFromBucket(ch,{input:r[1],startup:r[2],active:r[3],recovery:r[4],onblock:r[5],damage:r[6],guard:r[7],cancel:r[8],invuln:r[9]}):ftRowFromCatalog(r);
        (grouped[ch]||(grouped[ch]=[])).push(move);
      }
      if(Object.keys(grouped).length){
        for(const[ch,ms] of Object.entries(grouped))if(!ftMovesGet(game,ch))ftMovesPut(game,ch,ms);
        return;
      }
      if(src.mode==="bucket"||src.mode==="embed"){
        const rows=src.mode==="embed"
          ?(window.CDX_FT_2XKO||[]).map(r=>({page_name:r[0],input:r[1],startup:r[2],active:r[3],recovery:r[4],onblock:r[5],damage:r[6],guard:r[7],cancel:r[8],invuln:r[9]}))
          :await ftBucket(src);
        const by={};
        for(const r of rows){const ch=r.page_name;if(!ch)continue;(by[ch]||(by[ch]=[])).push(ftRowFromBucket(ch,r))}
        for(const[ch,ms] of Object.entries(by))if(!ftMovesGet(game,ch))ftMovesPut(game,ch,ms);
        return;
      }
      if(src.table){
        const fields=[src.splitId?"id":"chara",...Object.entries(src.f).map(([k,v])=>v===k?v:`${v}=${k}`)].filter((v,i,a)=>v&&a.indexOf(v)===i).join(",");
        let all=[];
        try{all=await ftQuery(src,{fields})}catch(err){console.warn("prefetch cargo",err);return}
        const by={};
        for(const r of all){const ch=ftCharaOf(src,r,game);if(!ch)continue;(by[ch]||(by[ch]=[])).push(ftRowFromCargo(src,r))}
        for(const[ch,ms] of Object.entries(by))if(!ftMovesGet(game,ch))ftMovesPut(game,ch,ms);
      }
    }catch(err){console.warn("prefetch",err)}
  })();
  return ftMem.pre[game];
}
function ftFirstDocumented(game,list){
  for(const e of T(game)){const wiki=ftMatch(game,e.name,list);if(wiki)return{name:e.name,wiki}}
  return null;
}
async function ftWikiMoves(game,chara){
  const hit=ftMovesGet(game,chara);
  if(hit)return ftEnrichMoves(game,chara,hit);
  const src=FT_SRC[game];
  let rows=ftMovesFromCatalog(game,chara);
  if(rows.length){
    rows=await ftEnrichMoves(game,chara,rows);
    ftMovesPut(game,chara,rows);
    return rows;
  }
  if(src.mode==="bucket"){
    rows=(await ftBucket(src)).filter(r=>r.page_name===chara).map(r=>ftRowFromBucket(chara,r));
    if(!rows.length){
      const wt=await ftFetchWT(src.api,chara);
      rows=ftParseMoveNew(wt);
    }
  }else if(src.mode==="embed"){
    rows=(window.CDX_FT_2XKO||[]).filter(r=>r[0]===chara).map(r=>{
      const [_,input,startup,active,recovery,onBlock,damage,guard,cancel,invuln]=r;
      const file=`${chara.replace(/ /g,"_")}_${String(input).replace(/ /g,"_")}`;
      return{input,name:"",type:ftTypeFromInput(input),startup,active,recovery,damage,guard,onBlock,onHit:"",invuln,cancel,notes:"",images:file+".png",hitboxes:file+"_Hitbox.png"};
    });
  }else{
    if(src.table){
      const fields=[src.splitId?"id":"",...Object.entries(src.f).map(([k,v])=>v===k?v:`${v}=${k}`)].filter(Boolean).join(",");
      try{
        rows=(await ftQuery(src,{fields,where:ftCargoWhere(src,chara)})).map(r=>ftRowFromCargo(src,r));
      }catch(err){console.warn("cargo",err);rows=[]}
    }
    if(src.mode==="parse"||!rows.length){
      let wt="";
      for(const page of ftDataPages(src,chara))wt+="\n"+(await ftFetchWT(src.api||SUPER,page));
      rows=rows.concat(ftParseAll(wt));
    }
  }
  rows=await ftEnrichMoves(game,chara,rows);
  if(rows.length)ftMovesPut(game,chara,rows);
  return rows;
}
const ftImgCache={};
async function ftImageUrls(game,files){
  files=ftMergeFiles(files);
  const direct=files.filter(f=>/^https?:/i.test(f));
  files=files.filter(f=>f&&!/^https?:/i.test(f));
  const api=FT_SRC[game]&&FT_SRC[game].api;
  const missing=files.filter(f=>!(f in ftImgCache));
  if(missing.length&&api){
    for(let i=0;i<missing.length;i+=40){
      const batch=missing.slice(i,i+40);
      try{
        const j=await ftApi(api,{action:"query",prop:"imageinfo",iiprop:"url",titles:batch.map(f=>"File:"+f.replace(/^File:/i,"")).join("|")}),norm={};
        ((j.query&&j.query.normalized)||[]).forEach(n=>norm[n.from]=n.to);
        const pages=Object.values((j.query&&j.query.pages)||{});
        for(const f of batch){
          const t=norm["File:"+f]||("File:"+f);
          const pg=pages.find(x=>x.title===t);
          ftImgCache[f]=pg&&pg.imageinfo&&pg.imageinfo[0]?pg.imageinfo[0].url:null;
        }
      }catch{batch.forEach(f=>ftImgCache[f]=null)}
    }
  }else missing.forEach(f=>{if(!(f in ftImgCache))ftImgCache[f]=null});
  const urls=direct.concat(files.map(f=>ftImgCache[f]).filter(Boolean));
  if(!urls.length&&game==="2xko"){
    return files.map(f=>"https://wiki.play2xko.com/en-us/Special:FilePath/"+encodeURIComponent(f));
  }
  return urls;
}
async function ftEnrichMoves(game,chara,rows){
  for(const m of rows){
    m.images=ftMergeFiles(m.images,ftGuessFiles(game,chara,m.input,"images")).join(",");
    m.hitboxes=ftMergeFiles(m.hitboxes,ftGuessFiles(game,chara,m.input,"hitboxes")).join(",");
  }
  const all=[];
  for(const m of rows)all.push(...ftFiles(m.hitboxes),...ftFiles(m.images));
  await ftImageUrls(game,all);
  for(const m of rows){
    m.hitboxes=ftFiles(m.hitboxes).map(f=>/^https?:/i.test(f)?f:ftImgCache[f]).filter(Boolean).join(",");
    m.images=ftFiles(m.images).map(f=>/^https?:/i.test(f)?f:ftImgCache[f]).filter(Boolean).join(",");
  }
  return rows;
}
function ftScore(a,b){
  a=w(a);b=w(b);
  if(a===b)return 100;
  if(!a||!b)return 0;
  if(a.replace(/ /g,"")===b.replace(/ /g,""))return 95;
  if(b.startsWith(a+" ")||a.startsWith(b+" "))return 80;
  const ta=a.split(" ").filter(Boolean),tb=b.split(" ").filter(Boolean);
  const sa=new Set(ta),sb=new Set(tb);
  if(ta.every(t=>sb.has(t))||tb.every(t=>sa.has(t)))return 70;
  const common=ta.filter(t=>sb.has(t)).length;
  return common?common*20-Math.abs(ta.length-tb.length):0;
}
function ftMatch(game,name,list){
  const saved=ftMapGet()[game+":"+name];
  if(saved&&list.includes(saved))return saved;
  const alias=FT_SRC[game]&&FT_SRC[game].alias&&FT_SRC[game].alias[name];
  if(alias&&list.includes(alias))return alias;
  const kn=w(name).replace(/ /g,"");
  for(const c of list){if(w(c).replace(/ /g,"")===kn)return c}
  let best=null,score=0;
  for(const c of list){const s=ftScore(name,c);if(s>score){score=s;best=c}}
  return score>=40?best:null;
}
const ftAdv=v=>{
  const n=ftNum(v);
  if(n==null)return{cls:"",txt:"—",read:""};
  const t=(n>0?"+":"")+n;
  if(n>0)return{cls:"adv-pos",txt:t,read:"Avantage à l’attaquant"};
  if(n===0)return{cls:"adv-zero",txt:t,read:"Neutre en frames"};
  if(n>=-3)return{cls:"adv-neg",txt:t,read:"Léger désavantage, sûr en général"};
  if(n>=-7)return{cls:"adv-neg",txt:t,read:"Punissable par les coups rapides"};
  return{cls:"adv-neg strong",txt:t,read:"Très punissable"};
};

function renderFrames(){
  k(a("ftGame"),De(),o.game);
  U();
  k(a("ftChar"),T(o.game).map(e=>[e.name,charLabel(e.name)]),o.char);
  a("ftPortrait").innerHTML=portrait(o.game,o.char,"sm");syncLogos();hydratePortraits();
  ftLoad();
}
async function ftLoad(){
  const req=++o.ft.req,game=o.game,src=FT_SRC[game];
  ftStop();
  o.ft.moves=[];o.ft.move=null;o.ft.wiki=null;
  a("ftWikiWrap").classList.add("hidden");
  a("ftSource").innerHTML="";
  if(!src){
    a("ftMarket").innerHTML="";
    a("ftViewer").innerHTML=`<div class="empty">${cdxT("Pas de frame data publique lisible pour")} ${l(b[game].name)}.<br>${b[game].wiki?`<a href="${l(b[game].wiki)}" target="_blank" rel="noopener">${cdxT("Consulter le wiki du jeu ↗")}</a>`:""}</div>`;
    return;
  }
  a("ftViewer").innerHTML=`<div class="empty">${cdxT("Chargement des coups de")} ${l(charLabel(o.char))} ${cdxT("depuis")} ${src.site}…</div>`;
  a("ftMarket").innerHTML="";
  try{
    const list=await ftWikiChars(game);
    if(req!==o.ft.req)return;
    o.ft.wikiList=list;
    ftPrefetchGame(game);
    let wiki=ftMatch(game,o.char,list);
    if(!wiki && ftCatalog(game).length){
      a("ftViewer").innerHTML=`<div class="empty">${l(charLabel(o.char))} ${cdxT("n’a pas de frame data publique répertoriée.")}<br>${src.page?`<a href="${l(src.page+(o.char||"").replace(/ /g,"_"))}" target="_blank" rel="noopener">${cdxT("Consulter le wiki du jeu ↗")}</a>`:""}</div>`;
      a("ftMarket").innerHTML="";
      return;
    }
    if(!wiki){
      const fb=ftFirstDocumented(game,list);
      if(fb){
        o.char=fb.name;
        wiki=fb.wiki;
        k(a("ftChar"),T(o.game).map(e=>[e.name,charLabel(e.name)]),o.char);
        a("ftPortrait").innerHTML=portrait(o.game,o.char,"sm");
      }
    }
    k(a("ftWiki"),[["","— Choisir —"],...list.map(c=>[c,c])],wiki||"");
    a("ftWikiWrap").classList.toggle("hidden",!!wiki&&w(wiki)===w(o.char));
    if(!wiki){a("ftViewer").innerHTML=`<div class="empty">${l(charLabel(o.char))} n’a pas encore de fiche de frames sur ${src.site}.<br>Choisis la fiche correspondante dans la liste « Fiche du wiki » si elle existe sous un autre nom.</div>`;a("ftWikiWrap").classList.remove("hidden");return}
    await ftLoadWiki(wiki,req);
  }catch(err){
    if(req!==o.ft.req)return;
    a("ftViewer").innerHTML=`<div class="empty">Impossible de joindre ${src.site} (${l(err.message)}).<br><button data-ft-retry>Réessayer</button></div>`;
  }
}
async function ftLoadWiki(wiki,req=++o.ft.req){
  const game=o.game,src=FT_SRC[game];
  o.ft.wiki=wiki;
  a("ftSource").innerHTML=`Données : <a href="${l(src.page+wiki.replace(/ /g,"_"))}" target="_blank" rel="noopener">${src.site} · ${l(wiki)} ↗</a>`;
  const moves=await ftWikiMoves(game,wiki);
  if(req!==o.ft.req)return;
  o.ft.moves=ftNormalizeMoves(moves,game);
  o.ft.move=["5L","5LP","5P","c.S","5A","5LK","5K"].map(x=>o.ft.moves.find(m=>m.input===x)).find(Boolean)||o.ft.moves.find(m=>/^5/.test(m.input))||o.ft.moves[0]||null;
  o.ft.frame=1;o.ft.img=0;o.ft.view="hitboxes";
  ftRenderMarket();ftRenderViewer();
}
function ftSorted(){
  const q=w(o.ft.q);
  let list=o.ft.moves.filter(m=>!q||w(m.input+" "+m.name).includes(q));
  if(o.ft.sort){const key=o.ft.sort;list=[...list].sort((x,y)=>(ftNum(x[key])??999)-(ftNum(y[key])??999))}
  return list;
}
function ftRenderMarket(){
  const list=ftSorted();
  if(!o.ft.moves.length){a("ftMarket").innerHTML='<div class="empty">Aucun coup trouvé sur le wiki pour ce personnage.</div>';return}
  const FT_ORDER=["normal","command normal","unique","special","super","throw","drive"],groups=new Map();
  for(const m of list){const t=(m.type||"other").toLowerCase(),g=FT_TYPES[t]||m.type||"Autres";groups.has(g)||groups.set(g,[]);groups.get(g).push(m)}
  const head=(key,label)=>`<th><button class="th-sort${o.ft.sort===key?" on":""}" data-ft-sort="${key}" title="Trier">${label}${o.ft.sort===key?" ↑":""}</button></th>`;
  a("ftMarket").innerHTML=`<table class="ft-table"><thead><tr><th>Coup</th>${head("startup","Startup")}${head("onBlock","On block")}</tr></thead><tbody>`+
    [...groups].sort(([x],[y])=>{const ix=FT_ORDER.findIndex(t=>FT_TYPES[t]===x),iy=FT_ORDER.findIndex(t=>FT_TYPES[t]===y);return(ix<0?99:ix)-(iy<0?99:iy)}).map(([g,ms])=>`<tr class="ft-group"><td colspan="3">${l(g)} <span class="muted">(${ms.length})</span></td></tr>`+ms.map(m=>{
      const adv=ftAdv(m.onBlock),i=o.ft.moves.indexOf(m);
      return`<tr class="ft-row${m===o.ft.move?" sel":""}" data-ft-move="${i}" tabindex="0"><td>${tokMark(m.input||"?",o.game)} <span class="ft-name">${l(m.name||ftMoveLabel(m))}</span></td><td>${ftNum(m.startup)??"—"}</td><td class="${adv.cls}">${adv.txt}</td></tr>`}).join("")).join("")+
    "</tbody></table>";
}
function ftPhases(m){
  const s=ftNum(m.startup),act=ftNum(m.active),rec=ftNum(m.recovery);
  if(s==null&&act==null)return null;
  const su=Math.max(0,(s||1)-1),ac=Math.max(0,act||0),re=Math.max(0,rec||0);
  return{su,ac,re,total:Math.max(1,su+ac+re)};
}
const ftPhaseAt=(p,f)=>f<=p.su?"startup":f<=p.su+p.ac?"active":"recovery";
async function ftRenderViewer(){
  const m=o.ft.move;
  if(!m){a("ftViewer").innerHTML='<div class="empty">Choisis un coup dans le Frame Market.</div>';return}
  const p=ftPhases(m),files={hitboxes:ftFiles(m.hitboxes),images:ftFiles(m.images)};
  if(!files[o.ft.view].length)o.ft.view=files.hitboxes.length?"hitboxes":"images";
  const stats=[["Dégâts",m.damage],["Garde",m.guard],["On block",m.onBlock],["On hit",m.onHit],["Invulnérabilité",m.invuln],["Cancel",m.cancel]].filter(([,v])=>v);
  a("ftViewer").innerHTML=`<div class="row between ft-title"><div>${tokMark(m.input,o.game," big")} <b>${l(m.name||ftMoveLabel(m))}</b></div>
    <div class="seg">${files.hitboxes.length?`<button data-ft-view="hitboxes" aria-pressed="${o.ft.view==="hitboxes"}">Hitbox</button>`:""}${files.images.length?`<button data-ft-view="images" aria-pressed="${o.ft.view==="images"}">Sprite</button>`:""}</div></div>
    <div class="ft-stage${o.game==="mvc2"?" zoom-mvc2":""}" id="ftStage"><div class="muted small">Chargement de l’image…</div></div>
    ${!files.hitboxes.length&&files.images.length?`<p class="muted small" style="margin:6px 0 0">Hitbox pas encore publiée sur le wiki — sprite du coup.</p>`:""}
    <div class="ft-legend small"><span><i class="lg-hurt"></i>Hurtbox (bleu ou vert selon le wiki) : zone où le perso peut être touché</span><span><i class="lg-hit"></i>Hitbox : zone qui frappe</span></div>
    ${p?`<div class="ft-timeline"><div class="row between"><b id="ftPhase"></b><span class="muted small" id="ftFrameLabel"></span></div>
      <input type="range" id="ftFrame" min="1" max="${p.total}" value="${Math.min(o.ft.frame,p.total)}" aria-label="Frame">
      <div class="ft-cells" id="ftCells">${p.total<=120?Array.from({length:p.total},(_,i)=>`<i class="ft-cell f-${ftPhaseAt(p,i+1)}" data-ft-frame="${i+1}"></i>`).join(""):`<i class="ft-seg f-startup" style="flex:${p.su}"></i><i class="ft-seg f-active" style="flex:${p.ac}"></i><i class="ft-seg f-recovery" style="flex:${p.re}"></i>`}</div>
      <div class="row between small muted"><span><i class="dot f-startup"></i>Startup ${p.su+1}f · <i class="dot f-active"></i>Active ${p.ac}f · <i class="dot f-recovery"></i>Recovery ${p.re}f</span><span><button class="tiny" data-ft-step="-1" aria-label="Frame précédente">◀</button> <button class="tiny" data-ft-step="1" aria-label="Frame suivante">▶</button></span></div></div>`:'<div class="note small">Pas de données de frames pour ce coup.</div>'}
    ${stats.length?`<dl class="ft-stats">${stats.map(([k2,v])=>`<div><dt>${k2}</dt><dd>${l(v)}</dd></div>`).join("")}</dl>`:""}
    ${m.notes?`<details class="small"><summary>${cdxT("Notes du wiki")}</summary><p class="muted">${l(m.notes)}</p></details>`:""}`;
  if(p)ftSetFrame(o.ft.frame);
  const game=o.game,move=m,urls=await ftImageUrls(game,files[o.ft.view]);
  if(o.ft.move!==move||!a("ftStage"))return;
  o.ft.img=Math.min(o.ft.img,Math.max(0,urls.length-1));
  a("ftStage").className="ft-stage"+(o.game==="mvc2"?" zoom-mvc2":"");
  a("ftStage").innerHTML=urls.length?`<img src="${l(urls[o.ft.img])}" alt="${l(m.input+" "+(m.name||""))}" referrerpolicy="no-referrer" onerror="this.onerror=null;this.style.display='none'">${urls.length>1?`<div class="ft-thumbs">${urls.map((u,i)=>`<button data-ft-img="${i}" aria-pressed="${i===o.ft.img}">${i+1}</button>`).join("")}</div>`:""}`:'<div class="muted small">Pas d’image disponible pour ce coup sur le wiki.</div>';  const p2=ftPhases(m);if(p2)ftSpritePose(ftPhaseAt(p2,o.ft.frame),o.ft.frame,p2);
}
function ftSetFrame(f){
  const p=o.ft.move&&ftPhases(o.ft.move);
  if(!p||!a("ftFrame"))return;
  f=((f-1+p.total)%p.total)+1;
  o.ft.frame=f;a("ftFrame").value=f;
  const ph=ftPhaseAt(p,f);
  a("ftPhase").textContent=cdxT(PHASE_FR[ph]);a("ftPhase").className="ph-"+ph;
  a("ftFrameLabel").textContent=`Frame ${f} / ${p.total}`;
  a("ftCells").querySelectorAll(".ft-cell").forEach((c,i)=>c.classList.toggle("cur",i+1===f));
  ftSpritePose(ph,f,p);
}
function ftSpritePose(ph,f,p){const img=a("ftStage")&&a("ftStage").querySelector("img");if(!img||!p)return;const z=o.game==="mvc2"?1:1;let x=0,s=1,fil="";if(ph==="startup"){const k=p.su?Math.min(1,f/Math.max(1,p.su)):1;x=-8*k;s=1-0.02*k}else if(ph==="active"){x=10;s=1.02;fil="brightness(1.2) saturate(1.12)"}else{const k=p.re?Math.min(1,(f-p.su-p.ac)/Math.max(1,p.re)):1;x=6*(1-k);s=1}img.style.transform=`translateX(${x}px) scale(${(z*s).toFixed(3)})`;img.style.filter=fil;img.style.transformOrigin=o.game==="mvc2"?"center center":"center 80%"}function ftStop(){clearInterval(o.ft.timer);o.ft.timer=null;const b2=a("ftPlay");b2&&(b2.textContent=cdxT("▶ Lecture"))}
function ftSelect(i){o.ft.move=o.ft.moves[i]||null;o.ft.frame=1;o.ft.img=0;ftStop();a("ftMarket").querySelectorAll(".ft-row").forEach(r=>r.classList.toggle("sel",Number(r.dataset.ftMove)===i));ftRenderViewer();matchMedia("(max-width: 900px)").matches&&a("ftViewer").scrollIntoView({behavior:"smooth",block:"start"})}

V("frames",renderFrames);
a("ftGame").onchange=e=>{o.game=e.target.value;o.char=null;U();renderFrames();oe()};
a("ftChar").onchange=e=>{o.char=e.target.value;renderFrames();oe()};
a("ftWiki").onchange=e=>{const v=e.target.value;if(!v)return;try{localStorage.setItem("cdx-ft-map",JSON.stringify({...ftMapGet(),[o.game+":"+o.char]:v}))}catch{}ftLoadWiki(v).catch(err=>a("ftViewer").innerHTML=`<div class="empty">${l(err.message)}</div>`)};
a("ftSearch").oninput=e=>{o.ft.q=e.target.value;ftRenderMarket()};
a("ftMarket").onclick=e=>{const s=e.target.closest("[data-ft-sort]");if(s){o.ft.sort=o.ft.sort===s.dataset.ftSort?"":s.dataset.ftSort;ftRenderMarket();return}const r=e.target.closest("[data-ft-move]");r&&ftSelect(Number(r.dataset.ftMove))};
a("ftMarket").onkeydown=e=>{const r=e.target.closest("[data-ft-move]");if(!r)return;if(e.key==="Enter"||e.key===" "){e.preventDefault();ftSelect(Number(r.dataset.ftMove))}else if(e.key==="ArrowDown"||e.key==="ArrowUp"){e.preventDefault();let n=e.key==="ArrowDown"?r.nextElementSibling:r.previousElementSibling;while(n&&!n.dataset.ftMove)n=e.key==="ArrowDown"?n.nextElementSibling:n.previousElementSibling;n&&(n.focus(),ftSelect(Number(n.dataset.ftMove)))}};
a("ftViewer").addEventListener("click",e=>{
  const v=e.target.closest("[data-ft-view]");if(v){o.ft.view=v.dataset.ftView;o.ft.img=0;ftRenderViewer();return}
  const im=e.target.closest("[data-ft-img]");if(im){o.ft.img=Number(im.dataset.ftImg);ftRenderViewer();return}
  const st=e.target.closest("[data-ft-step]");if(st){ftStop();ftSetFrame(o.ft.frame+Number(st.dataset.ftStep));return}
  const c=e.target.closest("[data-ft-frame]");if(c){ftStop();ftSetFrame(Number(c.dataset.ftFrame));return}
  if(e.target.closest("[data-ft-retry]")){ftLoad();return}
  if(e.target.closest("#ftPlay")){if(o.ft.timer){ftStop();return}e.target.textContent=cdxT("❚❚ Pause");o.ft.timer=setInterval(()=>a("ftFrame")?ftSetFrame(o.ft.frame+1):ftStop(),110)}
});
a("ftViewer").addEventListener("input",e=>{e.target.id==="ftFrame"&&(ftStop(),ftSetFrame(Number(e.target.value)))});
a("openFrames").onclick=()=>j("frames");
a("charList").addEventListener("dblclick",e=>{const t=e.target.closest("[data-char]");if(t&&window.CDX_KC){e.preventDefault();CDX_KC.mastery(o.game,t.dataset.char)}});
{const om=a("openMastery");if(om)om.onclick=()=>{if(o.char&&window.CDX_KC)CDX_KC.mastery(o.game,o.char)}}

document.addEventListener("change",e=>{/^(peopleGame|ftGame)$/.test(e.target.id)&&setTimeout(syncLogos)});document.addEventListener("click",e=>{e.target.closest(".tab,#openFrames")&&setTimeout(syncLogos)});
function tokFlyPlace(e){
  const box=a("tokFly");
  if(!box||box.classList.contains("hidden"))return;
  const w=box.offsetWidth,h=box.offsetHeight;
  let x=e.clientX+16,y=e.clientY+18;
  if(x+w>innerWidth-8)x=Math.max(8,e.clientX-w-14);
  if(y+h>innerHeight-8)y=Math.max(8,e.clientY-h-16);
  box.style.transform=`translate(${Math.round(x)}px,${Math.round(y)}px)`;
}
document.addEventListener("pointerover",e=>{
  const el=e.target.closest("[data-tip],[data-i18n-tip]"),box=a("tokFly");
  if(!box)return;
  if(!el){box.classList.add("hidden");return}
  const t=cdxT(el.getAttribute("data-i18n-tip")||el.getAttribute("data-tip")||"");
  if(!t){box.classList.add("hidden");return}
  box.textContent=t;
  box.classList.remove("hidden");
  tokFlyPlace(e);
});
document.addEventListener("pointermove",tokFlyPlace);
document.addEventListener("pointerout",e=>{const box=a("tokFly");if(box&&!(e.relatedTarget&&e.relatedTarget.closest&&e.relatedTarget.closest("[data-tip],[data-i18n-tip]")))box.classList.add("hidden")});
function kgRelated(combo){
  if(!combo)return[];
  const vid=te(combo.video),toks=new Set(combo.tokens||[]);
  return d.combos.filter(c=>c.id!==combo.id).map(c=>{
    let score=0;
    if(c.game===combo.game&&c.character===combo.character)score+=2;
    const v=te(c.video);if(vid&&v===vid)score+=5;
    const ov=(c.tokens||[]).filter(t=>toks.has(t)).length;
    if(toks.size)score+=ov/Math.max(1,toks.size);
    return{c,score};
  }).filter(x=>x.score>=2).sort((a,b)=>b.score-a.score).slice(0,8);
}
window.CDX_KG={related:kgRelated};
const RA_FRAME=1/30;
function raInkMeta(){const dur=Number((a("raInkDur")||{}).value);return{t:Math.round(raCur()*10)/10,dur:isFinite(dur)?dur:3}}
const RA_INK_LAB={p:"Crayon",t:"Écrire",r:"Rectangle",o:"Cercle",a:"Flèche"};
function raInkLab(s){if(s&&s.k==="t"&&s.s)return s.s;return cdxT((s&&RA_INK_LAB[s.k])||"Dessin")}
function raInkPos(s){
  if(!s)return[.5,.32];
  if(s.k==="t")return[s.x||.5,s.y||.32];
  if(s.k==="p"&&s.pts&&s.pts.length){const p=s.pts[Math.floor(s.pts.length/2)];return[p[0],p[1]]}
  return[((s.x||0)+(s.x2||s.x||0))/2,((s.y||0)+(s.y2||s.y||0))/2];
}
function raTimingItems(){
  const pack=raGet(),out=[];
  (pack.marks||[]).forEach((m,i)=>out.push({kind:"mark",i,t:Number(m.t)||0,label:m.note||cdxT("Marque")}));
  (pack.ink||[]).forEach((s,i)=>out.push({kind:"ink",i,t:Number(s.t)||0,label:raInkLab(s)}));
  out.sort((a,b)=>a.t-b.t||a.kind.localeCompare(b.kind));
  return out;
}
function raFillTiming(){
  const box=a("raMarks");if(!box)return;
  const items=raTimingItems();
  box.innerHTML=items.length?items.map(it=>`<button type="button" class="ra-mark${it.kind==="ink"?" is-ink":""}" data-ra-seek="${it.t}"><span class="ra-t">${l(raFmt(it.t))}</span><span class="grow">${l(it.label)}</span><span class="tiny" ${it.kind==="ink"?`data-ra-ink-del="${it.i}"`:`data-ra-del="${it.i}"`} title="${l(cdxT("Supprimer le point"))}">✕</span></button>`).join(""):`<div class="empty">${l(cdxT("ra.timing.empty"))}</div>`;
}
function raEchoOp(t0,dur,now){
  t0=Number(t0)||0;dur=Number(dur);
  const dt=now-t0;
  if(dt<-0.08)return 0;
  if(!isFinite(dur)||dur<=0)return dt<0.2?.95:.8;
  if(dt>dur+0.08)return 0;
  if(dt<0.15)return .95;
  return Math.max(.72,.95-dt/Math.max(.8,dur)*0.22);
}
function raInkAlpha(s,now){
  if(s===raStroke)return 1;
  if(s.t==null||!isFinite(Number(s.t)))return 1;
  return raEchoOp(s.t,s.dur==null?3:s.dur,now);
}
function raInkFit(){
  const c=a("raInk"),stage=a("raStage");
  if(!c||!stage)return;
  const r=(a("raPlayerHost")||stage).getBoundingClientRect(),dpr=window.devicePixelRatio||1;
  c.width=Math.max(1,Math.round(r.width*dpr));
  c.height=Math.max(1,Math.round(r.height*dpr));
  c.style.width=r.width+"px";
  c.style.height=r.height+"px";
  raInkPaint();
}
function raInkDrawOne(ctx,s,w,h,lw){
  ctx.strokeStyle=s.c||"#f6e7a3";
  ctx.fillStyle=s.c||"#f6e7a3";
  ctx.lineWidth=Math.max(2,(s.w||2.6)*(w/420));
  if(s.k==="p"&&s.pts&&s.pts.length){
    ctx.lineJoin="round";ctx.lineCap="round";
    ctx.beginPath();
    s.pts.forEach(([x,y],i)=>{const X=x*w,Y=y*h;i?ctx.lineTo(X,Y):ctx.moveTo(X,Y)});
    ctx.stroke();
  }else if(s.k==="t"&&s.s){
    ctx.font="700 "+Math.max(14,Math.round(w*0.028))+"px system-ui,sans-serif";
    ctx.shadowColor="#000a";ctx.shadowBlur=4;
    ctx.fillText(s.s,s.x*w,s.y*h);
    ctx.shadowBlur=0;
  }else if(s.k==="r"){
    ctx.lineJoin="miter";ctx.lineCap="butt";
    const x=Math.min(s.x,s.x2)*w,y=Math.min(s.y,s.y2)*h,rw=Math.abs(s.x2-s.x)*w,rh=Math.abs(s.y2-s.y)*h;
    ctx.strokeRect(x,y,Math.max(2,rw),Math.max(2,rh));
  }else if(s.k==="o"){
    ctx.lineJoin="round";ctx.lineCap="butt";
    const x=Math.min(s.x,s.x2)*w,y=Math.min(s.y,s.y2)*h,rw=Math.abs(s.x2-s.x)*w,rh=Math.abs(s.y2-s.y)*h;
    const rad=Math.max(2,Math.min(rw,rh)/2);
    ctx.beginPath();
    ctx.arc(x+rw/2,y+rh/2,rad,0,Math.PI*2);
    ctx.stroke();
  }else if(s.k==="a"){
    const x1=s.x*w,y1=s.y*h,x2=s.x2*w,y2=s.y2*h;
    const dx=x2-x1,dy=y2-y1,len=Math.hypot(dx,dy)||1;
    const ux=dx/len,uy=dy/len;
    const head=Math.max(12,lw*5.2);
    const stop=Math.max(0,len-head*0.88);
    ctx.lineJoin="miter";ctx.lineCap="butt";ctx.miterLimit=2.4;
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x1+ux*stop,y1+uy*stop);
    ctx.stroke();
    const tipX=x1+ux*len,tipY=y1+uy*len;
    const bx=tipX-ux*head,by=tipY-uy*head;
    const spread=head*0.38;
    ctx.beginPath();
    ctx.moveTo(tipX,tipY);
    ctx.lineTo(bx-uy*spread,by+ux*spread);
    ctx.lineTo(bx+uy*spread,by-ux*spread);
    ctx.closePath();
    ctx.fill();
  }
}
function raInkPaint(){
  const c=a("raInk");if(!c)return;
  const ctx=c.getContext("2d"),w=c.width,h=c.height,now=raCur();
  ctx.clearRect(0,0,w,h);
  if(!raInkOn)return;
  const ink=raGet().ink||[],all=raStroke?[...ink,raStroke]:ink;
  const lw=Math.max(2,2.6*(w/420));
  for(const s of all){
    const al=raInkAlpha(s,now);
    if(!al)continue;
    if(raGhostOn&&s!==raStroke){
      ctx.save();ctx.globalAlpha=al*0.58;ctx.translate(-w*0.02,-h*0.014);raInkDrawOne(ctx,s,w,h,lw);ctx.restore();
      ctx.save();ctx.globalAlpha=al*0.78;ctx.translate(-w*0.01,-h*0.007);raInkDrawOne(ctx,s,w,h,lw);ctx.restore();
    }
    ctx.save();ctx.globalAlpha=al;raInkDrawOne(ctx,s,w,h,lw);ctx.restore();
  }
}
function raPt(e){
  const c=a("raInk");if(!c)return[0,0];
  const r=c.getBoundingClientRect();
  return[Math.min(1,Math.max(0,(e.clientX-r.left)/Math.max(1,r.width))),Math.min(1,Math.max(0,(e.clientY-r.top)/Math.max(1,r.height)))];
}
function raToolSync(){
  const stage=a("raStage");if(stage)stage.dataset.tool=raTool;
  document.querySelectorAll("[data-ra-tool]").forEach(b=>b.setAttribute("aria-pressed",b.dataset.raTool===raTool?"true":"false"));
  const lab=document.querySelector('[data-ra-tool="play"]');
  if(lab)lab.textContent=raPlaying()?"❚❚":"▶";
}
function raInkPush(stroke){
  if(!raSlot())return g(cdxT("x.need"),!0);
  raPut({ink:[...raGet().ink,{...stroke,...raInkMeta()}].slice(-120)});
  raInkPaint();raFillTiming();raTicks();raGhosts();
}
function raTextHide(commit){
  const inp=a("raText");if(!inp||inp.classList.contains("hidden"))return;
  const s=inp.value.trim();
  inp.classList.add("hidden");inp.value="";
  if(commit&&s&&raTextAt)raInkPush({k:"t",c:raColor,x:raTextAt[0],y:raTextAt[1],s});
  raTextAt=null;
}
function raInkUndo(){if(!raSlot())return;const ink=raGet().ink.slice(0,-1);raPut({ink});raInkPaint();raFillTiming();raTicks();raGhosts()}
function raInkClear(){if(!raSlot())return;raPut({ink:[]});raInkPaint();raFillTiming();raTicks();raGhosts()}
function raInkFlip(){
  if(!raSlot())return;
  const ink=raGet().ink.map(s=>s.k==="t"?{...s,x:1-s.x}:s.k==="p"?{...s,pts:(s.pts||[]).map(([x,y])=>[1-x,y])}:s.k==="r"||s.k==="a"||s.k==="o"?{...s,x:1-s.x,x2:1-s.x2}:s);
  raPut({ink});raInkPaint();raFillTiming();raTicks();raGhosts();
}
function raLoad(){try{return JSON.parse(localStorage.getItem("cdx-replay-v1"))||{}}catch{return{}}}
function raSave(st){try{localStorage.setItem("cdx-replay-v1",JSON.stringify(st))}catch{}}
function raSlot(){return o.watchId||(o.guestVideo?"v:"+o.guestVideo:null)||(o.guestX?"x:"+o.guestX:null)}
function raGet(){const k=raSlot();if(!k)return{marks:[],notes:"",ink:[],inputs:[]};const x=raLoad()[k]||{};return{marks:x.marks||[],notes:x.notes||"",ink:Array.isArray(x.ink)?x.ink:[],inputs:Array.isArray(x.inputs)?x.inputs:[]}}
function raPut(patch){const k=raSlot();if(!k)return;const st=raLoad();st[k]={marks:[],notes:"",ink:[],inputs:[],...raGet(),...patch};raSave(st)}
function raInputs(){return raGet().inputs||[]}
function raSetInputs(arr){raPut({inputs:(arr||[]).slice().sort((a,b)=>a.t-b.t)})}
function raVideoUrl(){
  const c=o.watchId?L(o.watchId):null;
  if(c&&c.video)return c.video;
  if(o.guestVideo)return"https://www.youtube.com/watch?v="+o.guestVideo;
  if(o.guestX)return xHref(o.guestX);
  const raw=((a("raUrl")||{}).value||"").trim();
  return hasVid(raw)?raw:"";
}
function raFmt(t){t=Math.max(0,Number(t)||0);const m=Math.floor(t/60),s=t-m*60;return m+":"+s.toFixed(1).padStart(4,"0")}
function raCmd(func,args){const frame=raPlayer&&raPlayer._frame;if(!frame||!frame.contentWindow)return;const msg=JSON.stringify({event:"command",func,args:args||[],id:frame.id||"raPlayer"});try{frame.contentWindow.postMessage(msg,"*")}catch{}}
function raRateNow(){const r=Number((a("raRate")||{}).value||1);return r>0?r:1}
function raClockStart(p){if(!p)return;p._t0=p._t||0;p._clock0=performance.now();p._rate=raRateNow()}
function raClockStop(p){if(!p)return;p._t=raCurOf(p);p._clock0=null}
function raCurOf(p){if(!p)return 0;if(p._state===1&&p._clock0!=null){const t=p._t0+(performance.now()-p._clock0)/1000*(p._rate||1);return p._d>0?Math.min(p._d,Math.max(0,t)):Math.max(0,t)}return Math.max(0,p._t||0)}
function raSetTime(p,t,fromYt){
  if(!p)return;
  t=Math.max(0,Number(t)||0);
  if(fromYt){
    const local=raCurOf(p);
    if(t<0.2&&local>0.35)return;
    if(p._state===1&&p._clock0!=null&&Math.abs(local-t)<0.6)return;
  }
  p._t=t;
  if(p._state===1)raClockStart(p);
}
function raApplyInfo(p,info){
  if(!p)return;
  if(typeof info==="number"){
    if(info===-1||info===0||info===1||info===2||info===3||info===5){
      const was=p._state;p._state=info;
      if(info===1&&was!==1)raClockStart(p);
      if(info!==1&&was===1)raClockStop(p);
    }
    return;
  }
  if(!info||typeof info!=="object")return;
  if(typeof info.duration==="number"&&info.duration>0)p._d=info.duration;
  if(typeof info.playerState==="number"){
    const was=p._state;p._state=info.playerState;
    if(info.playerState===1&&was!==1)raClockStart(p);
    if(info.playerState!==1&&was===1)raClockStop(p);
  }
  if(typeof info.currentTime==="number")raSetTime(p,info.currentTime,!0);
}
function raListenYoutube(){
  if(window.__cdxYtListen)return;
  window.__cdxYtListen=true;
  window.addEventListener("message",e=>{
    const origin=String(e.origin||"");
    if(origin!=="https://www.youtube.com"&&origin!=="https://www.youtube-nocookie.com")return;
    let data=e.data;if(typeof data==="string"){try{data=JSON.parse(data)}catch{return}}
    if(!data||typeof data!=="object")return;
    const p=raPlayer;if(!p||!p._bridge)return;
    if(data.event==="onReady"){p._ready=!0;raCmd("addEventListener",["onStateChange"]);raCmd("addEventListener",["onReady"]);raApplyRate();raSyncTime();raInkFit();raWatch();return}
    const info=data.info;
    if(data.event==="onStateChange"){raApplyInfo(p,typeof info==="number"?{playerState:info}:info);raSyncTime();raWatch();return}
    if(data.event==="initialDelivery"||data.event==="infoDelivery"||data.event==="apiInfoDelivery"){raApplyInfo(p,info);raSyncTime()}
  });
}
function raMakePlayer(iframe){
  raListenYoutube();
  const p={_bridge:!0,_ready:!1,_frame:iframe,_t:0,_t0:0,_d:0,_state:-1,_clock0:null,_rate:1,
    playVideo(){raCmd("playVideo");p._state=1;raClockStart(p);raWatch()},
    pauseVideo(){if(p._state===1)raClockStop(p);raCmd("pauseVideo");p._state=2},
    seekTo(t){t=Math.max(0,Number(t)||0);p._t=t;if(p._state===1)raClockStart(p);raCmd("seekTo",[t,!0])},
    getCurrentTime(){return raCurOf(p)},
    getDuration(){return p._d},
    getPlayerState(){return p._state},
    setPlaybackRate(r){r=Number(r)||1;p._t=raCurOf(p);p._rate=r>0?r:1;if(p._state===1)raClockStart(p);raCmd("setPlaybackRate",[p._rate])},
    destroy(){p._frame=null}
  };
  const hello=()=>{try{iframe.contentWindow&&iframe.contentWindow.postMessage(JSON.stringify({event:"listening",id:iframe.id||"raPlayer"}),"*")}catch{}};
  iframe.addEventListener("load",hello);
  setTimeout(hello,400);
  setTimeout(hello,1200);
  return p;
}
function raMakeHtml5(video){
  const p={_bridge:!1,_html5:!0,_ready:!0,_frame:video,_t:0,_t0:0,_d:0,_state:2,_clock0:null,_rate:1,
    playVideo(){const go=video.play();if(go&&go.catch)go.catch(()=>{});p._state=1;raClockStart(p);raWatch()},
    pauseVideo(){if(p._state===1)raClockStop(p);video.pause();p._state=2},
    seekTo(t){t=Math.max(0,Number(t)||0);try{video.currentTime=t}catch{}p._t=t;if(p._state===1)raClockStart(p)},
    getCurrentTime(){return Number(video.currentTime)||raCurOf(p)||0},
    getDuration(){return Number(video.duration)||p._d||0},
    getPlayerState(){return video.paused?2:1},
    setPlaybackRate(r){r=Number(r)||1;p._rate=r>0?r:1;try{video.playbackRate=p._rate}catch{}},
    destroy(){try{video.pause()}catch{};p._frame=null}
  };
  video.addEventListener("loadedmetadata",()=>{p._d=video.duration||0;p._ready=!0;raSyncTime();raInkFit()});
  video.addEventListener("play",()=>{p._state=1;raClockStart(p);raWatch()});
  video.addEventListener("pause",()=>{if(p._state===1)raClockStop(p);p._state=2;raSyncTime()});
  video.addEventListener("timeupdate",()=>{p._t=video.currentTime||0});
  return p;
}
function raDestroy(){cancelAnimationFrame(raTick);raTick=0;try{raPlayer&&raPlayer.destroy&&raPlayer.destroy()}catch{}raPlayer=null;raVid="";const host=a("raPlayerHost");if(host)host.innerHTML=""}
function raCur(){try{return raPlayer&&raPlayer.getCurrentTime?raPlayer.getCurrentTime():0}catch{return 0}}
function raLen(){try{return raPlayer&&raPlayer.getDuration?raPlayer.getDuration():0}catch{return 0}}
function raPlaying(){try{return raPlayer&&raPlayer.getPlayerState&&raPlayer.getPlayerState()===1}catch{return!1}}
function raApplyRate(){const r=Number((a("raRate")||{}).value||1);try{raPlayer&&raPlayer.setPlaybackRate&&raPlayer.setPlaybackRate(r)}catch{}}
function raToggle(){if(!raPlayer)return;try{raPlaying()?raPlayer.pauseVideo():raPlayer.playVideo()}catch{}raSyncTime()}
function raTicks(){
  const el=a("raTicks");if(!el)return;
  const d=raLen()||1;
  const pct=t=>Math.min(100,Math.max(0,(t/d)*100));
  el.innerHTML=(raGet().marks||[]).map(m=>`<i style="left:${pct(m.t)}%"></i>`).join("")+(raGet().ink||[]).map(s=>`<i class="ink" style="left:${pct(s.t||0)}%"></i>`).join("")+raInputs().map(m=>`<i class="hit" style="left:${pct(m.t)}%"></i>`).join("");
}
function raLivePaint(){
  const box=a("raLive");if(!box)return;
  const t=raCur(),ins=raInputs(),g=o.game;
  let cur=-1;
  for(let i=0;i<ins.length;i++) if(ins[i].t<=t+0.03) cur=i;
  const slice=cur<0?[]:ins.slice(Math.max(0,cur-4),cur+1);
  box.innerHTML=slice.map((x,i)=>`<span class="token ${tokCls(x.tok,g).trim()}${i===slice.length-1?" on":""}">${l(x.tok)}</span>`).join("");
}
function raPadDraw(){
  const box=a("raPad");if(!box)return;
  if(!o.game||!b[o.game]){box.innerHTML="";return}
  const e=o.game,g={Directions:[],Debout:[],Accroupi:[],Saut:[],"Spéciaux":[],"Mécaniques":[]};
  for(const t of Ae(e))g[palBucket(t,e)].push(t);
  box.innerHTML=Object.entries(g).filter(([,n])=>n.length).map(([lab,n])=>`<div class="pal-group"><span class="pal-label">${cdxT(lab)}</span><div class="buttons">${n.map(s=>palTokBtn(s,e,`data-ra-tok="${l(s)}"`)).join("")}</div></div>`).join("");
}
function raFillInputs(){
  const ins=raInputs(),g=o.game,combo=o.watchId?L(o.watchId):null;
  const toks=ins.length?ins.map(x=>x.tok):(combo?comboView(combo).tokens:[]);
  if(a("raSeq"))a("raSeq").innerHTML=toks.length?K(toks,void 0,g):`<span class="muted small">${l(cdxT("Séquence non renseignée"))}</span>`;
  const list=a("raInputList");
  if(list)list.innerHTML=ins.length?ins.map((x,i)=>`<button type="button" class="ra-mark" data-ra-hit="${x.t}"><span class="ra-t">${l(raFmt(x.t))}</span><span class="token ${tokCls(x.tok,g).trim()}">${l(x.tok)}</span><span class="tiny" data-ra-hit-del="${i}" title="${l(cdxT("Supprimer le point"))}">✕</span></button>`).join(""):`<div class="empty">${l(cdxT("Aucune touche posée"))}</div>`;
  const btn=a("raCommit");
  const saveLab=cdxT(o.watchId&&L(o.watchId)?"Mettre à jour":"Enregistrer");
  if(btn)btn.textContent=saveLab;
  const saveHud=a("raSaveEdit");if(saveHud)saveHud.textContent=cdxT("Enregistrer");
  raLivePaint();raTicks();
}
function raStamp(tok){
  tok=String(tok||"").trim();
  if(!tok)return;
  if(!raSlot())return g(cdxT("x.need"),!0);
  let t=Math.round(raCur()*10)/10;
  const ins=raInputs();
  const same=ins.find(x=>Math.abs(x.t-t)<=0.06);
  if(same&&same.tok!==tok){
    const last=ins.length?ins[ins.length-1].t:t;
    t=Math.round((Math.max(t,last)+0.1)*10)/10;
  }
  raSetInputs([...ins.filter(x=>Math.abs(x.t-t)>0.06),{t,tok}]);
  raFillInputs();
}
function raCommitCombo(){
  const toks=raInputs().map(x=>x.tok);
  if(!toks.length)return g(cdxT("ra.save.need"),!0);
  if(!o.game||!o.char)return g(cdxT("Choisis un jeu et un personnage."),!0);
  const video=raVideoUrl();
  const pack=raGet();
  try{harvestKeys(o.game,toks)}catch{}
  if(o.watchId&&L(o.watchId)){
    ae(o.watchId,{tokens:toks,video:video||L(o.watchId).video||"",origin:"replay"});
    g(cdxT("ra.save.updated").replace("{0}",charLabel(o.char)));
  }else{
    const c=W(o.game,o.char);
    c.id=Se();c.createdAt=new Date().toISOString();c.tokens=toks;c.video=video||"";
    c.origin="replay";
    c.name=joinTokens(toks).slice(0,80)||("Replay · "+charLabel(o.char));
    $e(c);o.watchId=c.id;o.guestVideo=null;
    g(cdxT("ra.save.done").replace("{0}",charLabel(o.char)));
  }
  raPut({marks:pack.marks,notes:pack.notes,ink:pack.ink,inputs:pack.inputs});
  raFill();oe();
  try{C()}catch{}
}
function raGhosts(){
  const box=a("raGhosts");if(!box)return;
  if(!raGhostOn){box.innerHTML="";return}
  const now=raCur(),pack=raGet(),bits=[];
  let markN=0;
  (pack.marks||[]).forEach(m=>{
    const op=raEchoOp(m.t,1.8,now);
    if(!op)return;
    const left=10+(markN%2)*18, top=14+(markN%3)*12;
    markN++;
    bits.push(`<div class="ra-ghost" style="left:${left}%;top:${top}%;opacity:${op}">${l(m.note||raFmt(m.t))}</div>`);
  });
  (pack.ink||[]).forEach(s=>{
    const op=raInkAlpha(s,now);
    if(!op)return;
    const[x,y]=raInkPos(s);
    bits.push(`<div class="ra-ghost" style="left:${Math.min(78,Math.max(4,x*100))}%;top:${Math.min(72,Math.max(8,y*100))}%;opacity:${op}">${l(raInkLab(s))}</div>`);
  });
  box.innerHTML=bits.join("");
}
function raSyncTime(){
  const t=raCur(),d=raLen(),seek=a("raSeek");
  if(a("raTime"))a("raTime").textContent=raFmt(t);
  if(a("raDur"))a("raDur").textContent=raFmt(d);
  const pct=d>0?Math.min(100,Math.max(0,t/d*100)):0;
  const fill=a("raSeekFill");if(fill)fill.style.width=pct+"%";
  if(seek&&document.activeElement!==seek){seek.max=Math.max(1,Math.round(d*10));seek.value=Math.round(t*10)}
  const btn=a("raPlay");if(btn)btn.textContent=raPlaying()?cdxT("❚❚ Pause"):cdxT("▶ Lecture");const mini=a("raPlayMini");if(mini){mini.textContent=raPlaying()?"❚❚":"▶";mini.setAttribute("aria-label",raPlaying()?cdxT("❚❚ Pause"):cdxT("▶ Lecture"))}
  raToolSync();
  raTicks();raGhosts();raLivePaint();raInkPaint();
}
function raWatch(){
  if(raTick)return;
  let lastPoll=0;
  const step=now=>{
    if(!raPlayer||!raPlayer._frame){raTick=0;return}
    if(!lastPoll||now-lastPoll>400){
      lastPoll=now;
      if(raPlayer._bridge){raCmd("getDuration");raCmd("getPlayerState")}
    }
    raSyncTime();
    raTick=requestAnimationFrame(step);
  };
  raTick=requestAnimationFrame(step);
}
function raLoop(){raWatch()}
let raMountTok=0;
async function raMount(){
  const host=a("raPlayerHost"),empty=a("raEmpty");if(!host)return;
  const tok=++raMountTok;
  const c=o.watchId?L(o.watchId):null;
  const yt=te(c&&c.video)||o.guestVideo;
  const x=xid(c&&c.video)||o.guestX;
  const key=yt?"yt:"+yt:x?"x:"+x:"";
  if(!key){
    raDestroy();
    if(empty)empty.classList.remove("hidden");
    raInkFit();
    return;
  }
  if(empty)empty.classList.add("hidden");
  if(raVid===key&&raPlayer){raInkFit();raWatch();return}
  raDestroy();raVid=key;
  if(yt){
    host.innerHTML=ytIframe(yt,"video-frame",{enablejsapi:"1"},"raPlayer");
    raPlayer=raMakePlayer(a("raPlayer"));
    raInkFit();
    raWatch();
    return;
  }
  if(!xApproved(x)&&!isAtelier()){
    xRequest(x);
    host.innerHTML=`<div class="x-wait muted">${l(cdxT("x.wait"))}<p class="small"><a href="${l(xHref(x))}" target="_blank" rel="noopener noreferrer">${l(cdxT("x.open"))}</a></p></div>`;
    raInkFit();
    return;
  }
  const meta=await xMeta(x);
  if(tok!==raMountTok)return;
  if(meta&&meta.mp4){
    host.innerHTML=`<video id="raPlayer" class="video-frame" src="${l(meta.mp4)}" playsinline preload="metadata"></video>`;
    raPlayer=raMakeHtml5(a("raPlayer"));
    if(meta.duration)raPlayer._d=meta.duration;
    raInkFit();
    raWatch();
    return;
  }
  host.innerHTML=`<div class="status bad">${l(cdxT("x.novid"))}<p class="small"><a href="${l(xHref(x))}" target="_blank" rel="noopener noreferrer">${l(cdxT("x.open"))}</a></p></div>`;
  raInkFit();
}
function raFill(){
  if(!a("raGame"))return;
  k(a("raGame"),De(),o.game);
  k(a("raChar"),T(o.game).map(n=>[n.name,charLabel(n.name)]),o.char);
  const list=q(o.game,o.char).filter(c=>hasVid(c.video)||c.id===o.watchId);
  k(a("raCombo"),[["",cdxT("Combo vidéo")],...list.map(c=>[c.id,c.name])],o.watchId||"");
  const combo=o.watchId?L(o.watchId):null;
  const url=combo&&combo.video||(o.guestVideo?"https://www.youtube.com/watch?v="+o.guestVideo:"")||(o.guestX?xHref(o.guestX):"");
  if(document.activeElement!==a("raUrl"))a("raUrl").value=url||"";
  if(a("raHudChar"))a("raHudChar").textContent=o.char?charLabel(o.char):"—";
  if(a("raHudGame"))a("raHudGame").textContent=b[o.game]?b[o.game].name:(o.game||"—");
  if(a("raHudCombo"))a("raHudCombo").textContent=combo?combo.name:cdxT("Replay Analyzer");
  raPadDraw();
  raFillInputs();
  raInkPaint();
  try{padStatus()}catch{}
  const pack=raGet();
  if(document.activeElement!==a("raNotes"))a("raNotes").value=pack.notes||"";
  raFillTiming();
  raGhosts();
  const rel=kgRelated(combo);
  a("raRelated").innerHTML=rel.length?`<div class="ra-related">${rel.map(({c})=>`<button type="button" class="listitem" data-action="replay" data-id="${l(c.id)}"><span class="grow"><b>${l(c.name)}</b><div class="muted small">${l(b[c.game]?b[c.game].name:c.game)} · ${l(charLabel(c.character))}</div></span></button>`).join("")}</div>`:`<div class="empty">${l(cdxT("Aucun combo lié."))}</div>`;
}
function raRender(){window.CDX_KG={related:kgRelated,combos:d.combos.length};raFill();raMount();raSyncTime()}
function raOpen(id){
  const c=id?L(id):null;
  if(c){o.watchId=c.id;o.game=c.game;o.char=c.character;o.focusId=c.id;o.guestVideo=null;o.guestX=null}
  else if(id&&/^[a-zA-Z0-9_-]{11}$/.test(id)){o.guestVideo=id;o.guestX=null;o.watchId=null}
  else if(id&&/^\d{5,}$/.test(id)){o.guestX=id;o.guestVideo=null;o.watchId=null}
  j("replay");
}
async function raImportVideo(){
  const raw=((a("raUrl")||{}).value||"").trim(),yt=te(raw),x=xid(raw);
  if(!yt&&!x)return g(cdxT("x.need"),!0);
  if(x&&!yt){
    const hit=d.combos.find(c=>xid(c.video)===x);
    if(hit){o.watchId=hit.id;o.game=hit.game;o.char=hit.character;o.guestVideo=null;o.guestX=null;raRender();oe();g(b[hit.game].name+" · "+charLabel(hit.character));return}
    const info=await applyXGuess(x);
    if(info&&info.game)o.game=info.game;
    if(info&&info.char)o.char=info.char;
    o.guestX=x;o.guestVideo=null;o.watchId=null;raRender();oe();
    g(cdxT("ra.guest.ready"));
    return;
  }
  const hit=d.combos.find(c=>te(c.video)===yt);
  if(hit){o.watchId=hit.id;o.game=hit.game;o.char=hit.character;o.guestVideo=null;o.guestX=null;raRender();oe();g(b[hit.game].name+" · "+charLabel(hit.character));return}
  const info=await applyYtGuess(yt);
  if(info&&info.game)o.game=info.game;
  if(info&&info.char)o.char=info.char;
  o.guestVideo=yt;o.guestX=null;o.watchId=null;raRender();oe();
  g(cdxT("ra.guest.ready"));
}
function raBind(){
  if(raBound||!a("raGame"))return;raBound=true;
  a("raGame").onchange=e=>{o.game=e.target.value;o.char=(T(o.game)[0]||{}).name||null;o.watchId=null;raRender();oe()};
  a("raChar").onchange=e=>{o.char=e.target.value;o.watchId=null;raRender();oe()};
  a("raCombo").onchange=e=>{const id=e.target.value;if(id){const c=L(id);if(c){o.watchId=c.id;o.game=c.game;o.char=c.character;o.guestVideo=null;o.guestX=null}}else o.watchId=null;raRender();oe()};
  a("raUrl").addEventListener("change",()=>{
    const raw=a("raUrl").value.trim(),yt=te(raw),x=xid(raw);
    if(!yt&&!x){if(!raw){o.guestVideo=null;o.guestX=null}raMount();return}
    if(x&&!yt){
      const hit=d.combos.find(c=>xid(c.video)===x&&c.game===o.game&&(!o.char||c.character===o.char))||d.combos.find(c=>xid(c.video)===x);
      if(hit){o.watchId=hit.id;o.game=hit.game;o.char=hit.character;o.guestVideo=null;o.guestX=null;raRender();oe();return}
      o.guestX=x;o.guestVideo=null;o.watchId=null;raRender();oe();
      applyXGuess(x).then(info=>{
        if(!info)return;
        if(info.game)o.game=info.game;
        if(info.char)o.char=info.char;
        raFill();oe();
        if(info.game&&info.char)g(cdxT("Jeu et personnage reconnus : {0} · {1}.").replace("{0}",b[info.game].name).replace("{1}",info.chars&&info.chars.length?info.chars.map(charLabel).join(" · "):charLabel(info.char)));
      });
      return;
    }
    const hit=d.combos.find(c=>te(c.video)===yt&&c.game===o.game&&(!o.char||c.character===o.char))||d.combos.find(c=>te(c.video)===yt);
    if(hit){o.watchId=hit.id;o.game=hit.game;o.char=hit.character;o.guestVideo=null;o.guestX=null;raRender();oe();return}
    o.guestVideo=yt;o.guestX=null;o.watchId=null;raRender();oe();
    applyYtGuess(yt).then(info=>{
      if(!info)return;
      if(info.game)o.game=info.game;
      if(info.char)o.char=info.char;
      raFill();oe();
      if(info.game&&info.char)g(cdxT("Jeu et personnage reconnus : {0} · {1}.").replace("{0}",b[info.game].name).replace("{1}",charLabel(info.char)));
    });
  });
  a("raPlay").onclick=()=>{if(!raPlayer)return;try{raPlaying()?raPlayer.pauseVideo():raPlayer.playVideo()}catch{}raSyncTime();if(raPlaying()&&!raTick)raLoop()};a("raPlayMini").onclick=()=>a("raPlay").click();
  const full=a("raFull"),theater=a("raStage")&&a("raStage").closest(".ra-theater-panel");
  if(full&&theater){full.onclick=()=>{try{document.fullscreenElement?document.exitFullscreen():(theater.requestFullscreen||theater.webkitRequestFullscreen).call(theater)}catch{}};document.addEventListener("fullscreenchange",()=>{full.textContent=document.fullscreenElement?"✕":"⛶";setTimeout(()=>{try{raInkFit()}catch{}},120)})}
  const pb=document.querySelector(".ra-playbox"),pbh=pb&&pb.querySelector(".ra-playbox-h");
  if(pbh){let dx=0,dy=0;pbh.addEventListener("pointerdown",e=>{e.preventDefault();pbh.setPointerCapture(e.pointerId);const sx=e.clientX-dx,sy=e.clientY-dy,mv=ev=>{dx=ev.clientX-sx;dy=ev.clientY-sy;pb.style.transform=`translate(${dx}px,${dy}px)`},up=()=>{pbh.removeEventListener("pointermove",mv);pbh.removeEventListener("pointerup",up)};pbh.addEventListener("pointermove",mv);pbh.addEventListener("pointerup",up)})}
  a("raBack").onclick=()=>raSeekRel(-1);
  a("raFwd").onclick=()=>raSeekRel(1);
  a("raBackF").onclick=()=>raSeekRel(-.1);
  a("raFwdF").onclick=()=>raSeekRel(.1);
  a("raRate").onchange=raApplyRate;
  a("raSeek").oninput=()=>{const t=Number(a("raSeek").value||0)/10;try{raPlayer&&raPlayer.seekTo(t,true)}catch{}raSyncTime()};
  a("raMark").onclick=()=>{
    if(!raSlot())return g(cdxT("x.need"),!0);
    const note=(a("raMarkNote").value||"").trim();
    const marks=[...raGet().marks,{t:Math.round(raCur()*10)/10,note}];
    marks.sort((x,y)=>x.t-y.t);raPut({marks});a("raMarkNote").value="";raFill();
  };
  a("raNotes").addEventListener("change",()=>{if(raSlot())raPut({notes:a("raNotes").value})});
  a("raMarks").onclick=e=>{
    const del=e.target.closest("[data-ra-del]");
    if(del){const marks=raGet().marks.filter((_,i)=>i!==Number(del.dataset.raDel));raPut({marks});raFill();return}
    const inkDel=e.target.closest("[data-ra-ink-del]");
    if(inkDel){const ink=raGet().ink.filter((_,i)=>i!==Number(inkDel.dataset.raInkDel));raPut({ink});raFill();return}
    const go=e.target.closest("[data-ra-seek]");
    if(go){try{raPlayer&&raPlayer.seekTo(Number(go.dataset.raSeek),true)}catch{}raSyncTime()}
  };
  a("raRelated").onclick=e=>{const n=e.target.closest("[data-action]");n&&n.dataset.action==="replay"&&raOpen(n.dataset.id)};
  const pad=a("raPad");if(pad)pad.onclick=e=>palClickTok(e,"replay");
  const fold=a("raPadFold");if(fold&&!fold.dataset.bound){fold.dataset.bound="1";fold.addEventListener("toggle",()=>setTimeout(()=>{try{padStatus();padScale()}catch{}},40))}
  const tokAdd=a("raTokAdd");if(tokAdd)tokAdd.onclick=()=>{const v=((a("raTok")||{}).value||"").trim();if(!v)return;raStamp(v);if(a("raTok"))a("raTok").value=""};
  const tokIn=a("raTok");if(tokIn)tokIn.addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();tokAdd&&tokAdd.click()}});
  const tokUndo=a("raTokUndo");if(tokUndo)tokUndo.onclick=()=>{const ins=raInputs();if(!ins.length)return;raSetInputs(ins.slice(0,-1));raFillInputs()};
  const commit=a("raCommit");if(commit)commit.onclick=raCommitCombo;
  const saveEdit=a("raSaveEdit");if(saveEdit)saveEdit.onclick=raCommitCombo;
  const hits=a("raInputList");
  if(hits)hits.onclick=e=>{
    const del=e.target.closest("[data-ra-hit-del]");
    if(del){raSetInputs(raInputs().filter((_,i)=>i!==Number(del.dataset.raHitDel)));raFillInputs();return}
    const go=e.target.closest("[data-ra-hit]");
    if(go){try{raPlayer&&raPlayer.seekTo(Number(go.dataset.raHit),true)}catch{}raSyncTime()}
  };
  const markSide=a("raMarkSide");if(markSide)markSide.onclick=()=>a("raMark")&&a("raMark").click();
  const hud=a("raHud");
  if(hud)hud.addEventListener("click",e=>{
    const tool=e.target.closest("[data-ra-tool]");
    if(tool){
      raTextHide(!1);
      raTool=tool.dataset.raTool===raTool?"play":tool.dataset.raTool;
      raToolSync();
      if(raTool==="play"){raToggle();if(raPlaying()&&!raTick)raLoop()}
      return;
    }
  });
  const col=a("raColor");
  if(col){
    col.value=raColor;
    const paint=()=>{const lab=col.closest(".ra-color");if(lab)lab.style.background=col.value;raColor=col.value};
    col.addEventListener("input",paint);
    paint();
  }
  const undo=a("raUndo");if(undo)undo.onclick=raInkUndo;
  const wipe=a("raInkClear");if(wipe)wipe.onclick=raInkClear;
  const flip=a("raFlip");if(flip)flip.onclick=raInkFlip;
  const hudT=a("raHudToggle");if(hudT)hudT.onchange=()=>{raHudOn=hudT.checked;a("raHud")&&a("raHud").classList.toggle("is-off",!raHudOn)};
  const inkT=a("raInkToggle");if(inkT)inkT.onchange=()=>{raInkOn=inkT.checked;a("raStage")&&a("raStage").classList.toggle("no-ink",!raInkOn);raInkPaint()};
  const ghostT=a("raGhostToggle");if(ghostT)ghostT.onchange=()=>{raGhostOn=ghostT.checked;raGhosts()};
  const dur=a("raInkDur");if(dur)dur.onchange=()=>{raInkDur=Number(dur.value);raInkPaint()};
  const raImp=a("raImport"),raUrlImp=a("raUrlImport");
  if(raImp)raImp.onclick=raImportVideo;
  if(raUrlImp)raUrlImp.onclick=raImportVideo;
  const ink=a("raInk");
  if(ink){
    ink.addEventListener("pointerdown",e=>{
      if(e.button)return;
      if(raTool==="play"){raToggle();return}
      if(raTool==="text"){
        e.preventDefault();
        raTextHide(!0);
        raTextAt=raPt(e);
        const inp=a("raText"),r=ink.getBoundingClientRect();
        if(!inp)return;
        inp.style.left=Math.round(raTextAt[0]*r.width)+"px";
        inp.style.top=Math.round(raTextAt[1]*r.height)+"px";
        inp.classList.remove("hidden");
        setTimeout(()=>{inp.focus();inp.select()},0);
        return;
      }
      if(raTool==="rect"||raTool==="arrow"||raTool==="circle"){
        ink.setPointerCapture(e.pointerId);
        const [x,y]=raPt(e);
        raStroke={k:raTool==="rect"?"r":raTool==="circle"?"o":"a",c:raColor,w:2.6,x,y,x2:x,y2:y};
        raInkPaint();
        return;
      }
      if(raTool!=="pen")return;
      ink.setPointerCapture(e.pointerId);
      raStroke={k:"p",c:raColor,w:2.6,pts:[raPt(e)]};
      raInkPaint();
    });
    ink.addEventListener("pointermove",e=>{
      if(!raStroke)return;
      if(raStroke.k==="p"){
        raStroke.pts.push(raPt(e));
        if(raStroke.pts.length>400)raStroke.pts=raStroke.pts.slice(-400);
      }else{
        const [x,y]=raPt(e);raStroke.x2=x;raStroke.y2=y;
      }
      raInkPaint();
    });
    const up=()=>{
      if(!raStroke)return;
      const s=raStroke;raStroke=null;
      if(s.k==="p"){if(s.pts.length>1)raInkPush(s);else raInkPaint();return}
      if(Math.hypot((s.x2||0)-s.x,(s.y2||0)-s.y)>0.01)raInkPush(s);else raInkPaint();
    };
    ink.addEventListener("pointerup",up);ink.addEventListener("pointercancel",up);
  }
  const txt=a("raText");
  if(txt){txt.addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();raTextHide(!0)}else if(e.key==="Escape"){e.preventDefault();raTextHide(!1)}});txt.addEventListener("blur",()=>{setTimeout(()=>{if(document.activeElement!==txt)raTextHide(!0)},40)})}
  document.addEventListener("keydown",e=>{
    if(o.tab!=="replay")return;
    if(e.target.closest("input,textarea,select,[contenteditable]"))return;
    if(a("modal")&&!a("modal").classList.contains("hidden"))return;
    const k=e.key;
    if(k===" "||k==="Spacebar"){e.preventDefault();raToggle();return}
    if(k==="ArrowLeft"){e.preventDefault();raSeekRel(e.shiftKey?-1:-RA_FRAME);return}
    if(k==="ArrowRight"){e.preventDefault();raSeekRel(e.shiftKey?1:RA_FRAME);return}
    if(k==="r"||k==="R"){e.preventDefault();try{raPlayer&&raPlayer.seekTo(0,true);raPlayer&&raPlayer.playVideo()}catch{}raSyncTime();return}
    if(k==="h"||k==="H"||k==="F1"){e.preventDefault();raHudOn=!raHudOn;if(a("raHudToggle"))a("raHudToggle").checked=raHudOn;a("raHud")&&a("raHud").classList.toggle("is-off",!raHudOn);return}
    if(k==="m"||k==="M"){e.preventDefault();a("raMark")&&a("raMark").click();return}
    if((k==="z"||k==="Z")&&(e.ctrlKey||e.metaKey)){e.preventDefault();raInkUndo();return}
    if(k==="Escape"){raTextHide(!1);raTool="play";raToolSync()}
  });
  if(window.ResizeObserver&&a("raStage"))new ResizeObserver(()=>raInkFit()).observe(a("raStage"));
  raToolSync();
}
function raSeekRel(dt){try{raPlayer&&raPlayer.seekTo(Math.max(0,raCur()+dt),true)}catch{}raSyncTime()}
try{V("replay",raRender);raBind()}catch(err){console.warn("Replay Analyzer",err)}
let homeFontId="stencil";
function applyHomeFont(id){
  const x=HOME_FONTS[id]||HOME_FONTS.stencil;
  homeFontId=HOME_FONTS[id]?id:"stencil";
  const root=document.body.style;
  root.setProperty("--cdx-brand-font",x.f);
  root.setProperty("--cdx-brand-track",x.l);
  root.setProperty("--cdx-brand-weight",x.w);
  root.setProperty("--cdx-brand-size",x.s);
  document.querySelectorAll("[data-home-font]").forEach(b=>b.setAttribute("aria-pressed",b.dataset.homeFont===homeFontId?"true":"false"));
}
try{atelierForget();const hb=a("homeBrand");if(hb){let brandTap={n:0,t:0,timer:0};hb.onclick=()=>{const now=Date.now();if(now-brandTap.t>700)brandTap.n=1;else brandTap.n++;brandTap.t=now;clearTimeout(brandTap.timer);if(brandTap.n>=7){brandTap.n=0;openAtelier();return}brandTap.timer=setTimeout(()=>{if(brandTap.n===1)j("home")},280)}}const hg=a("homeGrid");if(hg)hg.addEventListener("click",e=>{const v=e.target.closest("[data-kc-view]"),t=e.target.closest("[data-tab]");if(t&&t.dataset.tab==="knowledge")o.kcView=v?v.dataset.kcView:"hub";t&&j(t.dataset.tab)});applyHomeFont(d.siteFont||"stencil")}catch{}
function homeFaces(){
  const faces=[["bbcf","Ragna the Bloodedge"],["mvc2","Shuma-Gorath"],["tokon","Captain America"],["sf6","Ryu"],["ggst","Sol"],["2xko","Ahri"],["al","Aang"],["umvc3","Dante"],["dbfz","Krillin"],["gbvsr","Avatar Belial"]];
  const people=a("hvPeople");
  if(people)people.innerHTML=faces.map(([g,c])=>portrait(g,c,"home")).join("");
  const vs=a("hvCompare");
  if(vs)vs.innerHTML=`<span class="hv-cmp-col"><b class="hv-cmp-lab">Combo 1</b><span class="hv-cmp-line"><em class="kL">5L</em><em class="kH">5H</em><em class="kS">236H</em></span><span class="hv-cmp-note">(corner carry)</span></span>
    <span class="hv-vs">VS</span>
    <span class="hv-cmp-col"><b class="hv-cmp-lab">Combo 2</b><span class="hv-cmp-line"><em class="kL">5L</em><em class="kH">2H</em><em class="kS">j.M</em></span><span class="hv-cmp-note">(meterless)</span></span>`;
  try{hydratePortraits()}catch{}
}
try{homeFaces()}catch{}
try{j(o.tab);syncLogos()}catch(err){console.warn("ComboDex boot",err);try{j("home")}catch{}}
window.addEventListener("cdx-lang",()=>{try{Q()}catch{}try{if(o.draft)st()}catch{}try{if(o.tab==="compare")Y()}catch{}try{if(o.tab==="frames")renderFrames()}catch{}try{if(o.tab==="replay")raRender()}catch{}try{if(o.tab==="knowledge"&&window.CDX_KC)CDX_KC.render()}catch{}try{padStatus()}catch{}});window.addEventListener("hashchange",()=>{const key=()=>o.tab+"|"+o.kcView+"|"+o.game+"|"+o.char+"|"+(o.watchId||"")+"|"+(o.guestVideo||"");const prev=key();cdxApplyHash();if(prev===key())return;j(o.tab)});
V("knowledge",()=>{try{window.CDX_KC&&CDX_KC.render()}catch(err){console.warn("Knowledge Center",err)}});
try{if(o.tab==="knowledge")j("knowledge")}catch{}
function cdxCookiePath(){const p=location.pathname.replace(/[^/]+$/,"")||"/";return p.endsWith("/")?p:p+"/"}
function cdxGetCookie(n){const m=document.cookie.match(new RegExp("(?:^|; )"+n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"=([^;]*)"));return m?decodeURIComponent(m[1]):""}
function cdxSetCookie(n,v,days){const d=new Date();d.setDate(d.getDate()+(days||365));document.cookie=n+"="+encodeURIComponent(v)+"; expires="+d.toUTCString()+"; path="+cdxCookiePath()+"; SameSite=Lax"+(location.protocol==="https:"?"; Secure":"")}
(function(){const bar=a("cookieBar"),ok=a("cookieOk");if(!bar||!ok)return;if(cdxGetCookie("cdx_ok"))return;bar.classList.remove("hidden");ok.onclick=()=>{cdxSetCookie("cdx_ok","1",365);bar.classList.add("hidden")}})();
