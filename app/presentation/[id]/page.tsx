import { notFound } from 'next/navigation'
import { PresentationViewer } from '@/components/slides/presentation-viewer'
import { getPresentationById, getAllPresentations } from '@/lib/slides/presentations'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  const presentations = getAllPresentations()
  return presentations.map((p) => ({
    id: p.id,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const presentation = getPresentationById(id)
  
  if (!presentation) {
    return { title: 'Présentation introuvable' }
  }

  return {
    title: presentation.title,
    description: presentation.description,
  }
}

export default async function PresentationPage({ params }: Props) {
  const { id } = await params
  const presentation = getPresentationById(id)

  if (!presentation) {
    notFound()
  }

  return <PresentationViewer presentation={presentation} />
}
