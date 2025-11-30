'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/api/placeholder/1920/1080"
        >
          <source src="/videos/hero-mountain-aesthetic.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-blue/30 via-transparent to-slate-grey/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
          className="max-w-4xl"
        >
          <div className="mb-8 flex justify-center items-center">
            <Image
              src="/images/vertical-logo.png"
              alt="Vertical Gringos"
              width={600}
              height={200}
              className="h-32 md:h-40 lg:h-48 w-auto drop-shadow-2xl"
              priority
            />
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            className="text-xl md:text-2xl text-ice-white/90 mb-8 font-light tracking-wide leading-relaxed max-w-2xl mx-auto"
          >
            Aesthetic Alpinism meets Electronic Music.
            <br />
            Flow state in the mountains, good vibes in nature.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-ice-white/10 backdrop-blur-sm border border-ice-white/20 rounded-full text-ice-white hover:bg-ice-white/20 transition-all duration-300 text-sm font-medium tracking-wide">
              Prossimo Evento
            </button>
            <button className="px-8 py-4 border border-ice-white/30 rounded-full text-ice-white hover:bg-ice-white/10 transition-all duration-300 text-sm font-medium tracking-wide">
              Scopri il Brand
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-6 w-6 text-ice-white/70" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero