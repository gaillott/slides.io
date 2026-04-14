"use client"

import { ARC_TYPES, getArcType } from "@/lib/constellation/arc-types"
import type { ArcDramatique as ArcDramatiqueT, ArcType } from "@/lib/constellation/types"
import { Textarea } from "@/components/ui/textarea"

interface Props {
  value: ArcDramatiqueT
  onChange: (value: ArcDramatiqueT) => void
}

export function ArcDramatique({ value, onChange }: Props) {
  const current = getArcType(value.type)

  function setType(type: ArcType) {
    const def = getArcType(type)
    onChange({
      type,
      description:
        value.description && type === value.type
          ? value.description
          : def.description,
      manasFlow:
        value.manasFlow && type === value.type ? value.manasFlow : def.manasFlow,
    })
  }

  return (
    <section className="rounded-2xl border border-[#E8D5BF] bg-[#FFF8F0] p-6 sm:p-8">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#C4834B]">
            Arc dramatique
          </p>
          <h2 className="mt-1 font-serif text-2xl text-[#2C2C2C]">
            Comment respirer ce cours ?
          </h2>
        </div>
        <p className="text-xs text-[#9B8F7E] italic max-w-sm">
          Pas un plan. Une forme. La courbe que ton cours épouse quand tu le
          traverses.
        </p>
      </div>

      <div className="mt-6 grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        {ARC_TYPES.map((arc) => {
          const active = arc.type === value.type
          return (
            <button
              key={arc.type}
              type="button"
              onClick={() => setType(arc.type)}
              className={`flex flex-col items-center gap-2 rounded-xl border p-3 text-center transition-all ${
                active
                  ? "border-[#C4834B] bg-[#F5EDE3] shadow-sm"
                  : "border-[#E8D5BF] bg-[#FDFBF7] hover:border-[#C4834B]/60"
              }`}
            >
              <svg
                viewBox="0 0 60 40"
                className={`w-14 h-10 ${
                  active ? "text-[#C4834B]" : "text-[#9B8F7E]"
                }`}
                aria-hidden="true"
              >
                {arc.svg}
              </svg>
              <p
                className={`font-serif text-xs leading-tight ${
                  active ? "text-[#2C2C2C]" : "text-[#6B6457]"
                }`}
              >
                {arc.name}
              </p>
            </button>
          )
        })}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#9B8F7E]">
            Description
          </span>
          <Textarea
            value={value.description}
            onChange={(e) =>
              onChange({ ...value, description: e.target.value })
            }
            placeholder={current.description}
            className="min-h-[80px]"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#9B8F7E]">
            Flux Manas / Kama
          </span>
          <Textarea
            value={value.manasFlow}
            onChange={(e) => onChange({ ...value, manasFlow: e.target.value })}
            placeholder={current.manasFlow}
            className="min-h-[80px]"
          />
        </label>
      </div>
    </section>
  )
}
