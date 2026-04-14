"use client"

import Link from "next/link"
import { Plus } from "lucide-react"

import { useConstellationStore } from "@/lib/constellation/store"
import { Button } from "@/components/ui/button"

import { ConstellationCard } from "./ConstellationCard"

export function ConstellationList() {
  const hydrated = useConstellationStore((s) => s.hydrated)
  const constellations = useConstellationStore((s) => s.constellations)

  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="font-serif text-2xl text-[#2C2C2C]">
            Mes constellations
          </h2>
          <p className="text-sm text-[#6B6457]">
            Chaque carte est un cours en préparation.
          </p>
        </div>
        <Button asChild>
          <Link href="/constellations/new">
            <Plus className="w-4 h-4" />
            Nouvelle constellation
          </Link>
        </Button>
      </div>

      {!hydrated ? (
        <div className="rounded-xl border border-dashed border-[#E8D5BF] bg-[#FDFBF7] p-10 text-center text-sm text-[#9B8F7E]">
          Chargement…
        </div>
      ) : constellations.length === 0 ? (
        <div className="rounded-xl border border-dashed border-[#E8D5BF] bg-[#FDFBF7] p-10 text-center">
          <p className="font-serif text-xl text-[#2C2C2C] italic">
            Pas encore de constellation.
          </p>
          <p className="mt-2 text-sm text-[#6B6457]">
            Commence par poser un noyau — le cœur brûlant du cours.
          </p>
          <Button asChild className="mt-6">
            <Link href="/constellations/new">
              <Plus className="w-4 h-4" />
              Créer la première
            </Link>
          </Button>
        </div>
      ) : (
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {constellations.map((c) => (
            <ConstellationCard key={c.id} constellation={c} />
          ))}
        </div>
      )}
    </section>
  )
}
