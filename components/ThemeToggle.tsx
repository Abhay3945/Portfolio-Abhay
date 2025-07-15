'use client'

import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className={`
        relative p-2 rounded-lg border-2 transition-all duration-300 ease-in-out
        ${theme === 'dark' 
          ? 'border-dark-600 bg-dark-800 text-yellow-400 hover:bg-dark-700' 
          : 'border-gray-200 bg-white text-gray-600 hover:bg-gray-50'
        }
        shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={false}
      animate={{
        rotate: theme === 'dark' ? 180 : 0,
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <motion.div
        initial={false}
        animate={{
          scale: theme === 'dark' ? 1 : 0,
          opacity: theme === 'dark' ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Moon className="w-5 h-5" />
      </motion.div>
      
      <motion.div
        initial={false}
        animate={{
          scale: theme === 'light' ? 1 : 0,
          opacity: theme === 'light' ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="relative flex items-center justify-center"
      >
        <Sun className="w-5 h-5" />
      </motion.div>
    </motion.button>
  )
}
