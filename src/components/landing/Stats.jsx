import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { stats } from '../../utils/data'

export const Stats = () => {
  const [displayedValues, setDisplayedValues] = useState(stats.map(() => 0))

  useEffect(() => {
    const timers = stats.map((stat, idx) => {
      const numValue = parseInt(stat.value)
      const increment = Math.ceil(numValue / 100)

      const timer = setInterval(() => {
        setDisplayedValues((prev) => {
          const newValues = [...prev]
          if (newValues[idx] < numValue) {
            newValues[idx] = Math.min(newValues[idx] + increment, numValue)
          }
          return newValues
        })
      }, 20)

      return timer
    })

    return () => timers.forEach(timer => clearInterval(timer))
  }, [])

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-effect-dark rounded-2xl p-8 text-center"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {displayedValues[idx].toLocaleString()}{stat.value.replace(/\d+/g, '')}
              </div>
              <p className="text-gray-400 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
