import React from 'react'
import { Mail, Facebook, Twitter, Linkedin, Github } from 'lucide-react'
import Button from '../common/Button'

export const Footer = () => {
  return (
    <footer className="glass-effect-dark border-t border-slate-700 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">AI SaaS</h3>
            <p className="text-gray-400 text-sm">
              Transform your workflow with the power of artificial intelligence
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Roadmap</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-3">Subscribe for updates</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
              />
              <Button size="sm" variant="primary">
                <Mail size={16} />
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2024 AI SaaS. All rights reserved.
            </p>

            {/* Social icons */}
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-lg hover:bg-slate-800 transition-colors">
                <Twitter size={18} className="text-gray-400 hover:text-cyan-400" />
              </a>
              <a href="#" className="p-2 rounded-lg hover:bg-slate-800 transition-colors">
                <Linkedin size={18} className="text-gray-400 hover:text-cyan-400" />
              </a>
              <a href="#" className="p-2 rounded-lg hover:bg-slate-800 transition-colors">
                <Facebook size={18} className="text-gray-400 hover:text-cyan-400" />
              </a>
              <a href="#" className="p-2 rounded-lg hover:bg-slate-800 transition-colors">
                <Github size={18} className="text-gray-400 hover:text-cyan-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
