'use client'

import { useState, useEffect, useCallback } from 'react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, HelpCircle, X, Home } from 'lucide-react'
import type { Presentation, Slide } from '@/lib/slides/types'
import {
  TitleSlideLayout,
  SectionSlideLayout,
  ContentSlideLayout,
  TimelineSlideLayout,
  VideoSlideLayout,
  TwoColumnSlideLayout,
  QuotesGridSlideLayout,
  ParallelsSlideLayout,
  PlanSlideLayout
} from './slide-layouts'

interface PresentationViewerProps {
  presentation: Presentation
}

function getAllSections(slides: Slide[]) {
  return slides
    .filter((s): s is import('@/lib/slides/types').SectionSlide => s.type === 'section')
    .map(s => ({ partNumber: s.partNumber, subtitle: s.subtitle }))
}

function renderSlide(slide: Slide, allSlides: Slide[]) {
  switch (slide.type) {
    case 'title':
      return <TitleSlideLayout slide={slide} />
    case 'section':
      return <SectionSlideLayout slide={slide} allSections={getAllSections(allSlides)} />
    case 'content':
      return <ContentSlideLayout slide={slide} />
    case 'timeline':
      return <TimelineSlideLayout slide={slide} />
    case 'video':
      return <VideoSlideLayout slide={slide} />
    case 'two-column':
      return <TwoColumnSlideLayout slide={slide} />
    case 'quotes-grid':
      return <QuotesGridSlideLayout slide={slide} />
    case 'parallels':
      return <ParallelsSlideLayout slide={slide} />
    case 'plan':
      return <PlanSlideLayout slide={slide} />
    default:
      return <div className="flex items-center justify-center h-full text-white">Unknown slide type</div>
  }
}

export function PresentationViewer({ presentation }: PresentationViewerProps) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const totalSlides = presentation.slides.length

  // Get initial slide from URL or default to 0
  const getInitialSlide = useCallback(() => {
    const slideParam = searchParams.get('slide')
    if (slideParam) {
      const slideIndex = parseInt(slideParam, 10) - 1 // URL is 1-based, state is 0-based
      if (!isNaN(slideIndex) && slideIndex >= 0 && slideIndex < totalSlides) {
        return slideIndex
      }
    }
    return 0
  }, [searchParams, totalSlides])

  const [currentSlide, setCurrentSlide] = useState(getInitialSlide)
  const [showHelp, setShowHelp] = useState(false)

  // Sync state when URL changes (browser back/forward)
  useEffect(() => {
    const slideFromURL = getInitialSlide()
    if (slideFromURL !== currentSlide) {
      setCurrentSlide(slideFromURL)
    }
  }, [searchParams, getInitialSlide]) // eslint-disable-line react-hooks/exhaustive-deps

  // Sync URL when slide changes
  const updateURL = useCallback((index: number) => {
    const newURL = `${pathname}?slide=${index + 1}` // URL is 1-based
    router.replace(newURL, { scroll: false })
  }, [pathname, router])

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index)
      updateURL(index)
    }
  }, [totalSlides, updateURL])

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + 1)
  }, [currentSlide, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide - 1)
  }, [currentSlide, goToSlide])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
          e.preventDefault()
          nextSlide()
          break
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault()
          prevSlide()
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
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, prevSlide, goToSlide, totalSlides])

  // Touch/swipe navigation
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const minSwipeDistance = 50

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }, [])

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }, [])

  const onTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    if (Math.abs(distance) >= minSwipeDistance) {
      if (distance > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }
    setTouchStart(null)
    setTouchEnd(null)
  }, [touchStart, touchEnd, nextSlide, prevSlide])

  const slide = presentation.slides[currentSlide]

  return (
    <div
      className="relative h-screen w-screen bg-slate-900 overflow-hidden select-none"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Main Slide Content with Fade Animation */}
      <div
        key={currentSlide}
        className="h-full w-full animate-fade-in"
      >
        {renderSlide(slide, presentation.slides)}
      </div>

      {/* Navigation Arrows (hidden on mobile, swipe used instead) */}
      <button
        onClick={prevSlide}
        disabled={currentSlide === 0}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed items-center justify-center transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        disabled={currentSlide === totalSlides - 1}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed items-center justify-center transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-14 bg-slate-950/80 backdrop-blur-sm flex items-center justify-between px-2 md:px-6 overflow-hidden">
        {/* Home button & Slide Counter */}
        <div className="flex items-center gap-2 md:gap-4 shrink-0">
          <Link
            href="/"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
            aria-label="Retour à l'accueil"
          >
            <Home className="w-4 h-4 text-white" />
          </Link>
          <div className="text-slate-400 text-xs md:text-sm whitespace-nowrap">
            {currentSlide + 1} / {totalSlides}
          </div>
        </div>

        {/* Dot Navigation */}
        <div className="flex items-center gap-1 md:gap-1.5 overflow-x-auto mx-2 scrollbar-hide">
          {presentation.slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all shrink-0 ${
                index === currentSlide
                  ? 'w-6 bg-red-500'
                  : 'w-2 bg-slate-600 hover:bg-slate-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Keyboard hint & Help */}
        <div className="flex items-center gap-2 md:gap-4 shrink-0">
          <span className="text-slate-500 text-sm hidden md:block">
            {'Utilisez ← → ou Espace pour naviguer'}
          </span>
          <button
            onClick={() => setShowHelp(true)}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
            aria-label="Show help"
          >
            <HelpCircle className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      {/* Help Modal */}
      {showHelp && (
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-slate-800 rounded-xl p-8 max-w-md w-full mx-4 relative">
            <button
              onClick={() => setShowHelp(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            
            <h3 className="text-xl font-bold text-white mb-6">Raccourcis clavier</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Diapositive suivante</span>
                <div className="flex gap-2">
                  <kbd className="px-2 py-1 bg-slate-700 rounded text-sm text-slate-300">→</kbd>
                  <kbd className="px-2 py-1 bg-slate-700 rounded text-sm text-slate-300">↓</kbd>
                  <kbd className="px-2 py-1 bg-slate-700 rounded text-sm text-slate-300">Espace</kbd>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Diapositive précédente</span>
                <div className="flex gap-2">
                  <kbd className="px-2 py-1 bg-slate-700 rounded text-sm text-slate-300">←</kbd>
                  <kbd className="px-2 py-1 bg-slate-700 rounded text-sm text-slate-300">↑</kbd>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Première diapositive</span>
                <kbd className="px-2 py-1 bg-slate-700 rounded text-sm text-slate-300">Home</kbd>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Dernière diapositive</span>
                <kbd className="px-2 py-1 bg-slate-700 rounded text-sm text-slate-300">End</kbd>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Aide</span>
                <kbd className="px-2 py-1 bg-slate-700 rounded text-sm text-slate-300">?</kbd>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-700">
              <p className="text-sm text-slate-400">
                Vous pouvez également cliquer sur les flèches ou les points de navigation en bas de l&apos;écran.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
