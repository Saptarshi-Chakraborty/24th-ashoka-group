"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, Heart, DollarSign, UserPlus, Handshake, Gift, QrCode, Phone, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/Button'

// Involvement options
const involvementOptions = [
  {
    id: 'member',
    title: 'Become a Member',
    icon: Users,
    description: 'Join one of our sections and start your Scouting journey',
    ageGroups: [
      { name: 'Cubs', age: '6-11 years', activities: 'Fun games, nature exploration, basic skills' },
      { name: 'Scouts', age: '11-17 years', activities: 'Adventure, camping, leadership training' },
      { name: 'Rovers', age: '17-25 years', activities: 'Community service, advanced leadership' }
    ],
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'volunteer',
    title: 'Volunteer With Us',
    icon: Handshake,
    description: 'Support our activities and make a difference in young lives',
    opportunities: [
      { role: 'Activity Leader', commitment: '4 hours/week', skills: 'Teaching, mentoring' },
      { role: 'Project Assistant', commitment: '2 hours/week', skills: 'Organization, planning' },
      { role: 'Event Support', commitment: 'As needed', skills: 'Coordination, logistics' },
      { role: 'Specialist Trainer', commitment: '1 day/month', skills: 'Expertise in specific areas' }
    ],
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'donate',
    title: 'Support Our Cause',
    icon: Heart,
    description: 'Help us continue our mission through financial support',
    donationTypes: [
      { type: 'Monthly Supporter', amount: '₹500-2000/month', impact: 'Sustain regular programs' },
      { type: 'Project Sponsor', amount: '₹5000-25000', impact: 'Fund specific initiatives' },
      { type: 'Equipment Donor', amount: '₹1000-10000', impact: 'Provide camping & training gear' },
      { type: 'Scholarship Fund', amount: '₹2000-15000', impact: 'Support underprivileged participants' }
    ],
    color: 'from-purple-500 to-purple-600'
  }
]

