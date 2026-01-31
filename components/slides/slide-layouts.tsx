'use client'

import React from "react"

import type {
  TitleSlide,
  SectionSlide,
  ContentSlide,
  PlanSlide,
  ContentBlock,
  SlideTheme,
  SlideVideo
} from '@/lib/slides/types'
import { Compass, Heart, Flame, Play, Globe, Users, Scale, AlertCircle } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

// Theme colors mapping
const themeColors: Record<SlideTheme, { primary: string; accent: string; border: string; bg: string }> = {
  red: { primary: 'text-red-500', accent: 'text-red-400', border: 'border-red-500', bg: 'bg-red-500/10' },
  blue: { primary: 'text-blue-500', accent: 'text-blue-400', border: 'border-blue-500', bg: 'bg-blue-500/10' },
  green: { primary: 'text-emerald-500', accent: 'text-emerald-400', border: 'border-emerald-500', bg: 'bg-emerald-500/10' },
  orange: { primary: 'text-amber-500', accent: 'text-amber-400', border: 'border-amber-500', bg: 'bg-amber-500/10' },
  purple: { primary: 'text-purple-500', accent: 'text-purple-400', border: 'border-purple-500', bg: 'bg-purple-500/10' },
  cyan: { primary: 'text-cyan-500', accent: 'text-cyan-400', border: 'border-cyan-500', bg: 'bg-cyan-500/10' },
}

function getTheme(theme?: SlideTheme) {
  return themeColors[theme || 'red']
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  compass: Compass, heart: Heart, flame: Flame, globe: Globe, users: Users, scale: Scale, alert: AlertCircle
}

// ========== EMBEDDED VIDEOS COMPONENT ==========
export function EmbeddedVideos({ videos, theme }: { videos: SlideVideo[]; theme: ReturnType<typeof getTheme> }) {
  if (videos.length === 0) return null

  const handlePlay = (url: string) => {
    const videoEl = document.createElement('video')
    videoEl.src = url
    videoEl.controls = true
    videoEl.autoplay = true
    videoEl.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;z-index:9999;background:black;object-fit:contain;'
    videoEl.onclick = (e) => { if (e.target === videoEl) { videoEl.pause(); videoEl.remove() } }
    videoEl.onended = () => videoEl.remove()
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { videoEl.pause(); videoEl.remove(); document.removeEventListener('keydown', handler) }
    }
    document.addEventListener('keydown', handler)
    document.body.appendChild(videoEl)
  }

  return (
    <TooltipProvider delayDuration={300}>
      <div className="flex gap-2 flex-wrap">
        {videos.map((video, i) => (
          <Tooltip key={i}>
            <TooltipTrigger asChild>
              <button
                onClick={() => handlePlay(video.url)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border ${theme.border} ${theme.bg} hover:brightness-125 transition-all cursor-pointer`}
              >
                <Play className={`w-3.5 h-3.5 ${theme.primary}`} fill="currentColor" />
                <span className="text-xs text-slate-300 truncate max-w-[350px]">{video.title}</span>
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{video.title}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}

// ========== TITLE SLIDE ==========
export function TitleSlideLayout({ slide }: { slide: TitleSlide }) {
  const theme = getTheme(slide.theme)
  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
      {slide.backgroundImage && (
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.backgroundImage})` }}>
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>
      )}
      <div className="relative z-10 text-center px-8 max-w-4xl">
        <p className={`text-sm tracking-[0.3em] uppercase mb-6 ${theme.primary}`}>{slide.category}</p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">{slide.title}</h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-8 text-balance">{slide.subtitle}</p>
        <p className={`text-base ${theme.accent}`}>{slide.description}</p>
      </div>
    </div>
  )
}

