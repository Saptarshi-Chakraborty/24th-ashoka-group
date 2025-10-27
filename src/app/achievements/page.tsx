"use client"

import { motion } from 'framer-motion'
import { Award, Trophy, Star, Medal, Users, Calendar, MapPin, Target } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

// Awards and achievements data
const majorAwards = [
  {
    id: 1,
    title: 'Prime Minister Shield Award',
    year: '2010',
    category: 'National Excellence',
    description: 'Highest national award for excellence in Scouting, recognizing outstanding contribution to youth development and community service.',
    significance: 'National Level',
    awardedBy: 'Government of India',
    icon: Trophy,
    color: 'from-yellow-400 to-yellow-600'
  },
  {
    id: 2,
    title: 'Medal of Merit',
    year: '2011',
    category: 'Outstanding Service',
    description: 'Recognition for exceptional service to the Scouting movement and significant contributions to community development.',
    significance: 'National Level',
    awardedBy: 'Bharat Scouts & Guides',
    icon: Medal,
    color: 'from-purple-400 to-purple-600'
  },
  {
    id: 3,
    title: 'Golden Arrow Award',
    year: '2013',
    category: 'Program Excellence',
    description: 'Award for excellence in program delivery, innovative activities, and outstanding leadership development.',
    significance: 'State Level',
    awardedBy: 'West Bengal State Council BSG',
    icon: Star,
    color: 'from-amber-400 to-amber-600'
  },
  {
    id: 4,
    title: 'Rashtrapati Scouts & Rovers',
    year: '2014-2016',
    category: 'Youth Achievement',
    description: 'Multiple members achieved the highest award in Scouting, demonstrating excellence in leadership and service.',
    significance: 'National Level',
    awardedBy: 'President of India',
    icon: Award,
    color: 'from-blue-400 to-blue-600'
  }
]

// Competition achievements
const competitionAchievements = [
  {
    year: '2013',
    title: 'State Champion Scouts',
    event: 'West Bengal State Scout Competition',
    position: '1st Place',
    participants: '15 Scouts',
    category: 'Team Achievement'
  },
  {
    year: '2015',
    title: 'State Champion Rovers',
    event: 'West Bengal State Rover Competition',
    position: '1st Place',
    participants: '12 Rovers',
    category: 'Team Achievement'
  },
  {
    year: '2016',
    title: 'Best Environmental Project',
    event: 'National Scout Jamboree',
    position: '1st Place',
    participants: '20 Scouts & Rovers',
    category: 'Project Excellence'
  },
  {
    year: '2018',
    title: 'Innovation in Education Award',
    event: 'National Education Summit',
    position: 'Winner',
    participants: 'Kotha Initiative Team',
    category: 'Innovation'
  },
  {
    year: '2019',
    title: 'Outstanding Community Service',
    event: 'Bengal Youth Awards',
    position: 'Gold Medal',
    participants: 'Beyond Coal Project Team',
    category: 'Community Service'
  },
  {
    year: '2021',
    title: 'Disaster Relief Excellence',
    event: 'National Disaster Management Awards',
    position: 'Special Recognition',
    participants: 'Cyclone Yaas Relief Team',
    category: 'Emergency Response'
  }
]

// Individual achievements
const individualAchievements = [
  {
    name: 'Rashtrapati Scout Recipients',
    count: '25+',
    description: 'Members who achieved the highest Scout award',
    years: '2010-2023'
  },
  {
    name: 'Rashtrapati Rover Recipients',
    count: '18+',
    description: 'Members who achieved the highest Rover award',
    years: '2012-2023'
  },
  {
    name: 'International Exchange Participants',
    count: '35+',
    description: 'Members participated in international jamborees and exchanges',
    years: '2008-2023'
  },
  {
    name: 'Youth Leadership Awards',
    count: '50+',
    description: 'Various leadership awards at district and state levels',
    years: '2005-2023'
  }
]

