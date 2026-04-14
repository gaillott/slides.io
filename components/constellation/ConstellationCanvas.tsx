"use client"

import { useMemo } from "react"
import { v4 as uuid } from "uuid"
import { Minus, Plus } from "lucide-react"

import type {
  Branch,
  BranchKind,
  Constellation,
  Satellite,
} from "@/lib/constellation/types"
import { Button } from "@/components/ui/button"

import { NoyauNode } from "./NoyauNode"
import { SatelliteNode } from "./SatelliteNode"

interface Props {
  constellation: Constellation
  onPatch: (patch: Partial<Constellation>) => void
}

function emptyBranch(type: BranchKind): Branch {
  const register: Branch["register"] =
    type === "vecu" ? "M" : type === "reference" ? "M/K" : "K>M"
  return { id: uuid(), type, register, content: "" }
}

function makeSatellite(index: number, total: number): Satellite {
  const label = String.fromCharCode(65 + index) // A, B, C…
  return {
    id: uuid(),
    label,
    symbol: "",
    branches: {
      vecu: emptyBranch("vecu"),
      reference: emptyBranch("reference"),
      friction: emptyBranch("friction"),
    },
    position: { angle: (2 * Math.PI * index) / total },
  }
}

export function ConstellationCanvas({ constellation: c, onPatch }: Props) {
  const n = c.satellites.length

  // Desktop coordinates for each satellite around the noyau.
  const positions = useMemo(() => {
    return c.satellites.map((_, i) => {
      // Start from the top, going clockwise.
      const angle = (2 * Math.PI * i) / n - Math.PI / 2
      return { angle }
    })
  }, [c.satellites, n])

  function updateSatellite(id: string, patch: Partial<Satellite>) {
    onPatch({
      satellites: c.satellites.map((s) =>
        s.id === id ? { ...s, ...patch } : s
      ),
    })
  }

  function updateBranch(satId: string, kind: BranchKind, content: string) {
    onPatch({
      satellites: c.satellites.map((s) =>
        s.id === satId
          ? {
              ...s,
              branches: {
                ...s.branches,
                [kind]: { ...s.branches[kind], content },
              },
            }
          : s
      ),
    })
  }

  function addSatellite() {
    if (n >= 6) return
    const next = [...c.satellites, makeSatellite(n, n + 1)]
    // Re-space angles across the new count for visual balance.
    const respaced = next.map((s, i) => ({
      ...s,
      position: { angle: (2 * Math.PI * i) / next.length },
    }))
    onPatch({ satellites: respaced })
  }

  function removeSatellite() {
    if (n <= 3) return
    const next = c.satellites.slice(0, -1)
    const respaced = next.map((s, i) => ({
      ...s,
      position: { angle: (2 * Math.PI * i) / next.length },
    }))
    onPatch({ satellites: respaced })
  }

  return (
    <div className="flex flex-col gap-8">
      {/* Satellite count controls */}
      <div className="flex items-center justify-end gap-2 text-xs text-[#6B6457]">
        <span>
          {n} satellite{n > 1 ? "s" : ""}
        </span>
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={removeSatellite}
          disabled={n <= 3}
          title="Retirer un satellite"
        >
          <Minus className="w-3.5 h-3.5" />
        </Button>
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={addSatellite}
          disabled={n >= 6}
          title="Ajouter un satellite"
        >
          <Plus className="w-3.5 h-3.5" />
        </Button>
      </div>

      {/* Desktop: radial constellation */}
      <div className="hidden lg:block relative mx-auto" style={{ width: 920, height: 760 }}>
        {/* SVG layer for dotted lines between noyau and each satellite */}
        <svg
          className="absolute inset-0 pointer-events-none"
          width={920}
          height={760}
        >
          {positions.map((p, i) => {
            const cx = 460
            const cy = 380
            const r = 260
            const sx = cx + r * Math.cos(p.angle)
            const sy = cy + r * Math.sin(p.angle)
            return (
              <line
                key={i}
                x1={cx}
                y1={cy}
                x2={sx}
                y2={sy}
                stroke="#E8D5BF"
                strokeWidth="1.5"
                strokeDasharray="4 6"
              />
            )
          })}
        </svg>

        {/* Noyau (centered) */}
        <div
          className="absolute"
          style={{
            left: 460,
            top: 380,
            transform: "translate(-50%, -50%)",
          }}
        >
          <NoyauNode
            noyau={c.noyau}
            onChange={(noyau) => onPatch({ noyau })}
          />
        </div>

        {/* Satellites placed around the noyau */}
        {c.satellites.map((sat, i) => {
          const p = positions[i]
          const r = 260
          const left = 460 + r * Math.cos(p.angle)
          const top = 380 + r * Math.sin(p.angle)
          return (
            <div
              key={sat.id}
              className="absolute"
              style={{
                left,
                top,
                transform: "translate(-50%, -50%)",
              }}
            >
              <SatelliteNode
                satellite={sat}
                onChangeSymbol={(symbol) =>
                  updateSatellite(sat.id, { symbol })
                }
                onChangeLabel={(label) => updateSatellite(sat.id, { label })}
                onChangeBranch={(kind, content) =>
                  updateBranch(sat.id, kind, content)
                }
              />
            </div>
          )
        })}
      </div>

      {/* Mobile / tablet: stacked layout */}
      <div className="lg:hidden flex flex-col items-center gap-8">
        <NoyauNode noyau={c.noyau} onChange={(noyau) => onPatch({ noyau })} />
        <div className="w-full flex flex-col gap-6">
          {c.satellites.map((sat) => (
            <div
              key={sat.id}
              className="flex justify-center"
            >
              <SatelliteNode
                satellite={sat}
                onChangeSymbol={(symbol) =>
                  updateSatellite(sat.id, { symbol })
                }
                onChangeLabel={(label) => updateSatellite(sat.id, { label })}
                onChangeBranch={(kind, content) =>
                  updateBranch(sat.id, kind, content)
                }
                compact
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
