"use client"

import Link from "next/link"
import type { ReactNode } from "react"
import { ArrowRight } from "lucide-react"

interface ModuleCardProps {
  href: string
  title: string
  description: string
  icon: ReactNode
  countLabel?: string
  accent: "slides" | "constellation"
  delayMs?: number
  mounted: boolean
}

const ACCENTS = {
  slides: {
    iconBg: "bg-slate-500/10",
    iconRing: "group-hover:ring-slate-400/30",
    border: "border-slate-500/20 hover:border-slate-400/40",
    title: "text-slate-100",
    accentLine: "from-transparent via-slate-400 to-transparent",
  },
  constellation: {
    iconBg: "bg-[#C4834B]/15",
    iconRing: "group-hover:ring-[#C4834B]/40",
    border: "border-[#C4834B]/25 hover:border-[#C4834B]/50",
    title: "text-[#F5EDE3]",
    accentLine: "from-transparent via-[#C4834B] to-transparent",
  },
} as const

export function ModuleCard({
  href,
  title,
  description,
  icon,
  countLabel,
  accent,
  delayMs = 0,
  mounted,
}: ModuleCardProps) {
  const style = ACCENTS[accent]
  return (
    <Link
      href={href}
      className={`group relative flex flex-col gap-6 p-8 sm:p-10 rounded-2xl border bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-sm transition-all duration-500 overflow-hidden ${style.border}`}
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${delayMs}ms`,
        transitionProperty: "opacity, transform, background-color, border-color",
      }}
    >
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r ${style.accentLine} opacity-60`}
      />

      <div
        className={`w-16 h-16 rounded-2xl flex items-center justify-center ring-1 ring-white/5 transition-all duration-500 ${style.iconBg} ${style.iconRing}`}
      >
        {icon}
      </div>

      <div className="flex-1">
        <h2
          className={`font-serif text-3xl sm:text-4xl tracking-tight transition-colors duration-500 ${style.title}`}
        >
          {title}
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed max-w-xs">
          {description}
        </p>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-500">
        <span className="tabular-nums">{countLabel ?? "\u00A0"}</span>
        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-slate-200 group-hover:translate-x-0.5 transition-all duration-500" />
      </div>
    </Link>
  )
}
