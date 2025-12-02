'use client'

import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import EventCard from './EventCard'
import { useRef, useState, useEffect } from 'react'

const EventsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  // Track scroll position for dots indicator
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft
        const cardWidth = 288 + 24 // w-72 + mr-6
        const newIndex = Math.round(scrollLeft / cardWidth)
        setActiveIndex(newIndex)
      }
    }

    const scrollElement = scrollRef.current
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll)
      return () => scrollElement.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Sample events data based on existing repos
  const events = [
    {
      id: 'ski-and-sound',
      title: 'Ski and Sound',
      subtitle: 'Ski Freestyle & Techno',
      date: '7 Dicembre 2025',
      location: 'Abetone',
      type: 'upcoming' as const,
      theme: 'winter' as const,
      coverImage: '/events/ski_sound.jpeg',
      instagramUrl: 'https://www.instagram.com/p/DRsHtvIDDV6/',
      galleryImages: [
 
      ],
    },
    {
      id: 'rossi-autumn-mix',
      title: 'Halloween Mix',
      subtitle: 'Yoga & Techno',
      date: '1 Novembre 2025',
      location: 'Alpi Apuane',
      type: 'past' as const,
      theme: 'autumn' as const,
      coverImage: '/events/halloween2.jpg',
      instagramUrl: 'https://www.instagram.com/p/DRA0zULjDdd/',
      galleryImages: [
        '/events/halloween1.jpg',
        '/events/halloween3.jpg',
      ],
    },
    {
      id: 'summer-alpine-flow',
      title: 'Summer Mix',
      subtitle: 'Climbing & Techno',
      date: '14 Giugno 2025',
      location: 'Alpi Apuane',
      type: 'past' as const,
      theme: 'summer' as const,
      coverImage: '/events/summer1.jpg',
      instagramUrl: 'https://www.instagram.com/p/DLIfW0csK4q/?img_index=1',
      galleryImages: [
        '/events/summer2.JPG',
        '/events/summer3.jpg',
      ],
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
        <div className="max-w-7xl w-full !px-8 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center !mb-16 md:!mb-20 lg:!mb-24 flex flex-col items-center !mt-20"
        >
          <h2 className="font-display text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-light text-ice-white !mb-1 md:!mb-1 tracking-widest uppercase text-center">
            Eventi
          </h2>
          <div className="w-24 md:w-32 h-px bg-ice-white/30 !mb-6 md:!mb-8"></div>
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
          className="!mb-12 md:!mb-16"
        >
          <div className="text-center !mb-6 md:!mb-8">
            <h3 className="text-xl md:text-2xl font-light text-ice-white !mb-10">Prossimo Evento</h3>
          </div>
          
          <div className="flex justify-center w-full">
            <div className="w-full max-w-md mx-auto">
            <EventCard
              event={events[0]}
              onClick={() => window.open(events[0].instagramUrl, '_blank')}
            />
            </div>
          </div>
        </motion.div>

        {/* Past Events Horizontal Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <div className="!mb-0 flex items-center justify-between">
            <h3 className="text-xl md:text-2xl font-light text-ice-white flex-1 text-center">Eventi Passati</h3>
            
            {/* Carousel dots for mobile - top right */}
            <div className="flex space-x-2 sm:hidden">
              {events.slice(1).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (scrollRef.current) {
                      const cardWidth = 288 + 24 // w-72 + mr-6
                      scrollRef.current.scrollTo({
                        left: index * cardWidth,
                        behavior: 'smooth'
                      })
                    }
                  }}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    activeIndex === index ? 'bg-[#F6B21A]' : 'border border-ice-white/50 bg-transparent'
                  }`}
                />
              ))}
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex flex-row !gap-6 sm:!gap-8 md:!gap-12 lg:!gap-28 xl:!gap-32 overflow-x-auto scrollbar-hide !pb-8 !pt-12 md:!pt-16 justify-start sm:justify-center items-center !pl-4 sm:!pl-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {events.slice(1).map((event, index) => (
              <div
                key={event.id}
                className={`flex-none transition-all duration-500 ${
                  activeIndex === index
                    ? 'w-72 sm:w-72 md:w-80 scale-100'
                    : 'w-64 sm:w-72 md:w-80 scale-90 sm:scale-100 opacity-70 sm:opacity-100'
                }`}
              >
                <EventCard
                  event={event}
                  onClick={() => window.open(event.instagramUrl, '_blank')}
                />
              </div>
            ))}

            {/* Add more events card */}
            {/* <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="flex-none w-72 md:w-80 h-96 rounded-3xl border-2 border-dashed border-ice-white/30 flex flex-col items-center justify-center text-center p-4 md:p-6 cursor-pointer hover:border-ice-white/50 transition-all duration-300"
            >
              <div className="w-12 md:w-16 h-12 md:h-16 rounded-full bg-ice-white/10 backdrop-blur-sm flex items-center justify-center !mb-3 md:!mb-4">
                <span className="text-xl md:text-2xl text-ice-white">+</span>
              </div>
              <h4 className="text-ice-white text-base md:text-lg font-light !mb-2">Altri Eventi</h4>
              <p className="text-ice-white/60 text-sm font-light leading-relaxed">
                Scopri tutti i nostri eventi passati e le esperienze vissute insieme
              </p>
            </motion.div> */}
          </div>
          
        </motion.div>
        </div>
      </div>
    </section>
  )
}

export default EventsSection