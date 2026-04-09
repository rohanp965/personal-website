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
  role: 'Data Scientist',
  bio: 'Data Scientist with 7+ years building production-scale ML and GenAI systems in the information services industry. Specializing in RAG pipelines, NLP, and cloud-native deployments on AWS and Azure. M.S. Operations Research, Columbia University.',
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
      // { href: '/projects', label: 'Projects' },  // hidden until ready
      // { href: '/blog', label: 'Blog' },           // hidden until ready
    ],
  },
  seo: {
    titleTemplate: '%s | Your Name',
    defaultDescription:
      'Personal portfolio and blog showcasing projects, thoughts, and expertise in software development.',
  },
}