'use client'

import { useState } from 'react'
import { useReveal } from './useReveal'

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
      </svg>
    ),
    label: 'Phone',
    value: '+91 7028981188',
    href: 'tel:+919876543210',
    color: '#4ade80',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
    label: 'Email',
    value: 'info@pioneersports.in',
    href: 'mailto:info@pioneersports.in',
    color: '#fbbf24',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
    label: 'Office',
    value: 'Ahmedabad, Gujarat, India',
    href: null,
    color: '#a78bfa',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: 'New Inquiry from Pioneer Sports Website',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const { ref: titleRef, visible: titleVisible } = useReveal()
  const { ref: formRef, visible: formVisible } = useReveal(0.1)

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) errs.name = 'Name is required'
    if (!formData.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Enter a valid email'
    if (!formData.message.trim()) errs.message = 'Message is required'
    else if (formData.message.trim().length < 20) errs.message = 'Message must be at least 20 characters'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setStatus('loading')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Replace with your actual key
          ...formData,
          from_name: formData.name,
          replyto: formData.email,
        }),
      })

      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '', subject: 'New Inquiry from Pioneer Sports Website' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-dark-900" />
      <div className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 0% 50%, rgba(21,128,61,0.07) 0%, transparent 55%),
            radial-gradient(ellipse 60% 50% at 100% 50%, rgba(245,158,11,0.04) 0%, transparent 55%)
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
            <div className="h-px w-8 bg-pitch-700" />
            <span className="text-pitch-500 text-xs font-heading font-semibold tracking-widest uppercase">Get In Touch</span>
            <div className="h-px w-8 bg-pitch-700" />
          </div>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-white mb-4 leading-tight">
            START YOUR <span className="gradient-text">JOURNEY</span>
          </h2>
          <p className="text-gray-400 font-body leading-relaxed">
            Ready to take Indian football talent to the world? Whether you're an athlete, a parent, or a coach — reach out and let's explore what's possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-5">
            {contactInfo.map((info, i) => (
              <div
                key={i}
                className="glass rounded-xl p-5 flex items-start gap-4 card-hover"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${info.color}12`, color: info.color, border: `1px solid ${info.color}20` }}
                >
                  {info.icon}
                </div>
                <div>
                  <div className="text-gray-500 text-xs font-heading font-semibold tracking-wider uppercase mb-1">{info.label}</div>
                  {info.href ? (
                    <a href={info.href} className="text-white font-body font-medium hover:text-pitch-400 transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <span className="text-white font-body font-medium">{info.value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* CTA cards */}
            <div
              className="glass-gold rounded-xl p-6 text-center border border-gold-500/20"
              style={{ background: 'rgba(30,20,5,0.6)' }}
            >
              <div className="text-gold-400 font-heading font-bold text-lg mb-2">Book a Consultation</div>
              <p className="text-gray-400 font-body text-sm mb-4">
                Schedule a free 30-minute call with our team to discuss your football ambitions.
              </p>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold-500 hover:bg-gold-400 text-dark-900 font-heading font-bold text-sm rounded-full transition-all duration-300 hover:scale-105"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                Call Now
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div
            ref={formRef}
            className={`reveal-right lg:col-span-3 ${formVisible ? 'visible' : ''}`}
          >
            <div className="glass rounded-2xl p-7 md:p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Send a Message</h3>
              <p className="text-gray-500 font-body text-sm mb-6">We'll get back to you within 24 hours.</p>

              {status === 'success' ? (
                <div className="py-14 text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-pitch-700/30 border border-pitch-600/40 flex items-center justify-center mb-5">
                    <svg className="w-8 h-8 text-pitch-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <h4 className="font-heading font-bold text-xl text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-400 font-body text-sm mb-5">Thanks for reaching out. We'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-sm font-heading text-pitch-400 hover:text-pitch-300 underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-heading font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                        Full Name <span className="text-pitch-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Arjun Mehta"
                        className={`form-input ${errors.name ? 'border-red-500/60 focus:border-red-500' : ''}`}
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1 font-body">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-heading font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                        Email <span className="text-pitch-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="arjun@example.com"
                        className={`form-input ${errors.email ? 'border-red-500/60 focus:border-red-500' : ''}`}
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1 font-body">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                      Phone <span className="text-gray-600">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                      Message <span className="text-pitch-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about yourself, your football background, and what you're looking for..."
                      className={`form-input resize-none ${errors.message ? 'border-red-500/60 focus:border-red-500' : ''}`}
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1 font-body">{errors.message}</p>}
                  </div>

                  {status === 'error' && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-body">
                      Something went wrong. Please try again or contact us directly.
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-3 pt-1">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-pitch-600 hover:bg-pitch-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-heading font-bold text-sm rounded-xl transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-pitch-600/20"
                    >
                      {status === 'loading' ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Start Your Journey
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                          </svg>
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
                      className="flex-1 flex items-center justify-center gap-2 py-3.5 border border-gold-500/30 text-gold-400 hover:bg-gold-500/10 font-heading font-bold text-sm rounded-xl transition-all duration-300"
                    >
                      Explore Programs
                    </button>
                  </div>

                  <p className="text-gray-600 text-xs font-body text-center">
                    By submitting, you agree to our Privacy Policy. We never share your information.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
