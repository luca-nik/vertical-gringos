import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SkiSoundSection from '@/components/SkiSoundSection'
import MissionSection from '@/components/MissionSection'
import EventsSection from '@/components/EventsSection'
import BrandSection from '@/components/BrandSection'
import ContactSection from '@/components/ContactSection'
import AboutSection from '@/components/AboutSection'

/**
 * CSS RESET & TAILWIND MARGINS/PADDING IMPORTANT NOTE:
 * 
 * This project uses a global CSS reset in globals.css that sets `margin: 0` on all elements (*).
 * This means that Tailwind margin classes (mb-, mt-, mx-, my-, etc.) will NOT work unless you use !important.
 * 
 * SOLUTIONS:
 * 1. Use !important with margins: !mb-8, !mt-4, !mx-auto, etc.
 * 2. Prefer using `gap` with flex/grid layouts: flex flex-col gap-8
 * 3. Use `space-y-` and `space-x-` utilities for spacing between children
 * 
 * EXAMPLES:
 * ❌ <div className="mb-8">          // Won't work due to CSS reset
 * ✅ <div className="!mb-8">         // Works with !important
 * ✅ <div className="flex flex-col gap-8">  // Better approach
 * ✅ <div className="space-y-8">     // Good for multiple children
 */

export default function Home() {
  return (
    <div className="bg-slate-grey w-full min-h-screen">
      <Navbar />
      <Hero />
      <SkiSoundSection />
      <MissionSection />
      <EventsSection />
      <AboutSection />
      {/*<BrandSection />*/}
      <ContactSection />
    </div>
  );
}
