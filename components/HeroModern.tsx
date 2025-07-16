'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, MapPin, Download, Sparkles } from 'lucide-react'
import { personalInfo } from '@/lib/data'

export function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-100 dark:from-dark-950 dark:via-dark-900 dark:to-dark-800">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-8"
          >
            <div className="relative mx-auto w-40 h-40 mb-8">
              {/* Rotating rings animation */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-blue-400 dark:border-blue-600 opacity-60"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-2 rounded-full border border-purple-400 dark:border-purple-600 opacity-40"
              />
              
              {/* Main profile circle */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-full flex items-center justify-center shadow-2xl border-4 border-white dark:border-dark-700"
              >
                <span className="text-4xl font-bold text-white">
                  {personalInfo.name.split(' ').map(n => n[0]).join('')}
                </span>
                
                {/* Floating particles */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full"
                />
                <motion.div
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  className="absolute -bottom-1 -left-2 w-3 h-3 bg-pink-400 rounded-full"
                />
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.4, 0.9, 0.4]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute top-2 -left-3 w-2 h-2 bg-green-400 rounded-full"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
              <span className="block bg-gradient-to-r from-gray-900 via-primary-600 to-purple-600 dark:from-white dark:via-primary-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">
                {personalInfo.name.split(' ').slice(0, 2).join(' ')}
              </span>
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                {personalInfo.name.split(' ').slice(2).join(' ')}
              </span>
            </h1>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center justify-center gap-2 mb-6"
            >
              <Sparkles className="w-6 h-6 text-primary-500 dark:text-primary-400" />
              <p className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                {personalInfo.title}
              </p>
              <Sparkles className="w-6 h-6 text-primary-500 dark:text-primary-400" />
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Passionate Full Stack Developer building innovative digital solutions that make a real impact. 
            Experienced in modern web technologies and committed to creating scalable, user-centric applications 
            with clean, efficient code.
          </motion.p>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center justify-center gap-2 mb-10 text-gray-600 dark:text-gray-400"
          >
            <MapPin className="w-5 h-5" />
            <span className="text-lg">{personalInfo.location}</span>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              Get In Touch
              <motion.div
                className="w-0 h-0.5 bg-white group-hover:w-6 transition-all duration-300"
              />
            </motion.a>
            
            <motion.a
              href="/Abhay_Tambe_Resume.pdf"
              download
              className="px-8 py-4 border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-400 dark:hover:text-dark-900 font-semibold rounded-xl transition-all duration-300 flex items-center gap-3 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              Download CV
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex items-center justify-center gap-6 mb-16"
          >
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white dark:bg-dark-800 rounded-full shadow-lg hover:shadow-xl border border-gray-200 dark:border-dark-700 text-blue-600 hover:text-blue-700 transition-all duration-300 group"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white dark:bg-dark-800 rounded-full shadow-lg hover:shadow-xl border border-gray-200 dark:border-dark-700 text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-all duration-300 group"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            onClick={scrollToNext}
            className="mx-auto block p-3 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            whileHover={{ y: -2 }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown className="w-6 h-6" />
            </motion.div>
            <span className="sr-only">Scroll to next section</span>
          </motion.button>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
    </section>
  )
}
