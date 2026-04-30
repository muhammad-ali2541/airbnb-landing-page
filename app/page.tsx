import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Gallery from '@/components/Gallery'
import WhyChoose from '@/components/WhyChoose'
import Amenities from '@/components/Amenities'
import Reviews from '@/components/Reviews'
import Social from '@/components/Social'
import Contact from '@/components/Contact'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Stats />
      <Gallery />
      <WhyChoose />
      <Amenities />
      <Reviews />
      <Social />
      <Contact />
      <FinalCTA />
      <Footer />
    </main>
  )
}
