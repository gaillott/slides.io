'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, HelpCircle, X, Home, Monitor, Volume2, VolumeX } from 'lucide-react'
import type { Presentation, Slide } from '@/lib/slides/types'
import { getMaxStep } from '@/lib/slides/types'
import {
  TitleSlideLayout,
  SectionSlideLayout,
  ContentSlideLayout,
  PlanSlideLayout,
  PhotoSlideLayout,
  PhotoGridSlideLayout,
  PhotoTextSlideLayout
} from './slide-layouts'

function renderMarkdown(md: string): string {
  return md
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/^### (.+)$/gm, '<h3 class="text-base font-semibold text-white/90 mt-4 mb-1">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-lg font-semibold text-white/90 mt-5 mb-2">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 class="text-xl font-bold text-white mt-6 mb-3">$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em class="text-slate-300 italic">$1</em>')
    .replace(/^- (.+)$/gm, '<li class="ml-4 list-disc text-slate-300">$1</li>')
    .replace(/\n/g, '<br />')
}

interface PresentationViewerProps {
  presentation: Presentation
}

function getAllSections(slides: Slide[]) {
  return slides
    .filter((s): s is import('@/lib/slides/types').SectionSlide => s.type === 'section')
    .map(s => ({ partNumber: s.partNumber, subtitle: s.subtitle }))
}

function renderSlide(slide: Slide, allSlides: Slide[], visibleStep: number, isAlbum?: boolean) {
  switch (slide.type) {
    case 'title':
      return <TitleSlideLayout slide={slide} />
    case 'section':
      return <SectionSlideLayout slide={slide} allSections={isAlbum ? [] : getAllSections(allSlides)} />
    case 'content':
      return <ContentSlideLayout slide={slide} visibleStep={visibleStep} />
    case 'plan':
      return <PlanSlideLayout slide={slide} />
    case 'photo':
      return <PhotoSlideLayout slide={slide} />
    case 'photo-grid':
      return <PhotoGridSlideLayout slide={slide} />
    case 'photo-text':
      return <PhotoTextSlideLayout slide={slide} />
    default:
      return <div className="flex items-center justify-center h-full text-white">Unknown slide type</div>
  }
}

function getSlideTitle(slide: Slide): string {
  switch (slide.type) {
    case 'title':
      return slide.title
    case 'section':
      return slide.subtitle
    case 'plan':
      return slide.title
    case 'photo':
      return slide.caption || slide.alt
    case 'photo-grid':
      return slide.sectionTitle || 'Photos'
    case 'photo-text':
      return slide.title || 'Photo'
    default:
      return 'Slide'
  }
}

/** Collect all image sources from a slide for preloading */
function getSlideImages(slide: Slide): string[] {
  switch (slide.type) {
    case 'photo': return [slide.src]
    case 'photo-grid': return slide.photos.map(p => p.src)
    case 'photo-text': return [slide.photo.src]
    default: return []
  }
}

/** Build table of contents from section slides */
function buildTOC(slides: Slide[]): { title: string; slideIndex: number; type: string }[] {
  return slides.reduce<{ title: string; slideIndex: number; type: string }[]>((acc, s, i) => {
    if (s.type === 'title') acc.push({ title: s.title, slideIndex: i, type: 'title' })
    else if (s.type === 'section') acc.push({ title: `${s.partNumber} — ${s.subtitle}`, slideIndex: i, type: 'section' })
    return acc
  }, [])
}

/** Find which TOC entry the current slide belongs to */
function getCurrentTOCIndex(toc: { slideIndex: number }[], currentSlide: number): number {
  let idx = 0
  for (let i = 0; i < toc.length; i++) {
    if (toc[i].slideIndex <= currentSlide) idx = i
    else break
  }
  return idx
}

