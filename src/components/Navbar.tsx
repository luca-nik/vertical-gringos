'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-4xl"
    >
      <div className="bg-slate-800/20 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 shadow-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/images/vertical-logo.png"
              alt="Vertical Gringos"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-ice-white/80 hover:text-ice-white transition-colors duration-300 text-sm font-medium tracking-wide"
            >
              Home
            </a>
            <a 
              href="#chi-siamo" 
              className="text-ice-white/80 hover:text-ice-white transition-colors duration-300 text-sm font-medium tracking-wide"
            >
              Chi Siamo
            </a>
            <a 
              href="#eventi" 
              className="text-ice-white/80 hover:text-ice-white transition-colors duration-300 text-sm font-medium tracking-wide"
            >
              Eventi
            </a>
            <a 
              href="#brand" 
              className="text-ice-white/80 hover:text-ice-white transition-colors duration-300 text-sm font-medium tracking-wide"
            >
              Brand
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-ice-white/80 hover:text-ice-white transition-colors duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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