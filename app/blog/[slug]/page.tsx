"use client"

import Link from "next/link"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { notFound } from "next/navigation"

// This would typically come from a CMS or markdown files
const posts = {
  "building-scalable-react-apps": {
    title: "building scalable react applications",
    date: "december 15, 2024",
    readTime: "8 min read",
    content: `
# building scalable react applications

when building large react applications, architecture becomes crucial for long-term maintainability and team productivity. here are the key principles i've learned from working on enterprise-scale react projects.

## component architecture

the foundation of any scalable react app is a well-thought-out component architecture. i recommend following these patterns:

### atomic design principles

organize your components into atoms, molecules, organisms, templates, and pages. this creates a clear hierarchy and promotes reusability.

\`\`\`jsx
// atoms/Button.jsx
export const Button = ({ children, variant, ...props }) => {
  return (
    <button className={\`btn btn-\${variant}\`} {...props}>
      {children}
    </button>
  )
}

// molecules/SearchBox.jsx
import { Button } from '../atoms/Button'
import { Input } from '../atoms/Input'

export const SearchBox = ({ onSearch }) => {
  return (
    <div className="search-box">
      <Input placeholder="search..." />
      <Button variant="primary" onClick={onSearch}>
        search
      </Button>
    </div>
  )
}
\`\`\`

### folder structure

keep your folder structure predictable and scalable:

\`\`\`
src/
  components/
    atoms/
    molecules/
    organisms/
  pages/
  hooks/
  utils/
  services/
  types/
\`\`\`

## state management

for large applications, consider these state management approaches:

1. **local state** for component-specific data
2. **context api** for theme, auth, and other global state
3. **external libraries** like zustand or redux toolkit for complex state

## performance optimization

implement these performance strategies:

- use react.memo for expensive components
- implement proper key props for lists
- lazy load routes and components
- optimize bundle size with code splitting

## testing strategy

a comprehensive testing strategy includes:

- unit tests for utility functions
- component tests with react testing library
- integration tests for user flows
- e2e tests for critical paths

## conclusion

building scalable react applications requires careful planning and adherence to established patterns. focus on component reusability, clear state management, and comprehensive testing to create maintainable codebases.
    `,
  },
  "typescript-best-practices": {
    title: "typescript best practices for large codebases",
    date: "november 28, 2024",
    readTime: "6 min read",
    content: `
# typescript best practices for large codebases

typescript has become essential for building maintainable javascript applications at scale. here are the practices that have served me well in large enterprise projects.

## type definitions

create comprehensive type definitions for your domain models:

\`\`\`typescript
// types/user.ts
export interface User {
  id: string
  email: string
  profile: UserProfile
  preferences: UserPreferences
}

export interface UserProfile {
  firstName: string
  lastName: string
  avatar?: string
}

export interface UserPreferences {
  theme: 'light' | 'dark'
  notifications: boolean
}
\`\`\`

## utility types

leverage typescript's built-in utility types:

\`\`\`typescript
// partial updates
type UserUpdate = Partial<User>

// pick specific fields
type UserSummary = Pick<User, 'id' | 'email'>

// omit sensitive fields
type PublicUser = Omit<User, 'preferences'>
\`\`\`

## strict configuration

use strict typescript configuration:

\`\`\`json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "noImplicitReturns": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
\`\`\`

## generic constraints

use generic constraints for flexible yet type-safe apis:

\`\`\`typescript
interface ApiResponse<T> {
  data: T
  status: number
  message: string
}

function fetchData<T extends Record<string, unknown>>(
  url: string
): Promise<ApiResponse<T>> {
  // implementation
}
\`\`\`

these practices will help you build more maintainable and type-safe applications.
    `,
  },
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug as keyof typeof posts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#0d0f0d] text-gray-300 font-mono">
      {/* Navigation */}
      <nav className="flex items-center justify-center pt-8 pb-16">
        <div className="flex items-center gap-6 text-sm">
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">
            [h] home
          </Link>
          <Link href="/blog" className="text-white">
            [b] blog
          </Link>
          <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
            [p] projects
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-6 pb-16">
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            back to blog
          </Link>

          <h1 className="text-3xl font-bold text-white mb-4">{post.title}</h1>

          <div className="flex items-center gap-4 text-gray-500 text-sm mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time>{post.date}</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        <article className="prose prose-invert prose-orange max-w-none">
          <div className="whitespace-pre-line text-gray-300 leading-relaxed">{post.content}</div>
        </article>
      </main>
    </div>
  )
}
