import ScrollReveal from '@/components/ScrollReveal'
import Nav from '@/components/sections/Nav'
import Hero from '@/components/sections/Hero'
import Pillars from '@/components/sections/Pillars'
import Methodology from '@/components/sections/Methodology'
import Journey from '@/components/sections/Journey'
import Services from '@/components/sections/Services'
import Workshops from '@/components/sections/Workshops'
import Courses from '@/components/sections/Courses'
import Testimonials from '@/components/sections/Testimonials'
import Social from '@/components/sections/Social'
import FinalCta from '@/components/sections/FinalCta'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Nav />
      <main>
        <Hero />
        <Pillars />
        <Methodology />
        <Journey />
        <Services />
        <Workshops />
        <Courses />
        <Testimonials />
        <Social />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
