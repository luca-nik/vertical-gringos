'use client'

import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'

const ContactSection = () => {
  return (
    <section className="py-24 md:py-32 lg:py-40 w-full">
      <div className="w-full flex justify-center ">
        <div className="max-w-7xl w-full px-6 md:px-6 lg:px-8">
          <div className="flex justify-center !mt-10 !mb-10 md:!mb-10 lg:!mb-10">
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
              className="group flex items-center justify-center !space-x-2 md:!space-x-4 !px-6 md:!px-10 !py-3 md:!py-5 bg-ice-white/10 backdrop-blur-xl border border-ice-white/20 rounded-full text-ice-white hover:bg-ice-white/20 transition-all duration-500 "
            >
              <Instagram className="h-4 w-4 md:h-6 md:w-6 " />
              <span className="text-xs md:text-sm font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase">
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
