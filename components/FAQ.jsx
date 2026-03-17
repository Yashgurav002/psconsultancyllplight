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
    answer: 'Eligibility varies by program. Youth Development Programs are open to players aged 8–17 with no minimum skill requirement. International Training Camps require intermediate skill and are open to ages 14–22. Trial & Scouting Programs require advanced ability and are recommended for players aged 16–24. Elite Performance Programs are for serious players aged 17–26 pursuing professional or semi-professional careers.',
  },
  {
    question: 'Are international opportunities guaranteed after joining?',
    answer: 'We are always transparent: no consultancy can guarantee professional contracts, as final decisions rest with clubs and academies. What we do guarantee is structured access to real international opportunities — organized trials, training camps, scout evaluations, and direct introductions to our partner network. Our Elite Performance Program includes a guaranteed international exposure opportunity as part of the program structure.',
  },
  {
    question: 'What is the typical program duration?',
    answer: 'Youth Development Programs run 3–12 months on a rolling basis. International Training Camps are 2–4 week intensive experiences. Trial & Scouting Programs are 1–3 week events. Elite Performance Programs are 6–18 months, fully individualized. We can discuss flexible arrangements depending on your specific situation during the initial consultation.',
  },
  {
    question: 'How does the selection process work for trials?',
    answer: 'The process begins with a detailed application including your playing history, position, and video footage if available. Our technical team reviews each application and invites shortlisted candidates for a live assessment. If selected, we begin a 4–6 week preparation phase before the actual trial. We manage all logistics — travel, accommodation, scheduling — so you can focus on performing.',
  },
]

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`rounded-xl border transition-all duration-300 ${open ? 'border-sage-300 bg-sage-50 shadow-sm' : 'border-neutral-200 bg-white hover:border-neutral-300'}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left group"
        aria-expanded={open}
      >
        <div className="flex items-start gap-4">
          <span className="font-heading font-black text-sm text-sage-300 mt-0.5 flex-shrink-0 w-6">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className={`font-heading font-semibold text-sm md:text-base leading-snug transition-colors ${open ? 'text-sage-700' : 'text-neutral-800 group-hover:text-sage-600'}`}>
            {faq.question}
          </span>
        </div>
        <div className={`w-7 h-7 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
          open ? 'bg-sage-600 border-sage-600 rotate-45' : 'bg-white border-neutral-300'
        }`}>
          <svg className={`w-3.5 h-3.5 transition-colors ${open ? 'text-white' : 'text-neutral-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4"/>
          </svg>
        </div>
      </button>

      <div className="faq-content" style={{ maxHeight: open ? '300px' : '0', paddingBottom: open ? '20px' : '0' }}>
        <div className="px-5 md:px-6 pl-[3.75rem] text-neutral-600 font-body text-sm leading-relaxed">
          {faq.answer}
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const { ref, visible } = useReveal()

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 40% 50% at 100% 100%, rgba(193,125,46,0.03) 0%, transparent 55%)' }}/>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`reveal text-center mb-14 ${visible ? 'visible' : ''}`}>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-sage-300"/>
            <span className="text-sage-500 text-xs font-heading font-semibold tracking-widest uppercase">Got Questions?</span>
            <div className="h-px w-8 bg-sage-300"/>
          </div>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-neutral-900 mb-4 leading-tight">
            FREQUENTLY ASKED <span className="gradient-text">QUESTIONS</span>
          </h2>
          <p className="text-neutral-500 font-body leading-relaxed">
            Everything you need to know before taking your first step with Pioneer Sports.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => <FAQItem key={i} faq={faq} index={i}/>)}
        </div>

        <div className="text-center mt-12 p-7 bg-sage-50 rounded-2xl border border-sage-200">
          <p className="text-neutral-600 font-body text-sm mb-4">Still have questions? We're happy to talk through anything.</p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-6 py-3 bg-sage-600 hover:bg-sage-700 text-white font-heading font-semibold text-sm rounded-full transition-all duration-300 hover:scale-105 shadow-sage"
          >
            Book a Free Consultation
          </button>
        </div>
      </div>
    </section>
  )
}
