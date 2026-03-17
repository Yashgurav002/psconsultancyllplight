'use client'

import { useReveal } from './useReveal'

const values = [
  { icon: '▶', title: 'Excellence', desc: 'World-class standards in everything we do, from training to placement.' },
  { icon: '🌐', title: 'Global Exposure', desc: 'Direct pathways to clubs, academies, and programs across 5+ countries.' },
  { icon: '👤', title: 'Athlete-First', desc: 'Every decision, every plan, every program built around the athlete\'s potential.' },
  { icon: '⚡', title: 'Innovation', desc: 'Data analytics combined with Spanish methodology for modern development.' },
]

export default function About() {
  const { ref: leftRef, visible: leftVisible } = useReveal()
  const { ref: rightRef, visible: rightVisible } = useReveal(0.15)

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden bg-white">
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 50% 60% at 90% 50%, rgba(61,107,79,0.04) 0%, transparent 60%)' }}/>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-16">
          <div className="h-px w-10 bg-sage-300"/>
          <span className="text-sage-500 text-xs font-heading font-semibold tracking-widest uppercase">About the Founder</span>
          <div className="h-px flex-1 bg-gradient-to-r from-sage-200 to-transparent"/>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Portrait */}
          <div ref={leftRef} className={`reveal-left ${leftVisible ? 'visible' : ''}`}>
            <div className="relative w-full max-w-sm mx-auto lg:mx-0">
              <div className="absolute -inset-4 blob-animate rounded-3xl opacity-15"
                style={{ background: 'linear-gradient(135deg, #3D6B4F, #C17D2E)', filter: 'blur(30px)' }}/>
              <div className="relative bg-white rounded-2xl p-1 shadow-card overflow-hidden border border-neutral-200">
                <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: '3/4' }}>
                  <div className="absolute inset-0"
                    style={{ background: 'linear-gradient(135deg, #EDF4EF 0%, #F4F8F5 50%, #FBF3E8 100%)' }}/>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-sage-100 border-2 border-sage-200 flex items-center justify-center mb-4">
                      <svg className="w-12 h-12 text-sage-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                      </svg>
                    </div>
                    <div className="text-sage-700 font-heading font-bold text-xl">HARDIK SHETH</div>
                    <div className="text-neutral-500 text-sm mt-1">Founder & Director</div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/3"
                    style={{ background: 'linear-gradient(to top, rgba(255,255,255,0.8), transparent)' }}/>
                </div>
              </div>
              {/* Badges */}
              <div className="absolute -right-4 top-8 bg-white rounded-xl px-4 py-2.5 shadow-card border border-neutral-200">
                <div className="text-sage-700 font-heading font-bold text-sm">Real Madrid</div>
                <div className="text-neutral-500 text-xs">Graduate School Alumni</div>
              </div>
              <div className="absolute -left-4 bottom-12 bg-white rounded-xl px-4 py-2.5 shadow-card border border-neutral-200">
                <div className="text-amber-500 font-heading font-bold text-sm">Spanish Methodology</div>
                <div className="text-neutral-500 text-xs">Certified Specialist</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={rightRef} className={`reveal-right ${rightVisible ? 'visible' : ''}`}>
            <h2 className="font-heading font-black text-4xl md:text-5xl leading-tight mb-2 text-neutral-900">
              HARDIK <span className="gradient-text">SHETH</span>
            </h2>
            <p className="text-sage-600 font-heading font-semibold text-sm tracking-wider uppercase mb-6">
              Founder & Director · Real Madrid Graduate School Alumni
            </p>
            <p className="text-neutral-700 font-body leading-relaxed mb-5 text-lg">
              Armed with elite European education from the Real Madrid Graduate School and deep expertise in Spanish football methodology, Hardik Sheth founded Pioneer Sports Consultancy with a singular vision: to close the gap between Indian talent and the global stage.
            </p>
            <p className="text-neutral-500 font-body leading-relaxed mb-10">
              Having witnessed firsthand how Indian footballers with genuine ability were being held back by lack of structured pathways and international exposure, Hardik built a consultancy that doesn't just advise — it actively creates opportunities, forges partnerships, and walks alongside athletes on their journey.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <div className="bg-sage-50 rounded-xl p-5 border-l-4 border-sage-500">
                <div className="text-sage-600 font-heading font-bold text-xs tracking-wider uppercase mb-2">Our Vision</div>
                <p className="text-neutral-600 text-sm font-body leading-relaxed">
                  Bridge the gap between Indian talent and global football ecosystems — making international careers a realistic goal for every dedicated Indian footballer.
                </p>
              </div>
              <div className="bg-amber-50 rounded-xl p-5 border-l-4 border-amber-400">
                <div className="text-amber-600 font-heading font-bold text-xs tracking-wider uppercase mb-2">Our Mission</div>
                <p className="text-neutral-600 text-sm font-body leading-relaxed">
                  Provide structured, world-class opportunities for athletes to grow, compete, and succeed internationally — through education, training, and real connections.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {values.map((val, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-sage-100 border border-sage-200 flex items-center justify-center text-sm flex-shrink-0 group-hover:bg-sage-200 transition-colors">
                    {val.icon}
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-neutral-800 text-sm mb-0.5">{val.title}</div>
                    <div className="text-neutral-500 text-xs font-body leading-relaxed">{val.desc}</div>
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
