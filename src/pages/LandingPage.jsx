import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Hero from '../components/landing/Hero'
import TrustedCompanies from '../components/landing/TrustedCompanies'
import Features from '../components/landing/Features'
import Stats from '../components/landing/Stats'
import Testimonials from '../components/landing/Testimonials'
import Pricing from '../components/landing/Pricing'
import FAQ from '../components/landing/FAQ'
import Footer from '../components/landing/Footer'

export const LandingPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      navigate('/dashboard')
    }
  }, [navigate])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="floating-bg floating-bg-1" />
        <div className="floating-bg floating-bg-2" />
      </div>

      <Hero />
      <TrustedCompanies />
      <Features />
      <Stats />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  )
}

export default LandingPage
