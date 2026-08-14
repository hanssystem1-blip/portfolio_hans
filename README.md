# Portfolio — Kamdem Hans

CV numérique interactif construit avec Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Radix UI et Lucide React.

## Démarrer en local

```bash
npm run dev
```
Ouvrir http://localhost:3000

## Modifier le contenu

Toutes les informations personnelles sont centralisées dans `src/data/` :

- `profile.ts` — nom, titre, intro, email, WhatsApp, GitHub, LinkedIn, fichier CV
- `skills.ts` — compétences par catégorie
- `projects.ts` — les 4 projets (besoin, solution, fonctionnalités, stack, rôle, liens)
- `experience.ts` — formations, expériences, certifications
- `contact.ts` — liens dérivés automatiquement de profile.ts

Aucune modification de composant n'est nécessaire pour changer le contenu.


## Build production

```bash
npm run build
npm run start
```