// ========== SECTION SLIDE ==========
export function SectionSlideLayout({ slide, allSections = [] }: { slide: SectionSlide; allSections?: { partNumber: string; subtitle: string }[] }) {
  const theme = getTheme(slide.theme)
  return (
    <div className="relative h-full w-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {slide.backgroundImage && (
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.backgroundImage})` }}>
          <div className="absolute inset-0 bg-slate-900/85" />
        </div>
      )}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-900/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-700/30 rounded-full blur-3xl" />
      <div className="relative z-10 text-center">
        <div className={`w-24 h-1 mx-auto mb-8 ${theme.primary.replace('text-', 'bg-')}`} />
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">{slide.title}</h2>
        <p className="text-xl md:text-2xl text-slate-400">{slide.subtitle}</p>
        <div className={`w-24 h-1 mx-auto mt-8 ${theme.primary.replace('text-', 'bg-')}`} />
        {allSections.length > 0 && (
          <div className="mt-12 space-y-2">
            {allSections.map((section, i) => {
              const isCurrent = section.partNumber === slide.partNumber
              return (
                <p key={i} className={isCurrent ? `text-base font-semibold ${theme.primary}` : 'text-sm text-slate-400'}>
                  {section.partNumber} — {section.subtitle}
                </p>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

// ========== PLAN SLIDE ==========
export function PlanSlideLayout({ slide }: { slide: PlanSlide }) {
  const theme = getTheme(slide.theme)
  return (
    <div className="h-full w-full bg-slate-900 p-8 md:p-12 overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          {slide.category && <p className={`text-sm tracking-[0.2em] uppercase mb-2 ${theme.primary}`}>{slide.category}</p>}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{slide.title}</h2>
          {slide.subtitle && <p className="text-lg text-slate-400 max-w-3xl mx-auto">{slide.subtitle}</p>}
          {slide.description && <p className="text-slate-300 mt-4 max-w-3xl mx-auto">{slide.description}</p>}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {slide.items.map((item, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl border border-slate-700 hover:border-slate-500 transition-all">
              <div className="aspect-[3/4] overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className={`text-xs font-bold ${theme.primary} mb-1`}>{item.partNumber}</p>
                <h3 className="text-sm md:text-base font-semibold text-white leading-tight">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ========== BLOCK RENDERER ==========
function BlockRenderer({ block, theme }: { block: ContentBlock; theme: ReturnType<typeof getTheme> }) {
  switch (block.type) {
    case 'heading': {
      const d = block.data
      return (
        <div>
          {d.image ? (
            <div className={`relative w-full rounded-xl overflow-hidden border ${theme.border} shadow-lg shadow-black/30 mb-4`}>
              <img src={d.image} alt={d.title} className="w-full aspect-[21/9] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
              <div className={`absolute bottom-0 left-0 right-0 h-[2px] ${theme.primary.replace('text-', 'bg-')}`} />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                {d.category && <p className={`text-xs tracking-[0.2em] uppercase mb-2 ${theme.primary}`}>{d.category}</p>}
                <h2 className="text-3xl md:text-4xl font-bold text-white">{d.title}</h2>
                {d.subtitle && <p className="text-sm text-slate-300 mt-1">{d.subtitle}</p>}
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              {d.category && <p className={`text-sm tracking-[0.2em] uppercase ${theme.primary}`}>{d.category}</p>}
              <h2 className="text-4xl md:text-5xl font-bold text-white">{d.title}</h2>
              {d.subtitle && <p className="text-lg text-slate-400">{d.subtitle}</p>}
            </div>
          )}
        </div>
      )
    }
    case 'text': {
      const d = block.data
      return (
        <div className="text-slate-300 leading-relaxed whitespace-pre-line">
          {d.highlightedText && <span className={theme.primary}>{d.highlightedText}</span>}
          {' '}{d.content}
        </div>
      )
    }
    case 'quote': {
      const d = block.data
      return (
        <blockquote className={`border-l-4 ${theme.border} pl-6 py-4 bg-slate-800/50 rounded-r-lg flex items-center gap-4`}>
          {d.image && (
            <img
              src={d.image.src}
              alt={d.image.alt || ''}
              className="rounded-lg object-cover flex-shrink-0"
              style={{ width: d.image.size || 80, height: d.image.size || 80 }}
            />
          )}
          <div>
            <p className="text-slate-200 italic text-lg">{d.text}</p>
            {d.author && <footer className="mt-3 text-sm text-slate-500">— {d.author}</footer>}
          </div>
        </blockquote>
      )
    }
    case 'bullets': {
      const d = block.data
      return (
        <div className="space-y-2">
          {d.title && <h4 className={`text-lg font-semibold ${theme.primary}`}>{d.title}</h4>}
          <ul className="space-y-3">
            {d.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className={`mt-1.5 text-xs flex-shrink-0 ${theme.primary}`}>▸</span>
                <span className="text-slate-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )
    }
    case 'card': {
      const d = block.data
      return (
        <div className={`border ${theme.border} rounded-lg p-6 ${theme.bg}`}>
          <h4 className="text-lg font-semibold text-white mb-3">{d.title}</h4>
          <p className="text-slate-300 mb-2">{d.content}</p>
          {d.highlight && <p className={`font-bold ${theme.primary}`}>{d.highlight}</p>}
          {d.subtext && <p className="text-sm text-slate-400 italic mt-2">{d.subtext}</p>}
        </div>
      )
    }
    case 'cards': {
      const d = block.data
      return (
        <div className="space-y-4">
          {d.items.map((card, i) => (
            <div key={i} className={`border ${theme.border} rounded-lg p-6 ${theme.bg}`}>
              <h4 className="text-lg font-semibold text-white mb-3">{card.title}</h4>
              <p className="text-slate-300 mb-2">{card.content}</p>
              {card.highlight && <p className={`font-bold ${theme.primary}`}>{card.highlight}</p>}
              {card.subtext && <p className="text-sm text-slate-400 italic mt-2">{card.subtext}</p>}
            </div>
          ))}
        </div>
      )
    }
    case 'videos': {
      return <EmbeddedVideos videos={block.data.items} theme={theme} />
    }
    case 'image': {
      const d = block.data
      return (
        <div>
          <div className="rounded-lg overflow-hidden border border-slate-700">
            <img src={d.src || "/placeholder.svg"} alt={d.alt} className="w-full h-auto object-cover" />
          </div>
          {d.caption && (
            <div className={`${theme.bg} border ${theme.border} rounded-lg p-4 text-center mt-2`}>
              <p className="text-slate-300 italic">{d.caption}</p>
            </div>
          )}
        </div>
      )
    }
    case 'section': {
      const d = block.data
      return (
        <div>
          <h3 className={`text-xl font-semibold mb-3 ${theme.primary}`}>{d.title}</h3>
          <p className="text-slate-300 leading-relaxed">{d.content}</p>
        </div>
      )
    }
    case 'timeline': {
      const d = block.data
      return (
        <div className="relative">
          <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-slate-700" />
          <div className="space-y-8">
            {d.events.map((event, i) => (
              <div key={i} className="relative pl-10">
                <div className={`absolute left-0 w-6 h-6 rounded-full ${theme.primary.replace('text-', 'bg-')} flex items-center justify-center`}>
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <div>
                  <p className={`text-sm font-semibold ${theme.primary}`}>{event.date}</p>
                  <h3 className="text-lg font-bold text-white mt-1">{event.title}</h3>
                  <p className="text-slate-400 text-sm mt-1">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }
    case 'parallels': {
      const d = block.data
      const singleItem = d.items.length === 1
      return (
        <div className={singleItem ? '' : 'md:col-span-2'}>
          <div className={`${singleItem ? 'space-y-4' : 'grid md:grid-cols-2 gap-6 mb-8'}`}>
            {d.items.map((parallel, i) => {
              const IconComponent = iconMap[parallel.icon] || Globe
              return (
                <div key={i} className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-full border ${theme.border} flex items-center justify-center`}>
                      <IconComponent className={`w-5 h-5 ${theme.primary}`} />
                    </div>
                    <h3 className="text-xl font-bold text-white">{parallel.title}</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className={`text-sm font-semibold ${theme.primary} mb-1`}>{"Dans l'anime :"}</p>
                      <p className="text-slate-300 text-sm">{parallel.anime}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-blue-400 mb-1">Dans notre monde :</p>
                      <p className="text-slate-300 text-sm">{parallel.realWorld}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          {d.bottomQuote && (
            <div className={`${theme.bg} border ${theme.border} rounded-lg p-6 text-center`}>
              <p className="text-slate-200 italic text-lg">{d.bottomQuote}</p>
            </div>
          )}
        </div>
      )
    }
    case 'plan-grid': {
      const d = block.data
      return (
        <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {d.items.map((item, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl border border-slate-700 hover:border-slate-500 transition-all">
              <div className="aspect-[3/4] overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className={`text-xs font-bold ${theme.primary} mb-1`}>{item.partNumber}</p>
                <h3 className="text-sm md:text-base font-semibold text-white leading-tight">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      )
    }
    case 'icon-bullets': {
      const d = block.data
      return (
        <div className="space-y-6">
          {d.items.map((point, i) => {
            const IconComponent = iconMap[point.icon] || Compass
            return (
              <div key={i} className="flex gap-4">
                <div className={`w-12 h-12 rounded-full ${theme.bg} ${theme.border} border flex items-center justify-center flex-shrink-0`}>
                  <IconComponent className={`w-5 h-5 ${theme.primary}`} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{point.title}</h4>
                  <p className="text-slate-400 text-sm mt-1">{point.content}</p>
                </div>
              </div>
            )
          })}
        </div>
      )
    }
    default:
      return null
  }
}

// ========== CONTENT SLIDE ==========
export function ContentSlideLayout({ slide, visibleStep }: { slide: ContentSlide; visibleStep: number }) {
  const theme = getTheme(slide.theme)

  // Split blocks into left and right columns
  const leftBlocks: { block: ContentBlock; index: number }[] = []
  const rightBlocks: { block: ContentBlock; index: number }[] = []

  slide.blocks.forEach((block, index) => {
    const col = block.column || 'left'
    if (col === 'right') {
      rightBlocks.push({ block, index })
    } else {
      leftBlocks.push({ block, index })
    }
  })

  const hasRightColumn = rightBlocks.length > 0

  const renderBlock = (block: ContentBlock, index: number) => {
    const step = block.step ?? 0
    const visible = step <= visibleStep
    return (
      <div
        key={index}
        className="transition-all duration-500 ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(12px)',
          pointerEvents: visible ? 'auto' : 'none',
          maxHeight: visible ? '2000px' : '0',
          overflow: 'hidden',
          marginBottom: visible ? undefined : '0',
        }}
      >
        <BlockRenderer block={block} theme={theme} />
      </div>
    )
  }

  return (
    <div className="h-full w-full bg-slate-900 p-8 md:p-12 overflow-y-auto">
      <div className={`max-w-7xl mx-auto ${hasRightColumn ? 'grid md:grid-cols-2 gap-8 items-start' : ''}`}>
        <div className="space-y-6">
          {leftBlocks.map(({ block, index }) => renderBlock(block, index))}
        </div>
        {hasRightColumn && (
          <div className="space-y-4">
            {rightBlocks.map(({ block, index }) => renderBlock(block, index))}
          </div>
        )}
      </div>
    </div>
  )
}
