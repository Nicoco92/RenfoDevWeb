# J1-02 ·  Premier prompt

## Prompt : 
En une seule page HTML que j'ouvre dans mon navigateur. Je veux un chatbot pour un festival de musique. Il doit s'addresser aux festivaliers. Fait un chatbot propre et moderne en respectant une DA de festival de musique. 

## Le résultat : 
 ```html
<!doctype html>
<html lang="fr">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pulsar Festival — Assistant des Festivaliers</title>
    <style>
        :root {
            --bg: #0c0815;
            --bg-soft: #161029;
            --panel: #1b1330;
            --accent: #ff3d81;
            --accent2: #7c4dff;
            --accent3: #00e5c0;
            --text: #f4f1ff;
            --muted: #a79ec7;
            --radius: 18px;
            font-family: "Inter", "Segoe UI", system-ui, sans-serif;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html,
        body {
            height: 100%;
        }

        body {
            background: radial-gradient(1200px 600px at 80% -10%, rgba(124, 77, 255, .35), transparent 60%),
                radial-gradient(900px 500px at 0% 100%, rgba(255, 61, 129, .25), transparent 55%),
                var(--bg);
            color: var(--text);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        .app {
            width: 100%;
            max-width: 440px;
            height: min(780px, 92vh);
            display: flex;
            flex-direction: column;
            background: linear-gradient(180deg, rgba(27, 19, 48, .95), rgba(12, 8, 21, .95));
            border: 1px solid rgba(255, 255, 255, .08);
            border-radius: 26px;
            box-shadow: 0 30px 80px rgba(0, 0, 0, .6);
            overflow: hidden;
            backdrop-filter: blur(10px);
        }

        /* Header */
        header {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 18px 20px;
            border-bottom: 1px solid rgba(255, 255, 255, .07);
            background: linear-gradient(90deg, rgba(255, 61, 129, .15), rgba(124, 77, 255, .15));
        }

        .logo {
            width: 44px;
            height: 44px;
            border-radius: 14px;
            flex-shrink: 0;
            background: linear-gradient(135deg, var(--accent), var(--accent2));
            display: grid;
            place-items: center;
            box-shadow: 0 6px 20px rgba(255, 61, 129, .45);
        }

        .logo svg {
            width: 24px;
            height: 24px;
        }

        header h1 {
            font-size: 17px;
            font-weight: 800;
            letter-spacing: .3px;
        }

        header .status {
            font-size: 12px;
            color: var(--muted);
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: var(--accent3);
            box-shadow: 0 0 8px var(--accent3);
        }

        /* Chat */
        #chat {
            flex: 1;
            overflow-y: auto;
            padding: 20px 18px;
            display: flex;
            flex-direction: column;
            gap: 14px;
            scroll-behavior: smooth;
        }

        #chat::-webkit-scrollbar {
            width: 6px;
        }

        #chat::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, .15);
            border-radius: 3px;
        }

        .msg {
            display: flex;
            gap: 10px;
            max-width: 88%;
            animation: pop .25s ease both;
        }

        .msg.bot {
            align-self: flex-start;
        }

        .msg.user {
            align-self: flex-end;
            flex-direction: row-reverse;
        }

        @keyframes pop {
            from {
                opacity: 0;
                transform: translateY(8px);
            }

            to {
                opacity: 1;
                transform: none;
            }
        }

        .avatar {
            width: 34px;
            height: 34px;
            border-radius: 50%;
            flex-shrink: 0;
            display: grid;
            place-items: center;
            font-size: 16px;
            background: linear-gradient(135deg, var(--accent2), var(--accent));
        }

        .msg.user .avatar {
            background: linear-gradient(135deg, #2ea8ff, var(--accent3));
        }

        .bubble {
            padding: 12px 15px;
            border-radius: var(--radius);
            font-size: 14.5px;
            line-height: 1.55;
            white-space: pre-line;
        }

        .bot .bubble {
            background: var(--panel);
            border: 1px solid rgba(255, 255, 255, .07);
            border-top-left-radius: 6px;
        }

        .user .bubble {
            background: linear-gradient(135deg, var(--accent2), #a13dff);
            border-top-right-radius: 6px;
            box-shadow: 0 4px 16px rgba(124, 77, 255, .35);
        }

        .bubble b {
            color: var(--accent3);
        }

        .typing {
            display: inline-flex;
            gap: 5px;
            padding: 6px 2px;
        }

        .typing span {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: var(--muted);
            animation: blink 1.2s infinite;
        }

        .typing span:nth-child(2) {
            animation-delay: .2s;
        }

        .typing span:nth-child(3) {
            animation-delay: .4s;
        }

        @keyframes blink {

            0%,
            60%,
            100% {
                opacity: .25;
                transform: translateY(0);
            }

            30% {
                opacity: 1;
                transform: translateY(-3px);
            }
        }

        /* Quick replies */
        #chips {
            display: flex;
            gap: 8px;
            padding: 10px 14px 4px;
            overflow-x: auto;
            scrollbar-width: none;
        }

        #chips::-webkit-scrollbar {
            display: none;
        }

        .chip {
            flex-shrink: 0;
            cursor: pointer;
            font-size: 12.5px;
            font-weight: 600;
            color: var(--text);
            padding: 7px 14px;
            border-radius: 999px;
            background: rgba(255, 255, 255, .06);
            border: 1px solid rgba(255, 255, 255, .14);
            transition: .2s;
        }

        .chip:hover {
            background: rgba(124, 77, 255, .25);
            border-color: var(--accent2);
        }

        /* Input */
        form {
            display: flex;
            gap: 10px;
            padding: 14px 16px 18px;
        }

        input {
            flex: 1;
            padding: 13px 18px;
            font-size: 14.5px;
            color: var(--text);
            background: rgba(255, 255, 255, .06);
            border: 1px solid rgba(255, 255, 255, .12);
            border-radius: 999px;
            outline: none;
            transition: .2s;
        }

        input::placeholder {
            color: #7d7399;
        }

        input:focus {
            border-color: var(--accent);
            box-shadow: 0 0 0 3px rgba(255, 61, 129, .15);
        }

        button.send {
            width: 48px;
            height: 48px;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            background: linear-gradient(135deg, var(--accent), var(--accent2));
            display: grid;
            place-items: center;
            transition: .2s;
            box-shadow: 0 6px 20px rgba(255, 61, 129, .4);
        }

        button.send:hover {
            transform: scale(1.06);
        }

        button.send:active {
            transform: scale(.95);
        }

        button.send svg {
            width: 20px;
            height: 20px;
        }
    </style>
</head>

<body>
    <div class="app">
        <header>
            <div class="logo">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path d="M9 18V5l12-2v13" />
                    <circle cx="6" cy="18" r="3" />
                    <circle cx="18" cy="16" r="3" />
                </svg>
            </div>
            <div>
                <h1>PULSAR · Assistant</h1>
                <div class="status"><span class="dot"></span> En ligne — 24/7 pendant le festival</div>
            </div>
        </header>
        <div id="chat"></div>
        <div id="chips"></div>
        <form id="form" autocomplete="off">
            <input id="input" type="text" placeholder="Pose ta question…" />
            <button class="send" type="submit" aria-label="Envoyer">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"
                    stroke-linejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" fill="#fff" stroke="none" />
                </svg>
            </button>
        </form>
    </div>

    <script>
        const chat = document.getElementById("chat");
        const form = document.getElementById("form");
        const input = document.getElementById("input");
        const chipsBox = document.getElementById("chips");

        const FEST = {
            name: "Pulsar Festival",
            dates: "du 12 au 14 juin 2026",
            lieu: "Parc des Étoiles, Bordeaux",
            scene: "3 scènes : Nova, Eclipse et Supernova",
            prix: "Pass 1 jour 69 € · Pass 3 jours 159 € (camping inclus)",
        };

        const RULES = [
            {
                k: [/\b(bonjour|salut|hello|hey|coucou|yo)\b/i],
                a: () => `Hey ! Bienvenue au ${FEST.name} 🎶 Je suis l'assistant des festivaliers. Programme, billets, accès, sécurité… pose-moi ta question !`
            },
            {
                k: [/\b(date|quand|jour)\b/i],
                a: () => `Le festival a lieu ${FEST.dates} 🗓️ Les portes ouvrent chaque jour à 14h et les concerts finissent à 2h du matin.`
            },
            {
                k: [/\b(ou|lieu|adresse|site|localis|carte)\b.*\b(c(est|est)|festival|se trouve|situe|ca se passe)/i, /\b adresse \b/i],
                a: () => `Tout se déroule au ${FEST.lieu} 📍 Suivre le fléchage "Pulsar" depuis la sortie B du tram C, ou les navettes gratuites depuis la gare toutes les 20 min.`
            },
            {
                k: [/\b(billet|pass|ticket|prix|tarif|co[ûu]t|acheter|payer)\b/i],
                a: () => `🎟️ ${FEST.prix}\nAchat sur pulsar-festival.fr (CB, PayPal, 3x sans frais). Le bracelet est activé à l'entrée avec une pièce d'identité. Attention : les contrefaçons ne donnent pas accès au site !`
            },
            {
                k: [/\b(programme|line ?up|lineup|artistes?|concerts?|sc[eè]ne|horaire|affiche)\b/i],
                a: () => `🎵 Le programme complet est sur l'app et au point Info. ${FEST.scene}.\nVendredi : Electro de 18h à 2h (scène Supernova)\nSamedi : Rock & indie toute la journée (scène Nova)\nDimanche : Hip-hop et clôture firework à 23h 🎆`
            },
            {
                k: [/\b(camping|dormir|nuit|tente)\b/i],
                a: () => `⛺ Le camping est inclus dans le Pass 3 jours : douches chaudes, bornes de recharge, espace calme de 2h à 8h. Tentes et van (emplacement limité, sur réservation à l'entrée).`
            },
            {
                k: [/\b(manger|boire|nourriture|food|resto|vegan|v[ée]g[ée]|gluten)\b/i],
                a: () => `🍔 24 food-trucks : burgers, Poke bowls, vegan, sans gluten (étiquetés) et pâtisseries locales. Prix moyens : 8–14 € le plat, gourde d'eau potable gratuite sur tout le site.`
            },
            {
                k: [/\b(buvette|alcool|bi[eè]re|boissons?)\b/i],
                a: () => `🍺 Les buvettes servent de 14h à 1h. Payez en "Pulsar Cashless" (rechargez votre bracelet sur l'app pour éviter la queue). L'alcool est réservé aux +18 : pensez à votre pièce d'identité.`
            },
            {
                k: [/\b(acces|aller|transport|tram|bus|navette|train|voiture|parking|garer)\b/i],
                a: () => `🚍 Navettes gratuites toutes les 20 min depuis la gare. Tram C jusqu'à 1h du matin. Parking relais à 10 €/jour avec navette. Vélo : parcage sécurisé gratuit à l'entrée Est.`
            },
            {
                k: [/\b(objet|interdit|sac|apporter|drogue|cigarette|cigarette electronique)\b/i],
                a: () => `🚫 Interdits : bouteilles en verre, parapluies, drone, appareil pro, sticker de haine. ✅ Autorisés : gourde vide, casquette, crème solaire, e-cig. Fouille des sacs à l'entrée (max format A4 pour aller plus vite).`
            },
            {
                k: [/\b(securite|secours|premiers? soins|m[ée]dical|urgence|perdu|objet trouv[ée]|enfants?|mineur)\b/i],
                a: () => `🏥 Poste de secours ouvert 24/24 (bouton SOS dans l'app). Espace objets trouvés près de la sortie Ouest. Le festival est interdit aux -16 non accompagnés ; 16-17 ans : autorisation parentale à l'entrée.`
            },
            {
                k: [/\b(meteo|temps|pleuvoir|pluit|chaud|soleil)\b/i],
                a: () => `🌤️ Prévoyez crème solaire ET K-way, on est en juin ! En cas de forte chaleur : zones ombragées, brumisateurs et distribution d'eau gratuite. Le festival a lieu même sous la pluie.`
            },
            {
                k: [/\b(merci|top|g[ée]nial|super|cool)\b/i],
                a: () => `Avec plaisir ! 🙌 Bon festival, prends soin de toi et de tes potes. Une autre question ?`
            },
            {
                k: [/\b(pulse|pulsar|festival)\b$/i],
                a: () => `${FEST.name} — ${FEST.dates}, ${FEST.lieu}. 🎡 3 jours, 3 scènes, 60 artistes. Que veux-tu savoir : programme, billets, accès, camping ?`
            },
            {
                k: [/\b(rgpd|donn[ée]es|privacy|confidentialit[ée])\b/i],
                a: () => `Tes données ne sont utilisées que pour ton bracelet et les notifications du festival. Aucune revente à des tiers. Détails au point Info ou sur pulsar-festival.fr/confidentialite.`
            },
        ];

        const FALLBACK = `Hmm, je n'ai pas tout saisi 😅 Essaie avec : "programme", "billets", "accès", "camping", "objets interdits" ou "premiers secours".`;
        const CHIPS = ["📅 Dates & horaires", "🎵 Programme", "🎟️ Billets & tarifs", "🚌 Accès", "⛺ Camping", "🍔 Food & buvettes", "🚫 Objets interdits", "🏥 Sécurité & secours", "🌤️ Météo"];

        function addMsg(who, html) {
            const el = document.createElement("div");
            el.className = "msg " + who;
            const av = who === "bot"
                ? `<div class="avatar">🎧</div>`
                : `<div class="avatar">👤</div>`;
            el.innerHTML = av + `<div class="bubble">${html}</div>`;
            chat.appendChild(el);
            chat.scrollTop = chat.scrollHeight;
            return el;
        }

        function answer(q) {
            for (const r of RULES) if (r.k.some(re => re.test(q))) return r.a();
            return FALLBACK;
        }

        function botReply(q) {
            const t = addMsg("bot", `<span class="typing"><span></span><span></span><span></span></span>`);
            setTimeout(() => {
                t.querySelector(".bubble").innerHTML = answer(q);
                chat.scrollTop = chat.scrollHeight;
            }, 600 + Math.random() * 500);
        }

        form.addEventListener("submit", e => {
            e.preventDefault();
            const q = input.value.trim();
            if (!q) return;
            addMsg("user", q.replace(/</g, "&lt;"));
            input.value = "";
            botReply(q);
        });

        CHIPS.forEach(c => {
            const b = document.createElement("button");
            b.className = "chip";
            b.textContent = c;
            b.onclick = () => { addMsg("user", c.replace(/</g, "&lt;")); botReply(c); };
            chipsBox.appendChild(b);
        });

        addMsg("bot", `Bienvenue au ${FEST.name} 🎶✨ Je réponds à toutes tes questions : programme, billets, accès, camping, sécurité… Clique sur une suggestion ou écris directement !`);
    </script>
