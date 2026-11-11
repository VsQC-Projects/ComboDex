/* ComboDex — Knowledge Center (bêta) : Encyclopedia, Team Building, Matchup Knowledge, Combo Challenge, Patch Observatory,
   plus la fenêtre Character Mastery du module Personnages.
   Données sourcées : cdx-kc-data.js. Données perso : localStorage « cdx-kc-v1 » (jamais combo-dex-final-v1).
   Les combos, personnages, favoris et compteurs d’entraînement viennent de ComboDex (d.combos, d.fav, d.training). */
(function(){
"use strict";
var D=window.CDX_KC_DATA;if(!D)return;
var KEY="cdx-kc-v1";
var VIEWS=["encyclopedia","teams","matchups","challenge","patches"];
var VIEW_NAME={encyclopedia:"Encyclopedia",teams:"Team Building",matchups:"Matchup Knowledge",challenge:"Combo Challenge",patches:"Patch Observatory"};
var VIEW_ICON={encyclopedia:"📖",teams:"👥",matchups:"🤝",challenge:"🎮",patches:"🛰️"};
var SIT_CATS=["neutral","approach","pressure","defense","antiair","corner","resources","assists","punish"];
var MSTATES=["learning","mastered","rework"];
var PCATS=["content","system","resources","character","other"];
var TEAM_TAGS=["","offense","defense","balanced","combo"];
var ENC={};D.ENTRIES.forEach(function(x){ENC[x.id]=x});

/* ——— Traductions (intégrées au dictionnaire existant CDX_I18N) ——— */
var STR={
"kc.name":["Knowledge Center","Knowledge Center","Knowledge Center"],
"kc.beta":["(bêta)","(beta)","(beta)"],
"kc.lead":["Connaissances, préparation et entraînement : cinq outils reliés entre eux. Les données documentées, importées et personnelles sont toujours séparées.","Knowledge, preparation and practice: five linked tools. Documented, imported and personal data always stay separate.","Conocimiento, preparación y entrenamiento: cinco herramientas conectadas. Los datos documentados, importados y personales siempre van separados."],
"kc.search":["Rechercher partout : personnage, mécanique, mot-clé…","Search everywhere: character, mechanic, keyword…","Buscar en todo: personaje, mecánica, palabra clave…"],
"kc.search.none":["Aucun résultat dans le Knowledge Center.","No result in the Knowledge Center.","Ningún resultado en el Knowledge Center."],
"kc.open":["Ouvrir","Open","Abrir"],
"kc.all":["Tous","All","Todos"],
"kc.allGames":["Tous les jeux","All games","Todos los juegos"],
"kc.game":["Jeu","Game","Juego"],
"kc.char":["Personnage","Character","Personaje"],
"kc.cat":["Catégorie","Category","Categoría"],
"kc.status":["Statut","Status","Estado"],
"kc.sources":["Sources","Sources","Fuentes"],
"kc.updated":["Modifié le","Updated","Modificado el"],
"kc.id":["Identifiant","ID","Identificador"],
"kc.delete":["Supprimer","Delete","Eliminar"],
"kc.edit":["Modifier","Edit","Editar"],
"kc.save":["Enregistrer","Save","Guardar"],
"kc.cancel":["Annuler","Cancel","Cancelar"],
"kc.none":["—","—","—"],
"kc.saveErr":["Sauvegarde locale impossible (stockage plein ou bloqué).","Local save failed (storage full or blocked).","No se pudo guardar localmente (almacenamiento lleno o bloqueado)."],
"kc.corrupt":["Les données du Knowledge Center étaient illisibles : une copie a été mise de côté et un espace neuf a été créé.","Knowledge Center data was unreadable: a copy was set aside and a fresh space was created.","Los datos del Knowledge Center eran ilegibles: se guardó una copia y se creó un espacio nuevo."],
"kc.confirmDel":["Supprimer définitivement ?","Delete permanently?","¿Eliminar definitivamente?"],
"kc.badge.documented":["Documenté","Documented","Documentado"],
"kc.badge.partial":["Documenté en partie","Partly documented","Documentado en parte"],
"kc.badge.imported":["Donnée ComboDex importée","Imported ComboDex data","Dato importado de ComboDex"],
"kc.badge.personal":["Note personnelle — non vérifiée","Personal note — unverified","Nota personal — no verificada"],
"kc.badge.unverified":["Non vérifié","Unverified","No verificado"],
"kc.badge.official":["Source officielle","Official source","Fuente oficial"],
"kc.badge.secondary":["Source secondaire","Secondary source","Fuente secundaria"],
"kc.legend":["Légende : Documenté = sourcé (wiki ou éditeur) · Importé = combo ComboDex · Personnel = tes notes, jamais présentées comme vérifiées.","Legend: Documented = sourced (wiki or publisher) · Imported = ComboDex combo · Personal = your notes, never shown as verified.","Leyenda: Documentado = con fuente (wiki o editor) · Importado = combo de ComboDex · Personal = tus notas, nunca presentadas como verificadas."],
"kc.cat.notation":["Notation (index)","Notation (index)","Notación (índice)"],
"kc.cat.movement":["Déplacements","Movement","Movimiento"],
"kc.cat.combo":["Combos","Combos","Combos"],
"kc.cat.team":["Équipe et assists","Team and assists","Equipo y assists"],
"kc.cat.defense":["Défense","Defense","Defensa"],
"kc.cat.resources":["Ressources","Resources","Recursos"],
"kc.cat.system":["Mécaniques propres","Game-specific mechanics","Mecánicas propias"],
"kc.cat.frames":["Frames","Frames","Frames"],
"kc.cat.basics":["Fondamentaux","Fundamentals","Fundamentos"],
"kc.cat.offense":["Attaque","Offense","Ataque"],
"kc.catex.basics":["Neutral, footsies, spacing, zoning","Neutral, footsies, spacing, zoning","Neutral, footsies, spacing, zoning"],
"kc.catex.notation":["5L, 236L, numpad, j., [H]","5L, 236L, numpad, j., [H]","5L, 236L, numpad, j., [H]"],
"kc.catex.movement":["Dash, air dash, IAD, super jump","Dash, air dash, IAD, super jump","Dash, air dash, IAD, super jump"],
"kc.catex.combo":["Links, cancels, launchers, scaling","Links, cancels, launchers, scaling","Links, cancels, launchers, scaling"],
"kc.catex.offense":["Mixup, pression, oki, frame trap","Mixups, pressure, oki, frame traps","Mixup, presión, oki, frame trap"],
"kc.catex.team":["Assists, tags, DHC, snapback","Assists, tags, DHC, snapback","Assists, tags, DHC, snapback"],
"kc.catex.defense":["Garde, pushblock, parry, tech","Block, pushblock, parry, tech","Guardia, pushblock, parry, tech"],
"kc.catex.resources":["Jauges, barres, vie récupérable","Meters, bars, recoverable health","Medidores, barras, vida recuperable"],
"kc.catex.system":["Mécaniques propres à un jeu","Mechanics unique to one game","Mecánicas propias de un juego"],
"kc.catex.frames":["Startup, active, recovery, hitstun","Startup, active, recovery, hitstun","Startup, active, recovery, hitstun"],
"kc.vd.encyclopedia":["Chaque terme : à quoi il sert, dans quels jeux, et quelles touches appuyer.","Every term: what it does, in which games, and which buttons to press.","Cada término: para qué sirve, en qué juegos y qué botones pulsar."],
"kc.vd.teams":["Compose tes équipes, vérifie les assists et trouve des partenaires.","Build your teams, check assists and find partners.","Arma tus equipos, revisa los assists y encuentra compañeros."],
"kc.vd.matchups":["Deux personnages, les situations clés de l’affrontement, dans les deux sens.","Two characters, the key situations of the matchup, both ways.","Dos personajes, las situaciones clave del enfrentamiento, en ambos sentidos."],
"kc.vd.challenge":["Tire un combo au sort et enchaîne les réussites jusqu’à ton objectif.","Draw a combo and chain successes up to your goal.","Sortea un combo y encadena aciertos hasta tu objetivo."],
"kc.vd.patches":["Ce que chaque patch a changé, par personnage et par mécanique.","What each patch changed, by character and mechanic.","Lo que cambió cada parche, por personaje y mecánica."],
"kc.enc.az":["Tout, de A à Z","Everything, A to Z","Todo, de la A a la Z"],
"kc.enc.azex":["Toutes les fiches et tout le glossaire","Every entry and the whole glossary","Todas las fichas y todo el glosario"],
"kc.enc.back":["← Catégories","← Categories","← Categorías"],
"kc.enc.results":["Résultats","Results","Resultados"],
"kc.enc.ours":["Fiches ComboDex","ComboDex entries","Fichas de ComboDex"],
"kc.enc.infil":["Glossaire d’Infil","Infil’s glossary","Glosario de Infil"],
"kc.enc.infilDef":["Glossaire d’Infil","Infil’s glossary","Glosario de Infil"],
"kc.enc.infilRead":["Lire la fiche chez Infil","Read the entry on Infil’s site","Leer la ficha en el sitio de Infil"],
"kc.enc.jp":["En japonais","In Japanese","En japonés"],
"kc.enc.loading":["Chargement du glossaire…","Loading the glossary…","Cargando el glosario…"],
"kc.enc.keys":["Touches","Inputs","Botones"],
"kc.enc.pad":["Manette","Controller","Mando"],
"kc.pad.num":["Notation","Notation","Notación"],
"kc.pad.ps":["PlayStation","PlayStation","PlayStation"],
"kc.pad.xb":["Xbox","Xbox","Xbox"],
"kc.pad.sw":["Switch","Switch","Switch"],
"kc.inp.none":["aucune touche : c’est une notion","no input: this is a concept","sin botones: es un concepto"],
"kc.inp.undoc":["touches non documentées","inputs not documented","botones no documentados"],
"kc.inp.or":["ou","or","o"],
"kc.inp.then":["puis","then","luego"],
"kc.inp.hold":["maintenir","hold","mantener"],
"kc.inp.noPlat":["pas sur cette console","not on this console","no está en esta consola"],
"kc.inp.ctx.cancel":["pendant un coup, pour l’annuler","during a move, to cancel it","durante un golpe, para cancelarlo"],
"kc.inp.ctx.air":["en l’air","in the air","en el aire"],
"kc.inp.ctx.airok":["au sol ou en l’air","on the ground or in the air","en el suelo o en el aire"],
"kc.inp.ctx.bs":["pendant la garde","while blocking","mientras bloqueas"],
"kc.inp.ctx.super":["pendant une super","during a super","durante un súper"],
"kc.inp.txt.hyper":["commande de super du perso suivant","next character’s super input","comando de súper del siguiente personaje"],
"kc.enc.q":["Chercher une notion ou une notation (ex. j., [H], DHC)","Search a notion or notation (e.g. j., [H], DHC)","Buscar una noción o notación (ej. j., [H], DHC)"],
"kc.enc.favOnly":["Favoris","Favorites","Favoritos"],
"kc.enc.studiedOnly":["Étudiées","Studied","Estudiadas"],
"kc.enc.count":["{0} fiche(s)","{0} entry(ies)","{0} ficha(s)"],
"kc.enc.empty":["Aucune fiche ne correspond à ces filtres.","No entry matches these filters.","Ninguna ficha coincide con estos filtros."],
"kc.enc.pick":["Choisis une fiche dans la liste.","Pick an entry from the list.","Elige una ficha de la lista."],
"kc.enc.def":["Définition","Definition","Definición"],
"kc.enc.how":["Explication technique","Technical explanation","Explicación técnica"],
"kc.enc.cond":["Conditions particulières","Special conditions","Condiciones particulares"],
"kc.enc.per":["Différences par jeu","Per-game differences","Diferencias por juego"],
"kc.enc.notDoc":["Non documenté dans les sources de ComboDex.","Not documented in ComboDex sources.","No documentado en las fuentes de ComboDex."],
"kc.enc.ex":["Exemple de notation","Notation example","Ejemplo de notación"],
"kc.enc.combos":["Exemples dans les combos ComboDex","Examples in ComboDex combos","Ejemplos en los combos de ComboDex"],
"kc.enc.noCombo":["Aucun combo ComboDex ne contient encore cette notation.","No ComboDex combo contains this notation yet.","Ningún combo de ComboDex contiene aún esta notación."],
"kc.enc.ft":["Voir dans Frame Theater","See in Frame Theater","Ver en Frame Theater"],
"kc.enc.cmp":["Comparer entre deux jeux","Compare between two games","Comparar entre dos juegos"],
"kc.enc.rel":["Notions associées","Related notions","Nociones relacionadas"],
"kc.enc.patches":["Modifiée par des patchs","Changed by patches","Modificada por parches"],
"kc.enc.games":["Jeux concernés","Games","Juegos"],
"kc.enc.fav":["☆ Favori","☆ Favorite","☆ Favorito"],
"kc.enc.faved":["★ Favori","★ Favorite","★ Favorito"],
"kc.enc.study":["Marquer comme étudiée","Mark as studied","Marcar como estudiada"],
"kc.enc.studied":["✓ Étudiée","✓ Studied","✓ Estudiada"],
"kc.enc.note":["Ta note sur cette fiche","Your note on this entry","Tu nota sobre esta ficha"],
"kc.team.new":["Nouvelle équipe","New team","Nuevo equipo"],
"kc.team.none":["Aucune équipe enregistrée. Choisis un jeu puis crée ta première équipe.","No saved team. Pick a game then create your first team.","Ningún equipo guardado. Elige un juego y crea tu primer equipo."],
"kc.team.unsupported":["Pas de composition d’équipe documentée pour ce jeu.","No documented team composition for this game.","Sin composición de equipo documentada para este juego."],
"kc.team.name":["Nom de l’équipe","Team name","Nombre del equipo"],
"kc.team.defName":["Équipe {0}","Team {0}","Equipo {0}"],
"kc.team.dup":["Dupliquer","Duplicate","Duplicar"],
"kc.team.copy":["(copie)","(copy)","(copia)"],
"kc.team.up":["Monter","Move up","Subir"],
"kc.team.down":["Descendre","Move down","Bajar"],
"kc.team.already":["Ce personnage est déjà dans l’équipe.","This character is already on the team.","Este personaje ya está en el equipo."],
"kc.team.assist":["Assist","Assist","Assist"],
"kc.team.assistSlot":["défini par la position","set by the slot","definido por el puesto"],
"kc.team.fuse":["Fuse","Fuse","Fuse"],
"kc.team.notes":["Notes perso","Personal notes","Notas personales"],
"kc.team.tag":["Profil déclaré par toi","Profile you declared","Perfil declarado por ti"],
"kc.tag.":["Aucun","None","Ninguno"],
"kc.tag.offense":["Offensif","Offensive","Ofensivo"],
"kc.tag.defense":["Défensif","Defensive","Defensivo"],
"kc.tag.balanced":["Équilibré","Balanced","Equilibrado"],
"kc.tag.combo":["Orienté combos","Combo-oriented","Orientado a combos"],
"kc.team.profileNote":["ComboDex n’a pas de données documentées pour classer une équipe offensive ou défensive : seul ton profil déclaré est affiché.","ComboDex has no documented data to classify a team as offensive or defensive: only your declared profile is shown.","ComboDex no tiene datos documentados para clasificar un equipo: solo se muestra tu perfil declarado."],
"kc.team.order":["Ordre et relais (règles documentées)","Order and relays (documented rules)","Orden y relevos (reglas documentadas)"],
"kc.team.now":["Avec cet ordre","With this order","Con este orden"],
"kc.team.syn":["Synergies","Synergies","Sinergias"],
"kc.syn.confirmed":["Synergie confirmée par des combos ComboDex","Synergy confirmed by ComboDex combos","Sinergia confirmada por combos de ComboDex"],
"kc.syn.potential":["Compatibilité potentielle — non vérifiée (aucune donnée ComboDex)","Potential compatibility — unverified (no ComboDex data)","Compatibilidad potencial — no verificada (sin datos de ComboDex)"],
"kc.syn.incompat":["Incompatibilités documentées","Documented incompatibilities","Incompatibilidades documentadas"],
"kc.syn.noIncompat":["Aucune incompatibilité documentée dans les sources de ComboDex.","No incompatibility documented in ComboDex sources.","Ninguna incompatibilidad documentada en las fuentes de ComboDex."],
"kc.syn.team":["À l’échelle de l’équipe","Team-wide","A nivel de equipo"],
"kc.syn.combosOf":["{0} : {1} combo(s) ComboDex","{0}: {1} ComboDex combo(s)","{0}: {1} combo(s) de ComboDex"],
"kc.syn.needAssist":["{0} combo(s) demandent un assist (partenaire non précisé dans les données).","{0} combo(s) need an assist (partner not stated in the data).","{0} combo(s) necesitan un assist (compañero no indicado)."],
"kc.syn.res":["Ressources utilisées par ces combos : {0}","Resources used by these combos: {0}","Recursos usados por estos combos: {0}"],
"kc.syn.noScore":["Aucun score n’est calculé : seules les preuves présentes dans ComboDex sont affichées.","No score is computed: only evidence present in ComboDex is shown.","No se calcula ninguna puntuación: solo se muestran las pruebas presentes en ComboDex."],
"kc.team.combos":["Combos compatibles (personnages de l’équipe)","Compatible combos (team characters)","Combos compatibles (personajes del equipo)"],
"kc.team.link":["Associer à l’équipe","Link to team","Asociar al equipo"],
"kc.team.linked":["Associé","Linked","Asociado"],
"kc.team.noCombos":["Aucun combo ComboDex pour ces personnages.","No ComboDex combo for these characters.","Ningún combo de ComboDex para estos personajes."],
"kc.team.mu":["Matchups pertinents","Relevant matchups","Matchups relevantes"],
"kc.team.muNone":["Aucune situation de matchup enregistrée pour ces personnages.","No matchup situation saved for these characters.","Ninguna situación de matchup guardada para estos personajes."],
"kc.team.vs":["Équipe contre équipe","Team vs team","Equipo contra equipo"],
"kc.team.vsPick":["Choisir l’équipe adverse","Pick the opposing team","Elegir el equipo rival"],
"kc.team.vsNote":["Analyse automatique non disponible : pas assez de données documentées. La grille liste seulement tes situations enregistrées pour chaque duel.","Automatic analysis not available: not enough documented data. The grid only lists your saved situations for each duel.","Análisis automático no disponible: faltan datos documentados. La cuadrícula solo lista tus situaciones guardadas."],
"kc.team.cmp":["Comparer deux équipes","Compare two teams","Comparar dos equipos"],
"kc.team.partner":["Trouver des partenaires","Find partners","Buscar compañeros"],
"kc.team.partnerConfirmed":["Partenaires confirmés par des combos ComboDex","Partners confirmed by ComboDex combos","Compañeros confirmados por combos de ComboDex"],
"kc.team.partnerMine":["Déjà associés dans tes équipes (personnel)","Already paired in your teams (personal)","Ya asociados en tus equipos (personal)"],
"kc.team.partnerNone":["Aucune donnée documentée ne permet de recommander des partenaires pour ce personnage.","No documented data can recommend partners for this character.","Ningún dato documentado permite recomendar compañeros para este personaje."],
"kc.team.useIn":["Créer une équipe avec ce personnage","Create a team with this character","Crear un equipo con este personaje"],
"kc.team.members":["Personnages","Characters","Personajes"],
"kc.team.shared":["Personnages en commun","Shared characters","Personajes en común"],
"kc.slot.point":["Point","Point","Point"],
"kc.slot.second":["Second","Second","Second"],
"kc.slot.anchor":["Anchor","Anchor","Anchor"],
"kc.slot.shooter":["Shooter (6A)","Shooter (6A)","Shooter (6A)"],
"kc.slot.vertical":["Vertical (2A)","Vertical (2A)","Vertical (2A)"],
"kc.slot.assault":["Assault (4A)","Assault (4A)","Assault (4A)"],
"kc.slot.assist":["Assist","Assist","Assist"],
"kc.mu.a":["Personnage A","Character A","Personaje A"],
"kc.mu.b":["Personnage B","Character B","Personaje B"],
"kc.mu.swap":["Inverser","Swap","Invertir"],
"kc.mu.pick":["Choisis deux personnages pour consulter leur affrontement dans les deux sens.","Pick two characters to read the matchup both ways.","Elige dos personajes para consultar el enfrentamiento en ambos sentidos."],
"kc.mu.doc":["Situations documentées","Documented situations","Situaciones documentadas"],
"kc.mu.docNone":["Aucune situation documentée par une source fiable pour ce matchup. ComboDex n’en invente pas.","No situation documented by a reliable source for this matchup. ComboDex does not invent any.","Ninguna situación documentada por una fuente fiable. ComboDex no inventa ninguna."],
"kc.mu.mine":["Tes situations","Your situations","Tus situaciones"],
"kc.mu.view":["Point de vue : {0}","Point of view: {0}","Punto de vista: {0}"],
"kc.mu.add":["Ajouter une situation","Add a situation","Añadir una situación"],
"kc.mu.title":["Situation","Situation","Situación"],
"kc.mu.desc":["Description","Description","Descripción"],
"kc.mu.opts":["Options possibles","Possible options","Opciones posibles"],
"kc.mu.cond":["Conditions nécessaires","Required conditions","Condiciones necesarias"],
"kc.mu.src":["Sources (une adresse par ligne)","Sources (one URL per line)","Fuentes (una URL por línea)"],
"kc.mu.vid":["Références vidéo (une adresse par ligne)","Video references (one URL per line)","Referencias de vídeo (una URL por línea)"],
"kc.mu.notes":["Notes perso","Personal notes","Notas personales"],
"kc.mu.tested":["Testé en jeu par moi (reste une note personnelle)","Tested in game by me (still a personal note)","Probado en el juego por mí (sigue siendo nota personal)"],
"kc.mu.testedB":["Testé par toi","Tested by you","Probado por ti"],
"kc.mu.needTitle":["Donne au moins un titre de situation.","Give at least a situation title.","Indica al menos un título."],
"kc.mu.badUrl":["Adresse ignorée (seules http et https sont acceptées) : {0}","URL ignored (only http and https are accepted): {0}","URL ignorada (solo http y https): {0}"],
"kc.mu.empty":["Aucune situation enregistrée pour ce duel dans cette catégorie.","No situation saved for this duel in this category.","Ninguna situación guardada para este duelo en esta categoría."],
"kc.mu.q":["Retrouver une situation enregistrée","Find a saved situation","Buscar una situación guardada"],
"kc.mu.teams":["Équipes enregistrées avec ces personnages","Saved teams with these characters","Equipos guardados con estos personajes"],
"kc.mu.noTeam":["Aucune équipe enregistrée n’utilise ces personnages.","No saved team uses these characters.","Ningún equipo guardado usa estos personajes."],
"kc.mu.teamFilter":["Personnages de l’équipe : {0}","Team characters: {0}","Personajes del equipo: {0}"],
"kc.sit.neutral":["Neutral game","Neutral game","Neutral game"],
"kc.sit.approach":["Approche","Approach","Aproximación"],
"kc.sit.pressure":["Pression","Pressure","Presión"],
"kc.sit.defense":["Défense","Defense","Defensa"],
"kc.sit.antiair":["Anti-air","Anti-air","Antiaéreo"],
"kc.sit.corner":["Corner","Corner","Esquina"],
"kc.sit.resources":["Ressources","Resources","Recursos"],
"kc.sit.assists":["Assists","Assists","Assists"],
"kc.sit.punish":["Punitions","Punishes","Castigos"],
"kc.ch.random":["Défi aléatoire","Random challenge","Desafío aleatorio"],
"kc.ch.targeted":["Entraînement ciblé","Targeted practice","Entrenamiento dirigido"],
"kc.ch.review":["Révision","Review","Repaso"],
"kc.ch.history":["Historique","History","Historial"],
"kc.ch.draw":["Tirer un défi","Draw a challenge","Sacar un desafío"],
"kc.ch.pool":["{0} combo(s) compatibles avec ces filtres.","{0} combo(s) match these filters.","{0} combo(s) compatibles con estos filtros."],
"kc.ch.empty":["Aucun combo ComboDex ne correspond à ces filtres. Élargis les critères ou ajoute des combos dans Créer ou Importer.","No ComboDex combo matches these filters. Widen the criteria or add combos in Create or Import.","Ningún combo de ComboDex coincide. Amplía los criterios o añade combos en Crear o Importar."],
"kc.ch.diff":["Difficulté","Difficulty","Dificultad"],
"kc.ch.pos":["Position","Position","Posición"],
"kc.ch.meter":["Ressources","Resources","Recursos"],
"kc.ch.assist":["Assists","Assists","Assists"],
"kc.ch.cond":["Conditions particulières","Special conditions","Condiciones particulares"],
"kc.ch.start":["S’entraîner sur ce combo","Practice this combo","Entrenar este combo"],
"kc.ch.active":["Défi en cours","Current challenge","Desafío en curso"],
"kc.ch.resume":["Défi repris là où tu l’avais laissé.","Challenge resumed where you left it.","Desafío retomado donde lo dejaste."],
"kc.ch.goal":["Objectif de répétitions d’affilée","Goal: successes in a row","Objetivo: aciertos seguidos"],
"kc.ch.streak":["Série actuelle : {0} / {1}","Current streak: {0} / {1}","Racha actual: {0} / {1}"],
"kc.ch.fail":["Tentative ratée","Missed attempt","Intento fallido"],
"kc.ch.ok":["Réussi (déclaré)","Success (declared)","Logrado (declarado)"],
"kc.ch.goalDone":["Objectif atteint — réussite déclarée par toi.","Goal reached — success declared by you.","Objetivo logrado — acierto declarado por ti."],
"kc.ch.att":["Tentatives","Attempts","Intentos"],
"kc.ch.okM":["Réussites déclarées","Declared successes","Aciertos declarados"],
"kc.ch.okV":["Réussites vérifiées par analyse","Successes verified by analysis","Aciertos verificados por análisis"],
"kc.ch.okVNote":["0 — aucun système d’analyse automatique n’est encore branché à Combo Challenge.","0 — no automatic analysis system is connected to Combo Challenge yet.","0 — aún no hay ningún sistema de análisis automático conectado."],
"kc.ch.best":["Meilleure série","Best streak","Mejor racha"],
"kc.ch.notes":["Difficultés rencontrées","Difficulties encountered","Dificultades encontradas"],
"kc.ch.stop":["Terminer le défi","End challenge","Terminar el desafío"],
"kc.ch.cmds":["Commandes","Commands","Comandos"],
"kc.ch.noCmd":["Commandes non documentées : voir la vidéo du combo.","Commands not documented: see the combo video.","Comandos no documentados: ver el vídeo del combo."],
"kc.ch.conds":["Conditions","Conditions","Condiciones"],
"kc.ch.res":["Ressources","Resources","Recursos"],
"kc.ch.notions":["Notions techniques associées","Related technical notions","Nociones técnicas relacionadas"],
"kc.ch.openCombo":["Ouvrir la fiche du combo","Open the combo sheet","Abrir la ficha del combo"],
"kc.ch.reviewEmpty":["Rien à réviser : marque des combos « à retravailler » ou ajoute-les en favoris.","Nothing to review: mark combos “to rework” or add them to favorites.","Nada que repasar: marca combos «a repasar» o añádelos a favoritos."],
"kc.ch.reviewNote":["Ordre : à retravailler, puis favoris, puis en cours d’apprentissage. Aucun rythme imposé.","Order: to rework, then favorites, then learning. No schedule imposed.","Orden: a repasar, luego favoritos, luego en aprendizaje. Sin ritmo impuesto."],
"kc.ch.histEmpty":["Aucune tentative enregistrée pour ces filtres.","No attempt saved for these filters.","Ningún intento guardado para estos filtros."],
"kc.ch.last":["Dernière tentative","Last attempt","Último intento"],
"kc.ch.histOk":["Réussite déclarée","Declared success","Acierto declarado"],
"kc.ch.histFail":["Tentative ratée","Missed attempt","Intento fallido"],
"kc.ms.learning":["En cours d’apprentissage","Learning","En aprendizaje"],
"kc.ms.mastered":["Maîtrisé","Mastered","Dominado"],
"kc.ms.rework":["À retravailler","To rework","A repasar"],
"kc.ms.none":["Pas de statut","No status","Sin estado"],
"kc.pt.versions":["Versions","Versions","Versiones"],
"kc.pt.from":["De la version","From version","Desde la versión"],
"kc.pt.to":["À la version","To version","Hasta la versión"],
"kc.pt.cmp":["Comparaison entre versions","Comparison between versions","Comparación entre versiones"],
"kc.pt.cmpNone":["Aucun changement détaillé entre ces deux versions dans les données importées.","No detailed change between these versions in the imported data.","Ningún cambio detallado entre estas versiones en los datos importados."],
"kc.pt.q":["Chercher dans les notes de patch","Search the patch notes","Buscar en las notas de parche"],
"kc.pt.back":["← Jeux","← Games","← Juegos"],
"kc.pt.n":["{0} mise(s) à jour","{0} update(s)","{0} actualización(es)"],
"kc.pt.zero":["Pas encore de note","No notes yet","Aún sin notas"],
"kc.pt.none":["Aucune note de patch importée pour ce jeu. ComboDex n’affiche aucune nouveauté sans source.","No patch notes imported for this game. ComboDex shows no news without a source.","No hay notas de parche importadas para este juego. ComboDex no muestra novedades sin fuente."],
"kc.pt.empty":["Aucune note ne correspond à ces filtres.","No note matches these filters.","Ninguna nota coincide con estos filtros."],
"kc.pt.summary":["Résumé d’origine (anglais)","Original summary (English)","Resumen original (inglés)"],
"kc.pt.recheck":["Combos ComboDex à revérifier","ComboDex combos to re-check","Combos de ComboDex a reverificar"],
"kc.pt.recheckNote":["Enregistrés avant ce patch : ils nécessitent une nouvelle vérification. Ils ne sont pas déclarés invalides.","Saved before this patch: they need a new check. They are not declared invalid.","Guardados antes de este parche: necesitan una nueva verificación. No se declaran inválidos."],
"kc.pt.rechecked":["Marquer revérifié","Mark re-checked","Marcar reverificado"],
"kc.pt.recheckedDone":["Revérification notée (personnel).","Re-check noted (personal).","Reverificación anotada (personal)."],
"kc.pt.cat.content":["Contenu","Content","Contenido"],
"kc.pt.cat.system":["Mécaniques","Mechanics","Mecánicas"],
"kc.pt.cat.resources":["Ressources","Resources","Recursos"],
"kc.pt.cat.character":["Personnages","Characters","Personajes"],
"kc.pt.cat.other":["Autres","Other","Otros"],
"kc.pt.flag":["À revérifier depuis {0}","Re-check since {0}","Reverificar desde {0}"],
"kc.ma.title":["Character Mastery","Character Mastery","Character Mastery"],
"kc.ma.open":["Character Mastery","Character Mastery","Character Mastery"],
"kc.ma.tip":["Double-clic sur un personnage ou ce bouton : suivi de maîtrise.","Double-click a character or this button: mastery tracking.","Doble clic en un personaje o este botón: seguimiento de dominio."],
"kc.ma.indicator":["{0} combo(s) marqué(s) maîtrisé(s) sur {1} enregistré(s) pour ce personnage.","{0} combo(s) marked mastered out of {1} saved for this character.","{0} combo(s) marcados dominados de {1} guardados para este personaje."],
"kc.ma.calc":["Calcul : nombre de combos que tu as toi-même marqués « Maîtrisé » ÷ nombre de combos de ce personnage dans ComboDex. Rien d’autre n’entre dans le calcul ; ce n’est pas un niveau.","Calculation: number of combos you marked “Mastered” ÷ number of this character’s combos in ComboDex. Nothing else counts; it is not a level.","Cálculo: combos que marcaste «Dominado» ÷ combos de este personaje en ComboDex. Nada más cuenta; no es un nivel."],
"kc.ma.combos":["Combos enregistrés","Saved combos","Combos guardados"],
"kc.ma.noCombos":["Aucun combo ComboDex pour ce personnage.","No ComboDex combo for this character.","Ningún combo de ComboDex para este personaje."],
"kc.ma.chal":["Défis réalisés","Challenges done","Desafíos realizados"],
"kc.ma.chalLine":["{0} tentative(s), {1} réussite(s) déclarée(s), 0 réussite vérifiée par analyse.","{0} attempt(s), {1} declared success(es), 0 verified by analysis.","{0} intento(s), {1} acierto(s) declarados, 0 verificados por análisis."],
"kc.ma.notions":["Notions techniques étudiées","Technical notions studied","Nociones técnicas estudiadas"],
"kc.ma.notionsLine":["{0} fiche(s) étudiée(s) sur {1} concernant {2}.","{0} studied out of {1} entries about {2}.","{0} estudiadas de {1} fichas sobre {2}."],
"kc.ma.mu":["Matchups consultés","Matchups viewed","Matchups consultados"],
"kc.ma.teams":["Équipes avec ce personnage","Teams with this character","Equipos con este personaje"],
"kc.ma.patches":["Changements de patch documentés","Documented patch changes","Cambios de parche documentados"],
"kc.ma.notes":["Notes personnelles sur ce personnage","Personal notes on this character","Notas personales sobre este personaje"],
"kc.ma.go":["Aller à {0}","Go to {0}","Ir a {0}"],
"kc.ma.none":["Rien pour l’instant.","Nothing yet.","Nada por ahora."],
"kc.home.lead":["Encyclopedia · Team Building · Matchup Knowledge · Combo Challenge · Patch Observatory","Encyclopedia · Team Building · Matchup Knowledge · Combo Challenge · Patch Observatory","Encyclopedia · Team Building · Matchup Knowledge · Combo Challenge · Patch Observatory"],
"home.knowledge":["Knowledge Center — notions, équipes, matchups, défis et patchs, reliés à tes combos.","Knowledge Center — concepts, teams, matchups, challenges and patches, linked to your combos.","Knowledge Center — conceptos, equipos, matchups, desafíos y parches, enlazados a tus combos."],
"Knowledge Center":["Knowledge Center","Knowledge Center","Knowledge Center"],
"Character Mastery":["Character Mastery","Character Mastery","Character Mastery"],
"cmp.scope":["Comparer parmi","Compare among","Comparar entre"],
"cmp.scope.char":["Ce personnage","This character","Este personaje"],
"cmp.scope.game":["Tous les personnages du jeu","All characters of the game","Todos los personajes del juego"],
"cmp.scope.all":["Tous les jeux","All games","Todos los juegos"],
"cmp.need":["Il faut au moins deux combos dans cette sélection pour comparer.","At least two combos are needed in this selection to compare.","Se necesitan al menos dos combos en esta selección para comparar."],
"edit.req.sent":["Demande de modification envoyée : l’atelier la validera.","Edit request sent: the workshop will review it.","Solicitud de edición enviada: el taller la revisará."],
"edit.req.tip":["Les visiteurs envoient une demande, validée par l’atelier.","Visitors send a request, reviewed by the workshop.","Los visitantes envían una solicitud, revisada por el taller."],
"atelier.tree.edits":["Modifications demandées","Requested edits","Ediciones solicitadas"],
"atelier.edit.ok":["Appliquer","Apply","Aplicar"],
"atelier.edit.no":["Refuser","Refuse","Rechazar"],
"atelier.edit.fields":["Champs modifiés : {0}","Changed fields: {0}","Campos modificados: {0}"]
};
(function(){var I=window.CDX_I18N;if(!I)return;["fr","en","es"].forEach(function(lg,i){I[lg]=I[lg]||{};Object.keys(STR).forEach(function(k){I[lg][k]=STR[k][i]})})})();

/* ——— Utilitaires ——— */
function T_(k){return window.cdxT?window.cdxT(k):k}
function TF(k){var s=T_(k);for(var i=1;i<arguments.length;i++)s=s.split("{"+(i-1)+"}").join(String(arguments[i]));return s}
function lang(){return window.cdxLang==="en"?"en":window.cdxLang==="es"?"es":"fr"}
function tr(x){if(x==null)return"";if(typeof x==="string")return x;return x[lang()]||x.en||x.fr||""}
function E_(s){return l(s)}
function now(){return new Date().toISOString()}
function uid(p){return p+"-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,8)}
function locale(){return lang()==="en"?"en-GB":lang()==="es"?"es-ES":"fr-FR"}
function fmtDay(ymd){try{return new Date(ymd+"T12:00:00Z").toLocaleDateString(locale(),{year:"numeric",month:"long",day:"numeric",timeZone:"UTC"})}catch(e){return ymd}}
function fmtIso(iso){try{return new Date(iso).toLocaleString(locale(),{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}catch(e){return iso}}
function gName(g){return b[g]?b[g].name:g}
function cName(c){try{return charLabel(c)}catch(e){return c}}
function norm(s){return w(s)}
function words(s){return norm(s).split(" ").filter(Boolean)}
function hit(blob,q){var ws=words(q);if(!ws.length)return true;return ws.every(function(x){return blob.indexOf(x)>=0})}
function roster(g){try{return T(g).map(function(r){return r.name})}catch(e){return[]}}
function opt(v,label,sel){return'<option value="'+E_(v)+'"'+(String(v)===String(sel)?" selected":"")+">"+E_(label)+"</option>"}
function safeUrl(u){try{var x=new URL(String(u||"").trim());return/^https?:$/.test(x.protocol)?x.href:""}catch(e){return""}}
function srcLinks(keys){return(keys||[]).map(function(k){var s=D.SRC[k];return s?'<a href="'+E_(s.u)+'" target="_blank" rel="noopener noreferrer">'+E_(s.t)+" ↗</a>":""}).filter(Boolean).join("<br>")}
function badge(kind){return'<span class="kc-badge kc-b-'+kind+'">'+E_(T_("kc.badge."+kind))+"</span>"}
function combosAll(){return(typeof d!=="undefined"&&d&&Array.isArray(d.combos))?d.combos:[]}
function comboBlob(c){var v={tokens:[],desc:""};try{v=comboView(c)}catch(e){}return[(v.tokens||[]).join(" "),v.desc||"",c.name||"",c.notes||""].join(" ")}
function comboText(c){var v={tokens:[]};try{v=comboView(c)}catch(e){}return(v.tokens||[]).join(" ")+" "+(v.desc||"")}
function trainOf(id){var t=(d.training||{})[id];return t&&typeof t==="object"?t:{best:0,attempts:0,successes:0}}

/* ——— Persistance ——— */
var corrupt=false;
function blank(){return{v:1,fav:[],studied:{},encNotes:{},teams:[],sits:[],seen:[],chal:{},hist:[],active:null,mastery:{},charNotes:{},patchOk:{},ui:{}}}
function S_(x,max){return typeof x==="string"?x.slice(0,max):""}
function I_(x,min,max,def){x=Math.round(Number(x));return isFinite(x)?Math.min(max,Math.max(min,x)):def}
function iso(x){return typeof x==="string"&&!isNaN(Date.parse(x))?x:now()}
function okId(x){return typeof x==="string"&&/^[\w.#|:-]{1,120}$/.test(x)}
function encOk(x){return typeof x==="string"&&(!!ENC[x]||/^inf:[a-z0-9-]{1,100}$/.test(x))}
function objMap(o,fn){var r={};if(o&&typeof o==="object"&&!Array.isArray(o))Object.keys(o).forEach(function(k){if(okId(k)||k.length<200){var v=fn(o[k],k);if(v!==undefined)r[k]=v}});return r}
function clean(j){
  var z=blank();if(!j||typeof j!=="object")return z;
  z.fav=Array.isArray(j.fav)?j.fav.filter(encOk):[];
  z.studied=objMap(j.studied,function(v,k){return encOk(k)?iso(v):undefined});
  z.encNotes=objMap(j.encNotes,function(v,k){return encOk(k)&&typeof v==="string"&&v?v.slice(0,4000):undefined});
  z.teams=(Array.isArray(j.teams)?j.teams:[]).slice(0,200).map(function(t){
    if(!t||!D.RULES[t.game])return null;var R=D.RULES[t.game];
    var mem=(Array.isArray(t.members)?t.members:[]).slice(0,R.size).map(function(m){m=m||{};return{char:S_(m.char,80),assist:R.assists&&R.assists.indexOf(m.assist)>=0?m.assist:""}});
    while(mem.length<R.size)mem.push({char:"",assist:""});
    return{id:okId(t.id)?t.id:uid("t"),name:S_(t.name,60)||"Team",game:t.game,members:mem,fuse:R.fuse&&R.fuse.indexOf(t.fuse)>=0?t.fuse:"",tag:TEAM_TAGS.indexOf(t.tag)>=0?t.tag:"",notes:S_(t.notes,4000),combos:(Array.isArray(t.combos)?t.combos:[]).filter(okId).slice(0,200),createdAt:iso(t.createdAt),updatedAt:iso(t.updatedAt)};
  }).filter(Boolean);
  z.sits=(Array.isArray(j.sits)?j.sits:[]).slice(0,2000).map(function(s){
    if(!s||!D.RULES[s.game]&&!b[s.game])return null;
    var urls=function(a){return(Array.isArray(a)?a:[]).map(safeUrl).filter(Boolean).slice(0,10)};
    return{id:okId(s.id)?s.id:uid("s"),game:s.game,a:S_(s.a,80),b:S_(s.b,80),cat:SIT_CATS.indexOf(s.cat)>=0?s.cat:"neutral",title:S_(s.title,160),desc:S_(s.desc,4000),opts:S_(s.opts,4000),cond:S_(s.cond,2000),src:urls(s.src),vids:urls(s.vids),notes:S_(s.notes,4000),tested:!!s.tested,createdAt:iso(s.createdAt),updatedAt:iso(s.updatedAt)};
  }).filter(function(s){return s&&s.a&&s.b&&s.title});
  z.seen=(Array.isArray(j.seen)?j.seen:[]).slice(0,80).map(function(s){return s&&b[s.game]?{game:s.game,a:S_(s.a,80),b:S_(s.b,80),at:iso(s.at)}:null}).filter(Boolean);
  z.chal=objMap(j.chal,function(v){if(!v||typeof v!=="object")return undefined;return{goal:I_(v.goal,1,100,5),streak:I_(v.streak,0,1000,0),okV:0,notes:S_(v.notes,4000)}});
  z.hist=(Array.isArray(j.hist)?j.hist:[]).slice(-800).map(function(h){return h&&okId(h.id)&&b[h.game]?{id:h.id,game:h.game,char:S_(h.char,80),ok:!!h.ok,src:"manual",at:iso(h.at)}:null}).filter(Boolean);
  z.active=j.active&&okId(j.active.id)?{id:j.active.id,goal:I_(j.active.goal,1,100,5),streak:I_(j.active.streak,0,1000,0)}:null;
  z.mastery=objMap(j.mastery,function(v){return MSTATES.indexOf(v)>=0?v:undefined});
  z.charNotes=objMap(j.charNotes,function(v){return typeof v==="string"&&v?v.slice(0,6000):undefined});
  z.patchOk=objMap(j.patchOk,function(v){return iso(v)});
  z.ui=objMap(j.ui,function(v){return typeof v==="string"?v.slice(0,200):typeof v==="boolean"?v:undefined});
  return z;
}
function load(){
  var raw=null;try{raw=localStorage.getItem(KEY)}catch(e){}
  if(!raw)return blank();
  try{return clean(JSON.parse(raw))}catch(e){try{localStorage.setItem(KEY+"-corrupt-"+Date.now(),raw)}catch(x){}corrupt=true;return blank()}
}
var S=load();
function save(){try{localStorage.setItem(KEY,JSON.stringify(S));return true}catch(e){try{g(T_("kc.saveErr"),true)}catch(x){}return false}}
var saveSoon=(function(){var tm=0;return function(){clearTimeout(tm);tm=setTimeout(save,300)}})();
function U(k,def){var v=S.ui[k];return v===undefined?def:v}
function setU(k,v){S.ui[k]=v}

/* ——— Liens entre modules ——— */
function openCombo(id){var c=L(id);if(!c)return;try{G()}catch(e){}o.game=c.game;o.char=c.character;o.focusId=c.id;o.watchId=c.video?c.id:null;j("people")}
function openChar(game,ch){try{G()}catch(e){}if(b[game])o.game=game;o.char=ch;o.watchId=null;j("people")}
function openFrames(game,ch){try{G()}catch(e){}if(b[game])o.game=game;if(ch)o.char=ch;j("frames")}
function go(view,patch){if(patch)Object.keys(patch).forEach(function(k){S.ui[k]=patch[k]});save();try{G()}catch(e){}o.kcView=VIEWS.indexOf(view)>=0?view:"hub";j("knowledge")}
function view(){return VIEWS.indexOf(o.kcView)>=0?o.kcView:"hub"}

/* ——— Rendu principal ——— */
function root(){return a("knowledge")}
function keepFocus(fn){var ae=document.activeElement,id=ae&&ae.id,s=null,e2=null;try{s=ae.selectionStart;e2=ae.selectionEnd}catch(x){}fn();if(id){var n=document.getElementById(id);if(n&&n!==document.activeElement){n.focus();try{if(s!=null&&n.setSelectionRange)n.setSelectionRange(s,e2)}catch(x){}}}}
function render(){var r=root();if(!r)return;if(!r.dataset.kcBound){bind(r);r.dataset.kcBound="1"}if(corrupt){corrupt=false;try{g(T_("kc.corrupt"),true)}catch(e){}}var keep={};["kcEncList","kcEncDetail"].forEach(function(k){var n=a(k);if(n)keep[k]=[n.scrollTop,n.scrollLeft]});keepFocus(function(){r.innerHTML=head()+(view()==="hub"?"":'<div class="kc-panel" id="kcPanel" role="tabpanel" aria-labelledby="kcTab-'+view()+'">'+panel(view())+"</div>")});Object.keys(keep).forEach(function(k){var n=a(k);if(n){n.scrollTop=keep[k][0];n.scrollLeft=keep[k][1]}});try{hydratePortraits()}catch(e){}}
function head(){
  var v=view();
  return'<div class="panel section kc-head"><div class="row between kc-title-row"><h2 class="kc-title"><span class="kc-target" aria-hidden="true"></span>'+E_(T_("kc.name"))+' <span class="beta-tag">'+E_(T_("kc.beta"))+'</span></h2></div>'
   +'<p class="muted small">'+E_(T_("kc.lead"))+'</p>'
   +(v==="hub"?'<nav class="kc-hub" aria-label="'+E_(T_("kc.name"))+'">'+VIEWS.map(function(x){return'<button type="button" class="kc-hub-tile" data-kc="view" data-v="'+x+'"><span class="kc-hub-ico" aria-hidden="true">'+viewIcon(x)+'</span><span class="kc-hub-name">'+E_(VIEW_NAME[x])+'</span><span class="kc-hub-desc">'+E_(T_("kc.vd."+x))+"</span></button>"}).join("")+"</nav>":'<div class="kc-tabs" role="tablist" aria-label="'+E_(T_("kc.name"))+'">'+VIEWS.map(function(x){return'<button type="button" role="tab" id="kcTab-'+x+'" class="kc-tab" data-kc="view" data-v="'+x+'" aria-selected="'+(x===v)+'" tabindex="'+(x===v?0:-1)+'"><span aria-hidden="true">'+viewIcon(x)+"</span> "+E_(VIEW_NAME[x])+"</button>"}).join("")+"</div>")+"</div>";
}
function viewHead(v){return'<div class="kc-view-head"><span class="kc-view-ico" aria-hidden="true">'+viewIcon(v)+'</span><div><h3 class="kc-h">'+E_(VIEW_NAME[v])+'</h3><p class="muted small">'+E_(T_("kc.vd."+v))+"</p></div></div>"}
function panel(v){try{return viewHead(v)+panelBody(v)}catch(e){console.warn("Knowledge Center",e);return'<div class="empty">'+E_(String(e&&e.message||e))+"</div>"}}
function panelBody(v){try{return v==="teams"?pTeams():v==="matchups"?pMatchups():v==="challenge"?pChallenge():v==="patches"?pPatches():pEnc()}catch(e){console.warn("Knowledge Center",e);return'<div class="empty">'+E_(String(e&&e.message||e))+"</div>"}}

/* ——— Recherche commune ——— */
function encBlob(x){if(!x._blob){var parts=[x.term,x.alias.join(" "),x.ex,x.cat];["fr","en","es"].forEach(function(lg){parts.push((x.txt[lg]||[]).join(" "))});Object.keys(x.per).forEach(function(gm){parts.push(gName(gm));parts.push(tr(x.per[gm]))});x.games.forEach(function(gm){parts.push(gName(gm))});x._blob=norm(parts.join(" "))}return x._blob}
function globalResults(q){
  var groups=[];
  var enc=D.ENTRIES.filter(function(x){return hit(encBlob(x),q)}).concat((INF||[]).filter(function(x){return hit(infBlob(x),q)})).slice(0,12);
  groups.push(["encyclopedia",enc.map(function(x){return'<button type="button" class="kc-res" data-kc="open-enc" data-id="'+E_(x.id)+'"><b>'+E_(x.term)+'</b> <span class="muted small">'+E_(T_("kc.cat."+x.cat))+"</span></button>"})]);
  var teams=S.teams.filter(function(t){return hit(norm([t.name,gName(t.game),t.notes,t.members.map(function(m){return m.char+" "+cName(m.char)}).join(" ")].join(" ")),q)}).slice(0,12);
  groups.push(["teams",teams.map(function(t){return'<button type="button" class="kc-res" data-kc="open-team" data-id="'+E_(t.id)+'"><b>'+E_(t.name)+'</b> <span class="muted small">'+E_(gName(t.game))+" · "+E_(t.members.filter(function(m){return m.char}).map(function(m){return cName(m.char)}).join(", "))+"</span></button>"})]);
  var sits=S.sits.filter(function(s){return hit(norm([s.title,s.desc,s.opts,s.cond,s.notes,s.a,s.b,cName(s.a),cName(s.b),gName(s.game),T_("kc.sit."+s.cat)].join(" ")),q)}).slice(0,12);
  groups.push(["matchups",sits.map(function(s){return'<button type="button" class="kc-res" data-kc="open-sit" data-id="'+E_(s.id)+'"><b>'+E_(s.title)+'</b> <span class="muted small">'+E_(cName(s.a))+" vs "+E_(cName(s.b))+" · "+E_(T_("kc.sit."+s.cat))+"</span></button>"})]);
  var combos=combosAll().filter(function(c){return hit(norm([c.name,c.character,cName(c.character),gName(c.game),comboBlob(c)].join(" ")),q)}).slice(0,12);
  groups.push(["challenge",combos.map(function(c){return'<button type="button" class="kc-res" data-kc="start" data-id="'+E_(c.id)+'"><b>'+E_(c.name)+'</b> <span class="muted small">'+E_(gName(c.game))+" · "+E_(cName(c.character))+"</span></button>"})]);
  var pts=[];D.PATCHES.forEach(function(p){var ok=hit(norm([p.title,p.ver,p.summary||"",gName(p.game)].join(" ")),q);var ch=p.changes.filter(function(c){return hit(norm([tr(c.txt),c.chars.join(" "),c.chars.map(cName).join(" "),T_("kc.pt.cat."+c.cat)].join(" ")),q)});if(ok||ch.length)pts.push([p,ch.length])});
  groups.push(["patches",pts.slice(0,12).map(function(x){var p=x[0];return'<button type="button" class="kc-res" data-kc="open-patch" data-id="'+E_(p.id)+'"><b>'+E_(gName(p.game))+" — "+E_(p.ver||p.title)+'</b> <span class="muted small">'+E_(fmtDay(p.date))+"</span></button>"})]);
  var any=groups.some(function(gr){return gr[1].length});
  if(!any)return'<div class="empty">'+E_(T_("kc.search.none"))+"</div>";
  return groups.filter(function(gr){return gr[1].length}).map(function(gr){return'<div class="kc-gres-group"><h3 class="kc-h">'+VIEW_ICON[gr[0]]+" "+E_(VIEW_NAME[gr[0]])+' <span class="count">'+gr[1].length+'</span></h3><div class="kc-res-list">'+gr[1].join("")+"</div></div>"}).join("");
}

/* ——— Encyclopedia ——— */
function rxOf(x){if(!x.rx)return null;if(!x._rx)try{x._rx=new RegExp(x.rx)}catch(e){x._rx=null}return x._rx}
function combosFor(x,games){var rx=rxOf(x);if(!rx)return[];return combosAll().filter(function(c){return(games||x.games).indexOf(c.game)>=0&&rx.test(comboText(c))})}
function notionsFor(c){return D.ENTRIES.filter(function(x){var rx=rxOf(x);return rx&&x.games.indexOf(c.game)>=0&&rx.test(comboText(c))})}
/* Glossaire d'Infil : chargé à la première ouverture de l'Encyclopedia. */
var INF=null,INF_BY={},INF_T={},infLoading=false;
var INF_GAMES={SF:["sf6"],GG:["ggst"],MVC:["mvc2","umvc3"],DBFZ:["dbfz"],"2XKO":["2xko"],BB:["bbcf"],TK:["t8"],MK:["mkxl"],FF:["cotw"]};
var INF_LABEL={SSB:"Smash",TK:"Tekken",MK:"MK",BB:"BlazBlue",MB:"Melty Blood",VF:"Virtua Fighter",KI:"Killer Instinct",SC:"Soulcalibur",UNI:"Under Night",KOF:"KOF",FF:"Fatal Fury",SS:"Samurai Shodown",INJ:"Injustice"};
function slug(s){return norm(s).replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,90)||"x"}
function termKey(s){return norm(String(s).split(" — ")[0].replace(/\([^)]*\)/g,""))}
function entry(id){return ENC[id]||INF_BY[id]||null}
function loadInfil(){
  if(INF||infLoading)return;infLoading=true;
  var me=document.querySelector('script[src*="cdx-kc.js"]'),v=me&&(me.src.match(/[?&]v=([^&]+)/)||[])[1];
  var sc=document.createElement("script");sc.src="cdx-kc-infil.js"+(v?"?v="+v:"");sc.async=true;
  sc.onload=function(){buildInf();if(o.tab==="knowledge")rerender(true)};sc.onerror=function(){infLoading=false};
  var st=document.createElement("script");st.src="cdx-kc-infil-tr.js"+(v?"?v="+v:"");st.async=true;
  st.onload=function(){if(INF&&o.tab==="knowledge")rerender(true)};
  document.head.appendChild(st);document.head.appendChild(sc);
}
function infText(x){var T=(window.CDX_INFIL_TR||{})[x.term],l=lang();return T&&T[l]?{t:T[l],l:l}:{t:x.def,l:"en"}}
function buildInf(){
  var cur={};D.ENTRIES.forEach(function(x){x.term.split(" — ")[0].split(" / ").forEach(function(t){var k=termKey(t);if(k&&!cur[k])cur[k]=x})});
  INF=[];(window.CDX_INFIL||[]).forEach(function(r){
    var id="inf:"+slug(r[0]);while(INF_BY[id])id+="-x";
    var games=[],labels=[];(r[4]||[]).forEach(function(c){if(INF_GAMES[c])INF_GAMES[c].forEach(function(gm){if(games.indexOf(gm)<0)games.push(gm)});else if(INF_LABEL[c])labels.push(INF_LABEL[c])});
    var it={id:id,term:r[0],def:r[1],alias:r[2]||[],jp:r[3]||"",games:games,labels:labels,cat:D.CATS.indexOf(r[5])>=0?r[5]:"basics",inf:true};
    INF_BY[id]=it;
    var m=cur[termKey(r[0])];
    if(m&&!m.infRow){m.infRow=it;INF_T[termKey(r[0])]=m.id}else{INF.push(it);INF_T[termKey(r[0])]=id}
    it.alias.forEach(function(a2){var k=termKey(a2);if(!INF_T[k])INF_T[k]=INF_T[termKey(r[0])]});
  });
}
function infBlob(x){var T=(window.CDX_INFIL_TR||{})[x.term];if(!x._blob||x._blobT!==!!T){x._blobT=!!T;x._blob=norm([x.term,x.alias.join(" "),x.def,T?(T.fr||"")+" "+(T.es||""):"",x.labels.join(" "),x.games.map(gName).join(" ")].join(" "))}return x._blob}

/* Logos de jeu : une seule feuille de style, chaque logo est une classe. */
function logoCss(){if(document.getElementById("kcLogoCss"))return;var L=window.CDX_LOGOS||{},css="";Object.keys(L).forEach(function(k){css+=".kc-gl-"+k.replace(/\W/g,"")+"{background-image:url("+L[k]+")}"});var st=document.createElement("style");st.id="kcLogoCss";st.textContent=css;document.head.appendChild(st)}
function gl(gm){var nm=b[gm]?(b[gm].short||b[gm].name):gm;return(window.CDX_LOGOS||{})[gm]?'<i class="kc-gl kc-gl-'+gm.replace(/\W/g,"")+'" role="img" aria-label="'+E_(nm)+'" title="'+E_(b[gm]?b[gm].name:nm)+'"></i>':'<i class="kc-gt">'+E_(nm)+"</i>"}
function gParen(x){var parts=x.games.map(gl).concat((x.labels||[]).map(function(t){return'<i class="kc-gt">'+E_(t)+"</i>"}));return parts.length?'<span class="kc-gp">'+parts.join("")+"</span>":""}

/* Touches : notation → manette choisie. */
var ARW={"1":"↙","2":"↓","3":"↘","4":"←","5":"●","6":"→","7":"↖","8":"↑","9":"↗"},PI={ps:0,xb:1,sw:2};
function autoPad(){try{var gs=navigator.getGamepads?navigator.getGamepads():[];for(var i=0;i<gs.length;i++){var g0=gs[i];if(!g0)continue;var id=g0.id.toLowerCase();if(/xbox|xinput|045e/.test(id))return"xb";if(/dualsense|dualshock|playstation|054c/.test(id))return"ps";if(/pro controller|nintendo|057e/.test(id))return"sw"}}catch(e){}return""}
function padMode(){var m=U("pad","");return PI[m]!=null||m==="num"?m:(autoPad()||"num")}
function inpBtn(gm,btn,mode){var P=D.PADS[gm],v=mode!=="num"&&P&&P.b[btn];return v&&v[PI[mode]]||btn}
function inpItem(gm,item,mode){return item.split("/").map(function(p){var h=/^\[(.+)\]$/.exec(p);if(h)return T_("kc.inp.hold")+" "+inpBtn(gm,h[1],mode);if(/^[1-9]+$/.test(p))return mode==="num"?p:p.split("").map(function(c){return ARW[c]}).join("");return inpBtn(gm,p,mode)}).join(" / ")}
function inpCombo(gm,tok,mode){
  var parts=tok.split("+"),txt=parts.map(function(p){return inpItem(gm,p,mode)}).join(" + ");
  var P=D.PADS[gm];if(mode==="num"||!P)return txt;
  var dirs=parts.filter(function(p){return/^[1-9]+$/.test(p)}),btns=parts.filter(function(p){return!/^[1-9]+$/.test(p)});
  var sc=btns.length>1&&P.sc[btns.slice().sort().join("+")];
  return sc?txt+" "+T_("kc.inp.or")+" "+(dirs.length?inpItem(gm,dirs.join(""),mode)+" + ":"")+sc[PI[mode]]:txt;
}
function inpText(gm,s,mode){
  if(s==null)return T_("kc.inp.undoc");if(s==="-")return T_("kc.inp.none");
  var P=D.PADS[gm];if(mode!=="num"&&P&&P.plat.indexOf(mode)<0)return T_("kc.inp.noPlat")+" · "+inpText(gm,s,"num");
  return s.split(" | ").map(function(alt){var out=[],ctx=[];alt.split(" ").forEach(function(tk){if(!tk)return;if(tk===">")out.push(T_("kc.inp.then"));else if(tk.charAt(0)==="@")ctx.push(T_("kc.inp.ctx."+tk.slice(1)));else if(tk.charAt(0)==="*")out.push(T_("kc.inp.txt."+tk.slice(1)));else out.push(inpCombo(gm,tk,mode))});return out.join(" ")+(ctx.length?" ("+ctx.join(", ")+")":"")}).join("  "+T_("kc.inp.or")+"  ");
}
function inpLine(x,gm){if(!x.inp||!(gm in x.inp)&&x.games.indexOf(gm)<0)return"";var s=x.inp[gm];return s==="-"?"":'<span class="kc-inp">'+E_(inpText(gm,s,padMode()))+"</span>"}
function listInp(x){if(x.inf||!x.inp)return"";var gm=U("encGame","");if(gm)return inpLine(x,gm);return x.games.length===1?inpLine(x,x.games[0]):""}

var CAT_ICON={
  basics:'<path d="M4 5a2 2 0 0 1 2-2h5v17H6a2 2 0 0 0-2 2zM20 5a2 2 0 0 0-2-2h-5v17h5a2 2 0 0 1 2 2z"/>',
  notation:'<rect x="2" y="6" width="20" height="12" rx="6"/><path d="M7 10v4M5 12h4M15 11h.01M18 13h.01"/>',
  movement:'<path d="M12 2v20M2 12h20M9 5l3-3 3 3M9 19l3 3 3-3M5 9l-3 3 3 3M19 9l3 3-3 3"/>',
  combo:'<circle cx="6" cy="18" r="2.5"/><circle cx="6" cy="5" r="2.5"/><circle cx="18" cy="7" r="2.5"/><path d="M6 7.5v8M18 9.5c0 5-12 2-12 6"/>',
  offense:'<path d="M14.5 17.5 3 6V3h3l11.5 11.5M13 19l6-6M16 16l4 4M19 21l2-2M9.5 6.5 14 2h3v3l-4.5 4.5M5 14l-2 2 2 2 2-2"/>',
  team:'<circle cx="9" cy="8" r="3.5"/><path d="M2 21a7 7 0 0 1 14 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 4 7"/>',
  defense:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  resources:'<rect x="2" y="7" width="18" height="10" rx="2"/><path d="M22 11v2M6 10v4M10 10v4"/>',
  system:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>',
  frames:'<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2M10 2h4"/>',
  all:'<path d="M4 6h16M4 12h16M4 18h10"/>'
};
CAT_ICON.versus='<circle cx="6" cy="7" r="3"/><circle cx="18" cy="7" r="3"/><path d="M1.5 20a4.5 4.5 0 0 1 9 0M13.5 20a4.5 4.5 0 0 1 9 0M13 10l-2.5 3.5h3L11 17"/>';
CAT_ICON.radar='<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><path d="M12 12l6.5-6.5"/><circle cx="12" cy="12" r="1"/>';
var VIEW_CAT={encyclopedia:"basics",teams:"team",matchups:"versus",challenge:"notation",patches:"radar"};
function viewIcon(v){return catIcon(VIEW_CAT[v])}
function catIcon(c){return'<svg class="kc-ico" viewBox="0 0 24 24" aria-hidden="true">'+(CAT_ICON[c]||CAT_ICON.all)+"</svg>"}

function encPool(){
  var gm=U("encGame",""),fav=U("encFav",false),st=U("encStudied",false);
  var ok=function(x){return(!gm||x.games.indexOf(gm)>=0)&&(!fav||S.fav.indexOf(x.id)>=0)&&(!st||S.studied[x.id])};
  return{ours:D.ENTRIES.filter(ok),inf:(INF||[]).filter(ok)};
}
function encFiltered(){
  var cat=U("encCat",""),q=U("encQ","").trim(),p=encPool();
  var inCat=function(x){return!cat||cat==="all"||x.cat===cat};
  return{ours:p.ours.filter(function(x){return inCat(x)&&hit(encBlob(x),q)}),inf:p.inf.filter(function(x){return inCat(x)&&hit(infBlob(x),q)}).sort(function(a1,b1){return a1.term.localeCompare(b1.term)})};
}
function encBar(){
  var gm=U("encGame",""),pm=padMode();
  return'<div class="kc-enc-bar"><div class="kc-enc-search"><svg class="kc-ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg><input id="kcEncQ" type="search" autocomplete="off" value="'+E_(U("encQ",""))+'" placeholder="'+E_(T_("kc.enc.q"))+'" aria-label="'+E_(T_("kc.enc.q"))+'"></div>'
   +'<div class="kc-enc-tools"><select id="kcEncGame" aria-label="'+E_(T_("kc.game"))+'">'+opt("",T_("kc.allGames"),gm)+D.GAMES.map(function(x){return opt(x,gName(x),gm)}).join("")+"</select>"
   +'<select id="kcEncPad" aria-label="'+E_(T_("kc.enc.pad"))+'">'+["num","ps","xb","sw"].map(function(k){return opt(k,T_("kc.enc.pad")+" : "+T_("kc.pad."+k),pm)}).join("")+"</select>"
   +'<label class="kc-check"><input type="checkbox" id="kcEncFav"'+(U("encFav",false)?" checked":"")+"> "+E_(T_("kc.enc.favOnly"))+"</label>"
   +'<label class="kc-check"><input type="checkbox" id="kcEncStudied"'+(U("encStudied",false)?" checked":"")+"> "+E_(T_("kc.enc.studiedOnly"))+"</label></div></div>";
}
function termHtml(t){var m=/^(.*?)\s*(\([^()]*\))\s*$/.exec(t||"");return m&&m[1]?E_(m[1])+'<span class="kc-term-alt">'+E_(m[2])+"</span>":E_(t)}
function encItem(x,open){
  var sel=open&&open.id===x.id;
  return'<button type="button" class="kc-item'+(sel?" sel":"")+'" data-kc="open-enc" data-id="'+E_(x.id)+'" aria-current="'+!!sel+'"><span class="kc-item-main"><b>'+termHtml(x.term)+"</b>"+(S.fav.indexOf(x.id)>=0?' <span aria-hidden="true">★</span>':"")+(S.studied[x.id]?' <span class="good" aria-hidden="true">✓</span>':"")+"</span></button>";
}
function pEnc(){
  logoCss();loadInfil();
  var cat=U("encCat",""),q=U("encQ","").trim(),open=entry(U("encOpen",""));
  if(open&&!cat&&!q){cat=open.cat;setU("encCat",cat)}
  if(!cat&&!q&&!U("encFav",false)&&!U("encStudied",false)){
    var p=encPool(),n=function(c){return p.ours.concat(p.inf).filter(function(x){return c==="all"||x.cat===c}).length};
    return encBar()+'<div class="kc-enc-home">'+D.CATS.concat(["all"]).map(function(c){var nm=c==="all"?T_("kc.enc.az"):T_("kc.cat."+c),ex=c==="all"?T_("kc.enc.azex"):T_("kc.catex."+c);return'<button type="button" class="kc-enc-tile'+(c==="all"?" kc-enc-all":"")+'" data-kc="enc-cat" data-c="'+c+'">'+catIcon(c)+'<b>'+E_(nm)+'</b><span class="muted small">'+E_(ex)+'</span><span class="kc-enc-n">'+n(c)+"</span></button>"}).join("")+"</div>"
     +(INF?"":'<p class="muted small kc-enc-load">'+E_(T_("kc.enc.loading"))+"</p>");
  }
  var f=encFiltered(),all=f.ours.concat(f.inf);
  if(!open||all.indexOf(open)<0&&!(open.inf&&!INF))open=all[0]||null;
  var title=q?T_("kc.enc.results"):cat==="all"||!cat?T_("kc.enc.az"):T_("kc.cat."+cat);
  var items=(f.ours.length?'<div class="kc-list-h">'+E_(T_("kc.enc.ours"))+"</div>"+f.ours.map(function(x){return encItem(x,open)}).join(""):"")
   +(f.inf.length?'<div class="kc-list-h">'+E_(T_("kc.enc.infil"))+"</div>"+f.inf.map(function(x){return encItem(x,open)}).join(""):"")
   +(INF?"":'<div class="muted small kc-enc-load">'+E_(T_("kc.enc.loading"))+"</div>");
  var pick='<details class="kc-pick"><summary>'+E_(T_("kc.enc.ours"))+' <span class="kc-pick-n">'+all.length+"</span></summary>"
   +'<div class="kc-list" id="kcEncList" aria-label="'+E_(TF("kc.enc.count",all.length))+'">'+(all.length||!INF?items:'<div class="empty">'+E_(T_("kc.enc.empty"))+"</div>")+"</div></details>";
  var head='<div class="kc-pick-row"><h3 class="kc-pick-term">'+(open?termHtml(open.term):E_(T_("kc.enc.pick")))+'</h3><span class="kc-h kc-pick-cat">'+(cat&&!q?catIcon(cat):"")+E_(title)+' <span class="count">'+all.length+"</span></span>"+(open?encActions(open):"")+"</div>";
  return encBar()+'<div class="kc-enc-crumb"><button type="button" class="tiny" data-kc="enc-home">'+E_(T_("kc.enc.back"))+"</button>"+pick+"</div>"
   +'<div class="kc-detail kc-enc-page" id="kcEncDetail">'+head+(open?(open.inf?infCard(open):encCard(open)):'<div class="empty">'+E_(T_("kc.enc.pick"))+"</div>")+"</div>";
}
function infDef(s){return E_(s).replace(/⟦([^|⟧]*)\|([^⟧]*)⟧/g,function(m,t,lab){var id=INF_T[termKey(t)];return id?'<button type="button" class="kc-link" data-kc="open-enc" data-id="'+E_(id)+'">'+lab+"</button>":lab}).replace(/\n/g,"<br>")}
function infUrl(x){return"https://glossary.infil.net/?t="+encodeURIComponent(x.term)}
function encActions(x){var fav=S.fav.indexOf(x.id)>=0,st=!!S.studied[x.id];return'<div class="row kc-actions"><button type="button" class="tiny" data-kc="enc-fav" data-id="'+E_(x.id)+'" aria-pressed="'+fav+'">'+E_(T_(fav?"kc.enc.faved":"kc.enc.fav"))+'</button><button type="button" class="tiny" data-kc="enc-study" data-id="'+E_(x.id)+'" aria-pressed="'+st+'">'+E_(T_(st?"kc.enc.studied":"kc.enc.study"))+"</button></div>"}
function encNote(x){return'<label class="kc-note"><span>'+E_(T_("kc.enc.note"))+" "+badge("personal")+'</span><textarea id="kcEncNote" rows="3">'+E_(S.encNotes[x.id]||"")+"</textarea></label>"}
function infCard(x){
  return'<article class="kc-card" aria-labelledby="kcEncTitle"><h3 id="kcEncTitle" class="sr-only">'+E_(x.term)+"</h3>"
   +(x.alias.length?'<p class="muted small">'+E_(x.alias.join(" · "))+"</p>":"")
   +(function(){var it=infText(x);return'<p class="kc-inf" lang="'+it.l+'">'+infDef(it.t)+"</p>"})()
   +'<details class="kc-src-more"><summary>'+E_(T_("kc.sources"))+'</summary><p class="small"><a href="'+E_(infUrl(x))+'" target="_blank" rel="noopener noreferrer">'+E_(T_("kc.enc.infilRead"))+" — Infil, The Fighting Game Glossary</a></p></details></article>";
}
function encCard(x){
  var t=x.txt[lang()]||x.txt.en||x.txt.fr;
  var perKeys=Object.keys(x.per);
  var noDoc=x.games.filter(function(gm){return!x.per[gm]});
  var per=perKeys.length?'<h4>'+E_(T_("kc.enc.per"))+'</h4><dl class="kc-per">'+x.games.filter(function(gm){return x.per[gm]}).map(function(gm){return"<dt>"+E_(gName(gm))+"</dt><dd>"+E_(tr(x.per[gm]))+"</dd>"}).join("")+"</dl>"+(noDoc.length?'<p class="muted small">'+E_(T_("kc.enc.notDoc"))+" "+E_(noDoc.map(gName).join(" · "))+"</p>":""):"";
  var cmp="";
  if(perKeys.length>=2){var A=U("encCmpA",perKeys[0]),B=U("encCmpB",perKeys[1]);if(perKeys.indexOf(A)<0)A=perKeys[0];if(perKeys.indexOf(B)<0)B=perKeys[1];
    cmp='<h4>'+E_(T_("kc.enc.cmp"))+'</h4><div class="kc-filters"><select id="kcEncCmpA" aria-label="A">'+perKeys.map(function(k){return opt(k,gName(k),A)}).join("")+'</select><span class="hv-vs">VS</span><select id="kcEncCmpB" aria-label="B">'+perKeys.map(function(k){return opt(k,gName(k),B)}).join("")+'</select></div><div class="kc-cmp"><div class="subpanel"><b>'+E_(gName(A))+"</b><p>"+E_(tr(x.per[A]))+'</p></div><div class="subpanel"><b>'+E_(gName(B))+"</b><p>"+E_(tr(x.per[B]))+"</p></div></div>"}
  var ex=combosFor(x).slice(0,6);
  var exHtml=x.rx?'<h4>'+E_(T_("kc.enc.combos"))+"</h4>"+badge("imported")+(ex.length?'<div class="kc-res-list">'+ex.map(function(c){return'<button type="button" class="kc-res" data-kc="open-combo" data-id="'+E_(c.id)+'"><b>'+E_(c.name)+'</b> <span class="muted small">'+E_(gName(c.game))+" · "+E_(cName(c.character))+"</span></button>"}).join("")+"</div>":'<p class="muted small">'+E_(T_("kc.enc.noCombo"))+"</p>"):"";
  var ftGames=x.ft?x.games.filter(function(gm){return typeof FT_SRC!=="undefined"&&FT_SRC[gm]}):[];
  var ft=ftGames.length?'<h4>Frame Theater</h4><div class="row">'+ftGames.map(function(gm){return'<button type="button" class="tiny" data-kc="open-ft" data-game="'+gm+'">'+E_(T_("kc.enc.ft"))+" — "+E_(b[gm].short||b[gm].name)+"</button>"}).join("")+"</div>":"";
  var rel=x.rel.filter(function(r){return ENC[r]}).map(function(r){return'<button type="button" class="kc-chip" data-kc="open-enc" data-id="'+r+'">'+E_(ENC[r].term)+"</button>"}).join("");
  var pch=[];D.PATCHES.forEach(function(p){p.changes.forEach(function(c){if(c.rel.indexOf(x.id)>=0)pch.push([p,c])})});
  var pm=padMode(),keys=x.games.map(function(gm){var s=x.inp?x.inp[gm]:null;return'<div class="kc-key-row">'+gl(gm)+'<span class="kc-key-g">'+E_(gName(gm))+'</span><span class="kc-inp">'+E_(inpText(gm,s,pm))+"</span></div>"}).join("");
  var padSrc=[];x.games.forEach(function(gm){var P=D.PADS[gm];if(P&&x.inp&&x.inp[gm]&&x.inp[gm]!=="-")P.src.forEach(function(k){if(padSrc.indexOf(k)<0)padSrc.push(k)})});
  return'<article class="kc-card" aria-labelledby="kcEncTitle"><h3 id="kcEncTitle" class="sr-only">'+E_(x.term)+"</h3>"
   +(x.alias.length?'<p class="muted small">'+E_(x.alias.join(" · "))+"</p>":"")
   +'<p class="kc-card-mark">'+badge(x.st==="ok"?"documented":"partial")+" "+gParen(x)+"</p>"
   +'<div class="kc-keys"><h4>'+E_(T_("kc.enc.keys"))+' <span class="muted small">· '+E_(T_("kc.pad."+pm))+"</span></h4>"+keys+"</div>"
   +"<h4>"+E_(T_("kc.enc.def"))+"</h4><p>"+E_(t[0])+"</p><h4>"+E_(T_("kc.enc.how"))+"</h4><p>"+E_(t[1])+"</p>"
   +(t[2]?"<h4>"+E_(T_("kc.enc.cond"))+"</h4><p>"+E_(t[2])+"</p>":"")
   +per+cmp
   +(x.ex?"<h4>"+E_(T_("kc.enc.ex"))+'</h4><p><code class="kc-code">'+E_(x.ex)+"</code></p>":"")
   +exHtml+ft
   +(rel?"<h4>"+E_(T_("kc.enc.rel"))+'</h4><div class="kc-chips">'+rel+"</div>":"")
   +(pch.length?"<h4>"+E_(T_("kc.enc.patches"))+'</h4><div class="kc-res-list">'+pch.map(function(pc){return'<button type="button" class="kc-res" data-kc="open-patch" data-id="'+E_(pc[0].id)+'"><b>'+E_(gName(pc[0].game))+" "+E_(pc[0].ver)+'</b> <span class="muted small">'+E_(tr(pc[1].txt))+"</span></button>"}).join("")+"</div>":"")
   +(x.infRow?'<details class="kc-inf-more"><summary>'+E_(T_("kc.enc.infilDef"))+'</summary><p class="kc-inf" lang="'+infText(x.infRow).l+'">'+infDef(infText(x.infRow).t)+'</p><p class="small"><a href="'+E_(infUrl(x.infRow))+'" target="_blank" rel="noopener noreferrer">'+E_(T_("kc.enc.infilRead"))+"</a></p></details>":"")
   +'<details class="kc-src-more"><summary>'+E_(T_("kc.sources"))+'</summary><p class="small">'+srcLinks(x.src.concat(padSrc.filter(function(k){return x.src.indexOf(k)<0})))+"</p></details>"
   +'<p class="muted small">'+E_(T_("kc.id"))+" : <code>"+E_(x.id)+"</code> · "+E_(T_("kc.updated"))+" "+E_(fmtDay(x.updated))+"</p></article>";
}

/* ——— Team Building ——— */
function team(id){for(var i=0;i<S.teams.length;i++)if(S.teams[i].id===id)return S.teams[i];return null}
function touch(t){t.updatedAt=now();save()}
function mentions(c,name){var bl=" "+norm(comboBlob(c)+" "+JSON.stringify(c.extra||{}))+" ";return bl.indexOf(" "+norm(name)+" ")>=0}
function pairCombos(game,x,y){return combosAll().filter(function(c){return c.game===game&&((c.character===x&&mentions(c,y))||(c.character===y&&mentions(c,x)))})}
function members(t){return t.members.map(function(m){return m.char}).filter(Boolean)}
function newTeam(game){var R=D.RULES[game];if(!R)return null;var n=S.teams.filter(function(t){return t.game===game}).length+1;var t={id:uid("t"),name:TF("kc.team.defName",n),game:game,members:[],fuse:"",tag:"",notes:"",combos:[],createdAt:now(),updatedAt:now()};for(var i=0;i<R.size;i++)t.members.push({char:"",assist:""});S.teams.unshift(t);setU("teamSel",t.id);save();return t}
function slotLabel(R,i){return T_("kc.slot."+R.slots[i])}
function comboLink(c,extra){return'<div class="kc-combo-row"><button type="button" class="kc-res" data-kc="open-combo" data-id="'+E_(c.id)+'"><b>'+E_(c.name)+'</b> <span class="muted small">'+E_(cName(c.character))+(c.difficulty?" · "+E_(T_(c.difficulty)):"")+"</span></button>"+(extra||"")+"</div>"}
function pTeams(){
  var sel=team(U("teamSel",""));if(!sel&&S.teams.length){sel=S.teams[0];setU("teamSel",sel.id)}
  var ng=U("newTeamGame","umvc3");
  var left='<div class="subpanel"><h3 class="kc-h">'+E_(T_("kc.team.new"))+'</h3><div class="kc-filters"><select id="kcNewTeamGame" aria-label="'+E_(T_("kc.game"))+'">'+D.GAMES.map(function(x){return opt(x,gName(x)+" ("+D.RULES[x].size+")",ng)}).join("")+'</select><button type="button" class="primary" data-kc="team-new">+ '+E_(T_("kc.team.new"))+"</button></div>"
   +(S.teams.length?'<div class="kc-list">'+S.teams.map(function(t){return'<button type="button" class="kc-item'+(sel&&sel.id===t.id?" sel":"")+'" data-kc="open-team" data-id="'+E_(t.id)+'" aria-current="'+(sel&&sel.id===t.id)+'"><span class="kc-item-main"><b>'+E_(t.name)+'</b><span class="muted small kc-item-sub">'+E_(gName(t.game))+" · "+E_(members(t).map(cName).join(" / ")||T_("kc.none"))+"</span></span></button>"}).join("")+"</div>":'<p class="muted small">'+E_(T_("kc.team.none"))+"</p>")+"</div>"
   +teamCompare()+partnerFinder();
  return'<div class="kc-split kc-split-team"><div class="kc-col">'+left+'</div><div class="kc-detail">'+(sel?teamEditor(sel):'<div class="empty">'+E_(T_("kc.team.none"))+"</div>")+"</div></div>";
}
function teamEditor(t){
  var R=D.RULES[t.game],ro=roster(t.game);
  var slots=t.members.map(function(m,i){
    var opts=opt("",T_("kc.none"),m.char)+ro.map(function(n){return opt(n,cName(n),m.char)}).join("");
    var as=R.assists?'<select id="kcSlotAs-'+i+'" data-kc-sel="slot-as" data-i="'+i+'" aria-label="'+E_(T_("kc.team.assist")+" — "+slotLabel(R,i))+'">'+opt("",T_("kc.team.assist")+" —",m.assist)+R.assists.map(function(x){return opt(x,T_("kc.team.assist")+" "+x,m.assist)}).join("")+"</select>":(i>0&&t.game==="tokon"?'<span class="muted small">'+E_(T_("kc.team.assist"))+" : "+E_(T_("kc.team.assistSlot"))+"</span>":"");
    return'<div class="kc-slot"><span class="kc-slot-n">'+E_(slotLabel(R,i))+"</span>"+(m.char?portrait(t.game,m.char,"sm"):'<span class="kc-slot-empty" aria-hidden="true"></span>')+'<select id="kcSlotChar-'+i+'" data-kc-sel="slot-char" data-i="'+i+'" aria-label="'+E_(slotLabel(R,i))+'">'+opts+"</select>"+as
      +'<span class="kc-slot-move"><button type="button" class="tiny" data-kc="team-move" data-i="'+i+'" data-d="-1" aria-label="'+E_(T_("kc.team.up"))+'"'+(i===0?" disabled":"")+'>↑</button><button type="button" class="tiny" data-kc="team-move" data-i="'+i+'" data-d="1" aria-label="'+E_(T_("kc.team.down"))+'"'+(i===t.members.length-1?" disabled":"")+">↓</button></span></div>";
  }).join("");
  var fuse=R.fuse?'<label class="field"><span>'+E_(T_("kc.team.fuse"))+'</span><select id="kcTeamFuse">'+opt("",T_("kc.none"),t.fuse)+R.fuse.map(function(f){return opt(f,f,t.fuse)}).join("")+"</select></label>":"";
  var mem=members(t);
  var orderNow='<p class="small"><b>'+E_(T_("kc.team.now"))+"</b> : "+t.members.map(function(m,i){return E_(slotLabel(R,i))+" = "+E_(m.char?cName(m.char):T_("kc.none"))}).join(" · ")+(t.fuse?" · Fuse = "+E_(t.fuse):"")+"</p>";
  var order='<h4>'+E_(T_("kc.team.order"))+"</h4>"+badge("documented")+orderNow+"<ul class=\"kc-ul\">"+R.order.map(function(x){return"<li>"+E_(tr(x))+"</li>"}).join("")+'</ul><p class="small">'+srcLinks(R.src)+"</p>";
  var pairs=[];for(var i=0;i<mem.length;i++)for(var k=i+1;k<mem.length;k++)pairs.push([mem[i],mem[k]]);
  var syn='<h4>'+E_(T_("kc.team.syn"))+'</h4><p class="muted small">'+E_(T_("kc.syn.noScore"))+"</p>"
   +(pairs.length?pairs.map(function(p){var pc=pairCombos(t.game,p[0],p[1]);return'<div class="kc-pair"><b>'+E_(cName(p[0]))+" + "+E_(cName(p[1]))+"</b> "+(pc.length?badge("imported")+'<p class="small">'+E_(T_("kc.syn.confirmed"))+" ("+pc.length+")</p>"+pc.slice(0,4).map(function(c){return comboLink(c)}).join(""):'<p class="small muted">'+E_(T_("kc.syn.potential"))+"</p>")+"</div>"}).join(""):"")
   +'<p class="small"><b>'+E_(T_("kc.syn.incompat"))+"</b> : "+E_(T_("kc.syn.noIncompat"))+"</p>";
  var teamCombos=combosAll().filter(function(c){return c.game===t.game&&mem.indexOf(c.character)>=0});
  var needA=teamCombos.filter(function(c){return c.assist&&b[c.game]&&b[c.game].assists&&c.assist!==b[c.game].assists[0]}).length;
  var res={};teamCombos.forEach(function(c){if(c.meter)res[T_(c.meter)]=1});
  syn+='<h4>'+E_(T_("kc.syn.team"))+"</h4>"+badge("imported")+'<ul class="kc-ul">'+mem.map(function(m){return"<li>"+E_(TF("kc.syn.combosOf",cName(m),combosAll().filter(function(c){return c.game===t.game&&c.character===m}).length))+"</li>"}).join("")+(teamCombos.length?"<li>"+E_(TF("kc.syn.needAssist",needA))+"</li><li>"+E_(TF("kc.syn.res",Object.keys(res).join(", ")||T_("kc.none")))+"</li>":"")+"</ul>"
   +'<p class="small"><b>'+E_(T_("kc.team.tag"))+'</b> <select id="kcTeamTag" aria-label="'+E_(T_("kc.team.tag"))+'">'+TEAM_TAGS.map(function(x){return opt(x,T_("kc.tag."+x),t.tag)}).join("")+"</select> "+badge("personal")+'</p><p class="muted small">'+E_(T_("kc.team.profileNote"))+"</p>";
  var combosHtml='<h4>'+E_(T_("kc.team.combos"))+"</h4>"+(teamCombos.length?teamCombos.map(function(c){var on=t.combos.indexOf(c.id)>=0;return comboLink(c,'<label class="kc-check small"><input type="checkbox" data-kc-sel="team-link" data-id="'+E_(c.id)+'"'+(on?" checked":"")+"> "+E_(T_(on?"kc.team.linked":"kc.team.link"))+"</label>")}).join(""):'<p class="muted small">'+E_(T_("kc.team.noCombos"))+"</p>");
  var sits=S.sits.filter(function(s){return s.game===t.game&&(mem.indexOf(s.a)>=0||mem.indexOf(s.b)>=0)});
  var mu='<h4>'+E_(T_("kc.team.mu"))+"</h4>"+(mem.length?'<button type="button" class="tiny" data-kc="team-mu" data-id="'+E_(t.id)+'">🤝 Matchup Knowledge</button>':"")+(sits.length?'<div class="kc-res-list">'+sits.slice(0,12).map(function(s){return'<button type="button" class="kc-res" data-kc="open-sit" data-id="'+E_(s.id)+'"><b>'+E_(s.title)+'</b> <span class="muted small">'+E_(cName(s.a))+" vs "+E_(cName(s.b))+"</span></button>"}).join("")+"</div>":'<p class="muted small">'+E_(T_("kc.team.muNone"))+"</p>");
  var opp=S.teams.filter(function(x){return x.game===t.game&&x.id!==t.id}),vsId=U("teamVs","");
  var vs='<h4>'+E_(T_("kc.team.vs"))+'</h4><p class="muted small">'+E_(T_("kc.team.vsNote"))+"</p>"+(opp.length?'<select id="kcTeamVs" aria-label="'+E_(T_("kc.team.vsPick"))+'">'+opt("",T_("kc.team.vsPick"),vsId)+opp.map(function(x){return opt(x.id,x.name,vsId)}).join("")+"</select>"+teamVsGrid(t,team(vsId)):"");
  return'<article class="kc-card"><div class="row between"><label class="field kc-grow"><span>'+E_(T_("kc.team.name"))+'</span><input id="kcTeamName" maxlength="60" value="'+E_(t.name)+'"></label><span class="muted small">'+E_(gName(t.game))+"</span></div>"
   +'<div class="kc-slots">'+slots+"</div>"+fuse
   +'<label class="kc-note"><span>'+E_(T_("kc.team.notes"))+" "+badge("personal")+'</span><textarea id="kcTeamNotes" rows="2">'+E_(t.notes)+"</textarea></label>"
   +'<div class="row kc-actions"><button type="button" class="tiny" data-kc="team-dup">'+E_(T_("kc.team.dup"))+'</button><button type="button" class="tiny danger" data-kc="team-del">'+E_(T_("kc.delete"))+"</button></div>"
   +order+syn+combosHtml+mu+vs
   +'<p class="muted small">'+E_(T_("kc.id"))+" : <code>"+E_(t.id)+"</code> · "+E_(T_("kc.updated"))+" "+E_(fmtIso(t.updatedAt))+"</p></article>";
}
function teamVsGrid(t,o2){
  if(!o2)return"";var A=members(t),B=members(o2);if(!A.length||!B.length)return"";
  return'<div class="kc-vs-grid" style="--cols:'+(B.length+1)+'"><span></span>'+B.map(function(x){return"<b>"+E_(cName(x))+"</b>"}).join("")+A.map(function(x){return"<b>"+E_(cName(x))+"</b>"+B.map(function(y){var n=S.sits.filter(function(s){return s.game===t.game&&((s.a===x&&s.b===y)||(s.a===y&&s.b===x))}).length;return'<button type="button" class="tiny" data-kc="open-mu" data-game="'+t.game+'" data-a="'+E_(x)+'" data-b="'+E_(y)+'">'+n+"</button>"}).join("")}).join("")+"</div>";
}
function teamCompare(){
  if(S.teams.length<2)return"";var A=team(U("teamCmpA",""))||null,B=team(U("teamCmpB",""))||null;
  var sel=function(id,v){return'<select id="'+id+'" aria-label="'+E_(T_("kc.team.cmp"))+'">'+opt("",T_("kc.none"),v)+S.teams.map(function(t){return opt(t.id,t.name+" — "+(b[t.game]?b[t.game].short||b[t.game].name:t.game),v)}).join("")+"</select>"};
  var out="";
  if(A&&B){var row=function(t){var mem=members(t),cb=combosAll().filter(function(c){return c.game===t.game&&mem.indexOf(c.character)>=0}).length,su=S.sits.filter(function(s){return s.game===t.game&&(mem.indexOf(s.a)>=0||mem.indexOf(s.b)>=0)}).length;var R=D.RULES[t.game];
      return'<div class="subpanel"><b>'+E_(t.name)+'</b><p class="small">'+E_(gName(t.game))+"<br>"+t.members.map(function(m,i){return E_(slotLabel(R,i))+" : "+E_(m.char?cName(m.char):T_("kc.none"))+(m.assist?" ("+E_(m.assist)+")":"")}).join("<br>")+(t.fuse?"<br>Fuse : "+E_(t.fuse):"")+"<br>"+E_(T_("kc.team.combos"))+" : "+cb+"<br>"+E_(T_("kc.team.mu"))+" : "+su+"</p></div>"};
    var shared=members(A).filter(function(x){return A.game===B.game&&members(B).indexOf(x)>=0});
    out='<div class="kc-cmp">'+row(A)+row(B)+'</div><p class="small">'+E_(T_("kc.team.shared"))+" : "+E_(shared.map(cName).join(", ")||T_("kc.none"))+"</p>"}
  return'<div class="subpanel"><h3 class="kc-h">'+E_(T_("kc.team.cmp"))+'</h3><div class="kc-filters">'+sel("kcTeamCmpA",U("teamCmpA",""))+sel("kcTeamCmpB",U("teamCmpB",""))+"</div>"+out+"</div>";
}
function partnerFinder(){
  var gm=U("partnerGame","umvc3"),ch=U("partnerChar",""),ro=roster(gm);
  var out="";
  if(ch){
    var conf={};combosAll().forEach(function(c){if(c.game!==gm)return;ro.forEach(function(n){if(n===ch)return;if((c.character===ch&&mentions(c,n))||(c.character===n&&mentions(c,ch)))conf[n]=(conf[n]||0)+1})});
    var mine={};S.teams.forEach(function(t){if(t.game!==gm)return;var m=members(t);if(m.indexOf(ch)<0)return;m.forEach(function(n){if(n!==ch)mine[n]=(mine[n]||0)+1})});
    var ck=Object.keys(conf),mk=Object.keys(mine);
    out=(ck.length?"<p class=\"small\"><b>"+E_(T_("kc.team.partnerConfirmed"))+"</b> "+badge("imported")+"</p>"+ck.map(function(n){return'<button type="button" class="kc-chip" data-kc="partner-team" data-c="'+E_(n)+'">'+E_(cName(n))+" ("+conf[n]+")</button>"}).join(""):"")
      +(mk.length?"<p class=\"small\"><b>"+E_(T_("kc.team.partnerMine"))+"</b> "+badge("personal")+"</p>"+mk.map(function(n){return'<span class="kc-chip">'+E_(cName(n))+"</span>"}).join(""):"")
      +(!ck.length&&!mk.length?'<p class="muted small">'+E_(T_("kc.team.partnerNone"))+"</p>":"")
      +'<p><button type="button" class="tiny" data-kc="partner-team" data-c="">'+E_(T_("kc.team.useIn"))+"</button></p>";
  }
  return'<div class="subpanel"><h3 class="kc-h">'+E_(T_("kc.team.partner"))+'</h3><div class="kc-filters"><select id="kcPartnerGame" aria-label="'+E_(T_("kc.game"))+'">'+D.GAMES.map(function(x){return opt(x,gName(x),gm)}).join("")+'</select><select id="kcPartnerChar" aria-label="'+E_(T_("kc.char"))+'">'+opt("",T_("kc.char")+" —",ch)+ro.map(function(n){return opt(n,cName(n),ch)}).join("")+"</select></div>"+out+"</div>";
}

/* ——— Matchup Knowledge ——— */
function seenAdd(game,x,y){var k=game+"|"+x+"|"+y;if(S.ui.lastSeen===k)return;S.ui.lastSeen=k;S.seen=S.seen.filter(function(s){return!(s.game===game&&s.a===x&&s.b===y)});S.seen.unshift({game:game,a:x,b:y,at:now()});S.seen=S.seen.slice(0,80);save()}
function sitCard(s,A){
  var vids=s.vids.map(function(u){var yt=false;try{yt=!!te(u)}catch(e){}return yt?'<button type="button" class="tiny" data-kc="play" data-url="'+E_(u)+'">▶ '+E_(u.replace(/^https?:\/\//,"").slice(0,48))+"</button>":'<a class="tiny" href="'+E_(u)+'" target="_blank" rel="noopener noreferrer">↗ '+E_(u.replace(/^https?:\/\//,"").slice(0,48))+"</a>"}).join(" ");
  return'<article class="kc-sit"><div class="row between"><b>'+E_(s.title)+"</b><span>"+badge("personal")+(s.tested?' <span class="kc-badge">'+E_(T_("kc.mu.testedB"))+"</span>":"")+"</span></div>"
   +'<p class="muted small">'+E_(T_("kc.sit."+s.cat))+" · "+E_(TF("kc.mu.view",cName(s.a)))+(A&&s.a!==A?" ⇄":"")+"</p>"
   +(s.desc?"<p><b>"+E_(T_("kc.mu.desc"))+"</b><br>"+E_(s.desc)+"</p>":"")+(s.opts?"<p><b>"+E_(T_("kc.mu.opts"))+"</b><br>"+E_(s.opts)+"</p>":"")+(s.cond?"<p><b>"+E_(T_("kc.mu.cond"))+"</b><br>"+E_(s.cond)+"</p>":"")
   +(s.src.length?'<p class="small"><b>'+E_(T_("kc.sources"))+"</b><br>"+s.src.map(function(u){return'<a href="'+E_(u)+'" target="_blank" rel="noopener noreferrer">'+E_(u)+"</a>"}).join("<br>")+"</p>":"")
   +(vids?'<p class="small">'+vids+"</p>":"")+(s.notes?'<p class="small"><b>'+E_(T_("kc.mu.notes"))+"</b><br>"+E_(s.notes)+"</p>":"")
   +'<div class="row kc-actions"><button type="button" class="tiny" data-kc="sit-edit" data-id="'+E_(s.id)+'">'+E_(T_("kc.edit"))+'</button><button type="button" class="tiny danger" data-kc="sit-del" data-id="'+E_(s.id)+'">'+E_(T_("kc.delete"))+'</button><span class="muted small">'+E_(T_("kc.updated"))+" "+E_(fmtIso(s.updatedAt))+"</span></div></article>";
}
function sitForm(s,game,A,B){
  s=s||{cat:U("mCat","")||"neutral",title:"",desc:"",opts:"",cond:"",src:[],vids:[],notes:"",tested:false};
  var ta=function(id,lab,v,rows){return'<label class="field"><span>'+E_(lab)+'</span><textarea id="'+id+'" rows="'+(rows||2)+'">'+E_(v)+"</textarea></label>"};
  return'<form class="subpanel kc-form" id="kcSitForm" data-id="'+E_(s.id||"")+'"><h3 class="kc-h">'+E_(T_(s.id?"kc.edit":"kc.mu.add"))+" — "+E_(cName(A))+" vs "+E_(cName(B))+"</h3>"
   +'<div class="grid2"><label class="field"><span>'+E_(T_("kc.cat"))+'</span><select id="kcSitCat">'+SIT_CATS.map(function(c){return opt(c,T_("kc.sit."+c),s.cat)}).join("")+'</select></label><label class="field"><span>'+E_(T_("kc.mu.title"))+'</span><input id="kcSitTitle" maxlength="160" value="'+E_(s.title)+'" required></label></div>'
   +ta("kcSitDesc",T_("kc.mu.desc"),s.desc,3)+ta("kcSitOpts",T_("kc.mu.opts"),s.opts)+ta("kcSitCond",T_("kc.mu.cond"),s.cond)+ta("kcSitSrc",T_("kc.mu.src"),s.src.join("\n"))+ta("kcSitVid",T_("kc.mu.vid"),s.vids.join("\n"))+ta("kcSitNotes",T_("kc.mu.notes"),s.notes)
   +'<label class="kc-check"><input type="checkbox" id="kcSitTested"'+(s.tested?" checked":"")+"> "+E_(T_("kc.mu.tested"))+"</label>"
   +'<div class="row"><button type="submit" class="primary">'+E_(T_("kc.save"))+"</button>"+(s.id?'<button type="button" data-kc="sit-cancel">'+E_(T_("kc.cancel"))+"</button>":"")+"</div></form>";
}
function pMatchups(){
  var gm=U("mGame","umvc3");if(!b[gm])gm="umvc3";var ro=roster(gm),A=U("mA",""),B=U("mB",""),cat=U("mCat",""),q=U("mQ","");
  if(ro.indexOf(A)<0)A="";if(ro.indexOf(B)<0)B="";
  var teamF=team(U("mTeam",""));
  var top='<div class="kc-filters"><select id="kcMGame" aria-label="'+E_(T_("kc.game"))+'">'+D.GAMES.map(function(x){return opt(x,gName(x),gm)}).join("")+"</select>"
   +'<select id="kcMA" aria-label="'+E_(T_("kc.mu.a"))+'">'+opt("",T_("kc.mu.a")+" —",A)+ro.map(function(n){return opt(n,cName(n),A)}).join("")+"</select>"
   +'<button type="button" class="tiny" data-kc="mu-swap" aria-label="'+E_(T_("kc.mu.swap"))+'">⇄</button>'
   +'<select id="kcMB" aria-label="'+E_(T_("kc.mu.b"))+'">'+opt("",T_("kc.mu.b")+" —",B)+ro.map(function(n){return opt(n,cName(n),B)}).join("")+"</select>"
   +'<input id="kcMQ" type="search" autocomplete="off" value="'+E_(q)+'" placeholder="'+E_(T_("kc.mu.q"))+'" aria-label="'+E_(T_("kc.mu.q"))+'"></div>'
   +'<div class="kc-chips" role="group" aria-label="'+E_(T_("kc.cat"))+'">'+[""].concat(SIT_CATS).map(function(c){return'<button type="button" class="kc-chip" data-kc="mu-cat" data-c="'+c+'" aria-pressed="'+(c===cat)+'">'+E_(c?T_("kc.sit."+c):T_("kc.all"))+"</button>"}).join("")+"</div>";
  var out="";
  if(teamF&&teamF.game===gm){out+='<div class="subpanel"><p class="small">'+E_(TF("kc.mu.teamFilter",members(teamF).map(cName).join(", ")))+'</p><div class="kc-chips">'+members(teamF).map(function(n){return'<button type="button" class="kc-chip" data-kc="mu-pickA" data-c="'+E_(n)+'" aria-pressed="'+(n===A)+'">'+E_(cName(n))+"</button>"}).join("")+"</div></div>"}
  if(q.trim()){var res=S.sits.filter(function(s){return hit(norm([s.title,s.desc,s.opts,s.cond,s.notes,cName(s.a),cName(s.b),s.a,s.b,T_("kc.sit."+s.cat)].join(" ")),q)});
    out+='<div class="subpanel"><h3 class="kc-h">🔎 '+res.length+'</h3><div class="kc-res-list">'+res.slice(0,30).map(function(s){return'<button type="button" class="kc-res" data-kc="open-sit" data-id="'+E_(s.id)+'"><b>'+E_(s.title)+'</b> <span class="muted small">'+E_(gName(s.game))+" · "+E_(cName(s.a))+" vs "+E_(cName(s.b))+"</span></button>"}).join("")+"</div></div>"}
  if(!A||!B||A===B)return top+out+'<div class="empty">'+E_(T_("kc.mu.pick"))+"</div>"+recentSeen();
  seenAdd(gm,A,B);
  var doc=D.MATCHUPS.filter(function(m){return m.game===gm&&((m.a===A&&m.b===B)||(m.a===B&&m.b===A))&&(!cat||m.cat===cat)});
  var mine=S.sits.filter(function(s){return s.game===gm&&((s.a===A&&s.b===B)||(s.a===B&&s.b===A))&&(!cat||s.cat===cat)});
  mine.sort(function(x,y){return x.a===A&&y.a!==A?-1:y.a===A&&x.a!==A?1:x.updatedAt<y.updatedAt?1:-1});
  var editing=null;var eid=U("mEdit","");if(eid)S.sits.forEach(function(s){if(s.id===eid)editing=s});
  var teamsUsing=S.teams.filter(function(t){var m=members(t);return t.game===gm&&(m.indexOf(A)>=0||m.indexOf(B)>=0)});
  out+='<div class="kc-duel">'+portrait(gm,A,"sm")+"<b>"+E_(cName(A))+'</b><span class="hv-vs">VS</span><b>'+E_(cName(B))+"</b>"+portrait(gm,B,"sm")+"</div>"
   +'<div class="subpanel"><h3 class="kc-h">'+E_(T_("kc.mu.doc"))+"</h3>"+(doc.length?"":'<p class="muted small">'+E_(T_("kc.mu.docNone"))+"</p>")+"</div>"
   +'<div class="subpanel"><h3 class="kc-h">'+E_(T_("kc.mu.mine"))+' <span class="count">'+mine.length+"</span></h3>"+(mine.length?mine.map(function(s){return sitCard(s,A)}).join(""):'<p class="muted small">'+E_(T_("kc.mu.empty"))+"</p>")+"</div>"
   +sitForm(editing,gm,A,B)
   +'<div class="subpanel"><h3 class="kc-h">'+E_(T_("kc.mu.teams"))+"</h3>"+(teamsUsing.length?'<div class="kc-res-list">'+teamsUsing.map(function(t){return'<button type="button" class="kc-res" data-kc="open-team" data-id="'+E_(t.id)+'"><b>'+E_(t.name)+'</b> <span class="muted small">'+E_(members(t).map(cName).join(" / "))+"</span></button>"}).join("")+"</div>":'<p class="muted small">'+E_(T_("kc.mu.noTeam"))+"</p>")+"</div>";
  return top+out;
}
function recentSeen(){if(!S.seen.length)return"";return'<div class="subpanel"><h3 class="kc-h">'+E_(T_("kc.ma.mu"))+'</h3><div class="kc-res-list">'+S.seen.slice(0,10).map(function(s){return'<button type="button" class="kc-res" data-kc="open-mu" data-game="'+s.game+'" data-a="'+E_(s.a)+'" data-b="'+E_(s.b)+'"><b>'+E_(cName(s.a))+" vs "+E_(cName(s.b))+'</b> <span class="muted small">'+E_(gName(s.game))+" · "+E_(fmtIso(s.at))+"</span></button>"}).join("")+"</div></div>"}

/* ——— Combo Challenge ——— */
function practicable(c){var v={tokens:[]};try{v=comboView(c)}catch(e){}return(v.tokens&&v.tokens.length)||(c.video&&hasVid(c.video))}
function condsOf(c){var out=[];var gd=b[c.game]||{};if(gd.special&&c.special&&c.special!==gd.special[1][0]&&c.special!=="Non précisé"&&c.special!=="Aucune")out.push(gd.special[0]+" : "+c.special);(c.dna||[]).forEach(function(x){out.push(String(x))});var ex=c.extra||{};(gd.extras||[]).forEach(function(e2){var v=ex[e2[0]];if(v&&v!==e2[2][0])out.push(e2[1]+" : "+v)});return out}
function chFilters(){return{game:U("cGame",""),char:U("cChar",""),diff:U("cDiff",""),pos:U("cPos",""),meter:U("cMeter",""),assist:U("cAssist",""),cond:U("cCond","")}}
function chPool(f){return combosAll().filter(function(c){return practicable(c)&&(!f.game||c.game===f.game)&&(!f.char||c.character===f.char)&&(!f.diff||c.difficulty===f.diff)&&(!f.pos||c.position===f.pos)&&(!f.meter||c.meter===f.meter)&&(!f.assist||c.assist===f.assist)&&(!f.cond||condsOf(c).indexOf(f.cond)>=0)})}
function uniq(arr){var s={};arr.forEach(function(x){if(x)s[x]=1});return Object.keys(s).sort()}
function startChallenge(id){var c=L(id);if(!c)return;var ch=S.chal[id]||{goal:5,streak:0,okV:0,notes:""};S.chal[id]=ch;S.active={id:id,goal:ch.goal,streak:0};save()}
function pChallenge(){
  var mode=U("cMode","random"),f=chFilters();
  var base=combosAll().filter(practicable);
  var games=uniq(base.map(function(c){return c.game}));
  var inGame=base.filter(function(c){return!f.game||c.game===f.game});
  var sel=function(id,label,key,vals,lab){return'<label class="field"><span>'+E_(label)+'</span><select id="'+id+'" data-kc-sel="cf" data-k="'+key+'">'+opt("",T_("kc.all"),f[key])+vals.map(function(v){return opt(v,lab?lab(v):T_(v),f[key])}).join("")+"</select></label>"};
  var filters='<div class="kc-modes" role="tablist">'+["random","targeted","review","history"].map(function(m){return'<button type="button" role="tab" class="kc-tab" data-kc="cmode" data-m="'+m+'" aria-selected="'+(m===mode)+'">'+E_(T_("kc.ch."+m))+"</button>"}).join("")+"</div>"
   +(mode==="history"?"":'<div class="kc-fgrid">'+sel("kcCGame",T_("kc.game"),"game",games,gName)+sel("kcCChar",T_("kc.char"),"char",uniq(inGame.map(function(c){return c.character})),cName)+sel("kcCDiff",T_("kc.ch.diff"),"diff",uniq(inGame.map(function(c){return c.difficulty})))+sel("kcCPos",T_("kc.ch.pos"),"pos",uniq(inGame.map(function(c){return c.position})))+sel("kcCMeter",T_("kc.ch.meter"),"meter",uniq(inGame.map(function(c){return c.meter})))+sel("kcCAssist",T_("kc.ch.assist"),"assist",uniq(inGame.map(function(c){return c.assist})))+sel("kcCCond",T_("kc.ch.cond"),"cond",uniq([].concat.apply([],inGame.map(condsOf))),function(v){return v})+"</div>");
  var act=S.active&&L(S.active.id)?activeCard(L(S.active.id)):"";
  var body="";
  var pool=chPool(f);
  if(mode==="random"){body='<div class="subpanel"><p class="small">'+E_(TF("kc.ch.pool",pool.length))+"</p>"+(pool.length?'<button type="button" class="primary" data-kc="draw">🎲 '+E_(T_("kc.ch.draw"))+"</button>":'<div class="empty">'+E_(T_("kc.ch.empty"))+"</div>")+"</div>"}
  else if(mode==="targeted"){body='<div class="subpanel"><p class="small">'+E_(TF("kc.ch.pool",pool.length))+"</p>"+(pool.length?pool.map(function(c){return comboLink(c,'<button type="button" class="tiny primary" data-kc="start" data-id="'+E_(c.id)+'">'+E_(T_("kc.ch.start"))+"</button>")}).join(""):'<div class="empty">'+E_(T_("kc.ch.empty"))+"</div>")+"</div>"}
  else if(mode==="review"){
    var rank=function(c){var m=S.mastery[c.id];return m==="rework"?0:d.fav&&d.fav.has(c.id)?1:m==="learning"?2:9};
    var rv=pool.filter(function(c){return rank(c)<9}).sort(function(x,y){return rank(x)-rank(y)});
    body='<div class="subpanel"><p class="muted small">'+E_(T_("kc.ch.reviewNote"))+"</p>"+(rv.length?rv.map(function(c){var m=S.mastery[c.id];return comboLink(c,'<span class="kc-badge">'+E_(m?T_("kc.ms."+m):"★")+'</span><button type="button" class="tiny primary" data-kc="start" data-id="'+E_(c.id)+'">'+E_(T_("kc.ch.start"))+"</button>")}).join(""):'<div class="empty">'+E_(T_("kc.ch.reviewEmpty"))+"</div>")+"</div>"}
  else body=historyView();
  return filters+act+body;
}
function activeCard(c){
  var A=S.active,ch=S.chal[c.id]||{goal:5,streak:0,okV:0,notes:""},tr0=trainOf(c.id),v={tokens:[],desc:""};try{v=comboView(c)}catch(e){}
  var gd=b[c.game]||{};var conds=condsOf(c);var notions=notionsFor(c);var flags=patchFlags(c);
  var resumed=U("cResumed","")===c.id?"":'<p class="muted small">'+E_(T_("kc.ch.resume"))+"</p>";
  return'<article class="kc-card kc-active"><div class="row between"><h3>'+E_(T_("kc.ch.active"))+" — "+E_(c.name)+"</h3>"+badge("imported")+"</div>"+resumed
   +'<p class="muted small">'+E_(gName(c.game))+" · "+E_(cName(c.character))+(c.difficulty?" · "+E_(T_(c.difficulty)):"")+"</p>"
   +(flags.length?'<p class="kc-warn small">⚠ '+flags.map(function(p){return E_(TF("kc.pt.flag",gName(p.game)+" "+(p.ver||fmtDay(p.date))))}).join(" · ")+"</p>":"")
   +"<h4>"+E_(T_("kc.ch.cmds"))+'</h4><div class="seq">'+(v.tokens&&v.tokens.length?K(v.tokens,void 0,c.game):'<span class="muted small">'+E_(T_("kc.ch.noCmd"))+"</span>")+"</div>"
   +(v.desc?'<p class="small" style="white-space:pre-wrap">'+E_(v.desc)+"</p>":"")
   +"<h4>"+E_(T_("kc.ch.conds"))+'</h4><p class="small">'+E_(T_("Position"))+" : "+E_(T_(c.position||""))+"<br>"+E_(T_("Assists"))+" : "+E_(T_(c.assist||""))+(conds.length?"<br>"+E_(conds.join(" · ")):"")+"</p>"
   +"<h4>"+E_(T_("kc.ch.res"))+'</h4><p class="small">'+E_(gd.meter||"")+" : "+E_(T_(c.meter||""))+"</p>"
   +(notions.length?"<h4>"+E_(T_("kc.ch.notions"))+'</h4><div class="kc-chips">'+notions.map(function(x){return'<button type="button" class="kc-chip" data-kc="open-enc" data-id="'+x.id+'">'+E_(x.term)+"</button>"}).join("")+"</div>":"")
   +'<div class="kc-goal"><label class="field"><span>'+E_(T_("kc.ch.goal"))+'</span><input id="kcCGoal" type="number" min="1" max="100" value="'+A.goal+'"></label><b class="kc-streak">'+E_(TF("kc.ch.streak",A.streak,A.goal))+'</b><progress max="'+A.goal+'" value="'+Math.min(A.streak,A.goal)+'"></progress></div>'
   +'<div class="row kc-actions"><button type="button" data-kc="ch-fail">✗ '+E_(T_("kc.ch.fail"))+'</button><button type="button" class="primary" data-kc="ch-ok">✓ '+E_(T_("kc.ch.ok"))+"</button></div>"
   +'<dl class="kc-stats"><dt>'+E_(T_("kc.ch.att"))+"</dt><dd>"+(tr0.attempts||0)+"</dd><dt>"+E_(T_("kc.ch.okM"))+"</dt><dd>"+(tr0.successes||0)+"</dd><dt>"+E_(T_("kc.ch.best"))+"</dt><dd>"+(tr0.best||0)+"</dd><dt>"+E_(T_("kc.ch.okV"))+"</dt><dd>"+E_(T_("kc.ch.okVNote"))+"</dd></dl>"
   +'<label class="field"><span>'+E_(T_("kc.status"))+'</span><select id="kcCStatus" data-kc-sel="mstate" data-id="'+E_(c.id)+'">'+opt("",T_("kc.ms.none"),S.mastery[c.id]||"")+MSTATES.map(function(m){return opt(m,T_("kc.ms."+m),S.mastery[c.id]||"")}).join("")+"</select></label>"
   +'<label class="kc-note"><span>'+E_(T_("kc.ch.notes"))+" "+badge("personal")+'</span><textarea id="kcCNotes" rows="2">'+E_(ch.notes)+"</textarea></label>"
   +'<div class="row kc-actions"><button type="button" class="tiny" data-kc="open-combo" data-id="'+E_(c.id)+'">'+E_(T_("kc.ch.openCombo"))+'</button><button type="button" class="tiny" data-kc="ch-stop">'+E_(T_("kc.ch.stop"))+"</button></div></article>";
}
function historyView(){
  var gm=U("hGame",""),ch=U("hChar","");
  var all=S.hist.slice().reverse(),games=uniq(all.map(function(h){return h.game})),chars=uniq(all.filter(function(h){return!gm||h.game===gm}).map(function(h){return h.char}));
  var list=all.filter(function(h){return(!gm||h.game===gm)&&(!ch||h.char===ch)});
  var agg={};list.forEach(function(h){var k=h.game+"|"+h.char;var a2=agg[k]||(agg[k]={game:h.game,char:h.char,n:0,ok:0,last:h.at});a2.n++;if(h.ok)a2.ok++;if(h.at>a2.last)a2.last=h.at});
  return'<div class="subpanel"><div class="kc-filters"><select id="kcHGame" aria-label="'+E_(T_("kc.game"))+'">'+opt("",T_("kc.allGames"),gm)+games.map(function(x){return opt(x,gName(x),gm)}).join("")+'</select><select id="kcHChar" aria-label="'+E_(T_("kc.char"))+'">'+opt("",T_("kc.all"),ch)+chars.map(function(x){return opt(x,cName(x),ch)}).join("")+"</select></div>"
   +(list.length?'<table class="kc-table"><thead><tr><th>'+E_(T_("kc.game"))+"</th><th>"+E_(T_("kc.char"))+"</th><th>"+E_(T_("kc.ch.att"))+"</th><th>"+E_(T_("kc.ch.okM"))+"</th><th>"+E_(T_("kc.ch.last"))+"</th></tr></thead><tbody>"+Object.keys(agg).map(function(k){var x=agg[k];return"<tr><td>"+E_(gName(x.game))+"</td><td>"+E_(cName(x.char))+"</td><td>"+x.n+"</td><td>"+x.ok+"</td><td>"+E_(fmtIso(x.last))+"</td></tr>"}).join("")+"</tbody></table>"
     +'<ul class="kc-ul kc-hist">'+list.slice(0,60).map(function(h){var c=L(h.id);return"<li>"+(h.ok?"✓ ":"✗ ")+E_(T_(h.ok?"kc.ch.histOk":"kc.ch.histFail"))+" — "+(c?'<button type="button" class="linklike" data-kc="start" data-id="'+E_(h.id)+'">'+E_(c.name)+"</button>":E_(h.id))+' <span class="muted small">'+E_(cName(h.char))+" · "+E_(fmtIso(h.at))+"</span></li>"}).join("")+"</ul>":'<div class="empty">'+E_(T_("kc.ch.histEmpty"))+"</div>")+"</div>";
}

/* ——— Patch Observatory ——— */
function comboDate(c){return c.createdAt||c.updatedAt||""}
function changeAffects(p,ch,c){if(c.game!==p.game)return false;if(ch.cat==="content"||ch.cat==="other")return false;if(ch.chars.length&&ch.chars.indexOf(c.character)<0)return false;var dt=comboDate(c);if(dt&&dt.slice(0,10)>=p.date)return false;return!S.patchOk[p.id+"|"+c.id]}
function affected(p,ch){return combosAll().filter(function(c){return changeAffects(p,ch,c)})}
function patchFlags(c){return D.PATCHES.filter(function(p){return p.changes.some(function(ch){return changeAffects(p,ch,c)})})}
function patchById(id){for(var i=0;i<D.PATCHES.length;i++)if(D.PATCHES[i].id===id)return D.PATCHES[i];return null}
function ptHome(){
  logoCss();
  return'<div class="kc-pt-games">'+Object.keys(b).map(function(g){var n=D.PATCHES.filter(function(p){return p.game===g}).length;return'<button type="button" class="kc-pt-game" data-kc="pt-game" data-game="'+E_(g)+'"><span class="kc-pt-logo">'+gl(g)+'</span><b>'+E_(gName(g))+'</b><span class="kc-pt-n">'+(n?E_(TF("kc.pt.n",n)):E_(T_("kc.pt.zero")))+"</span></button>"}).join("")+"</div>";
}
function pPatches(){
  var gm=U("pGame","");if(!b[gm])return ptHome();var q=U("pQ",""),pc=U("pChar",""),cat=U("pCat",""),openId=U("pOpen","");
  var note=D.GAME_PATCH_NOTE[gm]?tr(D.GAME_PATCH_NOTE[gm]):T_("kc.pt.none");
  var list=D.PATCHES.filter(function(p){return p.game===gm});
  var chars=uniq([].concat.apply([],list.map(function(p){return[].concat.apply([],p.changes.map(function(c){return c.chars}))})));
  var filt=function(c){return(!pc||c.chars.indexOf(pc)>=0)&&(!cat||c.cat===cat)&&(!q.trim()||hit(norm([tr(c.txt),c.chars.join(" "),c.chars.map(cName).join(" ")].join(" ")),q))};
  var filtering=!!(pc||cat||q.trim());
  var shown=list.filter(function(p){return!filtering||p.changes.some(filt)||(!pc&&!cat&&q.trim()&&hit(norm([p.title,p.ver,p.summary||""].join(" ")),q))});
  var from=U("pFrom",""),to=U("pTo","");
  var ghead='<div class="kc-pt-head"><button type="button" class="tiny" data-kc="pt-home">'+E_(T_("kc.pt.back"))+'</button><span class="kc-pt-logo">'+gl(gm)+'</span><h3 class="kc-h">'+E_(gName(gm))+"</h3></div>";
  if(!list.length)return ghead+'<div class="empty">'+E_(note)+"</div>";
  var top=ghead+'<div class="kc-filters">'
   +'<input id="kcPQ" type="search" autocomplete="off" value="'+E_(q)+'" placeholder="'+E_(T_("kc.pt.q"))+'" aria-label="'+E_(T_("kc.pt.q"))+'">'
   +'<select id="kcPChar" aria-label="'+E_(T_("kc.char"))+'">'+opt("",T_("kc.char")+" — "+T_("kc.all"),pc)+chars.map(function(x){return opt(x,cName(x),pc)}).join("")+"</select>"
   +'<select id="kcPCat" aria-label="'+E_(T_("kc.cat"))+'">'+opt("",T_("kc.cat")+" — "+T_("kc.all"),cat)+PCATS.map(function(x){return opt(x,T_("kc.pt.cat."+x),cat)}).join("")+"</select></div>"
   +'<p class="kc-info small">'+E_(note)+"</p>";
  var vsel=function(id,v){return'<select id="'+id+'" aria-label="'+E_(T_(id==="kcPFrom"?"kc.pt.from":"kc.pt.to"))+'">'+opt("",T_(id==="kcPFrom"?"kc.pt.from":"kc.pt.to"),v)+list.map(function(p){return opt(p.id,(p.ver||p.title)+" — "+fmtDay(p.date),v)}).join("")+"</select>"};
  var cmp='<div class="subpanel"><h3 class="kc-h">'+E_(T_("kc.pt.cmp"))+'</h3><div class="kc-filters">'+vsel("kcPFrom",from)+vsel("kcPTo",to)+"</div>"+versionDiff(patchById(from),patchById(to))+"</div>";
  var tl=shown.length?'<ol class="kc-timeline">'+shown.map(function(p){return"<li>"+patchCard(p,filtering?filt:null,openId===p.id)+"</li>"}).join("")+"</ol>":'<div class="empty">'+E_(T_("kc.pt.empty"))+"</div>";
  return top+cmp+tl;
}
function patchCard(p,filt,open){
  var ch=filt?p.changes.filter(filt):p.changes;
  var official=p.src.some(function(k){return/^(steam|bn|riot)/.test(k)});
  return'<article class="kc-patch'+(open?" kc-open":"")+'" id="kcPatch-'+E_(p.id.replace(/[^\w-]/g,"_"))+'"><div class="row between"><h3>'+E_(gName(p.game))+' · <time datetime="'+E_(p.date)+'">'+E_(fmtDay(p.date))+"</time> · "+E_(p.ver?("Version "+p.ver):p.title)+"</h3>"+badge(official?"official":"secondary")+"</div>"
   +(p.note||!p.ver?'<p class="muted small">'+(p.ver?"":E_(p.title))+(p.note?(p.ver?"":" — ")+E_(tr(p.note)):"")+"</p>":"")
   +(p.summary?'<p class="small"><b>'+E_(T_("kc.pt.summary"))+"</b> : <span lang=\"en\">"+E_(p.summary)+"</span></p>":"")
   +(ch.length?'<ul class="kc-changes">'+ch.map(function(c){var aff=affected(p,c);return'<li><span class="kc-badge">'+E_(T_("kc.pt.cat."+c.cat))+"</span> "+E_(tr(c.txt))
     +(c.chars.length?'<div class="kc-chips">'+c.chars.map(function(n){return'<button type="button" class="kc-chip" data-kc="open-char" data-game="'+p.game+'" data-c="'+E_(n)+'">'+E_(cName(n))+"</button>"}).join("")+"</div>":"")
     +(c.rel.length?'<div class="kc-chips">'+c.rel.filter(function(r){return ENC[r]}).map(function(r){return'<button type="button" class="kc-chip" data-kc="open-enc" data-id="'+r+'">📖 '+E_(ENC[r].term)+"</button>"}).join("")+"</div>":"")
     +(aff.length?'<div class="kc-warn small"><b>'+E_(T_("kc.pt.recheck"))+"</b> — "+E_(T_("kc.pt.recheckNote"))+aff.map(function(cb){return comboLink(cb,'<button type="button" class="tiny" data-kc="patch-ok" data-p="'+E_(p.id)+'" data-id="'+E_(cb.id)+'">'+E_(T_("kc.pt.rechecked"))+"</button>")}).join("")+"</div>":"")+"</li>"}).join("")+"</ul>":"")
   +'<p class="small">'+srcLinks(p.src)+'</p><p class="muted small">'+E_(T_("kc.id"))+" : <code>"+E_(p.id)+"</code></p></article>";
}
function versionDiff(A,B){
  if(!A||!B)return"";if(A.date>B.date){var t0=A;A=B;B=t0}
  var mid=D.PATCHES.filter(function(p){return p.game===A.game&&p.date>A.date&&p.date<=B.date}).sort(function(x,y){return x.date<y.date?-1:1});
  var byCat={};mid.forEach(function(p){p.changes.forEach(function(c){(byCat[c.cat]=byCat[c.cat]||[]).push([p,c])})});
  var sums=mid.filter(function(p){return!p.changes.length&&p.summary});
  if(!Object.keys(byCat).length&&!sums.length)return'<p class="muted small">'+E_(T_("kc.pt.cmpNone"))+"</p>";
  return PCATS.filter(function(c){return byCat[c]}).map(function(c){return"<h4>"+E_(T_("kc.pt.cat."+c))+'</h4><ul class="kc-ul">'+byCat[c].map(function(pc){return"<li><b>"+E_(pc[0].ver||fmtDay(pc[0].date))+"</b> — "+E_(tr(pc[1].txt))+"</li>"}).join("")+"</ul>"}).join("")
   +(sums.length?"<h4>"+E_(T_("kc.pt.summary"))+'</h4><ul class="kc-ul">'+sums.map(function(p){return"<li><b>"+E_(p.ver)+'</b> — <span lang="en">'+E_(p.summary)+"</span></li>"}).join("")+"</ul>":"");
}

/* ——— Character Mastery (fenêtre du module Personnages) ——— */
function masteryHtml(gm,chn){
  var combos=combosAll().filter(function(c){return c.game===gm&&c.character===chn});
  var mastered=combos.filter(function(c){return S.mastery[c.id]==="mastered"}).length;
  var hist=S.hist.filter(function(h){return h.game===gm&&h.char===chn});
  var att=0,ok=0;combos.forEach(function(c){var t0=trainOf(c.id);att+=t0.attempts||0;ok+=t0.successes||0});
  var gEntries=D.ENTRIES.filter(function(x){return x.games.indexOf(gm)>=0});
  var studied=gEntries.filter(function(x){return S.studied[x.id]});
  var seen=S.seen.filter(function(s){return s.game===gm&&(s.a===chn||s.b===chn)});
  var sits=S.sits.filter(function(s){return s.game===gm&&(s.a===chn||s.b===chn)});
  var teams=S.teams.filter(function(t){return t.game===gm&&members(t).indexOf(chn)>=0});
  var pch=[];D.PATCHES.forEach(function(p){if(p.game!==gm)return;p.changes.forEach(function(c){if(c.chars.indexOf(chn)>=0)pch.push([p,c])})});
  var sec=function(title,inner,btn){return'<section class="kc-ma-sec"><div class="row between"><h4>'+E_(title)+"</h4>"+(btn||"")+"</div>"+inner+"</section>"};
  var goBtn=function(v,attrs){return'<button type="button" class="tiny" data-kcm="go" data-v="'+v+'"'+(attrs||"")+">"+viewIcon(v)+" "+E_(TF("kc.ma.go",VIEW_NAME[v]))+"</button>"};
  var rows=combos.length?combos.map(function(c){var t0=trainOf(c.id),fl=patchFlags(c);return'<div class="kc-ma-combo"><button type="button" class="kc-res" data-kcm="combo" data-id="'+E_(c.id)+'"><b>'+E_(c.name)+'</b> <span class="muted small">'+E_(T_("kc.ch.att"))+" "+(t0.attempts||0)+" · "+E_(T_("kc.ch.okM"))+" "+(t0.successes||0)+" · "+E_(T_("kc.ch.okV"))+" 0"+(fl.length?" · ⚠ "+E_(TF("kc.pt.flag",fl[0].ver||fmtDay(fl[0].date))):"")+'</span></button><select data-kcm-sel="mstate" data-id="'+E_(c.id)+'" aria-label="'+E_(T_("kc.status")+" — "+c.name)+'">'+opt("",T_("kc.ms.none"),S.mastery[c.id]||"")+MSTATES.map(function(m){return opt(m,T_("kc.ms."+m),S.mastery[c.id]||"")}).join("")+'</select><button type="button" class="tiny" data-kcm="practice" data-id="'+E_(c.id)+'">🎮</button></div>'}).join(""):'<p class="muted small">'+E_(T_("kc.ma.noCombos"))+"</p>";
  return'<div class="kc-ma-head">'+portrait(gm,chn,"sm")+"<div><b>"+E_(cName(chn))+'</b><div class="muted small">'+E_(gName(gm))+"</div></div></div>"
   +'<p class="kc-ma-ind"><b>'+E_(TF("kc.ma.indicator",mastered,combos.length))+'</b></p><p class="muted small">'+E_(T_("kc.ma.calc"))+"</p>"
   +sec(T_("kc.ma.combos")+" ("+combos.length+")",badge("imported")+rows)
   +sec(T_("kc.ma.chal"),'<p class="small">'+E_(TF("kc.ma.chalLine",att,ok))+(hist.length?" · "+E_(T_("kc.ch.last"))+" : "+E_(fmtIso(hist[hist.length-1].at)):"")+"</p>",goBtn("challenge",' data-game="'+gm+'" data-c="'+E_(chn)+'"'))
   +sec(T_("kc.ma.notions"),'<p class="small">'+E_(TF("kc.ma.notionsLine",studied.length,gEntries.length,gName(gm)))+"</p>"+(studied.length?'<div class="kc-chips">'+studied.map(function(x){return'<button type="button" class="kc-chip" data-kcm="enc" data-id="'+x.id+'">'+E_(x.term)+"</button>"}).join("")+"</div>":""),goBtn("encyclopedia",' data-game="'+gm+'"'))
   +sec(T_("kc.ma.mu"),seen.length||sits.length?'<div class="kc-chips">'+seen.slice(0,10).map(function(s){var other=s.a===chn?s.b:s.a;return'<button type="button" class="kc-chip" data-kcm="mu" data-game="'+gm+'" data-a="'+E_(chn)+'" data-b="'+E_(other)+'">vs '+E_(cName(other))+"</button>"}).join("")+"</div>"+'<p class="small">'+E_(T_("kc.mu.mine"))+" : "+sits.length+"</p>":'<p class="muted small">'+E_(T_("kc.ma.none"))+"</p>",goBtn("matchups",' data-game="'+gm+'" data-a="'+E_(chn)+'"'))
   +sec(T_("kc.ma.teams"),teams.length?'<div class="kc-chips">'+teams.map(function(t){return'<button type="button" class="kc-chip" data-kcm="team" data-id="'+E_(t.id)+'">'+E_(t.name)+"</button>"}).join("")+"</div>":'<p class="muted small">'+E_(T_("kc.ma.none"))+"</p>",goBtn("teams"))
   +sec(T_("kc.ma.patches"),pch.length?'<ul class="kc-ul">'+pch.slice(0,8).map(function(pc){return'<li><button type="button" class="linklike" data-kcm="patch" data-id="'+E_(pc[0].id)+'">'+E_(pc[0].ver||fmtDay(pc[0].date))+"</button> — "+E_(tr(pc[1].txt))+"</li>"}).join("")+"</ul>":'<p class="muted small">'+E_(T_("kc.ma.none"))+"</p>",goBtn("patches",' data-game="'+gm+'" data-c="'+E_(chn)+'"'))
   +'<label class="kc-note"><span>'+E_(T_("kc.ma.notes"))+" "+badge("personal")+'</span><textarea id="kcMaNotes" rows="3">'+E_(S.charNotes[gm+"|"+chn]||"")+"</textarea></label>";
}
function mastery(gm,chn){
  if(!b[gm]||!chn)return;
  ce(T_("kc.ma.title")+" — "+cName(chn),'<div id="kcMastery" class="kc-mastery" data-game="'+E_(gm)+'" data-char="'+E_(chn)+'">'+masteryHtml(gm,chn)+"</div>");
  var box=a("kcMastery");if(!box)return;try{hydratePortraits()}catch(e){}
  var redraw=function(){keepFocus(function(){box.innerHTML=masteryHtml(gm,chn)});try{hydratePortraits()}catch(e){}};
  box.addEventListener("click",function(ev){var el=ev.target.closest("[data-kcm]");if(!el)return;var k=el.dataset.kcm;
    if(k==="combo")openCombo(el.dataset.id);
    else if(k==="practice"){startChallenge(el.dataset.id);go("challenge",{cResumed:el.dataset.id})}
    else if(k==="enc")go("encyclopedia",{encOpen:el.dataset.id});
    else if(k==="mu")go("matchups",{mGame:el.dataset.game,mA:el.dataset.a,mB:el.dataset.b});
    else if(k==="team")go("teams",{teamSel:el.dataset.id});
    else if(k==="patch"){var p=patchById(el.dataset.id);go("patches",{pGame:p?p.game:gm,pOpen:el.dataset.id})}
    else if(k==="go"){var v=el.dataset.v,pt={};if(v==="challenge"){pt.cGame=gm;pt.cChar=chn;pt.cMode="targeted"}else if(v==="encyclopedia"){pt.encGame=gm}else if(v==="matchups"){pt.mGame=gm;pt.mA=chn}else if(v==="patches"){pt.pGame=gm;pt.pChar=chn}go(v,pt)}
  });
  box.addEventListener("change",function(ev){var el=ev.target;if(el.dataset.kcmSel==="mstate"){if(el.value)S.mastery[el.dataset.id]=el.value;else delete S.mastery[el.dataset.id];save();redraw()}});
  box.addEventListener("input",function(ev){if(ev.target.id==="kcMaNotes"){var v=ev.target.value.slice(0,6000);if(v)S.charNotes[gm+"|"+chn]=v;else delete S.charNotes[gm+"|"+chn];saveSoon()}});
}

/* ——— Événements ——— */
var rerender=(function(){var tm=0;return function(now0){clearTimeout(tm);if(now0)render();else tm=setTimeout(render,140)}})();
function openSit(id){var s=null;S.sits.forEach(function(x){if(x.id===id)s=x});if(!s)return;go("matchups",{mGame:s.game,mA:s.a,mB:s.b,mCat:s.cat,mQ:""})}
function bind(r){
  r.addEventListener("click",function(ev){
    var el=ev.target.closest("[data-kc]");if(!el||!r.contains(el))return;var k=el.dataset.kc,id=el.dataset.id;
    switch(k){
      case"view":if(el.dataset.v==="patches")setU("pGame","");go(el.dataset.v);return;
      case"pt-game":setU("pGame",el.dataset.game);["pChar","pCat","pFrom","pTo","pOpen","pQ"].forEach(function(k){setU(k,"")});save();rerender(true);return;
      case"pt-home":setU("pGame","");save();rerender(true);return;
      case"open-enc":var oe2=entry(id);setU("encOpen",id);if(oe2&&U("encCat","")&&U("encCat","")!=="all"&&U("encCat","")!==oe2.cat&&!U("encQ","").trim())setU("encCat",oe2.cat);if(view()!=="encyclopedia"){go("encyclopedia");return}save();rerender(true);var dt=a("kcEncDetail");if(dt)dt.scrollTop=0;return;
      case"enc-cat":setU("encCat",el.dataset.c);setU("encOpen","");setU("encQ","");save();rerender(true);return;
      case"enc-home":setU("encCat","");setU("encOpen","");setU("encQ","");setU("encFav",false);setU("encStudied",false);save();rerender(true);return;
      case"enc-fav":var i=S.fav.indexOf(id);if(i>=0)S.fav.splice(i,1);else S.fav.push(id);save();rerender(true);return;
      case"enc-study":if(S.studied[id])delete S.studied[id];else S.studied[id]=now();save();rerender(true);return;
      case"open-combo":openCombo(id);return;
      case"open-char":openChar(el.dataset.game,el.dataset.c);return;
      case"open-ft":openFrames(el.dataset.game);return;
      case"open-team":go("teams",{teamSel:id});return;
      case"open-sit":openSit(id);return;
      case"open-mu":go("matchups",{mGame:el.dataset.game,mA:el.dataset.a,mB:el.dataset.b,mQ:""});return;
      case"open-patch":var p=patchById(id);go("patches",{pGame:p?p.game:"tokon",pOpen:id,pQ:"",pChar:"",pCat:""});setTimeout(function(){var n=document.getElementById("kcPatch-"+id.replace(/[^\w-]/g,"_"));if(n)n.scrollIntoView({block:"start"})},60);return;
      case"team-new":var t=newTeam(U("newTeamGame","umvc3"));if(t)rerender(true);return;
      case"team-dup":var src=team(U("teamSel",""));if(!src)return;var cp=JSON.parse(JSON.stringify(src));cp.id=uid("t");cp.name=(src.name+" "+T_("kc.team.copy")).slice(0,60);cp.createdAt=cp.updatedAt=now();S.teams.unshift(cp);setU("teamSel",cp.id);save();rerender(true);return;
      case"team-del":var td=team(U("teamSel",""));if(!td||!confirm(T_("kc.confirmDel")))return;S.teams=S.teams.filter(function(x){return x.id!==td.id});setU("teamSel",S.teams[0]?S.teams[0].id:"");save();rerender(true);return;
      case"team-move":var tm=team(U("teamSel",""));if(!tm)return;var ix=+el.dataset.i,jx=ix+(+el.dataset.d);if(jx<0||jx>=tm.members.length)return;var tmp=tm.members[ix];tm.members[ix]=tm.members[jx];tm.members[jx]=tmp;touch(tm);rerender(true);return;
      case"team-mu":var tt=team(id);if(!tt)return;var mm=members(tt);go("matchups",{mGame:tt.game,mTeam:tt.id,mA:mm[0]||"",mB:"",mQ:""});return;
      case"partner-team":var pg=U("partnerGame","umvc3"),pcn=U("partnerChar","");var nt=newTeam(pg);if(!nt)return;nt.members[0].char=pcn;if(el.dataset.c&&nt.members[1])nt.members[1].char=el.dataset.c;touch(nt);rerender(true);return;
      case"mu-swap":var A=U("mA",""),B=U("mB","");setU("mA",B);setU("mB",A);setU("mEdit","");save();rerender(true);return;
      case"mu-cat":setU("mCat",el.dataset.c);save();rerender(true);return;
      case"mu-pickA":setU("mA",el.dataset.c);save();rerender(true);return;
      case"sit-edit":setU("mEdit",id);save();rerender(true);var f=a("kcSitForm");if(f)f.scrollIntoView({block:"start"});return;
      case"sit-cancel":setU("mEdit","");save();rerender(true);return;
      case"sit-del":if(!confirm(T_("kc.confirmDel")))return;S.sits=S.sits.filter(function(x){return x.id!==id});save();rerender(true);return;
      case"play":var u=el.dataset.url;if(safeUrl(u))ce("▶",le(u));return;
      case"cmode":setU("cMode",el.dataset.m);save();rerender(true);return;
      case"draw":var pool=chPool(chFilters());if(!pool.length)return;var cur=S.active&&S.active.id;var cand=pool.length>1?pool.filter(function(c){return c.id!==cur}):pool;var pick=cand[Math.floor(Math.random()*cand.length)];startChallenge(pick.id);setU("cResumed",pick.id);save();rerender(true);return;
      case"start":startChallenge(id);setU("cResumed",id);if(view()!=="challenge"){go("challenge");return}save();rerender(true);return;
      case"ch-fail":case"ch-ok":var ac=S.active,c=ac&&L(ac.id);if(!c)return;d.training=d.training||{};var tr1=d.training[c.id]||(d.training[c.id]={best:0,attempts:0,successes:0});tr1.attempts=(tr1.attempts||0)+1;
        if(k==="ch-ok"){tr1.successes=(tr1.successes||0)+1;ac.streak++;tr1.best=Math.max(tr1.best||0,ac.streak)}else ac.streak=0;
        var chs=S.chal[c.id]||(S.chal[c.id]={goal:ac.goal,streak:0,okV:0,notes:""});chs.streak=ac.streak;
        S.hist.push({id:c.id,game:c.game,char:c.character,ok:k==="ch-ok",src:"manual",at:now()});if(S.hist.length>800)S.hist=S.hist.slice(-800);
        try{M()}catch(e){}save();if(k==="ch-ok"&&ac.streak===ac.goal)try{g(T_("kc.ch.goalDone"))}catch(e){}rerender(true);return;
      case"ch-stop":S.active=null;save();rerender(true);return;
      case"patch-ok":S.patchOk[el.dataset.p+"|"+id]=now();save();try{g(T_("kc.pt.recheckedDone"))}catch(e){}rerender(true);return;
    }
  });
  r.addEventListener("keydown",function(ev){var tab=ev.target.closest(".kc-tabs [role=tab]");if(!tab||(ev.key!=="ArrowRight"&&ev.key!=="ArrowLeft"))return;var i=VIEWS.indexOf(tab.dataset.v)+(ev.key==="ArrowRight"?1:-1);i=(i+VIEWS.length)%VIEWS.length;ev.preventDefault();go(VIEWS[i]);setTimeout(function(){var n=a("kcTab-"+VIEWS[i]);if(n)n.focus()},0)});
  r.addEventListener("change",function(ev){
    var el=ev.target,id=el.id;var t=team(U("teamSel",""));
    if(el.dataset.kcSel==="slot-char"&&t){var i=+el.dataset.i,v=el.value;if(v&&t.members.some(function(m,ix){return ix!==i&&m.char===v})){try{g(T_("kc.team.already"),true)}catch(e){}el.value=t.members[i].char;return}t.members[i].char=v;touch(t);rerender(true);return}
    if(el.dataset.kcSel==="slot-as"&&t){t.members[+el.dataset.i].assist=el.value;touch(t);return}
    if(el.dataset.kcSel==="team-link"&&t){var ci=t.combos.indexOf(el.dataset.id);if(el.checked&&ci<0)t.combos.push(el.dataset.id);if(!el.checked&&ci>=0)t.combos.splice(ci,1);touch(t);rerender(true);return}
    if(el.dataset.kcSel==="cf"){setU("c"+el.dataset.k.charAt(0).toUpperCase()+el.dataset.k.slice(1),el.value);if(el.dataset.k==="game")setU("cChar","");save();rerender(true);return}
    if(el.dataset.kcSel==="mstate"){if(el.value)S.mastery[el.dataset.id]=el.value;else delete S.mastery[el.dataset.id];save();return}
    var map={kcEncGame:"encGame",kcEncPad:"pad",kcEncCmpA:"encCmpA",kcEncCmpB:"encCmpB",kcNewTeamGame:"newTeamGame",kcTeamCmpA:"teamCmpA",kcTeamCmpB:"teamCmpB",kcTeamVs:"teamVs",kcPartnerGame:"partnerGame",kcPartnerChar:"partnerChar",kcMGame:"mGame",kcMA:"mA",kcMB:"mB",kcHGame:"hGame",kcHChar:"hChar",kcPGame:"pGame",kcPChar:"pChar",kcPCat:"pCat",kcPFrom:"pFrom",kcPTo:"pTo"};
    if(map[id]){setU(map[id],el.value);if(id==="kcPartnerGame")setU("partnerChar","");if(id==="kcMGame"){setU("mA","");setU("mB","");setU("mTeam","")}if(id==="kcMA"||id==="kcMB")setU("mEdit","");if(id==="kcPGame"){setU("pChar","");setU("pFrom","");setU("pTo","");setU("pOpen","")}if(id==="kcHGame")setU("hChar","");save();rerender(true);return}
    if(id==="kcEncFav"||id==="kcEncStudied"){setU(id==="kcEncFav"?"encFav":"encStudied",el.checked);save();rerender(true);return}
    if(id==="kcTeamName"&&t){t.name=(el.value.trim()||t.name).slice(0,60);touch(t);rerender(true);return}
    if(id==="kcTeamFuse"&&t){t.fuse=el.value;touch(t);return}
    if(id==="kcTeamTag"&&t){t.tag=TEAM_TAGS.indexOf(el.value)>=0?el.value:"";touch(t);return}
    if(id==="kcCGoal"&&S.active){var gv=Math.min(100,Math.max(1,Math.round(+el.value)||5));S.active.goal=gv;var cc=S.chal[S.active.id]||(S.chal[S.active.id]={goal:gv,streak:0,okV:0,notes:""});cc.goal=gv;save();rerender(true);return}
  });
  r.addEventListener("input",function(ev){
    var el=ev.target,id=el.id;
    if(id==="kcQ"){setU("gq",el.value.slice(0,120));saveSoon();rerender();return}
    if(id==="kcEncQ"){setU("encQ",el.value.slice(0,120));saveSoon();rerender();return}
    if(id==="kcMQ"){setU("mQ",el.value.slice(0,120));saveSoon();rerender();return}
    if(id==="kcPQ"){setU("pQ",el.value.slice(0,120));saveSoon();rerender();return}
    if(id==="kcEncNote"){var oid=U("encOpen","");if(entry(oid)){if(el.value)S.encNotes[oid]=el.value.slice(0,4000);else delete S.encNotes[oid];saveSoon()}return}
    if(id==="kcTeamNotes"){var t=team(U("teamSel",""));if(t){t.notes=el.value.slice(0,4000);t.updatedAt=now();saveSoon()}return}
    if(id==="kcCNotes"&&S.active){var cc=S.chal[S.active.id]||(S.chal[S.active.id]={goal:S.active.goal,streak:0,okV:0,notes:""});cc.notes=el.value.slice(0,4000);saveSoon();return}
  });
  r.addEventListener("submit",function(ev){
    if(ev.target.id!=="kcSitForm")return;ev.preventDefault();
    var gm=U("mGame","umvc3"),A=U("mA",""),B=U("mB","");if(!A||!B)return;
    var title=(a("kcSitTitle").value||"").trim().slice(0,160);if(!title){try{g(T_("kc.mu.needTitle"),true)}catch(e){}a("kcSitTitle").focus();return}
    var bad=[];var urls=function(id2){return(a(id2).value||"").split(/\s*\n\s*/).map(function(x){return x.trim()}).filter(Boolean).map(function(x){var s=safeUrl(x);if(!s)bad.push(x);return s}).filter(Boolean).slice(0,10)};
    var rec={cat:SIT_CATS.indexOf(a("kcSitCat").value)>=0?a("kcSitCat").value:"neutral",title:title,desc:a("kcSitDesc").value.slice(0,4000),opts:a("kcSitOpts").value.slice(0,4000),cond:a("kcSitCond").value.slice(0,2000),src:urls("kcSitSrc"),vids:urls("kcSitVid"),notes:a("kcSitNotes").value.slice(0,4000),tested:a("kcSitTested").checked,updatedAt:now()};
    var eid=ev.target.dataset.id,ex=null;S.sits.forEach(function(x){if(x.id===eid)ex=x});
    if(ex)Object.assign(ex,rec);else S.sits.unshift(Object.assign({id:uid("s"),game:gm,a:A,b:B,createdAt:now()},rec));
    setU("mEdit","");save();if(bad.length)try{g(TF("kc.mu.badUrl",bad.join(", ").slice(0,120)),true)}catch(e){}rerender(true);
  });
}

window.CDX_KC={render:render,mastery:mastery,views:VIEWS,names:VIEW_NAME,patchFlags:patchFlags,go:go};
})();
