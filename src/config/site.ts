import { type SocialLink } from '@/types/site'

export interface SiteConfig {
  name: string
  title: string
  description: string
  role: string
  bio: string
  social: {
    github: SocialLink
    linkedin: SocialLink
    email: SocialLink
  }
  nav: {
    links: Array<{
      href: string
      label: string
    }>
  }
  seo: {
    titleTemplate: string
    defaultDescription: string
  }
}

export const siteConfig: SiteConfig = {
  name: 'Rohan Pimprikar',
  title: 'Rohan Pimprikar',
  description: 'Personal portfolio and blog showcasing my work and thoughts',
  role: 'Software Engineer',
  bio: 'Experienced Data Scientist with a demonstrated history of working in the information services industry. Skilled in Natural Language Processing, Machine Learning and Python.Strong engineering professional with a Master of Science - MS focused in Operations Research from Columbia University in the City of New York.',
  social: {
    github: {
      title: 'GitHub',
      href: 'https://github.com/rohanp965',
      description: 'Check out my projects',
    },
    linkedin: {
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rohanpimprikar/',
      description: 'Connect with me professionally',
    },
    email: {
      title: 'Email',
      href: 'mailto:rohan.pimprikar22@gmail.com',
      description: 'Drop me an email message',
    },
  },
  nav: {
    links: [
      { href: '/', label: 'Home' },
      { href: '/work', label: 'Work' },
      { href: '/projects', label: 'Projects' },
      { href: '/blog', label: 'Blog' },
    ],
  },
  seo: {
    titleTemplate: '%s | Your Name',
    defaultDescription:
      'Personal portfolio and blog showcasing projects, thoughts, and expertise in software development.',
  },
}