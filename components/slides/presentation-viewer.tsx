'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, HelpCircle, X, Home } from 'lucide-react'
import type { Presentation, Slide } from '@/lib/slides/types'
import { getMaxStep } from '@/lib/slides/types'
import {
  TitleSlideLayout,
  SectionSlideLayout,
  ContentSlideLayout,
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

function renderSlide(slide: Slide, allSlides: Slide[], visibleStep: number) {
  switch (slide.type) {
    case 'title':
      return <TitleSlideLayout slide={slide} />
    case 'section':
      return <SectionSlideLayout slide={slide} allSections={getAllSections(allSlides)} />
    case 'content':
      return <ContentSlideLayout slide={slide} visibleStep={visibleStep} />
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

  const slide = presentation.slides[currentSlide]
  const maxStep = getMaxStep(slide)

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
    // If there are more steps to reveal, advance step
    if (currentStep < maxStep) {
      setCurrentStep(currentStep + 1)
    } else {
      // All steps revealed, go to next slide
      goToSlide(currentSlide + 1)
    }
  }, [currentSlide, currentStep, maxStep, goToSlide, isTransitioning])

  const prevAction = useCallback(() => {
    if (isTransitioning) return
    // If steps are revealed, hide last step
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    } else {
      // At step 0, go to previous slide (show all its steps)
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

  // Keyboard navigation
  useEffect(() => {
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
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextAction, prevAction, goToSlide, totalSlides])

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
    if (!touchStartRef.current || !touchEndRef.current) return
    const distanceX = touchStartRef.current.x - touchEndRef.current.x
    const distanceY = touchStartRef.current.y - touchEndRef.current.y
    // Only trigger horizontal swipe if it's clearly more horizontal than vertical
    if (Math.abs(distanceX) >= minSwipeDistance && Math.abs(distanceX) > Math.abs(distanceY) * 1.5) {
      if (distanceX > 0) nextAction()
      else prevAction()
    }
    touchStartRef.current = null
    touchEndRef.current = null
  }, [nextAction, prevAction])

  const progress = ((currentSlide + 1) / totalSlides) * 100

  return (
    <div
      className="relative h-[100dvh] w-screen bg-slate-900 overflow-hidden select-none"
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
      <div className="absolute top-0 left-0 right-0 h-[2px] z-40 bg-white/[0.05]">
        <div
          className="h-full bg-white/30 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Main Slide Content */}
      <div
        key={currentSlide}
        className="h-full w-full transition-all duration-300 ease-out"
        style={{
          opacity: isTransitioning ? 0 : 1,
          transform: isTransitioning
            ? `translateX(${slideDirection === 'next' ? '8px' : '-8px'})`
            : 'translateX(0)',
        }}
      >
        {renderSlide(slide, presentation.slides, currentStep)}
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
      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-14 bg-slate-950/80 backdrop-blur-md flex items-center justify-between px-3 sm:px-6 overflow-hidden z-30">
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

        {/* Dot Navigation */}
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

        {/* Help */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <span className="text-slate-600 text-xs hidden lg:block">
            ← → Espace
          </span>
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
