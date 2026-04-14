import type { ReactNode } from "react"
import type { Metadata } from "next"
import { Fraunces } from "next/font/google"

import { BoussoleEthique } from "@/components/constellation/BoussoleEthique"

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif-constellation",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Constellations",
  description:
    "Préparer un cours vivant — carte de navigation intérieure, pas un formulaire.",
}

export default function ConstellationsLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div
      className={`theme-constellation min-h-[100dvh] bg-[#FDFBF7] text-[#2C2C2C] ${fraunces.variable}`}
      style={{
        // Prefer the Fraunces serif for headings inside this module.
        // Body text still falls back to the app's sans font.
        fontFeatureSettings: '"ss01", "ss02"',
      }}
    >
      <BoussoleEthique />
      <div className="relative">{children}</div>
    </div>
  )
}
