# ComboDex — Recherche d'images authentiques
Objectif : **15 PNG par jeu**, soit **225 fichiers** sur 15 jeux.

Lancer manuellement le workflow GitHub Actions **PNG authentic source research (15 per game)** depuis la branche `work/png-authentiques-15-par-jeu`. Télécharger l'artifact `combodex-png-candidates` depuis l'exécution.

Le collecteur n'invente aucune image : il interroge Wikimedia Commons, récupère des fichiers réels, contrôle le canal alpha et écrit un inventaire avec URL et licence. Les résultats sont des **candidats**, pas une garantie d'appartenance au jeu. Un contrôle humain est requis pour l'identité des éléments et les droits. Un dossier peut rester vide si les sources ne proposent pas de fichiers correspondants. Le script ne contourne pas les restrictions des sites.

Le workflow est volontairement isolé de la publication du site. Aucun PNG n'est automatiquement intégré à ComboDex.
