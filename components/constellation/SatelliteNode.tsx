"use client"

import { useEffect, useState } from "react"

import { Textarea } from "@/components/ui/textarea"
import type { Satellite } from "@/lib/constellation/types"

import { BranchBox } from "./BranchBox"

interface Props {
  satellite: Satellite
  onChangeSymbol: (value: string) => void
  onChangeLabel: (value: string) => void
  onChangeBranch: (
    kind: "vecu" | "reference" | "friction",
    content: string
  ) => void
  compact?: boolean
}

export function SatelliteNode({
  satellite,
  onChangeSymbol,
  onChangeLabel,
  onChangeBranch,
  compact = false,
}: Props) {
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(satellite.symbol)
  const [labelEditing, setLabelEditing] = useState(false)
  const [labelDraft, setLabelDraft] = useState(satellite.label)

  useEffect(() => setDraft(satellite.symbol), [satellite.symbol])
  useEffect(() => setLabelDraft(satellite.label), [satellite.label])

  function commit() {
    setEditing(false)
    if (draft !== satellite.symbol) onChangeSymbol(draft)
  }

  function commitLabel() {
    setLabelEditing(false)
    if (labelDraft !== satellite.label) onChangeLabel(labelDraft)
  }

  return (
    <div
      className={`flex flex-col items-center gap-3 ${compact ? "w-full" : "w-[200px]"}`}
    >
      {/* Satellite core (label + symbol) */}
      <div
        className="flex flex-col items-center gap-1 rounded-2xl border border-[#C4834B]/40 bg-[#FFF8F0] px-4 py-3 shadow-sm cursor-text w-full"
        onClick={() => !editing && setEditing(true)}
      >
        {labelEditing ? (
          <input
            autoFocus
            value={labelDraft}
            maxLength={3}
            onChange={(e) => setLabelDraft(e.target.value.toUpperCase())}
            onBlur={commitLabel}
            onKeyDown={(e) => {
              if (e.key === "Enter") commitLabel()
              if (e.key === "Escape") {
                setLabelDraft(satellite.label)
                setLabelEditing(false)
              }
            }}
            className="w-8 text-center text-xs font-bold text-[#C4834B] bg-transparent border-b border-[#C4834B]/40 outline-none"
          />
        ) : (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setLabelEditing(true)
            }}
            className="text-[10px] font-bold tracking-widest text-[#C4834B] hover:underline"
          >
            {satellite.label || "·"}
          </button>
        )}

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
                setDraft(satellite.symbol)
                setEditing(false)
              }
            }}
            className="w-full border-none bg-transparent text-center font-serif text-sm shadow-none focus-visible:ring-0 p-1 min-h-[2.5rem]"
            rows={2}
            placeholder="Symbole…"
          />
        ) : (
          <span
            className={`block text-center font-serif text-sm leading-snug min-h-[2.5rem] flex items-center justify-center ${
              satellite.symbol ? "text-[#2C2C2C]" : "text-[#C4834B]/50 italic"
            }`}
          >
            {satellite.symbol || "cliquer pour nommer…"}
          </span>
        )}
      </div>

      {/* Branches */}
      <div
        className={`flex ${compact ? "flex-col w-full" : "flex-col"} gap-2 w-full`}
      >
        <BranchBox
          branch={satellite.branches.vecu}
          onChange={(c) => onChangeBranch("vecu", c)}
          compact
        />
        <BranchBox
          branch={satellite.branches.reference}
          onChange={(c) => onChangeBranch("reference", c)}
          compact
        />
        <BranchBox
          branch={satellite.branches.friction}
          onChange={(c) => onChangeBranch("friction", c)}
          compact
        />
      </div>
    </div>
  )
}
