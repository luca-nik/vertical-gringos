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
      description: 'I ritmi che accompagnano le nostre avventure, creando colonne sonore per momenti indimenticabili.'
    },
    {
      icon: Heart,
      title: 'Flow State',
      description: 'Quello stato di grazia dove movimento e musica si fondono, creando magia pura.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Una famiglia di esploratori uniti dalla passione per le vette e i beats che scaldano il cuore.'
    }
  ]

  const team = [
    {
      name: 'Marco',
      role: 'Founder & Alpinist',
      image: '/api/placeholder/300/400',
      description: 'Cresciuto tra le vette delle Apuane, unisce la passione per l\'alpinismo alla ricerca del suono perfetto.'
    },
    {
      name: 'Sofia',
      role: 'Events & Community',
      image: '/api/placeholder/300/400',
      description: 'L\'anima creativa del gruppo, trasforma ogni evento in un\'esperienza di connessione autentica.'
    },
    {
      name: 'Alex',
      role: 'Music Director',
      image: '/api/placeholder/300/400',
      description: 'DJ e producer, crea le atmosfere che accompagnano i nostri viaggi tra natura e musica.'
    }
  ]

  return (
    <section id="chi-siamo" className="py-20 bg-gradient-to-b from-slate-grey to-midnight-blue">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-light text-ice-white mb-8 tracking-tight leading-tight">
                Siamo alpinisti che amano la musica
              </h2>
              
              <div className="space-y-6 text-lg font-light leading-relaxed text-ice-white/80">
                <p>
                  Tutto è iniziato con una semplice domanda: perché non portare 
                  i ritmi che amiamo nelle montagne che ci ispirano?
                </p>
                
                <p>
                  <strong className="text-ice-white">Vertical Gringos</strong> nasce dall&apos;idea di creare 
                  momenti unici dove l&apos;energia dell&apos;alpinismo incontra quella della musica elettronica. 
                  Non si tratta di conquistare vette, ma di <em className="text-ice-white">viverle con rispetto</em>.
                </p>
                
                <p>
                  Ogni evento che organizziamo è pensato per celebrare la bellezza 
                  dell&apos;ambiente montano, creando esperienze che rimangono nel cuore. 
                  Dal primo raggio di sole fino alle stelle, ogni momento è flow puro.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden">
                <Image
                  src="/api/placeholder/600/700"
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
                className="absolute -bottom-6 -left-6 bg-slate-800/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 max-w-xs"
              >
                <p className="text-ice-white/90 font-light italic text-sm leading-relaxed">
                  "La montagna ci insegna che ogni passo conta, 
                  la musica ci ricorda che ogni battito è vita."
                </p>
                <p className="text-ice-white/60 text-xs mt-3 font-medium">— Team Vertical Gringos</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-light text-ice-white text-center mb-16">
            I nostri valori
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-slate-800/20 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-ice-white" />
                </div>
                
                <h4 className="text-ice-white text-lg font-medium mb-3">{value.title}</h4>
                <p className="text-ice-white/70 font-light leading-relaxed text-sm">
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
          className="mb-20"
        >
          <h3 className="text-3xl font-light text-ice-white text-center mb-16">
            Chi siamo
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
                className="group"
              >
                <div className="relative h-80 rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6">
                    <h4 className="text-ice-white text-xl font-medium mb-1">{member.name}</h4>
                    <p className="text-ice-white/80 text-sm font-light">{member.role}</p>
                  </div>
                </div>
                
                <p className="text-ice-white/70 font-light leading-relaxed text-sm">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="text-center"
        >
          <div className="max-w-4xl mx-auto bg-slate-800/20 backdrop-blur-md border border-white/10 rounded-3xl p-12">
            <h3 className="text-4xl font-light text-ice-white mb-8 tracking-tight">
              La nostra missione
            </h3>
            
            <p className="text-xl text-ice-white/90 font-light leading-relaxed mb-8">
              Creare esperienze che uniscano persone, montagne e musica in armonia perfetta. 
              Ogni evento è un invito a riscoprire la bellezza del flow, 
              sia che tu stia scalando una parete o ballando sotto le stelle.
            </p>
            
            <div className="flex justify-center space-x-8 text-ice-white/60">
              <div className="text-center">
                <div className="text-2xl font-light text-ice-white mb-1">25+</div>
                <div className="text-sm">Eventi Organizzati</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-ice-white mb-1">500+</div>
                <div className="text-sm">Gringos Community</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-ice-white mb-1">15</div>
                <div className="text-sm">Rifugi Partner</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection