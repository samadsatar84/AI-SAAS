import React from 'react'
import SectionHeader from '../common/SectionHeader'
import FAQAccordion from '../common/FAQAccordion'
import { faqs } from '../../utils/data'

export const FAQ = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our platform"
        />

        <FAQAccordion faqs={faqs} />
      </div>
    </section>
  )
}

export default FAQ
