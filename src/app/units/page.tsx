"use client"

import { motion } from 'framer-motion'
import { Users, Calendar, MapPin, Award, Heart, Star, Target, Trophy, Compass, TreePine } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { PointerHighlight } from '@/components/ui/PointerHighlight'
import Link from 'next/link'

// Units data
const units = [
  {
    id: 'cubs',
    name: 'Cubs',
    ageRange: '6-11 years',
    motto: 'Do Your Best',
    icon: Star,
    color: 'from-yellow-400 to-orange-500',
    description: 'Fun, friendship and outdoor adventure for the youngest Scouts',
    activities: [
      'Nature exploration and environmental games',
      'Basic camping and outdoor skills',
      'Creative arts and crafts projects',
      'Community service activities',
      'Team building and friendship activities',
      'Basic first aid and safety skills'
    ],
    awards: [
      'Bronze, Silver, Gold Activity Badges',
      'Challenge Badges',
      'Staged Activity Badges',
      'International Activity Badge'
    ],
    weeklyMeeting: 'Saturdays, 4:00 PM - 6:00 PM',
    specialPrograms: [
      'Annual Cubs Camp',
      'Nature Trails and Bird Watching',
      'Environmental Awareness Programs',
      'Creative Workshop Sessions'
    ]
  },
  {
    id: 'scouts',
    name: 'Scouts',
    ageRange: '11-17 years',
    motto: 'Be Prepared',
    icon: Compass,
    color: 'from-green-500 to-emerald-600',
    description: 'Adventure, skills and friendship for young people',
    activities: [
      'Advanced camping and hiking',
      'Leadership development training',
      'Environmental conservation projects',
      'Disaster preparedness and first aid',
      'Adventure activities and expeditions',
      'Community service initiatives'
    ],
    awards: [
      'Activity Badges in various skills',
      'Challenge Badges',
      'Staged Activity Badges',
      'Chief Scout\'s Award (highest award)'
    ],
    weeklyMeeting: 'Sundays, 9:00 AM - 12:00 PM',
    specialPrograms: [
      'Annual Scout Camps',
      'Trekking Expeditions (Sandakphu, Darjeeling)',
      'River Rafting Adventures',
      'Disaster Relief Training'
    ]
  },
  {
    id: 'rovers',
    name: 'Rovers',
    ageRange: '17-25 years',
    motto: 'Service',
    icon: TreePine,
    color: 'from-blue-500 to-indigo-600',
    description: 'Leadership, service and adventure for young adults',
    activities: [
      'Community development projects',
      'Environmental conservation leadership',
      'Disaster relief and emergency response',
      'Youth mentoring and leadership',
      'Advanced outdoor adventures',
      'International exchange programs'
    ],
    awards: [
      'Rover Badges in specialized skills',
      'Service Projects Recognition',
      'BP Award (highest Rover award)',
      'International Rover exchanges'
    ],
    weeklyMeeting: 'Sundays, 2:00 PM - 5:00 PM',
    specialPrograms: [
      'Gulab Gang (Women-led Rover Unit)',
      'Beyond Coal Project Leadership',
      'Sundarban Conservation Projects',
      'International Jamborees'
    ]
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

export default function UnitsPage() {
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
              Our <PointerHighlight containerClassName="inline-block">
                <span className="text-green-300">Units</span>
              </PointerHighlight>
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
              From Cubs to Rovers, we provide age-appropriate programs that challenge, 
              inspire and develop young people at every stage of their journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Units Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {units.map((unit, index) => (
              <motion.div
                key={unit.id}
                variants={fadeInUp}
                className="bg-white border border-sage-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`h-32 bg-linear-to-r ${unit.color} flex items-center justify-center`}>
                  <unit.icon className="h-16 w-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-heading font-bold text-primary-700 mb-2">
                    {unit.name}
                  </h3>
                  <div className="text-sm text-secondary-600 font-medium mb-3">
                    {unit.ageRange} • {unit.motto}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {unit.description}
                  </p>
                  <Link href={`#${unit.id}`}>
                    <Button className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Detailed Unit Sections */}
      {units.map((unit, index) => (
        <section
          key={unit.id}
          id={unit.id}
          className={index % 2 === 0 ? "py-20 bg-sage-50" : "py-20 bg-white"}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 bg-linear-to-r ${unit.color} rounded-full mb-6`}>
                <unit.icon className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-700 mb-4">
                {unit.name} Section
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {unit.description} - designed specifically for young people aged {unit.ageRange}.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Activities & Programs */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-heading font-bold text-primary-700 mb-6 flex items-center">
                    <Target className="h-6 w-6 mr-3" />
                    Activities & Skills
                  </h3>
                  <ul className="space-y-3">
                    {unit.activities.map((activity, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 mr-3 shrink-0"></div>
                        <span className="text-gray-600">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-heading font-bold text-primary-700 mb-6 flex items-center">
                    <Trophy className="h-6 w-6 mr-3" />
                    Awards & Recognition
                  </h3>
                  <ul className="space-y-3">
                    {unit.awards.map((award, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 shrink-0"></div>
                        <span className="text-gray-600">{award}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Meeting Info & Special Programs */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-heading font-bold text-primary-700 mb-6 flex items-center">
                    <Calendar className="h-6 w-6 mr-3" />
                    Meeting Schedule
                  </h3>
                  <div className="text-lg text-gray-600 mb-4">
                    <strong>Weekly Meetings:</strong> {unit.weeklyMeeting}
                  </div>
                  <div className="text-lg text-gray-600">
                    <strong>Location:</strong> 7A Dover Terrace, Kolkata
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-heading font-bold text-primary-700 mb-6 flex items-center">
                    <Star className="h-6 w-6 mr-3" />
                    Special Programs
                  </h3>
                  <ul className="space-y-3">
                    {unit.specialPrograms.map((program, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 shrink-0"></div>
                        <span className="text-gray-600">{program}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`bg-linear-to-r ${unit.color} p-8 rounded-xl text-white`}>
                  <h3 className="text-xl font-heading font-bold mb-4">
                    Ready to Join {unit.name}?
                  </h3>
                  <p className="mb-6 opacity-90">
                    Start your adventure with us! Contact our {unit.name} leader to learn more 
                    about joining our vibrant community.
                  </p>
                  <Link href="/get-involved">
                    <Button variant="secondary" className="bg-white text-primary-700 hover:bg-gray-100">
                      Join {unit.name} Today
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Why Join Us Section */}
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
              Why Choose Our Units?
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Our programs are designed to develop the whole person - mind, body, and spirit.
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
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">Experienced Leadership</h3>
              <p className="text-primary-100">
                Our trained leaders provide mentorship, guidance, and support for every young person's journey.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">Proven Track Record</h3>
              <p className="text-primary-100">
                85+ years of excellence with numerous awards including the Prime Minister Shield Award.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">Values-Based Development</h3>
              <p className="text-primary-100">
                We focus on character building, citizenship, and developing responsible future leaders.
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
              Start Your Scouting Journey Today
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Whether you're 6 or 25, there's a place for you in our movement. 
              Join thousands who have discovered their potential through Scouting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/get-involved">
                <Button size="lg" className="text-lg px-8 py-4">
                  Join a Unit
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                  Get More Information
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}