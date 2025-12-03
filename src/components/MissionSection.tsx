'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const MissionSection = () => {
  const missionImages = [
    '/mission/mission1.jpg',
    '/mission/mission2.jpg',
    '/mission/mission4.jpg',
    '/mission/mission3.jpg'
  ]
  const [missionIndex, setMissionIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setMissionIndex((prev) => (prev + 1) % missionImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [missionImages.length])

  return (
    <section id="mission" className="!py-16 md:py-16 lg:py-20 w-full">
      <div className="w-full flex justify-center">
        <div className="max-w-7xl w-full !px-8 md:px-6 lg:px-8">
          {/* Outdoor & Music */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="!mb-12 md:!mb-16 lg:!mb-20"
          >
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-ice-white !mb-2 md:!mb-2 tracking-tight leading-tight ml-5 text-center">
                  Outdoor
                </h2>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-ice-white !mb-2 md:!mb-2 tracking-tight leading-tight ml-5 text-center">
                  Action
                </h2>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-ice-white !mb-6 md:!mb-8 tracking-tight leading-tight ml-5 text-center">
                  Music
                </h2>
                
                <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed text-ice-white/80">
                  <p className="text-ice-white/100 md:text-xl text-center">
                    La montagna ci insegna la fatica ed il rispetto.
                  </p>
                  <div className="h-1"></div>
                  <p className="text-ice-white/100 md:text-xl text-center">
                    La musica ci dà la liberazione e connessione.
                  </p>
                  <div className="h-8"></div>
                  <p>
                    <strong className="text-ice-white">Vertical Gringos</strong> nasce per unire questi due mondi.
                    
                  </p>
                  <p className="text-ice-white">Creare momenti unici di comunità, dove la passione per l&apos;outdoor ed il rispetto
                    per i luoghi si fondono con l&apos;energia della musica elettronica.
                  </p>
                </div>
              </div>

              <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src="/videos/video-evento.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center !mt-8 md:!mt-12"
          >

            <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed text-ice-white/80 order-1 lg:order-2">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-light text-ice-white !mb-4 md:!mb-6 tracking-tight leading-tight text-center lg:text-center">
                La nostra missione
              </h3>
              
              <p className="text-ice-white/90 text-left lg:text-center italic">
              Vogliamo dimostrare che la montagna si può celebrare, non consumare.
              </p>
              <div className="h-3"></div>
              <p className="text-ice-white/90 text-left lg:text-left">
              Non organizziamo solo eventi. <strong>Creiamo un movimento</strong>.
              </p>
              <div className="h-3"></div>
              <p className="text-ice-white/90 text-left lg:text-left">
              Niente comfort da club, niente scarpe pulite. Qui l'esperienza te la devi guadagnare con la salita. 
              Si arriva con gli scarponi, si rimane per l&apos;azione, ci si accende con il sound e si torna per la community. 
              </p>              
              <p className="text-ice-white/90 text-left lg:text-left">
              Balliamo dove gli altri nemmeno arrivano, lasciando solo le nostre impronte.
              </p>
            </div>

            <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden order-2 lg:order-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={missionImages[missionIndex]}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={missionImages[missionIndex]}
                    alt="Vertical Gringos moments"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MissionSection
