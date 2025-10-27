"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Calendar, Send, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'

// Contact information
const contactInfo = {
  address: {
    line1: '7A Dover Terrace',
    line2: 'Kolkata, West Bengal',
    line3: 'India - 700029'
  },
  phones: [
    '+91 9830458324',
    '+91 9836128499'
  ],
  email: '24asokagroup@gmail.com',
  hours: 'Open 24/7 - Always ready to welcome new members',
  socialMedia: {
    facebook: 'https://facebook.com/24thAsokagroupBSG',
    instagram: 'https://instagram.com/24th_asoka_group_bsg',
    website: 'www.24thasokagroup.org'
  }
}

// Meeting schedule
const meetingSchedule = [
  {
    section: 'Cubs',
    age: '6-11 years',
    day: 'Saturday',
    time: '4:00 PM - 6:00 PM',
    activities: 'Games, nature activities, basic skills'
  },
  {
    section: 'Scouts',
    age: '11-17 years',
    day: 'Sunday',
    time: '9:00 AM - 12:00 PM',
    activities: 'Adventure skills, camping, leadership'
  },
  {
    section: 'Rovers',
    age: '17-25 years',
    day: 'Sunday',
    time: '2:00 PM - 5:00 PM',
    activities: 'Community service, advanced projects'
  }
]

// FAQ data
const faqs = [
  {
    question: 'How can I join the 24th Asoka Group?',
    answer: 'You can join by contacting us directly, visiting our headquarters, or filling out the membership form on our Get Involved page. We welcome new members throughout the year.'
  },
  {
    question: 'What is the cost of membership?',
    answer: 'Membership fees vary by section. Cubs and Scouts have nominal annual fees, while Rovers participate based on project involvement. Contact us for detailed fee structure.'
  },
  {
    question: 'Do you accept international participants?',
    answer: 'Yes! We welcome international participants for exchanges, camps, and special projects. We have hosted participants from Nepal, Bangladesh, and other countries.'
  },
  {
    question: 'What should I bring to my first meeting?',
    answer: 'Just bring yourself and enthusiasm! We\'ll provide all necessary materials for your first few meetings. Eventually, you may want to get a uniform and handbook.'
  },
  {
    question: 'Can parents get involved too?',
    answer: 'Absolutely! We encourage parent involvement through volunteering, supporting activities, and joining our parent committee. Many of our leaders are also parents.'
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiry: 'general'
  })

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

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
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      inquiry: 'general'
    })
  }

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
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
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
              Ready to start your Scouting journey? Have questions about our programs? 
              We're here to help and always excited to meet new friends.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary-700 mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We're always excited to hear from young people interested in joining our movement, 
                  parents looking for enriching activities for their children, and community members 
                  who want to support our mission.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-700 mb-1">Our Location</h3>
                    <div className="text-gray-600">
                      <div>{contactInfo.address.line1}</div>
                      <div>{contactInfo.address.line2}</div>
                      <div>{contactInfo.address.line3}</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-700 mb-1">Phone Numbers</h3>
                    <div className="text-gray-600 space-y-1">
                      {contactInfo.phones.map((phone, index) => (
                        <div key={index}>{phone}</div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-700 mb-1">Email Address</h3>
                    <div className="text-gray-600">{contactInfo.email}</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-700 mb-1">Availability</h3>
                    <div className="text-gray-600">{contactInfo.hours}</div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-semibold text-primary-700 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href={contactInfo.socialMedia.facebook}
                    className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="h-6 w-6 text-blue-600" />
                  </a>
                  <a 
                    href={contactInfo.socialMedia.instagram}
                    className="bg-pink-100 p-3 rounded-full hover:bg-pink-200 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="h-6 w-6 text-pink-600" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-sage-50 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-heading font-bold text-primary-700 mb-6">
                Send Us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
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
                  />
                  <select
                    name="inquiry"
                    value={formData.inquiry}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="membership">Membership</option>
                    <option value="volunteering">Volunteering</option>
                    <option value="donations">Donations</option>
                    <option value="partnerships">Partnerships</option>
                    <option value="media">Media Inquiry</option>
                  </select>
                </div>
                
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
                
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                ></textarea>
                
                <Button type="submit" className="w-full" size="lg">
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-700 mb-6">
              Find Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in the heart of South Kolkata, our headquarters has been a center of 
              youth development and community service since 1936.
            </p>
          </motion.div>

          {/* Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                <p className="text-gray-500">
                  7A Dover Terrace, Kolkata, West Bengal<br />
                  (Google Maps integration would be embedded here)
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meeting Schedule */}
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
              Meeting Schedule
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us for regular meetings where we build skills, plan adventures, and work on community projects.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {meetingSchedule.map((meeting, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-sage-50 border border-sage-200 rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                  <Calendar className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary-700 mb-2">
                  {meeting.section}
                </h3>
                <div className="text-sm text-secondary-600 font-medium mb-4">
                  {meeting.age}
                </div>
                <div className="space-y-2 text-gray-600 mb-4">
                  <div className="font-semibold">{meeting.day}</div>
                  <div>{meeting.time}</div>
                </div>
                <div className="text-sm text-gray-500">
                  {meeting.activities}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about joining and participating in our programs.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white border border-sage-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-sage-50 transition-colors"
                >
                  <h3 className="text-lg font-heading font-semibold text-primary-700">
                    {faq.question}
                  </h3>
                  <div className={`transform transition-transform ${
                    expandedFaq === index ? 'rotate-180' : ''
                  }`}>
                    <MessageCircle className="h-5 w-5 text-primary-600" />
                  </div>
                </button>
                {expandedFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-linear-to-br from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Need Immediate Assistance?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              For urgent matters related to our activities, emergencies during events, 
              or immediate assistance, please call our emergency contact line.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg">
                <Phone className="h-6 w-6" />
                <span className="text-lg font-semibold">Emergency: +91 9830458324</span>
              </div>
              <div className="text-primary-100">
                Available 24/7 during events and camps
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}