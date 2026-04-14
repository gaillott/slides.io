export type Register = "M" | "M/K" | "K>M"

export type BranchKind = "vecu" | "reference" | "friction"

export interface Branch {
  id: string
  type: BranchKind
  register: Register
  content: string
}

export interface Satellite {
  id: string
  label: string
  symbol: string
  branches: {
    vecu: Branch
    reference: Branch
    friction: Branch
  }
  position: { angle: number }
}

export type ArcType =
  | "descente_remontee"
  | "spirale"
  | "explosion_recueillement"
  | "dehors_dedans"
  | "vague"
  | "custom"

export interface ArcDramatique {
  type: ArcType
  description: string
  manasFlow: string
}

export interface Constellation {
  id: string
  title: string
  date: string
  noyau: string
  satellites: Satellite[]
  arc: ArcDramatique
  createdAt: string
  updatedAt: string
}

export interface ImportedFile {
  slug: string
  filename: string
  title: string
  date: string
  noyau: string
  raw: string
}
