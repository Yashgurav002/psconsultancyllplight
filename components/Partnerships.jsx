'use client'

import { useReveal } from './useReveal'

const partners = [
  { name: 'Real Madrid Graduate School', type: 'Education Partner', region: 'Spain', tier: 'featured' },
  { name: 'Football Federation of Portugal', type: 'Governing Body', region: 'Portugal', tier: 'premium' },
  { name: 'Spanish Football Academy', type: 'Training Academy', region: 'Spain', tier: 'standard' },
  { name: 'Dubai Football Club', type: 'Partner Club', region: 'UAE', tier: 'standard' },
  { name: 'Southeast Asia Football Alliance', type: 'Regional Partner', region: 'SE Asia', tier: 'standard' },
  { name: 'Indian Football Association', type: 'Domestic Body', region: 'India', tier: 'standard' },
  { name: 'EuroScout Network', type: 'Scouting Agency', region: 'Europe', tier: 'standard' },
  { name: 'Global Football Institute', type: 'Education Partner', region: 'International', tier: 'standard' },
]

const trustBadges = [
  { label: '15+', sub: 'Partner Clubs' },
  { label: '5+', sub: 'Countries' },
  { label: '8+', sub: 'Academies' },
  { label: '100%', sub: 'Verified Partners' },
]

export default function Partnerships() {
  const { ref: titleRef, visible: titleVisible } = useReveal()
  const { ref: futrRef, visible: futrVisible } = useReveal(0.15)
  const { ref: badgeRef, visible: badgeVisible } = useReveal(0.15)

  return (
    <section id="partnerships" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-dark-900" />
      <div className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 60% at 0% 50%, rgba(245,158,11,0.05) 0%, transparent 55%),
            radial-gradient(ellipse 40% 60% at 100% 50%, rgba(21,128,61,0.06) 0%, transparent 55%)
          `
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={titleRef}
          className={`reveal text-center max-w-2xl mx-auto mb-16 ${titleVisible ? 'visible' : ''}`}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold-600" />
            <span className="text-gold-500 text-xs font-heading font-semibold tracking-widest uppercase">Global Network</span>
            <div className="h-px w-8 bg-gold-600" />
          </div>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-white mb-4 leading-tight">
            WORLD-CLASS <span className="gradient-text-gold">PARTNERSHIPS</span>
          </h2>
          <p className="text-gray-400 font-body leading-relaxed">
            Our credibility is built on real relationships with real institutions — from elite European academies to international football governing bodies.
          </p>
        </div>

        {/* Paulo Futre Feature */}
        <div
          ref={futrRef}
          className={`reveal mb-14 ${futrVisible ? 'visible' : ''}`}
        >
          <div
            className="relative overflow-hidden rounded-2xl glass-gold p-8 md:p-12"
            style={{ background: 'linear-gradient(135deg, rgba(15,26,15,0.8) 0%, rgba(30,20,5,0.8) 100%)' }}
          >
            {/* Gold glow */}
            <div
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-10 blob-animate"
              style={{ background: 'radial-gradient(circle, #f59e0b, transparent)' }}
            />

            <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
              {/* Portrait */}
              <div className="md:col-span-1">
                <div className="relative w-48 mx-auto md:mx-0">
                  <div className="absolute inset-0 rounded-2xl opacity-30 blob-animate"
                    style={{ background: 'linear-gradient(135deg, #f59e0b, #15803d)', filter: 'blur(20px)' }}
                  />
                  <div className="relative glass-gold rounded-2xl overflow-hidden p-1">
                    <div className="rounded-xl overflow-hidden" style={{ aspectRatio: '3/4' }}>
                      <div className="w-full h-full bg-gradient-to-br from-yellow-900/40 to-dark-800 flex flex-col items-center justify-center p-6">
                        <div className="w-20 h-20 rounded-full bg-gold-500/20 border-2 border-gold-500/40 flex items-center justify-center mb-3">
                          <svg className="w-10 h-10 text-gold-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                          </svg>
                        </div>
                        <div className="text-gold-400 font-heading font-bold text-center">PAULO FUTRE</div>
                        <div className="text-gray-400 text-xs text-center mt-1">Portuguese Legend</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-heading font-semibold tracking-wider mb-4">
                  ⭐ FEATURED AMBASSADOR
                </div>
                <h3 className="font-heading font-black text-3xl md:text-4xl text-white mb-1">
                  Paulo Futre
                </h3>
                <p className="text-gold-400 font-heading font-semibold text-sm mb-4">
                  Portuguese Football Legend · Former Atlético Madrid & Porto
                </p>
                <p className="text-gray-300 font-body leading-relaxed mb-5 text-sm">
                  One of Portugal's most celebrated football icons, Paulo Futre brings unparalleled credibility and global football connections to Pioneer Sports Consultancy. His partnership validates our mission and opens doors at the highest levels of the European football establishment.
                </p>
                <p className="text-gray-400 font-body leading-relaxed text-sm mb-6">
                  With his first-hand experience navigating European football at the elite level, Futre provides strategic guidance, mentorship pathways, and direct access to a network built over decades of professional play and post-career involvement in the sport's global ecosystem.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Atlético Madrid', 'FC Porto', 'Sporting CP', 'Portuguese NT', 'FIFA Ambassador'].map((c, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-xs font-heading font-medium text-gold-400 bg-gold-500/10 border border-gold-500/20">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partner grid */}
        <div
          ref={badgeRef}
          className={`reveal ${badgeVisible ? 'visible' : ''}`}
        >
          <h3 className="font-heading font-bold text-center text-white text-lg mb-8">
            Our Global Partner Network
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {partners.map((p, i) => (
              <div
                key={i}
                className="glass card-hover rounded-xl p-5 text-center"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                {/* Icon placeholder */}
                <div className="w-10 h-10 mx-auto rounded-lg bg-pitch-950/60 border border-pitch-800/40 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-pitch-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/>
                  </svg>
                </div>
                <div className="font-heading font-semibold text-white text-xs mb-1 leading-tight">{p.name}</div>
                <div className="text-gray-500 text-[10px] font-body">{p.type}</div>
                <div className="mt-2 inline-block px-2 py-0.5 rounded-full text-[10px] bg-pitch-950/60 text-pitch-500 border border-pitch-800/30">
                  {p.region}
                </div>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6">
            {trustBadges.map((b, i) => (
              <div key={i} className="text-center">
                <div className="font-heading font-black text-3xl text-gold-400 stat-number">{b.label}</div>
                <div className="text-gray-500 text-xs font-body uppercase tracking-wider">{b.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
