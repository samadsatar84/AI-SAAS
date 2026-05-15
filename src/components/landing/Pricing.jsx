import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../common/SectionHeader'
import PricingCard from '../common/PricingCard'
import Modal from '../common/Modal'
import Button from '../common/Button'
import Input from '../common/Input'
import { pricingPlans } from '../../utils/data'

export const Pricing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(null)

  const handleCtaClick = (plan) => {
    setSelectedPlan(plan)
    setIsModalOpen(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`You've signed up for the ${selectedPlan.name} plan!`)
    setIsModalOpen(false)
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Simple, Transparent Pricing"
          subtitle="Choose the perfect plan for your needs"
        />

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pricingPlans.map((plan, idx) => (
            <PricingCard
              key={plan.id}
              {...plan}
              onCtaClick={() => handleCtaClick(plan)}
            />
          ))}
        </div>

        {/* FAQ under pricing */}
        <div className="text-center mt-20">
          <h3 className="text-2xl font-bold text-white mb-2">Questions?</h3>
          <p className="text-gray-400 mb-6">Check our FAQ section or contact our sales team</p>
        </div>
      </div>

      {/* Upgrade modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedPlan ? `Upgrade to ${selectedPlan.name}` : 'Upgrade Plan'}
        size="md"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Full Name"
            placeholder="John Doe"
            required
          />
          <Input
            label="Email"
            type="email"
            placeholder="john@example.com"
            required
          />
          <Input
            label="Card Number"
            placeholder="4242 4242 4242 4242"
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Expiry"
              placeholder="12/25"
              required
            />
            <Input
              label="CVV"
              placeholder="123"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Complete Purchase
          </Button>
        </form>
      </Modal>
    </section>
  )
}

export default Pricing
