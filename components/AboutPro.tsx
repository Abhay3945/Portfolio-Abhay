'use client'

import { motion } from 'framer-motion'
import { Code, Database, Globe, Smartphone, Users, Zap } from 'lucide-react'

const highlights = [
  {
    icon: Code,
    title: 'Full Stack Development',
    description: 'End-to-end web applications with React, Next.js, and Python'
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Scalable database architectures with MySQL and SQL Server'
  },
  {
    icon: Globe,
    title: 'SEO & Performance',
    description: 'High-performance websites with excellent search rankings'
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Mobile-first approach ensuring perfect user experience'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Strong teamwork and communication in agile environments'
  },
  {
    icon: Zap,
    title: 'Innovation Focus',
    description: 'Always exploring cutting-edge technologies and solutions'
  }
]

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate Full Stack Developer with expertise in modern web technologies and a track record of building scalable, user-centric applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Building Digital Solutions That Matter
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm a dedicated Full Stack Developer from Pune, India, with a passion for creating innovative 
              digital solutions. Currently pursuing PG-DAC at CDAC while working on cutting-edge projects 
              that make a real impact.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              My journey spans from building high-traffic websites like FontChanger.net (104K+ monthly users) 
              to developing complex enterprise systems like Battery Traceability Systems with FastAPI and Next.js.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I believe in writing clean, efficient code and staying updated with the latest technologies 
              to deliver exceptional user experiences.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              {['React', 'Next.js', 'Python', 'FastAPI', 'TypeScript', 'SQL Server'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-3 gap-8 text-center"
        >
          {[
            { number: '104K+', label: 'Monthly Users' },
            { number: '$7.9K', label: 'Traffic Value' },
            { number: '3+', label: 'Years Experience' }
          ].map((stat, index) => (
            <div key={stat.label} className="space-y-2">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: 'spring' }}
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                {stat.number}
              </motion.div>
              <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
