'use client'

import { motion, useTransform, useScroll } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'

const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  // Parallax effect - background moves slower than scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <section ref={ref} id="home" className="relative h-screen overflow-hidden">
      {/* --- Cinematic Background with Parallax --- */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        {/* Fallback Image (shown if video fails to load) */}
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `
              linear-gradient(to bottom, rgba(26, 37, 47, 0.2), rgba(26, 37, 47, 0.6)),
              url("/images/hero-homepage.jpg")
            `
          }}
        />
        
        {/* Hero Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-10"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onLoadedData={() => {
            console.log('Video loaded successfully')
          }}
          onError={() => {
            console.error('Video error')
          }}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Atmospheric Lighting Overlay (The "Vibe") */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-blue/30 via-transparent to-midnight-blue/80 z-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-ice-white/5 via-transparent to-transparent opacity-40 z-20" />
        
        {/* Texture Overlay (Grain) */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </motion.div>

      {/* --- Floating Content --- */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 md:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="max-w-6xl flex flex-col items-center"
        >
          {/* Logo with Float Animation */}
          <motion.div
            className="mb-8 md:mb-10 lg:mb-12 flex justify-center items-center"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/images/vertical-logo.png"
              alt="Vertical Gringos"
              width={600}
              height={200}
              className="h-32 md:h-48 lg:h-64 w-auto drop-shadow-2xl filter brightness-110"
              priority
            />
          </motion.div>

          {/* Editorial Tagline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
            className="font-display text-4xl md:text-6xl lg:text-8xl font-medium text-[#F6B21A] mb-6 md:mb-8 lg:mb-10 tracking-widest uppercase leading-tight drop-shadow-xl"
          >
            CHASING HIGHS
            <br />
            <span className="text-ice-white/60 font-light block mt-2">
              SHARED VIBES
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 1.2 }}
            className="text-lg md:text-2xl text-[#F6B21A] mb-6 md:mb-8 lg:mb-10 font-light tracking-wide max-w-xl mx-auto"
          >
            The collective for those who breathe the outdoors 
            <span className="hidden md:inline">  </span> 
            <br className="md:hidden" />
            and live the electronic vibe.
          </motion.p>

          <div className="h-8 w-full" />
          {/* Magnetic Buttons Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mt-8 md:mt-10 lg:mt-12 w-full"
          >
            {/* Button 1: Prossimo Evento */}
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative min-w-[240px] px-8 md:px-10 py-4 md:py-5 bg-ice-white/20 backdrop-blur-xl border border-[#F6B21A] rounded-full text-ice-white hover:bg-ice-white/20 transition-all duration-500"
            >
              <span className="relative z-10 text-sm font-bold tracking-[0.2em] uppercase">
                Prossimo Evento
              </span>
            </motion.button>

            {/* Button 2: Brand */}
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group min-w-[240px] px-8 md:px-10 py-4 md:py-5 bg-ice-white/20 backdrop-blur-xl border border-[#F6B21A] rounded-full text-ice-white hover:bg-ice-white/20 transition-all duration-500"
            >
              <span className="text-sm font-bold tracking-[0.2em] uppercase">
                Scopri il Brand
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        <div className="h-1 w-full" />
        {/* Floating Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 2.5 }}
          className="absolute bottom-8 md:bottom-10 lg:bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-10 w-10 text-ice-white/50 hover:text-ice-white transition-colors" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
