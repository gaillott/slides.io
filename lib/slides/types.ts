// Slide Types for the Presentation System

export type SlideTheme = 'red' | 'blue' | 'green' | 'orange'

export interface SlideVideo {
  url: string
  title: string
  image?: string
  /** Playback volume from 0 to 1 (default: 1) */
  volume?: number
}

export interface BaseSlide {
  id: string
  type: string
  theme?: SlideTheme
  notes?: string
  hidden?:boolean
}

// ========== Block data types ==========

interface HeadingBlockData {
  category?: string
  title: string
  subtitle?: string
  image: string
}

interface TextBlockData {
  content: string
  highlightedText?: string
}

interface QuoteBlockData {
  text: string
  author: string
  image?: { src: string; alt?: string; size?: number }
}

interface BulletsBlockData {
  items: string[]
}

interface CardBlockData {
  title?: string
  content: string
  icon?: string
}

interface CardsBlockData {
  items: CardBlockData[]
}

interface VideoBlockData {
  video: SlideVideo
}

interface ImageBlockData {
  src: string
  alt: string
}

interface SectionBlockData {
  title: string
  content?: string
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
  | { type: 'video'; column?: 'left' | 'right'; step?: number; data: VideoBlockData }
  | { type: 'image'; column?: 'left' | 'right'; step?: number; data: ImageBlockData }
  | { type: 'section'; column?: 'left' | 'right'; step?: number; data: SectionBlockData }
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
  audio?: string
  /** Play audio once on this slide only, no loop, no carry-over to later slides (default: loops and persists like background music) */
  playOnce?: boolean
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
  items: {
    partNumber: string
    title: string
    image: string
  }[]
}

// ========== Photo slide types ==========

export interface PhotoSlide extends BaseSlide {
  type: 'photo'
  src: string
  alt: string
  caption?: string
  anecdote?: string
}

export type PhotoGridLayout = 'row-2' | 'row-3' | 'col-2' | 'mosaic-3' | 'mosaic-4' | 'grid-4' | 'grid-6'

export interface PhotoGridSlide extends BaseSlide {
  type: 'photo-grid'
  layout: PhotoGridLayout
  photos: { src: string; alt: string; caption?: string; span?: number }[]
  sectionTitle?: string
}

export interface PhotoTextSlide extends BaseSlide {
  type: 'photo-text'
  photo: { src: string; alt: string; position: 'left' | 'right' }
  title?: string
  text: string
  highlight?: string
}

export type Slide = TitleSlide | SectionSlide | ContentSlide | PlanSlide | PhotoSlide | PhotoGridSlide | PhotoTextSlide

export type PresentationCategory = 'cine-philo' | 'conference' | 'album-photo'

export interface Presentation {
  id: string
  title: string
  author: string
  description: string
  coverImage: string
  createdAt: string
  category: PresentationCategory
  slides: Slide[]
  /** When true, the presentation is archived: hidden from the main list, shown under a collapsible "archived" section */
  archived?: boolean
}

/** Compute the max step number for a content slide's blocks */
export function getMaxStep(slide: Slide): number {
  if (slide.type === 'content') {
    return Math.max(0, ...slide.blocks.map(b => b.step ?? 0))
  }
  return 0
}
