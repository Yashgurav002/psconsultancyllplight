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

        {/* Organic SVG wave divider */}
        <div className="relative -mt-1 overflow-hidden">
          <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0 0 Q360 50 720 25 Q1080 0 1440 35 L1440 50 L0 50 Z" fill="#ffffff"/>
          </svg>
        </div>

        <About />

        <div className="section-divider mx-auto max-w-7xl"/>

        <Services />

        <div className="relative overflow-hidden">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0 40 Q360 0 720 20 Q1080 40 1440 10 L1440 0 L0 0 Z" fill="#F8F7F4"/>
          </svg>
        </div>

        <Programs />

        <div className="section-divider mx-auto max-w-7xl"/>

        <Partnerships />

        <Stats />

        <div className="relative overflow-hidden -mt-1">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0 0 Q480 40 960 15 Q1200 5 1440 30 L1440 40 L0 40 Z" fill="#ffffff"/>
          </svg>
        </div>

        <Testimonials />

        <div className="section-divider mx-auto max-w-7xl"/>

        <WhyUs />

        <div className="section-divider mx-auto max-w-7xl"/>

        <FAQ />

        <div className="relative overflow-hidden">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0 40 Q360 0 720 20 Q1080 40 1440 10 L1440 0 L0 0 Z" fill="#F8F7F4"/>
          </svg>
        </div>

        <Contact />
      </main>

      <Footer />
      <Analytics />
    </>
  )
}
