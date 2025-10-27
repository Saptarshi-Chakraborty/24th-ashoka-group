"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Units', href: '/units' },
  { name: 'Projects', href: '/projects' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Achievements', href: '/achievements' },
  { name: 'Get Involved', href: '/get-involved' },
  { name: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Contact Bar */}
      <div className="bg-green-600 text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+91 9830458324</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>24asokagroup@gmail.com</span>
            </div>
          </div>
          <div className="text-center md:text-right">
            <span className="font-medium">Serving Community Since 1936</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav 
        className={cn(
          "bg-white transition-all duration-300 border-b",
          isScrolled 
            ? "shadow-lg border-gray-200/50 backdrop-blur-sm bg-white/95" 
            : "shadow-sm border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="flex flex-col">
                <div className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                  24th Asoka Group
                </div>
                <div className="text-sm text-green-600 font-medium -mt-1">
                  Bharat Scouts & Guides
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-gray-700 hover:text-green-600 px-4 py-2 text-sm font-medium transition-colors duration-200 group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                href="/get-involved"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Join Our Movement
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-white border-t border-gray-100"
            >
              <div className="px-4 py-4 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-gray-700 hover:text-green-600 hover:bg-gray-50 px-4 py-3 rounded-lg text-base font-medium transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-100">
                  <Link
                    href="/get-involved"
                    className="block bg-green-600 hover:bg-green-700 text-white text-center px-4 py-3 rounded-lg text-base font-semibold transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Join Our Movement
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}