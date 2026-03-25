'use client'

import { useReveal } from './useReveal'

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.52 3.48A11.82 11.82 0 0012.01 0C5.38 0 .01 5.37 0 12c0 2.12.55 4.2 1.6 6.04L0 24l6.13-1.6A11.94 11.94 0 0012.01 24C18.63 24 24 18.63 24 12c0-3.18-1.24-6.16-3.48-8.52z" />
      </svg>
    ),
    label: 'WhatsApp',
    value: '+91 9834187364',
    href: 'https://wa.me/919834187364',
    color: '#25D366',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'hardik.pioneersports@gmail.com',
    href: 'mailto:hardik.pioneersports@gmail.com',
    color: '#fbbf24',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Office',
    value: ' Mumbai, Maharashtra, India',
    href: null,
    color: '#a78bfa',
  },
]

export default function Contact() {
  const { ref: titleRef, visible: titleVisible } = useReveal()
  const { ref: ctaRef, visible: ctaVisible } = useReveal(0.1)

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-dark-900" />
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 0% 50%, rgba(21,128,61,0.07) 0%, transparent 55%),
            radial-gradient(ellipse 60% 50% at 100% 50%, rgba(245,158,11,0.04) 0%, transparent 55%)
          `,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div
          ref={titleRef}
          className={`reveal text-center max-w-2xl mx-auto mb-16 ${titleVisible ? 'visible' : ''}`}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-pitch-700" />
            <span className="text-pitch-500 text-xs font-heading font-semibold tracking-widest uppercase">
              Get In Touch
            </span>
            <div className="h-px w-8 bg-pitch-700" />
          </div>

          <h2 className="font-heading font-black text-4xl md:text-5xl text-white mb-4 leading-tight">
            START YOUR <span className="gradient-text">JOURNEY</span>
          </h2>

          <p className="text-gray-400 font-body leading-relaxed">
            Ready to take Indian football talent to the world? Connect instantly with our team and explore what's possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-center">

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-5">
            {contactInfo.map((info, i) => (
              <div
                key={i}
                className="glass rounded-xl p-5 flex items-start gap-4 card-hover"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `${info.color}12`,
                    color: info.color,
                    border: `1px solid ${info.color}20`,
                  }}
                >
                  {info.icon}
                </div>

                <div>
                  <div className="text-gray-500 text-xs font-heading font-semibold tracking-wider uppercase mb-1">
                    {info.label}
                  </div>

                  {info.href ? (
                    <a
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-body font-medium hover:text-pitch-400 transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className="text-white font-body font-medium">
                      {info.value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div
            ref={ctaRef}
            className={`reveal-right lg:col-span-3 ${ctaVisible ? 'visible' : ''}`}
          >
            <div className="glass rounded-2xl p-8 md:p-10 text-center flex flex-col items-center justify-center">

              <h3 className="font-heading font-black text-3xl md:text-4xl text-white mb-4">
                LET'S BUILD YOUR <span className="gradient-text">SPORTS FUTURE</span>
              </h3>

              <p className="text-gray-400 font-body max-w-md mb-8">
                Chat with our team instantly on WhatsApp and kickstart your journey in professional sports.
              </p>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/919834187364"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-heading font-bold rounded-xl text-sm md:text-base transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.52 3.48A11.82 11.82 0 0012.01 0C5.38 0 .01 5.37 0 12c0 2.12.55 4.2 1.6 6.04L0 24l6.13-1.6A11.94 11.94 0 0012.01 24C18.63 24 24 18.63 24 12c0-3.18-1.24-6.16-3.48-8.52z" />
                </svg>

                Chat on WhatsApp
              </a>

              <p className="text-gray-500 text-xs mt-4">
                Typically replies within minutes ⚡
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}