</body>

</html>
 ```


 ## Observations : 
 
 Le modèle d'IA de Mistral crée du code qui n'est pas toujours fonctionnel, il utilise les mêmes thèmes visuel. 

 # J1-03 Jusqu'à quand 

 ## Liste de contrôle de la première version : 

✅ L'envoi fonctionne avec la touche Entrée ou le bouton flèche.
✅ L'animation des 3 petits points (« typing ») s'affiche avant la réponse du bot.
✅ Le bot répond avec les infos du festival (dates, billets, camping, etc.).
✅ Le champ de saisie est vidé après l'envoi.
✅ Le design sombre avec dégradés violet/rose est bien appliqué.

## Modification 1 : Bouton "Effacer"
- **Ce que j'ai demandé** : `Ajoute un bouton "Effacer la conversation" qui remet le chat à zéro. Redonne-moi le code HTML complet en un seul bloc.`
- **Ce qui marche maintenant** : Un bouton « 🗑️ Effacer » apparaît dans le header et vide les messages pour réinitialiser le message d'accueil.
- **Ce qui marchait avant et ne marche plus** : Aucune régression constatée.
- **Ce que je n'avais pas vu, et comment je l'ai trouvé** : J'ai retesté la liste de contrôle complète (suggestions chips, envoi clavier, typing animation). Le header s'est un peu resserré avec le bouton mais l'alignement flexbox est resté intact.

## Modification 2 : Refuser les messages vides
- **Ce que j'ai demandé** : `Empêche l'envoi d'un message vide ou contenant uniquement des espaces. Redonne-moi le code HTML complet en un seul bloc.`
- **Ce qui marche maintenant** : Impossible d'envoyer du vide ou uniquement des espaces ; une animation CSS visuelle (`shake`) secoue le champ de saisie pour prévenir l'utilisateur.
- **Ce qui marchait avant et ne marche plus** : Aucune régression constatée.
- **Ce que je n'avais pas vu, et comment je l'ai trouvé** : En testant l'envoi avec 3 espaces, le trim fonctionne bien (`q.trim()`) et le focus reste actif dans l'input sans recharger.

## Modification 3 : Persistance localStorage
- **Ce que j'ai demandé** : `Fais en sorte que la conversation soit sauvegardée dans le localStorage pour qu'elle reste affichée après avoir rechargé la page avec F5. Redonne-moi le code HTML complet en un seul bloc.`
- **Ce qui marche maintenant** : La conversation persiste après un rechargement F5 grâce à la clé `pulsar-chat-history`. Le bouton Effacer vide à la fois l'écran et le stockage.
- **Ce qui marchait avant et ne marche plus** : Aucune régression fonctionnelle constatée.
- **Ce que je n'avais pas vu, et comment je l'ai trouvé** : En testant la relecture après F5, les messages précédents réapparaissent instantanément sans ré-exécuter l'animation de frappe (typing).

