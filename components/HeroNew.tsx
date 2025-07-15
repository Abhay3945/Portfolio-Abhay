'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, MapPin, Phone, Code, Terminal } from 'lucide-react'
import { personalInfo } from '@/lib/data'

export function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-float"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 dark:opacity-10"></div>

      <div className="container-custom section-padding relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Avatar with floating elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            className="mb-8 relative"
          >
            <div className="relative inline-block">
              {/* Main Avatar */}
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 rounded-full flex items-center justify-center shadow-2xl ring-4 ring-white/20 dark:ring-dark-700/50">
                <span className="text-3xl md:text-4xl font-bold text-white">
                  {personalInfo.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              
              {/* Floating Tech Icons */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Code className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <Terminal className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Name with typing effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-gray-900 dark:text-white mb-2">
                Hi, I'm
              </span>
              <span className="block gradient-text">
                {personalInfo.name.split(' ').slice(0, 2).join(' ')}
              </span>
            </h1>
          </motion.div>

          {/* Title with modern styling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-8"
          >
            <div className="inline-block px-6 py-3 bg-primary-100 dark:bg-primary-900/30 rounded-full border border-primary-200 dark:border-primary-700/50">
              <h2 className="text-xl md:text-2xl font-semibold text-primary-700 dark:text-primary-300">
                {personalInfo.title}
              </h2>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate about building innovative web applications with modern technologies. 
            Specializing in full-stack development with React, Next.js, Python, and cloud technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn-primary group"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Get In Touch
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary group"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              LinkedIn
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary group"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              GitHub
            </a>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 max-w-2xl mx-auto"
          >
            <div className="card p-4 text-center hover:scale-105 transition-transform">
              <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600 dark:text-gray-400">{personalInfo.location}</p>
            </div>
            <div className="card p-4 text-center hover:scale-105 transition-transform">
              <Phone className="w-5 h-5 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600 dark:text-gray-400">{personalInfo.phone}</p>
            </div>
            <div className="card p-4 text-center hover:scale-105 transition-transform">
              <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600 dark:text-gray-400 truncate">{personalInfo.email}</p>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            onClick={scrollToNext}
            className="group flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </section>
  )
}
