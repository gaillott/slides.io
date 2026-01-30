'use client'

import React from "react"

import type {
  TitleSlide,
  SectionSlide,
  ContentSlide,
  TimelineSlide,
  VideoSlide,
  TwoColumnSlide,
  QuotesGridSlide,
  ParallelsSlide,
  PlanSlide,
  SlideTheme,
  SlideVideo
} from '@/lib/slides/types'
import { Compass, Heart, Flame, Play, Globe, Users, Scale, AlertCircle, Quote, ExternalLink } from 'lucide-react'

// Theme colors mapping
const themeColors: Record<SlideTheme, { primary: string; accent: string; border: string; bg: string }> = {
  red: {
    primary: 'text-red-500',
    accent: 'text-red-400',
    border: 'border-red-500',
    bg: 'bg-red-500/10'
  },
  blue: {
    primary: 'text-blue-500',
    accent: 'text-blue-400',
    border: 'border-blue-500',
    bg: 'bg-blue-500/10'
  },
  green: {
    primary: 'text-emerald-500',
    accent: 'text-emerald-400',
    border: 'border-emerald-500',
    bg: 'bg-emerald-500/10'
  },
  orange: {
    primary: 'text-amber-500',
    accent: 'text-amber-400',
    border: 'border-amber-500',
    bg: 'bg-amber-500/10'
  },
  purple: {
    primary: 'text-purple-500',
    accent: 'text-purple-400',
    border: 'border-purple-500',
    bg: 'bg-purple-500/10'
  },
  cyan: {
    primary: 'text-cyan-500',
    accent: 'text-cyan-400',
    border: 'border-cyan-500',
    bg: 'bg-cyan-500/10'
  }
}

function getTheme(theme?: SlideTheme) {
  return themeColors[theme || 'red']
}

// Icon mapping
const iconMap: Record<string, React.FC<{ className?: string }>> = {
  compass: Compass,
  heart: Heart,
  flame: Flame,
  globe: Globe,
  users: Users,
  scale: Scale,
  alert: AlertCircle
}

