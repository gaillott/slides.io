"use client"

import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import { v4 as uuid } from "uuid"

import type { Constellation } from "./types"
import { createEmptyConstellation } from "./template"

interface ConstellationState {
  constellations: Constellation[]
  hydrated: boolean
  setHydrated: (v: boolean) => void
  list: () => Constellation[]
  get: (id: string) => Constellation | undefined
  create: () => Constellation
  update: (id: string, patch: Partial<Constellation>) => void
  duplicate: (id: string) => Constellation | undefined
  remove: (id: string) => void
}

export const useConstellationStore = create<ConstellationState>()(
  persist(
    (set, getState) => ({
      constellations: [],
      hydrated: false,
      setHydrated: (v) => set({ hydrated: v }),

      list: () => getState().constellations,
      get: (id) => getState().constellations.find((c) => c.id === id),

      create: () => {
        const fresh = createEmptyConstellation()
        set((s) => ({ constellations: [fresh, ...s.constellations] }))
        return fresh
      },

      update: (id, patch) =>
        set((s) => ({
          constellations: s.constellations.map((c) =>
            c.id === id
              ? { ...c, ...patch, updatedAt: new Date().toISOString() }
              : c
          ),
        })),

      duplicate: (id) => {
        const src = getState().constellations.find((c) => c.id === id)
        if (!src) return undefined
        const now = new Date().toISOString()
        const copy: Constellation = {
          ...src,
          id: uuid(),
          title: `${src.title} (copie)`,
          createdAt: now,
          updatedAt: now,
        }
        set((s) => ({ constellations: [copy, ...s.constellations] }))
        return copy
      },

      remove: (id) =>
        set((s) => ({
          constellations: s.constellations.filter((c) => c.id !== id),
        })),
    }),
    {
      name: "constellation-store",
      storage: createJSONStorage(() => localStorage),
      partialize: (s) => ({ constellations: s.constellations }),
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true)
      },
    }
  )
)
