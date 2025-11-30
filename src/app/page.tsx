import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import EventsSection from '@/components/EventsSection'
import BrandSection from '@/components/BrandSection'

export default function Home() {
  return (
    <div className="bg-slate-grey">
      <Navbar />
      <Hero />
      <AboutSection />
      <EventsSection />
      <BrandSection />
    </div>
  );
}
