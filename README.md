# Provence-Peinture
Notre projet universitaire de développement d'interfaces web

Lien du site : https://samuel-amu.github.io/Provence-Peinture/

# Architecture et rôle des pages
/ (Racine)
├── index.html          # Page d'accueil : Présentation générale et navigation vers les sections.
├── robots.txt          # Référencement : Instruction pour les robots de référencement.
├── css/                # Styles
│   ├── global.css      # Variables, typographie, Navbar/Footer commun à tout le site.
│   ├── index.css       # Style pour la page d'accueil.
│   ├── peintres.css    # Style pour la page peintres.html.
│   ├── lieux.css       # Style pour la page lieux.html.
│   ├── styles.css      # Style pour la page styles.html.
│   └── video.css       # Style pour la page video.html.
├── html/               # Pages Html
│   ├── peintres.html   # Détails sur les artistes (Cézanne, Van Gogh...).
│   ├── lieux.html      # Les lieux emblématiques peints.
│   ├── styles.html     # Les styles artistiques.
│   └── video.html      # Page multimédia (vidéo youTube + formulaire de contact).
├── js/                 # Scripts
│   ├── menu-toggle.js  # Gestion du menu burger (mobile) et du bouton "Retour haut".
│   └── select-theme.js # Gestion du changement de thème (clair/sombre).
└── images/             # Images du site.
    └── logo.png        # Le logo du site.


# ✅ Respect des consignes et réalisations

# 🌍 Hébergement et accessibilité

**Consigne :** Site hébergé et accessible sur le Web.
**Réalisation :** Le site est hébergé via GitHub Pages


# 🖼️ Identité visuelle et SEO

**Consigne :** Favicon présent et Meta description renseignée.
**Réalisation :**
* Favicon intégré dans le `<head>` (`<link rel="icon" ...>`).
* Balise `<meta name="description">` sur chaque page.


# 📝 Contenu et pertinence

**Consigne :** Contenu pertinent sur un thème au choix.
**Réalisation :** Le site traite de l'art en Provence avec des explications.


# 🧭 Navigation

**Consigne :** Menu toujours présent et liens vers d'autres sites.
**Réalisation :**
* Barre de navigation (`<nav>`) présente en haut de chaque page.
* Liens externes vers des sources (Wikipedia, musées) présents dans les pages (ouverture dans un nouvel onglet avec `target="_blank"`).


# 📩 Interactivité

**Consigne :** Formulaire ergonomique avec génération d'e-mail.
**Réalisation :**
* Page `video.html`.
* Formulaire (`required`, `type="email"`).
* Utilisation de `action="mailto:..."` pour déclencher l'ouverture de la messagerie pré-rempli.


# 🎥 Multimédia

**Consigne :** Vidéo de moins de 2 minutes.
**Réalisation :**
* Intégration responsive d'une vidéo via `<iframe>` sur la page `video.html`.
* Utilisation de l'attribut `aspect-ratio: 16/9` pour éviter les déformations.


# ⬆️ Ergonomie

**Consigne :** Ancrage pour remonter en haut de page.
**Réalisation :**
* Bouton flèche (Javascript `menu-toggle.js`).
* Apparition dynamique au scroll (`window.addEventListener('scroll')`) et défilement fluide (`scroll-behavior: smooth`).


# 🌗 Changement de style

**Consigne :** Changement de style via JavaScript et feuilles de style alternatives.
**Réalisation :**
* Implémentation d'un mode sombre.
* Le script `select-theme.js` modifie l'attribut `data-theme` du HTML.
* Utilisation des variables CSS (`:root`) pour basculer les couleurs.
* Sauvegarde du thème dans le `localStorage`.


# 📱 Responsive

**Consigne :** Adaptatif sur smartphones, tablettes et ordinateurs.
**Réalisation :**
* Utilisation de Flexbox et CSS Grid.
* Media Queries (`@media (max-width: 768px)`) pour transformer le menu en menu burger et passer les grilles en colonne sur mobile.


# 🏗️ Qualité du code & architecture

**Consigne :** Bonne architecture et programmation soignée.
**Réalisation :**
* Dossiers séparés (`css`, `js`, `img`, `html`).
* Classes en anglais.
* Indentation et commentaires dans les fichiers.
* Utilisation des balises HTML5 (`<header>`, `<main>`, `<article>`, `<footer>`, `<address>`).


# 🚀 Performance, accessibilité & SEO

**Accessibilité :** Attributs `alt` sur toutes les images et couleurs vérifiés.
**Référencement local :** Balise `<address>` dans le footer avec les coordonnées de l'IUT.
**Réseaux sociaux :** Balises Open Graph (`og:title`, `og:image`) pour les réseaux sociaux.
**Référencement global :** Fichier `robots.txt` à la racine pour guider les robots de référencement.
**Optimisation :** Attribut `loading="lazy"` sur les images pour le chargement.


# ✅ Validation W3C

**HTML :** Validé avec https://validator.w3.org.
**CSS :** Validé avec https://jigsaw.w3.org/css-validator/.


# 🛠️ Gestion de projet

**Outils :** Utilisation de Git et GitHub pour le versionning et le suivi des modifications.