## Chasse à l'angle mort (trouvé avec mon binôme)
- **Mot très long sans espaces** (60 caractères `a...a`) : Le mot déborde visuellement car il manque `overflow-wrap: break-word` ou `word-break: break-all` sur la classe `.bubble`.
- **Injection de code HTML** (`<b>gras</b>`) : Le script remplace `<` par `&lt;`, ce qui évite que le texte devienne gras, mais l'utilisation de `innerHTML` dans le code reste un risque de sécurité par rapport à un vrai `textContent`.
- **Envois multiples rapides** : Cliquer très vite plusieurs fois sur les suggestions empile plusieurs bulles d'animation « typing » en même temps.

## Deux phrases de conclusion
1. Même si Mistral a réussi à intégrer chaque demande sans casser l'existant, sans notre liste de contrôle nous n'aurions pas pu avoir la certitude que les animations, les suggestions ou le responsive n'avaient pas régressé.
2. La chasse à l'angle mort prouve que le code généré paraît parfait en surface mais dissimule des cas limites non gérés (débordement de texte long, sécurité XSS partielle via innerHTML) qu'une simple demande en langage naturel ne suffit pas à garantir. 

# J1-04 · Même prompt, autre réponse

## Prompt de référence (identique aux trois essais) :
« En une seule page HTML que j'ouvre dans mon navigateur. Je veux un chatbot pour un festival de musique. Il doit s'adresser aux festivaliers. Fais un chatbot propre et moderne en respectant une DA de festival de musique. »

