// Slide Types for the Presentation System

export type SlideTheme = 'red' | 'blue' | 'green' | 'orange' | 'purple' | 'cyan'

export interface SlideVideo {
  url: string
  title: string
}

export interface BaseSlide {
  id: string
  type: string
  theme?: SlideTheme
}

// ========== Block data types ==========

interface HeadingBlockData {
  category?: string
  title: string
  subtitle?: string
  image?: string
}

interface TextBlockData {
  content: string
  highlightedText?: string
}

interface QuoteBlockData {
  text: string
  author?: string
  image?: { src: string; alt?: string; size?: number }
}

interface BulletsBlockData {
  title?: string
  items: string[]
}

interface CardBlockData {
  title: string
  content: string
  highlight?: string
  subtext?: string
}

interface CardsBlockData {
  items: CardBlockData[]
}

interface VideosBlockData {
  items: SlideVideo[]
}

interface ImageBlockData {
  src: string
  alt: string
  caption?: string
}

interface SectionBlockData {
  title: string
  content: string
}

interface TimelineBlockData {
  events: { date: string; title: string; description: string }[]
}

interface ParallelsBlockData {
  items: { icon: string; title: string; anime: string; realWorld: string }[]
  bottomQuote?: string
}

interface PlanGridBlockData {
  items: { partNumber: string; title: string; image: string }[]
}

interface IconBulletsBlockData {
  items: { icon: string; title: string; content: string }[]
}

// ========== Content block union ==========

export type ContentBlock =
  | { type: 'heading'; column?: 'left' | 'right'; step?: number; data: HeadingBlockData }
  | { type: 'text'; column?: 'left' | 'right'; step?: number; data: TextBlockData }
  | { type: 'quote'; column?: 'left' | 'right'; step?: number; data: QuoteBlockData }
  | { type: 'bullets'; column?: 'left' | 'right'; step?: number; data: BulletsBlockData }
  | { type: 'card'; column?: 'left' | 'right'; step?: number; data: CardBlockData }
  | { type: 'cards'; column?: 'left' | 'right'; step?: number; data: CardsBlockData }
  | { type: 'videos'; column?: 'left' | 'right'; step?: number; data: VideosBlockData }
  | { type: 'image'; column?: 'left' | 'right'; step?: number; data: ImageBlockData }
  | { type: 'section'; column?: 'left' | 'right'; step?: number; data: SectionBlockData }
  | { type: 'timeline'; column?: 'left' | 'right'; step?: number; data: TimelineBlockData }
  | { type: 'parallels'; column?: 'left' | 'right'; step?: number; data: ParallelsBlockData }
  | { type: 'plan-grid'; column?: 'left' | 'right'; step?: number; data: PlanGridBlockData }
  | { type: 'icon-bullets'; column?: 'left' | 'right'; step?: number; data: IconBulletsBlockData }

// ========== Slide types ==========

export interface TitleSlide extends BaseSlide {
  type: 'title'
  category: string
  title: string
  subtitle: string
  description: string
  backgroundImage?: string
}

export interface SectionSlide extends BaseSlide {
  type: 'section'
  partNumber: string
  title: string
  subtitle: string
  backgroundImage?: string
}

export interface ContentSlide extends BaseSlide {
  type: 'content'
  blocks: ContentBlock[]
}

export interface PlanSlide extends BaseSlide {
  type: 'plan'
  category?: string
  title: string
  subtitle?: string
  description?: string
  items: {
    partNumber: string
    title: string
    image: string
  }[]
}

export type Slide = TitleSlide | SectionSlide | ContentSlide | PlanSlide

export interface Presentation {
  id: string
  title: string
  author?: string
  description?: string
  coverImage?: string
  createdAt?: string
  slides: Slide[]
}

/** Compute the max step number for a content slide's blocks */
export function getMaxStep(slide: Slide): number {
  if (slide.type !== 'content') return 0
  return Math.max(0, ...slide.blocks.map(b => b.step ?? 0))
}
