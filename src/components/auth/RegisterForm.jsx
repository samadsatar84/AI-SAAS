import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Lock, User, Github, Sparkles } from 'lucide-react'
import Button from '../common/Button'
import Input from '../common/Input'

export const RegisterForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match')
      return
    }
    // Mock register
    localStorage.setItem('user', JSON.stringify({ email: formData.email, name: formData.name }))
    navigate('/dashboard')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-effect-dark p-8 rounded-2xl w-full max-w-md"
    >
      <div className="flex items-center justify-center mb-8">
        <div className="p-3 bg-cyan-500/20 rounded-lg">
          <Sparkles size={24} className="text-cyan-400" />
        </div>
      </div>

      <h1 className="text-3xl font-bold text-center text-white mb-2">Create Account</h1>
      <p className="text-center text-gray-400 mb-8">Join thousands of AI-powered teams</p>

      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <Input
          label="Full Name"
          placeholder="Sarah Anderson"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          label="Email"
          type="email"
          placeholder="sarah@example.com"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          label="Password"
          type="password"
          placeholder="••••••••"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Input
          label="Confirm Password"
          type="password"
          placeholder="••••••••"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <label className="flex items-start gap-2 text-gray-400 cursor-pointer">
          <input type="checkbox" className="w-4 h-4 rounded mt-1" required />
          <span className="text-sm">
            I agree to the{' '}
            <a href="#" className="text-cyan-400 hover:text-cyan-300">
              Terms of Service
            </a>
            {' '}and{' '}
            <a href="#" className="text-cyan-400 hover:text-cyan-300">
              Privacy Policy
            </a>
          </span>
        </label>

        <Button type="submit" className="w-full">
          Create Account
        </Button>
      </form>

      {/* Social signup */}
      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-700" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-slate-900 text-gray-400">Or sign up with</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <Button variant="outline">
          <Github size={18} />
          GitHub
        </Button>
        <Button variant="outline">
          Google
        </Button>
      </div>

      <p className="text-center text-gray-400 text-sm">
        Already have an account?{' '}
        <Link to="/login" className="text-cyan-400 hover:text-cyan-300 font-semibold">
          Sign in
        </Link>
      </p>
    </motion.div>
  )
}

export default RegisterForm
