'use client'

import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import EventCard from './EventCard'
import { useRef } from 'react'

const EventsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Sample events data based on existing repos
  const events = [
    {
      id: 'ski-and-sound',
      title: 'Ski and Sound',
      subtitle: 'Winter Aesthetic Experience',
      date: '15 Febbraio 2025',
      location: 'Rifugio Alpino, Val di Fassa',
      type: 'upcoming' as const,
      theme: 'winter' as const,
      coverImage: 'https://source.unsplash.com/800x600/?skiing,snow,party',
      galleryImages: [
        'https://source.unsplash.com/800x600/?ski,alpine,music',
        'https://source.unsplash.com/800x601/?winter,party,mountain',
        'https://source.unsplash.com/800x602/?snow,dj,festival'
      ],
      description: 'Un weekend che unisce sci alpino e musica elettronica in alta quota',
      attendees: 50,
      lineup: ['Aurora Electronics', 'Mountain Beats', 'Alpine Flow']
    },
    {
      id: 'rossi-autumn-mix',
      title: 'Rossi Autumn Mix',
      subtitle: 'Halloween nelle Apuane',
      date: '1 Novembre 2024',
      location: 'Rifugio E. Rossi',
      type: 'past' as const,
      theme: 'autumn' as const,
      coverImage: 'https://source.unsplash.com/800x600/?rave,dj,sunset',
      galleryImages: [
        'https://source.unsplash.com/800x600/?halloween,party,mountain',
        'https://source.unsplash.com/800x601/?autumn,festival,music',
        'https://source.unsplash.com/800x602/?dj,crowd,outdoor',
        'https://source.unsplash.com/800x603/?sunset,rave,nature'
      ],
      description: 'DJ set in quota con workshops di yoga e fotografia',
      attendees: 185,
      lineup: ['El Doganero', 'Local Artists']
    },
    {
      id: 'summer-alpine-flow',
      title: 'Alpine Summer Flow',
      subtitle: 'Climbing & Chill Vibes',
      date: '21 Luglio 2024',
      location: 'Val di Mello',
      type: 'past' as const,
      theme: 'summer' as const,
      coverImage: 'https://source.unsplash.com/800x600/?climbing,music,alpine',
      galleryImages: [
        'https://source.unsplash.com/800x600/?rock,climbing,summer',
        'https://source.unsplash.com/800x601/?alpine,party,nature'
      ],
      description: 'Arrampicata sportiva e musica ambient nelle Alpi',
      attendees: 75,
      lineup: ['Ambient Collective', 'Nature Sounds']
    }
  ]

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="eventi" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-slate-grey via-midnight-blue to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 radial-glow opacity-30" />
      <div className="w-full flex justify-center relative z-10">
        <div className="max-w-7xl w-full px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20 lg:mb-24 flex flex-col items-center"
        >
          <h2 className="font-display text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-light text-ice-white mb-6 md:mb-8 tracking-widest uppercase text-center">
            Eventi
          </h2>
          <div className="w-24 md:w-32 h-px bg-ice-white/30 mb-6 md:mb-8"></div>
          <div className="flex justify-center w-full">
            <p className="text-lg md:text-xl text-ice-white/80 max-w-2xl font-light leading-relaxed text-center">
              Momenti indimenticabili tra montagne e musica. Dalle piste innevate ai rifugi estivi,
              ogni evento è un&apos;esperienza di puro flow.
            </p>
          </div>
        </motion.div>

        {/* Featured Event - Next Upcoming */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mb-12 md:mb-16"
        >
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-light text-ice-white mb-2">Prossimo Evento</h3>
            <p className="text-ice-white/60 font-light">L&apos;esperienza che ti aspetta</p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <EventCard 
              event={events[0]} 
              onClick={() => console.log('Open event details')}
            />
          </div>
        </motion.div>

        {/* Past Events Horizontal Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-light text-ice-white">Eventi Passati</h3>
            
            <div className="flex space-x-1 md:space-x-2">
              <button
                onClick={() => scroll('left')}
                className="p-2 md:p-3 rounded-full bg-ice-white/10 backdrop-blur-sm border border-ice-white/20 text-ice-white hover:bg-ice-white/20 transition-all duration-300"
              >
                <ChevronLeft className="h-4 md:h-5 w-4 md:w-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-2 md:p-3 rounded-full bg-ice-white/10 backdrop-blur-sm border border-ice-white/20 text-ice-white hover:bg-ice-white/20 transition-all duration-300"
              >
                <ChevronRight className="h-4 md:h-5 w-4 md:w-5" />
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex space-x-4 md:space-x-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {events.slice(1).map((event) => (
              <div key={event.id} className="flex-none w-72 md:w-80">
                <EventCard 
                  event={event} 
                  onClick={() => console.log('Open event recap')}
                />
              </div>
            ))}
            
            {/* Add more events card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="flex-none w-72 md:w-80 h-96 rounded-3xl border-2 border-dashed border-ice-white/30 flex flex-col items-center justify-center text-center p-4 md:p-6 cursor-pointer hover:border-ice-white/50 transition-all duration-300"
            >
              <div className="w-12 md:w-16 h-12 md:h-16 rounded-full bg-ice-white/10 backdrop-blur-sm flex items-center justify-center mb-3 md:mb-4">
                <span className="text-xl md:text-2xl text-ice-white">+</span>
              </div>
              <h4 className="text-ice-white text-base md:text-lg font-light mb-2">Altri Eventi</h4>
              <p className="text-ice-white/60 text-sm font-light leading-relaxed">
                Scopri tutti i nostri eventi passati e le esperienze vissute insieme
              </p>
            </motion.div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  )
}

export default EventsSection