*(Ce prompt a été relancé mot pour mot dans trois conversations neuves distinctes sur Mistral).*

## Tableau des écarts :

| Critère | Essai A (`nicolas-essai-A.html`) | Essai B (`nicolas-essai-B.html`) | Essai C (`nicolas-essai-C.html`) |
|---|---|---|---|
| **Structure du code** | 514 lignes. Page HTML unique, styles en `<head>`, scripts en bas de `<body>`. Police "Segoe UI". | 438 lignes. Page HTML unique, `<style>` dans `<head>`, `<script>` en fin de `<body>`. Police "Segoe UI". | 501 lignes. Page HTML unique, styles en `<head>`, scripts en bas de `<body>`. Utilise `async/await` et fonction `sleep()`. |
| **Comportement à l'envoi** | Bot nommé « Bloom » (SonicBloom Festival). Système de score par mot-clé (`findAnswer`), horodatage (`.time`), rotation de fallbacks. | Bot nommé « SUNBLAST Assist ». Matching par dictionnaire `RULES` et `.includes()`, masque les suggestions (`chips`) pendant la frappe. | Bot nommé « SOLSTICE Festival ». Normalisation Unicode NFD des accents (`norm()`), score pondéré par la longueur des mots clés. |
| **Ce qui manque** | Aucune mémoire `localStorage` (perte à F5), aucun bouton d'effacement, message vide ignoré silencieusement sans retour visuel. | Pas de `localStorage`, pas de bouton Effacer, pas de feedback d'erreur sur champ vide (simple `return` silencieux). | Pas de `localStorage`, pas de bouton Effacer, champ vide ignoré sans retour visuel ni secousse. |
| **Ce qui diffère** | DA : néon violet/rose (`#8b5cf6`, `#ff2d95`), avatar console DJ 🎛️, ton dynamique. | DA : violet et orange/jaune chaud (`#ffb020`), logo casque 🎧, bouton flèche `➤`, bandeau multicolore. | DA : violet/rose/cyan, logo lettre « S » sur dégradé, point d'état vert pulsant en CSS (`@keyframes pulse`). |

