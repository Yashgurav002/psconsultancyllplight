'use client'

import { useReveal } from './useReveal'

const differentiators = [
  {
    number: '01',
    title: 'International Exposure',
    desc: 'Direct connections to clubs, academies, and programs across Europe, UAE, and Southeast Asia. We don\'t promise exposure — we deliver it through active partnerships and organized programs.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/>
      </svg>
    ),
    color: '#4ade80',
  },
  {
    number: '02',
    title: 'Expert Methodology',
    desc: 'Founded by a Real Madrid Graduate School alumnus, our entire training philosophy is built on the Spanish methodology that has produced some of the world\'s best footballers — adapted for Indian athletes.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
      </svg>
    ),
    color: '#fbbf24',
  },
  {
    number: '03',
    title: 'Global Network',
    desc: 'Over 15 partner clubs, 8 academies, and relationships with governing bodies across 5 countries. Our network isn\'t a list on a website — it\'s the result of years of relationship-building at the highest levels.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
      </svg>
    ),
    color: '#a78bfa',
  },
  {
    number: '04',
    title: 'Personalized Plans',
    desc: 'No two players are identical, and no two Pioneer plans are either. Every athlete gets a customized development roadmap built around their specific strengths, gaps, goals, and timeline.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
      </svg>
    ),
    color: '#34d399',
  },
  {
    number: '05',
    title: 'Proven Track Record',
    desc: '500+ players trained, 50+ programs delivered, 15+ international partner clubs. Our results speak louder than any pitch. Every success story in our network is a testament to what structured development can achieve.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
      </svg>
    ),
    color: '#f472b6',
  },
]

export default function WhyUs() {
  const { ref: titleRef, visible: titleVisible } = useReveal()

  return (
    <section id="why-us" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-dark-900" />
      <div className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 50% 60% at 100% 50%, rgba(21,128,61,0.06) 0%, transparent 55%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={titleRef}
          className={`reveal mb-16 ${titleVisible ? 'visible' : ''}`}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-pitch-700" />
                <span className="text-pitch-500 text-xs font-heading font-semibold tracking-widest uppercase">The Pioneer Difference</span>
              </div>
              <h2 className="font-heading font-black text-4xl md:text-5xl text-white leading-tight">
                WHY CHOOSE <span className="gradient-text">PIONEER?</span>
              </h2>
            </div>
            <div>
              <p className="text-gray-400 font-body leading-relaxed">
                In a space filled with vague promises and expensive disappointments, Pioneer Sports Consultancy is built differently — on real credentials, real networks, and a genuine commitment to Indian football's global future.
              </p>
            </div>
          </div>
        </div>

        {/* Differentiators */}
        <div className="space-y-4">
          {differentiators.map((d, i) => {
            const { ref, visible } = useReveal(0.1)
            return (
              <div
                key={i}
                ref={ref}
                className={`reveal glass card-hover rounded-2xl p-6 md:p-8 ${visible ? 'visible' : ''}`}
                style={{
                  transitionDelay: `${i * 0.08}s`,
                  borderLeft: `3px solid ${d.color}40`,
                }}
              >
                <div className="flex items-start gap-5 md:gap-8">
                  {/* Number */}
                  <div
                    className="font-heading font-black text-3xl md:text-4xl flex-shrink-0 w-12 text-right leading-none"
                    style={{ color: `${d.color}30` }}
                  >
                    {d.number}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${d.color}12`, color: d.color, border: `1px solid ${d.color}20` }}
                  >
                    {d.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading font-bold text-lg md:text-xl text-white mb-2">{d.title}</h3>
                    <p className="text-gray-400 font-body text-sm leading-relaxed">{d.desc}</p>
                  </div>

                  {/* Arrow */}
                  <div
                    className="hidden md:flex w-8 h-8 rounded-full items-center justify-center flex-shrink-0 opacity-30 group-hover:opacity-100 transition-opacity"
                    style={{ border: `1px solid ${d.color}40`, color: d.color }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                    </svg>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-pitch-600 hover:bg-pitch-500 text-white font-heading font-bold text-sm tracking-wide rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pitch-600/30"
          >
            Start Your Journey Today
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
