'use client'

import { motion } from 'framer-motion'
import { Shirt, Heart, Leaf, ExternalLink } from 'lucide-react'
import Image from 'next/image'

const BrandSection = () => {
  const products = [
    {
      id: 1,
      name: 'Alpine Flow Tee',
      category: 'T-Shirt',
      price: '€35',
      image: '/api/placeholder/300/400',
      sustainability: 'Cotone 100% Biologico'
    },
    {
      id: 2,
      name: 'Vertical Vibes Hoodie',
      category: 'Felpa',
      price: '€65',
      image: '/api/placeholder/300/400',
      sustainability: 'Materiali Riciclati'
    },
    {
      id: 3,
      name: 'Mountain Spirit Cap',
      category: 'Cappello',
      price: '€28',
      image: '/api/placeholder/300/400',
      sustainability: 'Canapa Organica'
    },
    {
      id: 4,
      name: 'Flow State Backpack',
      category: 'Zaino',
      price: '€89',
      image: '/api/placeholder/300/400',
      sustainability: 'Materiali Sostenibili'
    }
  ]

  return (
    <section id="brand" className="py-20 bg-gradient-to-b from-midnight-blue to-slate-grey">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light text-ice-white mb-6 tracking-tight">
            GRINGO Brand
          </h2>
          <p className="text-xl text-ice-white/80 max-w-3xl mx-auto font-light leading-relaxed mb-8">
            Gear per lo stile di vita aesthetic. Ogni capo è un segno di appartenenza 
            alla comunità degli esploratori rispettosi.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 text-ice-white/70">
            <div className="flex items-center space-x-2">
              <Leaf className="h-5 w-5" />
              <span className="text-sm font-medium">100% Sostenibile</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="h-5 w-5" />
              <span className="text-sm font-medium">Made with Love</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shirt className="h-5 w-5" />
              <span className="text-sm font-medium">Qualità Premium</span>
            </div>
          </div>
        </motion.div>

        {/* Brand Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mb-20"
        >
          <div className="max-w-4xl mx-auto bg-slate-800/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-light text-ice-white mb-4">
                  Somos todos gringos.
                </h3>
                <p className="text-ice-white/80 font-light leading-relaxed mb-6">
                  Il gracchio alpino ci osserva mentre saliamo, come a salutarci. 
                  Ci siamo immaginati GRINGO come il nome che lui ci affibbia: 
                  <em className="text-ice-white"> gringo</em>, lo straniero.
                </p>
                <p className="text-ice-white/80 font-light leading-relaxed">
                  Siamo noi, ai suoi occhi: stranieri che cercano la montagna, 
                  che la attraversano. Non padroni, ma <strong className="text-ice-white">ospiti</strong>.
                </p>
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden bg-slate-800/20 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <Image
                  src="/images/gringo-logo.png"
                  alt="GRINGO Brand Logo"
                  width={200}
                  height={120}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-light text-ice-white text-center mb-12">
            Gear for the Aesthetic Lifestyle
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4 bg-slate-800/20 backdrop-blur-sm border border-white/10">
                  <div className="relative h-80">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Sustainability Badge */}
                  <div className="absolute top-4 right-4 bg-green-500/20 backdrop-blur-sm border border-green-400/30 text-green-400 px-2 py-1 rounded-full text-xs font-medium">
                    <Leaf className="inline h-3 w-3 mr-1" />
                    Eco
                  </div>
                  
                  {/* Hover Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100"
                  >
                    <button className="w-full py-2 bg-ice-white/20 backdrop-blur-sm border border-ice-white/30 rounded-full text-ice-white text-sm font-medium hover:bg-ice-white/30 transition-all duration-300">
                      Acquista Ora
                    </button>
                  </motion.div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex justify-between items-start">
                    <h4 className="text-ice-white font-medium">{product.name}</h4>
                    <span className="text-ice-white font-light">{product.price}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-ice-white/60">{product.category}</span>
                    <span className="text-green-400 text-xs">{product.sustainability}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Shop CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="text-center"
        >
          <a
            href="https://www.gringowear.shop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-ice-white/10 backdrop-blur-sm border border-ice-white/20 rounded-full text-ice-white hover:bg-ice-white/20 transition-all duration-300 group"
          >
            <span className="font-medium tracking-wide">Visita il Shop Completo</span>
            <ExternalLink className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default BrandSection