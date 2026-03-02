import Navbar from '@/components/site/Navbar'
import Footer from '@/components/site/Footer'
import Hero from '@/components/landing/Hero'
import Features from '@/components/landing/Features'
import ComponentStrip from '@/components/landing/ComponentStrip'
import CTA from '@/components/landing/CTA'

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ComponentStrip />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
