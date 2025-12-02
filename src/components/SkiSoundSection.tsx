'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Calendar, MapPin, Snowflake } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'

const SnowParticles = () => {
  // Pre-generate random values to avoid render impurity
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    initialX: (i * 37 + 123) % 1200, // Pseudo-random based on index
    initialScale: 0.5 + ((i * 23 + 45) % 50) / 100,
    animateX: ((i * 17 + 89) % 100) - 50,
    duration: 12 + ((i * 13 + 67) % 8),
    delay: (i * 11 + 29) % 8
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-blue-300/40 rounded-full"
          initial={{
            x: particle.initialX,
            y: -10,
            scale: particle.initialScale,
            opacity: 0
          }}
          animate={{
            y: 800,
            x: particle.animateX,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear"
          }}
        />
      ))}
    </div>
  )
}

const SkiSoundSection = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])

  return (
    <section id="ski-sound" ref={ref} className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-ice-white via-ice-blue to-winter-silver overflow-hidden w-full">
      {/* Snow Particles VFX */}
      <SnowParticles />
      
      {/* Cold Mist Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-50/30 via-transparent to-blue-100/20" />
      
      <div className="w-full flex justify-center relative z-10">
        <div className="max-w-7xl w-full px-6 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center !mb-12 md:!mb-16 lg:!mb-20"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block !mb-4 md:!mb-6"
          >
            <Snowflake className="h-10 md:h-12 w-10 md:w-12 text-blue-400/60" />
          </motion.div>
          
          <h2 className="font-display text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-light text-slate-900 !mb-4 md:!mb-6 tracking-widest uppercase text-center">
            Prossimo Evento
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left: Event Details */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <div>
              <h3 className="font-display text-2xl md:text-4xl lg:text-5xl font-light text-slate-400 !mb-3 md:!mb-4 tracking-widest uppercase">
                Ski & Sound
              </h3>
              <p className="text-lg md:text-xl text-blue-600 font-medium !mb-4 md:!mb-6">Ski Freestyle & Techno</p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center space-x-3 md:space-x-4 text-slate-700">
                <Calendar className="h-5 md:h-6 w-5 md:w-6 text-blue-500" />
                <span className="text-base md:text-lg text-blue-300"> 7 Dicembere 2025</span>
              </div>

              <div className="flex items-center space-x-3 md:space-x-4 text-slate-700">
                <MapPin className="h-5 md:h-6 w-5 md:w-6 text-blue-500" />
                <span className="text-base md:text-lg text-blue-300">Scuola di Sci Val di Luce, Abetone</span>
              </div>
            </div>

            <div className="pt-8 md:pt-12">
              <div className="w-24 md:w-32 h-px bg-slate-400/50 mx-auto !mb-6 md:!mb-8"></div>
              <p className="text-base md:text-lg text-slate-100 max-w-2xl mx-auto font-light leading-relaxed">
                L&apos;unico evento in Toscana che unisce sci freestyle e musica elettronica.
              </p>
            </div>

            <div className="flex justify-center pt-10 md:pt-14 !mt-8">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="min-w-[240px] px-8 md:px-10 py-4 md:py-5 bg-slate-500 text-blue-100 rounded-full hover:bg-slate-800 text-sm font-bold tracking-[0.2em] uppercase border border-blue-400"
              >
                Prenota il tuo posto
              </motion.button>
            </div>
          </motion.div>

          {/* Right: Parallax Image */}
          <motion.div
            style={{ y }}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <a
              href="https://www.instagram.com/p/DRsHtvIDDV6/"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative h-80 md:h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
            >
              <Image
                src="/events/ski_sound.jpeg"
                alt="Ski & Sound Winter Event"
                fill
                className="object-contain transition-transform duration-[2s] ease-out hover:scale-110"
              />

              {/* Winter Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-blue-100/10 pointer-events-none" />

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 md:top-6 right-4 md:right-6 bg backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full pointer-events-none"
              >
                <span className="text-white text-xs md:text-sm font-semibold tracking-wide text-slate-400">7 Dicembre</span>
              </motion.div>
            </a>

            {/* Decorative Elements */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -top-3 md:-top-4 -left-3 md:-left-4 w-6 md:w-8 h-6 md:h-8 text-blue-300/40"
            >
              <Snowflake className="w-full h-full" />
            </motion.div>
            
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-1.5 md:-bottom-2 -right-1.5 md:-right-2 w-5 md:w-6 h-5 md:h-6 text-blue-200/50"
            >
              <Snowflake className="w-full h-full" />
            </motion.div>
          </motion.div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default SkiSoundSection
