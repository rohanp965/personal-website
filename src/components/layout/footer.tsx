'use client'

import { siteConfig } from '@/config/site'

export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container flex items-center justify-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}