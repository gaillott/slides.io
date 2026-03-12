'use client'

import React from "react"

import type {
  TitleSlide,
  SectionSlide,
  ContentSlide,
  PlanSlide,
  PhotoSlide,
  PhotoGridSlide,
  PhotoTextSlide,
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

    const cleanup = () => {
      videoEl.pause()
      videoEl.remove()
      document.removeEventListener('keydown', keyHandler)
      window.removeEventListener('popstate', popHandler)
    }

    const closeViaBack = () => {
      cleanup()
    }

    const closeViaUI = () => {
      // Pop the history entry we pushed, without triggering navigation
      window.removeEventListener('popstate', popHandler)
      history.back()
      cleanup()
    }

    videoEl.onclick = (e) => { if (e.target === videoEl) closeViaUI() }
    videoEl.onended = () => closeViaUI()

    const keyHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeViaUI()
    }
    const popHandler = () => closeViaBack()

    history.pushState({ video: true }, '')
    window.addEventListener('popstate', popHandler)
    document.addEventListener('keydown', keyHandler)
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
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${encodeURI(slide.backgroundImage)})` }}>
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
    <div className="relative h-full w-full flex items-end justify-start overflow-hidden">
      {/* Background: image or elegant gradient */}
      {slide.backgroundImage ? (
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${encodeURI(slide.backgroundImage)})` }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-red-900/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-slate-700/20 rounded-full blur-[100px]" />
        </div>
      )}

      {/* Content — cinematic bottom-left layout */}
      <div className="relative z-10 w-full p-10 md:p-16">
        {/* Part number */}
        <p className={`text-sm md:text-base tracking-[0.3em] uppercase mb-4 ${theme.primary} font-semibold`}>
          {slide.partNumber}
        </p>
        {/* Accent line */}
        <div className={`w-16 h-1 mb-6 ${theme.primary.replace('text-', 'bg-')}`} />
        {/* Title */}
        <h2 className="text-5xl md:text-8xl font-bold text-white mb-4 leading-[0.95]">{slide.title}</h2>
        {/* Subtitle */}
        <p className="text-xl md:text-3xl text-white/70 font-light">{slide.subtitle}</p>

        {allSections.length > 0 && (
          <div className="mt-10 space-y-2">
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
    <div className="h-full w-full bg-slate-900 p-4 md:p-6 flex flex-col overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex flex-col flex-1 min-h-0">
        <div className="mb-4 text-center shrink-0">
          {slide.category && <p className={`text-xs tracking-[0.2em] uppercase mb-1 ${theme.primary}`}>{slide.category}</p>}
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{slide.title}</h2>
          {slide.subtitle && <p className="text-sm text-slate-400 max-w-3xl mx-auto">{slide.subtitle}</p>}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1 min-h-0">
          {slide.items.map((item, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl border border-slate-700 hover:border-slate-500 transition-all">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className={`text-sm font-bold ${theme.primary} mb-1 tracking-wider`}>{item.partNumber}</p>
                <h3 className="text-lg md:text-xl font-semibold text-white leading-tight">{item.title}</h3>
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
          <div className={`relative w-full rounded-xl overflow-hidden border ${theme.border} shadow-lg shadow-black/30 mb-4 max-h-80`}>
            <img src={d.image} alt={d.title} className="w-full aspect-[21/9] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent " />
            <div className={`absolute bottom-0 left-0 right-0 h-[2px] ${theme.primary.replace('text-', 'bg-')}`} />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              {d.category && <p className={`text-xs tracking-[0.2em] uppercase mb-2 ${theme.primary}`}>{d.category}</p>}
              <h2 className="text-3xl md:text-4xl font-bold text-white">{d.title}</h2>
              {d.subtitle && <p className="text-sm text-slate-300 mt-1">{d.subtitle}</p>}
            </div>
          </div>
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
            <footer className="mt-3 text-sm text-slate-500">— {d.author}</footer>
          </div>
        </blockquote>
      )
    }
    case 'bullets': {
      const d = block.data
      return (
        <div className="space-y-2">
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
      const IconComponent = d.icon ? iconMap[d.icon] : null
      return (
        <div className={`rounded-lg p-5 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 hover:border-slate-600/50 transition-colors`}>
          <div className="flex gap-4">
            {IconComponent && (
              <div className={`w-10 h-10 rounded-full ${theme.bg} flex items-center justify-center flex-shrink-0`}>
                <IconComponent className={`w-5 h-5 ${theme.primary}`} />
              </div>
            )}
            <div>
              {d.title && <h4 className="text-lg font-semibold text-white mb-2">{d.title}</h4>}
              <p className="text-slate-300">{d.content}</p>
            </div>
          </div>
        </div>
      )
    }
    case 'cards': {
      const d = block.data
      return (
        <div className="space-y-4">
          {d.items.map((card, i) => {
            const IconComponent = card.icon ? iconMap[card.icon] : null
            return (
              <div key={i} className={`rounded-lg p-5 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 hover:border-slate-600/50 transition-colors`}>
                <div className="flex gap-4">
                  {IconComponent && (
                    <div className={`w-10 h-10 rounded-full ${theme.bg} flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className={`w-5 h-5 ${theme.primary}`} />
                    </div>
                  )}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{card.title}</h4>
                    <p className="text-slate-300">{card.content}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )
    }
    case 'video': {
      return <EmbeddedVideos videos={[block.data.video]} theme={theme} />
    }
    case 'image': {
      const d = block.data
      return (
        <div>
          <div className="rounded-lg overflow-hidden border border-slate-700">
            <img src={d.src || "/placeholder.svg"} alt={d.alt} className="w-full h-auto object-cover" />
          </div>
        </div>
      )
    }
    case 'section': {
      const d = block.data
      return (
        <div>
          <h3 className={`text-xl font-semibold mb-3 ${theme.primary}`}>{d.title}</h3>
          {d.content && <p className="text-slate-300 leading-relaxed">{d.content}</p>}
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

// ========== PHOTO SLIDE (fullscreen) ==========
export function PhotoSlideLayout({ slide }: { slide: PhotoSlide }) {
  return (
    <div className="relative h-full w-full bg-black flex items-center justify-center overflow-hidden">
      <img
        src={slide.src}
        alt={slide.alt}
        className="max-w-full max-h-full w-full h-full object-contain"
        draggable={false}
      />
      {(slide.caption || slide.anecdote) && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-16 pb-6 px-8">
          {slide.caption && (
            <p className="text-amber-100/90 text-lg font-medium">{slide.caption}</p>
          )}
          {slide.anecdote && (
            <p className="text-white/60 text-sm mt-1 italic">{slide.anecdote}</p>
          )}
        </div>
      )}
    </div>
  )
}

// ========== PHOTO GRID SLIDE (max 3 photos) ==========
function getGridClasses(count: number): string {
  switch (count) {
    case 1: return 'grid grid-cols-1 gap-2'
    case 2: return 'grid grid-cols-2 gap-2'
    default: return 'grid grid-cols-3 gap-2'
  }
}

export function PhotoGridSlideLayout({ slide }: { slide: PhotoGridSlide }) {
  const photos = slide.photos.slice(0, 3)
  return (
    <div className="h-full w-full bg-black p-3 flex flex-col overflow-hidden">
      {slide.sectionTitle && (
        <p className="text-amber-100/90 text-base font-medium mb-2 px-2 py-1 shrink-0 bg-white/[0.06] rounded-md inline-block">{slide.sectionTitle}</p>
      )}
      <div className={`${getGridClasses(photos.length)} flex-1 min-h-0`}>
        {photos.map((photo, i) => (
          <div key={i} className="relative overflow-hidden rounded-lg">
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover"
              draggable={false}
            />
            {photo.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent pt-8 pb-2 px-3">
                <p className="text-white/80 text-xs">{photo.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// ========== PHOTO TEXT SLIDE ==========
export function PhotoTextSlideLayout({ slide }: { slide: PhotoTextSlide }) {
  const isLeft = slide.photo.position === 'left'
  return (
    <div className={`h-full w-full bg-slate-950 flex ${isLeft ? 'flex-row' : 'flex-row-reverse'} overflow-hidden`}>
      {/* Photo side — 60% */}
      <div className="w-[60%] h-full relative shrink-0">
        <img
          src={slide.photo.src}
          alt={slide.photo.alt}
          className="w-full h-full object-cover"
          draggable={false}
        />
        <div className={`absolute inset-0 bg-gradient-to-${isLeft ? 'r' : 'l'} from-transparent to-slate-950/40`} />
      </div>
      {/* Text side — 40% */}
      <div className="w-[40%] h-full flex flex-col justify-center px-8 md:px-12">
        {slide.title && (
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{slide.title}</h2>
        )}
        {slide.highlight && (
          <p className="text-amber-400 text-sm tracking-wider uppercase mb-4">{slide.highlight}</p>
        )}
        <p className="text-slate-300 leading-relaxed text-base md:text-lg">{slide.text}</p>
      </div>
    </div>
  )
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
