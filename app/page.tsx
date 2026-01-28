'use client'

import Link from 'next/link'
import Image from 'next/image'
import { getAllPresentations } from '@/lib/slides/presentations'
import { Play, Calendar, User, FileText } from 'lucide-react'

export default function Home() {
  const presentations = getAllPresentations()

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Slide Presenter
          </h1>
          <p className="text-slate-400 mt-2">
            Sélectionnez une présentation pour commencer
          </p>
        </div>
      </header>

      {/* Presentations Grid */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {presentations.map((presentation) => (
            <Link 
              key={presentation.id} 
              href={`/presentation/${presentation.id}`}
              className="group"
            >
              <article className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:border-slate-600 hover:bg-slate-800 transition-all duration-200">
                {/* Cover Image */}
                <div className="relative aspect-video bg-slate-800 overflow-hidden">
                  {presentation.coverImage ? (
                    <Image
                      src={presentation.coverImage || "/placeholder.svg"}
                      alt={presentation.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-900">
                      <FileText className="w-12 h-12 text-slate-500" />
                    </div>
                  )}
                  
                  {/* Play overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>

                  {/* Slide count badge */}
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-md">
                    <span className="text-white text-sm font-medium">
                      {presentation.slides.length} slides
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h2 className="text-xl font-semibold text-white group-hover:text-red-400 transition-colors line-clamp-2">
                    {presentation.title}
                  </h2>
                  
                  {presentation.description && (
                    <p className="text-slate-400 text-sm mt-2 line-clamp-2">
                      {presentation.description}
                    </p>
                  )}

                  {/* Meta info */}
                  <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-slate-500">
                    {presentation.author && (
                      <div className="flex items-center gap-1.5">
                        <User className="w-4 h-4" />
                        <span>{presentation.author}</span>
                      </div>
                    )}
                    {presentation.createdAt && (
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(presentation.createdAt).toLocaleDateString('fr-FR')}</span>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {presentations.length === 0 && (
          <div className="text-center py-20">
            <FileText className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-slate-300">
              Aucune présentation
            </h2>
            <p className="text-slate-500 mt-2">
              Ajoutez des présentations pour les voir apparaître ici.
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-slate-500 text-sm">
          Utilisez les flèches ou Espace pour naviguer dans les présentations
        </div>
      </footer>
    </div>
  )
}
