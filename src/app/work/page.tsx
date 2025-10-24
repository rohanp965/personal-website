import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const experiences = [
  {
    company: 'Company Name',
    title: 'Senior Software Engineer',
    period: 'Jan 2022 - Present',
    description:
      'Lead development of modern web applications using Next.js, React, and TypeScript. Implemented new features, improved performance, and mentored junior developers.',
    achievements: [
      'Reduced page load times by 40% through code optimization and implementing lazy loading',
      'Led migration from legacy codebase to Next.js, improving developer productivity',
      'Implemented CI/CD pipeline reducing deployment time by 60%',
    ],
  },
  {
    company: 'Previous Company',
    title: 'Software Engineer',
    period: 'Jun 2020 - Dec 2021',
    description:
      'Worked on frontend development using React and TypeScript. Collaborated with design team to implement pixel-perfect UI components.',
    achievements: [
      'Developed reusable component library used across multiple projects',
      'Implemented real-time data synchronization using WebSockets',
      'Improved test coverage from 60% to 90%',
    ],
  },
  // Add more experiences here
]

export default function WorkPage() {
  return (
    <div className="container max-w-4xl space-y-8 mx-auto flex flex-col items-center text-center">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Work Experience</h1>
        <p className="text-xl text-muted-foreground">
          A summary of my professional journey and key achievements.
        </p>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="space-y-1">
                <CardTitle className="text-2xl">{exp.company}</CardTitle>
                <CardDescription className="text-base">
                  {exp.title} • {exp.period}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{exp.description}</p>
              <div>
                <h4 className="font-semibold">Key Achievements:</h4>
                <ul className="list-inside list-disc space-y-1 pt-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-muted-foreground">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}