// Donation amounts
const donationAmounts = [
  { amount: 500, impact: 'Funds basic materials for 5 Cubs for a month' },
  { amount: 1000, impact: 'Provides camping equipment for one Scout' },
  { amount: 2500, impact: 'Supports a Scout camp for 10 participants' },
  { amount: 5000, impact: 'Funds a community service project' },
  { amount: 10000, impact: 'Sponsors educational materials for Beyond Coal project' },
  { amount: 25000, impact: 'Supports a major environmental conservation initiative' }
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

export default function GetInvolvedPage() {
  const [activeTab, setActiveTab] = useState('member')
  const [selectedAmount, setSelectedAmount] = useState(1000)
  const [customAmount, setCustomAmount] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    section: 'cubs',
    experience: '',
    interests: '',
    availability: '',
    skills: '',
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
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your interest! We will contact you soon.')
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-linear-to-br from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Get Involved
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
              Join our mission to develop young leaders, protect the environment, 
              and serve communities across Bengal and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-700 mb-6">
              Ways to Get Involved
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose how you'd like to contribute to our mission and make a positive impact.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {involvementOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setActiveTab(option.id)}
                className={`flex items-center px-6 py-3 rounded-full transition-all ${
                  activeTab === option.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-sage-50 text-gray-600 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                <option.icon className="h-5 w-5 mr-2" />
                {option.title}
              </button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {activeTab === 'member' && (
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-heading font-bold text-primary-700 mb-6">
                    Join Our Community
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Become part of a movement that has been developing young leaders for over 85 years. 
                    Choose the section that's right for your age and interests.
                  </p>
                  
                  <div className="space-y-6">
                    {involvementOptions[0]?.ageGroups?.map((group, index) => (
                      <div key={index} className="bg-sage-50 p-6 rounded-xl border border-sage-200">
                        <h4 className="text-lg font-heading font-bold text-primary-700 mb-2">
                          {group.name} ({group.age})
                        </h4>
                        <p className="text-gray-600">{group.activities}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-sage-50 p-8 rounded-2xl">
                  <h3 className="text-xl font-heading font-bold text-primary-700 mb-6">
                    Membership Application
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                      <input
                        type="number"
                        name="age"
                        placeholder="Age"
                        value={formData.age}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <select
                      name="section"
                      value={formData.section}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    >
                      <option value="cubs">Cubs (6-11 years)</option>
                      <option value="scouts">Scouts (11-17 years)</option>
                      <option value="rovers">Rovers (17-25 years)</option>
                    </select>
                    <textarea
                      name="interests"
                      placeholder="Your interests and why you want to join"
                      value={formData.interests}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    ></textarea>
                    <Button type="submit" className="w-full" size="lg">
                      Submit Application
                    </Button>
                  </form>
                </div>
              </div>
            )}

            {activeTab === 'volunteer' && (
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-heading font-bold text-primary-700 mb-6">
                    Volunteer Opportunities
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Share your skills and passion to help young people develop their potential. 
                    We have flexible opportunities to match your availability and interests.
                  </p>
                  
                  <div className="space-y-6">
                    {involvementOptions[1]?.opportunities?.map((opportunity, index) => (
                      <div key={index} className="bg-sage-50 p-6 rounded-xl border border-sage-200">
                        <h4 className="text-lg font-heading font-bold text-primary-700 mb-2">
                          {opportunity.role}
                        </h4>
                        <div className="text-sm text-gray-600 mb-2">
                          <strong>Commitment:</strong> {opportunity.commitment}
                        </div>
                        <div className="text-sm text-gray-600">
                          <strong>Skills:</strong> {opportunity.skills}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-sage-50 p-8 rounded-2xl">
                  <h3 className="text-xl font-heading font-bold text-primary-700 mb-6">
                    Volunteer Registration
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                    <textarea
                      name="skills"
                      placeholder="Your skills and areas of expertise"
                      value={formData.skills}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    ></textarea>
                    <textarea
                      name="availability"
                      placeholder="Your availability (days/times you can volunteer)"
                      value={formData.availability}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    ></textarea>
                    <Button type="submit" className="w-full" size="lg">
                      Register as Volunteer
                    </Button>
                  </form>
                </div>
              </div>
            )}

            {activeTab === 'donate' && (
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-heading font-bold text-primary-700 mb-6">
                    Support Our Mission
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Your donations help us continue our vital work in youth development, 
                    environmental conservation, and community service. Every contribution makes a difference.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <h4 className="text-lg font-heading font-bold text-primary-700">
                      Donation Impact
                    </h4>
                    {donationAmounts.map((donation, index) => (
                      <div 
                        key={index} 
                        className={`p-4 rounded-lg border cursor-pointer transition-all ${
                          selectedAmount === donation.amount
                            ? 'border-primary-500 bg-primary-50'
                            : 'border-gray-200 hover:border-primary-300'
                        }`}
                        onClick={() => setSelectedAmount(donation.amount)}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="text-lg font-bold text-primary-600">
                              ₹{donation.amount.toLocaleString()}
                            </div>
                            <div className="text-sm text-gray-600">
                              {donation.impact}
                            </div>
                          </div>
                          <div className={`w-4 h-4 rounded-full border-2 ${
                            selectedAmount === donation.amount
                              ? 'border-primary-500 bg-primary-500'
                              : 'border-gray-300'
                          }`}></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h4 className="text-lg font-heading font-bold text-primary-700 mb-4">
                      Payment Methods
                    </h4>
                    <div className="space-y-3 text-sm text-gray-600">
                      <div className="flex items-center">
                        <QrCode className="h-5 w-5 mr-2 text-primary-600" />
                        UPI: Scan QR code for instant payment
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-5 w-5 mr-2 text-primary-600" />
                        Bank Transfer: Direct account transfer
                      </div>
                      <div className="flex items-center">
                        <Gift className="h-5 w-5 mr-2 text-primary-600" />
                        Cheque: Payable to "24th Asoka Group BS&G"
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-sage-50 p-8 rounded-2xl">
                  <h3 className="text-xl font-heading font-bold text-primary-700 mb-6">
                    Make a Donation
                  </h3>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Donation Amount
                    </label>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-primary-600">₹</span>
                      <input
                        type="number"
                        value={customAmount || selectedAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        min="100"
                      />
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                    <textarea
                      name="message"
                      placeholder="Message (optional)"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    ></textarea>
                    
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-medium text-gray-700 mb-2">QR Code for UPI Payment</h4>
                      <div className="flex items-center justify-center h-32 bg-gray-100 rounded">
                        <QrCode className="h-16 w-16 text-gray-400" />
                      </div>
                      <p className="text-xs text-gray-500 text-center mt-2">
                        Scan with any UPI app to donate
                      </p>
                    </div>
                    
                    <Button type="submit" className="w-full" size="lg">
                      Proceed to Payment
                    </Button>
                  </form>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-700 mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions? Need more information? We're here to help you get started on your journey with us.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                <Phone className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-heading font-bold text-primary-700 mb-4">Call Us</h3>
              <div className="space-y-2 text-gray-600">
                <div>+91 9830458324</div>
                <div>+91 9836128499</div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                <Mail className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-heading font-bold text-primary-700 mb-4">Email Us</h3>
              <div className="text-gray-600">
                24asokagroup@gmail.com
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                <MapPin className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-heading font-bold text-primary-700 mb-4">Visit Us</h3>
              <div className="text-gray-600">
                7A Dover Terrace<br />
                Kolkata, West Bengal
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-linear-to-br from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Join a community that has been creating positive change for over 85 years. 
              Your journey of growth, service, and adventure begins today.
            </p>
            <div className="text-lg text-primary-100">
              <strong>Open 24/7</strong> • Always ready to welcome new members
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}