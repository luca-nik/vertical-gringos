'use client'

import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import EventCard from './EventCard'
import { useRef, useState, useEffect } from 'react'

const EventsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  // Track scroll position for dots indicator (nearest card to center)
  useEffect(() => {
    const handleScroll = () => {
      const container = scrollRef.current
      if (container) {
        const cards = Array.from(container.getElementsByClassName('event-card')) as HTMLElement[]
        if (cards.length === 0) return
        const viewportCenter = container.scrollLeft + container.clientWidth / 2
        let nearestIndex = 0
        let minDistance = Number.MAX_VALUE
        cards.forEach((card, idx) => {
          const center = card.offsetLeft + card.offsetWidth / 2
          const distance = Math.abs(center - viewportCenter)
          if (distance < minDistance) {
            minDistance = distance
            nearestIndex = idx
          }
        })
        setActiveIndex(nearestIndex)
      }
    }

    const scrollElement = scrollRef.current
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll)
      handleScroll()
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
    },
    {
      id: 'six-a-vecchiano',
      title: '6 A Vecchiano',
      subtitle: 'Climbing & Chill Electronic',
      date: '15 Maggio 2025',
      location: 'Falesia di Avane',
      type: 'past' as const,
      theme: 'spring' as const,
      coverImage: '/events/vecchiano1.jpg',
      instagramUrl: 'https://www.instagram.com/p/DJwLLaosER5/?img_index=1',
      galleryImages: [
        '/events/vecchiano2.jpg',
        '/events/vecchiano3.jpg'
      ],
    }
  ]

  const getCardStride = () => {
    const container = scrollRef.current
    if (container) {
      const cards = Array.from(container.getElementsByClassName('event-card')) as HTMLElement[]
      if (cards.length > 0) {
        const first = cards[0]
        const second = cards[1]
        const gap = second
          ? second.offsetLeft - first.offsetLeft - first.offsetWidth
          : 24
        return first.offsetWidth + gap
      }
    }
    return 320
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = getCardStride()
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  // Center first card on mount for large screens
  useEffect(() => {
    const container = scrollRef.current
    if (!container) return
    const cards = Array.from(container.getElementsByClassName('event-card')) as HTMLElement[]
    if (cards.length === 0) return
    const first = cards[0]
    const target = first.offsetLeft + first.offsetWidth / 2 - container.clientWidth / 2
    container.scrollLeft = Math.max(target, 0)
    setActiveIndex(0)
  }, [])

  return (
    <section id="eventi" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 radial-glow opacity-30" />
      <div className="w-full flex justify-center relative z-10">
        <div className="max-w-7xl w-full !px-8 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center !mb-10 md:!mb-14 lg:!mb-16 flex flex-col items-center !mt-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="font-display text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-light text-ice-white !mb-1 md:!mb-1 tracking-widest uppercase text-center"
          >
            Eventi
          </motion.h2>
          <div className="w-24 md:w-32 h-px bg-ice-white/30 !mb-6 md:!mb-8"></div>
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
          className="relative"
        >
          <div className="!mb-0 flex items-center justify-between">
            <h3 className="text-xl md:text-2xl font-light text-ice-white flex-1 text-center">Eventi Passati</h3>
            
            {/* Carousel dots for mobile - top right */}
            <div className="flex space-x-2 sm:hidden">
              {events.slice(1).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const container = scrollRef.current
                    if (container) {
                      const cards = Array.from(container.getElementsByClassName('event-card')) as HTMLElement[]
                      const cardWidth = getCardStride()
                      const startOffset = cards[0]?.offsetLeft ?? 0
                      container.scrollTo({
                        left: startOffset + index * cardWidth,
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

          {/* Desktop navigation arrows */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex items-center justify-center absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-ice-white/10 border border-ice-white/20 backdrop-blur-sm text-ice-white hover:bg-ice-white/20 transition"
            aria-label="Scroll eventi precedenti"
            type="button"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="hidden md:flex items-center justify-center absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-ice-white/10 border border-ice-white/20 backdrop-blur-sm text-ice-white hover:bg-ice-white/20 transition"
            aria-label="Scroll eventi successivi"
            type="button"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="md:px-8 lg:px-16 flex justify-center">
            <div className="max-w-5xl lg:max-w-4xl w-full">
              <div
                ref={scrollRef}
                className="flex flex-row !gap-5 sm:!gap-7 md:!gap-10 lg:!gap-12 overflow-x-auto scrollbar-hide !pb-8 !pt-12 md:!pt-16 justify-start items-center !pl-4 sm:!pl-6 md:!pl-8 lg:!pl-20 !pr-20 md:!pr-24 lg:!pr-40 snap-x snap-mandatory snap-always"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <div className="flex-none w-0 sm:w-6 md:w-16 lg:w-40" aria-hidden />
                {events.slice(1).map((event, index) => (
                  <div
                    key={event.id}
                    className={`event-card flex-none snap-center transition-all duration-500 ${
                      activeIndex === index
                        ? 'w-72 sm:w-80 md:w-[26rem] lg:w-[30rem] scale-100 opacity-100'
                        : 'w-56 sm:w-64 md:w-72 lg:w-64 scale-90 md:scale-75 opacity-60 md:opacity-35'
                    }`}
                  >
                    <EventCard
                      event={event}
                      onClick={() => window.open(event.instagramUrl, '_blank')}
                    />
                  </div>
                ))}
                <div className="flex-none w-0 sm:w-6 md:w-16 lg:w-40" aria-hidden />
              </div>
            </div>
          </div>

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

        </motion.div>
        </div>
      </div>
    </section>
  )
}

export default EventsSection
