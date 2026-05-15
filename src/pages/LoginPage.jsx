import React from 'react'
import AuthLayout from '../layouts/AuthLayout'
import LoginForm from '../components/auth/LoginForm'

export const LoginPage = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  )
}

export default LoginPage
