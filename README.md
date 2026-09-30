# Benjamin Champly — site de consulting

Site statique autonome, en français, sans installation ni dépendance externe.

## Tester localement

Ouvrir `dist/index.html` dans un navigateur : le site fonctionne directement, y compris le menu mobile et le formulaire.

Pour utiliser un serveur local, depuis ce dossier :

```sh
python3 -m http.server 8000 --directory dist
```

Puis ouvrir http://localhost:8000. Arrêter avec Ctrl+C.

## Personnaliser avant publication

- Renseigner votre adresse professionnelle dans `dist/config.js`. Le formulaire préparera alors un e-mail dans la messagerie du visiteur. Il n'envoie rien lui-même et nécessite une messagerie configurée.
- Sans adresse, le formulaire permet de télécharger un brouillon texte et indique explicitement qu'aucun message n'est envoyé.
- Vérifier le nom « Benjamin Champly », repris du contexte du compte, et adapter les formulations des offres si nécessaire.
- Le contenu est dans `dist/index.html`, le design dans `dist/styles.css` et les interactions dans `dist/script.js`.
- Ajouter les informations légales adaptées au statut et à l'hébergement avant une mise en ligne publique.

## Contenu et fonctionnement

Hero, proposition de valeur, quatre offres, parcours, méthode en quatre étapes, exemples de missions et contact. Aucun témoignage, nom d'entreprise ou résultat chiffré inventé. Les missions décrivent des accompagnements proposés, pas des réalisations clients.

Navigation mobile, accordéons natifs, libellés de formulaire, focus clavier visibles et respect de la préférence de réduction des animations. Aucune police distante, aucun cookie, aucune mesure d'audience, aucune collecte côté serveur. Tous les fichiers à héberger sont dans `dist/`. Aucune publication n'a été effectuée.
