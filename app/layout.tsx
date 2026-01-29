import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'Slide.io',
    template: '%s | Slide.io',
  },
  description: 'Créez et partagez des présentations interactives',
  metadataBase: new URL('https://slide-io.vercel.app'),
  keywords: ['présentation', 'slides', 'diaporama', 'slide.io'],
  authors: [{ name: 'Slide.io' }],
  openGraph: {
    title: 'Slide.io',
    description: 'Créez et partagez des présentations interactives',
    siteName: 'Slide.io',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Slide.io',
    description: 'Créez et partagez des présentations interactives',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="dark">
      <body className="font-sans antialiased bg-slate-900">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
