/* ComboDex — Knowledge Center : données documentées (encyclopédie, règles d'équipe, notes de patch).
   Chaque fiche cite ses sources. Rien n'est extrapolé : un jeu absent d'une fiche est « non documenté ». */
(function(){
"use strict";
var X=function(fr,en,es){return{fr:fr,en:en,es:es}};
var ALL=["mvc2","umvc3","tokon","2xko","dbfz"];

var SRC={
  dlNot:{t:"Dustloop — Notation",u:"https://www.dustloop.com/w/Notation"},
  scMvc2:{t:"SuperCombo — Marvel vs Capcom 2 / System",u:"https://wiki.supercombo.gg/w/Marvel_vs_Capcom_2/System"},
  scUmvc3:{t:"SuperCombo — UMVC3 / System",u:"https://wiki.supercombo.gg/w/UMVC3/System"},
  scUmvc3c:{t:"SuperCombo — UMVC3 / Controls",u:"https://wiki.supercombo.gg/w/UMVC3/Controls"},
  dlMtfs:{t:"Dustloop — MTFS / Mechanics",u:"https://www.dustloop.com/w/MTFS/Mechanics"},
  dlDbfz:{t:"Dustloop — DBFZ / Mechanics",u:"https://www.dustloop.com/w/DBFZ/Mechanics"},
  dlDbfzHome:{t:"Dustloop — DBFZ (historique des versions)",u:"https://www.dustloop.com/w/DBFZ"},
  xkoMech:{t:"2XKO Wiki — Mechanics",u:"https://wiki.play2xko.com/en-us/Mechanics"},
  xkoFuse:{t:"2XKO Wiki — Fuses",u:"https://wiki.play2xko.com/en-us/Fuses"},
  xkoAkali:{t:"2XKO Wiki — Akali (frame data)",u:"https://wiki.play2xko.com/en-us/Akali"},
  psFaq:{t:"PlayStation — MARVEL Tōkon FAQ",u:"https://www.playstation.com/en-us/games/marvel-tokon-fighting-souls/"},
  steamTokon:{t:"Steam — MARVEL Tōkon : Patch Update (2 novembre 2026)",u:"https://steamcommunity.com/app/3787240"},
  wikiUmvc3:{t:"Wikipedia — Ultimate Marvel vs. Capcom 3",u:"https://en.wikipedia.org/wiki/Ultimate_Marvel_vs._Capcom_3"},
  scwUmvc3:{t:"SuperCombo Wiki — UMVC3/Patch Notes",u:"https://srk.shib.live/w/UMVC3/Patch_Notes"},
  nlMvc104:{t:"Nintendo Life — MvC Fighting Collection 1.0.4",u:"https://www.nintendolife.com/news/2025/06/marvel-vs-capcom-fighting-collection-receives-an-update-version-1-0-4-here-are-the-full-patch-notes"},
  nlMvc102:{t:"Nintendo Life — MvC Fighting Collection 1.0.2",u:"https://www.nintendolife.com/news/2024/10/marvel-vs-capcom-fighting-collection-updated-for-switch-version-1-0-2-here-are-the-full-patch-notes"},
  pnMvc:{t:"Perfectly Nintendo — MvC Fighting Collection : toutes les mises à jour",u:"https://www.perfectly-nintendo.com/marvel-vs-capcom-fighting-collection-arcade-classics-switch-all-the-updates/"},
  pgAl45:{t:"Paramount Games — Avatar Legends Patch 4.5",u:"https://www.paramountgames.com/editorial/avatar-legends-the-fighting-game-patch-4-5"},
  pgAl40:{t:"Paramount Games — Avatar Legends Patch 4.0",u:"https://www.paramountgames.com/editorial/avatar-legends-the-fighting-game-patch-4-0-overall-patch-notes"},
  tgTokon:{t:"Tokon Guide — archive des mises à jour",u:"https://tokonguide.com/patch-notes/"},
  grTokon:{t:"Game Rant — Day 1 Update Patch Notes",u:"https://gamerant.com/marvel-tokon-fighting-souls-launch-update-patch-notes/"},
  dlTokon:{t:"Dustloop — MTFS/Patch Notes",u:"https://dustloop.com/w/MTFS/Patch_Notes"},
  psuTokon:{t:"PlayStation Universe — Update 1.004.002",u:"https://www.psu.com/news/marvel-tokon-fighting-souls-update-1-004-002-out-now-adds-phoenix-cyclops-combat-balance-changes-more-full-patch-notes-listed/"},
  bnDbfz150:{t:"Bandai Namco — DBFZ Patch Notes 1.50",u:"https://www.bandainamcoent.com/news/dragon-ball-fighterz-patch-notes-1-50"},
  riotTag:{t:"Riot Games — 2XKO Patch Notes",u:"https://2xko.riotgames.com/en-us/news/tags/patchnotes2xko/"},
  riot131:{t:"Riot Games — 2XKO Patch Notes 1.3.1",u:"https://2xko.riotgames.com/en-us/news/game-updates/2xko-patch-notes-1-3-1-september-8-2026/"},
  riot125:{t:"Riot Games — 2XKO Patch Notes 1.2.5",u:"https://2xko.riotgames.com/en-us/news/game-updates/2xko-patch-notes-12-5-july-23-2026/"},
  riot133:{t:"Riot Games — 2XKO Patch Notes 1.3.3",u:"https://2xko.riotgames.com/en-us/news/game-updates/2xko-patch-notes-133-october-27-2026"}
};

var CATS=["notation","movement","combo","team","defense","resources","system","frames"];

/* e(id, catégorie, jeux, terme, alias, {fr:[définition, explication, conditions], en:[…], es:[…]}, options)
   options : per (différences par jeu), ex (exemple de notation), rel (notions liées), src, st ("ok" | "partial"),
   rx (motif de notation pour retrouver des combos ComboDex), ft (notion liée aux frames → Frame Theater) */
var E=[];
function e(id,cat,games,term,alias,txt,opt){opt=opt||{};E.push({id:id,cat:cat,games:games,term:term,alias:alias||[],txt:txt,per:opt.per||{},ex:opt.ex||"",rel:opt.rel||[],src:opt.src||[],st:opt.st||"ok",rx:opt.rx||null,ft:!!opt.ft,updated:"2026-11-10"})}

/* ——— Index de notation ——— */
e("numpad","notation",ALL,"Notation numérique (numpad)",["numpad","1 2 3 4 5 6 7 8 9","neutral","neutre"],{
  fr:["Les directions sont écrites comme les chiffres d’un pavé numérique, personnage tourné vers la droite : 1 bas-arrière, 2 bas, 3 bas-avant, 4 arrière, 5 neutre, 6 avant, 7 haut-arrière, 8 haut, 9 haut-avant.","Un chiffre suivi d’un bouton décrit le coup : 5M = M sans direction, 2L = L accroupi, 6H = avant + H. Le 5 suffit à dire « neutre » : ComboDex n’écrit jamais « 5 Neutral M », seulement 5M.","Toujours lu du point de vue du joueur tourné vers la droite."],
  en:["Directions are written like a numeric keypad, character facing right: 1 down-back, 2 down, 3 down-forward, 4 back, 5 neutral, 6 forward, 7 up-back, 8 up, 9 up-forward.","A digit followed by a button describes the move: 5M = M with no direction, 2L = crouching L, 6H = forward + H. The 5 already means neutral: ComboDex never writes “5 Neutral M”, only 5M.","Always read as if the character faces right."],
  es:["Las direcciones se escriben como un teclado numérico, personaje mirando a la derecha: 1 abajo-atrás, 2 abajo, 3 abajo-adelante, 4 atrás, 5 neutral, 6 adelante, 7 arriba-atrás, 8 arriba, 9 arriba-adelante.","Un número seguido de un botón describe el golpe: 5M = M sin dirección, 2L = L agachado, 6H = adelante + H. El 5 ya significa neutral: ComboDex nunca escribe «5 Neutral M», solo 5M.","Siempre se lee como si el personaje mirara a la derecha."]
},{ex:"5M 2L 6H 9",rel:["motions","jump-attack","buttons"],src:["dlNot"],rx:"\\b[1-9][LMHS]"});
e("jump-attack","notation",ALL,"j. — attaque en saut",["j.","jump","jumping","saut","j.M"],{
  fr:["« j. » signifie que le coup est fait en l’air. j.M = saut + M, j.2H = saut + bas + H.","Le saut est déjà dit par « j. » : on n’écrit pas « j.Jumping » ni « j.5M ». Une direction de saut avant le coup (9 j.M) précise seulement de quel côté on saute.","Le coup doit être disponible en l’air pour ce personnage."],
  en:["“j.” means the move is done in the air. j.M = jump + M, j.2H = jump + down + H.","“j.” already says jumping: never write “j.Jumping” or “j.5M”. A jump direction before the move (9 j.M) only says which way you jump.","The move must exist in the air for that character."],
  es:["«j.» significa que el golpe se hace en el aire. j.M = salto + M, j.2H = salto + abajo + H.","«j.» ya indica el salto: no se escribe «j.Jumping» ni «j.5M». Una dirección de salto antes del golpe (9 j.M) solo indica hacia dónde se salta.","El golpe debe existir en el aire para ese personaje."]
},{ex:"9 j.M j.H",rel:["numpad","superjump-attack","superjump"],src:["dlNot"],rx:"\\bj\\."});
e("superjump-attack","notation",ALL,"sj. / hj. — attaque en super saut",["sj.","hj.","super jump attack","high jump"],{
  fr:["sj. (ou hj.) indique un coup fait pendant un super saut (high jump).","Utile quand le coup se comporte différemment en super saut, par exemple en UMVC3 où les coups en super saut infligent 5 frames de hitstun supplémentaires.",""],
  en:["sj. (or hj.) marks a move done during a super jump (high jump).","Useful when the move behaves differently in a super jump, e.g. in UMVC3 superjump attacks cause 5 extra frames of hitstun.",""],
  es:["sj. (o hj.) indica un golpe hecho durante un súper salto (high jump).","Útil cuando el golpe cambia en súper salto, por ejemplo en UMVC3 los golpes en súper salto causan 5 frames extra de hitstun.",""]
},{ex:"sj.H",rel:["superjump","jump-attack"],src:["dlNot","scUmvc3c"],rx:"\\b(sj|hj)\\."});
e("hold","notation",ALL,"[X] — bouton maintenu (chargé)",["[ ]","crochets","brackets","charge","chargé","hold","[H]"],{
  fr:["Un bouton entre crochets est maintenu : 5[H] = H maintenu, donc la version chargée.","« ]X[ » (crochets inversés) indique le relâchement du bouton. En 2XKO, maintenir un bouton lourd déclenche la version chargée (Critical Strike) : 5[H], j.[H].","Le personnage doit avoir une version maintenue de ce coup."],
  en:["A button in brackets is held: 5[H] = held H, i.e. the charged version.","“]X[” (reversed brackets) means releasing the button. In 2XKO, holding a heavy button gives the charged version (Critical Strike): 5[H], j.[H].","The character must have a held version of that move."],
  es:["Un botón entre corchetes se mantiene: 5[H] = H mantenido, es decir, la versión cargada.","«]X[» (corchetes invertidos) indica soltar el botón. En 2XKO, mantener un botón pesado da la versión cargada (Critical Strike): 5[H], j.[H].","El personaje debe tener una versión mantenida de ese golpe."]
},{ex:"5[H] j.[H] ]H[",rel:["release","critical-strike"],src:["dlNot","xkoMech"],rx:"\\[[A-Z0-9]{1,3}\\]"});
e("release","notation",ALL,"]X[ — relâcher",["]X[","release"],{
  fr:["« ]X[ » : relâcher le bouton X qui était maintenu.","S’emploie avec [X] pour noter précisément quand le bouton est lâché.",""],
  en:["“]X[”: release button X that was being held.","Used with [X] to note exactly when the button is let go.",""],
  es:["«]X[»: soltar el botón X que estaba mantenido.","Se usa con [X] para indicar cuándo se suelta el botón.",""]
},{ex:"[H] … ]H[",rel:["hold"],src:["dlNot"]});
e("chain-symbols","notation",ALL,"> et , — cancel ou link",[">",",","cancel","link","enchaînement"],{
  fr:["« > » : le coup suivant annule (cancel) le précédent. « , » : link, le coup précédent se termine avant de faire le suivant.","Un link demande un timing précis après la récupération du coup ; un cancel se fait pendant le coup.",""],
  en:["“>”: the next move cancels the previous one. “,”: link, the previous move finishes before the next one.","A link needs precise timing after recovery; a cancel happens during the move.",""],
  es:["«>»: el siguiente golpe cancela el anterior. «,»: link, el golpe anterior termina antes del siguiente.","Un link requiere un timing preciso tras la recuperación; un cancel ocurre durante el golpe.",""]
},{ex:"5L > 5M , 2H",rel:["delay","special-cancel"],src:["dlNot"]});
e("delay","notation",ALL,"dl. — retarder",["dl.","delay","delayed"],{
  fr:["« dl. » : retarder volontairement le coup suivant.","On écrit dl.2H, jamais « dl.Delay2H » : le dl. dit déjà « delay ». Combiné au saut : dl.j.H.",""],
  en:["“dl.”: deliberately delay the next move.","Write dl.2H, never “dl.Delay2H”: dl. already means delay. With a jump: dl.j.H.",""],
  es:["«dl.»: retrasar a propósito el siguiente golpe.","Se escribe dl.2H, nunca «dl.Delay2H»: dl. ya significa retraso. Con salto: dl.j.H.",""]
},{ex:"5M dl.2H",rel:["chain-symbols"],src:["dlNot"],rx:"\\bdl\\."});
e("jc","notation",ALL,"jc / sjc — jump cancel, super jump cancel",["jc","sjc","hjc","jump cancel"],{
  fr:["jc : annuler un coup par un saut. sjc (ou hjc) : par un super saut.","En UMVC3, certains normaux ont la propriété Jump Cancel ; les launchers 5S sautent toujours en super saut quand on les annule par un saut.",""],
  en:["jc: cancel a move into a jump. sjc (or hjc): into a super jump.","In UMVC3 some normals have the Jump Cancel property; 5S launchers always go into a super jump when jump-cancelled.",""],
  es:["jc: cancelar un golpe con un salto. sjc (o hjc): con un súper salto.","En UMVC3 algunos normales tienen la propiedad Jump Cancel; los launchers 5S siempre pasan a súper salto al cancelarlos.",""]
},{ex:"2H jc j.M",rel:["launcher","superjump"],src:["dlNot","scUmvc3"],rx:"\\b(s|h)?jc\\b"});
e("dc","notation",ALL,"dc / adc — dash cancel",["dc","adc","dash cancel"],{
  fr:["dc : annuler un coup par un dash. adc : par un air dash.","En UMVC3, Dash Cancel est une propriété de certains coups, sur hit ou en garde.",""],
  en:["dc: cancel a move into a dash. adc: into an air dash.","In UMVC3, Dash Cancel is a property of some moves, on hit or block.",""],
  es:["dc: cancelar un golpe con un dash. adc: con un air dash.","En UMVC3, Dash Cancel es una propiedad de ciertos golpes, al golpear o en guardia.",""]
},{ex:"5H adc j.M",rel:["airdash","jc"],src:["dlNot","scUmvc3"],rx:"\\ba?dc\\b"});
e("iad","notation",ALL,"IAD — Instant Air Dash",["IAD","instant air dash"],{
  fr:["Air dash fait le plus tôt possible après avoir quitté le sol.","Dustloop (DBFZ, Tōkon) le décrit comme la façon la plus rapide d’air dasher depuis le sol.",""],
  en:["Air dash done as early as possible after leaving the ground.","Dustloop (DBFZ, Tōkon) describes it as the fastest way to air dash from the ground.",""],
  es:["Air dash hecho lo antes posible tras dejar el suelo.","Dustloop (DBFZ, Tōkon) lo describe como la forma más rápida de hacer air dash desde el suelo.",""]
},{ex:"IAD j.H",rel:["airdash"],src:["dlNot","dlDbfz","dlMtfs"],rx:"\\bIAD\\b"});
e("tk","notation",ALL,"tk. — Tiger Knee",["tk.","tiger knee"],{
  fr:["Faire un spécial aérien juste après avoir quitté le sol, en terminant le mouvement vers le haut.","Le chiffre de saut fait partie du mouvement : tk.236S se fait en 2369 + S.",""],
  en:["Do an air special right after leaving the ground, ending the motion upward.","The jump direction is part of the motion: tk.236S is done as 2369 + S.",""],
  es:["Hacer un especial aéreo justo después de dejar el suelo, terminando el movimiento hacia arriba.","La dirección de salto forma parte del movimiento: tk.236S se hace con 2369 + S.",""]
},{ex:"tk.236S",rel:["motions","jump-attack"],src:["dlNot"],rx:"\\btk\\."});
e("repeat-hits","notation",ALL,"xN et (N) — répétitions et nombre de coups",["x2","x3","(1)","(2)","hits"],{
  fr:["« xN » : répéter la séquence N fois. « (N) » après un coup : ne faire que N touches de ce coup (5H(2) = 2 touches).","Sert à préciser quand un coup multi-touches est annulé avant la fin.",""],
  en:["“xN”: repeat the sequence N times. “(N)” after a move: only N hits of it (5H(2) = 2 hits).","Tells when a multi-hit move is cancelled early.",""],
  es:["«xN»: repetir la secuencia N veces. «(N)» tras un golpe: solo N impactos (5H(2) = 2 impactos).","Indica cuándo un golpe de varios impactos se cancela antes.",""]
},{ex:"5H(2) > S x2",rel:["chain-symbols"],src:["dlNot"],rx:"\\(\\d\\)|\\bx\\d\\b"});
e("whiff-land","notation",ALL,"whiff / land",["whiff","land","atterrir"],{
  fr:["« whiff » : le coup est fait volontairement dans le vide. « land » : atterrir avant de continuer.","Indique une action de timing, pas un coup qui touche.",""],
  en:["“whiff”: the move is done on purpose without hitting. “land”: land before continuing.","Marks a timing action, not a hit.",""],
  es:["«whiff»: el golpe se hace a propósito sin impactar. «land»: aterrizar antes de seguir.","Indica una acción de timing, no un impacto.",""]
},{ex:"j.H, land, 5L",rel:["chain-symbols"],src:["dlNot"],rx:"\\b(whiff|land)\\b"});
e("counter-hit","notation",ALL,"CH — Counter Hit",["CH","counter hit","counterhit"],{
  fr:["Coup qui touche l’adversaire pendant qu’il attaque.","Les effets dépendent du jeu (hitstun ou propriétés supplémentaires). UMVC3 et 2XKO ont chacun une section Counter Hit dans leurs sources.",""],
  en:["A hit that lands while the opponent is attacking.","Effects depend on the game (more hitstun or extra properties). UMVC3 and 2XKO each document Counter Hits.",""],
  es:["Golpe que impacta mientras el rival ataca.","Los efectos dependen del juego (más hitstun o propiedades extra). UMVC3 y 2XKO documentan el Counter Hit.",""]
},{ex:"CH 5H",rel:["hitstun"],src:["dlNot","scUmvc3","xkoMech"],rx:"\\bCH\\b",ft:true});
e("motions","notation",ALL,"Mouvements : 236, 214, 623, 41236, 63214, 22, 66, 44",["236","214","623","41236","63214","22","66","44","qcf","qcb","dp","dash","backdash"],{
  fr:["236 quart de cercle avant, 214 quart de cercle arrière, 623 « dragon punch », 41236 demi-cercle avant, 63214 demi-cercle arrière, 22 bas-bas, 66 dash, 44 backdash.","Le mouvement précède le bouton : 236H, 214S. Il se lit avec la notation numérique.",""],
  en:["236 quarter circle forward, 214 quarter circle back, 623 “dragon punch”, 41236 half circle forward, 63214 half circle back, 22 down-down, 66 dash, 44 backdash.","The motion comes before the button: 236H, 214S. Read with numpad notation.",""],
  es:["236 cuarto de círculo adelante, 214 cuarto de círculo atrás, 623 «dragon punch», 41236 medio círculo adelante, 63214 medio círculo atrás, 22 abajo-abajo, 66 dash, 44 backdash.","El movimiento va antes del botón: 236H, 214S. Se lee con la notación numérica.",""]
},{ex:"236H 214S 66",rel:["numpad"],src:["dlNot"],rx:"\\b(236|214|623|41236|63214|22|66|44)"});
e("buttons","notation",ALL,"Boutons par jeu",["L M H S","LP","A1","A2","S1","S2","T"],{
  fr:["Chaque jeu nomme ses boutons différemment ; la notation ComboDex reprend les noms des wikis.","Voir les différences par jeu ci-dessous.",""],
  en:["Each game names its buttons differently; ComboDex notation follows the wikis.","See per-game differences below.",""],
  es:["Cada juego nombra sus botones de forma distinta; la notación de ComboDex sigue los wikis.","Ver las diferencias por juego abajo.",""]
},{per:{
  mvc2:X("Quatre boutons d’attaque LP, LK, HP, HK et deux boutons d’assist A1, A2. Les coups moyens (MP, MK) sortent en appuyant deux fois sur le bouton léger pendant une chaîne.","Four attack buttons LP, LK, HP, HK and two assist buttons A1, A2. Medium attacks (MP, MK) come out by pressing the light button again during a chain.","Cuatro botones de ataque LP, LK, HP, HK y dos de assist A1, A2. Los golpes medios (MP, MK) salen pulsando otra vez el botón ligero durante una cadena."),
  umvc3:X("Quatre boutons d’attaque L, M, H, S et deux boutons d’assist A1, A2. L+M+H+S active le X-Factor.","Four attack buttons L, M, H, S and two assist buttons A1, A2. L+M+H+S activates X-Factor.","Cuatro botones de ataque L, M, H, S y dos de assist A1, A2. L+M+H+S activa el X-Factor."),
  dbfz:X("L, M, H, S et A1, A2. Exemples : Super Dash H+S, Vanish M+H, Dragon Rush L+M, Sparking Blast L+M+H+S.","L, M, H, S and A1, A2. Examples: Super Dash H+S, Vanish M+H, Dragon Rush L+M, Sparking Blast L+M+H+S.","L, M, H, S y A1, A2. Ejemplos: Super Dash H+S, Vanish M+H, Dragon Rush L+M, Sparking Blast L+M+H+S."),
  tokon:X("Six boutons : L, M, H, U (coups uniques), A (Assemble) et T (Tag, ajouté par le patch de novembre 2026). S’y ajoutent les raccourcis QS (Quick Skill = direction + QS) et QD (Quick Dash). A + direction appelle un Assemble Assist (6A Shooter, 2A Vertical, 4A Assault, j.A aérien, 5A Assemble Rush en combo).","Six buttons: L, M, H, U (unique attacks), A (Assemble) and T (Tag, added by the November 2026 patch). Plus the QS (Quick Skill = direction + QS) and QD (Quick Dash) shortcuts. A + direction calls an Assemble Assist (6A Shooter, 2A Vertical, 4A Assault, j.A aerial, 5A Assemble Rush in combos).","Seis botones: L, M, H, U (ataques únicos), A (Assemble) y T (Tag, añadido por el parche de noviembre de 2026). Además, los atajos QS (Quick Skill = dirección + QS) y QD (Quick Dash). A + dirección llama un Assemble Assist (6A Shooter, 2A Vertical, 4A Assault, j.A aéreo, 5A Assemble Rush en combo)."),
  "2xko":X("L, M, H, S1, S2 et T (tag). Maintenir un bouton lourd donne la version chargée : 5[H].","L, M, H, S1, S2 and T (tag). Holding a heavy button gives the charged version: 5[H].","L, M, H, S1, S2 y T (tag). Mantener un botón pesado da la versión cargada: 5[H].")
},rel:["numpad","hold"],src:["scMvc2","scUmvc3c","dlDbfz","dlMtfs","xkoMech"],st:"partial"});

/* ——— Déplacements ——— */
e("superjump","movement",ALL,"Super Jump (High Jump)",["super saut","superjump","high jump","sj","hj"],{
  fr:["Saut plus haut que le saut normal, en général fait avec bas puis haut.","Le super saut sert à suivre un adversaire envoyé en l’air (après un launcher) et change parfois les propriétés des coups aériens.","La fenêtre d’entrée et les effets diffèrent selon le jeu."],
  en:["A jump higher than a normal jump, usually done with down then up.","Super jumps follow a launched opponent and sometimes change air move properties.","Input window and effects differ per game."],
  es:["Salto más alto que el normal, por lo general abajo y luego arriba.","Sirve para seguir a un rival lanzado al aire y a veces cambia las propiedades de los golpes aéreos.","La ventana de entrada y los efectos varían según el juego."]
},{per:{
  mvc2:X("Les super sauts permettent des chaînes et des cancels impossibles en saut normal ; après un launcher, maintenir haut annule en super saut pour l’air combo.","Super jumps allow chains and cancels impossible in a normal jump; after a launcher, holding up cancels into a super jump for the air combo.","Los súper saltos permiten cadenas y cancels imposibles en salto normal; tras un launcher, mantener arriba cancela en súper salto."),
  umvc3:X("Bas puis haut avec 9 frames de fenêtre. Plus haut et plus rapide qu’un saut ; chaque coup en super saut ajoute 5 frames de hitstun. Les launchers jump-cancel toujours en super saut.","Down then up within 9 frames. Higher and faster than a jump; every superjump attack adds 5 frames of hitstun. Launchers always jump-cancel into a super jump.","Abajo y arriba en 9 frames. Más alto y rápido que un salto; cada golpe en súper salto añade 5 frames de hitstun. Los launchers siempre cancelan en súper salto."),
  tokon:X("High Jump : bas puis haut. Monte plus haut mais interdit le saut supplémentaire en l’air ; le personnage se retourne automatiquement s’il passe au-dessus de l’adversaire.","High Jump: down then up. Goes higher but prevents the extra air jump; the character turns around automatically when crossing over.","High Jump: abajo y arriba. Sube más pero impide el salto extra en el aire; el personaje se gira solo al cruzar."),
  dbfz:X("High Jump : bas puis haut, ou S maintenu + haut. Contrôle partiel de la trajectoire en descente. Variante Short High Jump (super hop) en maintenant bas.","High Jump: down then up, or hold S + up. Partial drift control while falling. Short High Jump (super hop) by holding down.","High Jump: abajo y arriba, o S mantenido + arriba. Control parcial al caer. Short High Jump (super hop) manteniendo abajo."),
  "2xko":X("Super jump : bas puis haut en moins de 13 frames.","Super jump: down then up within 13 frames.","Super jump: abajo y arriba en menos de 13 frames.")
},ex:"2 8 · 5S sjc",rel:["superjump-attack","launcher","prejump","jc"],src:["scMvc2","scUmvc3c","dlMtfs","dlDbfz","xkoMech"]});
e("prejump","movement",["tokon","2xko","dbfz"],"Prejump",["pre-jump","prejump","pré-saut"],{
  fr:["Courtes frames au sol avant de décoller.","Pendant le prejump, on ne peut pas bloquer mais on est invincible aux projections (Tōkon, DBFZ).",""],
  en:["Short grounded frames before leaving the ground.","During prejump you cannot block but are throw-invincible (Tōkon, DBFZ).",""],
  es:["Breves frames en el suelo antes de despegar.","Durante el prejump no se puede bloquear pero se es invencible a agarres (Tōkon, DBFZ).",""]
},{per:{
  dbfz:X("4F, invincible aux projections, ne peut pas garder.","4F, throw-invincible, cannot guard.","4F, invencible a agarres, no puede guardar."),
  tokon:X("Ne peut pas bloquer, invincible aux projections ; touché pendant le prejump = hitstun debout.","Cannot block, throw-invincible; hit during prejump = standing hitstun.","No puede bloquear, invencible a agarres; golpeado = hitstun de pie."),
  "2xko":X("Pre-jump de 4 frames.","4-frame pre-jump.","Pre-jump de 4 frames.")
},rel:["superjump"],src:["dlDbfz","dlMtfs","xkoMech"],ft:true});
e("airdash","movement",["tokon","2xko","dbfz","umvc3"],"Air Dash",["air dash","dash aérien","airdash"],{
  fr:["Accélération dans les airs.","Disponibilité et propriétés dépendent du personnage.",""],
  en:["A burst of movement in the air.","Availability and properties depend on the character.",""],
  es:["Impulso en el aire.","Disponibilidad y propiedades dependen del personaje.",""]
},{per:{
  dbfz:X("j.44, j.66 ou j.6H+S. Non actionnable pendant les 6 premières frames ; l’air backdash est invincible aux projections de 1 à 15F.","j.44, j.66 or j.6H+S. Not actionable for the first 6F; air backdash is throw-invincible 1~15F.","j.44, j.66 o j.6H+S. No accionable las primeras 6F; el air backdash es invencible a agarres 1~15F."),
  tokon:X("Propre à chaque personnage. Iron Man et Magneto ont des air dashes 8 directions ; Ms. Marvel, Hulk et Champion n’en ont pas.","Unique per character. Iron Man and Magneto have 8-way air dashes; Ms. Marvel, Hulk and Champion have none.","Propio de cada personaje. Iron Man y Magneto tienen air dash en 8 direcciones; Ms. Marvel, Hulk y Champion no tienen."),
  "2xko":X("Seuls certains champions ont un mouvement aérien (ex. air dash d’Ahri, double saut d’Akali).","Only some champions have air movement (e.g. Ahri air dash, Akali double jump).","Solo algunos campeones tienen movimiento aéreo (ej. air dash de Ahri, doble salto de Akali)."),
  umvc3:X("Section « Airdashing » présente sur SuperCombo ; détails non importés dans ComboDex.","“Airdashing” section exists on SuperCombo; details not imported in ComboDex.","Sección «Airdashing» en SuperCombo; detalles no importados en ComboDex.")
},ex:"j.66 j.H",rel:["iad","dc"],src:["dlDbfz","dlMtfs","xkoMech","scUmvc3c"],st:"partial"});
e("super-dash","movement",["dbfz"],"Super Dash",["SD","super dash"],{
  fr:["H+S (aussi en l’air) : ruée qui poursuit l’adversaire et dévie les Ki Blasts.","Ne peut pas K.O. Annulable depuis les normaux en garde ou sur hit ; sur hit, annulable en attaques et air dashes. Pendant Sparking!, poussée réduite et annulable en garde.","Master Roshi n’a pas de Super Dash."],
  en:["H+S (air OK): homing rush that deflects Ki Blasts.","Cannot K.O. Cancelable from normals on block or hit; on hit, cancelable into attacks and air dashes. During Sparking!, less pushback and attack-cancelable on block.","Master Roshi has no Super Dash."],
  es:["H+S (también en el aire): embestida que persigue y desvía Ki Blasts.","No puede K.O. Cancelable desde normales en guardia o al golpear; al golpear, cancelable en ataques y air dash. En Sparking!, menos retroceso y cancelable en guardia.","Master Roshi no tiene Super Dash."]
},{ex:"5H > SD",rel:["sparking","vanish"],src:["dlDbfz"],rx:"\\bSD\\b|Super Dash"});

/* ——— Combos ——— */
e("launcher","combo",["mvc2","umvc3","tokon"],"Launcher",["lanceur","launch","5S","slam launcher"],{
  fr:["Coup qui envoie l’adversaire en l’air pour commencer un air combo.","Chaque jeu a sa règle de suivi (super saut, poursuite automatique…).",""],
  en:["A move that sends the opponent into the air to start an air combo.","Each game has its own follow-up rule (super jump, automatic chase…).",""],
  es:["Golpe que lanza al rival al aire para empezar un air combo.","Cada juego tiene su propia regla de seguimiento.",""]
},{per:{
  mvc2:X("Presque tout le cast a un launcher ; sur hit, maintenir haut annule en super saut.","Almost every character has a launcher; on hit, holding up cancels into a super jump.","Casi todos tienen launcher; al golpear, mantener arriba cancela en súper salto."),
  umvc3:X("Le 5S de chaque personnage est un launcher : jump-cancel sur hit, toujours en super saut. Le 5S compte comme un spécial et ne peut pas être annulé en spécial ni en hyper.","Every character’s 5S is a launcher: jump-cancel on hit, always into a super jump. 5S counts as a special and cannot be special- or hyper-cancelled.","El 5S de cada personaje es un launcher: jump-cancel al golpear, siempre en súper salto. Cuenta como especial y no se puede cancelar en especial ni hyper."),
  tokon:X("Slam Launcher universel (anti-air). En ouverture de combo, les deux personnages montent pour un air combo ; deux suites uniques : Knockdown (rebond au sol, augmente fortement le Combo Limit) et Blowback (provoque un Break).","Universal Slam Launcher (anti-air). As a combo opener both players fly up for an air combo; two unique follow-ups: Knockdown (ground bounce, greatly increases Combo Limit) and Blowback (causes a Break).","Slam Launcher universal (antiaéreo). Al abrir un combo ambos suben para un air combo; dos seguimientos: Knockdown (rebote, aumenta mucho el Combo Limit) y Blowback (provoca un Break).")
},ex:"5S sjc j.M",rel:["air-combo","superjump","jc","tokon-break"],src:["scMvc2","scUmvc3","dlMtfs"]});
e("air-combo","combo",["mvc2","umvc3"],"Air Combo (Aerial Rave)",["air combo","aerial rave","combo aérien"],{
  fr:["Suite d’attaques aériennes après un launcher.","En MvC2, c’est la structure de combo la plus courante avec le Magic Series. En UMVC3, l’air combo se termine par une hard knockdown et peut contenir un TAC.",""],
  en:["A string of air attacks after a launcher.","In MvC2 it is the most common combo structure with the Magic Series. In UMVC3 air combos end in a hard knockdown and can include a TAC.",""],
  es:["Serie de ataques aéreos tras un launcher.","En MvC2 es la estructura más común junto al Magic Series. En UMVC3 terminan en hard knockdown y pueden incluir un TAC.",""]
},{ex:"5S sj.M sj.M sj.H sj.S",rel:["launcher","tac","flying-screen","magic-series"],src:["scMvc2","scUmvc3"]});
e("magic-series","combo",["mvc2","umvc3"],"Magic Series",["chain","chaîne","gatling","L > M > H"],{
  fr:["Règle d’enchaînement des normaux du plus faible au plus fort.","UMVC3 : L > M > H, et n’importe quel normal > S ; pas de retour en arrière. MvC2 : LP > LK > MP > MK > HP > HK, avec trois types de chaînes selon le personnage (dont la Hunter Chain complète).",""],
  en:["Rule for chaining normals from weakest to strongest.","UMVC3: L > M > H, and any normal > S; no going backwards. MvC2: LP > LK > MP > MK > HP > HK, with three chain types depending on the character (including the full Hunter Chain).",""],
  es:["Regla para encadenar normales del más débil al más fuerte.","UMVC3: L > M > H, y cualquier normal > S; sin volver atrás. MvC2: LP > LK > MP > MK > HP > HK, con tres tipos de cadena según el personaje (incluida la Hunter Chain).",""]
},{ex:"5L > 5M > 5H > 5S",rel:["gatling","chain-symbols"],src:["scMvc2","scUmvc3"]});
e("gatling","combo",["tokon"],"Gatlings et Link Attacks",["gatling","link attack","autocombo","auto combo"],{
  fr:["Tōkon : les « Link Attacks » sont un autocombo (appuyer plusieurs fois sur le même bouton) ; Dustloop appelle « Gatlings » les enchaînements libres de normaux.","Chaque bouton a son autocombo et sa fin : la route L mène à l’Assemble Finisher puis au Tōkon Assemble, M et H mènent à une Skill puis à une Super Skill ou une Ultimate Skill.",""],
  en:["Tōkon: “Link Attacks” are an autocombo (press the same button repeatedly); Dustloop calls free normal chains “Gatlings”.","Each button has its autocombo and ender: the L route leads to the Assemble Finisher then Tōkon Assemble, M and H lead to a Skill then a Super Skill or Ultimate Skill.",""],
  es:["Tōkon: los «Link Attacks» son un autocombo (pulsar el mismo botón); Dustloop llama «Gatlings» a las cadenas libres de normales.","Cada botón tiene su autocombo: la ruta L lleva al Assemble Finisher y al Tōkon Assemble, M y H a una Skill y luego Super Skill o Ultimate Skill.",""]
},{ex:"L L L",rel:["magic-series","tokon-assemble","skill-gauge"],src:["dlMtfs"]});
e("special-cancel","combo",["umvc3"],"Special Cancel / Hyper Cancel",["special cancel","hyper cancel","cancel","xx"],{
  fr:["Annuler la récupération d’un coup dans un spécial ou un hyper.","UMVC3 : presque tous les normaux s’annulent en spécial sur hit, en garde et même dans le vide ; normaux et spéciaux peuvent être hyper-cancelled. Exception : 5S.",""],
  en:["Cancel a move’s recovery into a special or a hyper.","UMVC3: almost every normal special-cancels on hit, block or whiff; normals and specials can be hyper-cancelled. Exception: 5S.",""],
  es:["Cancelar la recuperación de un golpe en un especial o un hyper.","UMVC3: casi todos los normales se cancelan en especial al golpear, en guardia o al aire; normales y especiales pueden cancelarse en hyper. Excepción: 5S.",""]
},{ex:"5H > 236H > 236HS",rel:["chain-symbols","dhc","launcher"],src:["scUmvc3"]});
e("otg","combo",["mvc2","umvc3"],"OTG (Off The Ground)",["otg","off the ground","on the ground"],{
  fr:["Toucher un adversaire au sol pour prolonger le combo.","Les règles diffèrent fortement entre les deux Marvel.",""],
  en:["Hitting a knocked-down opponent to extend the combo.","Rules differ a lot between the two Marvel games.",""],
  es:["Golpear a un rival derribado para alargar el combo.","Las reglas cambian mucho entre los dos Marvel.",""]
},{per:{
  mvc2:X("Pas une propriété de coup : toute hitbox assez basse peut OTG. Limite intégrée d’un OTG par combo (quelques exceptions).","Not a move property: any hitbox low enough can OTG. Built-in limit of one OTG per combo (a few exceptions).","No es una propiedad: cualquier hitbox lo bastante baja puede OTG. Límite de un OTG por combo (con excepciones)."),
  umvc3:X("Propriété accordée à certains coups ; tout le cast a au moins un coup OTG, et certains assists OTG.","A property granted to specific moves; every character has at least one OTG move, and some assists OTG.","Propiedad de ciertos golpes; todos tienen al menos un golpe OTG, y algunos assists también.")
},rel:["bounce","assist"],src:["scMvc2","scUmvc3"]});
e("bounce","combo",["umvc3","tokon"],"Ground Bounce / Wall Bounce",["ground bounce","wall bounce","rebond","wall splat"],{
  fr:["Propriété qui fait rebondir l’adversaire au sol ou au mur pour continuer le combo.","UMVC3 : surtout sur des spéciaux et hypers ; le ground bounce évite d’avoir besoin d’un OTG. Tōkon : wall splat sur mur dur, les splats suivants deviennent des wall bounces.",""],
  en:["A property that bounces the opponent off the ground or wall to continue the combo.","UMVC3: mostly on specials and hypers; ground bounce removes the need for an OTG. Tōkon: wall splat on hard walls, later splats become wall bounces.",""],
  es:["Propiedad que hace rebotar al rival en el suelo o la pared para seguir el combo.","UMVC3: sobre todo en especiales e hypers; el ground bounce evita necesitar un OTG. Tōkon: wall splat en pared dura, los siguientes se vuelven wall bounces.",""]
},{rel:["otg","tokon-break"],src:["scUmvc3","dlMtfs"]});
e("hsd","combo",["umvc3"],"Hitstun Deterioration (HSD)",["hsd","hitstun deterioration","décroissance du hitstun"],{
  fr:["Le hitstun des coups diminue à mesure que le combo dure.","En UMVC3, c’est basé sur la durée réelle du combo, pas sur le nombre de coups ni les dégâts : aller plus vite au début peut rendre une suite possible.",""],
  en:["Move hitstun shrinks the longer the combo lasts.","In UMVC3 it is based on real combo time, not hit count or damage: going faster early can make a later link possible.",""],
  es:["El hitstun de los golpes disminuye cuanto más dura el combo.","En UMVC3 se basa en la duración real del combo, no en el número de golpes ni el daño.",""]
},{rel:["hitstun","damage-scaling"],src:["scUmvc3"],ft:true});
e("damage-scaling","combo",["umvc3","2xko"],"Damage Scaling",["scaling","proration","réduction des dégâts"],{
  fr:["Les dégâts de chaque coup baissent au fil du combo.","2XKO : plancher de 15 %. UMVC3 : section dédiée sur SuperCombo (valeurs non importées ici).",""],
  en:["Each hit deals less damage as the combo goes on.","2XKO: 15% floor. UMVC3: dedicated SuperCombo section (values not imported here).",""],
  es:["Cada golpe hace menos daño a medida que avanza el combo.","2XKO: mínimo del 15 %. UMVC3: sección dedicada en SuperCombo (valores no importados aquí).",""]
},{rel:["hsd"],src:["xkoMech","scUmvc3"],st:"partial"});
e("tac","team",["umvc3"],"TAC — Team Aerial Combo",["tac","team aerial combo","team aerial counter"],{
  fr:["Pendant un air combo, remplacer j.5S par j.8S, j.2S ou j.6S pour faire entrer un partenaire.","Uniquement pendant un air combo. Le TAC haut (j.8S) envoie plus haut, ne donne pas de jauge, et ne multiplie par 1,2 que les dégâts de l’attaque TAC elle-même. Le défenseur peut deviner la direction (Team Aerial Counter).",""],
  en:["During an air combo, replace j.5S with j.8S, j.2S or j.6S to bring in a partner.","Only during an air combo. Up TAC (j.8S) knocks higher, gives no meter, and applies 1.2x damage only to the TAC attack itself. The defender can guess the direction (Team Aerial Counter).",""],
  es:["Durante un air combo, cambiar j.5S por j.8S, j.2S o j.6S para traer a un compañero.","Solo durante un air combo. El TAC arriba (j.8S) lanza más alto, no da barra y aplica 1,2x solo al ataque TAC. El defensor puede adivinar la dirección (Team Aerial Counter).",""]
},{ex:"5S sj.M sj.H j.8S",rel:["air-combo","assist"],src:["scUmvc3"],rx:"\\bTAC\\b|j\\.[268]S"});
e("flying-screen","combo",["mvc2"],"Flying Screen",["flying screen","fsd"],{
  fr:["Les enders d’air combo (la plupart des normaux lourds en super saut, certains hypers) déclenchent le Flying Screen.","L’adversaire vole avec un sifflement caractéristique ; la chute empêche le Tech Roll, ce qui ouvre des mixups et des extensions (FSD).",""],
  en:["Air combo enders (most heavy normals in super jump, some hypers) trigger Flying Screen.","The opponent flies off with a distinct whistle; the knockdown disables Tech Roll, opening mixups and extensions (FSD).",""],
  es:["Los finales de air combo (la mayoría de normales fuertes en súper salto, algunos hypers) activan Flying Screen.","El rival sale volando con un silbido; la caída impide el Tech Roll y abre mixups y extensiones (FSD).",""]
},{rel:["air-combo"],src:["scMvc2"]});

/* ——— Équipe ——— */
e("team-size","team",ALL,"Taille d’équipe",["équipe","team","3v3","4v4","2v2","point","anchor"],{
  fr:["Nombre de personnages choisis par équipe.","Détermine les positions (Point, Second, Anchor…) et les assists disponibles.",""],
  en:["Number of characters per team.","Sets the positions (Point, Second, Anchor…) and available assists.",""],
  es:["Número de personajes por equipo.","Define las posiciones (Point, Second, Anchor…) y los assists.",""]
},{per:{
  mvc2:X("3 personnages ; chacun choisit un type d’assist α, β ou γ.","3 characters; each picks assist type α, β or γ.","3 personajes; cada uno elige assist α, β o γ."),
  umvc3:X("3 personnages ; chacun a trois assists, un seul est choisi à la sélection. A1 = 2e position, A2 = 3e position.","3 characters; each has three assists, one chosen at select. A1 = 2nd slot, A2 = 3rd slot.","3 personajes; cada uno tiene tres assists, se elige uno. A1 = 2.º puesto, A2 = 3.º."),
  dbfz:X("3 personnages ; Z Assist A, B ou C choisi à la sélection.","3 characters; Z Assist A, B or C chosen at select.","3 personajes; Z Assist A, B o C elegido en la selección."),
  tokon:X("4 personnages : Point, Shooter, Vertical, Assault. Seuls Point et Shooter sont disponibles au début ; les autres arrivent après un Break, un wall splat ou une manche perdue.","4 characters: Point, Shooter, Vertical, Assault. Only Point and Shooter start available; the others join after a Break, wall splat or a lost round.","4 personajes: Point, Shooter, Vertical, Assault. Solo Point y Shooter al inicio; los demás llegan tras un Break, un wall splat o una ronda perdida."),
  "2xko":X("2 champions et un Fuse.","2 champions and a Fuse.","2 campeones y un Fuse.")
},rel:["assist","fuse","assemble-assist"],src:["scMvc2","scUmvc3c","dlDbfz","dlMtfs","psFaq","xkoFuse"]});
e("assist","team",ALL,"Assist",["assist","a1","a2","appel"],{
  fr:["Appeler un partenaire pour une attaque pendant que le point continue à jouer.","Le choix de l’assist et sa position dans l’équipe changent selon le jeu.",""],
  en:["Call a partner for one attack while the point character keeps playing.","Assist choice and team slot rules differ per game.",""],
  es:["Llamar a un compañero para un ataque mientras el point sigue jugando.","La elección y el puesto del assist cambian según el juego.",""]
},{per:{
  mvc2:X("Trois types par personnage (α, β, γ) ; le type décide aussi du super en THC et du coup en Variable Counter.","Three types per character (α, β, γ); the type also decides the THC super and the Variable Counter move.","Tres tipos por personaje (α, β, γ); el tipo decide también el súper del THC y el golpe del Variable Counter."),
  umvc3:X("Trois assists par personnage, un choisi à la sélection. A1 appelle le 2e, A2 le 3e — selon l’ordre du moment, qui change avec les tags et les K.O.","Three assists per character, one chosen at select. A1 calls the 2nd, A2 the 3rd — based on the current order, which changes with tags and K.O.s.","Tres assists por personaje, uno elegido. A1 llama al 2.º, A2 al 3.º — según el orden actual, que cambia con tags y K.O."),
  dbfz:X("Z Assist A, B ou C. A et B ont un cooldown court, C un cooldown plus long mais plus fort (cercle doré). Impossible pendant un hit, une garde, un Vanish ou un cooldown.","Z Assist A, B or C. A and B have short cooldowns, C a longer one but is stronger (gold circle). Not usable while hit, blocking, during Vanish or cooldown.","Z Assist A, B o C. A y B con cooldown corto, C más largo pero más fuerte. No se puede usar al ser golpeado, en guardia, en Vanish o en cooldown."),
  tokon:X("L’assist dépend de la position : 6A Shooter (projectile), 2A Vertical (montant), 4A Assault (propre au perso), j.A aérien au-dessus du sommet du saut. Assist annulé depuis un coup = 1 barre d’Assemble Gauge.","The assist depends on the slot: 6A Shooter (projectile), 2A Vertical (rising), 4A Assault (character-specific), j.A aerial above the jump apex. Assist cancel = 1 Assemble Gauge bar.","El assist depende del puesto: 6A Shooter, 2A Vertical, 4A Assault, j.A aéreo. Cancelar en assist = 1 barra de Assemble Gauge."),
  "2xko":X("Assist, Push Assist et Super Assist (coûte 1 barre quand un champion est K.O.).","Assist, Push Assist and Super Assist (costs 1 bar when a champion is K.O.’d).","Assist, Push Assist y Super Assist (cuesta 1 barra cuando un campeón está K.O.).")
},rel:["team-size","assemble-assist","z-assist","dhc"],src:["scMvc2","scUmvc3c","dlDbfz","dlMtfs","xkoMech"]});
e("dhc","team",["mvc2","umvc3"],"DHC — Delayed Hyper Combo",["dhc","delayed hyper combo","hyper combo"],{
  fr:["Annuler l’hyper du point dans l’hyper d’un partenaire.","Change l’ordre de l’équipe et permet de tagger en sécurité.",""],
  en:["Cancel the point’s hyper into a partner’s hyper.","Changes team order and allows safer tags.",""],
  es:["Cancelar el hyper del point en el hyper de un compañero.","Cambia el orden del equipo y permite tags más seguros.",""]
},{per:{
  mvc2:X("Un super par personnage vivant dans la séquence. Le point part en 3e position, le 2e entre. Pas de perte de vie rouge avec un DHC.","One super per living character in the sequence. The point goes to slot 3, the 2nd comes in. No red life loss via DHC.","Un súper por personaje vivo. El point pasa al puesto 3, entra el 2.º. No se pierde vida roja con DHC."),
  umvc3:X("Depuis un hyper niveau 1 vers le 2e personnage uniquement (pas directement le 3e) ; chaîne possible Point → 2e → 3e jusqu’à 5 barres. Impossible depuis un niveau 3.","From a level 1 hyper to the 2nd character only (not directly the 3rd); chain Point → 2nd → 3rd possible up to 5 bars. Not from a level 3.","Desde un hyper nivel 1 solo hacia el 2.º (no directo al 3.º); cadena Point → 2.º → 3.º hasta 5 barras. No desde un nivel 3.")
},ex:"236HS > 214HS",rel:["meter","thc","ultimate-z-change","double-down"],src:["scMvc2","scUmvc3c"],rx:"\\bDHC\\b"});
e("thc","team",["mvc2"],"THC — Team Hyper Combo",["thc","team hyper combo","variable combination"],{
  fr:["A1+A2 : toute l’équipe restante fait son super en même temps.","Coûte une barre par personnage vivant ; avec moins de barres, autant de personnages qu’il y a de barres. Le super joué dépend du type d’assist.",""],
  en:["A1+A2: the whole remaining team performs supers at once.","Costs one bar per living character; with fewer bars, as many characters as bars. The super depends on the assist type.",""],
  es:["A1+A2: todo el equipo restante hace su súper a la vez.","Cuesta una barra por personaje vivo; con menos barras, tantos personajes como barras. El súper depende del tipo de assist.",""]
},{rel:["dhc","assist","meter"],src:["scMvc2"]});
e("snapback","team",["mvc2","umvc3"],"Snapback",["snapback","snap","236a1","236a2"],{
  fr:["236 + bouton d’assist, 1 barre : sur hit, force l’adversaire à faire entrer le personnage choisi.","MvC2 : le personnage sorti est bloqué un temps (pas d’assist, DHC, THC ni Variable Counter) ; Double Snap possible. UMVC3 : démarrage 2 frames, touche toujours mid, 50 000 dégâts de base, cooldown sur les deux assists adverses.",""],
  en:["236 + assist button, 1 bar: on hit, forces the opponent to bring in the chosen character.","MvC2: the snapped-out character is locked out for a while (no assist, DHC, THC or Variable Counter); Double Snap exists. UMVC3: 2-frame startup, always mid, 50,000 base damage, cooldown on both opposing assists.",""],
  es:["236 + botón de assist, 1 barra: al golpear, obliga al rival a sacar al personaje elegido.","MvC2: el personaje expulsado queda bloqueado un tiempo; existe el Double Snap. UMVC3: arranque de 2 frames, siempre mid, 50 000 de daño base, cooldown en ambos assists rivales.",""]
},{ex:"236A1",rel:["meter","assist"],src:["scMvc2","scUmvc3c"]});
e("crossover-counter","team",["mvc2","umvc3"],"Crossover Counter / Variable Counter (Alpha Counter)",["alpha counter","crossover counter","variable counter","cc"],{
  fr:["En garde, 1 barre : le partenaire entre et attaque pendant que le point sort.","MvC2 : 214 + A1/A2 au sol en blockstun ; le coup dépend du type d’assist. UMVC3 : 6 + A1/A2 ; le personnage qui bloquait et le partenaire sont invincibles pendant l’entrée.",""],
  en:["While blocking, 1 bar: the partner comes in and attacks while the point leaves.","MvC2: 214 + A1/A2 on the ground in blockstun; the move depends on the assist type. UMVC3: 6 + A1/A2; both characters are invincible during the entry.",""],
  es:["En guardia, 1 barra: el compañero entra y ataca mientras el point sale.","MvC2: 214 + A1/A2 en el suelo en blockstun; el golpe depende del assist. UMVC3: 6 + A1/A2; ambos son invencibles durante la entrada.",""]
},{rel:["guard-cancel","pushblock","meter"],src:["scMvc2","scUmvc3c"]});
e("x-factor","system",["umvc3"],"X-Factor",["xf","x-factor","xfactor"],{
  fr:["L+M+H+S : buff temporaire qui sert aussi d’outil d’annulation universel.","Annule presque tout : attaques, spéciaux, la plupart des hypers et même le blockstun, au sol comme en l’air. Impossible en hitstun, pendant un super-freeze, une partie cinématique ou un hard tag. Sous X-Factor, la vie rouge revient à 450 HP par frame.",""],
  en:["L+M+H+S: temporary buff that is also a universal cancel.","Cancels almost anything: attacks, specials, most hypers and even blockstun, on the ground or in the air. Not during hitstun, super freeze, cinematic portions or hard tags. Under X-Factor red health recovers at 450 HP per frame.",""],
  es:["L+M+H+S: buff temporal que también sirve como cancel universal.","Cancela casi todo: ataques, especiales, la mayoría de hypers e incluso el blockstun. No en hitstun, super freeze, cinemáticas ni hard tag. Bajo X-Factor la vida roja vuelve a 450 HP por frame.",""]
},{rel:["recoverable-health","special-cancel"],src:["scUmvc3c"],rx:"X-?Factor|\\bXF"});
e("z-assist","team",["dbfz"],"Z Assist / Z Change",["z assist","z change","tag","a1","a2"],{
  fr:["A1/A2 : Z Assist. Maintenir A1/A2 : Z Change (le partenaire entre avec un Super Dash).","Après un Z Change, les partenaires sont brièvement bloqués puis le personnage sorti est en cooldown. Pas de Z Change en blockstun.",""],
  en:["A1/A2: Z Assist. Hold A1/A2: Z Change (partner comes in with a Super Dash).","After a Z Change, partners are briefly locked out then the tagged-out character is on cooldown. No Z Change in blockstun.",""],
  es:["A1/A2: Z Assist. Mantener A1/A2: Z Change (el compañero entra con un Super Dash).","Tras un Z Change, los compañeros quedan bloqueados un momento y el que sale entra en cooldown. Sin Z Change en blockstun.",""]
},{rel:["assist","ultimate-z-change","super-dash"],src:["dlDbfz"]});
e("ultimate-z-change","team",["dbfz"],"Ultimate Z Change",["uzc","ultimate z change"],{
  fr:["Pendant un Super, A1/A2 (1 Ki) annule dans le Super du partenaire ; 4 + A1/A2 (3 Ki) dans son Meteor.","Non affecté par le cooldown d’assist. Aussi possible sans Super après un coup qui touche (41236 + A1/A2 ou 63214 + A1/A2).",""],
  en:["During a Super, A1/A2 (1 Ki) cancels into the partner’s Super; 4 + A1/A2 (3 Ki) into their Meteor.","Not affected by assist cooldown. Also possible without a Super after a hit (41236 + A1/A2 or 63214 + A1/A2).",""],
  es:["Durante un Super, A1/A2 (1 Ki) cancela en el Super del compañero; 4 + A1/A2 (3 Ki) en su Meteor.","No le afecta el cooldown de assist. También sin Super tras un golpe (41236 + A1/A2 o 63214 + A1/A2).",""]
},{rel:["dhc","meter","z-assist"],src:["dlDbfz"]});
e("assemble-assist","team",["tokon"],"Assemble Assist, Assemble Rush, Member Change",["assemble assist","assemble rush","member change","member switch","shooter","vertical","assault"],{
  fr:["Direction + A appelle l’allié de la position correspondante ; T pendant son assist échange les places (Member Change).","Plusieurs assists peuvent être appelés à la fois, limités par leur cooldown. Annuler un coup en assist coûte 1 barre d’Assemble Gauge et donne accès à l’Assemble Rush (tumble universel pour prolonger). Toucher plusieurs personnages dans un combo augmente les dégâts (150 % à 2, 200 % à 3, 250 % à 4).","Depuis le 2 novembre 2026 : cooldown de 180F par assist, 300F si l’assist est touché, après Super Assemble ou Member Switch."],
  en:["Direction + A calls the ally in that slot; T during their assist swaps places (Member Change).","Several assists can be out at once, limited by cooldowns. Cancelling into an assist costs 1 Assemble Gauge bar and unlocks Assemble Rush (universal tumble extender). Hitting several characters in one combo raises damage (150% at 2, 200% at 3, 250% at 4).","Since November 2, 2026: 180F cooldown per assist, 300F if the assist is hit, after Super Assemble or Member Switch."],
  es:["Dirección + A llama al aliado de ese puesto; T durante su assist intercambia puestos (Member Change).","Se pueden llamar varios assists a la vez, limitados por su cooldown. Cancelar en assist cuesta 1 barra de Assemble Gauge y da acceso al Assemble Rush. Golpear a varios personajes aumenta el daño (150 % con 2, 200 % con 3, 250 % con 4).","Desde el 2 de noviembre de 2026: cooldown de 180F por assist, 300F si el assist es golpeado, tras Super Assemble o Member Switch."]
},{ex:"5H > 6A > T",rel:["assist","assemble-gauge","team-size"],src:["dlMtfs","steamTokon"]});
e("fuse","team",["2xko"],"Fuse",["fuse","2x assist","double down","freestyle","juggernaut","sidekick","teamfight"],{
  fr:["Règle d’équipe choisie avec les deux champions : 2X Assist, Double Down, Freestyle, Juggernaut, Sidekick, Teamfight.","Double Down : annuler un Super du point en Super de l’assist (qui devient point). Juggernaut et Sidekick : une seule Super Meter (max 5, début de manche à 2) ; seul le point est pleinement jouable ; avec Juggernaut, les actions de tag deviennent Eject (1 barre). Teamfight : les deux champions dépensent de la jauge pour l’effet du Fuse.","Fury et Pulse ont été retirés de la liste des Fuses."],
  en:["Team rule chosen with both champions: 2X Assist, Double Down, Freestyle, Juggernaut, Sidekick, Teamfight.","Double Down: cancel the point’s Super into the assist’s Super (who becomes point). Juggernaut and Sidekick: a single Super Meter (max 5, rounds start at 2); only the point is fully playable; with Juggernaut, tag actions become Eject (1 bar). Teamfight: both champions spend meter for the Fuse effect.","Fury and Pulse were removed from the Fuse list."],
  es:["Regla de equipo elegida con los dos campeones: 2X Assist, Double Down, Freestyle, Juggernaut, Sidekick, Teamfight.","Double Down: cancelar el Super del point en el del assist. Juggernaut y Sidekick: una sola Super Meter (máx. 5, empieza en 2); solo el point es plenamente jugable; con Juggernaut, los tags pasan a ser Eject (1 barra). Teamfight: ambos gastan barra para el efecto.","Fury y Pulse se retiraron de la lista de Fuses."]
},{rel:["team-size","tag-launcher","meter","double-down"],src:["xkoFuse","xkoMech"]});
e("double-down","team",["2xko"],"Double Down",["double down"],{
  fr:["Fuse 2XKO : un Super du point peut être annulé en Super de l’assist, qui devient le nouveau point.","Proche du principe du DHC des Marvel.",""],
  en:["2XKO Fuse: the point’s Super can be cancelled into the assist’s Super, who becomes the new point.","Similar in spirit to the Marvel DHC.",""],
  es:["Fuse de 2XKO: el Super del point puede cancelarse en el Super del assist, que pasa a ser point.","Parecido al DHC de los Marvel.",""]
},{rel:["fuse","dhc"],src:["xkoMech"]});
e("tag-launcher","team",["2xko"],"Tag Launcher, Handshake Tag, Eject",["tag launcher","handshake tag","eject","quick tag"],{
  fr:["Tag Launcher : lanceur au sol qui envoie l’adversaire en l’air puis fait entrer l’autre champion (80 dégâts) ; le scaling du hitstun repasse à 100 % pour le coup suivant.","Avec Juggernaut, Tag Launcher est remplacé par Eject (force l’adversaire à changer de point).",""],
  en:["Tag Launcher: grounded launcher that sends the opponent up then brings in the other champion (80 damage); hitstun scaling resets to 100% for the next hit.","With Juggernaut, Tag Launcher is replaced by Eject (forces the opponent to switch point).",""],
  es:["Tag Launcher: lanzador en el suelo que manda al rival arriba y trae al otro campeón (80 de daño); el escalado de hitstun vuelve al 100 %.","Con Juggernaut se sustituye por Eject (obliga al rival a cambiar de point).",""]
},{rel:["fuse","launcher"],src:["xkoMech"]});
e("super-assemble","team",["tokon"],"Super Assemble",["super assemble"],{
  fr:["Maintenir A pendant une Super Skill : un allié enchaîne sa propre Super Skill (50 Skill Gauge + 1 barre d’Assemble Gauge).","Jusqu’à deux fois de suite (trois Super Skills). Une direction choisit l’allié, qui devient point. Impossible après une Ultimate Skill.",""],
  en:["Hold A during a Super Skill: an ally follows with their own Super Skill (50 Skill Gauge + 1 Assemble Gauge bar).","Up to twice in a row (three Super Skills). A direction picks the ally, who becomes point. Not after an Ultimate Skill.",""],
  es:["Mantener A durante una Super Skill: un aliado sigue con su Super Skill (50 Skill Gauge + 1 barra de Assemble Gauge).","Hasta dos veces seguidas. Una dirección elige al aliado, que pasa a ser point. No tras una Ultimate Skill.",""]
},{rel:["skill-gauge","assemble-gauge","dhc"],src:["dlMtfs"]});

/* ——— Défense ——— */
e("pushblock","defense",["mvc2","umvc3"],"Pushblock (Advancing Guard)",["pushblock","advancing guard","ag"],{
  fr:["En garde, repousser l’adversaire.","UMVC3 : deux boutons d’attaque en blockstun, sans coût ; ne s’active qu’à partir d’un tiers du blockstun (l’entrée est mémorisée). MvC2 : section Pushblock dédiée (avec Pushblock Guard Cancel).",""],
  en:["While blocking, push the opponent away.","UMVC3: two attack buttons in blockstun, free; only activates after one third of blockstun (input is buffered). MvC2: dedicated Pushblock section (incl. Pushblock Guard Cancel).",""],
  es:["En guardia, empujar al rival.","UMVC3: dos botones de ataque en blockstun, gratis; solo se activa tras un tercio del blockstun. MvC2: sección Pushblock dedicada.",""]
},{rel:["blockstun","crossover-counter"],src:["scUmvc3c","scMvc2"],ft:true});
e("guard-cancel","defense",["dbfz"],"Guard Cancel",["guard cancel","gc"],{
  fr:["6 + A1/A2 en blockstun au sol, 1 Ki : échange de personnage qui repousse l’adversaire à mi-écran sur hit.","Punissable en garde. Seul, le personnage fait une téléportation proche du Vanish. Un combo commencé par Guard Cancel ne peut pas K.O.",""],
  en:["6 + A1/A2 in grounded blockstun, 1 Ki: character swap that knocks the opponent half screen on hit.","Punishable on block. When alone, the character does a Vanish-like teleport. Combos started by Guard Cancel cannot K.O.",""],
  es:["6 + A1/A2 en blockstun en el suelo, 1 Ki: cambio de personaje que aleja al rival media pantalla al golpear.","Castigable en guardia. Solo, hace un teletransporte parecido al Vanish. Un combo iniciado con Guard Cancel no puede K.O.",""]
},{rel:["crossover-counter","z-reflect","meter"],src:["dlDbfz"]});
e("z-reflect","defense",["dbfz"],"Z Reflect",["z reflect","reflect"],{
  fr:["4S au sol : renvoie dès la frame 1 tous les coups et projectiles gardables, sauf Sparking Blast.","Réussi : invincible aux projections et annulable en n’importe quelle attaque ; un coup réfléchi repousse l’attaquant à mi-écran.",""],
  en:["4S on the ground: reflects from frame 1 all guardable strikes and projectiles, except Sparking Blast.","On success: throw-invincible and cancelable into any attack; reflected strikes push the attacker half screen.",""],
  es:["4S en el suelo: refleja desde el frame 1 todo golpe y proyectil bloqueable, salvo Sparking Blast.","Si sale bien: invencible a agarres y cancelable en cualquier ataque; el atacante retrocede media pantalla.",""]
},{rel:["guard-cancel","pushblock"],src:["dlDbfz"]});
e("parry","defense",["2xko"],"Parry",["parry","low parry"],{
  fr:["Coûte 1 barre, remboursée en cas de réussite.","10 frames actives, 38 de récupération ; existe aussi en Low Parry.",""],
  en:["Costs 1 bar, refunded on success.","10 active frames, 38 recovery; Low Parry also exists.",""],
  es:["Cuesta 1 barra, devuelta si sale bien.","10 frames activos, 38 de recuperación; también existe Low Parry.",""]
},{rel:["meter","active","recovery"],src:["xkoMech"],ft:true});
e("chip","defense",["2xko","tokon"],"Chip Damage",["chip","chip damage"],{
  fr:["Dégâts infligés même en garde.","2XKO : les spéciaux et supers infligent 20 % de chip. Tōkon : section Chip Damage dans Guard (valeurs non importées).",""],
  en:["Damage dealt even through block.","2XKO: specials and supers deal 20% chip. Tōkon: Chip Damage section under Guard (values not imported).",""],
  es:["Daño que entra incluso en guardia.","2XKO: especiales y súpers hacen 20 % de chip. Tōkon: sección Chip Damage (valores no importados).",""]
},{rel:["blockstun"],src:["xkoMech","dlMtfs"],st:"partial"});
e("recoverable-health","defense",ALL,"Vie récupérable",["red life","red health","vie rouge","healing gauge","grey health","blue health","recoverable"],{
  fr:["Une partie des dégâts reçus peut être regagnée sous certaines conditions.","Nom et règles différents selon le jeu.",""],
  en:["Part of the damage taken can be regained under some conditions.","Name and rules differ per game.",""],
  es:["Parte del daño recibido puede recuperarse en ciertas condiciones.","Nombre y reglas cambian según el juego.",""]
},{per:{
  mvc2:X("Vie rouge regagnée hors du jeu ; perdue si le personnage entre par raw tag ou Snapback, mais pas via DHC.","Red life regained while out of play; lost if the character enters by raw tag or Snapback, not via DHC.","Vida roja recuperada fuera de juego; se pierde al entrar por raw tag o Snapback, no por DHC."),
  umvc3:X("50 % des dégâts restent en vie rouge ; 200 HP/frame hors du jeu, 450 HP/frame sous X-Factor (non cumulables). Perdue en entrée d’Oncoming ou Hard Tag, gardée via DHC ou Alpha Counter.","50% of damage stays as red health; 200 HP/frame while out, 450 HP/frame under X-Factor (not stacking). Lost on Oncoming entry or Hard Tag, kept via DHC or Alpha Counter.","50 % del daño queda como vida roja; 200 HP/frame fuera, 450 HP/frame con X-Factor. Se pierde al entrar como Oncoming o Hard Tag, no por DHC o Alpha Counter."),
  tokon:X("Healing Gauge : chaque allié qui rejoint ajoute 10 000 de vie grise à l’équipe ; dégâts sur un assist = Healing Gauge.","Healing Gauge: each joining ally adds 10,000 grey life to the team; damage on an assist = Healing Gauge.","Healing Gauge: cada aliado que se une añade 10 000 de vida gris; daño a un assist = Healing Gauge."),
  dbfz:X("Vie bleue : pendant Sparking!, celle du point se régénère entièrement en 240F.","Blue health: during Sparking!, the point’s regenerates fully in 240F.","Vida azul: durante Sparking!, la del point se regenera en 240F."),
  "2xko":X("Grey Health (section dédiée sur le wiki officiel).","Grey Health (dedicated section on the official wiki).","Grey Health (sección en el wiki oficial).")
},rel:["x-factor","sparking","dhc"],src:["scMvc2","scUmvc3c","dlMtfs","dlDbfz","xkoMech"]});

/* ——— Ressources ——— */
e("meter","resources",ALL,"Jauge de super",["meter","jauge","hyper meter","ki","skill gauge","super meter","barre"],{
  fr:["Ressource dépensée pour les supers et certaines actions d’équipe.","Taille et coûts différents selon le jeu.",""],
  en:["Resource spent on supers and some team actions.","Size and costs differ per game.",""],
  es:["Recurso para súpers y algunas acciones de equipo.","Tamaño y costes cambian según el juego.",""]
},{per:{
  mvc2:X("Hyper Meter : 5 stocks max. La plupart des supers coûtent 1 barre, quelques Level 3 en coûtent 3.","Hyper Meter: 5 stocks max. Most supers cost 1 bar, a few Level 3s cost 3.","Hyper Meter: máx. 5. La mayoría de súpers cuesta 1 barra, algunos Level 3 cuestan 3."),
  umvc3:X("Hyper Meter partagée par l’équipe, 5 niveaux max, 1 niveau au début du match. Gain = dégâts de base du coup qui touche, environ 62,5 % en garde.","Team-shared Hyper Meter, 5 levels max, 1 level at match start. Gain = base damage of the hit, about 62.5% on block.","Hyper Meter compartida, máx. 5 niveles, 1 al empezar. Ganancia = daño base del golpe, ~62,5 % en guardia."),
  dbfz:X("Ki Gauge : 7 barres max. Sert au Vanish, Guard Cancel, spéciaux renforcés, Supers et Meteors.","Ki Gauge: 7 bars max. Used for Vanish, Guard Cancel, powered-up specials, Supers and Meteors.","Ki Gauge: máx. 7 barras. Para Vanish, Guard Cancel, especiales potenciados, Supers y Meteors."),
  tokon:X("Skill Gauge : vide au début ; max 100 / 125 / 150 avec 2 / 3 / 4 personnages. Extra Skill 25, Super Skill 50, Ultimate Skill 100, Tōkon Assemble 150.","Skill Gauge: starts empty; max 100 / 125 / 150 with 2 / 3 / 4 characters. Extra Skill 25, Super Skill 50, Ultimate Skill 100, Tōkon Assemble 150.","Skill Gauge: empieza vacía; máx. 100 / 125 / 150 con 2 / 3 / 4 personajes. Extra Skill 25, Super Skill 50, Ultimate Skill 100, Tōkon Assemble 150."),
  "2xko":X("Super Meter : 3 barres max par champion, 1 au départ ; Super 1 barre, Ultimate 3 barres. Juggernaut/Sidekick : une seule jauge (max 5, départ 2).","Super Meter: 3 bars max per champion, start at 1; Supers 1 bar, Ultimate 3 bars. Juggernaut/Sidekick: single meter (max 5, start 2).","Super Meter: máx. 3 barras por campeón, empieza en 1; Super 1 barra, Ultimate 3. Juggernaut/Sidekick: una sola barra (máx. 5, empieza en 2).")
},rel:["assemble-gauge","dhc","fuse"],src:["scMvc2","scUmvc3c","dlDbfz","dlMtfs","xkoMech"]});
e("assemble-gauge","resources",["tokon"],"Assemble Gauge",["assemble gauge"],{
  fr:["Jauge sous la vie de l’équipe pour la plupart des actions d’assist ; se recharge seule.","Max 1 barre avec un allié, jusqu’à 3 avec tous les alliés. Disassembled (après un Perfect Reflect) : actions de jauge, assists depuis le neutre et tags indisponibles jusqu’au remplissage.","Depuis le 2 novembre 2026 : récupération 25 → 60 par frame (25 → 30 en recul et en garde)."],
  en:["Gauge under team health used for most assist actions; refills on its own.","Max 1 bar with one ally, up to 3 with all allies. Disassembled (after a Perfect Reflect): gauge actions, neutral assists and tags unavailable until it refills.","Since November 2, 2026: regain 25 → 60 per frame (25 → 30 during knockback and blocking)."],
  es:["Barra bajo la vida del equipo para la mayoría de acciones de assist; se recarga sola.","Máx. 1 barra con un aliado, hasta 3 con todos. Disassembled (tras un Perfect Reflect): sin acciones de barra, assists desde neutral ni tags hasta recargar.","Desde el 2 de noviembre de 2026: recuperación 25 → 60 por frame (25 → 30 en retroceso y guardia)."]
},{rel:["assemble-assist","meter","super-assemble"],src:["dlMtfs","steamTokon"]});
e("break-meter","resources",["2xko"],"Break Meter, Break, Fury",["break","fury","fury break","break meter"],{
  fr:["Break : action défensive liée à la Break Meter. Avec un seul champion restant, ou avec Juggernaut/Sidekick, Break devient Fury Break et donne l’état Fury.","Fury : 20 s, +25 % de dégâts ; Fury Dash Cancel (30 %).",""],
  en:["Break: defensive action tied to the Break Meter. With one champion left, or with Juggernaut/Sidekick, Break becomes Fury Break and grants Fury.","Fury: 20 s, +25% damage; Fury Dash Cancel (30%).",""],
  es:["Break: acción defensiva ligada a la Break Meter. Con un solo campeón, o con Juggernaut/Sidekick, se vuelve Fury Break y da Fury.","Fury: 20 s, +25 % de daño; Fury Dash Cancel (30 %).",""]
},{rel:["fuse","meter"],src:["xkoMech"]});

/* ——— Mécaniques propres ——— */
e("sparking","system",["dbfz"],"Sparking!",["sparking","sparking blast"],{
  fr:["Sparking Blast (L+M+H+S, invincible au démarrage) active Sparking! pour toute l’équipe.","+20 % de dégâts, Ki ×2, vie bleue du point régénérée en 240F, tous les normaux jump-cancel, spécial → spécial possible, cooldown d’assist qui avance même en hitstun.","Durée : 420F à 3 personnages, 840F à 2, 1260F à 1."],
  en:["Sparking Blast (L+M+H+S, invincible startup) activates Sparking! for the team.","+20% damage, 2x Ki gain, point blue health regenerates in 240F, all normals jump-cancelable, special → special allowed, assist cooldown runs even during hitstun.","Duration: 420F with 3 characters, 840F with 2, 1260F with 1."],
  es:["Sparking Blast (L+M+H+S, arranque invencible) activa Sparking! para el equipo.","+20 % de daño, Ki x2, vida azul del point regenerada en 240F, todos los normales con jump cancel, especial → especial, cooldown de assist que avanza en hitstun.","Duración: 420F con 3 personajes, 840F con 2, 1260F con 1."]
},{rel:["vanish","super-dash","limit-breaking"],src:["dlDbfz"],rx:"Sparking"});
e("vanish","system",["dbfz"],"Vanish",["vanish","teleport"],{
  fr:["M+H, 1 Ki : téléportation derrière l’adversaire avec frappe.","Une fois par passage en l’air. En combo : Smash!, wall bounce sévère, annulable en Super Dash, spéciaux, supers. Maintenu pendant Sparking! : téléportation sans frappe (une fois par combo).",""],
  en:["M+H, 1 Ki: teleport behind the opponent with a hit.","Once per airborne period. In combos: Smash!, severe wall bounce, cancelable into Super Dash, specials, supers. Held during Sparking!: teleport without attacking (once per combo).",""],
  es:["M+H, 1 Ki: teletransporte detrás del rival con golpe.","Una vez por estancia en el aire. En combo: Smash!, wall bounce, cancelable en Super Dash, especiales, súpers. Mantenido en Sparking!: teletransporte sin golpe (una vez por combo).",""]
},{rel:["sparking","super-dash","meter"],src:["dlDbfz"],rx:"Vanish"});
e("limit-breaking","system",["dbfz"],"Limit-Breaking Power",["limit breaking","limit-breaking power"],{
  fr:["Quand une équipe n’a plus qu’un personnage, il reçoit plusieurs bonus.","+1 Ki, +20 % de dégâts, 10 % de dégâts non récupérables en plus. Depuis la 1.50 : plus de remplissage automatique du Ki si la vie adverse est à 0 à l’activation.",""],
  en:["When a team is down to one character, it gets several perks.","+1 Ki, +20% damage, 10% more unrecoverable damage. Since 1.50: no Ki autofill if the opponent’s health is 0 on activation.",""],
  es:["Cuando a un equipo le queda un personaje, recibe varias ventajas.","+1 Ki, +20 % de daño, 10 % más de daño no recuperable. Desde la 1.50: sin relleno automático de Ki si la vida rival es 0.",""]
},{rel:["sparking","meter"],src:["dlDbfz","bnDbfz150"]});
e("tokon-break","system",["tokon"],"Break (Tōkon)",["break","stage transition","wall splat"],{
  fr:["Les coups Break provoquent une transition de stage (mur mou) ou un wall splat (mur dur).","Bonus : un allié de plus (si les quatre ne sont pas là), 1 barre d’Assemble Gauge, plus de vie pour les manches suivantes. Après une transition, l’attaquant est à +25 près du milieu de l’écran. Ordre d’arrivée : Point > Shooter > Vertical > Assault.",""],
  en:["Break moves cause a stage transition (soft wall) or a wall splat (hard wall).","Bonuses: one more ally (if all four are not in yet), 1 Assemble Gauge bar, more health in later rounds. After a transition the attacker is +25 near midscreen. Join order: Point > Shooter > Vertical > Assault.",""],
  es:["Los golpes Break causan una transición de escenario (pared blanda) o un wall splat (pared dura).","Bonus: un aliado más, 1 barra de Assemble Gauge, más vida en rondas siguientes. Tras la transición el atacante queda a +25. Orden: Point > Shooter > Vertical > Assault.",""]
},{rel:["team-size","assemble-gauge","bounce"],src:["dlMtfs"]});
e("tokon-assemble","system",["tokon"],"Tōkon Assemble",["tokon assemble","tōkon assemble"],{
  fr:["Super de comeback à 150 Skill Gauge.","Conditions : 150 de jauge, tous les équipiers disponibles, adversaire à une manche de la victoire. Frappe invincible puis cinématique, pas un K.O. instantané ; recharge l’Assemble Gauge.",""],
  en:["Comeback super at 150 Skill Gauge.","Conditions: 150 gauge, all teammates available, opponent one round from winning. Invincible strike into a cinematic, not an instant kill; refills the Assemble Gauge.",""],
  es:["Súper de remontada con 150 de Skill Gauge.","Condiciones: 150 de barra, todos los compañeros disponibles, rival a una ronda de ganar. Golpe invencible y cinemática, no es K.O. instantáneo.",""]
},{rel:["meter","gatling"],src:["dlMtfs"]});
e("critical-strike","system",["2xko"],"Critical Strike (coup lourd chargé)",["critical strike","[H]","charged","chargé"],{
  fr:["En 2XKO, maintenir un bouton lourd déclenche sa version chargée.","Noté avec des crochets : 5[H], 2[H], j.[H]. La notation ComboDex garde ce format.",""],
  en:["In 2XKO, holding a heavy button triggers its charged version.","Written with brackets: 5[H], 2[H], j.[H]. ComboDex keeps that format.",""],
  es:["En 2XKO, mantener un botón pesado activa su versión cargada.","Se escribe con corchetes: 5[H], 2[H], j.[H]. ComboDex mantiene ese formato.",""]
},{ex:"5[H] j.[H]",rel:["hold"],src:["xkoMech"],rx:"\\[H\\]"});

/* ——— Frames ——— */
e("startup","frames",ALL,"Startup",["startup","démarrage","frames"],{
  fr:["Numéro de la première frame active.","Exemple du wiki 2XKO : un startup de 6 ne fait rien pendant 5 frames puis devient actif à la 6e.",""],
  en:["The frame number of the first active frame.","2XKO wiki example: a 6-frame startup does nothing for 5 frames, then becomes active on the 6th.",""],
  es:["Número del primer frame activo.","Ejemplo del wiki de 2XKO: un startup de 6 no hace nada 5 frames y se activa en el 6.º.",""]
},{ex:"Akali 5M : 8 / 4 / 22",rel:["active","recovery","frame-advantage"],src:["xkoMech","xkoAkali"],ft:true});
e("active","frames",ALL,"Active",["active","actives","hitbox"],{
  fr:["Nombre de frames pendant lesquelles le coup peut toucher.","Les frames inactives entre deux parties actives sont notées entre crochets sur le wiki 2XKO.",""],
  en:["Number of frames during which the attack can hit.","Inactive frames between active parts are written in brackets on the 2XKO wiki.",""],
  es:["Número de frames en que el ataque puede golpear.","Los frames inactivos se escriben entre corchetes en el wiki de 2XKO.",""]
},{rel:["startup","recovery","hitbox"],src:["xkoMech"],ft:true});
e("recovery","frames",ALL,"Recovery",["recovery","récupération"],{
  fr:["Frames après la dernière frame active avant de pouvoir agir.","Plus la récupération est longue, plus le coup est punissable s’il est bloqué ou raté.",""],
  en:["Frames after the last active frame before you can act.","Longer recovery means more punishable on block or whiff.",""],
  es:["Frames tras el último activo antes de poder actuar.","Más recuperación = más castigable en guardia o al fallar.",""]
},{rel:["startup","active","frame-advantage"],src:["xkoMech"],ft:true});
e("frame-advantage","frames",ALL,"On Block / On Hit (avantage de frames)",["on block","on hit","frame advantage","plus","minus","+","-"],{
  fr:["Différence de frames entre l’attaquant et le défenseur après le coup, en garde ou sur hit.","Positif : l’attaquant agit avant. Négatif : le défenseur agit avant et peut punir si l’écart est assez grand.",""],
  en:["Frame difference between attacker and defender after the move, on block or hit.","Positive: the attacker acts first. Negative: the defender acts first and may punish if the gap is large enough.",""],
  es:["Diferencia de frames entre atacante y defensor tras el golpe, en guardia o al golpear.","Positivo: el atacante actúa antes. Negativo: el defensor actúa antes y puede castigar.",""]
},{rel:["recovery","blockstun","hitstun"],src:["xkoMech","dlDbfz"],ft:true});
e("hitstun","frames",ALL,"Hitstun",["hitstun","untech"],{
  fr:["Durée pendant laquelle un personnage touché ne peut pas agir.","Base des combos : toucher à nouveau avant la fin du hitstun. Pour un adversaire en l’air, Dustloop (DBFZ) parle d’« untech » : temps avant de pouvoir se rétablir.",""],
  en:["Time during which a hit character cannot act.","The basis of combos: hit again before hitstun ends. For airborne opponents Dustloop (DBFZ) uses “untech”: time before they can air tech.",""],
  es:["Tiempo en que un personaje golpeado no puede actuar.","Base de los combos. Para rivales en el aire Dustloop (DBFZ) usa «untech».",""]
},{rel:["hsd","blockstun","counter-hit"],src:["dlDbfz","scUmvc3"],ft:true});
e("blockstun","frames",ALL,"Blockstun",["blockstun","guard stun"],{
  fr:["Durée pendant laquelle un personnage qui bloque reste en garde.","DBFZ : la garde aérienne ajoute 2 frames de blockstun.",""],
  en:["Time a blocking character stays stuck in block.","DBFZ: air blocking adds 2 frames of blockstun.",""],
  es:["Tiempo que un personaje queda en guardia al bloquear.","DBFZ: la guardia aérea añade 2 frames.",""]
},{rel:["hitstun","pushblock","frame-advantage"],src:["dlDbfz"],ft:true});
e("hitbox","frames",ALL,"Hitbox / Hurtbox",["hitbox","hurtbox","boîte"],{
  fr:["Hitbox : zone qui touche (rouge). Hurtbox : zone où le personnage peut être touché.","Frame Theater affiche les images de hitbox publiées par les wikis (ex. Akali 5M sur le wiki 2XKO).",""],
  en:["Hitbox: the area that hits (red). Hurtbox: where the character can be hit.","Frame Theater shows hitbox images published by the wikis (e.g. Akali 5M on the 2XKO wiki).",""],
  es:["Hitbox: zona que golpea (roja). Hurtbox: zona donde se puede recibir golpe.","Frame Theater muestra las imágenes de hitbox de los wikis (ej. Akali 5M en el wiki de 2XKO).",""]
},{rel:["active","startup"],src:["scUmvc3","xkoAkali"],ft:true});

/* ——— Règles de composition d’équipe (Team Building) ——— */
var RULES={
  mvc2:{size:3,slots:["point","second","anchor"],assists:["α","β","γ"],src:["scMvc2"],
    order:[X("A1 appelle le Second, A2 l’Anchor.","A1 calls the Second, A2 the Anchor.","A1 llama al Second, A2 al Anchor."),
      X("DHC : le point part en 3e position et le Second entre ; un super par personnage vivant.","DHC: the point goes to slot 3 and the Second comes in; one super per living character.","DHC: el point pasa al puesto 3 y entra el Second; un súper por personaje vivo."),
      X("THC (A1+A2) : une barre par personnage vivant ; le super joué dépend du type d’assist.","THC (A1+A2): one bar per living character; the super depends on assist type.","THC (A1+A2): una barra por personaje vivo; el súper depende del assist.")]},
  umvc3:{size:3,slots:["point","second","anchor"],assists:["α","β","γ"],src:["scUmvc3c"],
    order:[X("A1 appelle le Second, A2 l’Anchor (ordre du moment, change avec les tags et les K.O.).","A1 calls the Second, A2 the Anchor (current order, changes with tags and K.O.s).","A1 llama al Second, A2 al Anchor (orden actual)."),
      X("DHC : uniquement vers le Second ; chaîne Point → Second → Anchor possible (jusqu’à 5 barres).","DHC: to the Second only; Point → Second → Anchor chain possible (up to 5 bars).","DHC: solo hacia el Second; cadena Point → Second → Anchor (hasta 5 barras)."),
      X("Crossover Counter : 6 + A1/A2 en garde, 1 barre.","Crossover Counter: 6 + A1/A2 while blocking, 1 bar.","Crossover Counter: 6 + A1/A2 en guardia, 1 barra.")]},
  dbfz:{size:3,slots:["point","second","anchor"],assists:["A","B","C"],src:["dlDbfz"],
    order:[X("A1 et A2 appellent les deux partenaires ; maintenir = Z Change.","A1 and A2 call the two partners; hold = Z Change.","A1 y A2 llaman a los dos compañeros; mantener = Z Change."),
      X("Ultimate Z Change : Super du partenaire correspondant (1 Ki) ou Meteor (3 Ki).","Ultimate Z Change: matching partner’s Super (1 Ki) or Meteor (3 Ki).","Ultimate Z Change: Super del compañero (1 Ki) o Meteor (3 Ki)."),
      X("Sparking! dure plus longtemps avec moins de personnages : 420F / 840F / 1260F.","Sparking! lasts longer with fewer characters: 420F / 840F / 1260F.","Sparking! dura más con menos personajes: 420F / 840F / 1260F.")]},
  tokon:{size:4,slots:["point","shooter","vertical","assault"],assists:null,src:["dlMtfs","psFaq"],
    order:[X("La position décide l’assist : 6A Shooter, 2A Vertical, 4A Assault.","The slot decides the assist: 6A Shooter, 2A Vertical, 4A Assault.","El puesto decide el assist: 6A Shooter, 2A Vertical, 4A Assault."),
      X("Seuls Point et Shooter sont là au début ; Vertical puis Assault arrivent avec les Breaks, wall splats ou manches perdues.","Only Point and Shooter start; Vertical then Assault join through Breaks, wall splats or lost rounds.","Solo Point y Shooter al inicio; Vertical y Assault llegan con Breaks, wall splats o rondas perdidas."),
      X("Member Change : le point prend la place de l’allié échangé et donc son type d’assist.","Member Change: the point takes the swapped ally’s slot and therefore its assist type.","Member Change: el point toma el puesto del aliado y su tipo de assist.")]},
  "2xko":{size:2,slots:["point","assist"],assists:null,fuse:["2X Assist","Double Down","Freestyle","Juggernaut","Sidekick","Teamfight"],src:["xkoFuse","xkoMech"],
    order:[X("Avant la manche, on peut échanger les champions pour choisir le point.","Before the round you can swap champions to choose the point.","Antes de la ronda se pueden intercambiar para elegir el point."),
      X("Juggernaut / Sidekick : seul le point est pleinement jouable ; une seule Super Meter (max 5, départ 2).","Juggernaut / Sidekick: only the point is fully playable; single Super Meter (max 5, start 2).","Juggernaut / Sidekick: solo el point es plenamente jugable; una sola Super Meter."),
      X("Double Down : le Super du point peut s’annuler en Super de l’assist.","Double Down: the point’s Super can cancel into the assist’s Super.","Double Down: el Super del point puede cancelarse en el del assist.")]}
};

/* ——— Patch Observatory : notes officielles résumées (versions et dates exactes, sources citées) ——— */
var PATCHES=[
  {id:"tokon-2026-11-02",game:"tokon",ver:"1.004.002",date:"2026-11-02",title:"Patch Update — 2 November 2026",src:["steamTokon","psuTokon"],note:X("Version 1.004.002 relevée par PlayStation Universe ; le détail vient de la note officielle Steam.","Version 1.004.002 reported by PlayStation Universe; details come from the official Steam note.","Versión 1.004.002 según PlayStation Universe; el detalle viene de la nota oficial de Steam."),changes:[
    {cat:"content",chars:["Phoenix Cyclops"],txt:X("Ajout du personnage jouable Phoenix Cyclops (DLC).","Added the new playable character Phoenix Cyclops (DLC).","Se añade el personaje jugable Phoenix Cyclops (DLC).")},
    {cat:"system",chars:[],rel:["assemble-assist"],txt:X("Cooldown des Assemble Assist (toutes versions, Assemble Rush compris) : 180F. Assist touché, Super Assemble et Member Switch : 300F. Plus de cooldown pendant le début de manche.","Assemble Assist cooldown (all versions, incl. Assemble Rush): 180F. Assist hit, Super Assemble and Member Switch: 300F. No cooldown during the round start.","Cooldown de Assemble Assist (todas las versiones, incl. Assemble Rush): 180F. Assist golpeado, Super Assemble y Member Switch: 300F.")},
    {cat:"resources",chars:[],rel:["assemble-gauge"],txt:X("Récupération de l’Assemble Gauge : 25 → 60 par frame (25 → 30 en recul et en garde).","Assemble Gauge regain: 25 → 60 per frame (25 → 30 during knockback and blocking).","Recuperación de Assemble Gauge: 25 → 60 por frame (25 → 30 en retroceso y guardia).")},
    {cat:"resources",chars:[],rel:["meter"],txt:X("Skill Gauge gagnée sur Crossover Reflect réussi : 10 → 20 ; sur Perfect Reflect : 12 → 40.","Skill Gauge from a successful Crossover Reflect: 10 → 20; from Perfect Reflect: 12 → 40.","Skill Gauge por Crossover Reflect: 10 → 20; por Perfect Reflect: 12 → 40.")},
    {cat:"system",chars:[],rel:["assemble-assist"],txt:X("Member Switch impossible avec l’allié à l’écran après avoir bloqué pendant qu’un Assemble Assist est actif.","Member Switch is no longer possible with the on-screen ally after blocking while an Assemble Assist is active.","Ya no se puede hacer Member Switch con el aliado en pantalla tras bloquear con un Assemble Assist activo.")},
    {cat:"system",chars:[],rel:["airdash"],txt:X("Buffer d’entrée allongé pour le dash directionnel ; buffer ajouté à l’Aerial Dash et au Free Flight.","Longer input buffer for directional dash; buffer added to Aerial Dash and Free Flight.","Buffer más largo para el dash direccional; buffer añadido a Aerial Dash y Free Flight.")},
    {cat:"character",chars:["Captain America"],txt:X("Assemble Assist Assault (←+A) : correction des valeurs de déplacement dans certaines positions.","Assemble Assist Assault (←+A): fixed incorrect movement values in some positions.","Assemble Assist Assault (←+A): corregidos los valores de movimiento.")},
    {cat:"character",chars:["Black Panther"],txt:X("Bast’s Blessing Gauge corrigée quand un projectile est le premier coup du combo ; récupération de l’Assemble Smash au sol alignée sur les autres.","Bast’s Blessing Gauge fixed when a projectile is the first hit; grounded Assemble Smash recovery now matches others.","Corregida la Bast’s Blessing Gauge con proyectil como primer golpe; recuperación del Assemble Smash igualada.")},
    {cat:"character",chars:["Magik"],txt:X("Teleport (U près du Dark Portal) : priorité d’entrée de la version neutre ajustée, plus facile après des normaux.","Teleport (U near Dark Portal): neutral version input priority adjusted, easier after normals.","Teleport (U cerca del Dark Portal): prioridad de entrada ajustada.")},
    {cat:"character",chars:["Danger"],txt:X("Holoseeker et Synchrobeam corrigés avec Calibrate ; Kill Switch (214+L) ne déclenche plus de Break après le Combo Limit ; hurtbox du Grounded Finisher corrigée.","Holoseeker and Synchrobeam fixed with Calibrate; Kill Switch (214+L) no longer triggers Break after Combo Limit; Grounded Finisher hurtbox fixed.","Holoseeker y Synchrobeam corregidos; Kill Switch (214+L) ya no provoca Break tras el Combo Limit.")},
    {cat:"character",chars:["Spider-Man"],txt:X("Arachnid Assault (214+H), Spidey Sense (623+M/H) et Web Slam/Web Snare corrigés.","Arachnid Assault (214+H), Spidey Sense (623+M/H) and Web Slam/Web Snare fixed.","Corregidos Arachnid Assault (214+H), Spidey Sense (623+M/H) y Web Slam/Web Snare.")},
    {cat:"character",chars:["Star-Lord"],txt:X("Elemental Outlaw aérien (236+M+H) : ne rate plus pendant la cinématique dans certains cas.","Aerial Elemental Outlaw (236+M+H): no longer misses during the cinematic in some cases.","Elemental Outlaw aéreo (236+M+H): ya no falla en la cinemática.")},
    {cat:"character",chars:["Peni Parker"],txt:X("Wheel Bomb : correction de la Vital Gauge qui n’atteignait jamais 0.","Wheel Bomb: fixed Vital Gauge never reaching 0.","Wheel Bomb: corregida la Vital Gauge.")},
    {cat:"character",chars:["Ghost Rider"],txt:X("Judgement Cradle (214+Attaque) : direction de suite et éjection corrigées.","Judgement Cradle (214+Attack): follow-up direction and blowback fixed.","Judgement Cradle (214+Ataque): dirección y expulsión corregidas.")},
    {cat:"character",chars:["Blade"],txt:X("Glaive Strike (22+H) : nombre de coups qui augmentait fortement dans certains cas, corrigé.","Glaive Strike (22+H): fixed a large hit-count increase in some cases.","Glaive Strike (22+H): corregido el aumento de impactos.")},
    {cat:"character",chars:["Deadpool"],txt:X("Foot Dive, Rope-a-Dope, Faulty Grenade/Headpool corrigés ; Fever Dream: Ranbu (236+H→L) a une fenêtre d’entrée réduite.","Foot Dive, Rope-a-Dope, Faulty Grenade/Headpool fixed; Fever Dream: Ranbu (236+H→L) has a smaller input window.","Corregidos Foot Dive, Rope-a-Dope, Faulty Grenade/Headpool; Fever Dream: Ranbu con ventana menor.")},
    {cat:"character",chars:["Loki"],txt:X("Laevateinn (632146+M+H) : dégâts qui augmentaient plus que prévu, corrigé.","Laevateinn (632146+M+H): fixed damage increasing more than intended.","Laevateinn (632146+M+H): corregido el daño excesivo.")},
    {cat:"character",chars:["Magneto"],txt:X("Magnetic Blast (236+Attaque) : 2e niveau de charge plus facile avec trois nuages de débris ; récupération du chargé bloqué corrigée.","Magnetic Blast (236+Attack): second charge level easier with three debris clouds; blocked charged recovery fixed.","Magnetic Blast (236+Ataque): segundo nivel más fácil; recuperación corregida.")},
    {cat:"character",chars:["Green Goblin"],txt:X("Flyby Kick, Sticky Bomb, Glider Raid (22+M) et Sky Scraper (236+M+H) corrigés.","Flyby Kick, Sticky Bomb, Glider Raid (22+M) and Sky Scraper (236+M+H) fixed.","Corregidos Flyby Kick, Sticky Bomb, Glider Raid (22+M) y Sky Scraper (236+M+H).")},
    {cat:"character",chars:["Carnage"],txt:X("Parasite Fang (U) et Guillotine Axe (22+H) corrigés ; récupération de l’Assemble Smash au sol alignée sur les autres.","Parasite Fang (U) and Guillotine Axe (22+H) fixed; grounded Assemble Smash recovery matches others.","Corregidos Parasite Fang (U) y Guillotine Axe (22+H); recuperación del Assemble Smash igualada.")},
    {cat:"other",chars:[],txt:X("Classé : passage Vibranium → Master à 3 victoires sur 5 au lieu de 4. Les replays des versions précédentes ne sont plus lisibles.","Ranked: Vibranium → Master now needs 3 wins out of 5 instead of 4. Replays from previous versions can no longer be played.","Clasificatoria: Vibranium → Master con 3 de 5 victorias. Las repeticiones anteriores ya no se pueden ver.")}
  ]},
  {id:"tokon-2026-08-28",game:"tokon",ver:"",date:"2026-08-28",title:"Stability + costume update",src:["tgTokon"],summary:"Wolverine's Battle Reborn suit, PC crash fixes, matchmaking improvements and a Peni Parker interaction fix.",changes:[
    {cat:"content",chars:["Wolverine"],txt:X("Nouveau costume Battle Reborn pour Wolverine.","New Battle Reborn suit for Wolverine.","Nuevo traje Battle Reborn para Wolverine.")},
    {cat:"character",chars:["Peni Parker"],txt:X("Correction d’une interaction de Peni Parker.","Peni Parker interaction fix.","Corrección de una interacción de Peni Parker.")},
    {cat:"system",chars:[],txt:X("Corrections de plantages sur PC et matchmaking amélioré.","PC crash fixes and improved matchmaking.","Correcciones de cierres en PC y matchmaking mejorado.")}]},
  {id:"tokon-2026-08-21",game:"tokon",ver:"",date:"2026-08-21",title:"Performance + gameplay fixes",src:["tgTokon"],summary:"Periodic PC processing-load fixes, PS5 settings persistence and corrections to combat, lessons and replays (4 fighter changes).",changes:[
    {cat:"system",chars:[],txt:X("Charge processeur périodique corrigée sur PC, réglages PS5 conservés, corrections en combat, leçons et replays.","Periodic PC processing-load fixes, PS5 settings persistence, fixes to combat, lessons and replays.","Carga periódica de PC corregida, ajustes de PS5 conservados, correcciones en combate, lecciones y repeticiones.")}]},
  {id:"tokon-2026-08-10",game:"tokon",ver:"",date:"2026-08-10",title:"Stability patch",src:["tgTokon"],summary:"About 10 GB: more PC CPU and frame-rate fixes, a startup shader warm-up and two bug fixes. No character or balance changes.",changes:[]},
  {id:"tokon-2026-08-06",game:"tokon",ver:"1.00",date:"2026-08-06",title:"Sortie (PS5 / PC) + patch du jour 1",src:["grTokon","dlTokon","psuTokon"],summary:"Initial release with all 21 launch characters. Day-one update: PC performance (CPU load, shader warm-up, anti-aliasing), online input delay fixes on Steam, extra input-lag mitigation on PS5, lobby / ranked / connectivity fixes.",changes:[
    {cat:"system",chars:[],txt:X("Priorité des entrées revue pour que →↓↘ sorte plus fidèlement.","Input prioritization changed so →↓↘ activates more accurately.","Prioridad de entradas revisada para que →↓↘ salga con más precisión.")},
    {cat:"character",chars:["Danger"],txt:X("Dash au sol : peut maintenant être annulé en skill, pour éviter les coups spéciaux aériens involontaires.","Ground dash can now cancel into a skill, so aerial special moves trigger less by accident.","El dash en suelo ahora se cancela en skill, para evitar especiales aéreos involuntarios.")}]},
  {id:"dbfz-1.50",game:"dbfz",ver:"1.50",date:"2026-04-21",title:"Patch Notes 1.50",src:["bnDbfz150","dlDbfzHome"],changes:[
    {cat:"content",chars:["Goku (SS4 DAIMA)"],txt:X("Ajout de Goku (SS4, DAIMA) au roster (selon l’historique Dustloop).","Goku (SS4, DAIMA) added to the roster (per the Dustloop history).","Goku (SS4, DAIMA) añadido (según el historial de Dustloop).")},
    {cat:"system",chars:[],rel:["limit-breaking"],txt:X("Limit-Breaking Power : plus de remplissage automatique du Ki si la vie adverse est à 0 à l’activation.","Limit Breaking Power: removed Ki Gauge autofill when it activates while the opponent’s health is 0.","Limit Breaking Power: sin relleno automático de Ki si la vida rival es 0.")},
    {cat:"character",chars:["Goku (SSJ)"],txt:X("Dragon Flash Fist (Light) : blockstun ajusté. Version au sol de Dragon Flash Fist : compte maintenant comme une attaque sautée.","Dragon Flash Fist (Light): blockstun adjusted. Grounded Dragon Flash Fist now counts as a jumping attack.","Dragon Flash Fist (Light): blockstun ajustado. La versión en suelo cuenta como ataque saltado.")},
    {cat:"character",chars:["Krillin"],txt:X("Jumping Unique Attack après une entrée Simple Dash : ne donne plus de Super Dash.","Jumping unique attack after a Simple Dash input no longer results in a Super Dash.","El ataque único saltado tras Simple Dash ya no da Super Dash.")},
    {cat:"character",chars:["Vegeta (Base)"],txt:X("Galaxy Breaker : Vegeta ne peut plus être repoussé pendant le coup.","Galaxy Breaker: Vegeta can no longer be pushed back during the move.","Galaxy Breaker: Vegeta ya no puede ser empujado.")},
    {cat:"character",chars:["Android 17"],txt:X("Jumping Unique Attack après une entrée Simple Dash : ne donne plus de Super Dash.","Jumping unique attack after a Simple Dash input no longer results in a Super Dash.","El ataque único saltado tras Simple Dash ya no da Super Dash.")},
    {cat:"character",chars:["Jiren"],txt:X("Counter Impact ne passe plus en attaque à la fin d’un match.","Counter Impact no longer transitions into an attack at the end of a match.","Counter Impact ya no pasa a ataque al final del combate.")},
    {cat:"character",chars:["Videl"],txt:X("Justice Revenge : Great Saiyaman ne reste plus à l’écran ; zone qui touche derrière ajustée en état renforcé.","Justice Revenge: Great Saiyaman no longer stays on screen; rear hit area adjusted when powered up.","Justice Revenge: Great Saiyaman ya no se queda; zona trasera ajustada.")},
    {cat:"character",chars:["Goku (GT)"],txt:X("Super Ultra Spirit Bomb : dégâts minimum garantis réduits si utilisé deux fois ou plus dans le même combo.","Super Ultra Spirit Bomb: minimum guaranteed damage now decreases when used twice or more in the same combo.","Super Ultra Spirit Bomb: daño mínimo reducido si se usa dos o más veces en un combo.")}
  ]}
];
/* Historique DBFZ (tableau des versions de Dustloop) : résumé d’origine en anglais, conservé tel quel. */
[["1.42","2025-12-05","Minor changes and bug fixes."],["1.41","2025-10-30","Minor changes and bug fixes."],["1.40","2025-10-11","Major system mechanics overhaul and balance changes."],["1.38","2024-09-04","Major balance changes. Added new feature to Sparking state: special moves can cancel into other special moves."],["1.37","2024-06-25","Bug fixes."],["1.36","2024-04-19","Bug fixes."],["1.35","2024-02-29","Rollback netcode update."],["1.33","2023-08-23","Major balance changes. Added new feature to Limit-Breaking Power: Super moves can cancel into Meteor moves."],["1.32","2023-05-23","Major balance changes. Added Ki Gain Modifier to some characters."],["1.31","2022-06-29","Major balance changes. Added new feature to Sparking state: Super Dash doesn't launch grounded opponent on hit."],["1.30","2022-02-24","Bug fixes. Added Android 21 (Lab Coat) to the roster."],["1.29","2021-09-01","Bug fixes."],["1.28","2021-08-10","Major system mechanics and balance changes. Added new mechanics: Special Z Change, Air Guard Cancel, and Guard Cancel Vanish."],["1.27","2021-03-10","Minor balance changes. Added Gogeta (SS4) to the roster."],["1.26","2021-01-13","Minor balance changes. Added Super Baby 2 to the roster."],["1.25","2020-09-16","Major balance changes. Added Master Roshi to the roster."],["1.24","2020-06-26","Bug fixes."],["1.23","2020-05-19","Bug fixes. Added Goku (Ultra Instinct) to the roster."],["1.21","2020-02-25","Season 3 update. Major system mechanics and balance changes. Added Kefla to the roster. Added new feature: Z Assist selection. Added new mechanics: Limit-Breaking Power and Rising Overhead Protection. Revamped UI."],["1.20","2019-12-04","Bug fixes. Added Broly (DBS) to the roster."],["1.19","2019-09-25","Bug fixes. Added Gogeta (SSGSS) to the roster."],["1.18","2019-08-07","Bug fixes. Added Janemba to the roster."],["1.17","2019-05-08","Bug fixes. Added Goku (GT) to the roster."],["1.16","2019-04-03","Bug fixes."],["1.15","2019-03-27","Season 2 update. Minor system mechanics changes. Major balance changes."],["1.14","2019-01-30","Major system mechanics changes, notably Sparking Blast and Guard Cancel Change. Added Jiren and Videl to the roster."],["1.13","2018-11-28","Minor system mechanics and balance changes."],["1.12","2018-09-26","Bug fixes. Added Cooler and Android 17 to the roster."],["1.11","2018-08-08","Major balance changes. Added Goku and Vegeta to the roster."],["1.10","2018-06-20","Bug fixes."],["1.09","2018-05-30","Added Zamasu (Fused) and Vegito (SSGSS) to the roster."],["1.08","2018-05-09","Minor system mechanics and balance changes. Removed Hard Knockdowns from Android 16 and Gohan (Adult). Removed infinite combos."],["1.06","2018-03-28","Added Bardock and Broly to the roster."],["1.05","2018-03-16","Bug fixes."],["1.04","2018-02-28","Bug fixes."],["1.01 Hotfix","2018-01-30","Minor bug fix."],["1.01","2018-01-26","Launch version."]].forEach(function(r){
  PATCHES.push({id:"dbfz-"+r[0].replace(/\s+/g,"-").toLowerCase(),game:"dbfz",ver:r[0],date:r[1],title:"Version "+r[0],src:["dlDbfzHome"],summary:r[2],changes:[]});
});
/* 2XKO : liste officielle des patchs (titres et résumés d’origine de Riot Games). */
[["1.3.3","2026-10-27","riot133","New champions Samira and Sett. Fixes: Limit Strike now grants a Limit Strike Bonus when it defeats the opponent's second champion; Tag Launcher no longer has one less frame of hitstun than intended in a combo without launches; Break and Fury Break no longer have one less frame of hitstun when activated by player 1.",[["content",["Samira","Sett"],X("Nouveaux champions : Samira et Sett.","New champions: Samira and Sett.","Nuevos campeones: Samira y Sett.")],["system",[],X("Tag Launcher : n’a plus une frame de hitstun en moins que prévu dans un combo sans launch.","Tag Launcher no longer has one less frame of hitstun than intended in a combo without launches.","Tag Launcher ya no tiene un frame de hitstun de menos."),["tag-launcher","hitstun"]],["system",[],X("Break et Fury Break n’ont plus une frame de hitstun en moins quand le joueur 1 les active.","Break and Fury Break no longer have one less frame of hitstun when activated by player 1.","Break y Fury Break ya no tienen un frame de hitstun de menos con el jugador 1."),["break-meter","hitstun"]],["system",[],X("Limit Strike donne maintenant le Limit Strike Bonus quand il bat le second champion adverse.","Limit Strike now grants a Limit Strike Bonus when it defeats the opponent's second champion.","Limit Strike ahora da el Limit Strike Bonus al derrotar al segundo campeón."),[]]]],
 ["1.3.1","2026-09-08","riot131","Largest content patch yet: new champion Lux and an update to The Climb; major balance adjustments to the known outliers.",[["content",["Lux"],X("Nouvelle championne : Lux.","New champion: Lux.","Nueva campeona: Lux.")]]],
 ["1.2.5","2026-07-23","riot125","Lots of changes for champions and some of the biggest Fuse adjustments yet.",[]],
 ["1.2.3b","2026-07-08","riotTag","Bugfixes for the console related crash issues.",[]],
 ["1.2.3","2026-06-09","riotTag","Senna and Thresh unlock; The Climb.",[["content",["Senna","Thresh"],X("Nouveaux champions : Senna et Thresh.","New champions: Senna and Thresh.","Nuevos campeones: Senna y Thresh.")]]],
 ["1.2.1","2026-05-11","riotTag","A new Fuse, in-game voice chat, and more.",[]],
 ["1.1.5","2026-04-07","riotTag","Akali, Local Duos mode, a Spirit Blossom event, and more.",[["content",["Akali"],X("Nouvelle championne : Akali.","New champion: Akali.","Nueva campeona: Akali.")]]],
 ["1.1.3","2026-03-10","riotTag","New events and free rewards.",[]],
 ["1.1.2","2026-02-05","riotTag","Fixing some critical bugs impacting core gameplay.",[]],
 ["1.1.1","2026-01-20","riotTag","Season 1 starts on PC, Xbox Series X|S and PlayStation 5.",[]],
 ["1.0.3 (hotfix)","2025-12-09","riotTag","Fixing a Yasuo bug causing crashes.",[]],
 ["1.0.3 (hotfix)","2025-12-01","riotTag","Targeted nerfs to meter gain, Teemo, and Ahri.",[["character",["Teemo","Ahri"],X("Nerfs ciblés sur Teemo et Ahri (détail dans la note officielle).","Targeted nerfs to Teemo and Ahri (details in the official note).","Nerfs a Teemo y Ahri (detalle en la nota oficial).")],["resources",[],X("Nerf du gain de jauge (détail dans la note officielle).","Meter gain nerf (details in the official note).","Nerf a la ganancia de barra (detalle en la nota oficial)."),["meter"]]]],
 ["1.0.3","2025-11-18","riotTag","A new Learning Hub, bug fixes, and balance adjustments for Teemo, Ekko, Blitzcrank, and Yasuo.",[["character",["Teemo","Ekko","Blitzcrank","Yasuo"],X("Ajustements d’équilibrage pour Teemo, Ekko, Blitzcrank et Yasuo (détail dans la note officielle).","Balance adjustments for Teemo, Ekko, Blitzcrank and Yasuo (details in the official note).","Ajustes para Teemo, Ekko, Blitzcrank y Yasuo (detalle en la nota oficial).")]]],
 ["1.0.1.2","2025-10-21","riotTag","Bug fixes for Ekko, Yasuo, and Warwick, plus changes to Champion Mastery and the rotating shop.",[["character",["Ekko","Yasuo","Warwick"],X("Corrections de bugs pour Ekko, Yasuo et Warwick.","Bug fixes for Ekko, Yasuo and Warwick.","Correcciones para Ekko, Yasuo y Warwick.")]]],
 ["1.0.1","2025-10-07","riotTag","Season 0 starts on day one of Early Access (patches 1.0.1 and 1.0.1.1).",[]]
].forEach(function(r,i){
  PATCHES.push({id:"2xko-"+r[0].replace(/[^0-9a-z.]+/gi,"-").toLowerCase()+"-"+r[1],game:"2xko",ver:r[0],date:r[1],title:"2XKO Patch Notes "+r[0],src:[r[2]],summary:r[3],changes:r[4].map(function(c){return{cat:c[0],chars:c[1],txt:c[2],rel:c[3]||[]}})});
});
/* UMvC3 (SuperCombo, versions 2.xx = UMvC3), MvC2 (Fighting Collection, notes Capcom), Avatar Legends (Paramount Games). Résumés d’origine en anglais. */
[["umvc3","",  "2017-03-07","wikiUmvc3","Digital re-release on Windows and Xbox One with all previous DLC, a gallery mode and 1080p / 60 fps."],
 ["umvc3","",  "2016-12-03","wikiUmvc3","Digital re-release on PlayStation 4 with all previous DLC (Jill Valentine, Shuma-Gorath), a gallery mode and 1080p / 60 fps. Magneto's alternate skin removed."],
 ["umvc3","2.03","2012-04-12","scwUmvc3","Removed Magneto alternate costume exploit. No documented balance changes."],
 ["umvc3","2.02","2012-02-01","scwUmvc3","Internal system changes only. No documented balance changes."],
 ["umvc3","2.01","2011-12-19","scwUmvc3","Balance changes and bug fixes."],
 ["umvc3","2.00","2011-11-15","scwUmvc3","Ultimate Marvel vs. Capcom 3 launch version. Major balance changes and new characters."],
 ["mvc2","1.0.4","2025-06-12","nlMvc104","Marvel vs. Capcom Fighting Collection: fixed characters not rendering at x2 internal resolution on Switch, and unintended behavior on Abyss' Temple during the stage transition (now set to appear first in player matches)."],
 ["mvc2","",  "2025-04-15","pnMvc","Marvel vs. Capcom Fighting Collection: resolution setting, random character select (hold a direction), Versus Mode; fixes for Thanos's Gauntlet Power, M. Bison's Psycho Field, Ruby Heart's Fantôme and Rogue's standing HK."],
 ["mvc2","1.0.2","2024-10-01","nlMvc102","Marvel vs. Capcom Fighting Collection: Cyttorak Power-Up EX setting (Juggernaut), relaxed online regional limits, online freeze fix, Thanos Cross-Over Combination fix, Venom Special Throw fix, ranking screen fix."],
 ["al","4.5","2026-11-05","pgAl45","15-second Ranked Rematch timer (forfeit when it runs out), option to offer a mutual draw, new combo trials, bug fixes for Korra, Nightmare Korra, Zaheer, Zuko and Ozai."],
 ["al","4.0","2026-10-28","pgAl40","New HUDs and two stages (Avatar Road, Air Temple Island), ranked first-to-3 sets, throw vs jump and jump vs Flow priority changes, character balance changes and training mode improvements."]
].forEach(function(r){PATCHES.push({id:r[0]+"-"+(r[1]||r[2]),game:r[0],ver:r[1],date:r[2],title:r[1]?"Version "+r[1]:"Update",src:[r[3]],summary:r[4],changes:[]})});
PATCHES.forEach(function(p){p.changes.forEach(function(c,i){c.id=p.id+"#"+i;c.rel=c.rel||[]})});
PATCHES.sort(function(a,b){return a.date<b.date?1:a.date>b.date?-1:0});

var GAME_PATCH_NOTE={
  mvc2:X("Mises à jour de la version Marvel vs. Capcom Fighting Collection (notes officielles Capcom).","Updates to the Marvel vs. Capcom Fighting Collection version (official Capcom notes).","Actualizaciones de la versión Marvel vs. Capcom Fighting Collection (notas oficiales de Capcom)."),
  umvc3:X("Versions 2.00 à 2.03 (SuperCombo Wiki) et rééditions PS4 / PC / Xbox One.","Versions 2.00 to 2.03 (SuperCombo Wiki) and PS4 / PC / Xbox One re-releases.","Versiones 2.00 a 2.03 (SuperCombo Wiki) y reediciones PS4 / PC / Xbox One."),
  al:X("Notes officielles Paramount Games des patchs 4.0 et 4.5.","Official Paramount Games notes for patches 4.0 and 4.5.","Notas oficiales de Paramount Games de los parches 4.0 y 4.5."),
  tokon:X("Toutes les mises à jour depuis la sortie du 6 août 2026, jusqu’à la version 1.004.002 du 2 novembre 2026.","Every update since the August 6, 2026 release, up to version 1.004.002 on November 2, 2026.","Todas las actualizaciones desde el lanzamiento del 6 de agosto de 2026 hasta la versión 1.004.002 del 2 de noviembre de 2026."),
  dbfz:X("Historique complet des versions (Dustloop) ; détail officiel importé pour la 1.50.","Full version history (Dustloop); official details imported for 1.50.","Historial completo (Dustloop); detalle oficial importado para la 1.50."),
  "2xko":X("Liste officielle des patchs Riot ; seuls les changements cités dans les résumés officiels sont détaillés.","Official Riot patch list; only changes named in the official summaries are detailed.","Lista oficial de Riot; solo se detallan los cambios citados en los resúmenes oficiales.")
};

/* Base de situations de matchup documentées : vide tant qu’aucune source fiable n’est importée. */
var MATCHUPS=[];

/* ——— Touches par manette (disposition par défaut) ———
   b : bouton de notation → [PlayStation, Xbox, Switch] ; null = plateforme absente.
   sc : raccourci d’un seul bouton pour une combinaison (clé = boutons triés). */
SRC.dlDbfzCtl={t:"Dustloop — DBFZ / Controls",u:"https://www.dustloop.com/w/DBFZ/Controls"};
SRC.xkoCtl={t:"2XKO Wiki — Controls",u:"https://wiki.play2xko.com/en-us/Controls"};
SRC.scMvc2Ctl={t:"SuperCombo — Marvel vs Capcom 2 / Controls",u:"https://wiki.supercombo.gg/w/Marvel_vs_Capcom_2/Controls"};
SRC.spottisTokon={t:"Spottis — Marvel Tōkon: Fighting Souls Controls",u:"https://www.spottis.com/games/marvel-t-kon-fighting-souls-controls/"};
SRC.infil={t:"Infil — The Fighting Game Glossary",u:"https://glossary.infil.net/"};
var PADS={
  dbfz:{plat:["ps","xb","sw"],b:{L:["□","X","Y"],M:["△","Y","X"],H:["○","B","A"],S:["×","A","B"],A1:["L1","LB","L"],A2:["L2","LT","ZL"]},sc:{"H+S":["R2","RT","ZR"],"L+M":["R1","RB","R"]},src:["dlDbfzCtl"]},
  umvc3:{plat:["ps","xb"],b:{L:["□","X"],M:["△","Y"],H:["○","B"],S:["×","A"],A1:["L1","LB"],A2:["R1","RB"]},sc:{},src:["scUmvc3c"]},
  mvc2:{plat:["ps","xb","sw"],b:{LP:["□","X","Y"],HP:["△","Y","X"],LK:["×","A","B"],HK:["○","B","A"],A1:["L1","LB","L"],A2:["L2","LT","ZL"]},sc:{},src:["scMvc2Ctl"]},
  "2xko":{plat:["ps","xb"],b:{L:["□","X"],M:["△","Y"],H:["○","B"],T:["×","A"],S1:["L1","LB"],S2:["R1","RB"]},sc:{},src:["xkoCtl"]},
  tokon:{plat:["ps","xb"],b:{L:["□","X"],M:["△","Y"],H:["○","B"],A:["×","A"],U:["R1","RB"],QS:["R2","RT"],QD:["L1","LB"],T:["L2","LT"]},sc:{"L+M":["L1","LB"]},src:["steamTokon","spottisTokon","dlMtfs"]}
};
/* Touches d’une fiche, par jeu. Syntaxe : « | » = ou ; espace = puis ; « > » = enchaîner ; « + » = ensemble ;
   « / » = au choix ; [X] = maintenir X ; @ctx = situation (voir kc.inp.ctx.*) ; *clé = texte (kc.inp.txt.*) ; « - » = aucune touche. */
var NOTION="-";
var INP={
  numpad:{all:NOTION},"chain-symbols":{all:NOTION},delay:{all:NOTION},release:{all:NOTION},"repeat-hits":{all:NOTION},"whiff-land":{all:NOTION},"counter-hit":{all:NOTION},motions:{all:NOTION},
  "jump-attack":{dbfz:"7/8/9 > L/M/H",umvc3:"7/8/9 > L/M/H/S","2xko":"7/8/9 > L/M/H",tokon:"7/8/9 > L/M/H",mvc2:"7/8/9 > LP/LK/HP/HK"},
  "superjump-attack":{dbfz:"1/2/3 > 7/8/9 > L/M/H",umvc3:"1/2/3 > 7/8/9 > L/M/H/S","2xko":"2 > 8 > L/M/H",tokon:"1/2/3 > 7/8/9 > L/M/H",mvc2:"1/2/3 > 7/8/9 > LP/LK/HP/HK"},
  hold:{"2xko":"[H]",dbfz:NOTION,umvc3:NOTION,tokon:NOTION,mvc2:NOTION},
  jc:{all:"7/8/9 @cancel"},
  dc:{umvc3:"66 @cancel | L+M @cancel",dbfz:"66 @cancel",tokon:"66 @cancel | QD @cancel","2xko":"66 @cancel | L+M @cancel",mvc2:"66 @cancel | LP+HP @cancel"},
  iad:{umvc3:"9 > 66 | 9 > L+M",dbfz:"9 > 66",tokon:"9 > 66 | 9 > QD","2xko":"9 > 66 | 9 > L+M"},
  tk:{dbfz:"2369+L/M/H",umvc3:"2369+L/M/H",tokon:"2369+L/M/H","2xko":"2369+L/M/H",mvc2:"2369+LP/HP"},
  buttons:{dbfz:"L M H S A1 A2",umvc3:"L M H S A1 A2",mvc2:"LP LK HP HK A1 A2","2xko":"L M H T S1 S2",tokon:"L M H U A T QS QD"},
  superjump:{dbfz:"1/2/3 > 7/8/9",umvc3:"1/2/3 > 7/8/9",tokon:"1/2/3 > 7/8/9",mvc2:"1/2/3 > 7/8/9","2xko":"2 > 8"},
  prejump:{all:NOTION},
  airdash:{tokon:"@air 66 | @air QD | @air L+M","2xko":"@air 66 | @air L+M",dbfz:"@air 66",umvc3:"@air 66 | @air L+M"},
  "super-dash":{dbfz:"H+S @airok"},
  launcher:{umvc3:"S",mvc2:"2+HP",tokon:"2+H"},
  "air-combo":{umvc3:"S > 8",mvc2:"2+HP > 8"},
  "magic-series":{umvc3:"L > M > H > S",mvc2:"LP > LK > HP > HK"},
  gatling:{tokon:"L > L > L | L > M > H"},
  "special-cancel":{umvc3:NOTION},otg:{all:NOTION},bounce:{all:NOTION},hsd:{all:NOTION},"damage-scaling":{all:NOTION},"flying-screen":{all:NOTION},"team-size":{all:NOTION},
  assist:{umvc3:"A1/A2",mvc2:"A1/A2",dbfz:"A1/A2",tokon:"5/6/2/4+A","2xko":"T | 4+T"},
  dhc:{umvc3:"*hyper @super",mvc2:"*hyper @super"},
  thc:{mvc2:"A1+A2"},
  snapback:{umvc3:"236+A1/A2",mvc2:"236+A1/A2"},
  "crossover-counter":{umvc3:"6+A1/A2 @bs"},
  "x-factor":{umvc3:"L+M+H+S"},
  "z-assist":{dbfz:"A1/A2 | [A1]/[A2] | 6+A1/A2"},
  "ultimate-z-change":{dbfz:"A1/A2 @super"},
  "assemble-assist":{tokon:"5/6/2/4+A | 5+A @cancel | T"},
  fuse:{"2xko":NOTION},
  "tag-launcher":{"2xko":"2+T | T"},
  "super-assemble":{tokon:"[A] @super"},
  pushblock:{umvc3:"L+M @bs",mvc2:"LP+HP @bs"},
  "guard-cancel":{dbfz:"6+A1/A2 @bs"},
  "z-reflect":{dbfz:"4+S"},
  parry:{"2xko":"L+H | 2+L+H"},
  chip:{all:NOTION},"recoverable-health":{all:NOTION},meter:{all:NOTION},"assemble-gauge":{all:NOTION},
  "break-meter":{"2xko":"T+S1/S2"},
  sparking:{dbfz:"L+M+H+S"},
  vanish:{dbfz:"M+H"},
  "limit-breaking":{all:NOTION},"tokon-break":{all:NOTION},
  "tokon-assemble":{tokon:"QS+A | 236+L+A"},
  "critical-strike":{"2xko":"[H]"},
  startup:{all:NOTION},active:{all:NOTION},recovery:{all:NOTION},"frame-advantage":{all:NOTION},hitstun:{all:NOTION},blockstun:{all:NOTION},hitbox:{all:NOTION}
};
E.forEach(function(x){var m=INP[x.id]||{};x.inp={};x.games.forEach(function(gm){var v=m[gm]!=null?m[gm]:m.all;if(v!=null)x.inp[gm]=v})});
CATS.splice(0,0,"basics");CATS.splice(CATS.indexOf("combo")+1,0,"offense");

window.CDX_KC_DATA={SRC:SRC,CATS:CATS,ENTRIES:E,RULES:RULES,PATCHES:PATCHES,GAME_PATCH_NOTE:GAME_PATCH_NOTE,MATCHUPS:MATCHUPS,GAMES:ALL,PADS:PADS};
})();
