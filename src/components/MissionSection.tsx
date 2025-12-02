'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const MissionSection = () => {
  const missionImages = [
    '/mission/mission1.jpg',
    '/mission/mission4.jpg',
    '/mission/mission3.jpg',
    '/mission/mission2.jpg'
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
                  &
                </h2>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-ice-white !mb-6 md:!mb-8 tracking-tight leading-tight ml-5 text-center">
                  Music
                </h2>
                
                <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed text-ice-white/80">
                  <p className="text-ice-white/90">
                    Tutto è iniziato con una semplice domanda.
                  </p>
                  <p className="text-ice-white/100 italic md:text-xl">
                    Perché non portare i ritmi che amiamo nelle montagne che viviamo?
                  </p>
                  <div className="h-2"></div>
                  <p>
                    <strong className="text-ice-white">Vertical Gringos</strong> nasce dal desiderio di
                    creare esperienze in cui sport outdoor e musica si intrecciano e uniscono le persone,
                    nel rispetto dei luoghi e di chi li vive.
                  </p>
                </div>
              </div>

              <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden">
                <Image
                  src="/team/team-gringos.jpg"
                  alt="Team Vertical Gringos in montagna"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
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

            <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed text-ice-white/80">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-light text-ice-white !mb-4 md:!mb-6 tracking-tight leading-tight text-center lg:text-left">
                La nostra missione
              </h3>
              
              <p className="text-ice-white/90">
                Creare esperienze uniche dove sport outdoor e musica si intrecciano e uniscono le persone.
              </p>
              <p className="text-ice-white/90">
                Ogni evento è pensato per rispettare i luoghi che amiamo e le comunità che li vivono.
              </p>
              <p>
                Dal ghiaccio alle cime estive, il nostro obiettivo è far vibrare chi partecipa, mantenendo autentico il legame con la montagna.
              </p>
            </div>

            <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden">
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
