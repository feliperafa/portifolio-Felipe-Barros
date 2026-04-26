import BackToTop from '@/components/ui/BackToTop'
import CursorEffect from '@/components/ui/CursorEffect'
import OrbBackground from '@/components/ui/OrbBackground'
import ScrollRevealInit from '@/components/ui/ScrollRevealInit'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Education from '@/components/sections/Education'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <CursorEffect />
      <OrbBackground />
      <ScrollRevealInit />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
