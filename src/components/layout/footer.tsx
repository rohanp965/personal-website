'use client'

export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        <div className="flex space-x-4">
          {/* Add your social links here */}
        </div>
      </div>
    </footer>
  )
}