## Phrase de conclusion :
Ces écarts nous autorisent à faire confiance au modèle pour produire rapidement une maquette visuelle séduisante et pertinente sur le thème, mais ils nous interdisent formellement de supposer que l'implémentation technique, les fonctionnalités de robustesse (gestion des erreurs, mémoire) ou l'algorithme sous-jacent seront stables et reproductibles d'une exécution à l'autre. 

# J1-05 · dsh en main

## Preuve :
- `dsh --version` : `0.1.5-rc.2`
- Espace de travail : `/Users/nicolascontrerastibocha/Downloads/cap-web-j1/atelier`
- Modèle sélectionné : `capweb-ia`
- Mode de permission : `Read Only` (vérifié avec `/permission`)
- `git status -- atelier` : « nothing to commit, working tree clean » (aucun fichier modifié)
- Clé API : stockée uniquement dans `~/dsh-capweb/.credentials.yaml` (chmod 600), aucune fuite dans le projet.

## Consigne envoyée :
> « Liste les fichiers de ce dossier et dis ce que fait chacun. Donne le chemin de chaque fichier. Si tu ne sais pas ce que fait un fichier, écris « je ne sais pas ». N'écris rien et ne modifie rien. »

## Réponse de l'agent :
```text
Voici les fichiers du dossier atelier — lecture seule, rien n'a été modifié :
Dossier : /Users/nicolascontrerastibocha/Downloads/cap-web-j1/atelier
Chemin : /Users/nicolascontrerastibocha/Downloads/cap-web-j1/atelier/README.md Ce que fait ce fichier : documentation de l'atelier J1 — explique comment démarrer (npm start), vérifier (npm test, npm run verify), et le rôle des checkpoints.
Chemin : /Users/nicolascontrerastibocha/Downloads/cap-web-j1/atelier/package.json Ce que fait ce fichier : manifeste npm du projet — déclare le nom, le type module ES, Node >=24.20, les scripts (start, test, lint, test:browser, verify) et les devDependencies (eslint, playwright, axe-core).
Chemin : /Users/nicolascontrerastibocha/Downloads/cap-web-j1/atelier/package-lock.json Ce que fait ce fichier : verrouille les versions exactes des dépendances npm pour une installation reproductible (npm ci).
Chemin : /Users/nicolascontrerastibocha/Downloads/cap-web-j1/atelier/.gitignore Ce que fait ce fichier : liste les dossiers ignorés par Git (node_modules/, dist/, preuves/, test-results/, playwright-report/, coverage/).
Chemin : /Users/nicolascontrerastibocha/Downloads/cap-web-j1/atelier/eslint.config.js Ce que fait ce fichier : configuration ESLint (flat config) — définit les règles pédagogiques (no-unused-vars, eqeqeq, no-var, prefer-const) et les globales navigateur vs Node selon le dossier.
Chemin : /Users/nicolascontrerastibocha/Downloads/cap-web-j1/atelier/playwright.config.js Ce que fait ce fichier : configuration Playwright — test Chromium headless sur http://127.0.0.1:4173/, dossier de tests ./browser, démarre automatiquement le serveur via node server/start.js.
Chemin : /Users/nicolascontrerastibocha/Downloads/cap-web-j1/atelier/server/app.js Ce que fait ce fichier : crée le serveur HTTP (createApp) — sert uniquement la liste explicite /, /index.html, /styles.css, /js/app.js+ /version.json, gère GET/HEAD, 404/405, types MIME, sans fuite de fichiers privés.
Chemin : /Users/nicolascontrerastibocha/Downloads/cap-web-j1/atelier/server/start.js Ce que fait ce fichier : point d'entrée du serveur — fixe le dossier public, valide le PORT (défaut 3000), écoute sur 127.0.0.1, gère l'arrêt propre sur SIGINT/SIGTERM.
Chemin : /Users/nicolascontrerastibocha/Downloads/cap-web-j1/atelier/public/index.html Ce que fait ce fichier : page d'accueil HTML — structure avec <main>, titre Cap Web, paragraphe, zone #status, charge styles.css et js/app.js.
Chemin : /Users/nicolascontrerastibocha/Downloads/cap-web-j1/atelier/public/styles.css Ce que fait ce fichier : feuille de style minimale — police system-ui, marges, couleur, centrage du main.
Chemin : /Users/nicolascontrerastibocha/Downloads/cap-web-j1/atelier/public/js/app.js Ce que fait ce fichier : script navigateur — affiche le texte « Votre point de départ est prêt. » dans l'élément #status.
Chemin : /Users/nicolascontrerastibocha/Downloads/cap-web-j1/atelier/tests/server.test.js Ce que fait ce fichier : 9 tests serveur Node (node:test) — vérifie GET/HEAD, MIME, /version.json, 404, 405, et non-divulgation des chemins privés et traversals.
Chemin : /Users/nicolascontrerastibocha/Downloads/cap-web-j1/atelier/browser/depart.spec.js Ce que fait ce fichier : 1 test navigateur Playwright — vérifie que la page charge le titre Cap Web, que le status existe, et qu'il n'y a aucune erreur JavaScript.
```

