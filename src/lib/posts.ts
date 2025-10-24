import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { z } from 'zod'

const postSchema = z.object({
  title: z.string(),
  date: z.string(),
  description: z.string(),
  tags: z.array(z.string()).default([]),
  published: z.boolean().default(true),
})

export type Post = z.infer<typeof postSchema> & {
  slug: string
  content: string
}

const postsDirectory = path.join(process.cwd(), 'src/content/blog')

export async function getAllPosts() {
  const files = fs.readdirSync(postsDirectory)

  const posts = await Promise.all(
    files
      .filter((file) => /\.mdx?$/.test(file))
      .map(async (file) => {
        const slug = file.replace(/\.mdx?$/, '')
        const post = await getPostBySlug(slug)
        return post
      })
  )

  return posts
    .filter((post): post is Post => 
      post !== null && 
      typeof post.content === 'string' && 
      post.published
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(postsDirectory, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { content, data: frontmatter } = matter(fileContents)

  try {
    const validatedFrontmatter = postSchema.parse(frontmatter)
    return {
      slug,
      content,
      ...validatedFrontmatter,
    }
  } catch (error) {
    console.error(`Invalid frontmatter in ${slug}.mdx:`, error)
    return null
  }
}