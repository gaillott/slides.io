"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, Download, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { downloadConstellationMarkdown } from "@/lib/constellation/markdown"
import { useConstellationStore } from "@/lib/constellation/store"
import type { Constellation } from "@/lib/constellation/types"

interface Props {
  constellation: Constellation
  onPatch: (patch: Partial<Constellation>) => void
}

export function ConstellationToolbar({ constellation: c, onPatch }: Props) {
  const router = useRouter()
  const remove = useConstellationStore((s) => s.remove)
  const [title, setTitle] = useState(c.title)
  const [date, setDate] = useState(c.date)

  useEffect(() => setTitle(c.title), [c.title])
  useEffect(() => setDate(c.date), [c.date])

  function commitTitle() {
    if (title !== c.title) onPatch({ title })
  }

  function commitDate() {
    if (date !== c.date) onPatch({ date })
  }

  function handleDelete() {
    if (
      confirm(`Supprimer définitivement « ${c.title || "cette constellation"} » ?`)
    ) {
      remove(c.id)
      router.push("/constellations")
    }
  }

  return (
    <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <Link
          href="/constellations"
          className="shrink-0 inline-flex items-center gap-1 text-xs text-[#9B8F7E] hover:text-[#C4834B] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Retour
        </Link>
        <div className="flex-1 min-w-0">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={commitTitle}
            onKeyDown={(e) => {
              if (e.key === "Enter") (e.target as HTMLInputElement).blur()
            }}
            placeholder="Titre du cours…"
            className="w-full bg-transparent font-serif text-2xl sm:text-3xl text-[#2C2C2C] outline-none border-b border-transparent hover:border-[#E8D5BF] focus:border-[#C4834B]/60 transition-colors px-1"
          />
          <div className="mt-1 flex items-center gap-2 text-xs text-[#9B8F7E] px-1">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              onBlur={commitDate}
              className="bg-transparent outline-none"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <Button
          type="button"
          variant="outline"
          onClick={() => downloadConstellationMarkdown(c)}
        >
          <Download className="w-4 h-4" />
          Exporter .md
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
    </header>
  )
}
