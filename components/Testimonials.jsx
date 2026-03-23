'use client'

import { useReveal } from './useReveal'

const testimonials = [
  {
    name: 'Arjun Mehta',
    role: 'Player · Age 19',
    location: 'Mumbai, Maharashtra',
    content: 'Pioneer Sports completely changed the trajectory of my career. I went from playing in local Mumbai leagues to completing a trial at a Spanish academy — something I never thought was possible. The coaching methodology, the contacts, the entire system Hardik has built is unlike anything available in India. I now train every day knowing exactly what standard I need to hit internationally.',
    outcome: 'Completed trial at Spanish academy, now in final selection',
    avatar: 'AM',
    avatarBg: 'linear-gradient(135deg, #15803d, #22c55e)',
    highlight: '#4ade80',
  },
  {
    name: 'Priya Sharma',
    role: 'Parent',
    location: 'Ahmedabad, Gujarat',
    content: 'As a parent, you always worry whether a consultancy is genuine or just taking money. Pioneer Sports was completely transparent from day one. Hardik sat with us for over an hour explaining exactly what the program involved, what was realistic, and what wasn\'t. My son has grown not just as a footballer but as a disciplined young man. The international camp experience was genuinely life-changing.',
    outcome: 'Son enrolled in International Training Camp — Dubai edition',
    avatar: 'PS',
    avatarBg: 'linear-gradient(135deg, #d97706, #f59e0b)',
    highlight: '#fbbf24',
  },
  {
    name: 'Coach Rajesh Nair',
    role: 'Football Coach · ISL Academy',
    location: 'Kochi, Kerala',
    content: 'I\'ve seen many consultancies come and go but Pioneer operates on a completely different level. The European methodology they\'ve embedded into their training philosophy is something I\'ve only seen in foreign setups. Hardik\'s Real Madrid education is clearly not just a credential — it\'s visible in every drill design and development framework. I actively recommend players to Pioneer because I know they\'ll come back better.',
    outcome: 'Referred 12 players from his academy to Pioneer programs',
    avatar: 'RN',
    avatarBg: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
    highlight: '#a78bfa',
  },
]

function TestimonialCard({ testimonial, index }) {
  const { ref, visible } = useReveal(0.1)

  return (
    <div
      ref={ref}
      className={`reveal glass card-hover rounded-2xl p-7 flex flex-col ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
        ))}
      </div>

      {/* Quote */}
      <div className="testimonial-quote flex-1 mb-6">
        <p className="text-gray-300 font-body text-sm leading-relaxed italic">
          "{testimonial.content}"
        </p>
      </div>

      {/* Outcome badge */}
      <div
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-heading font-semibold mb-5"
        style={{ background: `${testimonial.highlight}12`, color: testimonial.highlight, border: `1px solid ${testimonial.highlight}20` }}
      >
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
        </svg>
        {testimonial.outcome}
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 border-t border-white/5 pt-5">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-heading font-bold text-sm flex-shrink-0"
          style={{ background: testimonial.avatarBg }}
        >
          {testimonial.avatar}
        </div>
        <div>
          <div className="font-heading font-semibold text-white text-sm">{testimonial.name}</div>
          <div className="text-gray-500 text-xs font-body">{testimonial.role} · {testimonial.location}</div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const { ref, visible } = useReveal()

  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-dark-800" />
      <div className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 50% 0%, rgba(21,128,61,0.07) 0%, transparent 55%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`reveal text-center max-w-2xl mx-auto mb-14 ${visible ? 'visible' : ''}`}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-pitch-700" />
            <span className="text-pitch-500 text-xs font-heading font-semibold tracking-widest uppercase">Real Stories</span>
            <div className="h-px w-8 bg-pitch-700" />
          </div>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-white mb-4 leading-tight">
            WHAT OUR <span className="gradient-text">ATHLETES SAY</span>
          </h2>
          <p className="text-gray-400 font-body leading-relaxed">
            Don't take our word for it — hear directly from players, parents, and coaches who've experienced the Pioneer difference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
