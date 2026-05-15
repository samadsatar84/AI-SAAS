import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export const FAQAccordion = ({ faqs, className = '', ...props }) => {
  const [activeId, setActiveId] = useState(null)

  return (
    <div className={`space-y-4 ${className}`} {...props}>
      {faqs.map((faq) => (
        <motion.div
          key={faq.id}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="glass-effect-dark rounded-lg overflow-hidden"
        >
          <button
            onClick={() => setActiveId(activeId === faq.id ? null : faq.id)}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-800/50 transition-colors"
          >
            <span className="text-lg font-semibold text-white text-left">{faq.question}</span>
            <ChevronDown
              size={20}
              className={`text-cyan-400 transition-transform duration-300 ${
                activeId === faq.id ? 'rotate-180' : ''
              }`}
            />
          </button>
          <AnimatePresence>
            {activeId === faq.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden border-t border-slate-700"
              >
                <p className="px-6 py-4 text-gray-400">{faq.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}

export default FAQAccordion
