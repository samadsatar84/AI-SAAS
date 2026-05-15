import React from 'react'
import { motion } from 'framer-motion'

export const SectionHeader = ({
  title,
  subtitle,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`text-center mb-12 ${className}`}
      {...props}
    >
      <h2 className="section-heading mb-4">{title}</h2>
      <p className="section-subheading">{subtitle}</p>
    </motion.div>
  )
}

export default SectionHeader
