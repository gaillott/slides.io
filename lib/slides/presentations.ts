import { attackOnTitanPresentation } from './attack-on-titan-presentation'
import { attackOnTitanGuerrePresentation } from './attack-on-titan-guerre'
import { vivreEnSocietePresentation } from './vivre-en-societe-presentation'
import { album2025Presentation } from './album-2025-presentation'
import type { Presentation } from './types'

// Registry of all presentations - add new presentations here
export const presentations: Presentation[] = [
  album2025Presentation,
  attackOnTitanPresentation,
  attackOnTitanGuerrePresentation,
  vivreEnSocietePresentation,
]

export function getPresentationById(id: string): Presentation | undefined {
  return presentations.find(p => p.id === id)
}

export function getAllPresentations(): Presentation[] {
  return presentations
}
