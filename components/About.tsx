'use client'

import { motion } from 'framer-motion'
import { User, Target, Heart } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate full-stack developer with a strong foundation in modern web technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  I'm a dedicated Full Stack Developer with expertise in building modern, 
                  scalable web applications. Currently pursuing PG-DAC at CDAC-ACTS, Pune, 
                  I've developed a strong foundation in both frontend and backend technologies.
                </p>
                <p>
                  My experience spans from creating battery traceability systems with FastAPI 
                  and SQL Server to developing high-traffic web applications that serve 
                  hundreds of thousands of users monthly.
                </p>
                <p>
                  I'm passionate about writing clean, efficient code and continuously learning 
                  new technologies to stay at the forefront of web development.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-primary-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900">Professional</h4>
              </div>
              <p className="text-gray-600">
                Experienced in delivering high-quality solutions with focus on user experience 
                and performance optimization.
              </p>
            </div>

            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900">Goal-Oriented</h4>
              </div>
              <p className="text-gray-600">
                Committed to achieving project objectives through strategic planning and 
                efficient implementation.
              </p>
            </div>

            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-red-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900">Passionate</h4>
              </div>
              <p className="text-gray-600">
                Enthusiastic about technology and innovation, always eager to learn and 
                implement new solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
