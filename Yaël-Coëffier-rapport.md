# J1-01

Dossier de lancement :

atelier

Commande et résultat :

cd atelier
npm run start
npm notice run cap-web-atelier@0.1.0 start
npm notice run node server/start.js
Cap Web prêt sur http://127.0.0.1:3000/

6. Le `p#status` est-il vide dans le HTML ? Qui écrit sa phrase ?
   Oui il est vide. La phrase est écrite par le script `atelier/public/js/app.js` qui modifie le contenu du paragraphe `p#status` après le chargement de la page.


# J1-02

8. Trois lignes d'observation (ce que j'ai vu en utilisant la page) :
   hors thème : le chatbot répond par défaut qu'il ne comprend pas. "Hmm, je ne suis pas sûr de comprendre 😅 Essaie des mots-clés comme « billets », « programmation », « accès », « camping »… ou tape « aide »."

sur le thème : le chatbot répond correctement aux questions sur le festival de musique, en donnant des informations sur les billets, la programmation et l'accès. "🎤 Programmation 2026 : Vendredi : DJ Snake, ..."

9. :
   Prompt : "Fais-moi un chatbot sur (Festival de Musique), dans une seule page HTML que j'ouvre dans mon navigateur."
   Réponse : [LIEN DU FICHIER](essais-n0/yael-chatbot-v1.html)
   Observations :
   Design violet, dégradé, très "design vibe codé"
   Limité, peu d'interactions possibles
   Fonctionne uniquement en local


# J1-03

2. Liste de contrôle de la version 1 (cinq à huit comportements essayés) :

- Entrée envoie le message
- Le message apparaît dans la liste
- Le bot répond sur le thème
- Le bot ne répond pas aux messages hors thème
- Appyer sur un des boutons pré-définis envoie le message correspondant
- Le bot répond correctement aux messages pré-définis

3. Les 3 modifications :

- Bouton "Effacer" qui vide la conversation
- Garder les messages après rechargement de la page
- Bouton de dark mode/light mode

5. Tout est bon
6. Rien n'a cassé, j'ai vérifié en testant tous les comportements de la liste de contrôle après chaque modification.
7. Tout est bon, la modification 2 fonctionne et n'a pas cassé les autres comportements.
   la modification 3 fonctionne et n'a pas cassé les autres comportements.
8. Je n'ai rien trouvé
9. Rien n'a cassé, j'ai vérifié en testant tous les comportements de la liste de contrôle après chaque modification.


# J1-04

1. Le prompt de référence (identique aux trois essais) :
   "Fais-moi un chatbot sur (Festival de Musique), dans une seule page HTML que j'ouvre dans mon navigateur."
2. 

| Critère                          | A                                                         | B                                             | C                                           |
| -------------------------------- | --------------------------------------------------------- | --------------------------------------------- | ------------------------------------------- |
| Structure du code                | 254 lignes                                                | 176 lignes                                    | 322 lignes                                  |
| Comportement à l'envoi           | Répond sur le thème<br />Donne des indices si aucun thème | Répond sur le thème                           |                                             |
| Donne des indices si aucun thème | Répond sur le thème                                       |                                               |                                             |
| Donne des indices si aucun thème |                                                           |                                               |                                             |
| Ce qui manque                    | Mémoire, Effacer                                          | Mémoire, Effacer                              | Mémoire, Effacer                            |
| Ce qui diffère                   | SonicWave Festival<br />Tutoie                            | Assistant du Festival de Musique<br />Vouvoie | FestiBot – Festival de Musique<br />Vouvoie |

6. Les écarts montrent que même avec le même prompt, les réponses peuvent varier en code et en style de réponses. Cela interdit de supposer que le résultat sera identique à chaque fois, et il est important de tester plusieurs fois pour évaluer la fiabilité et la cohérence des réponses.


# J1-05

1. Vérifez l'agent :
   `Chemin : /RenfoDevWeb/atelier/.gitignore Ce qu'il fait : Dit à Git quels dossiers ne pas suivre / ne pas sauvegarder : node_modules/, dist/, preuves/, test-results/, playwright-report/, coverage/.`
   **EXISTE, Description Juste**

`Chemin : /RenfoDevWeb/atelier/eslint.config.js Ce qu'il fait : Configuration d'ESLint (outil de vérification du style de code). Définit des règles pédagogiques simples (no-unused-vars, no-undef, eqeqeq, no-var, prefer-const) et les variables globales autorisées pour le navigateur, pour Node, pour browser/, server/, tests/, etc.`
**EXISTE, Description Juste**

