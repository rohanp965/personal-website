import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    title: 'Project Name',
    description:
      'A brief description of the project highlighting its key features and your role in its development.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
    demoUrl: 'https://project-demo.com',
    githubUrl: 'https://github.com/yourusername/project',
    image: '/images/project-1.png',
  },
  {
    title: 'Another Project',
    description:
      'Description of another project showcasing different skills and technologies.',
    techStack: ['React', 'Node.js', 'MongoDB', 'GraphQL'],
    demoUrl: 'https://another-project.com',
    githubUrl: 'https://github.com/yourusername/another-project',
    image: '/images/project-2.png',
  },
  // Add more projects here
]

export default function ProjectsPage() {
  return (
    <div className="container max-w-5xl space-y-8 mx-auto flex flex-col items-center text-center">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="text-xl text-muted-foreground">
          A collection of projects I've worked on, showcasing my skills and interests.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex gap-4">
              <Button variant="outline" size="sm" asChild>
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}