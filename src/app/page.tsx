import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SkiSoundSection from '@/components/SkiSoundSection'
import AboutSection from '@/components/AboutSection'
import EventsSection from '@/components/EventsSection'
import BrandSection from '@/components/BrandSection'

export default function Home() {
  return (
    <div className="bg-slate-grey w-full min-h-screen">
      <Navbar />
      <Hero />
      <SkiSoundSection />
      <AboutSection />
      <EventsSection />
      {/*<BrandSection />*/}
    </div>
  );
}
