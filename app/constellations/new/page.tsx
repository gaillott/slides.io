"use client"

import { useEffect, useRef } from "react"
import { useRouter } from "next/navigation"

import { useConstellationStore } from "@/lib/constellation/store"

export default function NewConstellationPage() {
  const router = useRouter()
  const hydrated = useConstellationStore((s) => s.hydrated)
  const create = useConstellationStore((s) => s.create)
  const createdRef = useRef(false)

  useEffect(() => {
    if (!hydrated || createdRef.current) return
    createdRef.current = true
    const fresh = create()
    router.replace(`/constellations/${fresh.id}`)
  }, [hydrated, create, router])

  return (
    <main className="mx-auto max-w-3xl px-6 py-24 text-center">
      <p className="font-serif italic text-lg text-[#9B8F7E]">
        On allume une nouvelle constellation…
      </p>
    </main>
  )
}
