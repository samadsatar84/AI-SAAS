import React from 'react'

export const SkeletonLoader = ({ count = 1, className = '' }) => {
  return (
    <div className={className}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="mb-4 p-4 glass-effect-dark rounded-lg">
          <div className="h-4 bg-gradient-to-r from-slate-700 to-slate-800 rounded animate-pulse mb-2" />
          <div className="h-4 bg-gradient-to-r from-slate-700 to-slate-800 rounded animate-pulse w-3/4" />
        </div>
      ))}
    </div>
  )
}

export default SkeletonLoader
