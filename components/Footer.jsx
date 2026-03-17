'use client'

import { useReveal } from './useReveal'

const footerLinks = {
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Team', href: '#about' },
    { label: 'Partnerships', href: '#partnerships' },
    { label: 'Why Pioneer', href: '#why-us' },
  ],
  Programs: [
    { label: 'Youth Development', href: '#programs' },
    { label: 'International Camps', href: '#programs' },
    { label: 'Trial & Scouting', href: '#programs' },
    { label: 'Elite Performance', href: '#programs' },
  ],
  Services: [
    { label: 'Global Pathways', href: '#services' },
    { label: 'Elite Training', href: '#services' },
    { label: 'Player Development', href: '#services' },
    { label: 'Career Guidance', href: '#services' },
  ],
  Contact: [
    { label: 'Book Consultation', href: '#contact' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Get Started', href: '#contact' },
  ],
}

const socialLinks = [
  {
    label: 'Instagram', href: 'https://instagram.com/pioneersportsconsultancy',
    icon: (<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>),
  },
  {
    label: 'Twitter / X', href: 'https://twitter.com/pioneersportsIN',
    icon: (<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>),
  },
  {
    label: 'LinkedIn', href: 'https://linkedin.com/company/pioneer-sports-consultancy',
    icon: (<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>),
  },
  {
    label: 'YouTube', href: 'https://youtube.com/@pioneersportsconsultancy',
    icon: (<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>),
  },
  {
    label: 'WhatsApp', href: 'https://wa.me/919876543210',
    icon: (<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>),
  },
]

export default function Footer() {
  const { ref, visible } = useReveal(0.05)
  const year = new Date().getFullYear()

  const scrollTo = (href) => {
    if (href.startsWith('#')) document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden border-t border-neutral-200 bg-white">
      {/* Top CTA banner */}
      <div className="border-b border-neutral-200 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading font-black text-2xl md:text-3xl text-neutral-900 mb-1">
                Ready to Take the <span className="gradient-text">Next Step?</span>
              </h3>
              <p className="text-neutral-500 font-body text-sm">Join 500+ Indian footballers already on their international journey.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <button onClick={() => scrollTo('#contact')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-sage-600 hover:bg-sage-700 text-white font-heading font-bold text-sm rounded-full transition-all duration-300 hover:scale-105 shadow-sage">
                Book Consultation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
              </button>
              <button onClick={() => scrollTo('#programs')}
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-amber-300 text-amber-600 hover:bg-amber-50 font-heading font-bold text-sm rounded-full transition-all duration-300">
                Explore Programs
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-14">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="20" cy="20" r="19" stroke="#3D6B4F" strokeWidth="1.5"/>
                  <circle cx="20" cy="20" r="14" stroke="#3D6B4F" strokeWidth="0.8" strokeDasharray="3 2"/>
                  <path d="M20 6 L20 34 M6 20 L34 20" stroke="#5A8A6A" strokeWidth="0.8"/>
                  <circle cx="20" cy="20" r="4" fill="#C17D2E"/>
                  <path d="M11 11 Q20 6 29 11 Q34 20 29 29 Q20 34 11 29 Q6 20 11 11Z" stroke="#8BB89A" strokeWidth="0.6" fill="none"/>
                </svg>
              </div>
              <div>
                <div className="font-heading font-bold text-base leading-tight text-neutral-900">PIONEER</div>
                <div className="font-body text-[10px] text-sage-500 tracking-widest uppercase leading-none">Sports Consultancy</div>
              </div>
            </div>
            <p className="text-neutral-500 font-body text-sm leading-relaxed mb-6 max-w-xs">
              India's premier football consultancy, bridging the gap between Indian talent and global football opportunities. Founded by Real Madrid Graduate School alumni Hardik Sheth.
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-8 h-8 rounded-lg border border-neutral-200 bg-neutral-50 flex items-center justify-center text-neutral-500 hover:text-sage-600 hover:border-sage-200 hover:bg-sage-50 transition-all duration-200">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="col-span-1">
              <h4 className="font-heading font-bold text-neutral-900 text-xs uppercase tracking-widest mb-4">{group}</h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link.label}>
                    <a href={link.href}
                      onClick={e => { if (link.href.startsWith('#')) { e.preventDefault(); scrollTo(link.href) } }}
                      className="text-neutral-500 hover:text-sage-600 font-body text-sm transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="section-divider mb-7"/>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-neutral-400 font-body text-xs">© {year} Pioneer Sports Consultancy. All rights reserved.</span>
            <span className="text-neutral-300 hidden md:inline">·</span>
            <span className="text-neutral-400 font-body text-xs hidden md:inline">Ahmedabad, Gujarat, India</span>
          </div>
          <div className="flex items-center gap-5">
            {['Privacy Policy', 'Terms of Service', 'Disclaimer'].map(l => (
              <a key={l} href="#" className="text-neutral-400 hover:text-neutral-600 font-body text-xs transition-colors">{l}</a>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="font-heading font-black text-[clamp(1.5rem,4vw,3rem)] leading-none tracking-tight text-neutral-100">
            FROM INDIAN DREAMS TO GLOBAL ARENAS
          </p>
        </div>
      </div>
    </footer>
  )
}
