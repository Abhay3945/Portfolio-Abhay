'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Globe, Users, TrendingUp, Database } from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'FontChanger.net',
    category: 'Web Application',
    description: 'A high-traffic web application for font customization and text styling with advanced typography features.',
    image: '/images/projects/fontchanger.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'SEO Optimization', 'Vercel'],
    features: [
      'Real-time font preview and customization',
      'Advanced typography controls and settings',
      'SEO-optimized content for maximum reach',
      'Responsive design for all devices'
    ],
    metrics: {
      users: '104K+ Monthly Users',
      value: '$7.9K Traffic Value',
      performance: '98% Performance Score'
    },
    links: {
      live: 'https://fontchanger.net',
      github: null
    },
    status: 'Live',
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    id: 2,
    title: 'Tata Project - Battery Traceability System',
    category: 'Enterprise Application',
    description: 'Enterprise-level battery tracking system for Tata Group, managing complete lifecycle in manufacturing environments.',
    image: '/images/projects/battery-system.jpg',
    technologies: ['FastAPI', 'Next.js', 'Python', 'SQL Server', 'REST APIs'],
    features: [
      '15+ RESTful API endpoints with documentation',
      'Real-time data synchronization and tracking',
      'Advanced reporting and analytics dashboard',
      'Multi-user authentication and role management'
    ],
    metrics: {
      client: 'Tata Group',
      apis: '15+ API Endpoints',
      efficiency: 'Enterprise Scale'
    },
    links: {
      live: null,
      github: null
    },
    status: 'Completed',
    gradient: 'from-green-500 to-teal-600'
  },
  {
    id: 3,
    title: 'Sorting Algorithm Visualizer',
    category: 'Web Application',
    description: 'Interactive visualization tool for popular sorting algorithms with real-time animations and performance comparisons.',
    image: '/images/projects/sorting-visualizer.jpg',
    technologies: ['React', 'JavaScript', 'CSS3', 'HTML5', 'Algorithms'],
    features: [
      'Visual representation of 8+ sorting algorithms',
      'Real-time speed and comparison controls',
      'Interactive array size and speed adjustment',
      'Algorithm complexity analysis display'
    ],
    metrics: {
      algorithms: '8+ Algorithms',
      animations: 'Real-time Visualization',
      performance: 'O(n) to O(n²) Analysis'
    },
    links: {
      live: '#',
      github: '#'
    },
    status: 'Live',
    gradient: 'from-orange-500 to-red-600'
  },
  {
    id: 4,
    title: 'Insurance Hub',
    category: 'Web Application',
    description: 'Comprehensive insurance management platform with policy tracking, claims processing, and customer management.',
    image: '/images/projects/insurance-hub.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JWT'],
    features: [
      'Policy management and tracking system',
      'Claims processing workflow automation',
      'Customer dashboard and notifications',
      'Agent management and commission tracking'
    ],
    metrics: {
      policies: '500+ Policies Managed',
      claims: '95% Processing Efficiency',
      satisfaction: '4.7/5 User Rating'
    },
    links: {
      live: '#',
      github: '#'
    },
    status: 'Live',
    gradient: 'from-indigo-500 to-purple-600'
  }
]

const categories = ['All', 'Web Application', 'Enterprise Application']

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Showcasing innovative solutions that demonstrate technical expertise and deliver real-world impact.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-2xl transition-all duration-500"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{ y: -10 }}
            >
              {/* Project Image/Placeholder */}
              <div className={`h-48 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Globe className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-sm font-medium">{project.category}</p>
                  </div>
                </div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Live' ? 'bg-green-500 text-white' :
                    project.status === 'Completed' ? 'bg-blue-500 text-white' :
                    'bg-yellow-500 text-black'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                {/* Project Title and Description */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 2).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <div className="w-1 h-1 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics */}
                <div className="mb-4">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {Object.entries(project.metrics).slice(0, 2).map(([key, value]) => (
                      <div key={key} className="bg-white dark:bg-gray-800 p-2 rounded-lg">
                        <div className="font-semibold text-gray-900 dark:text-white">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.links.live && (
                    <motion.a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-shadow"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                  )}
                  {project.links.github && (
                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg text-sm font-medium hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Have a Project in Mind?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always excited to work on innovative projects that challenge me and create value. 
              Let's discuss how we can bring your ideas to life with cutting-edge technology.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
