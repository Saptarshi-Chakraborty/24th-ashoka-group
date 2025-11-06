"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, DollarSign, Gift, QrCode, Phone, Mail, MapPin, Users, TreePine, Award, Target } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { PointerHighlight } from '@/components/ui/PointerHighlight'

// Donation amounts
const donationAmounts = [
  { amount: 500, impact: 'Funds basic materials for 5 Cubs for a month' },
  { amount: 1000, impact: 'Provides camping equipment for one Scout' },
  { amount: 2500, impact: 'Supports a Scout camp for 10 participants' },
  { amount: 5000, impact: 'Funds a community service project' },
  { amount: 10000, impact: 'Sponsors educational materials for Beyond Coal project' },
  { amount: 25000, impact: 'Supports a major environmental conservation initiative' }
]

// Donation types
const donationTypes = [
  { type: 'Monthly Supporter', amount: '₹500-2000/month', impact: 'Sustain regular programs', icon: Users },
  { type: 'Project Sponsor', amount: '₹5000-25000', impact: 'Fund specific initiatives', icon: Target },
  { type: 'Equipment Donor', amount: '₹1000-10000', impact: 'Provide camping & training gear', icon: Gift },
  { type: 'Scholarship Fund', amount: '₹2000-15000', impact: 'Support underprivileged participants', icon: Award }
]

// Impact stories
const impactStories = [
  {
    title: 'Beyond Coal Project',
    description: 'Your donations helped us plant 500+ trees and educate 100+ families about renewable energy',
    amount: '₹75,000 raised',
    beneficiaries: '100+ families'
  },
  {
    title: 'Scout Equipment Fund',
    description: 'Provided camping gear and uniforms to 25 underprivileged Scouts',
    amount: '₹45,000 raised',
    beneficiaries: '25 Scouts'
  },
  {
    title: 'Disaster Relief Training',
    description: 'Trained 50+ Rovers in emergency response and disaster management',
    amount: '₹30,000 raised',
    beneficiaries: '50+ Rovers'
  }
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState(1000)
  const [customAmount, setCustomAmount] = useState('')
  const [donationType, setDonationType] = useState('one-time')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    panCard: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle donation form submission
    console.log('Donation Form Data:', { 
      ...formData, 
      amount: customAmount || selectedAmount,
      type: donationType 
    })
  }

  const finalAmount = customAmount || selectedAmount

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-linear-to-br from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Support Our <PointerHighlight containerClassName="inline-block">
                <span className="text-green-200">Mission</span>
              </PointerHighlight>
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Help us continue empowering youth, protecting nature, and building stronger communities since 1936
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Impact</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how your contributions have made a real difference in our community
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 mb-16"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            {impactStories.map((story, index) => (
              <motion.div
                key={story.title}
                className="bg-linear-to-br from-green-50 to-green-100 p-6 rounded-xl"
                variants={fadeInUp}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{story.title}</h3>
                <p className="text-gray-600 mb-4">{story.description}</p>
                <div className="flex justify-between text-sm">
                  <span className="text-green-600 font-semibold">{story.amount}</span>
                  <span className="text-gray-500">{story.beneficiaries}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Donation Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ways to Support</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the type of support that works best for you
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            {donationTypes.map((type, index) => {
              const IconComponent = type.icon
              return (
                <motion.div
                  key={type.type}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                  variants={fadeInUp}
                >
                  <div className="w-12 h-12 bg-linear-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{type.type}</h3>
                  <p className="text-green-600 font-semibold mb-2">{type.amount}</p>
                  <p className="text-sm text-gray-600">{type.impact}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Make a Donation</h2>
            <p className="text-lg text-gray-600">
              Every contribution helps us continue our mission of youth development and community service
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            {/* Amount Selection */}
            <div className="p-8 border-b border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Select Amount</h3>
              
              {/* Donation Type */}
              <div className="mb-6">
                <div className="flex space-x-4">
                  <button
                    onClick={() => setDonationType('one-time')}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      donationType === 'one-time'
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    One-time
                  </button>
                  <button
                    onClick={() => setDonationType('monthly')}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      donationType === 'monthly'
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Monthly
                  </button>
                </div>
              </div>

              {/* Amount Buttons */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {donationAmounts.map((donation) => (
                  <button
                    key={donation.amount}
                    onClick={() => {
                      setSelectedAmount(donation.amount)
                      setCustomAmount('')
                    }}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedAmount === donation.amount && !customAmount
                        ? 'border-green-600 bg-green-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-lg font-bold text-gray-900">₹{donation.amount}</div>
                    <div className="text-xs text-gray-600 mt-1">{donation.impact}</div>
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Custom Amount
                </label>
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder="Enter custom amount"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Donor Information */}
            <form onSubmit={handleSubmit} className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Donor Information</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    PAN Card (for 80G receipt)
                  </label>
                  <input
                    type="text"
                    name="panCard"
                    value={formData.panCard}
                    onChange={handleInputChange}
                    placeholder="ABCDE1234F"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Tell us what motivated you to support our cause..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {/* Summary */}
              <div className="mt-8 p-6 bg-green-50 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {donationType === 'monthly' ? 'Monthly' : 'One-time'} Donation
                    </h4>
                    <p className="text-sm text-gray-600">
                      Supporting 24th Asoka Group BS&G
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">
                      ₹{finalAmount.toLocaleString()}
                    </div>
                    {donationType === 'monthly' && (
                      <div className="text-sm text-gray-500">/month</div>
                    )}
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-4 text-lg font-semibold"
              >
                <Heart className="h-5 w-5 mr-2" />
                Donate ₹{finalAmount.toLocaleString()}
                {donationType === 'monthly' && '/month'}
              </Button>

              <p className="text-xs text-gray-500 text-center mt-4">
                Donations are eligible for 80G tax exemption under Income Tax Act
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Questions About Donating?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 text-green-600 mb-3" />
              <h4 className="font-semibold text-gray-900">Call Us</h4>
              <p className="text-gray-600">+91 9830458324</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 text-green-600 mb-3" />
              <h4 className="font-semibold text-gray-900">Email Us</h4>
              <p className="text-gray-600">24asokagroup@gmail.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 text-green-600 mb-3" />
              <h4 className="font-semibold text-gray-900">Visit Us</h4>
              <p className="text-gray-600">South Calcutta, West Bengal</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}