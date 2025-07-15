export interface Experience {
  id: string
  company: string
  position: string
  duration: string
  description: string[]
  techStack: string[]
  link?: string
}

export interface Project {
  id: string
  title: string
  description: string[]
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
}

export interface Education {
  id: string
  degree: string
  institution: string
  board: string
  grade: string
  year: string
}

export interface Skill {
  category: string
  skills: string[]
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface PersonalInfo {
  name: string
  title: string
  email: string
  phone: string
  location: string
  linkedin: string
  github: string
}

export interface Certification {
  id: string
  title: string
  description: string
}
