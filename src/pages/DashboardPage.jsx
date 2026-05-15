import React from 'react'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import DashboardLayout from '../layouts/DashboardLayout'
import StatCard from '../components/common/StatCard'
import Card from '../components/common/Card'
import Table from '../components/common/Table'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { dashboardMetrics, recentProjects, chartData } from '../utils/data'

export const DashboardPage = () => {
  const columns = [
    { key: 'name', label: 'Project' },
    { key: 'status', label: 'Status', render: (row) => (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
        row.status === 'Active' ? 'bg-green-500/20 text-green-400' :
        row.status === 'Completed' ? 'bg-blue-500/20 text-blue-400' :
        'bg-yellow-500/20 text-yellow-400'
      }`}>
        {row.status}
      </span>
    )},
    { key: 'requests', label: 'Requests' },
    { key: 'owner', label: 'Owner' },
  ]

  return (
    <DashboardLayout>
      {/* Page title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-gray-400">Welcome back! Here's your AI SaaS metrics overview.</p>
      </motion.div>

      {/* Metrics Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {dashboardMetrics.map((metric, idx) => {
          const Icon = Icons[metric.icon]
          return (
            <StatCard
              key={metric.id}
              title={metric.title}
              value={metric.value}
              change={metric.change}
              isPositive={metric.isPositive}
              icon={Icon}
            />
          )
        })}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {/* Revenue Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card>
            <h3 className="text-lg font-bold text-white mb-4">Revenue</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    border: '1px solid #475569',
                    borderRadius: '8px',
                  }}
                  labelStyle={{ color: '#f1f5f9' }}
                />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#0ea5e9" strokeWidth={2} dot={{ fill: '#0ea5e9' }} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>

        {/* AI Usage Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <h3 className="text-lg font-bold text-white mb-4">AI Requests</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    border: '1px solid #475569',
                    borderRadius: '8px',
                  }}
                  labelStyle={{ color: '#f1f5f9' }}
                />
                <Legend />
                <Bar dataKey="requests" fill="#0ea5e9" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>
      </div>

      {/* Recent Projects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card>
          <h3 className="text-lg font-bold text-white mb-4">Recent Projects</h3>
          <Table columns={columns} data={recentProjects} />
        </Card>
      </motion.div>
    </DashboardLayout>
  )
}

export default DashboardPage
