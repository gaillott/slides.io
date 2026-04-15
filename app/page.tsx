"use client"

import { useEffect, useState } from "react"
import { Presentation } from "lucide-react"

import { getAllPresentations } from "@/lib/slides/presentations"
import { useConstellationStore } from "@/lib/constellation/store"
import { ModuleCard } from "@/components/home/ModuleCard"

function ConstellationGlyph() {
  // 5 satellites + a noyau, linked by hairlines
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className="w-8 h-8 text-[#E8D5BF]"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1" opacity="0.5">
        <line x1="24" y1="24" x2="24" y2="6" />
        <line x1="24" y1="24" x2="41" y2="17" />
        <line x1="24" y1="24" x2="36" y2="40" />
        <line x1="24" y1="24" x2="12" y2="40" />
        <line x1="24" y1="24" x2="7" y2="17" />
      </g>
      <g fill="currentColor">
        <circle cx="24" cy="6" r="2.2" />
        <circle cx="41" cy="17" r="2.2" />
        <circle cx="36" cy="40" r="2.2" />
        <circle cx="12" cy="40" r="2.2" />
        <circle cx="7" cy="17" r="2.2" />
      </g>
      <circle
        cx="24"
        cy="24"
        r="4"
        fill="#C4834B"
        stroke="#FFF8F0"
        strokeWidth="1.5"
      />
    </svg>
  )
}

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const presentations = getAllPresentations()
  const hydrated = useConstellationStore((s) => s.hydrated)
  const constellationCount = useConstellationStore(
    (s) => s.constellations.length
  )

  useEffect(() => {
    setMounted(true)
  }, [])

  const slidesCount = presentations.length
  const constellationCountLabel = hydrated
    ? `${constellationCount} ${
        constellationCount > 1 ? "constellations" : "constellation"
      }`
    : "\u00A0"

  return (
    <div className="min-h-[100dvh] bg-[#0E0C0A] flex flex-col items-center justify-center px-6 py-16 overflow-hidden relative">
      {/* Subtle background grain */}
      <div
        className="fixed inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
        }}
      />

      {/* Two ambient glows — one cool, one warm */}
      <div className="fixed top-1/3 left-1/4 w-[500px] h-[500px] bg-slate-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="fixed bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#C4834B]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div
        className="relative text-center transition-all duration-700 ease-out"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(-16px)",
        }}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
          Hub
        </p>
        <h1 className="mt-3 font-serif text-4xl sm:text-5xl text-white tracking-tight">
          Ataraxis
        </h1>
        <div className="mt-4 h-px w-16 mx-auto bg-gradient-to-r from-transparent via-slate-500 to-transparent" />
      </div>

      {/* Two module cards */}
      <div className="relative mt-16 sm:mt-20 w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-5">
        <ModuleCard
          mounted={mounted}
          delayMs={150}
          href="/slides"
          title="Slides"
          description="Créer et jouer des présentations interactives."
          countLabel={`${slidesCount} ${
            slidesCount > 1 ? "présentations" : "présentation"
          }`}
          accent="slides"
          icon={<Presentation className="w-7 h-7 text-slate-200" />}
        />

        <ModuleCard
          mounted={mounted}
          delayMs={280}
          href="/constellations"
          title="Constellations"
          description="Préparer un cours vivant — carte de navigation intérieure."
          countLabel={constellationCountLabel}
          accent="constellation"
          icon={<ConstellationGlyph />}
        />
      </div>

      {/* Footer */}
      <p
        className="relative mt-16 text-xs text-slate-600 italic transition-all duration-700"
        style={{
          opacity: mounted ? 1 : 0,
          transitionDelay: "600ms",
        }}
      >
        Recherchez la discipline et vous trouverez la liberté
      </p>
    </div>
  )
}
