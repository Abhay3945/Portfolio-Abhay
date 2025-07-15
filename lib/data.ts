import { Experience, Project, Education, Skill, PersonalInfo, Certification } from '@/types'

export const personalInfo: PersonalInfo = {
  name: 'Abhay Dattatray Tambe',
  title: 'Full Stack Developer',
  email: 'dattatraytambe505@gmail.com',
  phone: '+91 8999354637',
  location: 'Pune, Maharashtra, India',
  linkedin: 'https://www.linkedin.com/in/abhay-tambe-39a675251',
  github: 'https://github.com/Abhay3945',
}

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Orbittal Electromech Eng Projects Pvt. Ltd.',
    position: 'Full Stack Developer',
    duration: 'June 2025 – Present',
    description: [
      'Developed a Battery Traceability System using FastAPI, SQL Server, Next.js, and Tailwind CSS.',
      'Built 15+ optimized APIs with filters and pagination; reduced server calls by 60%.',
      'Designed a 4-level expandable UI (Pack → Station → Process → Bolt) with lazy loading.',
      'Handled 300+ records with schema validation and modular backend logic.',
    ],
    techStack: ['FastAPI', 'SQL Server', 'SQLAlchemy', 'Python', 'Next.js', 'React.js', 'Tailwind CSS'],
  },
  {
    id: '2',
    company: 'Florentina Interiors and Architects',
    position: 'Web Developer',
    duration: 'May 2024 – May 2025',
    description: [
      'Built and managed their official WordPress website, focusing on UI and responsiveness.',
      'Optimized SEO and integrated Google My Business to improve local search rankings.',
    ],
    techStack: ['WordPress', 'Elementor', 'Yoast SEO', 'Google My Business'],
    link: 'https://florentinainteriors.in/',
  },
  {
    id: '3',
    company: 'FontChanger.net',
    position: 'Web Developer',
    duration: '2023 – Present',
    description: [
      'Built an online styling tool that attracted 104K+ monthly organic users.',
      'Ranked #2 on Google via SEO-focused development; traffic value estimated at $7.9K/month.',
      'Designed a responsive UI to simplify font transformations and boost user engagement.',
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'SEO', 'Google Search Console'],
    link: 'https://www.fontchanger.net/',
  },
]

export const projects: Project[] = [
  {
    id: '1',
    title: 'Insurance Hub',
    description: [
      'Built a responsive full-stack insurance platform for users to browse, purchase, and manage policies.',
      'Designed dynamic UI using MUI and Tailwind CSS, ensuring accessibility and cross-device compatibility.',
      'Implemented microservices-based backend to improve modularity, scalability, and performance.',
      'Managed structured insurance data using MySQL and provided secure role-based access for agents/customers.',
    ],
    techStack: ['React.js', 'Spring Boot', '.NET Core', 'MySQL', 'Microservices', 'MUI', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Abhay3945/InsuranceHub',
  },
]

export const education: Education[] = [
  {
    id: '1',
    degree: 'PG-DAC',
    institution: 'CDAC-ACTS, Pune',
    board: 'CDAC',
    grade: 'A',
    year: '2024-2025',
  },
  {
    id: '2',
    degree: 'MCA',
    institution: 'D.Y. Patil College, Pune',
    board: 'Savitribai Phule Pune University',
    grade: '7.45 CGPA',
    year: '2022-2024',
  },
  {
    id: '3',
    degree: 'B.Sc (Computer Science)',
    institution: 'SM Joshi College, Pune',
    board: 'Savitribai Phule Pune University',
    grade: '7.80 CGPA',
    year: '2019-2022',
  },
]

export const skills: Skill[] = [
  {
    category: 'Languages',
    skills: ['Java', 'C++', 'JavaScript', 'HTML', 'CSS', 'C'],
  },
  {
    category: 'Frameworks',
    skills: ['React', 'Spring Boot', '.NET', 'FastAPI', 'Next.js', 'Tailwind CSS'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'Postman', 'GitHub', 'VS Code'],
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'SQL Server'],
  },
  {
    category: 'Other',
    skills: ['API design', 'Schema validation', 'SEO optimization'],
  },
]

export const certifications: Certification[] = [
  {
    id: '1',
    title: 'Google Certification',
    description: 'Successfully completed a certification by Google, focusing on advanced technical and professional skills.',
  },
  {
    id: '2',
    title: 'Devtown Certification',
    description: 'Covering key concepts in software development and web technologies.',
  },
]