`Chemin : /RenfoDevWeb/atelier/package.json Ce qu'il fait : Manifeste du projet npm cap-web-atelier en module ES, Node >=24.20.0. Définit les scripts : start (lance node server/start.js), test (tests serveur Node), lint (ESLint), test:browser (Playwright), verify (lint + tests + navigateur). Liste les devDependencies : @axe-core/playwright, @playwright/test, eslint.`
**EXISTE, Description Juste**

`Chemin : /RenfoDevWeb/atelier/package-lock.json Ce qu'il fait : Fichier de verrouillage npm. Enregistre les versions exactes et les URLs de toutes les dépendances installées pour reproduire la même installation.`
**EXISTE, Description Juste**

`Chemin : /RenfoDevWeb/atelier/playwright.config.js Ce qu'il fait : Configuration des tests navigateur Playwright. Lance Chromium headless sur http://127.0.0.1:4173, dossier de tests ./browser, démarre automatiquement le serveur local avec node server/start.js.`
**EXISTE, Description Juste**

`Chemin : /RenfoDevWeb/atelier/README.md Ce qu'il fait : Documentation de l'atelier J1 — Cap Web. Explique comment démarrer (cd atelier, npm start), comment vérifier (npm test, npm run verify), et le lien avec les checkpoints.`
**EXISTE, Description Juste**

9. Constatez que rien n'a changé :
   Consigne - "Liste les fichiers de ce dossier et dis ce que fait chacun. Donne le chemin de chaque fichier. Si tu ne sais pas ce que fait un fichier, écris « je ne sais pas ». N'écris rien et ne modifie rien."
   Réponse - "Voici les fichiers situés directement dans ce dossier `atelier` :"
10. Toujours clean


# J1-06

2. Prompt vague : « Écris la page de Cap Web : un formulaire, une liste de messages et un statut. »
   "escalate sandbox to workspace-write: Écrire la page Cap Web demandée nécessite de modifier `public/index.html` dans l'atelier."
   "escalate sandbox to workspace-write: Écrire la logique du formulaire Cap Web demandée nécessite de modifier `public/js/app.js`."
   "escalate sandbox to workspace-write: Mettre en page la page Cap Web demandée nécessite de modifier `public/styles.css`.
   "
3. ```sh
   Changes not staged for commit:
   (use "git add <file></file>..." to update what will be committed)
     (use "git restore <file></file>..." to discard changes in working directory)
           modified:   atelier/public/index.html
           modified:   atelier/public/js/app.js
           modified:   atelier/public/styles.css
   ```

## Vague

La page affiche en plus maintenant, un champ de saisie avec un label "Votre texte", un bouton "Envoyer", aucun style visuel n'a été ajouté (couleurs, polices, etc.),

Au clic, une liste non ordonnée avec le texte saisi s'affiche en dessous du formulaire, et le statut affiche "Message envoyé.".

Le champ de saisie est vidé après l'envoi.

6. ```txt
   Je modifie uniquement public/index.html, public/styles.css et public/js/app.js, sans créer d'autre fichier.
   Je mets maxlength="380" sur textarea#message.
   Je garde form#chat-form, textarea#message, ul#messages, p#status, avec tout le contenu dans un main, un seul h1 « Cap Web », html lang="fr".
   J'utilise un label lié au champ, un button type="submit" « Envoyer », et p#status avec role="status", sans bibliothèque ni adresse https://.
   app.js empêche seulement le rechargement à l'envoi et écrit « Interface prête. » dans le statut, sans ajouter de message.
   ```

"Ok"

7. 
```txt
RÔLE : Tu es développeur web. Tu écris du HTML, du CSS et du JavaScript sans bibliothèque, pour des débutants.

TÂCHE : Écris le squelette de la page de « Cap Web », un assistant sur Festival de Musique : un formulaire, une liste de messages, une ligne de statut.

CONTRAINTES :
- Modifie uniquement public/index.html, public/styles.css et public/js/app.js. Le serveur ne sert que ces trois fichiers : n'en crée aucun autre.
- Garde ces identifiants : form#chat-form, textarea#message, ul#messages, p#status.
- Le champ #message est limité à <380> caractères (maxlength).
- Le contenu de la page est dans un main. Un seul h1 (« Cap Web »), un label lié au champ, un bouton « Envoyer », p#status avec role="status", html lang="fr". Aucune bibliothèque, aucune adresse https://.

FORMAT DE SORTIE : d'abord la liste de tes hypothèses (cinq au plus), puis tu t'arrêtes. Après mon « ok », tu écris les trois fichiers, puis tu réponds par la liste des fichiers écrits.

EXEMPLES ET CONTRE-EXEMPLES : voulu : <button type="submit">Envoyer</button>. Refusé : <div onclick="envoyer()">Envoyer</div> (ce n'est pas un bouton) ; un fichier script.js à côté de app.js (le serveur répondrait 404).

CRITÈRE D'ARRÊT : app.js empêche seulement le rechargement de la page à l'envoi et écrit alors « Interface prête. » dans le statut ; il n'ajoute aucun message à la liste. Quand les trois fichiers sont écrits, tu t'arrêtes.
```

