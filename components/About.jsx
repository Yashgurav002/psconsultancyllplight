'use client'

import Image from 'next/image'
import { useReveal } from './useReveal'

const values = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 3l14 9-14 9V3z" />
      </svg>
    ),
    title: 'Excellence',
    desc: 'World-class standards in everything we do, from training to placement.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: 'Global Exposure',
    desc: 'Direct pathways to clubs, academies, and programs across 3+ countries.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: 'Athlete-First',
    desc: "Every decision, every plan, every program built around the athlete's potential.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Innovation',
    desc: 'Combining data analytics with Spanish methodology for modern development.',
  },
]

export default function About() {
  const { ref: leftRef, visible: leftVisible } = useReveal()
  const { ref: rightRef, visible: rightVisible } = useReveal(0.15)

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-800" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 80% 50%, rgba(21,128,61,0.06) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-16">
          <div className="h-px flex-1 max-w-12 bg-pitch-700" />
          <span className="text-pitch-500 text-xs font-heading font-semibold tracking-widest uppercase">
            About the Founder
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-pitch-700 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT SIDE (IMAGE) */}
          <div
            ref={leftRef}
            className={`reveal-left ${leftVisible ? 'visible' : ''}`}
          >
            <div className="relative w-full max-w-sm mx-auto lg:mx-0">

              {/* Glow blob */}
              <div
                className="absolute -inset-4 blob-animate opacity-20"
                style={{
                  background: 'linear-gradient(135deg, #15803d, #f59e0b)',
                  filter: 'blur(40px)',
                }}
              />

              {/* Image Card */}
              <div className="relative glass rounded-2xl p-1 overflow-hidden">
                <div
                  className="relative rounded-xl overflow-hidden"
                  style={{ aspectRatio: '3/4' }}
                >
                  <Image
                    src="/founderimage.jpg"
                    alt="Hardik Sheth"
                    fill
                    priority
                    className="object-cover object-[center_20%]"
                  />

                  {/* Overlay for readability */}
                  <div className="absolute inset-0 bg-black/10" />

                  {/* Bottom gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-dark-900/80 to-transparent" />
                </div>
              </div>

              {/* Badge 1 */}
              <div className="absolute -right-4 top-8 glass-gold rounded-xl px-4 py-2.5 shadow-xl">
                <div className="text-gold-400 font-heading font-bold text-sm">
                  Real Madrid
                </div>
                <div className="text-gray-400 text-xs">
                  Graduate School Alumni
                </div>
              </div>

              {/* Badge 2 */}
              <div className="absolute -left-4 bottom-12 glass rounded-xl px-4 py-2.5 shadow-xl">
                <div className="text-pitch-400 font-heading font-bold text-sm">
                  Spanish Methodology
                </div>
                <div className="text-gray-400 text-xs">
                  Certified Specialist
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            ref={rightRef}
            className={`reveal-right ${rightVisible ? 'visible' : ''}`}
          >
            <h2 className="font-heading font-black text-4xl md:text-5xl leading-tight mb-2 text-white">
              HARDIK <span className="gradient-text">SHETH</span>
            </h2>

            <p className="text-pitch-500 font-heading font-semibold text-sm tracking-wider uppercase mb-6">
              Founder & Director · Real Madrid Graduate School Alumni
            </p>

            <p className="text-gray-300 font-body leading-relaxed mb-5 text-lg">
              Armed with elite European education from the Real Madrid Graduate School and deep expertise in Spanish football methodology, Hardik Sheth founded Pioneer Sports Consultancy with a singular vision: to close the gap between Indian talent and the global stage.
            </p>

            <p className="text-gray-400 font-body leading-relaxed mb-10">
              Having witnessed firsthand how Indian footballers with genuine ability were being held back by lack of structured pathways and international exposure, Hardik built a consultancy that doesn't just advise — it actively creates opportunities, forges partnerships, and walks alongside athletes on their journey to excellence.
            </p>

            {/* Vision & Mission */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <div className="glass rounded-xl p-5 border-l-2 border-pitch-600">
                <div className="text-pitch-400 font-heading font-bold text-xs uppercase mb-2">
                  Our Vision
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Bridge the gap between Indian talent and global football ecosystems — making international careers a realistic goal.
                </p>
              </div>

              <div className="glass rounded-xl p-5 border-l-2 border-gold-500">
                <div className="text-gold-400 font-heading font-bold text-xs uppercase mb-2">
                  Our Mission
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Provide structured, world-class opportunities through education, training, and real connections.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-2 gap-3">
              {values.map((val, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-pitch-950/60 border border-pitch-800/40 flex items-center justify-center text-pitch-500 group-hover:border-pitch-600 group-hover:text-pitch-400 transition-colors">
                    {val.icon}
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-white text-sm mb-0.5">
                      {val.title}
                    </div>
                    <div className="text-gray-500 text-xs leading-relaxed">
                      {val.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}