'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 500, suffix: '+', label: 'Players Trained' },
  { value: 50, suffix: '+', label: 'Programs' },
  { value: 15, suffix: '+', label: 'Partner Clubs' },
  { value: 5, suffix: '+', label: 'Countries' },
]

function AnimatedCounter({ target, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const start = performance.now()
        const animate = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.floor(eased * target))
          if (progress < 1) requestAnimationFrame(animate)
          else setCount(target)
        }
        requestAnimationFrame(animate)
      }
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  return <span ref={ref} className="tabular-nums">{count}{suffix}</span>
}

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Airy light background */}
      <div className="absolute inset-0 z-0" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
        {/* Warm off-white base */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(160deg, #F8F7F4 0%, #F0EDE6 40%, #EAF1EC 80%, #F4F8F5 100%)'
        }}/>
        {/* Subtle sage radial wash */}
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(ellipse 70% 60% at 60% 30%, rgba(61,107,79,0.07) 0%, transparent 65%),
            radial-gradient(ellipse 40% 40% at 10% 80%, rgba(90,138,106,0.06) 0%, transparent 55%),
            radial-gradient(ellipse 30% 30% at 90% 80%, rgba(193,125,46,0.05) 0%, transparent 55%)
          `
        }}/>
        {/* SVG pitch lines — very subtle */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.055]" viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <rect x="120" y="80" width="1200" height="740" rx="4" stroke="#3D6B4F" strokeWidth="1.2" fill="none"/>
          <line x1="720" y1="80" x2="720" y2="820" stroke="#3D6B4F" strokeWidth="1.2"/>
          <circle cx="720" cy="450" r="110" stroke="#3D6B4F" strokeWidth="1.2" fill="none"/>
          <circle cx="720" cy="450" r="4" fill="#3D6B4F"/>
          <rect x="120" y="250" width="220" height="400" stroke="#3D6B4F" strokeWidth="1" fill="none"/>
          <rect x="120" y="355" width="80" height="190" stroke="#3D6B4F" strokeWidth="0.8" fill="none"/>
          <circle cx="272" cy="450" r="3" fill="#3D6B4F"/>
          <path d="M 340 330 Q 400 450 340 570" stroke="#3D6B4F" strokeWidth="0.8" fill="none"/>
          <rect x="1100" y="250" width="220" height="400" stroke="#3D6B4F" strokeWidth="1" fill="none"/>
          <rect x="1240" y="355" width="80" height="190" stroke="#3D6B4F" strokeWidth="0.8" fill="none"/>
          <circle cx="1168" cy="450" r="3" fill="#3D6B4F"/>
          <path d="M 1100 330 Q 1040 450 1100 570" stroke="#3D6B4F" strokeWidth="0.8" fill="none"/>
          <path d="M 120 80 Q 140 80 140 100" stroke="#3D6B4F" strokeWidth="0.8" fill="none"/>
          <path d="M 1320 80 Q 1300 80 1300 100" stroke="#3D6B4F" strokeWidth="0.8" fill="none"/>
          <path d="M 120 820 Q 140 820 140 800" stroke="#3D6B4F" strokeWidth="0.8" fill="none"/>
          <path d="M 1320 820 Q 1300 820 1300 800" stroke="#3D6B4F" strokeWidth="0.8" fill="none"/>
          {[...Array(12)].map((_, i) => (
            <line key={i} x1={120 + i * 100} y1="80" x2={120 + i * 100} y2="820"
              stroke="#3D6B4F" strokeWidth="0.25" strokeOpacity="0.5"/>
          ))}
        </svg>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-[1]"
        style={{ background: 'linear-gradient(to bottom, transparent, #F8F7F4)' }}/>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 w-full">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sage-200 bg-sage-50 mb-8">
              <span className="w-2 h-2 rounded-full bg-sage-500 animate-pulse"/>
              <span className="text-sage-600 text-xs font-heading font-semibold tracking-widest uppercase">
                India's Premier Football Consultancy
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-heading font-black leading-[0.9] mb-6">
              <span className="block text-[clamp(2.8rem,7.5vw,6rem)] text-neutral-900 tracking-tight">FROM INDIAN</span>
              <span className="block text-[clamp(2.8rem,7.5vw,6rem)] tracking-tight shimmer-text">DREAMS TO</span>
              <span className="block text-[clamp(2.8rem,7.5vw,6rem)] text-neutral-900 tracking-tight">GLOBAL ARENAS</span>
            </h1>

            <p className="text-neutral-600 text-lg md:text-xl font-body leading-relaxed mb-10 max-w-xl">
              Transforming Indian football talent into international opportunities — with world-class methodology, elite networks, and a pathway that actually delivers.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-sage-600 hover:bg-sage-700 text-white font-heading font-bold text-sm tracking-wide rounded-full transition-all duration-300 hover:scale-105 shadow-sage"
              >
                <span>START YOUR JOURNEY</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </button>
              <button
                onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 border-2 border-amber-400 text-amber-500 hover:bg-amber-50 font-heading font-bold text-sm tracking-wide rounded-full transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>EXPLORE PROGRAMS</span>
              </button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 text-xs text-neutral-500 font-body">
              <div className="flex -space-x-2">
                {['#3D6B4F','#5A8A6A','#8BB89A','#C17D2E'].map((c, i) => (
                  <div key={i} className="w-7 h-7 rounded-full border-2 border-neutral-50 flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: c }}>
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <span>500+ athletes already on their journey</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 border-t border-neutral-200 bg-white/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-neutral-200">
            {stats.map((stat, i) => (
              <div key={i} className="py-7 px-6 text-center">
                <div className="text-3xl md:text-4xl font-heading font-black text-sage-600 mb-1">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix}/>
                </div>
                <div className="text-xs text-neutral-500 font-body uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-28 right-8 md:right-12 z-10 w-10 h-10 rounded-full border border-neutral-300 bg-white/70 flex items-center justify-center hover:border-sage-400 transition-colors"
        aria-label="Scroll down"
      >
        <svg className="w-4 h-4 text-sage-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
        </svg>
      </button>
    </section>
  )
}