// Timeline of achievements
const achievementTimeline = [
  { year: '1936', achievement: 'Group Foundation', description: 'Established as part of Bharat Scouts & Guides' },
  { year: '1950', achievement: 'First State Recognition', description: 'Recognition for outstanding program delivery' },
  { year: '1985', achievement: 'Community Service Excellence', description: 'Award for pioneering community service programs' },
  { year: '2000', achievement: 'Environmental Leadership', description: 'Recognition for environmental conservation initiatives' },
  { year: '2010', achievement: 'Prime Minister Shield', description: 'Highest national award for Scouting excellence' },
  { year: '2015', achievement: 'Digital Innovation Recognition', description: 'Awards for technology integration in education' },
  { year: '2020', achievement: 'Pandemic Response Excellence', description: 'Recognition for COVID-19 community support' },
  { year: '2023', achievement: 'Sustainability Leadership', description: 'Awards for climate action and sustainability programs' }
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

export default function AchievementsPage() {
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
              Achievements
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
              Celebrating 85+ years of excellence, recognition, and outstanding contributions 
              to youth development and community service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Achievement Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <motion.div variants={fadeInUp}>
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary-600 mb-2">25+</div>
              <div className="text-gray-600">Major Awards</div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary-600 mb-2">100+</div>
              <div className="text-gray-600">Individual Recognitions</div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary-600 mb-2">15+</div>
              <div className="text-gray-600">Competition Victories</div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary-600 mb-2">85+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Major Awards */}
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
              Major Awards & Recognition
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most prestigious awards that recognize our commitment to excellence in Scouting and community service.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {majorAwards.map((award) => (
              <motion.div
                key={award.id}
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className={`h-24 bg-linear-to-r ${award.color} flex items-center justify-center`}>
                  <award.icon className="h-12 w-12 text-white" />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-heading font-bold text-primary-700">
                      {award.title}
                    </h3>
                    <span className="text-2xl font-bold text-primary-600">
                      {award.year}
                    </span>
                  </div>
                  <div className="text-sm text-secondary-600 font-medium mb-3">
                    {award.category} • {award.significance}
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {award.description}
                  </p>
                  <div className="text-sm text-gray-500">
                    <strong>Awarded by:</strong> {award.awardedBy}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Competition Achievements */}
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
              Competition Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our victories in state and national level competitions demonstrating excellence across all sections.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {competitionAchievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-sage-50 border border-sage-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-bold text-primary-600">
                    {achievement.year}
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                    {achievement.position}
                  </span>
                </div>
                <h3 className="text-lg font-heading font-bold text-primary-700 mb-2">
                  {achievement.title}
                </h3>
                <div className="text-sm text-gray-600 mb-2">
                  {achievement.event}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="h-4 w-4 mr-1" />
                  {achievement.participants}
                </div>
                <div className="mt-3 px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded inline-block">
                  {achievement.category}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Individual Achievements */}
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
              Individual Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Celebrating the achievements of our members who have reached the highest levels of Scouting excellence.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {individualAchievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl font-heading font-bold text-primary-600 mb-3">
                  {achievement.count}
                </div>
                <h3 className="text-lg font-heading font-bold text-primary-700 mb-3">
                  {achievement.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {achievement.description}
                </p>
                <div className="text-xs text-gray-500">
                  {achievement.years}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Achievement Timeline */}
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
              Timeline of Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones and recognitions that mark our journey of continuous improvement and service.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary-200 h-full"></div>

            {achievementTimeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-sage-100 hover:shadow-xl transition-shadow">
                    <div className="text-2xl font-heading font-bold text-primary-600 mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-lg font-heading font-bold text-primary-700 mb-2">
                      {item.achievement}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Partners */}
      <section className="py-20 bg-linear-to-br from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Recognition Partners
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Organizations and institutions that have recognized our contributions to society.
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
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">Government of India</h3>
              <p className="text-primary-100">
                Prime Minister Shield Award and other national recognitions for excellence in youth development.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">Bharat Scouts & Guides</h3>
              <p className="text-primary-100">
                Multiple awards for program innovation, leadership development, and community service excellence.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                <Trophy className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">International Recognition</h3>
              <p className="text-primary-100">
                Recognition from WOSM and participation in international jamborees and exchange programs.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-700 mb-6">
              Join Our Legacy of Excellence
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Be part of a movement that has been recognized for its excellence and commitment to positive change. 
              Your journey towards personal achievement and community service starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/get-involved">
                <Button size="lg" className="text-lg px-8 py-4">
                  Start Your Journey
                </Button>
              </Link>
              <Link href="/units">
                <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                  Explore Our Programs
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}