escalate sandbox to workspace-write: Écriture du squelette Cap Web demandé (index.html) après refus du mode lecture seule.
escalate sandbox to workspace-write: Écriture du squelette Cap Web demandé (styles.css) avec la permission déjà accordée.
escalate sandbox to workspace-write: Écriture du squelette Cap Web demandé (app.js) avec la permission déjà accordée.

```sh
Changes not staged for commit:
(use "git add <file></file>..." to update what will be committed)
    (use "git restore <file></file>..." to discard changes in working directory)
        modified:   atelier/public/index.html
        modified:   atelier/public/js/app.js
        modified:   atelier/public/styles.css
```

```sh
✔ GET / sert la page d’accueil en HTML (42.0382ms)
✔ GET /styles.css sert la feuille de style en CSS (6.7333ms)
✔ GET /js/app.js sert le script en JavaScript (3.8944ms)
✔ HEAD / répond sans corps avec les mêmes en-têtes (17.7584ms)
✔ GET /version.json renvoie la version fournie (5.966ms)
✔ GET inconnu répond 404 (4.3314ms)
✔ POST sur une ressource statique est refusé avec 405 (2.2363ms)
✔ les chemins privés ne divulguent aucun fichier (13.8866ms)
✔ traversal et chemins encodés ne divulguent aucun fichier (11.8664ms)
ℹ tests 9
ℹ suites 0
ℹ pass 9
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 290.2815
```

## Structuré

La page est équivalente, mais ne permet plus de vider le champ de saisie après l'envoi et d'ajouter des messages à la liste. Le statut affiche "Interface prête." au lieu de "Message envoyé."

## Grille (✔ ou ✘)

| Critère                                                                 | Prompt vague | Prompt structuré |
| ----------------------------------------------------------------------- | ------------ | ---------------- |
| La page s'affiche sans erreur (F12, onglet Console)                     | ✔            | ✔                |
| Formulaire, liste et statut sont là, avec les quatre identifiants       | ✔            | ✔                |
| Seuls les trois fichiers autorisés ont changé (`git status -- atelier`) | ✔            | ✔                |
| `npm test` reste vert                                                   | ✔            | ✔                |
| Aucune bibliothèque, aucune adresse `https://`                          | ✔            | ✔                |
| Vous savez expliquer chaque partie de la page en une phrase             | ✔            | ✔                |

9. --
Entre les deux résultats, ce qui a le plus changé, c'est :
Je n'ai plus les messages qui se mettent dans le chat au sumbit du bouton
Parce que la partie XXX de mon prompt disait :
Pas une partie en particulier mais, on lui a mis une vraie structure, sans trop de place pour l'interprétation, ce qui a empêché l'agent de faire ce qu'il voulait, et donc de mettre les messages dans le chat, qui n'étaient pas demandé dans le prompt vague, mais pas interdit non plus.


# J1-07

2. Trois questions sur le thème (Festival de Musique) :
Question 1 : Peux-tu me présenter le festival ?
Question 2 : Quelle est la programmation des artistes ?
Question 3 : Comment se rendre au festival ?

Étape 1 : Ajouter sous le formulaire une liste de trois boutons, un par question.
Étape 2 : Au clic sur un bouton, copie le texte du bouton dans le champ de saisie.
Étape 3 : Après le clic, le curseur est dans le champ et le statut dit « Question copiée : modifiez-la ou envoyez-la. »

3. J’ajoute sous le formulaire, dans le main, une liste de trois button type="button", avec le texte exact de tes trois questions.
Je garde tout l’existant inchangé : form#chat-form, textarea#message (maxlength="380"), ul#messages, p#status avec role="status", un seul h1 « Cap Web », label lié, bouton « Envoyer », html lang="fr", sans bibliothèque ni https://.
Au clic, le JS copie le texte du bouton cliqué dans #message, sans envoyer le formulaire ni ajouter de message à la liste.
Après la copie, le JS place le curseur dans le champ (focus, curseur en fin) et écrit dans le statut : « Question copiée : modifiez-la ou envoyez-la. »
L’envoi garde son comportement actuel : preventDefault() et « Interface prête. » dans le statut.
Découpage : je garderais ton découpage en trois étapes tel quel — il suit l’ordre HTML puis JS puis finition, donc je ne le découperais pas autrement.

