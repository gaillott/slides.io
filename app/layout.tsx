import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'Ataraxis',
    template: '%s | Ataraxis',
  },
  description: 'Créez et partagez des présentations interactives',
  metadataBase: new URL('https://slide-io.vercel.app'),
  keywords: ['présentation', 'slides', 'diaporama', 'Ataraxis'],
  authors: [{ name: 'Ataraxis' }],
  openGraph: {
    title: 'Ataraxis',
    description: 'Créez et partagez des présentations interactives',
    siteName: 'Ataraxis',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ataraxis',
    description: 'Créez et partagez des présentations interactives',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
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
