// Slide Types for the Presentation System
// Easy to extend with new slide types

export type SlideTheme = 'red' | 'blue' | 'green' | 'orange' | 'purple' | 'cyan'

export interface BaseSlide {
  id: string
  type: string
  theme?: SlideTheme
}

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
}

export interface ContentSlide extends BaseSlide {
  type: 'content'
  category: string
  title: string
  subtitle?: string
  content: {
    text?: string
    highlightedText?: string
    bulletPoints?: string[]
    quote?: {
      text: string
      author: string
    }
  }
  image?: {
    src: string
    alt: string
    caption?: string
  }
}

export interface CharacterSlide extends BaseSlide {
  type: 'character'
  category: string
  name: string
  subtitle: string
  sections: {
    title: string
    content: string
  }[]
  cards?: {
    title: string
    content: string
    highlight?: string
    subtext?: string
  }[]
  quote?: {
    text: string
    author: string
  }
  bulletPoints?: string[]
}

export interface TimelineSlide extends BaseSlide {
  type: 'timeline'
  title: string
  events: {
    date: string
    title: string
    description: string
  }[]
  image?: {
    src: string
    alt: string
  }
}

export interface VideoSlide extends BaseSlide {
  type: 'video'
  title: string
  videoUrl?: string
  placeholder: string
  description: string
  quote?: {
    text: string
    author: string
  }
}

export interface TwoColumnSlide extends BaseSlide {
  type: 'two-column'
  category: string
  title: string
  subtitle?: string
  leftColumn: {
    title?: string
    content: string
    bulletPoints?: {
      icon?: string
      title: string
      content: string
    }[]
    quote?: {
      text: string
      author: string
    }
  }
  rightColumn: {
    cards?: {
      title: string
      highlightedText?: string
      content: string[]
      footer?: {
        title: string
        text: string
      }
    }[]
  }
}

export interface QuotesGridSlide extends BaseSlide {
  type: 'quotes-grid'
  title: string
  quotes: {
    text: string
    author: string
    description: string
  }[]
}

export interface ParallelsSlide extends BaseSlide {
  type: 'parallels'
  title: string
  subtitle: string
  parallels: {
    icon: string
    title: string
    anime: string
    realWorld: string
  }[]
  bottomQuote?: string
}

export type Slide = 
  | TitleSlide 
  | SectionSlide 
  | ContentSlide 
  | CharacterSlide 
  | TimelineSlide 
  | VideoSlide
  | TwoColumnSlide
  | QuotesGridSlide
  | ParallelsSlide

export interface Presentation {
  id: string
  title: string
  author?: string
  description?: string
  coverImage?: string
  createdAt?: string
  slides: Slide[]
}
