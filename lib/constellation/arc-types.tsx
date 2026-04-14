import type { ReactNode } from "react"
import type { ArcType } from "./types"

export interface ArcTypeDefinition {
  type: ArcType
  name: string
  description: string
  manasFlow: string
  /** Inline SVG glyph drawn inside a `<svg viewBox="0 0 60 40">` */
  svg: ReactNode
}

/**
 * The 5 canonical dramatic arcs + the "custom" escape hatch.
 * Each arc exposes a ~60x40 symbolic glyph.
 */
export const ARC_TYPES: ArcTypeDefinition[] = [
  {
    type: "descente_remontee",
    name: "Descente / Remontée",
    description:
      "Comme Orphée aux enfers. Tu descends dans l'ombre, tu remontes transformé.",
    manasFlow: "K → M → K → M",
    svg: (
      <polyline
        points="5,8 30,34 55,8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    type: "spirale",
    name: "Spirale",
    description:
      "Cercles de plus en plus serrés. Chaque tour approfondit la même question.",
    manasFlow: "K/M alternés, M croissant",
    svg: (
      <g fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="30" cy="20" r="15" />
        <circle cx="30" cy="20" r="10" />
        <circle cx="30" cy="20" r="5" />
        <circle cx="30" cy="20" r="1.5" fill="currentColor" />
      </g>
    ),
  },
  {
    type: "explosion_recueillement",
    name: "Explosion / Recueillement",
    description:
      "Tu ouvres fort, presque violent, puis tu laisses décanter dans le silence.",
    manasFlow: "K violent → M pur",
    svg: (
      <>
        <polyline
          points="5,22 10,10 15,28 20,8 25,26 30,14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="30"
          y1="22"
          x2="55"
          y2="22"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </>
    ),
  },
  {
    type: "dehors_dedans",
    name: "Du dehors vers le dedans",
    description: "Du monde vers l'intime. Entonnoir. Le cours se resserre.",
    manasFlow: "K → M/K → M",
    svg: (
      <g fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="30" cy="20" r="16" />
        <circle cx="30" cy="20" r="11" />
        <circle cx="30" cy="20" r="6" />
        <circle cx="30" cy="20" r="2" fill="currentColor" />
      </g>
    ),
  },
  {
    type: "vague",
    name: "Vague / Respiration",
    description:
      "Tension et relâchement alternés. Chaque vague un peu plus haute que la précédente.",
    manasFlow: "K-M-K-M, M croissant",
    svg: (
      <path
        d="M 5 24 Q 12 12, 19 24 T 33 20 T 47 14 T 57 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    ),
  },
  {
    type: "custom",
    name: "Autre",
    description: "Décris ton propre arc, ta propre respiration.",
    manasFlow: "libre",
    svg: (
      <text
        x="30"
        y="27"
        textAnchor="middle"
        fontSize="22"
        fontFamily="serif"
        fill="currentColor"
      >
        ✦
      </text>
    ),
  },
]

export function getArcType(type: ArcType): ArcTypeDefinition {
  return ARC_TYPES.find((a) => a.type === type) ?? ARC_TYPES[0]
}
