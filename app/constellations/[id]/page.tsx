"use client"

import { use } from "react"
import Link from "next/link"

import { useConstellationStore } from "@/lib/constellation/store"
import { ConstellationCanvas } from "@/components/constellation/ConstellationCanvas"
import { ConstellationToolbar } from "@/components/constellation/ConstellationToolbar"
import { ArcDramatique } from "@/components/constellation/ArcDramatique"
import { Button } from "@/components/ui/button"

interface Props {
  params: Promise<{ id: string }>
}

export default function ConstellationEditorPage({ params }: Props) {
  const { id } = use(params)
  const hydrated = useConstellationStore((s) => s.hydrated)
  const constellation = useConstellationStore((s) =>
    s.constellations.find((c) => c.id === id)
  )
  const update = useConstellationStore((s) => s.update)

  if (!hydrated) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="font-serif italic text-lg text-[#9B8F7E]">
          Chargement de la constellation…
        </p>
      </main>
    )
  }

  if (!constellation) {
    return (
      <main className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="font-serif text-3xl text-[#2C2C2C]">
          Constellation introuvable
        </h1>
        <p className="mt-3 text-sm text-[#6B6457]">
          Elle a peut-être été supprimée, ou son identifiant a changé.
        </p>
        <Button asChild className="mt-6">
          <Link href="/constellations">Retour au dashboard</Link>
        </Button>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-10 flex flex-col gap-10">
      <ConstellationToolbar
        constellation={constellation}
        onPatch={(patch) => update(constellation.id, patch)}
      />

      <ConstellationCanvas
        constellation={constellation}
        onPatch={(patch) => update(constellation.id, patch)}
      />

      <ArcDramatique
        value={constellation.arc}
        onChange={(arc) => update(constellation.id, { arc })}
      />

      <footer className="pt-4 pb-12 text-center">
        <p className="font-serif italic text-sm text-[#9B8F7E]">
          Libérer, pas convertir. Feu, pas fumée.
        </p>
      </footer>
    </main>
  )
}
