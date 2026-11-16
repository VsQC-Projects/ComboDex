# ComboDex — chantier CF-02 (environnement isolé)

## État vérifié dans le dépôt
- `index.html` : page publique existante.
- `console.html` : page d'administration existante, avec `#adminGate`, `#atelierForm`, `#atelierKey` et `#atelierDash`.
- `cdx-admin.css` : styles administratifs existants.
- `cdx-app.js` : logique applicative partagée.
- `cdx-refs.js` : réglages des références/objets. Clés existantes : `perGame`, `peopleDesktop`, `peopleMobile`, `footerPc`, `footerMobile`, `logoPc`, `gap`, `tries`.
- `cdx-objets.js` : catalogue d'objets existant.

## Règles de ce chantier
1. CF-01 est déjà fait : ne pas le refaire.
2. Commencer par CF-02 : fiches de dossiers, historique, preuves, actions, navigation de console.
3. Ne pas fusionner cette branche dans `main` avant validation explicite.
4. Toute opération administrative sensible doit être vérifiée côté serveur ; une simple clé en JavaScript n'est pas une autorisation suffisante.
5. Préserver les données et fonctionnalités existantes.
6. Tester la persistance des réglages et leur effet réel dans le DOM (notamment `gap`).
7. Les statistiques ne doivent pas inventer des données.
8. Les autres phases (CF-03 à CF-08) suivent l'audit anti-doublons.

## Environnement local
Le workflow `ComboDex LOCAL - Audit et archive de test` construit une archive du dépôt sur la branche de travail et exécute des contrôles statiques. L'archive peut être servie localement via `python -m http.server 8765`.

**Limite actuelle** : ces contrôles ne constituent pas un test navigateur de bout en bout, et la copie locale n'a pas encore été exécutée dans un navigateur dans ce chantier. Ne pas déclarer CF-02 achevé.

## Première campagne de tests manuels à exécuter
- Accès console, ouverture et fermeture de la navigation.
- Modification `gap` de 4 à 30 : mesure d'un écart réellement différent entre objets.
- Sauvegarde, rechargement, puis confirmation de la valeur conservée.
- Modification de chacun des plafonds d'objets et vérification de l'affichage.
- Contrôle des PNG manquants et erreurs réseau.
- Vérification ordinateur et mobile.
- Contrôle des permissions administratives.
