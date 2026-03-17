'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Programs', href: '#programs' },
  { label: 'Partnerships', href: '#partnerships' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    document.querySelectorAll('section[id]').forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('#home') }} className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 flex-shrink-0">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="20" cy="20" r="19" stroke="#3D6B4F" strokeWidth="1.5"/>
                  <circle cx="20" cy="20" r="14" stroke="#3D6B4F" strokeWidth="0.8" strokeDasharray="3 2"/>
                  <path d="M20 6 L20 34 M6 20 L34 20" stroke="#5A8A6A" strokeWidth="0.8"/>
                  <circle cx="20" cy="20" r="4" fill="#C17D2E"/>
                  <path d="M11 11 Q20 6 29 11 Q34 20 29 29 Q20 34 11 29 Q6 20 11 11Z" stroke="#8BB89A" strokeWidth="0.6" fill="none"/>
                </svg>
              </div>
              <div>
                <div className="font-heading font-bold text-base leading-tight text-neutral-900 group-hover:text-sage-600 transition-colors">PIONEER</div>
                <div className="font-body text-[10px] text-sage-500 tracking-widest uppercase leading-none">Sports Consultancy</div>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  className={`px-3.5 py-2 text-sm font-heading font-medium rounded-lg transition-all duration-200 ${
                    activeSection === link.href.slice(1)
                      ? 'text-sage-600 bg-sage-100'
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
                className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 bg-sage-600 hover:bg-sage-700 text-white text-sm font-heading font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-sage"
              >
                GET STARTED
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-neutral-100 transition-colors"
                aria-label="Toggle menu"
              >
                <span className={`block h-0.5 bg-neutral-800 transition-all duration-300 ${menuOpen ? 'w-5 rotate-45 translate-y-2' : 'w-5'}`}/>
                <span className={`block h-0.5 bg-neutral-800 transition-all duration-300 ${menuOpen ? 'opacity-0 w-0' : 'w-4'}`}/>
                <span className={`block h-0.5 bg-neutral-800 transition-all duration-300 ${menuOpen ? 'w-5 -rotate-45 -translate-y-2' : 'w-5'}`}/>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-40 lg:hidden mobile-menu ${menuOpen ? 'open' : 'closed'}`}>
        <div className="absolute inset-0 bg-white/97 backdrop-blur-xl" onClick={() => setMenuOpen(false)}/>
        <div className="relative h-full flex flex-col items-center justify-center gap-1 p-8">
          <div className="absolute top-6 left-6 font-heading font-bold text-xl text-neutral-900">
            PIONEER<span className="text-sage-500 text-sm ml-1">SC</span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
              className="w-full max-w-xs text-center py-3 text-2xl font-heading font-bold text-neutral-800 hover:text-sage-600 transition-colors border-b border-neutral-100 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
            className="mt-6 px-8 py-3.5 bg-sage-600 text-white text-sm font-heading font-semibold rounded-full">
            GET STARTED
          </a>
        </div>
      </div>
    </>
  )
}
