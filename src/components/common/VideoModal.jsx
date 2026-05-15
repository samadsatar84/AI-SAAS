import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { X, Play } from 'lucide-react'

export const VideoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl"
        >
          <button
            onClick={onClose}
            className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
          >
            <X size={32} />
          </button>

          <div className="relative w-full bg-black rounded-lg overflow-hidden aspect-video">
            <div className="w-full h-full bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center">
              <Play size={80} className="text-white" fill="white" />
            </div>
          </div>

          <p className="text-center text-gray-400 text-sm mt-4">
            Demo Video: AI SaaS Platform Overview
          </p>
        </motion.div>
      </motion.div>
    </>
  )
}

export default VideoModal
