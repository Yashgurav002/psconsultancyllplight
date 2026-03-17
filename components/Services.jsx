'use client'

import { useReveal } from './useReveal'

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/>
      </svg>
    ),
    title: 'Global Football Pathways',
    desc: 'We open doors to the international football ecosystem — connecting talented Indian players with clubs, academies, and scouting networks across Europe, Asia, and beyond.',
    benefits: ['International club trials & exposure', 'Direct scouting opportunities', 'Visa & logistical support'],
    accent: '#3D6B4F',
    bg: '#EDF4EF',
    border: '#D4E8DA',
    tag: 'MOST POPULAR',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
      </svg>
    ),
    title: 'Elite Training Programs',
    desc: 'High-performance training modules designed with European coaching methodology — built for athletes who want to compete at the highest levels, not just participate.',
    benefits: ['European coaching methodology', 'High-performance modules', 'Physical & tactical conditioning'],
    accent: '#C17D2E',
    bg: '#FBF3E8',
    border: '#F5E0C0',
    tag: 'FLAGSHIP',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
      </svg>
    ),
    title: 'Player Development',
    desc: 'Holistic, data-driven development programs that track, analyze, and accelerate individual player growth — covering technical skills, mental fortitude, and physical conditioning.',
    benefits: ['Skill enhancement & analysis', 'Performance data tracking', 'Mental performance coaching'],
    accent: '#5A8A6A',
    bg: '#F4F8F5',
    border: '#D4E8DA',
    tag: null,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
    title: 'Consultancy & Career Guidance',
    desc: 'Personalized career roadmaps for athletes and families — from identifying the right academy to navigating scholarship opportunities and building a long-term professional career plan.',
    benefits: ['Personalized career roadmaps', 'Scholarship & academy guidance', 'One-on-one mentorship sessions'],
    accent: '#A86520',
    bg: '#FDF7EE',
    border: '#F5E0C0',
    tag: null,
  },
]

function ServiceCard({ service, index }) {
  const { ref, visible } = useReveal(0.1)

  return (
    <div
      ref={ref}
      className={`reveal card-hover rounded-2xl p-7 relative overflow-hidden border ${visible ? 'visible' : ''}`}
      style={{ background: service.bg, borderColor: service.border, transitionDelay: `${index * 0.1}s` }}
    >
      {service.tag && (
        <div className="absolute top-5 right-5 text-[10px] font-heading font-bold px-2.5 py-1 rounded-full tracking-wider"
          style={{ background: `${service.accent}15`, color: service.accent }}>
          {service.tag}
        </div>
      )}

      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-white shadow-sm"
        style={{ color: service.accent, border: `1px solid ${service.border}` }}>
        {service.icon}
      </div>

      <h3 className="font-heading font-bold text-lg text-neutral-900 mb-3">{service.title}</h3>
      <p className="text-neutral-600 font-body text-sm leading-relaxed mb-5">{service.desc}</p>

      <ul className="space-y-2 mb-7">
        {service.benefits.map((b, i) => (
          <li key={i} className="flex items-center gap-2.5 text-sm font-body">
            <span className="w-4 h-4 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
              <svg className="w-2.5 h-2.5" fill="none" stroke={service.accent} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/>
              </svg>
            </span>
            <span className="text-neutral-700">{b}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        className="w-full py-3 rounded-xl font-heading font-semibold text-sm bg-white border transition-all duration-300 hover:scale-[1.02]"
        style={{ color: service.accent, borderColor: service.border }}
        onMouseEnter={e => { e.currentTarget.style.background = service.bg; e.currentTarget.style.borderColor = service.accent }}
        onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = service.border }}
      >
        Apply Now →
      </button>
    </div>
  )
}

export default function Services() {
  const { ref, visible } = useReveal()

  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden bg-neutral-50">
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 50% 50% at 90% 20%, rgba(193,125,46,0.04) 0%, transparent 55%)' }}/>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`reveal text-center max-w-2xl mx-auto mb-16 ${visible ? 'visible' : ''}`}>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-sage-300"/>
            <span className="text-sage-500 text-xs font-heading font-semibold tracking-widest uppercase">What We Offer</span>
            <div className="h-px w-8 bg-sage-300"/>
          </div>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-neutral-900 mb-4 leading-tight">
            WORLD-CLASS <span className="gradient-text">SERVICES</span>
          </h2>
          <p className="text-neutral-500 font-body leading-relaxed">
            From elite training to international placement — every service is designed with one goal: getting Indian football talent to the global stage.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i}/>
          ))}
        </div>
      </div>
    </section>
  )
}