## Vérification de l'agent :
- `README.md` : **Existe**, description **juste** (documente l'atelier J1, le lancement et les tests).
- `package.json` : **Existe**, description **juste** (manifeste npm, configuration ES module, scripts et outils dev).
- `package-lock.json` : **Existe**, description **juste** (arbre des dépendances figé).
- `.gitignore` : **Existe**, description **juste** (liste des exclusions de suivi git).
- `eslint.config.js` : **Existe**, description **juste** (règles de linting JavaScript modernes).
- `playwright.config.js` : **Existe**, description **juste** (configuration des tests E2E navigateur).
- `server/app.js` : **Existe**, description **juste** (logique du serveur HTTP et filtrage strict des routes).
- `server/start.js` : **Existe**, description **juste** (script exécutable lançant le serveur HTTP sur le port 3000).
- `public/index.html` : **Existe**, description **juste** (page d'accueil sémantique avec main et p#status).
- `public/styles.css` : **Existe**, description **juste** (feuille de styles CSS sobre).
- `public/js/app.js` : **Existe**, description **juste** (script client écrivant le statut au chargement).
- `tests/server.test.js` : **Existe**, description **juste** (tests Node.js du serveur).
- `browser/depart.spec.js` : **Existe**, description **juste** (test Playwright du rendu de départ).
- **Fichier non cité** : `carnet.md` (ou `cap-web-j1/README.md`) car situé dans le dossier parent racine, ce qui prouve que l'agent est bien confiné dans son espace de travail `atelier`. 

