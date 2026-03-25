'use client'

import { useReveal } from './useReveal'

const services = [
  // {
  //   icon: (
  //     <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/>
  //     </svg>
  //   ),
  //   title: 'Global Football Pathways',
  //   desc: 'We open doors to the international football ecosystem — connecting talented Indian players with clubs, academies, and scouting networks across Europe, Asia, and beyond.',
  //   benefits: ['International club trials & exposure', 'Direct scouting opportunities', 'Visa & logistical support'],
  //   accent: '#4ade80',
  //   accentBg: 'rgba(34,197,94,0.08)',
  //   tag: 'MOST POPULAR',
  // },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Elite Training Programs',
    desc: 'High-performance training modules designed with European coaching methodology — built for athletes who want to compete at the highest levels, not just participate.',
    benefits: ['European coaching methodology', 'High-performance modules', 'Physical & tactical conditioning'],
    accent: '#f59e0b',
    accentBg: 'rgba(245,158,11,0.08)',
    tag: 'FLAGSHIP',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Player Development',
    desc: 'Holistic, data-driven development programs that track, analyze, and accelerate individual player growth — covering technical skills, mental fortitude, and physical conditioning.',
    benefits: ['Skill enhancement & analysis', 'Performance data tracking', 'Mental performance coaching'],
    accent: '#a78bfa',
    accentBg: 'rgba(167,139,250,0.08)',
    tag: null,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Consultancy & Career Guidance',
    desc: 'Personalized career roadmaps for athletes and families — from identifying the right academy, navigating scholarship opportunities, to building a long-term professional career plan.',
    benefits: ['Personalized career roadmaps', 'Scholarship & academy guidance', 'One-on-one mentorship sessions'],
    accent: '#34d399',
    accentBg: 'rgba(52,211,153,0.08)',
    tag: null,
  },
]

function ServiceCard({ service, index }) {
  const { ref, visible } = useReveal(0.1)

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      ref={ref}
      className={`reveal card-hover glass rounded-2xl p-7 relative overflow-hidden ${visible ? 'visible' : ''}`}
      style={{
        transitionDelay: `${index * 0.1}s`,
        background: service.accentBg,
        borderColor: `${service.accent}20`,
      }}
    >
      {service.tag && (
        <div
          className="absolute top-5 right-5 text-[10px] font-heading font-bold px-2.5 py-1 rounded-full tracking-wider"
          style={{ background: `${service.accent}20`, color: service.accent }}
        >
          {service.tag}
        </div>
      )}

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
        style={{ background: `${service.accent}15`, color: service.accent, border: `1px solid ${service.accent}25` }}
      >
        {service.icon}
      </div>

      <h3 className="font-heading font-bold text-xl text-white mb-3">{service.title}</h3>
      <p className="text-gray-400 font-body text-sm leading-relaxed mb-5">{service.desc}</p>

      {/* Benefits */}
      <ul className="space-y-2 mb-7">
        {service.benefits.map((b, i) => (
          <li key={i} className="flex items-center gap-2.5 text-sm font-body">
            <span
              className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: `${service.accent}20` }}
            >
              <svg className="w-2.5 h-2.5" fill="none" stroke={service.accent} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-gray-300">{b}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        onClick={scrollToContact}
        className="w-full py-3 rounded-xl font-heading font-semibold text-sm transition-all duration-300 hover:scale-[1.02]"
        style={{
          background: `${service.accent}18`,
          color: service.accent,
          border: `1px solid ${service.accent}30`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = `${service.accent}30`
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = `${service.accent}18`
        }}
      >
        Apply Now →
      </button>

      {/* Corner decoration */}
      <div
        className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full opacity-5"
        style={{ background: service.accent }}
      />
    </div>
  )
}

export default function Services() {
  const { ref: titleRef, visible: titleVisible } = useReveal()

  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-dark-900" />
      <div className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 50% 40% at 10% 50%, rgba(21,128,61,0.05) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 90% 50%, rgba(245,158,11,0.04) 0%, transparent 60%)
          `
        }}
      />

      {/* Diagonal line decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
        <svg className="w-full h-full" preserveAspectRatio="none">
          {[...Array(8)].map((_, i) => (
            <line key={i}
              x1={`${i * 15}%`} y1="0"
              x2={`${i * 15 + 20}%`} y2="100%"
              stroke="#4ade80" strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`reveal text-center max-w-2xl mx-auto mb-16 ${titleVisible ? 'visible' : ''}`}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-pitch-700" />
            <span className="text-pitch-500 text-xs font-heading font-semibold tracking-widest uppercase">What We Offer</span>
            <div className="h-px w-8 bg-pitch-700" />
          </div>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-white mb-4 leading-tight">
            WORLD-CLASS <span className="gradient-text">SERVICES</span>
          </h2>
          <p className="text-gray-400 font-body leading-relaxed">
            From elite training to international placement — every service is designed with one goal: getting Indian football talent to the global stage.
          </p>
        </div>

        <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">          {services.map((service, i) => (
          <ServiceCard key={i} service={service} index={i} />
        ))}
        </div>
      </div>
    </section>
  )
}
