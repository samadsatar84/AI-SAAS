import React, { useState } from 'react'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import DashboardLayout from '../layouts/DashboardLayout'
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import { aiTools } from '../utils/data'

export const AIToolsPage = () => {
  const [outputs, setOutputs] = useState({})
  const [loading, setLoading] = useState({})

  const handleGenerate = async (toolId) => {
    setLoading({ ...loading, [toolId]: true })

    // Simulate API call
    setTimeout(() => {
      const sampleOutputs = {
        1: 'AI-generated blog post about machine learning transforming businesses... Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        2: 'Generated image preview: A futuristic AI dashboard interface with glowing elements and neural network visualizations.',
        3: 'Professional Resume Generated:\nJohn Doe\nEmail: john@example.com\nSoftware Engineer with 5+ years of experience...',
        4: 'AI Response: I can help you with questions about AI, automation, and technology. What would you like to know?',
        5: 'function generateReport() {\n  const data = fetchData();\n  return processData(data);\n}',
        6: 'SEO Optimization Suggestions:\n- Add H1 tags\n- Include meta descriptions\n- Optimize for keywords...',
      }

      setOutputs({ ...outputs, [toolId]: sampleOutputs[toolId] })
      setLoading({ ...loading, [toolId]: false })
    }, 1500)
  }

  return (
    <DashboardLayout>
      {/* Page header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">AI Tools</h1>
        <p className="text-gray-400">Harness the power of AI for content, code, images, and more.</p>
      </motion.div>

      {/* Tools Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {aiTools.map((tool, idx) => {
          const Icon = Icons[tool.icon]
          const hasOutput = outputs[tool.id]

          return (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{tool.title}</h3>
                    <p className="text-sm text-gray-400">{tool.description}</p>
                  </div>
                  {Icon && (
                    <div className="p-2 bg-cyan-500/20 rounded-lg">
                      <Icon size={20} className="text-cyan-400" />
                    </div>
                  )}
                </div>

                {/* Input area */}
                <textarea
                  placeholder={tool.placeholder}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-gray-500 mb-4 resize-none h-24"
                  defaultValue=""
                />

                {/* Output area */}
                {hasOutput && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 p-4 bg-slate-800/50 border border-slate-700 rounded-lg"
                  >
                    <p className="text-sm text-gray-400 mb-2">Output:</p>
                    <p className="text-white text-sm whitespace-pre-wrap">{hasOutput}</p>
                  </motion.div>
                )}

                {/* Generate button */}
                <Button
                  onClick={() => handleGenerate(tool.id)}
                  disabled={loading[tool.id]}
                  className="w-full"
                >
                  {loading[tool.id] ? (
                    <>
                      <span className="animate-spin mr-2">⚡</span>
                      Generating...
                    </>
                  ) : (
                    'Generate'
                  )}
                </Button>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </DashboardLayout>
  )
}

export default AIToolsPage
