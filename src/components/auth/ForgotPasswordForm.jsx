import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, ArrowLeft, Sparkles, CheckCircle } from 'lucide-react'
import Button from '../common/Button'
import Input from '../common/Input'

export const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
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

      {!submitted ? (
        <>
          <h1 className="text-3xl font-bold text-center text-white mb-2">Reset Password</h1>
          <p className="text-center text-gray-400 mb-8">
            Enter your email address and we'll send you a link to reset your password.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 mb-6">
            <Input
              label="Email Address"
              type="email"
              placeholder="admin@aisaas.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Button type="submit" className="w-full">
              Send Reset Link
            </Button>
          </form>
        </>
      ) : (
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <div className="p-3 bg-green-500/20 rounded-full">
              <CheckCircle size={40} className="text-green-400" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Check your email</h2>
          <p className="text-gray-400 mb-6">
            We've sent a password reset link to {email}. Please check your email and click the link to reset your password.
          </p>
          <p className="text-sm text-gray-500 mb-6">
            Didn't receive the email? Check your spam folder or try another email address.
          </p>
          <Button
            onClick={() => setSubmitted(false)}
            variant="outline"
            className="w-full"
          >
            Try another email
          </Button>
        </div>
      )}

      <Link
        to="/login"
        className="inline-flex items-center gap-2 mt-6 text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
      >
        <ArrowLeft size={16} />
        Back to login
      </Link>
    </motion.div>
  )
}

export default ForgotPasswordForm
