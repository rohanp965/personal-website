import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

import { siteConfig } from '@/config/site'

export default function Home() {
  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    email: Mail,
  }

  return (
    <div className="space-y-12 flex flex-col items-center w-full">
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32 w-full">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center mx-auto">
          <h1 className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            {siteConfig.name}
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            {siteConfig.bio}
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <Link href="/projects">View Projects</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/blog">Read Blog</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container space-y-6">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Connect with me
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Feel free to reach out for collaborations or just a friendly chat.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {Object.entries(siteConfig.social).map(([key, social]) => {
            const Icon = socialIcons[key as keyof typeof socialIcons]
            return (
              <Card key={key} className="flex flex-col items-center justify-center p-6">
                <Icon className="h-12 w-12" />
                <h3 className="mt-4 font-bold">{social.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{social.description}</p>
                <Button variant="outline" asChild>
                  <Link href={social.href} target="_blank" rel="noopener noreferrer">
                    {key === 'github' ? 'View Profile' : 
                     key === 'linkedin' ? 'Connect' : 'Contact Me'}
                  </Link>
                </Button>
              </Card>
            )
          })}
        </div>
      </section>
    </div>
  )
}
