"use client"

import { useEffect, useState } from "react"

import { Textarea } from "@/components/ui/textarea"

interface Props {
  noyau: string
  onChange: (value: string) => void
}

/**
 * The central node of the constellation. A pulsating amber circle
 * with the "symbole brûlant" of the course. Clicking swaps to an
 * inline textarea.
 */
export function NoyauNode({ noyau, onChange }: Props) {
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(noyau)

  useEffect(() => {
    setDraft(noyau)
  }, [noyau])

  function commit() {
    setEditing(false)
    if (draft !== noyau) onChange(draft)
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative flex items-center justify-center">
        {/* Soft halo */}
        <div className="absolute inset-0 -m-4 rounded-full bg-[#C4834B]/10 blur-xl" />
        <div
          className={`relative flex items-center justify-center w-44 h-44 sm:w-52 sm:h-52 rounded-full border-[3px] border-[#C4834B] bg-[#FFF8F0] shadow-lg ${
            !editing ? "animate-noyau-pulse" : ""
          }`}
          onClick={() => !editing && setEditing(true)}
          role={editing ? undefined : "button"}
          tabIndex={editing ? -1 : 0}
          onKeyDown={(e) => {
            if (!editing && (e.key === "Enter" || e.key === " ")) {
              e.preventDefault()
              setEditing(true)
            }
          }}
        >
          {editing ? (
            <Textarea
              autoFocus
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onBlur={commit}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  commit()
                }
                if (e.key === "Escape") {
                  setDraft(noyau)
                  setEditing(false)
                }
              }}
              className="w-[75%] bg-transparent border-none text-center font-serif text-xl shadow-none focus-visible:ring-0 resize-none p-2"
              rows={3}
              placeholder="Le symbole brûlant…"
            />
          ) : (
            <span
              className={`px-4 text-center font-serif text-xl sm:text-2xl leading-snug ${
                noyau ? "text-[#2C2C2C]" : "text-[#C4834B]/50 italic"
              }`}
            >
              {noyau || "✦ Cliquer pour poser le noyau"}
            </span>
          )}
        </div>
      </div>
      <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#7B5EA7]">
        Manas
      </span>
    </div>
  )
}
