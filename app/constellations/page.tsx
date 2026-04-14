import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { ConstellationTemplate } from "@/components/constellation/ConstellationTemplate"
import { ConstellationList } from "@/components/dashboard/ConstellationList"

export default function ConstellationsDashboardPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12 flex flex-col gap-12">
      <header className="flex items-center justify-between gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-[#9B8F7E] hover:text-[#C4834B] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Accueil
        </Link>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#2C2C2C] tracking-tight">
          Constellations
        </h1>
        <div className="w-16" />
      </header>

      <ConstellationTemplate />

      <ConstellationList />

      <section className="rounded-2xl border border-dashed border-[#E8D5BF] bg-[#FDFBF7] p-6 opacity-70">
        <h2 className="font-serif text-lg text-[#6B6457]">
          Constellations importées (.md)
        </h2>
        <p className="mt-1 text-sm text-[#9B8F7E] italic">
          Bientôt — lecture d&apos;un dossier local et import en un clic.
        </p>
      </section>

      <footer className="pt-6 pb-12 text-center">
        <p className="font-serif italic text-sm text-[#9B8F7E]">
          Libérer, pas convertir. Autonomie, pas adhésion. Feu, pas fumée.
        </p>
      </footer>
    </main>
  )
}
