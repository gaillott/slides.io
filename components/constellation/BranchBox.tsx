"use client"

import { useEffect, useState } from "react"
import { Heart, BookOpenText, Zap } from "lucide-react"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea"
import type { Branch, BranchKind } from "@/lib/constellation/types"

interface Props {
  branch: Branch
  onChange: (content: string) => void
  /** label override for small screens */
  compact?: boolean
}

const STYLE: Record<
  BranchKind,
  {
    icon: typeof Heart
    label: string
    badge: string
    border: string
    bg: string
    text: string
    pill: string
  }
> = {
  vecu: {
    icon: Heart,
    label: "Vécu",
    badge: "M",
    border: "border-[#8B6E4E]/40",
    bg: "bg-[#F5EDE3]",
    text: "text-[#8B6E4E]",
    pill: "bg-[#8B6E4E] text-white",
  },
  reference: {
    icon: BookOpenText,
    label: "Référence",
    badge: "M/K",
    border: "border-[#5B7A6E]/40",
    bg: "bg-[#E8F0EB]",
    text: "text-[#5B7A6E]",
    pill: "bg-[#5B7A6E] text-white",
  },
  friction: {
    icon: Zap,
    label: "Friction",
    badge: "K>M",
    border: "border-[#9E4A4A]/40",
    bg: "bg-[#F5E6E6]",
    text: "text-[#9E4A4A]",
    pill: "bg-[#9E4A4A] text-white",
  },
}

export function BranchBox({ branch, onChange, compact = false }: Props) {
  const s = STYLE[branch.type]
  const Icon = s.icon
  const [draft, setDraft] = useState(branch.content)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setDraft(branch.content)
  }, [branch.content])

  function commit() {
    if (draft !== branch.content) onChange(draft)
  }

  return (
    <Popover
      open={open}
      onOpenChange={(v) => {
        setOpen(v)
        if (!v) commit()
      }}
    >
      <PopoverTrigger asChild>
        <button
          type="button"
          className={`group flex ${
            compact ? "w-full" : "w-[160px]"
          } flex-col items-start gap-1 rounded-lg border ${s.border} ${
            s.bg
          } p-2.5 text-left transition-all hover:shadow-sm hover:-translate-y-px`}
        >
          <div className="flex items-center justify-between w-full">
            <div className={`flex items-center gap-1.5 ${s.text}`}>
              <Icon className="w-3.5 h-3.5" />
              <span className="text-[10px] font-semibold uppercase tracking-wider">
                {s.label}
              </span>
            </div>
            <span
              className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${s.pill}`}
            >
              {s.badge}
            </span>
          </div>
          <p
            className={`text-[11px] leading-snug line-clamp-3 ${
              branch.content ? "text-[#2C2C2C]" : "text-[#9B8F7E] italic"
            }`}
          >
            {branch.content || "Cliquer pour écrire…"}
          </p>
        </button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-80">
        <div className={`flex items-center gap-2 ${s.text}`}>
          <Icon className="w-4 h-4" />
          <span className="text-xs font-semibold uppercase tracking-wider">
            {s.label}
          </span>
          <span
            className={`ml-auto text-[9px] font-bold px-1.5 py-0.5 rounded-full ${s.pill}`}
          >
            {s.badge}
          </span>
        </div>
        <Textarea
          autoFocus
          className="mt-3 min-h-[110px]"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onBlur={commit}
          placeholder={
            branch.type === "vecu"
              ? "Le vécu actuel — ce que tu vis pendant que tu le dis…"
              : branch.type === "reference"
                ? "La citation, l'auteur, le texte qui incarne…"
                : "Le point de friction avec le monde actuel…"
          }
        />
      </PopoverContent>
    </Popover>
  )
}
