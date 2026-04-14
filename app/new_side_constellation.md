# PROMPT CLAUDE CODE — Application de Préparation de Cours

## Contexte global

Cette application Next.js **existe déjà et propose un module de création de slides**. Tu vas l'étendre avec un second module : **Constellation de Cours**. L'application devient un hub avec deux outils distincts accessibles depuis la page d'accueil.

**NE PAS recréer le projet from scratch.** Tu travailles dans le projet Next.js existant. Ajoute les routes, composants et logiques nécessaires en t'intégrant à l'architecture en place.

---

## Contexte philosophique (IMPORTANT — à lire avant de coder)

Le module Constellation est un outil de préparation de cours pour un philosophe/conférencier. Sa pédagogie repose sur des principes précis :

- **Ne jamais calculer** : le cours n'est pas un texte à réciter, c'est une constellation de symboles vivants qu'on traverse librement.
- **Vivre le symbole pendant qu'on le dit** : chaque élément du cours est ancré dans le vécu actuel du conférencier.
- **Deux langages** : Manas (langage de l'âme — toucher le cœur, court-circuiter le mental) et Kama-manas (langage de la personnalité — clarté, plan, humour, structure).
- **Finalité** : libérer les gens, leur donner de l'autonomie. Jamais convertir ni faire adhérer.

L'application doit rester **organique, belle, et non-mécanique**. Ce n'est PAS un formulaire administratif — c'est une carte de navigation intérieure.

---

## Stack technique

- **Next.js 14+** (App Router) — déjà en place
- **React 18+ / TypeScript** — déjà en place
- **Shadcn/ui** — déjà en place
- **Tailwind CSS** — déjà en place
- **Framer Motion** — à ajouter si pas déjà installé
- **Zustand** — state management
- **Persistance** : localStorage + dossier local `.md`

Dépendances à ajouter si absentes :
```bash
npm install framer-motion zustand uuid gray-matter
npm install -D @types/uuid
```

---

## 1. PAGE D'ACCUEIL — Le Hub (`app/page.tsx`)

La page d'accueil devient un **hub de choix** entre les deux modules. Design épuré, deux grandes cartes côte à côte (ou empilées sur mobile).

### Layout :

```
┌─────────────────────────────────────────────────┐
│              Mes outils de cours                 │
│                                                  │
│   ┌───────────────────┐  ┌───────────────────┐  │
│   │                   │  │                   │  │
│   │    📊 SLIDES      │  │  ✦ CONSTELLATIONS │  │
│   │                   │  │                   │  │
│   │  Créer et éditer  │  │  Préparer un      │  │
│   │  des présentations│  │  cours vivant      │  │
│   │                   │  │                   │  │
│   │   [12 slides]     │  │  [8 constellations]│  │
│   │                   │  │  [3 fichiers .md]  │  │
│   └───────────────────┘  └───────────────────┘  │
└─────────────────────────────────────────────────┘
```

### Comportement :

- **Carte Slides** : redirige vers le module slides existant (conserver la route actuelle). Icône/visuel évoquant des slides. Affiche le nombre de présentations existantes.
- **Carte Constellations** : redirige vers `/constellations`. Icône/visuel évoquant une constellation (petits cercles reliés). Affiche le nombre de constellations créées + le nombre de fichiers `.md` importés.
- Les deux cartes ont un **hover subtil** (légère élévation, bordure qui s'illumine).
- **Palette cohérente** entre les deux modules mais chacun a sa teinte identitaire :
  - Slides : tons bleu/gris (garder le style existant)
  - Constellations : tons ambre/crème chauds

---

## 2. MODULE CONSTELLATIONS — Architecture

### Routes :

```
app/
├── page.tsx                              # Hub d'accueil (les deux cartes)
├── constellations/
│   ├── page.tsx                          # Dashboard constellations
│   ├── new/
│   │   └── page.tsx                      # Créer nouvelle constellation
│   ├── [id]/
│   │   └── page.tsx                      # Éditer une constellation
│   └── imported/
│       ├── page.tsx                      # Liste des .md importés (lecture depuis dossier local)
│       └── [slug]/
│           └── page.tsx                  # Visualisation d'un .md importé
```

### Composants :

```
components/
├── home/
│   ├── ModuleCard.tsx                    # Carte générique pour le hub
│   └── HomeHub.tsx                       # Layout du hub
├── constellation/
│   ├── ConstellationCanvas.tsx           # Vue principale — le schéma interactif
│   ├── NoyauNode.tsx                     # Le cercle central (symbole brûlant)
│   ├── SatelliteNode.tsx                 # Un satellite avec ses 3 branches
│   ├── BranchBox.tsx                     # Boîte vécu/référence/friction
│   ├── ArcDramatique.tsx                 # Section arc dramatique
│   ├── ArcTypeCard.tsx                   # Carte d'un type d'arc avec visuel SVG
│   ├── ConstellationToolbar.tsx          # Barre d'outils
│   ├── BoussoleEthique.tsx              # Bandeau rappel de finalité
│   ├── ModeEmploi.tsx                   # Encart dépliable mode d'emploi
│   ├── ConstellationTemplate.tsx        # Le template vierge (référence visuelle)
│   ├── MarkdownViewer.tsx               # Rendu d'un fichier .md constellation
│   └── MarkdownExporter.tsx             # Logique d'export .md
├── dashboard/
│   ├── ConstellationCard.tsx            # Carte aperçu d'une constellation
│   ├── ConstellationList.tsx            # Liste/grille des constellations
│   ├── ImportedFileCard.tsx             # Carte aperçu d'un .md importé
│   └── ImportedFileList.tsx             # Liste des fichiers .md
```

### Lib :

```
lib/
├── constellation/
│   ├── types.ts                         # Types TypeScript
│   ├── store.ts                         # Zustand store
│   ├── storage.ts                       # Persistance localStorage
│   ├── arc-types.ts                     # Données des 5 types d'arcs
│   ├── markdown.ts                      # Sérialisation/désérialisation .md
│   └── template.ts                      # Données du template vierge
```

---

## 3. DASHBOARD CONSTELLATIONS (`constellations/page.tsx`)

Le dashboard est divisé en **trois zones** :

### Zone 1 — Le Template (toujours visible en haut)

Un encart spécial, visuellement distinct, qui affiche le **template de référence** — la constellation vierge avec le mode d'emploi. C'est la "fiche méthode" toujours accessible.

```
┌─────────────────────────────────────────────────────┐
│  ✦ TEMPLATE — Constellation de Cours                │
│                                                      │
│  FINALITÉ : libérer, pas convertir | autonomie...    │
│                                                      │
│  [Mode d'emploi dépliable]                           │
│                                                      │
│  Mini-constellation visuelle (noyau + satellites     │
│  avec légendes des branches ❤ M  ✎ M/K  ⚡ K>M)     │
│                                                      │
│  [5 types d'arcs en miniature]                       │
└─────────────────────────────────────────────────────┘
```

- Le template est **non-éditable** — c'est une référence visuelle.
- Il est repliable (Collapsible) pour ne pas encombrer une fois qu'on connaît la méthode.
- Un bouton "Créer une nouvelle constellation" part de ce template.

### Zone 2 — Mes Constellations

Grille de cartes. Chaque carte affiche :
- Titre du cours + date
- Le noyau (symbole central) en gros
- Nombre de satellites
- Type d'arc choisi (icône SVG miniature)
- Mini aperçu visuel (constellation miniature)
- Actions : Ouvrir, Dupliquer, Exporter .md, Supprimer

**Bouton principal** : `+ Nouvelle constellation`

### Zone 3 — Fichiers importés (.md)

Section séparée en bas, titrée "Constellations importées (.md)".

Lit les fichiers `.md` depuis un dossier local configurable (par défaut : `./constellations` à la racine du projet, ou un chemin configurable dans les settings).

Chaque carte affiche :
- Nom du fichier
- Noyau (extrait du frontmatter ou du premier heading)
- Date (du frontmatter)
- Action : Visualiser (ouvre le rendu interactif), Importer (copie dans localStorage pour édition)

**IMPORTANT** : La lecture du dossier `.md` se fait via une **API route Next.js** (`app/api/constellations/imported/route.ts`) qui scanne le dossier et renvoie la liste des fichiers avec leur contenu parsé.

---

## 4. FORMAT MARKDOWN — Sérialisation

Chaque constellation peut être exportée et importée en `.md`. Le format utilise un **frontmatter YAML** + une structure Markdown lisible par un humain.

### Format `.md` :

```markdown
---
title: "Introduction à Confucius — La parole juste"
date: "2026-04-12"
noyau: "Rectification des noms"
arc_type: "spirale"
arc_description: "Spirale qui se resserre : du désordre du monde vers la question intime"
arc_manas_flow: "K (clarté, provocation) → M/K (références) → M (vécu, silence) → M pur (question brûlante)"
---

# ✦ Rectification des noms

> Le désordre du monde commence par le mensonge des mots.

---

## A — Le père qui n'est plus père

- ❤ **Vécu** (M) : Mon propre père, sa parole perdue en fin de vie
- ✎ **Référence** (M/K) : Lunyu XIII.3 — Si les noms ne sont pas corrects, le langage n'est pas conforme
- ⚡ **Friction** (K>M) : Dirigeants qui se disent démocrates tout en censurant

## B — Le rite comme geste d'amour

- ❤ **Vécu** (M) : Préparer le café ce matin : geste rituel, attention à l'autre
- ✎ **Référence** (M/K) : Le Li n'est pas formalisme mais présence attentive
- ⚡ **Friction** (K>M) : Époque qui détruit les rituels puis s'étonne de la solitude

## C — Le miroir du prince

- ❤ **Vécu** (M) : Enseigner et voir mes contradictions dans mes propres mots
- ✎ **Référence** (M/K) : Le Junzi se corrige avant de corriger le monde
- ⚡ **Friction** (K>M) : Influenceurs qui conseillent sans incarner — coaching vide

## D — L'eau qui épouse la forme

- ❤ **Vécu** (M) : Un échec récent que j'ai laissé me traverser au lieu de résister
- ✎ **Référence** (M/K) : Zhongyong (Invariable Milieu) : la voie n'est jamais rigide
- ⚡ **Friction** (K>M) : Dev perso toxique : forcer, performer, ne jamais plier

## E — Le fils qui porte le monde

- ❤ **Vécu** (M) : Le poids de transmettre à mes étudiants quelque chose de vrai
- ✎ **Référence** (M/K) : Xiao (piété filiale) = responsabilité cosmique, pas soumission
- ⚡ **Friction** (K>M) : Crise de la transmission : que transmet-on encore ?

---

## Arc — Spirale qui se resserre

1. **Tour 1** (K) : Ouvrir par le désordre du monde — les mots menteurs, la politique du langage
2. **Tour 2** (M/K) : Le rite, le miroir — qu'est-ce qu'une parole juste ?
3. **Tour 3** (M) : Le père, le fils, le poids de transmettre. Vécu pur. Ralentir.
4. **Centre** : Et moi, est-ce que ma parole est juste ? Pas de réponse. Feu.

---

*Libérer, pas convertir. Autonomie, pas adhésion. Feu, pas fumée.*
```

### Lib de sérialisation (`lib/constellation/markdown.ts`) :

```typescript
import matter from "gray-matter";

export function constellationToMarkdown(constellation: Constellation): string {
  // Génère le .md complet à partir de l'objet Constellation
  // Respecte exactement le format ci-dessus
}

export function markdownToConstellation(md: string): Constellation {
  // Parse le frontmatter YAML + le contenu Markdown
  // Reconstruit l'objet Constellation complet
  // Utilise gray-matter pour le frontmatter
}
```

---

## 5. API ROUTE — Lecture du dossier local (`app/api/constellations/imported/route.ts`)

```typescript
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONSTELLATIONS_DIR = path.join(process.cwd(), "constellations");

export async function GET() {
  // 1. Vérifier que le dossier existe, le créer sinon
  // 2. Lire tous les fichiers .md du dossier
  // 3. Parser le frontmatter de chaque fichier
  // 4. Retourner la liste avec : slug, title, date, noyau, contenu brut
}
```

**API route pour un fichier spécifique** (`app/api/constellations/imported/[slug]/route.ts`) :
```typescript
export async function GET(req, { params }) {
  // Lire le fichier .md spécifique
  // Retourner le contenu complet parsé
}
```

---

## 6. VISUALISATION D'UN .MD IMPORTÉ (`constellations/imported/[slug]/page.tsx`)

Quand on ouvre un fichier `.md` importé, il est **rendu visuellement comme une constellation interactive** — pas juste du texte Markdown brut.

Le flow :
1. Fetch le contenu via l'API route
2. Parse avec `markdownToConstellation()`
3. Affiche le `ConstellationCanvas` en **mode lecture seule** (pas d'édition inline)
4. Bouton "Importer pour éditer" → copie dans localStorage et redirige vers l'éditeur

---

## 7. EXPORT .MD

Depuis l'éditeur de constellation ou le dashboard :
- Bouton "Exporter .md"
- Génère le contenu avec `constellationToMarkdown()`
- Téléchargement du fichier (via `Blob` + `URL.createObjectURL` + click sur un `<a>`)
- Option : "Sauvegarder dans le dossier" → appel POST à une API route qui écrit le fichier dans `./constellations/`

**API route pour écrire** (`app/api/constellations/export/route.ts`) :
```typescript
export async function POST(req) {
  const { filename, content } = await req.json();
  // Écrire le fichier dans CONSTELLATIONS_DIR
  // Retourner succès
}
```

---

## 8. TYPES TYPESCRIPT COMPLETS (`lib/constellation/types.ts`)

```typescript
export type Register = "M" | "M/K" | "K>M";

export interface Branch {
  id: string;
  type: "vecu" | "reference" | "friction";
  register: Register;
  content: string;
}

export interface Satellite {
  id: string;
  label: string;
  symbol: string;
  branches: {
    vecu: Branch;
    reference: Branch;
    friction: Branch;
  };
  position: { angle: number };
}

export type ArcType =
  | "descente_remontee"
  | "spirale"
  | "explosion_recueillement"
  | "dehors_dedans"
  | "vague"
  | "custom";

export interface ArcDramatique {
  type: ArcType;
  description: string;
  manasFlow: string;
}

export interface Constellation {
  id: string;
  title: string;
  date: string;
  noyau: string;
  satellites: Satellite[];
  arc: ArcDramatique;
  createdAt: string;
  updatedAt: string;
}

export interface ImportedFile {
  slug: string;
  filename: string;
  title: string;
  date: string;
  noyau: string;
  raw: string;
}
```

---

## 9. CONSTELLATION CANVAS — Rappel des spécifications visuelles

### Le Noyau :
- Grand cercle au centre, bordure ambre, fond crème chaud
- Pulsation subtile (Framer Motion, `scale: [1, 1.02, 1]`, 3s)
- Badge "MANAS" en violet en dessous
- Clic → édition inline (textarea transparent)

### Les Satellites (5 par défaut, 3-6) :
- Cercles disposés en orbite, reliés au noyau par des lignes pointillées pâles
- Chaque satellite a 3 branches qui rayonnent :
  - ❤ Vécu : brun chaud, badge "M"
  - ✎ Référence : vert sauge, badge "M/K"
  - ⚡ Friction : rouge doux, badge "K>M"
- Clic satellite → édition inline
- Clic branche → popover coloré avec textarea

### Palette :
```typescript
const colors = {
  bg: "#FDFBF7",
  ink: "#2C2C2C",
  warm: "#C4834B",
  lightWarm: "#E8D5BF",
  softGray: "#D0CCC6",
  faint: "#EBE7E0",
  noyauFill: "#FFF8F0",
  manas: "#7B5EA7",
  kama: "#C4834B",
  vecu: { border: "#8B6E4E", bg: "#F5EDE3" },
  reference: { border: "#5B7A6E", bg: "#E8F0EB" },
  friction: { border: "#9E4A4A", bg: "#F5E6E6" },
};
```

### Responsive :
- Desktop : constellation visuelle en cercle
- Mobile : noyau en haut, satellites en liste verticale, branches dépliables (accordéon)

---

## 10. ARC DRAMATIQUE — Les 5 types avec SVG

Chaque type a un SVG symbolique (~60x40px), un nom, une description, et un flux M/K :

| Type | SVG | Description | Flux M/K |
|------|-----|-------------|----------|
| Descente / Remontée | Forme en V | Comme Orphée aux enfers. Descends dans l'ombre, remontes transformé. | K → M → K → M |
| Spirale | Spirale vers centre | Cercles de plus en plus serrés. Chaque tour approfondit. | K/M alternés, M croissant |
| Explosion / Recueillement | Zigzag → ligne plate | Ouvres fort, laisses décanter dans le silence. | K violent → M pur |
| Du dehors vers le dedans | Cercles rétrécissants | Du monde vers l'intime. Entonnoir. | K → M/K → M |
| Vague / Respiration | Sinusoïde croissante | Tension/relâchement alternés. Chaque vague plus haute. | K-M-K-M, M croissant |

+ Option "Autre" avec textarea libre.

---

## 11. BOUSSOLE ÉTHIQUE

Bandeau fixe en haut de chaque page du module constellation :

> **FINALITÉ : libérer, pas convertir | autonomie, pas adhésion | feu, pas fumée**

Violet (`manas`), petite taille, toujours visible.

---

## 12. PRIORITÉS D'IMPLÉMENTATION

### Phase 1 (MVP)
1. Page d'accueil Hub avec les deux cartes (Slides + Constellations)
2. Route `/constellations` avec dashboard (3 zones)
3. Types + Zustand store + localStorage
4. ConstellationCanvas : Noyau + Satellites + Branches
5. Édition inline (noyau, satellites, branches en popover)
6. Lignes SVG de connexion
7. ArcDramatique avec sélection de type
8. Sauvegarde auto localStorage
9. Export .md (téléchargement navigateur)

### Phase 2
1. Template de référence dans le dashboard (non-éditable, dépliable)
2. Import .md : API route de lecture du dossier `./constellations/`
3. Visualisation interactive des .md importés
4. Sauvegarde .md dans le dossier local (API route POST)
5. Animations Framer Motion
6. Mode d'emploi dépliable
7. Responsive mobile

### Phase 3
1. Drag & drop des satellites
2. Mode "Jour J" (vue épurée : juste les symboles en gros, pas de branches — pour la scène)
3. Persistance Prisma/SQLite (remplacement localStorage)
4. Mode sombre
5. Recherche/filtre dans les constellations

---

## 13. INSTRUCTIONS DE LANCEMENT

```bash
# Dans le projet existant, ajouter les dépendances manquantes :
npm install framer-motion zustand uuid gray-matter
npm install -D @types/uuid

# Créer le dossier pour les .md importés :
mkdir -p constellations

# Créer le fichier exemple :
# (copier le contenu de l'exemple Confucius ci-dessus dans constellations/confucius.md)

# Ajouter les composants Shadcn manquants :
npx shadcn@latest add collapsible popover badge tooltip
```

---

## 14. NOTES DE DESIGN CRUCIALES

1. **Ce n'est PAS un formulaire.** C'est une carte vivante. Chaque interaction doit donner l'impression de dessiner, pas de remplir un champ.
2. **Espace blanc généreux.** La constellation doit respirer. Ne pas surcharger.
3. **Les couleurs sont chaudes et terreuses** pour le module Constellation. Pas de bleu corporate, pas de gris froid. Le module Slides garde son propre style.
4. **La typographie doit avoir de l'âme.** Serif pour les titres, belle lisibilité.
5. **Les animations sont des respirations**, pas des effets spéciaux.
6. **Le violet (Manas) et l'ambre (Kama-manas)** sont les deux couleurs-registres.
7. **Le Hub d'accueil doit être neutre** — ni le style Slides, ni le style Constellations. Un terrain commun élégant.
8. **Le format .md est lisible par un humain** même sans l'application — c'est un fichier qu'on peut ouvrir dans n'importe quel éditeur de texte et comprendre immédiatement.