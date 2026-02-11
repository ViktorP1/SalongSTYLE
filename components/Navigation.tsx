'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { href: '/', label: 'Hem' },
    { href: '/priser', label: 'Priser & Behandlingar' },
    { href: '/om-oss', label: 'Om Oss' },
    { href: '/hitta-oss', label: 'Hitta Oss' },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center transform transition-transform group-hover:rotate-12">
            <span className="text-2xl">✂</span>
          </div>
          <div>
            <h1 className="font-display text-2xl font-bold text-primary">Salong STYLE</h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-medium transition-colors hover:text-secondary relative group ${
                  pathname === link.href ? 'text-secondary' : 'text-primary'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-300 ${
                    pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/boka"
              className="bg-secondary text-white px-6 py-3 rounded-full font-medium hover:bg-accent transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Boka Tid
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-primary focus:outline-none z-50"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-cream transform transition-transform duration-500 z-40 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            style={{ 
                top: 0, 
                paddingTop: '80px',
                height: '100vh',
                overflowY: 'auto'
        }}>
        <ul className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <li
              key={link.href}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Link
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-display text-3xl font-medium transition-colors hover:text-secondary ${
                  pathname === link.href ? 'text-secondary' : 'text-primary'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <Link
              href="/boka"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-secondary text-white px-8 py-4 rounded-full font-medium text-xl hover:bg-accent transition-all transform hover:scale-105"
            >
              Boka Tid
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
