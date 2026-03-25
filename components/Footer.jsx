'use client'

import Image from 'next/image'
import { useReveal } from './useReveal'

const footerLinks = {
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Team', href: '#about' },
    // { label: 'Partnerships', href: '#partnerships' },
    { label: 'Why Pioneer', href: '#why-us' },
  ],
  // Programs: [
  //   { label: 'Youth Development', href: '#programs' },
  //   { label: 'International Camps', href: '#programs' },
  //   { label: 'Trial & Scouting', href: '#programs' },
  //   { label: 'Elite Performance', href: '#programs' },
  // ],
  Services: [
    // { label: 'Global Pathways', href: '#services' },
    { label: 'Elite Training', href: '#services' },
    { label: 'Player Development', href: '#services' },
    { label: 'Career Guidance', href: '#services' },
  ],
  Contact: [
    { label: 'Book Consultation', href: '#contact' },
    // { label: 'FAQ', href: '#faq' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Get Started', href: '#contact' },
  ],
}

const socialLinks = [/* KEEP SAME AS YOUR CODE */]

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Disclaimer', href: '/disclaimer' },
]

export default function Footer() {
  const { ref, visible } = useReveal(0.05)
  const year = new Date().getFullYear()

  const scrollTo = (href) => {
    if (href.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative overflow-hidden border-t border-pitch-900/30 bg-dark-900">

      {/* CTA Section */}
      <div className="relative border-b border-pitch-900/30">
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl text-white font-bold">
              Ready to Take the <span className="text-green-500">Next Step?</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Join 500+ Indian footballers already on their international journey.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => scrollTo('#contact')}
              className="px-6 py-3 bg-green-600 text-white rounded-full"
            >
              Book Consultation
            </button>
            {/* <button
              onClick={() => scrollTo('#programs')}
              className="px-6 py-3 border border-yellow-400 text-yellow-400 rounded-full"
            >
              Explore Programs
            </button> */}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 pt-16 pb-10 transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'
          }`}
      >
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-14">

          {/* LOGO SECTION */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-5">

              {/* ✅ YOUR IMAGE LOGO */}
              <Image
                src="/smalllogo.jpeg"
                alt="Pioneer Logo"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />

              <div>
                <div className="text-white font-bold">PIONEER</div>
                <div className="text-xs text-gray-400 uppercase">
                  Sports Consultancy
                </div>
              </div>
            </div>

            <p className="text-gray-500 text-sm mb-6 max-w-xs">
              India's premier football consultancy, bridging Indian talent with global opportunities.
            </p>

            {/* Socials */}
            {/* Socials */}
            <div className="flex gap-3 mt-2">

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-pitch-800 text-gray-400 hover:text-white hover:border-green-500 transition"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5C18.32 4 20 5.68 20 7.75v8.5c0 2.07-1.68 3.75-3.75 3.75h-8.5C5.68 20 4 18.32 4 16.25v-8.5C4 5.68 5.68 4 7.75 4zm8.75 1.5a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-pitch-800 text-gray-400 hover:text-white hover:border-green-500 transition"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.27 2.3-2.6 4.73-2.6C21.1 7.6 24 10.1 24 15.1V24h-5v-7.8c0-1.86-.03-4.26-2.6-4.26-2.6 0-3 2.03-3 4.12V24h-5V8z" />
                </svg>
              </a>

            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-white text-xs uppercase mb-4">{group}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault()
                          scrollTo(link.href)
                        }
                      }}
                      className="text-gray-500 hover:text-green-400 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-gray-600 text-xs">
            © {year} Pioneer Sports Consultancy
          </span>

          <div className="flex gap-5">
            {legalLinks.map((l) => (
              <a key={l.label} href={l.href} className="text-gray-600 text-xs">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}