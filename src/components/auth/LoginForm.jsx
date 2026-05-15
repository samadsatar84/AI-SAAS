import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Lock, Github, Sparkles, ArrowLeft } from 'lucide-react'
import Button from '../common/Button'
import Input from '../common/Input'

export const LoginForm = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Mock login
    localStorage.setItem('user', JSON.stringify({ email, name: 'Sarah Admin' }))
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

      <h1 className="text-3xl font-bold text-center text-white mb-2">Welcome Back</h1>
      <p className="text-center text-gray-400 mb-8">Sign in to your account</p>

      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <Input
          label="Email"
          type="email"
          placeholder="admin@aisaas.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          label="Password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="flex justify-between items-center text-sm">
          <label className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer">
            <input type="checkbox" className="w-4 h-4 rounded" />
            Remember me
          </label>
          <Link to="/forgot-password" className="text-cyan-400 hover:text-cyan-300">
            Forgot password?
          </Link>
        </div>

        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </form>

      {/* Social login */}
      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-700" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-slate-900 text-gray-400">Or continue with</span>
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
        Don't have an account?{' '}
        <Link to="/register" className="text-cyan-400 hover:text-cyan-300 font-semibold">
          Sign up
        </Link>
      </p>
    </motion.div>
  )
}

export default LoginForm
