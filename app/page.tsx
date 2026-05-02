import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Gallery from "@/components/Gallery";
import WhyChoose from "@/components/WhyChoose";
import Amenities from "@/components/Amenities";
import Reviews from "@/components/Reviews";
import Social from "@/components/Social";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import MapSection from "@/components/MapSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

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
      <FAQ />
      <Contact />
      <MapSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
