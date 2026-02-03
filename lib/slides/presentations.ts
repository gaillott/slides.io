import { attackOnTitanPresentation } from './attack-on-titan-presentation'
import { vivreEnSocietePresentation } from './vivre-en-societe-presentation'
import type { Presentation } from './types'

// Registry of all presentations - add new presentations here
export const presentations: Presentation[] = [
  attackOnTitanPresentation,
  vivreEnSocietePresentation,
]

export function getPresentationById(id: string): Presentation | undefined {
  return presentations.find(p => p.id === id)
}

export function getAllPresentations(): Presentation[] {
  return presentations
}
