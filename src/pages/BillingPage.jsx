import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CreditCard, Download } from 'lucide-react'
import DashboardLayout from '../layouts/DashboardLayout'
import Card from '../components/common/Card'
import Badge from '../components/common/Badge'
import Button from '../components/common/Button'
import Table from '../components/common/Table'
import Modal from '../components/common/Modal'
import PricingCard from '../components/common/PricingCard'
import Input from '../components/common/Input'
import { pricingPlans, billingHistory } from '../utils/data'

export const BillingPage = () => {
  const [isUpgradeOpen, setIsUpgradeOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(null)

  const handleUpgrade = (plan) => {
    setSelectedPlan(plan)
    setIsUpgradeOpen(true)
  }

  const billingColumns = [
    { key: 'date', label: 'Date' },
    { key: 'description', label: 'Description' },
    { key: 'amount', label: 'Amount' },
    {
      key: 'status',
      label: 'Status',
      render: (row) => (
        <Badge variant={row.status === 'Paid' ? 'success' : 'warning'}>
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
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Billing & Subscription</h1>
        <p className="text-gray-400">Manage your subscription and billing information.</p>
      </motion.div>

      {/* Current subscription */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8"
      >
        <Card>
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">Pro Plan</h3>
              <p className="text-gray-400">$99/month • Renews on Feb 15, 2024</p>
            </div>
            <Badge variant="default">Active</Badge>
          </div>
          <p className="text-gray-400 mb-6">
            Includes: Unlimited AI requests, API access, 5 user seats, and priority support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="outline">Change Plan</Button>
            <Button variant="ghost">View Invoice</Button>
            <Button variant="ghost" className="text-red-400 hover:text-red-300">Cancel Subscription</Button>
          </div>
        </Card>
      </motion.div>

      {/* Payment method */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid md:grid-cols-2 gap-6 mb-8"
      >
        <Card>
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <CreditCard size={20} className="text-cyan-400" />
            Payment Method
          </h3>
          <div className="p-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-white mb-4">
            <p className="text-sm opacity-80 mb-2">Visa</p>
            <p className="text-xl font-bold mb-4">•••• •••• •••• 4242</p>
            <p className="text-xs opacity-80">Expires 12/25</p>
          </div>
          <Button variant="outline" className="w-full">
            Update Payment Method
          </Button>
        </Card>

        {/* Billing summary */}
        <Card>
          <h3 className="text-lg font-bold text-white mb-4">Billing Summary</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-gray-400">
              <span>Current bill:</span>
              <span className="text-white font-semibold">$99.00</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Next bill date:</span>
              <span className="text-white font-semibold">Feb 15, 2024</span>
            </div>
            <div className="border-t border-slate-700 pt-3 flex justify-between text-white font-semibold">
              <span>Total due:</span>
              <span>$99.00</span>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Upgrade plans */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-8"
      >
        <h3 className="text-2xl font-bold text-white mb-6">Upgrade Your Plan</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              {...plan}
              onCtaClick={() => handleUpgrade(plan)}
            />
          ))}
        </div>
      </motion.div>

      {/* Billing history */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-white">Billing History</h3>
            <Button variant="outline" size="sm">
              <Download size={16} />
              Export
            </Button>
          </div>
          <Table columns={billingColumns} data={billingHistory} />
        </Card>
      </motion.div>

      {/* Upgrade modal */}
      <Modal
        isOpen={isUpgradeOpen}
        onClose={() => setIsUpgradeOpen(false)}
        title={selectedPlan ? `Upgrade to ${selectedPlan.name}` : 'Upgrade Plan'}
        size="md"
      >
        <form className="space-y-4">
          <Input
            label="Full Name"
            placeholder="Sarah Anderson"
            required
          />
          <Input
            label="Email"
            type="email"
            placeholder="sarah@example.com"
            required
          />
          <Button type="submit" className="w-full">
            Complete Upgrade
          </Button>
        </form>
      </Modal>
    </DashboardLayout>
  )
}

export default BillingPage
