'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, Music } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

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
    description: string
    attendees?: number
    lineup?: string[]
  }
  onClick?: () => void
}

const EventCard = ({ event, onClick }: EventCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.02, y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      className={`relative rounded-3xl overflow-hidden cursor-pointer backdrop-blur-sm border ${theme.border} shadow-2xl h-96 group`}
    >
      {/* Background Image with Cross-fade */}
      <div className="absolute inset-0">
        <Image
          src={event.coverImage}
          alt={event.title}
          fill
          className="object-cover transition-opacity duration-700"
          style={{ opacity: !isHovered || !event.galleryImages ? 1 : 0 }}
        />
        
        {/* Gallery images for hover */}
        {event.galleryImages && isHovered && (
          <div className="absolute inset-0">
            {event.galleryImages.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`${event.title} gallery ${index + 1}`}
                fill
                className={`object-cover transition-opacity duration-700 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t ${theme.gradient} group-hover:opacity-90 transition-opacity duration-300`} />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-6">
        {/* Header */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className={`text-sm font-medium ${theme.accent} tracking-wide uppercase`}>
              {event.type === 'upcoming' ? 'Prossimo Evento' : 'Evento Passato'}
            </span>
            {event.type === 'upcoming' && (
              <div className="flex items-center space-x-1 bg-ice-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-ice-white text-xs font-medium">Live</span>
              </div>
            )}
          </div>

          <h3 className="text-2xl font-light text-ice-white mb-2 leading-tight">
            {event.title}
          </h3>
          
          {event.subtitle && (
            <p className="text-ice-white/80 text-sm font-light mb-3">
              {event.subtitle}
            </p>
          )}
        </div>

        {/* Event Details */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-ice-white/80">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">{event.date}</span>
          </div>
          
          <div className="flex items-center space-x-2 text-ice-white/80">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{event.location}</span>
          </div>

          {event.attendees && (
            <div className="flex items-center space-x-2 text-ice-white/80">
              <Users className="h-4 w-4" />
              <span className="text-sm">{event.attendees} partecipanti</span>
            </div>
          )}

          {event.lineup && event.lineup.length > 0 && (
            <div className="flex items-center space-x-2 text-ice-white/80">
              <Music className="h-4 w-4" />
              <span className="text-sm">{event.lineup[0]}{event.lineup.length > 1 && ' +' + (event.lineup.length - 1)}</span>
            </div>
          )}
        </div>

        {/* Hover Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute inset-x-6 bottom-6"
        >
          <button className="w-full py-3 bg-ice-white/20 backdrop-blur-sm border border-ice-white/30 rounded-full text-ice-white hover:bg-ice-white/30 transition-all duration-300 text-sm font-medium">
            {event.type === 'upcoming' ? 'Scopri Dettagli' : 'Rivedi Recap'}
          </button>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default EventCard