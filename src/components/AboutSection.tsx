'use client'

import { motion } from 'framer-motion'
import { Mountain, Music, Heart, Users } from 'lucide-react'
import Image from 'next/image'

const AboutSection = () => {
  const values = [
    {
      icon: Mountain,
      title: 'Alpinism',
      description: 'La montagna come palestra di vita, dove ogni salita è un viaggio interiore verso la scoperta di sé.'
    },
    {
      icon: Music,
      title: 'Electronic Music',
      description: 'I ritmi che ci accompagnano, dalle cascate di ghiaccio, alle serate sotto cassa.'
    },
    {
      icon: Heart,
      title: 'Rispetto',
      description: 'Divertimento ma con rispetto dei luoghi e delle persone. '
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Una famiglia di esploratori uniti dalla passione per le vette e i beats che scaldano il cuore.'
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
    <section id="chi-siamo" className="!py-16 md:py-16 lg:py-20 bg-gradient-to-b from-slate-grey to-midnight-blue w-full">
      <div className="w-full flex justify-center">
        <div className="max-w-7xl w-full !px-8 md:px-6 lg:px-8">
        {/* Main Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="!mb-12 md:!mb-16 lg:!mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-ice-white !mb-6 md:!mb-8 tracking-tight leading-tight ml-5">
                Siamo alpinisti che amano la musica
              </h2>
              
              <div className="space-y-4 md:space-y-6 text-lg font-light leading-relaxed text-ice-white/80">
                <p>
                  Tutto è iniziato con una semplice domanda: perché non portare 
                  i ritmi che amiamo nelle montagne che ci ispirano?
                </p>
                
                <p>
                  <strong className="text-ice-white">Vertical Gringos</strong> nasce dall&apos;idea di creare 
                  momenti unici dove l&apos;energia dell&apos;alpinismo incontra quella della musica elettronica. 
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden">
                <Image
                  src="/team/team-gringos.jpg"
                  alt="Team Vertical Gringos in montagna"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
              </div>
              
              {/* Floating card with quote */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 bg-slate-800/80 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-6 max-w-xs"
              >
                <p className="text-ice-white/90 font-light italic text-sm leading-relaxed">
                  &ldquo;La montagna ci insegna che ogni passo conta, 
                  la musica ci ricorda che ogni battito è vita.&rdquo;
                </p>
                <p className="text-ice-white/60 text-xs !mt-3 font-medium"> — Team Vertical Gringos</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="h-10 w-full" />
        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="!mb-16 md:!mb-20 lg:!mb-26"
        >
          <h3 className="text-2xl md:text-3xl font-light text-ice-white text-center pb-20 md:pb-28 lg:pb-36">
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

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="text-center flex justify-center"
        >
          <div className="max-w-4xl w-full bg-slate-800/20 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8 lg:p-12">
            <h3 className="text-3xl md:text-4xl font-light text-ice-white !mb-3 md:!mb-3 tracking-tight">
              La nostra missione
            </h3>
            
            <p className="text-lg md:text-xl text-ice-white/90 font-light leading-relaxed !mb-6 md:!mb-8">
              Creare esperienze che uniscano persone, montagne e musica in armonia perfetta. 
              Ogni evento è un invito a riscoprire la bellezza del flow, 
              sia che tu stia scalando una parete o ballando sotto le stelle.
            </p>
            
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
