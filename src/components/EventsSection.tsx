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
      coverImage: '/api/placeholder/600/400',
      galleryImages: [
        '/api/placeholder/600/400',
        '/api/placeholder/600/401',
        '/api/placeholder/600/402'
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
      coverImage: '/api/placeholder/600/400',
      galleryImages: [
        '/api/placeholder/600/400',
        '/api/placeholder/600/401',
        '/api/placeholder/600/402',
        '/api/placeholder/600/403'
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
      coverImage: '/api/placeholder/600/400',
      galleryImages: [
        '/api/placeholder/600/400',
        '/api/placeholder/600/401'
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
    <section id="eventi" className="py-20 bg-gradient-to-b from-slate-grey to-midnight-blue">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light text-ice-white mb-4 tracking-tight">
            Eventi
          </h2>
          <p className="text-xl text-ice-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            Momenti indimenticabili tra montagne e musica. Dalle piste innevate ai rifugi estivi,
            ogni evento è un&apos;esperienza di puro flow.
          </p>
        </motion.div>

        {/* Featured Event - Next Upcoming */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-light text-ice-white mb-2">Prossimo Evento</h3>
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
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-light text-ice-white">Eventi Passati</h3>
            
            <div className="flex space-x-2">
              <button
                onClick={() => scroll('left')}
                className="p-3 rounded-full bg-ice-white/10 backdrop-blur-sm border border-ice-white/20 text-ice-white hover:bg-ice-white/20 transition-all duration-300"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-3 rounded-full bg-ice-white/10 backdrop-blur-sm border border-ice-white/20 text-ice-white hover:bg-ice-white/20 transition-all duration-300"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {events.slice(1).map((event, index) => (
              <div key={event.id} className="flex-none w-80">
                <EventCard 
                  event={event} 
                  onClick={() => console.log('Open event recap')}
                />
              </div>
            ))}
            
            {/* Add more events card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="flex-none w-80 h-96 rounded-3xl border-2 border-dashed border-ice-white/30 flex flex-col items-center justify-center text-center p-6 cursor-pointer hover:border-ice-white/50 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-ice-white/10 backdrop-blur-sm flex items-center justify-center mb-4">
                <span className="text-2xl text-ice-white">+</span>
              </div>
              <h4 className="text-ice-white text-lg font-light mb-2">Altri Eventi</h4>
              <p className="text-ice-white/60 text-sm font-light leading-relaxed">
                Scopri tutti i nostri eventi passati e le esperienze vissute insieme
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default EventsSection