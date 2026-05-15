import React from 'react'
import { motion } from 'framer-motion'
import { companiesLogos } from '../../utils/data'

export const TrustedCompanies = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center text-gray-400 mb-8 text-sm uppercase tracking-widest"
        >
          Trusted by leading companies
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {companiesLogos.map((company, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="glass-effect-dark rounded-lg p-4 flex items-center justify-center hover:border-cyan-500/50 transition-colors"
            >
              <span className="text-gray-400 font-semibold text-sm text-center">{company}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustedCompanies
