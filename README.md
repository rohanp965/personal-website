# Personal Portfolio Website

A modern, production-ready personal portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- 🚀 Next.js 15 with App Router
- 💻 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 🧱 shadcn/ui components
- 🎭 Light/Dark mode
- 📝 MDX blog support
- 🎯 SEO optimized
- 📱 Responsive design
- 🎨 Framer Motion animations
- 🧪 ESLint + Prettier setup

## Project Structure

```
src/
├── app/                    # App router pages
│   ├── page.tsx           # Home page
│   ├── work/              # Work experience
│   ├── projects/          # Projects showcase
│   └── blog/              # Blog section
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── layout/           # Layout components
├── lib/                  # Utilities
└── content/             # Blog posts and content
    └── blog/            # MDX blog posts
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd personal-website
   ```

2. Install dependencies and start the development server:
   ```bash
   ./dev.sh
   ```

   Or manually:
   ```bash
   npm install
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

1. Update personal information:
   - Edit `src/app/page.tsx` for the home page content
   - Modify `src/app/work/page.tsx` for work experience
   - Update `src/app/projects/page.tsx` for project showcase

2. Add blog posts:
   - Create new `.mdx` files in `src/content/blog/`
   - Include frontmatter with title, date, description, and tags

3. Styling:
   - Global styles in `src/app/globals.css`
   - Tailwind configuration in `tailwind.config.ts`
   - Theme configuration in `src/components/theme-provider.tsx`

## Blog Post Format

Create new blog posts in `src/content/blog/` with the following frontmatter:

```mdx
---
title: Post Title
date: '2025-10-23'
description: Brief description of the post
tags:
  - Tag1
  - Tag2
published: true
---

# Content here...
```

## Deployment

The site is optimized for deployment on [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repository on Vercel
3. Deploy

## License

MIT
