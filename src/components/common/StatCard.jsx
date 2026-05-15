import React from 'react'
import { motion } from 'framer-motion'

export const StatCard = ({
  title,
  value,
  change,
  isPositive = true,
  icon: Icon,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`glass-effect-dark p-6 rounded-2xl ${className}`}
      {...props}
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-400 text-sm mb-2">{title}</p>
          <p className="text-3xl font-bold text-white mb-2">{value}</p>
          <p className={`text-sm ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
            {isPositive ? '↑' : '↓'} {change}
          </p>
        </div>
        {Icon && (
          <div className="p-3 bg-cyan-500/20 rounded-lg">
            <Icon size={24} className="text-cyan-400" />
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default StatCard
