'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getAllPresentations } from '@/lib/slides/presentations'
import { BookOpen, Film, ArrowRight } from 'lucide-react'

export default function Home() {
  const presentations = getAllPresentations()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-[100dvh] bg-slate-900 flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Subtle background grain */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />

      {/* Ambient glow */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-800/30 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div
        className="relative transition-all duration-700 ease-out"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(-20px)',
        }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Ataraxis
        </h1>
        <div className="mt-2 h-px w-12 mx-auto bg-gradient-to-r from-transparent via-slate-500 to-transparent" />
      </div>

      {/* Presentations list */}
      <div className="relative mt-12 sm:mt-16 w-full max-w-md flex flex-col gap-2">
        {presentations.map((presentation, i) => (
          <Link
            key={presentation.id}
            href={`/presentation/${presentation.id}`}
            className="group relative flex items-center gap-4 px-5 py-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.04] hover:border-white/[0.1] transition-all duration-300"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(16px)',
              transitionDelay: `${150 + i * 80}ms`,
              transitionProperty: 'opacity, transform, background-color, border-color',
              transitionDuration: '500ms, 500ms, 300ms, 300ms',
            }}
          >
            <span className="w-10 h-10 bg-white/[0.06] group-hover:bg-white/[0.1] rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300">
              {presentation.category === 'cine-philo' ? (
                <Film className="w-[18px] h-[18px] text-slate-400 group-hover:text-white transition-colors duration-300" />
              ) : (
                <BookOpen className="w-[18px] h-[18px] text-slate-400 group-hover:text-white transition-colors duration-300" />
              )}
            </span>
            <div className="flex-1 min-w-0">
              <span className="text-[15px] text-slate-300 group-hover:text-white transition-colors duration-300 block truncate">
                {presentation.title}
              </span>
              {presentation.description && (
                <span className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors duration-300 block truncate mt-0.5">
                  {presentation.description}
                </span>
              )}
            </div>
            <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-slate-300 group-hover:translate-x-0.5 transition-all duration-300 flex-shrink-0" />
          </Link>
        ))}
      </div>

      {/* Footer hint */}
      <p
        className="relative mt-12 text-xs text-slate-600 transition-all duration-700"
        style={{
          opacity: mounted ? 1 : 0,
          transitionDelay: '600ms',
        }}
      >
        {presentations.length} {presentations.length > 1 ? 'presentations' : 'presentation'}
      </p>
    </div>
  )
}
