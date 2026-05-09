import Hero from '@/components/sections/Hero'
import Marquee from '@/components/sections/Marquee'
import Work from '@/components/sections/Work'
import About from '@/components/sections/About'
import Stack from '@/components/sections/Stack'
import Services from '@/components/sections/Services'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Work />
      <About />
      <Stack />
      <Services />
      <Contact />
    </>
  )
}
