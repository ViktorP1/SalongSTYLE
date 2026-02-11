'use client'
import { useEffect } from 'react'

export default function Boka() {
  useEffect(() => {
    window.location.href = 'https://www.bokadirekt.se/places/salong-style-12210'
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-cream via-secondary/10 to-accent/10">
      <div className="text-center p-12">
        <div className="w-20 h-20 border-4 border-secondary border-t-transparent rounded-full animate-spin mx-auto mb-8" />
        <h1 className="font-display text-4xl font-bold text-primary mb-4">
          Omdirigerar till bokning...
        </h1>
        <p className="text-xl text-primary/70 mb-8">
          Du skickas vidare till BokaDirekt för att boka din tid
        </p>
        <a
          href="https://www.bokadirekt.se/places/salong-style-12210"
          className="inline-block bg-secondary text-white px-10 py-4 rounded-full font-medium text-lg hover:bg-accent transition-all transform hover:scale-105 shadow-xl"
        >
          Klicka här om du inte blir omdirigerad
        </a>
      </div>
    </div>
  )
}
