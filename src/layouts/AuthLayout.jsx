import React from 'react'

export const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="floating-bg floating-bg-1" />
        <div className="floating-bg floating-bg-2" />
      </div>

      {children}
    </div>
  )
}

export default AuthLayout
