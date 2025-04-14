# Cabinet Médical Dr. Samira Maghfour

Site web moderne pour le cabinet de médecine générale du Dr. Samira Maghfour à Marrakech.

## Aperçu

Ce projet est un site vitrine multilingue (français/arabe) pour un cabinet médical, réalisé avec React, Vite et Tailwind CSS. Il présente les services, l'équipe, les horaires, les avis patients, la FAQ, et permet de contacter ou prendre rendez-vous facilement.

## Fonctionnalités

- **Multilingue** : Français 🇫🇷 et Arabe 🇲🇦 (RTL support)
- **Section Héros** : Présentation moderne, CTA rapide, horaires, urgence
- **À propos** : Biographie, diplômes, expérience, approche médicale
- **Services** : Liste détaillée et illustrée des prestations
- **Contact** : Adresse, téléphone, horaires, carte Google Maps intégrée
- **Avis patients** : Témoignages et retours d’expérience
- **FAQ** : Questions fréquentes sur les consultations et services
- **Design responsive** : Adapté mobile, tablette, desktop
- **Accessibilité** : Contrastes, navigation clavier, textes alternatifs

## Démarrage rapide

### Prérequis

- Node.js >= 18
- npm ou yarn

### Installation

```bash
git clone https://github.com/votre-utilisateur/cabinet-dr-maghfour.git
cd cabinet-dr-maghfour
npm install
# ou
yarn install
```

### Lancer en développement

```bash
npm run dev
# ou
yarn dev
```

Le site sera accessible sur https://cabinet-dr-maghfour.ma

### Build production

```bash
npm run build
# ou
yarn build
```

### Déploiement

Le dossier `dist/` contient les fichiers statiques à déployer sur votre hébergement.

## Structure du projet

```
src/
  components/      // Composants React (Hero, About, Services, Contact, Faq, etc.)
  contexts/        // Contextes (langue, etc.)
  translations/    // Fichiers de traduction FR/AR
  assets/          // Images, icônes, etc.
  index.css        // Styles globaux (inclut Tailwind)
  main.tsx         // Point d'entrée React
public/
  favicon.png      // Favicon du site
  ...
tailwind.config.js // Configuration Tailwind CSS
vite.config.ts     // Configuration Vite
```

## Personnalisation

- **Traductions** : Modifiez `src/translations/index.ts` pour adapter les textes.
- **Palette de couleurs** : Personnalisez dans `tailwind.config.js`.
- **Images** : Remplacez les images dans `src/assets/` ou via les URLs dans les composants.

## Dépendances principales

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) (icônes)
- [@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)
- [@tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography)

## Contribution

Les contributions sont les bienvenues !  
Merci de créer une issue ou une pull request pour toute suggestion ou amélioration.

## Licence

MIT

---

© Dr. Samira Maghfour – Cabinet médical à Marrakech