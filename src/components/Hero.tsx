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
        {/* Hero Video - uses first frame as poster */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-10"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
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
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-blue/30 via-transparent to-midnight-blue/80 z-20 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-ice-white/5 via-transparent to-transparent opacity-40 z-20 pointer-events-none" />
        
        {/* Texture Overlay (Grain) */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </motion.div>

      {/* --- Floating Content --- */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 md:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="max-w-6xl flex flex-col items-center"
        >
          {/* Logo with Float Animation */}
          <motion.div
            className="!mb-8 md:!mb-10 lg:!mb-4 flex justify-center items-center"
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
            className="font-display text-3xl md:text-5xl lg:text-7xl font-medium text-[#F6B21A] !mb-4 md:!mb-6 lg:!mb-6 tracking-widest uppercase leading-tight drop-shadow-xl"
          >
            OFF THE GRID
            <br />
            <span className="text-ice-white/60 font-light block !mt-2">
            ON THE BEAT
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 1.2 }}
            className="text-base md:text-xl text-[#F6B21A] !mb-6 md:!mb-7 lg:!mb-4 font-light tracking-wide max-w-xl mx-auto"
          >
            For those who breathe the outdoors 
            <span className="hidden md:inline">  </span> 
            <br className="md:hidden" />
            and live the electronic vibe.
          </motion.p>

          <div className="h-6 lg:!h-2 w-full" />
          {/* Magnetic Buttons Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 justify-center !mt-12 md:!mt-8 lg:!mt-4 w-full"
          >
            {/* Button 1: Prossimo Evento */}
            <motion.a
              href="#ski-sound"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative min-w-[270px] sm:min-w-[300px] px-9 md:px-10 py-7 bg-ice-white/20 backdrop-blur-xl border-2 border-[#F6B21A] rounded-full text-ice-white hover:bg-ice-white/20 transition-all duration-500 flex items-center justify-center text-xl sm:text-lg md:text-sm"
            >
              <span className="relative z-10 text-sm font-bold tracking-[0.2em] uppercase">
                Prossimo Evento
              </span>
            </motion.a>

            {/* Button 2: Contattaci */}
            <motion.a
              href="https://www.instagram.com/vertical_gringos/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex group relative min-w-[270px] sm:min-w-[300px] px-9 md:px-10 py-7 bg-ice-white/20 backdrop-blur-xl border-2 border-[#F6B21A] rounded-full text-ice-white hover:bg-ice-white/20 transition-all duration-500 items-center justify-center text-lg sm:text-base md:text-sm"
            >
              <span className="text-sm font-bold tracking-[0.2em] uppercase">
                Contattaci
              </span>
            </motion.a>
          </motion.div>
        </motion.div>

        <div className="h-1 w-full" />
        {/* Floating Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 2.5 }}
          className="absolute !bottom-20 md:!bottom-16 lg:!bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer"
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
