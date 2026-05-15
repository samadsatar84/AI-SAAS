import React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Button from './Button'

export const PricingCard = ({
  name,
  price,
  description,
  features,
  cta,
  highlighted = false,
  onCtaClick,
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`rounded-2xl p-8 transition-all duration-300 ${
        highlighted
          ? 'glass-effect-dark border-2 border-cyan-500 scale-105 shadow-2xl'
          : 'glass-effect-dark hover:border-cyan-500/50'
      }`}
      {...props}
    >
      <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      
      <div className="mb-6">
        {price ? (
          <>
            <span className="text-4xl font-bold text-white">${price}</span>
            <span className="text-gray-400">/month</span>
          </>
        ) : (
          <span className="text-2xl font-bold text-white">Custom Pricing</span>
        )}
      </div>

      <Button
        onClick={onCtaClick}
        variant={highlighted ? 'primary' : 'outline'}
        className="w-full mb-8"
      >
        {cta}
      </Button>

      <div className="space-y-3">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <Check size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
            <span className="text-gray-300">{feature}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default PricingCard
