import { Analytics } from '@vercel/analytics/react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Programs from '@/components/Programs'
import Partnerships from '@/components/Partnerships'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'
import WhyUs from '@/components/WhyUs'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* Organic SVG divider */}
        <div className="relative -mt-1 overflow-hidden">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0 0 Q360 60 720 30 Q1080 0 1440 40 L1440 60 L0 60 Z" fill="#0a120a"/>
          </svg>
        </div>

        <About />

        <div className="section-divider mx-auto max-w-7xl" />

        <Services />

        {/* Organic divider */}
        <div className="relative overflow-hidden">
          <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0 50 Q360 0 720 25 Q1080 50 1440 10 L1440 0 L0 0 Z" fill="#0a120a"/>
          </svg>
        </div>

        <Programs />

        <div className="section-divider mx-auto max-w-7xl" />

        <Partnerships />

        <Stats />

        {/* Organic divider */}
        <div className="relative overflow-hidden -mt-1">
          <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0 0 Q480 50 960 20 Q1200 5 1440 35 L1440 50 L0 50 Z" fill="#0a120a"/>
          </svg>
        </div>

        <Testimonials />

        <div className="section-divider mx-auto max-w-7xl" />

        <WhyUs />

        <div className="section-divider mx-auto max-w-7xl" />

        <FAQ />

        {/* Organic divider */}
        <div className="relative overflow-hidden">
          <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0 50 Q360 0 720 25 Q1080 50 1440 15 L1440 0 L0 0 Z" fill="#0a120a"/>
          </svg>
        </div>

        <Contact />
      </main>

      <Footer />
      <Analytics />
    </>
  )
}
