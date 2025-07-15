'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink, TrendingUp } from 'lucide-react'

const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'Orbittal Electromech Engineering Projects Pvt Ltd',
    period: 'Jun 2024 - Present',
    location: 'Pune, Maharashtra',
    type: 'Full Time',
    description: 'Developing enterprise-level solutions and battery traceability systems for manufacturing industry.',
    achievements: [
      'Built comprehensive Tata Project battery tracking system using FastAPI and Next.js',
      'Developed 15+ RESTful API endpoints with proper documentation',
      'Implemented real-time data synchronization and reporting features',
      'Achieved significant performance improvements through optimization'
    ],
    technologies: ['FastAPI', 'Next.js', 'Python', 'SQL Server', 'REST APIs'],
    impact: 'Enterprise Solutions'
  },
  {
    title: 'Freelance Full Stack Developer',
    company: 'FontChanger.net',
    period: 'Oct 2024 - Present',
    location: 'Remote',
    type: 'Freelance',
    description: 'Developed and launched a high-traffic web application for font customization and text styling.',
    achievements: [
      'Built responsive web app using Next.js, TypeScript, and Tailwind CSS',
      'Achieved 104K+ monthly users with excellent SEO optimization',
      'Generated $7.9K traffic value through strategic content and technical SEO',
      'Implemented advanced font rendering and real-time preview features'
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'SEO', 'Vercel'],
    link: 'https://fontchanger.net',
    impact: '104K+ Monthly Users'
  },
  {
    title: 'Interior Designer & Developer',
    company: 'Florentina Interiors and Architects',
    period: 'Apr 2024 - Apr 2025',
    location: 'Pune, Maharashtra',
    type: 'Contract',
    description: 'Combined interior design expertise with web development skills to create digital solutions.',
    achievements: [
      'Designed and developed client presentation systems',
      'Created digital portfolios and project management tools',
      'Integrated design workflows with modern web technologies',
      'Enhanced client communication through digital platforms'
    ],
    technologies: ['Web Development', 'Design Tools', 'Project Management'],
    impact: 'Digital Solutions'
  },
  {
    title: 'PG-DAC Student',
    company: 'Centre for Development of Advanced Computing (CDAC)',
    period: 'Sep 2024 - Present',
    location: 'Pune, Maharashtra',
    type: 'Education',
    description: 'Advanced certification program focusing on modern software development technologies.',
    achievements: [
      'Mastering advanced Java programming and enterprise frameworks',
      'Learning cloud computing and distributed systems architecture',
      'Developing expertise in database management and optimization',
      'Working on industry-relevant projects and case studies'
    ],
    technologies: ['Java', 'Spring Boot', 'Microservices', 'Cloud Computing', 'System Design'],
    impact: 'Industry Certification'
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-green-600 dark:from-white dark:to-green-400 bg-clip-text text-transparent mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Building innovative solutions and delivering exceptional results across diverse projects and technologies.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 hidden md:block" />

                <div className="md:ml-20">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                          <span className="font-semibold text-blue-600 dark:text-blue-400">
                            {exp.company}
                          </span>
                          {exp.link && (
                            <a
                              href={exp.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                              Visit
                            </a>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex flex-col md:items-end gap-2 mt-4 md:mt-0">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          exp.type === 'Freelance' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                          exp.type === 'Internship' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                          'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                        }`}>
                          {exp.type}
                        </span>
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (index * 0.2) + (achIndex * 0.1) }}
                            className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies and Impact */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold">
                        <TrendingUp className="w-4 h-4" />
                        {exp.impact}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and contribute to innovative projects. 
              Let's discuss how I can help bring your ideas to life.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
