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
   Réponse : [LIEN DU FICHIER](essais-n0\yael-chatbot-v1.html)
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
5. 
| Critère                | A                                                            | B                                                        | C                                                        |
| ----------------------- | ------------------------------------------------------------ | -------------------------------------------------------- | -------------------------------------------------------- |
| Structure du code       | 254 lignes                                                   | 176 lignes                                               | 322 lignes                                               |
| Comportement à l'envoi | Répond sur le thème<br />Donne des indices si aucun thème | Répond sur le thème
Donne des indices si aucun thème  | Répond sur le thème
Donne des indices si aucun thème  |
| Ce qui manque           | Mémoire, Effacer                                            | Mémoire, Effacer                                        | Mémoire, Effacer                                        |
| Ce qui diffère         | SonicWave Festival<br />Tutoie                               | Assistant du Festival de Musique<br />Vouvoie            | FestiBot – Festival de Musique<br />Vouvoie             |

6. Les écarts montrent que même avec le même prompt, les réponses peuvent varier en code et en style de réponses. Cela interdit de supposer que le résultat sera identique à chaque fois, et il est important de tester plusieurs fois pour évaluer la fiabilité et la cohérence des réponses.