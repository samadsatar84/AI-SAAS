import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, Activity, TrendingUp, Search } from 'lucide-react'
import * as Icons from 'lucide-react'
import DashboardLayout from '../layouts/DashboardLayout'
import Card from '../components/common/Card'
import Input from '../components/common/Input'
import Table from '../components/common/Table'
import Badge from '../components/common/Badge'
import StatCard from '../components/common/StatCard'
import Button from '../components/common/Button'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { adminUsers, activityLogs, chartData } from '../utils/data'

export const AdminPanel = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [userFilter, setUserFilter] = useState('all')

  const filteredUsers = adminUsers.filter((user) => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = userFilter === 'all' || user.status.toLowerCase() === userFilter

    return matchesSearch && matchesFilter
  })

  const adminMetrics = [
    { title: 'Total Users', value: '12,584', change: '+5.2%', isPositive: true, icon: 'Users' },
    { title: 'Active Sessions', value: '2,456', change: '+12.1%', isPositive: true, icon: 'Activity' },
    { title: 'Revenue', value: '$45,231', change: '+8.5%', isPositive: true, icon: 'TrendingUp' },
    { title: 'API Calls', value: '1.2M', change: '+24.3%', isPositive: true, icon: 'Zap' },
  ]

  const userColumns = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    {
      key: 'role',
      label: 'Role',
      render: (row) => (
        <Badge variant="secondary">{row.role}</Badge>
      ),
    },
    {
      key: 'status',
      label: 'Status',
      render: (row) => (
        <Badge variant={row.status === 'Active' ? 'success' : 'warning'}>
          {row.status}
        </Badge>
      ),
    },
  ]

  const activityColumns = [
    { key: 'action', label: 'Action' },
    { key: 'user', label: 'User' },
    { key: 'timestamp', label: 'Time' },
    {
      key: 'status',
      label: 'Status',
      render: (row) => (
        <Badge
          variant={
            row.status === 'Success' ? 'success' :
            row.status === 'Failed' ? 'error' :
            'warning'
          }
        >
          {row.status}
        </Badge>
      ),
    },
  ]

  return (
    <DashboardLayout>
      {/* Page header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Admin Panel</h1>
        <p className="text-gray-400">Manage users, monitor activity, and view system analytics.</p>
      </motion.div>

      {/* Admin Metrics */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {adminMetrics.map((metric, idx) => {
          const Icon = Icons[metric.icon]
          return (
            <StatCard
              key={idx}
              title={metric.title}
              value={metric.value}
              change={metric.change}
              isPositive={metric.isPositive}
              icon={Icon}
            />
          )
        })}
      </div>

      {/* Revenue Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8"
      >
        <Card>
          <h3 className="text-lg font-bold text-white mb-4">Revenue Overview</h3>
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

      {/* User Management */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8"
      >
        <Card>
          <div className="mb-6">
            <h3 className="text-lg font-bold text-white mb-4">User Management</h3>

            {/* Search and filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-1 relative">
                <Search size={18} className="absolute left-3 top-3 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search users..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <select
                value={userFilter}
                onChange={(e) => setUserFilter(e.target.value)}
                className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="all">All Users</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>

          <Table columns={userColumns} data={filteredUsers} />
        </Card>
      </motion.div>

      {/* Activity Logs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card>
          <h3 className="text-lg font-bold text-white mb-4">System Activity Log</h3>
          <Table columns={activityColumns} data={activityLogs} />
        </Card>
      </motion.div>
    </DashboardLayout>
  )
}

export default AdminPanel
