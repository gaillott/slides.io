"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Copy, Download, Trash2, ArrowRight } from "lucide-react"

import { useConstellationStore } from "@/lib/constellation/store"
import { downloadConstellationMarkdown } from "@/lib/constellation/markdown"
import { getArcType } from "@/lib/constellation/arc-types"
import type { Constellation } from "@/lib/constellation/types"
import { Button } from "@/components/ui/button"

interface Props {
  constellation: Constellation
}

export function ConstellationCard({ constellation: c }: Props) {
  const router = useRouter()
  const duplicate = useConstellationStore((s) => s.duplicate)
  const remove = useConstellationStore((s) => s.remove)
  const arcDef = getArcType(c.arc.type)

  function handleDuplicate(e: React.MouseEvent) {
    e.preventDefault()
    const copy = duplicate(c.id)
    if (copy) router.push(`/constellations/${copy.id}`)
  }

  function handleExport(e: React.MouseEvent) {
    e.preventDefault()
    downloadConstellationMarkdown(c)
  }

  function handleDelete(e: React.MouseEvent) {
    e.preventDefault()
    if (
      confirm(`Supprimer définitivement « ${c.title || "cette constellation"} » ?`)
    ) {
      remove(c.id)
    }
  }

  const formattedDate = c.date
    ? new Date(c.date).toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : ""

  return (
    <Link
      href={`/constellations/${c.id}`}
      className="group relative flex flex-col gap-4 rounded-2xl border border-[#E8D5BF] bg-[#FFF8F0] p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#C4834B]/60 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-serif text-xl leading-tight text-[#2C2C2C] truncate">
            {c.title || "Sans titre"}
          </h3>
          {formattedDate && (
            <p className="mt-1 text-xs text-[#9B8F7E]">{formattedDate}</p>
          )}
        </div>
        <div
          className="shrink-0 text-[#C4834B]"
          aria-hidden="true"
          title={arcDef.name}
        >
          <svg viewBox="0 0 60 40" className="w-14 h-10">
            {arcDef.svg}
          </svg>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center py-4">
        <p className="font-serif text-2xl text-center text-[#C4834B] italic">
          {c.noyau || <span className="text-[#C4834B]/40">✦ (noyau vide)</span>}
        </p>
      </div>

      <div className="flex items-center justify-between text-xs text-[#9B8F7E]">
        <span>
          {c.satellites.length} satellite
          {c.satellites.length > 1 ? "s" : ""}
        </span>
        <span className="truncate max-w-[60%] text-right">{arcDef.name}</span>
      </div>

      <div
        className="flex items-center justify-between gap-2 border-t border-[#F0E5D4] pt-3"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-1">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={handleDuplicate}
            title="Dupliquer"
          >
            <Copy className="w-4 h-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={handleExport}
            title="Exporter .md"
          >
            <Download className="w-4 h-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={handleDelete}
            title="Supprimer"
          >
            <Trash2 className="w-4 h-4 text-[#9E4A4A]" />
          </Button>
        </div>
        <span className="flex items-center gap-1 text-[#C4834B] group-hover:translate-x-0.5 transition-transform">
          Ouvrir
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </Link>
  )
}
