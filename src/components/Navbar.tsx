'use client'

import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50}}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="hidden lg:block fixed top-4 md:top-6 right-4 md:right-6 z-50 w-auto"
    >
      <div className="bg-slate-800/20 backdrop-blur-md border border-white/10 rounded-full !px-7 !py-3 shadow-2xl">
        <div className="flex items-center !space-x-8 lg:!space-x-10">
          <a 
            href="#home" 
            className="text-ice-white/90 hover:text-ice-white hover:scale-110 transition-all duration-300 text-sm font-bold tracking-widest uppercase"
          >
            Home
          </a>
          <a 
            href="#eventi" 
            className="text-ice-white/90 hover:text-ice-white hover:scale-110 transition-all duration-300 text-sm font-bold tracking-widest uppercase"
          >
            Eventi
          </a>
          <a 
            href="#chi-siamo" 
            className="text-ice-white/90 hover:text-ice-white hover:scale-110 transition-all duration-300 text-sm font-bold tracking-widest uppercase"
          >
            Chi Siamo
          </a>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
