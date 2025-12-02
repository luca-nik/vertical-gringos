'use client'

import { motion } from 'framer-motion'
import { Mountain, Music, Heart, Users } from 'lucide-react'
import Image from 'next/image'

const AboutSection = () => {
  const values = [
    {
      icon: Mountain,
      title: 'Outdoor',
      description: 'La nostra libertà fisica: spazio, movimento, natura.'
    },
    {
      icon: Music,
      title: 'Musica',
      description: 'La nostra libertà mentale: ritmo, ispirazione, espressione.'
    },
    {
      icon: Heart,
      title: 'Rispetto',
      description: 'Per i luoghi che viviamo e le persone che li condividono. '
    },
    {
      icon: Users,
      title: 'Community',
      description: "Il punto d’incontro di questi valori: noi, insieme."
    }
  ]

  const team = [
    {
      name: 'Luca',
      role: 'Alpinist, Skier & Surfer',
      image: '/team/luca.jpg',
      description: ' '
    },
    {
      name: 'Francesco',
      role: 'Alpinist, Sky Diver & Scuba Diver',
      image: '/team/france.jpg',
      description: ' '
    },
  ]

  return (
    <section id="chi-siamo" className="!py-16 md:py-16 lg:py-20 w-full">
      <div className="w-full flex justify-center">
        <div className="max-w-7xl w-full !px-8 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center !mb-12 md:!mb-16 lg:!mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-ice-white tracking-tight leading-tight">
            Vertical Gringos
          </h2>
        </motion.div>
        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="!mb-20 md:!mb-24 lg:!mb-32"
        >
          <h3 className="text-2xl md:text-3xl font-light text-ice-white text-center !pb-10 md:!pb-10 lg:!pb-10">
            I nostri valori
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 !mt-0">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-14 md:w-16 h-14 md:h-16 !mb-4 md:!mb-6 rounded-full bg-slate-800/20 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-6 md:h-8 w-6 md:w-8 text-ice-white" />
                </div>
                
                <h4 className="text-ice-white text-base md:text-lg font-medium !mb-2 md:!mb-3">{value.title}</h4>
                <p className="text-ice-white/70 font-light leading-relaxed text-sm max-w-xs">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="!mb-12 md:!mb-16 lg:!mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-light text-ice-white text-center !mb-6 md:!mb-6 lg:!mb-10">
            Chi siamo
          </h3>
          
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 place-items-center justify-center max-w-4xl w-full">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
                className="group w-full max-w-sm"
              >
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden !mb-4 md:!mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6">
                    <h4 className="text-ice-white text-lg md:text-xl font-medium !mb-1">{member.name}</h4>
                    <p className="text-ice-white/80 text-sm font-light">{member.role}</p>
                  </div>
                </div>
                
                <p className="text-ice-white/70 font-light leading-relaxed text-sm">
                  {member.description}
                </p>
              </motion.div>
            ))}
            </div>
          </div>
        </motion.div>

        </div>
      </div>
    </section>
  )
}

export default AboutSection
