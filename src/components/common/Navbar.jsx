import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  Bell,
  Menu,
  ChevronDown,
  LogOut,
  Settings,
} from 'lucide-react'
import ThemeToggle from './ThemeToggle'

export const Navbar = ({ onMenuClick }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem('user')
    window.location.href = '/login'
  }

  return (
    <nav className="glass-effect-dark border-b border-slate-700 sticky top-0 z-30 backdrop-blur-xl">
      <div className="px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Left section - Menu and Search */}
        <div className="flex items-center gap-4 flex-1">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-slate-800 rounded-lg transition-colors"
          >
            <Menu size={24} className="text-gray-400" />
          </button>

          <div className="hidden md:flex relative flex-1 max-w-md">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-slate-800/50 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
            />
          </div>
        </div>

        {/* Right section - Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          {/* Notifications */}
          <button className="relative p-2 hover:bg-slate-800 rounded-lg transition-colors">
            <Bell size={20} className="text-gray-400" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center gap-2 p-2 hover:bg-slate-800 rounded-lg transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                SA
              </div>
              <ChevronDown
                size={16}
                className={`text-gray-400 transition-transform ${
                  isProfileOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            <AnimatePresence>
              {isProfileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-48 glass-effect-dark rounded-lg overflow-hidden shadow-xl"
                >
                  <div className="p-4 border-b border-slate-700">
                    <p className="text-sm font-semibold text-white">Sarah Admin</p>
                    <p className="text-xs text-gray-400">admin@aisaas.com</p>
                  </div>

                  <div className="p-2 space-y-1">
                    <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-slate-800/50 transition-colors text-sm">
                      <Settings size={16} />
                      Profile Settings
                    </button>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors text-sm"
                    >
                      <LogOut size={16} />
                      Logout
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
