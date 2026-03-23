'use client'

import { useState } from 'react'
import { useReveal } from './useReveal'

const faqs = [
  {
    question: 'How can I join a Pioneer Sports program?',
    answer: 'Joining is straightforward: fill out our contact form or call us directly to book an initial consultation. During the consultation, we assess your goals, current skill level, and which program best suits your ambitions. There\'s no pressure — we\'ll give you a clear, honest picture of what\'s possible. Once you decide to proceed, our team handles the enrollment process end-to-end.',
  },
  {
    question: 'What is the eligibility criteria for Pioneer programs?',
    answer: 'Eligibility varies by program. Our Youth Development Programs are open to players aged 8–17 with no minimum skill requirement — passion and commitment are enough. International Training Camps require intermediate skill and are open to ages 14–22. Trial & Scouting Programs require advanced ability and are recommended for players aged 16–24 who are already competing regularly. Elite Performance Programs are for serious players aged 17–26 pursuing professional or semi-professional careers. When in doubt, contact us — we\'ll assess and advise honestly.',
  },
  {
    question: 'Are international opportunities guaranteed after joining?',
    answer: 'We are always transparent about this: no consultancy can guarantee professional contracts, as final decisions rest with clubs and academies. What we do guarantee is structured access to real international opportunities — organized trials, training camps, scout evaluations, and direct introductions to our partner network. Our Elite Performance Program includes a guaranteed international exposure opportunity as part of the program structure. Our track record of 500+ players and 15+ partner clubs reflects what we\'re actually capable of delivering.',
  },
  {
    question: 'What is the typical program duration?',
    answer: 'Program durations vary: Youth Development Programs run 3–12 months on a rolling basis. International Training Camps are 2–4 week intensive experiences held seasonally. Trial & Scouting Programs are 1–3 week events. Elite Performance Programs are 6–18 months, fully individualized to the athlete\'s development needs and timeline. We can discuss flexible arrangements depending on your specific situation during the initial consultation.',
  },
  {
    question: 'How does the selection process work for trials?',
    answer: 'For our Trial & Scouting Programs, the process begins with a detailed application where you provide your playing history, position, current team, and video footage if available. Our technical team reviews each application and invites shortlisted candidates for a live assessment. If selected, we begin a 4–6 week preparation phase before the actual trial to ensure you arrive at peak condition. We manage all logistics — travel, accommodation, scheduling — so you can focus entirely on performing. Post-trial, we provide a full scouting report regardless of the outcome.',
  },
]

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="glass rounded-xl overflow-hidden border border-pitch-900/30 hover:border-pitch-800/50 transition-colors"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left group"
        aria-expanded={open}
      >
        <div className="flex items-start gap-4">
          <span className="font-heading font-black text-sm text-pitch-700 mt-0.5 flex-shrink-0 w-6">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="font-heading font-semibold text-white group-hover:text-pitch-300 transition-colors text-sm md:text-base leading-snug">
            {faq.question}
          </span>
        </div>
        <div
          className={`w-7 h-7 rounded-full border border-pitch-800/50 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
            open ? 'bg-pitch-700 border-pitch-600 rotate-45' : 'bg-transparent'
          }`}
        >
          <svg className="w-3.5 h-3.5 text-pitch-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4"/>
          </svg>
        </div>
      </button>

      <div
        className="faq-content"
        style={{
          maxHeight: open ? '400px' : '0',
          paddingBottom: open ? '20px' : '0',
        }}
      >
        <div className="px-5 md:px-6 pl-[3.75rem] text-gray-400 font-body text-sm leading-relaxed">
          {faq.answer}
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const { ref, visible } = useReveal()

  return (
    <section id="faq" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-dark-800" />
      <div className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 40% 60% at 100% 100%, rgba(245,158,11,0.04) 0%, transparent 55%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`reveal text-center mb-14 ${visible ? 'visible' : ''}`}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-pitch-700" />
            <span className="text-pitch-500 text-xs font-heading font-semibold tracking-widest uppercase">Got Questions?</span>
            <div className="h-px w-8 bg-pitch-700" />
          </div>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-white mb-4 leading-tight">
            FREQUENTLY ASKED <span className="gradient-text">QUESTIONS</span>
          </h2>
          <p className="text-gray-400 font-body leading-relaxed">
            Everything you need to know before taking your first step with Pioneer Sports.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>

        <div className="text-center mt-12 p-7 glass rounded-2xl">
          <p className="text-gray-400 font-body text-sm mb-4">
            Still have questions? We're happy to talk through anything.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-6 py-3 bg-pitch-600 hover:bg-pitch-500 text-white font-heading font-semibold text-sm rounded-full transition-all duration-300 hover:scale-105"
          >
            Book a Free Consultation
          </button>
        </div>
      </div>
    </section>
  )
}