// ========== EMBEDDED VIDEOS COMPONENT ==========
function EmbeddedVideos({ videos, theme }: { videos?: SlideVideo[]; theme: ReturnType<typeof getTheme> }) {
  if (!videos || videos.length === 0) return null

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
    <div className="flex gap-2 flex-wrap">
      {videos.map((video, i) => (
        <button
          key={i}
          onClick={() => handlePlay(video.url)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border ${theme.border} ${theme.bg} hover:brightness-125 transition-all cursor-pointer`}
        >
          <Play className={`w-3.5 h-3.5 ${theme.primary}`} fill="currentColor" />
          <span className="text-xs text-slate-300 truncate max-w-[200px]">{video.title}</span>
        </button>
      ))}
    </div>
  )
}

// ========== TITLE SLIDE ==========
export function TitleSlideLayout({ slide }: { slide: TitleSlide }) {
  const theme = getTheme(slide.theme)
  
  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      {slide.backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-4xl">
        <p className={`text-sm tracking-[0.3em] uppercase mb-6 ${theme.primary}`}>
          {slide.category}
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">
          {slide.title}
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-8 text-balance">
          {slide.subtitle}
        </p>
        <p className={`text-base ${theme.accent}`}>
          {slide.description}
        </p>
      </div>
    </div>
  )
}

// ========== SECTION SLIDE ==========
export function SectionSlideLayout({ slide, allSections = [] }: { slide: SectionSlide; allSections?: { partNumber: string; subtitle: string }[] }) {
  const theme = getTheme(slide.theme)

  return (
    <div className="relative h-full w-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Image */}
      {slide.backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-slate-900/85" />
        </div>
      )}
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-900/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-700/30 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 text-center">
        <div className={`w-24 h-1 mx-auto mb-8 ${theme.primary.replace('text-', 'bg-')}`} />
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
          {slide.title}
        </h2>
        <p className="text-xl md:text-2xl text-slate-400">
          {slide.subtitle}
        </p>
        <div className={`w-24 h-1 mx-auto mt-8 ${theme.primary.replace('text-', 'bg-')}`} />

        {/* All sections overview */}
        {allSections.length > 0 && (
          <div className="mt-12 space-y-2">
            {allSections.map((section, i) => {
              const isCurrent = section.partNumber === slide.partNumber
              return (
                <p
                  key={i}
                  className={
                    isCurrent
                      ? `text-base font-semibold ${theme.primary}`
                      : 'text-sm text-slate-400'
                  }
                >
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

// ========== CONTENT SLIDE ==========
export function ContentSlideLayout({ slide }: { slide: ContentSlide }) {
  const theme = getTheme(slide.theme)
  const hasImage = !!slide.image
  const hasCards = !!(slide.cards && slide.cards.length > 0)
  const hasRightColumn = hasImage || hasCards || (slide.videos && slide.videos.length > 0)

  return (
    <div className="h-full w-full bg-slate-900 p-8 md:p-12 overflow-y-auto">
      <div className={`max-w-7xl mx-auto ${hasRightColumn ? 'grid md:grid-cols-2 gap-8 items-start' : ''}`}>
        {/* Left/Main Content */}
        <div className="space-y-6">
          {slide.category && (
            <p className={`text-sm tracking-[0.2em] uppercase ${theme.primary}`}>
              {slide.category}
            </p>
          )}

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {slide.title}
          </h2>

          {slide.subtitle && (
            <p className="text-lg text-slate-400">{slide.subtitle}</p>
          )}

          {/* Content block (text + highlighted text) */}
          {slide.content?.text && (
            <div className="text-slate-300 leading-relaxed whitespace-pre-line">
              {slide.content.highlightedText && (
                <span className={theme.primary}>{slide.content.highlightedText}</span>
              )}
              {' '}{slide.content.text}
            </div>
          )}

          {/* Sections */}
          {slide.sections?.map((section, i) => (
            <div key={i}>
              <h3 className={`text-xl font-semibold mb-3 ${theme.primary}`}>
                {section.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">{section.content}</p>
            </div>
          ))}

          {/* Quote (top-level or nested in content) */}
          {(slide.quote || slide.content?.quote) && (() => {
            const q = slide.quote || slide.content!.quote!
            return (
              <blockquote className={`border-l-4 ${theme.border} pl-6 py-4 bg-slate-800/50 rounded-r-lg`}>
                <p className="text-slate-200 italic text-lg">{q.text}</p>
                {q.author && (
                  <footer className="mt-3 text-sm text-slate-500">— {q.author}</footer>
                )}
              </blockquote>
            )
          })()}

          {/* Bullet Points (top-level or nested in content) */}
          {(slide.bulletPoints || slide.content?.bulletPoints) && (() => {
            const points = slide.bulletPoints || slide.content!.bulletPoints!
            return (
              <div className="space-y-2 pt-4">
                {slide.bulletPointsTitle && (
                  <h4 className={`text-lg font-semibold ${theme.primary}`}>{slide.bulletPointsTitle}</h4>
                )}
                <ul className="space-y-3">
                  {points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className={`mt-2 w-2 h-2 rounded-full flex-shrink-0 ${theme.primary.replace('text-', 'bg-')}`} />
                      <span className="text-slate-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })()}
        </div>

        {/* Right Column - Videos + Image + Cards */}
        {hasRightColumn && (
          <div className="space-y-4">
            <EmbeddedVideos videos={slide.videos} theme={theme} />

            {slide.image && (
              <>
                <div className="rounded-lg overflow-hidden border border-slate-700">
                  <img
                    src={slide.image.src || "/placeholder.svg"}
                    alt={slide.image.alt}
                    className="w-full h-auto object-cover"
                  />
                </div>
                {slide.image.caption && (
                  <div className={`${theme.bg} border ${theme.border} rounded-lg p-4 text-center`}>
                    <p className="text-slate-300 italic">{slide.image.caption}</p>
                  </div>
                )}
              </>
            )}

            {slide.cards?.map((card, i) => (
              <div
                key={i}
                className={`border ${theme.border} rounded-lg p-6 ${theme.bg}`}
              >
                <h4 className="text-lg font-semibold text-white mb-3">{card.title}</h4>
                <p className="text-slate-300 mb-2">{card.content}</p>
                {card.highlight && (
                  <p className={`font-bold ${theme.primary}`}>{card.highlight}</p>
                )}
                {card.subtext && (
                  <p className="text-sm text-slate-400 italic mt-2">{card.subtext}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// ========== TIMELINE SLIDE ==========
export function TimelineSlideLayout({ slide }: { slide: TimelineSlide }) {
  const theme = getTheme(slide.theme)

  return (
    <div className="h-full w-full bg-slate-900 p-8 md:p-12 overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          {slide.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-slate-700" />

            <div className="space-y-8">
              {slide.events.map((event, i) => (
                <div key={i} className="relative pl-10">
                  {/* Dot */}
                  <div className={`absolute left-0 w-6 h-6 rounded-full ${theme.primary.replace('text-', 'bg-')} flex items-center justify-center`}>
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>

                  {/* Content */}
                  <div>
                    <p className={`text-sm font-semibold ${theme.primary}`}>{event.date}</p>
                    <h3 className="text-lg font-bold text-white mt-1">{event.title}</h3>
                    <p className="text-slate-400 text-sm mt-1">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
          <div className="grid gap-8">
            {/* Embedded Videos */}
            <EmbeddedVideos videos={slide.videos} theme={theme} />

            {/* Image */}
            {slide.image && (
              <div className="rounded-lg overflow-hidden h-fit">
                <img
                  src={slide.image.src || "/placeholder.svg"}
                  alt={slide.image.alt}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}
            {/* Right Column - Cards */}
            {slide.cards && (
              <div className="space-y-4">
                {slide.cards.map((card, i) => (
                  <div
                    key={i}
                    className={`border ${theme.border} rounded-lg p-6 ${theme.bg}`}
                  >
                    <h4 className="text-lg font-semibold text-white mb-3">{card.title}</h4>
                    <p className="text-slate-300 mb-2">{card.content}</p>
                    {card.highlight && (
                      <p className={`font-bold ${theme.primary}`}>{card.highlight}</p>
                    )}
                    {card.subtext && (
                      <p className="text-sm text-slate-400 italic mt-2">{card.subtext}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// ========== VIDEO SLIDE ==========
export function VideoSlideLayout({ slide }: { slide: VideoSlide }) {
  const theme = getTheme(slide.theme)
  
  return (
    <div className="h-full w-full bg-slate-900 p-4 md:p-6 flex flex-col">
      {/* Video */}
      <div className="relative flex-1 bg-slate-800 rounded-xl overflow-hidden min-h-[400px] flex items-center justify-center">
        {/* Title banner */}
        <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/70 to-transparent px-4 py-3">
          <h2 className="font-semibold text-white">{slide.title}</h2>
        </div>
        {slide.videoUrl ? (
          <video
            src={slide.videoUrl}
            controls
            className="w-full h-full object-contain"
            poster=""
          >
            <p className="text-slate-400">{slide.placeholder}</p>
          </video>
        ) : (
          <div className="text-center">
            <button className={`w-20 h-20 rounded-full ${theme.primary.replace('text-', 'bg-')} flex items-center justify-center mb-6 mx-auto hover:scale-110 transition-transform`}>
              <Play className="w-8 h-8 text-white ml-1" fill="white" />
            </button>
            <p className="text-slate-400">{slide.placeholder}</p>
            <p className="text-slate-500 text-sm mt-2">{slide.description}</p>
            {slide.links && slide.links.length > 0 && (
              <div className="flex flex-wrap justify-center gap-3 mt-4">
                {slide.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {link.title}
                  </a>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      
      {/* Quote */}
      {slide.quote && (
        <div className="mt-8 mb-16 text-center">
          <p className={`text-xl italic ${theme.primary}`}>
            {slide.quote.text}
          </p>
          <p className="text-slate-500 mt-2">— {slide.quote.author}</p>
        </div>
      )}
    </div>
  )
}

// ========== TWO COLUMN SLIDE ==========
export function TwoColumnSlideLayout({ slide }: { slide: TwoColumnSlide }) {
  const theme = getTheme(slide.theme)

  return (
    <div className="h-full w-full bg-slate-900 p-8 md:p-12 overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <p className={`text-sm tracking-[0.2em] uppercase mb-2 ${theme.primary}`}>
            {slide.category}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            {slide.title}
          </h2>
          {slide.subtitle && (
            <p className="text-lg text-slate-400">{slide.subtitle}</p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {slide.leftColumn.title && (
              <h3 className={`text-2xl font-semibold ${theme.primary}`}>
                {slide.leftColumn.title}
              </h3>
            )}

            <p className="text-slate-300 leading-relaxed">
              {slide.leftColumn.content}
            </p>

            {/* Bullet Points with Icons */}
            {slide.leftColumn.bulletPoints && (
              <div className="space-y-6">
                {slide.leftColumn.bulletPoints.map((point, i) => {
                  const IconComponent = iconMap[point.icon || 'compass'] || Compass
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
            )}

            {/* Quote */}
            {slide.leftColumn.quote && (
              <blockquote className={`border-l-4 ${theme.border} pl-6 py-2 bg-slate-800/50 rounded-r`}>
                <p className="text-xl italic text-white">{slide.leftColumn.quote.text}</p>
                <footer className="mt-2 text-sm text-slate-500">
                  {slide.leftColumn.quote.author}
                </footer>
              </blockquote>
            )}
          </div>

          {/* Right Column - Videos + Cards */}
          <div className="space-y-4">
            <EmbeddedVideos videos={slide.videos} theme={theme} />

            {slide.rightColumn.cards?.map((card, i) => (
                <div 
                  key={i} 
                  className={`border ${theme.border} rounded-lg p-6`}
                >
                  <h4 className="text-lg font-bold text-white mb-3">{card.title}</h4>
                  {card.content.map((text, j) => (
                    <p key={j} className="text-slate-300 mb-2">
                      {j === 0 && card.highlightedText && (
                        <span className={theme.primary}>{card.highlightedText} </span>
                      )}
                      {text}
                    </p>
                  ))}
                  {card.footer && (
                    <div className="mt-4 pt-4 border-t border-slate-700 text-center">
                      <p className="text-xl font-bold text-white">{card.footer.title}</p>
                      <p className="text-slate-400 italic text-sm mt-1">{card.footer.text}</p>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ========== QUOTES GRID SLIDE ==========
export function QuotesGridSlideLayout({ slide }: { slide: QuotesGridSlide }) {
  const theme = getTheme(slide.theme)
  
  return (
    <div className="h-full w-full bg-slate-900 p-8 md:p-12 overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">
          {slide.title}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {slide.quotes.map((quote, i) => (
            <div 
              key={i} 
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition-colors"
            >
              {/* Quote marks */}
              <div className={`mb-4 ${theme.primary}`}>
                <Quote className="w-6 h-6" />
              </div>
              
              {/* Quote text */}
              <p className="text-slate-200 italic text-lg leading-relaxed mb-4">
                {quote.text}
              </p>
              
              {/* Author */}
              <p className={`font-semibold ${theme.primary}`}>
                — {quote.author}
              </p>
              
              {/* Description */}
              <p className="text-slate-500 text-sm mt-1">
                {quote.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ========== PARALLELS SLIDE ==========
export function ParallelsSlideLayout({ slide }: { slide: ParallelsSlide }) {
  const theme = getTheme(slide.theme)

  return (
    <div className="h-full w-full bg-slate-900 p-8 md:p-12 overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        {/* Header + Videos */}
        <div className="flex items-start justify-between gap-6 mb-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {slide.title}
            </h2>
            <p className="text-slate-400 text-lg">
              {slide.subtitle}
            </p>
          </div>
          <EmbeddedVideos videos={slide.videos} theme={theme} />
        </div>
        
        {/* Parallels Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {slide.parallels.map((parallel, i) => {
            const IconComponent = iconMap[parallel.icon] || Globe
            return (
              <div 
                key={i} 
                className="bg-slate-800/30 border border-slate-700 rounded-lg p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-full border ${theme.border} flex items-center justify-center`}>
                    <IconComponent className={`w-5 h-5 ${theme.primary}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{parallel.title}</h3>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <p className={`text-sm font-semibold ${theme.primary} mb-1`}>
                      {"Dans l'anime :"}
                    </p>
                    <p className="text-slate-300 text-sm">{parallel.anime}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-semibold text-blue-400 mb-1">
                      Dans notre monde :
                    </p>
                    <p className="text-slate-300 text-sm">{parallel.realWorld}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Bottom Quote */}
        {slide.bottomQuote && (
          <div className={`${theme.bg} border ${theme.border} rounded-lg p-6 text-center`}>
            <p className="text-slate-200 italic text-lg">
              {slide.bottomQuote}
            </p>
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
        {/* Header */}
        <div className="mb-10 text-center">
          {slide.category && (
            <p className={`text-sm tracking-[0.2em] uppercase mb-2 ${theme.primary}`}>
              {slide.category}
            </p>
          )}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {slide.title}
          </h2>
          {slide.subtitle && (
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">{slide.subtitle}</p>
          )}
          {slide.description && (
            <p className="text-slate-300 mt-4 max-w-3xl mx-auto">{slide.description}</p>
          )}
        </div>

        {/* Plan Items Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {slide.items.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl border border-slate-700 hover:border-slate-500 transition-all"
            >
              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className={`text-xs font-bold ${theme.primary} mb-1`}>
                  {item.partNumber}
                </p>
                <h3 className="text-sm md:text-base font-semibold text-white leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
