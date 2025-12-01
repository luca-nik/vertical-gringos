'use client'

import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-7xl"
    >
      <div className="bg-slate-800/20 backdrop-blur-md border border-white/10 rounded-full px-10 py-5 shadow-2xl">
        
        {/* Usiamo justify-between per spingere Logo a SX e Menu a DX */}
        <div className="flex items-center justify-between">
          
          {/* --- LOGO / NOME BRAND A SINISTRA --- */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-ice-white font-display font-bold tracking-[0.2em] text-lg uppercase hover:opacity-80 transition-opacity">
              VERTICAL GRINGOS
            </a>
          </div>

          {/* --- MENU A DESTRA --- */}
          {/* MODIFICA CHIAVE: aumentato a space-x-24 (circa 100px tra le parole) */}
          <div className="hidden md:flex items-center" style={{ gap: '1rem' }}>
            <a 
              href="#home" 
              className="text-ice-white/90 hover:text-ice-white hover:scale-110 transition-all duration-300 text-sm font-bold tracking-widest uppercase"
            >
              Home
            </a>
            <a 
              href="#chi-siamo" 
              className="text-ice-white/90 hover:text-ice-white hover:scale-110 transition-all duration-300 text-sm font-bold tracking-widest uppercase"
            >
              Chi Siamo
            </a>
            <a 
              href="#eventi" 
              className="text-ice-white/90 hover:text-ice-white hover:scale-110 transition-all duration-300 text-sm font-bold tracking-widest uppercase"
            >
              Eventi
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-ice-white/80 hover:text-ice-white transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar