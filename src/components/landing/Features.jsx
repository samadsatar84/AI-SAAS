import React from 'react'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import SectionHeader from '../common/SectionHeader'
import Card from '../common/Card'
import { features } from '../../utils/data'

export const Features = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Powerful Features"
          subtitle="Everything you need to unlock the potential of AI"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = Icons[feature.icon]

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="h-full">
                  <div className="p-2 w-fit bg-cyan-500/20 rounded-lg mb-4">
                    {Icon && <Icon size={24} className="text-cyan-400" />}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