export function PresentationViewer({ presentation }: PresentationViewerProps) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const totalSlides = presentation.slides.length
  const isPresenterWindow = searchParams.get('presenter') === 'true'
  const isAlbum = presentation.category === 'album-photo'

  // Loading state
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  // Get initial slide from URL or default to 0
  const getInitialSlide = useCallback(() => {
    const slideParam = searchParams.get('slide')
    if (slideParam) {
      const slideIndex = parseInt(slideParam, 10) - 1
      if (!isNaN(slideIndex) && slideIndex >= 0 && slideIndex < totalSlides) {
        return slideIndex
      }
    }
    return 0
  }, [searchParams, totalSlides])

  const [currentSlide, setCurrentSlide] = useState(getInitialSlide)
  const [currentStep, setCurrentStep] = useState(0)
  const [showHelp, setShowHelp] = useState(false)
  const [slideDirection, setSlideDirection] = useState<'next' | 'prev'>('next')
  const [isTransitioning, setIsTransitioning] = useState(false)

  const presenterWindowRef = useRef<Window | null>(null)
  const channelRef = useRef<BroadcastChannel | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isMuted, setIsMuted] = useState(false)
  const [currentAudioSrc, setCurrentAudioSrc] = useState<string | null>(null)

  const slide = presentation.slides[currentSlide]
  const maxStep = getMaxStep(slide)

  // BroadcastChannel setup
  useEffect(() => {
    const channel = new BroadcastChannel('slides-presenter')
    channelRef.current = channel

    if (isPresenterWindow) {
      // Presenter window listens for slide changes
      channel.onmessage = (event) => {
        const { slide: newSlide, step } = event.data
        if (typeof newSlide === 'number' && newSlide >= 0 && newSlide < totalSlides) {
          setCurrentSlide(newSlide)
          setCurrentStep(step ?? 0)
        }
      }
    }

    return () => {
      channel.close()
      channelRef.current = null
    }
  }, [isPresenterWindow, totalSlides])

  // Broadcast slide changes from main window
  useEffect(() => {
    if (!isPresenterWindow && channelRef.current) {
      channelRef.current.postMessage({ slide: currentSlide, step: currentStep })
    }
  }, [currentSlide, currentStep, isPresenterWindow])

  // Preload images for next slides (album mode)
  useEffect(() => {
    if (!isAlbum) return
    for (let offset = 1; offset <= 2; offset++) {
      const idx = currentSlide + offset
      if (idx < totalSlides) {
        getSlideImages(presentation.slides[idx]).forEach(src => {
          const img = new Image()
          img.src = src
        })
      }
    }
  }, [currentSlide, isAlbum, totalSlides, presentation.slides])

  // Audio: find the active audio for the current slide by looking backwards for the nearest section with audio
  useEffect(() => {
    let audioSrc: string | null = null
    for (let i = currentSlide; i >= 0; i--) {
      const s = presentation.slides[i]
      if (s.type === 'section') {
        const sectionSlide = s as import('@/lib/slides/types').SectionSlide
        if (sectionSlide.audio) {
          // Ensure absolute path and encode special characters
          const raw = sectionSlide.audio.startsWith('/') ? sectionSlide.audio : `/${sectionSlide.audio}`
          audioSrc = encodeURI(raw)
        }
        break // stop at the nearest section regardless
      }
    }

    if (audioSrc !== currentAudioSrc) {
      setCurrentAudioSrc(audioSrc)
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
      if (audioSrc) {
        const audio = new Audio(audioSrc)
        audio.loop = true
        audio.volume = 0.5
        audio.muted = isMuted
        audio.play().catch(() => {}) // autoplay may be blocked
        audioRef.current = audio
      }
    }
  }, [currentSlide, presentation.slides]) // eslint-disable-line react-hooks/exhaustive-deps

  // Sync mute state
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted
    }
  }, [isMuted])

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  // Sync state when URL changes (browser back/forward)
  useEffect(() => {
    const slideFromURL = getInitialSlide()
    if (slideFromURL !== currentSlide) {
      setCurrentSlide(slideFromURL)
      setCurrentStep(0)
    }
  }, [searchParams, getInitialSlide]) // eslint-disable-line react-hooks/exhaustive-deps

  // Sync URL when slide changes
  const updateURL = useCallback((index: number) => {
    const newURL = `${pathname}?slide=${index + 1}`
    router.replace(newURL, { scroll: false })
  }, [pathname, router])

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides && !isTransitioning) {
      setSlideDirection(index > currentSlide ? 'next' : 'prev')
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide(index)
        setCurrentStep(0)
        updateURL(index)
        setTimeout(() => setIsTransitioning(false), 300)
      }, 150)
    }
  }, [totalSlides, updateURL, currentSlide, isTransitioning])

  const nextAction = useCallback(() => {
    if (isTransitioning) return
    if (currentStep < maxStep) {
      setCurrentStep(currentStep + 1)
    } else {
      goToSlide(currentSlide + 1)
    }
  }, [currentSlide, currentStep, maxStep, goToSlide, isTransitioning])

  const prevAction = useCallback(() => {
    if (isTransitioning) return
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    } else {
      if (currentSlide > 0) {
        const prevSlideIndex = currentSlide - 1
        const prevSlide = presentation.slides[prevSlideIndex]
        const prevMaxStep = getMaxStep(prevSlide)
        setSlideDirection('prev')
        setIsTransitioning(true)
        setTimeout(() => {
          setCurrentSlide(prevSlideIndex)
          setCurrentStep(prevMaxStep)
          updateURL(prevSlideIndex)
          setTimeout(() => setIsTransitioning(false), 300)
        }, 150)
      }
    }
  }, [currentSlide, currentStep, presentation.slides, goToSlide, isTransitioning, updateURL])

  const openPresenterWindow = useCallback(() => {
    // Reuse existing window if still open
    if (presenterWindowRef.current && !presenterWindowRef.current.closed) {
      presenterWindowRef.current.focus()
      return
    }
    const url = `${pathname}?slide=${currentSlide + 1}&presenter=true`
    presenterWindowRef.current = window.open(url, 'presenter-notes')
  }, [pathname, currentSlide])

  // Keyboard navigation
  useEffect(() => {
    if (isPresenterWindow) return // No keyboard nav in presenter window

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
          e.preventDefault()
          nextAction()
          break
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault()
          prevAction()
          break
        case 'Home':
          e.preventDefault()
          goToSlide(0)
          break
        case 'End':
          e.preventDefault()
          goToSlide(totalSlides - 1)
          break
        case 'Escape':
          setShowHelp(false)
          break
        case '?':
          setShowHelp(prev => !prev)
          break
        case 'p':
          openPresenterWindow()
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextAction, prevAction, goToSlide, totalSlides, isPresenterWindow, openPresenterWindow])

  // Touch/swipe navigation
  const touchStartRef = useRef<{ x: number; y: number } | null>(null)
  const touchEndRef = useRef<{ x: number; y: number } | null>(null)
  const minSwipeDistance = 50

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchEndRef.current = null
    touchStartRef.current = {
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    }
  }, [])

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndRef.current = {
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    }
  }, [])

  const onTouchEnd = useCallback(() => {
    if (!touchStartRef.current) return

    if (!touchEndRef.current || (
      Math.abs(touchStartRef.current.x - touchEndRef.current.x) < 10 &&
      Math.abs(touchStartRef.current.y - touchEndRef.current.y) < 10
    )) {
      const tapX = touchStartRef.current.x
      if (tapX > window.innerWidth / 2) nextAction()
      else prevAction()
      touchStartRef.current = null
      touchEndRef.current = null
      return
    }

    const distanceX = touchStartRef.current.x - touchEndRef.current.x
    const distanceY = touchStartRef.current.y - touchEndRef.current.y
    if (Math.abs(distanceX) >= minSwipeDistance && Math.abs(distanceX) > Math.abs(distanceY) * 1.5) {
      if (distanceX > 0) nextAction()
      else prevAction()
    }
    touchStartRef.current = null
    touchEndRef.current = null
  }, [nextAction, prevAction])

  const progress = ((currentSlide + 1) / totalSlides) * 100

  // ── Presenter Window: notes-only layout ──
  if (isPresenterWindow) {
    return (
      <div className="h-[100dvh] w-screen bg-slate-950 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="shrink-0 px-6 py-4 border-b border-white/[0.08] flex items-center justify-between">
          <h1 className="text-white/90 font-semibold text-lg truncate">
            {getSlideTitle(slide)}
          </h1>
          <span className="text-slate-500 text-sm tabular-nums shrink-0 ml-4">
            {currentSlide + 1} / {totalSlides}
          </span>
        </div>

        {/* Notes */}
        <div className="flex-1 overflow-y-auto p-8">
          {slide.notes ? (
            <div
              className="text-base text-slate-300 leading-relaxed max-w-2xl"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(slide.notes) }}
            />
          ) : (
            <p className="text-slate-600 italic">Aucune note pour cette slide.</p>
          )}
        </div>
      </div>
    )
  }

  // ── Main Window: normal presentation ──
  return (
    <div
      className="relative flex flex-col h-[100dvh] w-screen bg-slate-900 overflow-hidden select-none"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Initial loading overlay */}
      <div
        className="absolute inset-0 bg-slate-900 z-50 flex items-center justify-center pointer-events-none transition-opacity duration-700"
        style={{ opacity: loaded ? 0 : 1 }}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-2 border-slate-700 border-t-white rounded-full animate-spin" />
        </div>
      </div>

      {/* Progress bar */}
      <div className="shrink-0 h-[2px] z-40 bg-white/[0.05]">
        <div
          className="h-full bg-white/30 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Main area: TOC sidebar (album) + slide content */}
      <div className="flex-1 min-h-0 flex">
        {/* Always-visible TOC sidebar for albums */}
        {isAlbum && (() => {
          const tocItems = buildTOC(presentation.slides)
          const currentIdx = getCurrentTOCIndex(tocItems, currentSlide)
          return (
            <div className="hidden md:flex w-56 shrink-0 bg-slate-950/90 border-r border-white/[0.06] flex-col overflow-hidden z-20">
              <div className="flex-1 overflow-y-auto py-1 scrollbar-hide">
                {tocItems.map((entry, i) => {
                  const isCurrent = i === currentIdx
                  const isPast = i < currentIdx
                  return (
                    <button
                      key={i}
                      onClick={() => goToSlide(entry.slideIndex)}
                      className={`w-full text-left transition-colors ${
                        entry.type === 'title'
                          ? `px-3 py-1.5 text-[11px] font-semibold tracking-wide uppercase ${isCurrent ? 'text-amber-400' : isPast ? 'text-slate-600' : 'text-slate-500'}`
                          : `px-3 pl-5 py-1 text-[11px] leading-tight ${isCurrent ? 'text-amber-400 bg-amber-400/[0.06]' : isPast ? 'text-slate-600 hover:text-slate-400 hover:bg-white/[0.03]' : 'text-slate-500 hover:text-slate-300 hover:bg-white/[0.03]'}`
                      }`}
                    >
                      {entry.title}
                    </button>
                  )
                })}
              </div>
            </div>
          )
        })()}

        {/* Slide Content */}
        <div
          key={currentSlide}
          className={`flex-1 min-h-0 min-w-0 ease-out ${isAlbum ? 'transition-opacity duration-500' : 'transition-all duration-300'}`}
          style={{
            opacity: isTransitioning ? 0 : 1,
            ...(isAlbum ? {} : {
              transform: isTransitioning
                ? `translateX(${slideDirection === 'next' ? '8px' : '-8px'})`
                : 'translateX(0)',
            }),
          }}
        >
          {renderSlide(slide, presentation.slides, currentStep, isAlbum)}
        </div>
      </div>

      {/* Navigation Arrows - hidden on mobile */}
      <button
        onClick={prevAction}
        disabled={currentSlide === 0 && currentStep === 0}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/[0.06] hover:bg-white/[0.12] disabled:opacity-0 disabled:pointer-events-none items-center justify-center transition-all duration-200 backdrop-blur-sm"
        aria-label="Previous"
      >
        <ChevronLeft className="w-5 h-5 text-white/70" />
      </button>

      <button
        onClick={nextAction}
        disabled={currentSlide === totalSlides - 1 && currentStep >= maxStep}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/[0.06] hover:bg-white/[0.12] disabled:opacity-0 disabled:pointer-events-none items-center justify-center transition-all duration-200 backdrop-blur-sm"
        aria-label="Next"
      >
        <ChevronRight className="w-5 h-5 text-white/70" />
      </button>

      {/* Bottom Bar */}
      <div className="shrink-0 h-12 sm:h-14 bg-slate-950/80 backdrop-blur-md flex items-center justify-between px-3 sm:px-6 overflow-hidden z-30">
        {/* Home button & Slide Counter */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <Link
            href="/"
            className="w-8 h-8 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] flex items-center justify-center transition-all duration-200"
            aria-label="Retour à l'accueil"
          >
            <Home className="w-4 h-4 text-white/70" />
          </Link>
          <div className="text-slate-500 text-xs tabular-nums">
            {currentSlide + 1}<span className="text-slate-600">/</span>{totalSlides}
            {maxStep > 0 && (
              <span className="text-slate-600 ml-1">
                ({currentStep}<span className="text-slate-700">/</span>{maxStep})
              </span>
            )}
          </div>
        </div>

        {/* Navigation: dots for regular, progress bar for albums */}
        {isAlbum ? (
          <div className="flex-1 mx-4 flex items-center gap-3">
            <div className="flex-1 h-1 bg-white/[0.06] rounded-full overflow-hidden relative">
              <div
                className="h-full bg-amber-400/60 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-slate-400 text-xs tabular-nums shrink-0">
              Slide {currentSlide + 1}/{totalSlides}
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-[3px] sm:gap-1.5 overflow-x-auto mx-2 scrollbar-hide">
            {presentation.slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 shrink-0 ${
                  index === currentSlide
                    ? 'w-5 sm:w-6 bg-white/60'
                    : index < currentSlide
                      ? 'w-1.5 bg-white/20 hover:bg-white/30'
                      : 'w-1.5 bg-white/[0.08] hover:bg-white/20'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Help & Presenter Mode */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <span className="text-slate-600 text-xs hidden lg:block">
            ← → Espace
          </span>
          {isAlbum && (
            <button
              onClick={() => setIsMuted(m => !m)}
              className="w-8 h-8 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] flex items-center justify-center transition-all duration-200 text-white/70"
              aria-label={isMuted ? 'Activer le son' : 'Couper le son'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          )}
          <button
            onClick={openPresenterWindow}
            className="w-8 h-8 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] flex items-center justify-center transition-all duration-200 text-white/70"
            aria-label="Ouvrir les notes présentateur"
          >
            <Monitor className="w-4 h-4" />
          </button>
          <button
            onClick={() => setShowHelp(true)}
            className="w-8 h-8 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] flex items-center justify-center transition-all duration-200"
            aria-label="Show help"
          >
            <HelpCircle className="w-4 h-4 text-white/70" />
          </button>
        </div>
      </div>

      {/* Help Modal */}
      {showHelp && (
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center z-50"
          onClick={(e) => { if (e.target === e.currentTarget) setShowHelp(false) }}
        >
          <div className="bg-slate-900 border border-white/[0.08] rounded-t-2xl sm:rounded-xl p-6 sm:p-8 w-full sm:max-w-md sm:mx-4 relative animate-fade-in">
            <button
              onClick={() => setShowHelp(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-slate-400" />
            </button>

            <h3 className="text-lg font-semibold text-white mb-6">Raccourcis clavier</h3>

            <div className="space-y-3">
              {[
                { label: 'Suivante / Étape suivante', keys: ['→', '↓', 'Espace'] },
                { label: 'Précédente / Étape précédente', keys: ['←', '↑'] },
                { label: 'Première', keys: ['Home'] },
                { label: 'Dernière', keys: ['End'] },
                { label: 'Notes présentateur', keys: ['P'] },
                { label: 'Aide', keys: ['?'] },
              ].map(({ label, keys }) => (
                <div key={label} className="flex justify-between items-center">
                  <span className="text-sm text-slate-400">{label}</span>
                  <div className="flex gap-1.5">
                    {keys.map(k => (
                      <kbd key={k} className="px-2 py-1 bg-white/[0.06] border border-white/[0.08] rounded text-xs text-slate-300 font-mono">
                        {k}
                      </kbd>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06]">
              <p className="text-xs text-slate-500">
                Sur mobile, glissez horizontalement pour naviguer.
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
