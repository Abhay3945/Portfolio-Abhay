'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const skillCategories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React/Next.js', color: 'from-blue-500 to-cyan-500' },
      { name: 'TypeScript', color: 'from-blue-600 to-blue-400' },
      { name: 'Tailwind CSS', color: 'from-cyan-500 to-teal-500' },
      { name: 'JavaScript ES6+', color: 'from-yellow-500 to-orange-500' },
      { name: 'HTML5/CSS3', color: 'from-orange-500 to-red-500' },
      { name: 'Responsive Design', color: 'from-purple-500 to-pink-500' }
    ]
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Java', color: 'from-red-600 to-orange-600' },
      { name: 'Spring Boot', color: 'from-green-600 to-green-400' },
      { name: 'Spring Framework', color: 'from-green-500 to-emerald-500' },
      { name: 'Python', color: 'from-green-500 to-blue-500' },
      { name: 'FastAPI', color: 'from-green-600 to-green-400' },
      { name: 'Node.js', color: 'from-green-600 to-lime-500' },
      { name: 'RESTful APIs', color: 'from-indigo-500 to-purple-500' },
      { name: 'Microservices', color: 'from-purple-600 to-indigo-500' }
    ]
  },
  {
    name: 'Database',
    skills: [
      { name: 'SQL Server', color: 'from-red-500 to-orange-500' },
      { name: 'MySQL', color: 'from-blue-600 to-cyan-500' },
      { name: 'PostgreSQL', color: 'from-blue-700 to-blue-500' },
      { name: 'Database Design', color: 'from-purple-500 to-blue-500' },
      { name: 'Query Optimization', color: 'from-indigo-500 to-purple-500' }
    ]
  },
  {
    name: 'Tools & Technologies',
    skills: [
      { name: 'Git/GitHub', color: 'from-gray-700 to-gray-500' },
      { name: 'Docker', color: 'from-blue-600 to-blue-400' },
      { name: 'VS Code', color: 'from-blue-500 to-cyan-400' },
      { name: 'Linux/Ubuntu', color: 'from-orange-600 to-red-500' },
      { name: 'Vercel/Netlify', color: 'from-black to-gray-600' },
      { name: 'Figma', color: 'from-purple-500 to-pink-500' }
    ]
  }
]

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-purple-600 dark:from-white dark:to-purple-400 bg-clip-text text-transparent mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that power my development process.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.name}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === index
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all group"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center justify-center">
                <div className={`w-3 h-3 bg-gradient-to-r ${skill.color} rounded-full mr-3 group-hover:scale-125 transition-transform`} />
                <h3 className="font-medium text-gray-900 dark:text-white text-center">
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technical Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Recent Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Performance Optimization',
                description: 'Achieved 60% performance improvement in web applications through advanced optimization techniques'
              },
              {
                title: 'API Development',
                description: 'Built 15+ robust FastAPI endpoints with comprehensive documentation and testing'
              },
              {
                title: 'User Engagement',
                description: 'Developed FontChanger.net reaching 104K+ monthly active users with excellent SEO'
              }
            ].map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <h4 className="font-semibold mb-2">{achievement.title}</h4>
                <p className="text-purple-100 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
