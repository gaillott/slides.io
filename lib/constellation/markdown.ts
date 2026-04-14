import matter from "gray-matter"

import { getArcType } from "./arc-types"
import type { Constellation } from "./types"

/**
 * Serialize a Constellation to the .md format described in the spec.
 * The frontmatter is YAML (via gray-matter); the body is built manually
 * to stay readable in any text editor.
 */
export function constellationToMarkdown(c: Constellation): string {
  const arcDef = getArcType(c.arc.type)

  const frontmatter = {
    title: c.title,
    date: c.date,
    noyau: c.noyau,
    arc_type: c.arc.type,
    arc_description: c.arc.description || arcDef.description,
    arc_manas_flow: c.arc.manasFlow || arcDef.manasFlow,
  }

  const lines: string[] = []
  lines.push(`# ✦ ${c.noyau || "Sans noyau"}`)
  lines.push("")
  lines.push("> Le cœur brûlant — on le dit en le vivant.")
  lines.push("")
  lines.push("---")
  lines.push("")

  for (const sat of c.satellites) {
    const heading = sat.symbol
      ? `${sat.label} — ${sat.symbol}`
      : `${sat.label}`
    lines.push(`## ${heading}`)
    lines.push("")
    lines.push(
      `- ❤ **Vécu** (M) : ${sat.branches.vecu.content || "_(à écrire)_"}`
    )
    lines.push(
      `- ✎ **Référence** (M/K) : ${
        sat.branches.reference.content || "_(à écrire)_"
      }`
    )
    lines.push(
      `- ⚡ **Friction** (K>M) : ${
        sat.branches.friction.content || "_(à écrire)_"
      }`
    )
    lines.push("")
  }

  lines.push("---")
  lines.push("")
  lines.push(`## Arc — ${arcDef.name}`)
  lines.push("")
  if (c.arc.description) lines.push(c.arc.description)
  if (c.arc.manasFlow) {
    if (c.arc.description) lines.push("")
    lines.push(`_Flux Manas/Kama :_ ${c.arc.manasFlow}`)
  }
  lines.push("")
  lines.push("---")
  lines.push("")
  lines.push(
    "*Libérer, pas convertir. Autonomie, pas adhésion. Feu, pas fumée.*"
  )
  lines.push("")

  return matter.stringify(lines.join("\n"), frontmatter)
}

/**
 * Phase 1 stub — real implementation lands with the import feature in Phase 2.
 */
export function markdownToConstellation(_md: string): never {
  throw new Error("markdownToConstellation: not implemented in Phase 1")
}

/**
 * Trigger a browser download of the .md for the given constellation.
 * Must be called from a click handler (client-only).
 */
export function downloadConstellationMarkdown(c: Constellation) {
  const md = constellationToMarkdown(c)
  const safeTitle =
    (c.title || "constellation")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "constellation"
  const blob = new Blob([md], { type: "text/markdown;charset=utf-8" })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = `${safeTitle}.md`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
