import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import SectionHeader from '../common/SectionHeader'
import { testimonials } from '../../utils/data'

export const Testimonials = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title="What Our Users Say"
          subtitle="Join thousands of satisfied customers"
        />

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="glass-effect-dark rounded-2xl p-8 md:p-12"
            >
              <Quote size={40} className="text-cyan-400 mb-4 opacity-50" />
              <p className="text-lg md:text-xl text-gray-300 mb-6 italic">{testimonials[current].text}</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-2xl">
                  {testimonials[current].avatar}
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonials[current].name}</p>
                  <p className="text-sm text-gray-400">
                    {testimonials[current].role} at {testimonials[current].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              <ChevronLeft size={20} className="text-cyan-400" />
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === current ? 'bg-cyan-400 w-8' : 'bg-slate-600'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              <ChevronRight size={20} className="text-cyan-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