Je le garde tel quel

5. J’ai vérifié le diff, il ne contient que les boutons demandés.

7. Étape 1 acceptée : les boutons sont bien présents, rien d’autre n’a été ajouté.

8. Étape 2 acceptée : au clic sur un bouton, le texte est bien copié dans le champ, sans envoi ni ajout de message.
Étape 3 acceptée : après le clic, le curseur est bien dans le champ et le statut affiche « Question copiée : modifiez-la ou envoyez-la. »

9. Aucun refus, tout est bon


# J1-08

1. --
* Les repères `header`, `section` et `footer` n'existent pas dans le HTML. Le `main` est présent.
* Il n'y a qu'un seul `h1` et les titres sont correctement hiérarchisés.
* Le `label` est bien lié au champ de saisie.
* La liste des messages est une vraie liste avec un id, pas de aria-label, et un seul élément `#status` porte `role="status"`.
* `lang="fr"` se trouve en dehors du `head`, comme il devrait l'être. Le `title` et le `viewport` sont présents dans le `head`.
* Un seul bouton s'appelle « Envoyer » : les boutons de questions n'utilisent pas ce mot.


| Lentille (structure, clavier, écrans) | Où (élément ou fichier)                                | Comment je l'ai vu                                                                                                                                         |
| ------------------------------------- | ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Structure sémantique                  | `main`, `h1`, `label`, `ul#messages`                   | Le `main` est présent, il n'y a qu'un seul `h1`, le `label` est bien lié au champ de saisie et la liste des messages est une vraie liste.                  |
| Accessibilité clavier                 | `form#chat-form`, `textarea#message`, bouton “Envoyer” | Le formulaire est simple à utiliser au clavier, le champ est bien associé à son label et le bouton principal est un vrai bouton.                           |
| Accessibilité écran                   | `p#status`, `label`, `ul#messages`                     | Le statut est bien annoncé avec `role="status"`, le label est correctement relié au champ et la structure de la page reste claire pour un lecteur d’écran. |

2. --
* [TAB] atteint le champ, le bouton Envoyer, puis les trois boutons de questions, dans un ordre logique.
* On voit bien le focus
* [ENTRÉE] dans le champ : une nouvelle ligne est ajoutée. [TAB] jusqu'à Envoyer puis [ENTRÉE] : le statut « Interface prête. » s'affiche, sans rechargement.
* [ENTRÉE] ou [ESPACE] sur un bouton de question copie la question dans le champ, sans l'envoyer.

| Lentille (structure, clavier, écrans) | Où (élément ou fichier)                                    | Comment je l'ai vu                                                                                                                                                                       |
| ------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Navigation clavier                    | `textarea#message`, bouton “Envoyer”, boutons de questions | En appuyant sur `Tab`, on atteint le champ, puis le bouton “Envoyer”, puis les boutons de questions, dans un ordre logique. Le focus est visible.                                        |
| Interaction clavier                   | `textarea#message`, bouton “Envoyer”, boutons de questions | En appuyant sur `Entrée` dans le champ, une nouvelle ligne est ajoutée. En navigant avec `Tab` puis en validant avec `Entrée`, le statut “Interface prête.” s’affiche sans rechargement. |
| Interaction bouton                    | boutons de questions                                       | En appuyant sur `Entrée` ou `Espace` sur un bouton de question, la question est copiée dans le champ sans l’envoyer.                                                                     |

3. --
* Aucun défilement horizontal à 360, 768 et 1280 px
* Oui, tout est bon
* Le mot très long dépasse la largeur de l'écran à toutes les largeurs testées
* Non, aucun `overflow: hidden` sur `html` ou `body`

| Lentille (structure, clavier, écrans) | Où (élément ou fichier)                                    | Comment je l'ai vu                                                                                                             |
| ------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Visibilité des éléments               | `textarea#message`, bouton “Envoyer”, boutons de questions | Les éléments sont bien visibles, distincts et faciles à repérer sur la page.                                                   |
| Retour visuel                         | `p#status`, focus sur le champ                             | Le statut est clair et visible, et le focus est bien identifiable quand on navigue au clavier.                                 |
| Distinction des actions               | boutons “Envoyer” et boutons de questions                  | Les boutons de questions se distinguent bien des actions principales, et le comportement est facile à comprendre visuellement. |

