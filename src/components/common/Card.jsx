import React from 'react'

export const Card = ({
  children,
  className = '',
  glass = true,
  hover = true,
  ...props
}) => {
  const baseStyles = 'rounded-2xl p-6 transition-all duration-300'
  const glassStyles = glass ? 'glass-effect-dark' : 'bg-slate-900/50 border border-slate-800/50'
  const hoverStyles = hover ? 'hover:shadow-lg hover:border-cyan-500/50' : ''

  return (
    <div
      className={`${baseStyles} ${glassStyles} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card
