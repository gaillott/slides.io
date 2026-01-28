import { PresentationViewer } from '@/components/slides/presentation-viewer'
import { attackOnTitanPresentation } from '@/lib/slides/attack-on-titan-presentation'

export default function Home() {
  return <PresentationViewer presentation={attackOnTitanPresentation} />
}
