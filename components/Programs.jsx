'use client'

import { useState } from 'react'
import { useReveal } from './useReveal'

const programs = [
  {
    id: 'youth', label: 'Youth Development', icon: '⚽',
    title: 'Youth Development Programs',
    subtitle: 'Building the foundation for tomorrow\'s football stars',
    overview: 'Our Youth Development Programs are the entry point for players aged 8–17 who show potential and passion for the beautiful game. Structured around Spanish La Masia-inspired methodology adapted for Indian athletes, these programs focus on technical mastery, tactical intelligence, and building the mental resilience required to succeed internationally.',
    duration: '3–12 months (rolling enrollment)',
    audience: 'Players aged 8–17, all skill levels welcome',
    outcomes: ['Solid technical foundation in passing, dribbling, positioning', 'Tactical awareness and game intelligence', 'Fitness benchmarks aligned with international standards', 'Regular performance reviews and development reports', 'Priority pathway to elite programs upon graduation'],
    color: '#3D6B4F', bg: '#EDF4EF', border: '#D4E8DA',
  },
  {
    id: 'camps', label: 'International Camps', icon: '🌍',
    title: 'International Training Camps',
    subtitle: 'Train where the world\'s best football is played',
    overview: 'Immersive 2–4 week international training camps designed to give Indian players direct exposure to European and Asian football environments. Held in partnership with professional clubs and academies in Spain, Portugal, UAE, and Southeast Asia, these camps provide unmatched technical coaching alongside cultural immersion in football-first environments.',
    duration: '2–4 weeks (seasonal intake)',
    audience: 'Players aged 14–22, intermediate to advanced skill',
    outcomes: ['Training alongside European-standard coaches and peers', 'Real match experience in organized fixtures', 'Performance assessment by international scouts', 'Certificates from partner academies', 'Potential direct selection for trial programs'],
    color: '#C17D2E', bg: '#FBF3E8', border: '#F5E0C0',
  },
  {
    id: 'trials', label: 'Trial & Scouting', icon: '🎯',
    title: 'Trial & Scouting Programs',
    subtitle: 'Your direct audition for professional football',
    overview: 'The most impactful pathway we offer — structured trials with our partner clubs and academies across 5+ countries. Every trial is professionally organized, ensuring players are evaluated fairly by qualified scouts and technical directors. We handle everything from preparation to logistics so athletes can focus entirely on performing.',
    duration: '1–3 weeks (by invitation/application)',
    audience: 'Players aged 16–24, advanced skill required',
    outcomes: ['Formal trial with partner clubs in Europe and Asia', 'Professional scouting report issued post-trial', 'Direct contract or academy placement for top performers', 'Continued monitoring by our scout network', 'Career pathway guidance regardless of immediate outcome'],
    color: '#5A8A6A', bg: '#F4F8F5', border: '#D4E8DA',
  },
  {
    id: 'elite', label: 'Elite Performance', icon: '🏆',
    title: 'Elite Performance Programs',
    subtitle: 'For athletes who refuse to settle for anything less than the best',
    overview: 'Our flagship offering — a fully personalized, high-intensity performance program combining data analytics, sport science, advanced tactical training, and mental performance coaching. Designed for players already competing at a high level who want to make the leap to professional or semi-professional football.',
    duration: '6–18 months (individualized)',
    audience: 'Advanced players aged 17–26, professional aspirants',
    outcomes: ['Individualized training load and periodization plans', 'GPS and video analysis of every session', 'Quarterly fitness and technical testing reports', 'Direct introduction to Pioneer\'s global partner network', 'Guaranteed international exposure opportunity within program'],
    color: '#A86520', bg: '#FDF7EE', border: '#E8C08A',
  },
]

export default function Programs() {
  const [active, setActive] = useState('youth')
  const { ref, visible } = useReveal()
  const current = programs.find(p => p.id === active)

  return (
    <section id="programs" className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(61,107,79,0.04) 0%, transparent 60%)' }}/>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`reveal text-center max-w-2xl mx-auto mb-14 ${visible ? 'visible' : ''}`}>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-amber-300"/>
            <span className="text-amber-500 text-xs font-heading font-semibold tracking-widest uppercase">Training Pathways</span>
            <div className="h-px w-8 bg-amber-300"/>
          </div>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-neutral-900 mb-4 leading-tight">
            OUR <span className="gradient-text-amber">PROGRAMS</span>
          </h2>
          <p className="text-neutral-500 font-body leading-relaxed">
            Structured pathways from grassroots development to international trials — pick the program that matches your ambition.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {programs.map(p => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-heading font-semibold text-sm transition-all duration-300 border ${
                active === p.id
                  ? 'text-white shadow-md scale-105 border-transparent'
                  : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-300'
              }`}
              style={active === p.id ? { background: p.color } : {}}
            >
              <span>{p.icon}</span>
              <span>{p.label}</span>
            </button>
          ))}
        </div>

        {/* Program detail */}
        <div key={active} className="rounded-2xl overflow-hidden border shadow-card" style={{ borderColor: current.border }}>
          <div className="grid lg:grid-cols-5">
            <div className="lg:col-span-3 p-8 md:p-10 bg-white">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-heading font-semibold mb-5 tracking-wider"
                style={{ background: current.bg, color: current.color, border: `1px solid ${current.border}` }}>
                {current.icon} {current.label}
              </div>
              <h3 className="font-heading font-black text-2xl md:text-3xl text-neutral-900 mb-2">{current.title}</h3>
              <p className="font-body text-sm mb-6 font-medium" style={{ color: current.color }}>{current.subtitle}</p>
              <p className="text-neutral-600 font-body leading-relaxed mb-8 text-sm">{current.overview}</p>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-heading font-bold text-sm text-white transition-all duration-300 hover:scale-105"
                  style={{ background: current.color, boxShadow: `0 8px 24px ${current.color}25` }}
                >
                  Apply for This Program
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </button>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm font-heading font-medium text-neutral-500 hover:text-neutral-800 transition-colors underline underline-offset-4"
                >
                  Request info →
                </button>
              </div>
            </div>

            <div className="lg:col-span-2 p-8 md:p-10 border-t lg:border-t-0 lg:border-l"
              style={{ background: current.bg, borderColor: current.border }}>
              <div className="space-y-5 mb-8">
                <div>
                  <div className="text-xs font-heading font-semibold tracking-widest uppercase mb-1.5" style={{ color: current.color }}>Duration</div>
                  <div className="text-neutral-800 font-body text-sm">{current.duration}</div>
                </div>
                <div>
                  <div className="text-xs font-heading font-semibold tracking-widest uppercase mb-1.5" style={{ color: current.color }}>Target Audience</div>
                  <div className="text-neutral-800 font-body text-sm">{current.audience}</div>
                </div>
              </div>
              <div>
                <div className="text-xs font-heading font-semibold tracking-widest uppercase mb-4" style={{ color: current.color }}>Key Outcomes</div>
                <ul className="space-y-3">
                  {current.outcomes.map((o, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm font-body">
                      <span className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-white"
                        style={{ background: current.color }}>
                        <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/>
                        </svg>
                      </span>
                      <span className="text-neutral-700">{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
