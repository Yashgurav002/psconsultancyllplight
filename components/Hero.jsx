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
    const observer = new IntersectionObserver(
      ([entry]) => {
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
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  return (
    <span ref={ref} className="tabular-nums stat-number">
      {count}{suffix}
    </span>
  )
}

export default function Hero() {
  const heroRef = useRef(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToPrograms = () => {
    document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Background layers */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.35}px)` }}
      >
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030805] via-[#071410] to-[#030805]" />

        {/* Deep stadium atmosphere */}
        <div className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 50% 30%, rgba(21,128,61,0.22) 0%, transparent 65%),
              radial-gradient(ellipse 50% 40% at 20% 70%, rgba(5,46,22,0.3) 0%, transparent 55%),
              radial-gradient(ellipse 50% 40% at 80% 70%, rgba(5,46,22,0.3) 0%, transparent 55%)
            `
          }}
        />

        {/* Gold spotlight */}
        <div className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 30% 20% at 50% 15%, rgba(245,158,11,0.08) 0%, transparent 60%)`
          }}
        />

        {/* SVG Football Pitch Geometry */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.07]"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Pitch outline */}
          <rect x="120" y="80" width="1200" height="740" rx="4" stroke="#4ade80" strokeWidth="1.5" fill="none"/>
          {/* Center line */}
          <line x1="720" y1="80" x2="720" y2="820" stroke="#4ade80" strokeWidth="1.5"/>
          {/* Center circle */}
          <circle cx="720" cy="450" r="110" stroke="#4ade80" strokeWidth="1.5" fill="none"/>
          {/* Center spot */}
          <circle cx="720" cy="450" r="4" fill="#4ade80"/>
          {/* Left penalty box */}
          <rect x="120" y="250" width="220" height="400" stroke="#4ade80" strokeWidth="1.2" fill="none"/>
          {/* Left 6-yard box */}
          <rect x="120" y="355" width="80" height="190" stroke="#4ade80" strokeWidth="1" fill="none"/>
          {/* Left penalty spot */}
          <circle cx="272" cy="450" r="3" fill="#4ade80"/>
          {/* Left penalty arc */}
          <path d="M 340 330 Q 400 450 340 570" stroke="#4ade80" strokeWidth="1" fill="none"/>
          {/* Right penalty box */}
          <rect x="1100" y="250" width="220" height="400" stroke="#4ade80" strokeWidth="1.2" fill="none"/>
          {/* Right 6-yard box */}
          <rect x="1240" y="355" width="80" height="190" stroke="#4ade80" strokeWidth="1" fill="none"/>
          {/* Right penalty spot */}
          <circle cx="1168" cy="450" r="3" fill="#4ade80"/>
          {/* Right penalty arc */}
          <path d="M 1100 330 Q 1040 450 1100 570" stroke="#4ade80" strokeWidth="1" fill="none"/>
          {/* Corner arcs */}
          <path d="M 120 80 Q 140 80 140 100" stroke="#4ade80" strokeWidth="1" fill="none"/>
          <path d="M 1320 80 Q 1300 80 1300 100" stroke="#4ade80" strokeWidth="1" fill="none"/>
          <path d="M 120 820 Q 140 820 140 800" stroke="#4ade80" strokeWidth="1" fill="none"/>
          <path d="M 1320 820 Q 1300 820 1300 800" stroke="#4ade80" strokeWidth="1" fill="none"/>
          {/* Grass stripes (subtle) */}
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1={120 + i * 100}
              y1="80"
              x2={120 + i * 100}
              y2="820"
              stroke="#4ade80"
              strokeWidth="0.3"
              strokeOpacity="0.4"
            />
          ))}
        </svg>

        {/* Subtle scanline texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34,197,94,0.5) 2px, rgba(34,197,94,0.5) 3px)`,
          }}
        />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 z-[1]"
        style={{ background: 'linear-gradient(to bottom, transparent, #050a05)' }}
      />

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 w-full">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pitch-700/40 bg-pitch-950/40 backdrop-blur-sm mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-pitch-500 animate-pulse" />
              <span className="text-pitch-400 text-xs font-heading font-semibold tracking-widest uppercase">
                India's Premier Football Consultancy
              </span>
            </div>

            {/* Main headline */}
            <h1 className="font-heading font-black leading-[0.9] mb-6">
              <span className="block text-[clamp(3rem,8vw,6.5rem)] text-white tracking-tight">
                FROM INDIAN
              </span>
              <span className="block text-[clamp(3rem,8vw,6.5rem)] tracking-tight shimmer-text">
                DREAMS TO
              </span>
              <span className="block text-[clamp(3rem,8vw,6.5rem)] text-white tracking-tight">
                GLOBAL ARENAS
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-gray-400 text-lg md:text-xl font-body leading-relaxed mb-10 max-w-xl">
              Transforming Indian football talent into international opportunities — with world-class methodology, elite networks, and a pathway that actually delivers.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <button
                onClick={scrollToContact}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-pitch-600 hover:bg-pitch-500 text-white font-heading font-bold text-sm tracking-wide rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pitch-600/30"
              >
                <span>START YOUR JOURNEY</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button
                onClick={scrollToPrograms}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-gold-500/40 text-gold-400 hover:border-gold-400 hover:bg-gold-500/10 font-heading font-bold text-sm tracking-wide rounded-full transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>EXPLORE PROGRAMS</span>
              </button>
            </div>

            {/* Trust indicators */}
            {/* <div className="flex items-center gap-4 text-xs text-gray-500 font-body">
              <div className="flex -space-x-2">
                {['#4ade80','#22c55e','#16a34a','#15803d'].map((c, i) => (
                  <div key={i} className="w-7 h-7 rounded-full border-2 border-dark-900 flex items-center justify-center text-xs font-bold"
                    style={{ background: `linear-gradient(135deg, ${c}30, ${c}60)`, borderColor: '#050a05', color: c }}>
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <span>500+ athletes already on their journey</span>
            </div> */}
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 border-t border-pitch-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-pitch-900/30">
            {stats.map((stat, i) => (
              <div key={i} className="py-7 px-6 text-center group">
                <div className="text-3xl md:text-4xl font-heading font-black text-gold-400 mb-1">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs text-gray-500 font-body uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-28 right-8 md:right-12 z-10 w-10 h-10 rounded-full border border-pitch-700/40 flex items-center justify-center hover:border-pitch-500 hover:bg-pitch-950/40 transition-colors group"
        aria-label="Scroll down"
      >
        <svg className="w-4 h-4 text-pitch-500 group-hover:text-pitch-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </section>
  )
}
