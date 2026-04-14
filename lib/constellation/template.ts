import { v4 as uuid } from "uuid"

import type { Branch, Constellation, Satellite } from "./types"

function emptyBranch(type: Branch["type"]): Branch {
  const register: Branch["register"] =
    type === "vecu" ? "M" : type === "reference" ? "M/K" : "K>M"
  return {
    id: uuid(),
    type,
    register,
    content: "",
  }
}

function emptySatellite(label: string, angle: number): Satellite {
  return {
    id: uuid(),
    label,
    symbol: "",
    branches: {
      vecu: emptyBranch("vecu"),
      reference: emptyBranch("reference"),
      friction: emptyBranch("friction"),
    },
    position: { angle },
  }
}

const DEFAULT_SATELLITE_LABELS = ["A", "B", "C", "D", "E"]

/**
 * Build a fresh, empty constellation ready for editing.
 * Five satellites, evenly spaced around the orbit.
 */
export function createEmptyConstellation(): Constellation {
  const now = new Date().toISOString()
  const satellites = DEFAULT_SATELLITE_LABELS.map((label, i) =>
    emptySatellite(label, (2 * Math.PI * i) / DEFAULT_SATELLITE_LABELS.length)
  )
  return {
    id: uuid(),
    title: "Nouvelle constellation",
    date: now.slice(0, 10),
    noyau: "",
    satellites,
    arc: {
      type: "spirale",
      description: "",
      manasFlow: "",
    },
    createdAt: now,
    updatedAt: now,
  }
}

/**
 * A read-only "reference" constellation — the template shown at the top
 * of the dashboard so the user can always see the method at a glance.
 * It uses the Confucius example from the spec.
 */
export const TEMPLATE_CONSTELLATION: Constellation = {
  id: "template-reference",
  title: "Template — Constellation de Cours",
  date: "",
  noyau: "Rectification des noms",
  satellites: [
    {
      id: "tpl-a",
      label: "A",
      symbol: "Le père qui n'est plus père",
      branches: {
        vecu: {
          id: "tpl-a-v",
          type: "vecu",
          register: "M",
          content: "Mon propre père, sa parole perdue en fin de vie",
        },
        reference: {
          id: "tpl-a-r",
          type: "reference",
          register: "M/K",
          content: "Lunyu XIII.3 — Si les noms ne sont pas corrects…",
        },
        friction: {
          id: "tpl-a-f",
          type: "friction",
          register: "K>M",
          content: "Dirigeants qui se disent démocrates en censurant",
        },
      },
      position: { angle: 0 },
    },
    {
      id: "tpl-b",
      label: "B",
      symbol: "Le rite comme geste d'amour",
      branches: {
        vecu: {
          id: "tpl-b-v",
          type: "vecu",
          register: "M",
          content: "Préparer le café ce matin : attention à l'autre",
        },
        reference: {
          id: "tpl-b-r",
          type: "reference",
          register: "M/K",
          content: "Le Li n'est pas formalisme mais présence attentive",
        },
        friction: {
          id: "tpl-b-f",
          type: "friction",
          register: "K>M",
          content: "Époque qui détruit les rituels puis s'étonne de la solitude",
        },
      },
      position: { angle: (2 * Math.PI) / 5 },
    },
    {
      id: "tpl-c",
      label: "C",
      symbol: "Le miroir du prince",
      branches: {
        vecu: {
          id: "tpl-c-v",
          type: "vecu",
          register: "M",
          content: "Enseigner et voir mes contradictions dans mes mots",
        },
        reference: {
          id: "tpl-c-r",
          type: "reference",
          register: "M/K",
          content: "Le Junzi se corrige avant de corriger le monde",
        },
        friction: {
          id: "tpl-c-f",
          type: "friction",
          register: "K>M",
          content: "Influenceurs qui conseillent sans incarner",
        },
      },
      position: { angle: (4 * Math.PI) / 5 },
    },
    {
      id: "tpl-d",
      label: "D",
      symbol: "L'eau qui épouse la forme",
      branches: {
        vecu: {
          id: "tpl-d-v",
          type: "vecu",
          register: "M",
          content: "Un échec récent laissé me traverser au lieu de résister",
        },
        reference: {
          id: "tpl-d-r",
          type: "reference",
          register: "M/K",
          content: "Zhongyong : la voie n'est jamais rigide",
        },
        friction: {
          id: "tpl-d-f",
          type: "friction",
          register: "K>M",
          content: "Dev perso toxique : forcer, performer, ne jamais plier",
        },
      },
      position: { angle: (6 * Math.PI) / 5 },
    },
    {
      id: "tpl-e",
      label: "E",
      symbol: "Le fils qui porte le monde",
      branches: {
        vecu: {
          id: "tpl-e-v",
          type: "vecu",
          register: "M",
          content: "Le poids de transmettre quelque chose de vrai",
        },
        reference: {
          id: "tpl-e-r",
          type: "reference",
          register: "M/K",
          content: "Xiao = responsabilité cosmique, pas soumission",
        },
        friction: {
          id: "tpl-e-f",
          type: "friction",
          register: "K>M",
          content: "Crise de la transmission : que transmet-on encore ?",
        },
      },
      position: { angle: (8 * Math.PI) / 5 },
    },
  ],
  arc: {
    type: "spirale",
    description: "Spirale qui se resserre : du désordre du monde vers la question intime",
    manasFlow: "K → M/K → M → M pur",
  },
  createdAt: "",
  updatedAt: "",
}
