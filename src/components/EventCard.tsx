'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

interface EventCardProps {
  event: {
    id: string
    title: string
    subtitle?: string
    date: string
    location: string
    type: 'upcoming' | 'past'
    theme: 'winter' | 'autumn' | 'summer' | 'spring'
    coverImage: string
    galleryImages?: string[]
  }
  onClick?: () => void
}

const EventCard = ({ event, onClick }: EventCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Create array of all images (cover + gallery images)
  const allImages = [event.coverImage, ...(event.galleryImages || [])]

  // Auto-rotate through all images every 3 seconds
  useEffect(() => {
    if (allImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex(prev =>
          prev === allImages.length - 1 ? 0 : prev + 1
        )
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [allImages.length])

  const themeColors = {
    winter: {
      gradient: 'from-blue-900/80 via-slate-800/60 to-ice-white/20',
      accent: 'text-blue-200',
      border: 'border-blue-300/30'
    },
    autumn: {
      gradient: 'from-orange-900/80 via-red-800/60 to-yellow-200/20',
      accent: 'text-orange-200',
      border: 'border-orange-300/30'
    },
    summer: {
      gradient: 'from-green-900/80 via-teal-800/60 to-emerald-200/20',
      accent: 'text-green-200',
      border: 'border-green-300/30'
    },
    spring: {
      gradient: 'from-pink-900/80 via-purple-800/60 to-rose-200/20',
      accent: 'text-pink-200',
      border: 'border-pink-300/30'
    }
  }

  const theme = themeColors[event.theme]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.05, y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      className={`relative rounded-3xl overflow-hidden cursor-pointer backdrop-blur-md border ${theme.border} shadow-2xl h-80 md:h-96 group`}
    >
      {/* Background Image - Cycling through all images */}
      <div className="absolute inset-0">
        <Image
          key={currentImageIndex}
          src={allImages[currentImageIndex]}
          alt={`${event.title} ${currentImageIndex + 1}`}
          fill
          className="object-cover transition-all duration-[2s] ease-out group-hover:scale-110"
        />
      </div>

      {/* Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t ${event.type === 'past' ? 'from-gray-900/30 via-gray-800/20 to-transparent' : 'from-slate-900/40 via-transparent to-transparent'} group-hover:opacity-90 transition-opacity duration-300`} />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col !p-6 md:!p-8">
        {/* Header */}
        <div>
          <div className="flex items-center justify-between !mb-2 md:!mb-3">
            <span className={`text-xs md:text-sm font-medium ${theme.accent} tracking-wide uppercase`}>
              {event.type === 'upcoming' ? 'Prossimo Evento' : 'Evento Passato'}
            </span>
            {event.type === 'upcoming' && (
              <div className="flex items-center space-x-1 bg-ice-white/20 backdrop-blur-sm px-1.5 md:px-2 py-0.5 md:py-1 rounded-full">
                <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-ice-white text-xs font-medium">Live</span>
              </div>
            )}
          </div>

          <h3 className="text-xl md:text-2xl font-light text-ice-white !mb-1.5 md:!mb-2 leading-tight">
            {event.title}
          </h3>
          
          {event.subtitle && (
            <p className="text-ice-white/80 text-xs md:text-sm font-light !mb-2 md:!mb-3">
              {event.subtitle}
            </p>
          )}
        </div>

        {/* Event Details */}
        <div className="space-y-1.5 md:space-y-2 !mt-auto !mb-4 md:!mb-4">
          <div className="flex items-center space-x-1.5 md:space-x-2 text-ice-white/80">
            <Calendar className="h-3.5 md:h-4 w-3.5 md:w-4" />
            <span className="text-xs md:text-sm">{event.date}</span>
          </div>
          
          <div className="flex items-center space-x-1.5 md:space-x-2 text-ice-white/80">
            <MapPin className="h-3.5 md:h-4 w-3.5 md:w-4" />
            <span className="text-xs md:text-sm">{event.location}</span>
          </div>
        </div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="hidden md:block absolute !inset-x-6 md:!inset-x-8 !bottom-2 md:!bottom-3"
        >
          <button className="w-full py-0.5 md:py-1 bg-ice-white/20 backdrop-blur-sm border border-ice-white/30 rounded-full text-ice-white hover:bg-ice-white/30 transition-all duration-300 text-[11px] md:text-xs font-medium">
            {event.type === 'upcoming' ? 'Scopri' : 'Recap'}
          </button>
        </motion.div>

        {/* Mobile Action Button - Always visible */}
        <div className="md:hidden absolute !inset-x-0 !bottom-2 flex justify-center">
          <button
            onClick={(e) => {
              e.stopPropagation()
              onClick?.()
            }}
            className="!px-5 !py-1 bg-ice-white/20 backdrop-blur-sm border border-ice-white/30 rounded-full text-ice-white active:bg-ice-white/30 transition-all duration-300 text-[11px] font-medium"
          >
            {event.type === 'upcoming' ? 'Scopri' : 'Recap'}
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default EventCard
