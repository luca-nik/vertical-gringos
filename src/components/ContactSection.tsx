'use client'

import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'

const ContactSection = () => {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-gradient-to-b from-slate-800 to-midnight-blue w-full">
      <div className="w-full flex justify-center">
        <div className="max-w-7xl w-full px-4 md:px-6 lg:px-8">
          <div className="flex justify-end">
            <motion.a
              href="https://www.instagram.com/vertical_gringos/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group min-w-[240px] flex items-center justify-center space-x-3 px-8 md:px-10 py-4 md:py-5 bg-ice-white/10 backdrop-blur-xl border border-ice-white/20 rounded-full text-ice-white hover:bg-ice-white/20 transition-all duration-500"
            >
              <Instagram className="h-5 w-5 md:h-6 md:w-6" />
              <span className="text-sm font-bold tracking-[0.2em] uppercase">
                Contattaci
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
