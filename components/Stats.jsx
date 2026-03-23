'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  {
    value: 500,
    suffix: '+',
    label: 'Players Trained',
    desc: 'Indian footballers coached, mentored and placed through Pioneer programs',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
  },
  {
    value: 50,
    suffix: '+',
    label: 'Programs Delivered',
    desc: 'Structured football programs run across India and internationally',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
      </svg>
    ),
  },
  {
    value: 15,
    suffix: '+',
    label: 'Partner Clubs',
    desc: 'Verified international clubs and academies in Pioneer\'s global network',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
      </svg>
    ),
  },
  {
    value: 5,
    suffix: '+',
    label: 'Countries',
    desc: 'Nations where Pioneer has active programs, partnerships, and placements',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/>
      </svg>
    ),
  },
]

function AnimatedStat({ value, suffix, label, desc, icon }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const duration = 2200
          const animate = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * value))
            if (progress < 1) requestAnimationFrame(animate)
            else setCount(value)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="text-center group">
      <div className="w-12 h-12 mx-auto rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gold-400 mb-4 group-hover:border-gold-500/30 transition-colors">
        {icon}
      </div>
      <div className="font-heading font-black text-5xl md:text-6xl text-gold-400 leading-none mb-2 tabular-nums stat-number">
        {count}{suffix}
      </div>
      <div className="font-heading font-bold text-white text-base mb-2">{label}</div>
      <div className="text-gray-400 font-body text-xs leading-relaxed max-w-[160px] mx-auto">{desc}</div>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Rich green gradient background */}
      <div className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #052e16 0%, #14532d 40%, #052e16 70%, #030d05 100%)',
        }}
      />
      <div className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(34,197,94,0.08) 0%, transparent 60%)',
        }}
      />

      {/* Pitch line decoration */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1440 400">
          <circle cx="720" cy="200" r="150" stroke="#4ade80" strokeWidth="1" fill="none"/>
          <line x1="720" y1="0" x2="720" y2="400" stroke="#4ade80" strokeWidth="1"/>
          <circle cx="720" cy="200" r="5" fill="#4ade80"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-pitch-400 font-heading font-semibold text-xs tracking-widest uppercase mb-3">Pioneer by the Numbers</p>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-white">
            OUR IMPACT IN <span className="text-gold-400">NUMBERS</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14">
          {stats.map((stat, i) => (
            <AnimatedStat key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
