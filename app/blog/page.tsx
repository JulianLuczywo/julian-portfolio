import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";

export default function BlogPage() {
  const posts = [
    {
      slug: "building-scalable-react-apps",
      title: "building scalable react applications",
      date: "december 15, 2024",
      excerpt:
        "learn how to structure large react applications for maintainability and performance. covering component architecture, state management, and testing strategies.",
    },
    {
      slug: "typescript-best-practices",
      title: "typescript best practices for large codebases",
      date: "november 28, 2024",
      excerpt:
        "essential typescript patterns and practices that will help you write more maintainable and type-safe code in enterprise applications.",
    },
    {
      slug: "nextjs-performance",
      title: "optimizing next.js applications for performance",
      date: "october 12, 2024",
      excerpt:
        "comprehensive guide to improving your next.js app performance through code splitting, image optimization, and caching strategies.",
    },
    {
      slug: "modern-css-techniques",
      title: "modern css techniques every developer should know",
      date: "september 20, 2024",
      excerpt:
        "explore the latest css features including container queries, css grid, and custom properties to create responsive and maintainable stylesheets.",
    },
    {
      slug: "api-design-principles",
      title: "designing restful apis that developers love",
      date: "august 15, 2024",
      excerpt:
        "best practices for creating intuitive and well-documented apis that are easy to use and maintain over time.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0d0f0d] text-gray-300 font-mono">
      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-6 pb-16">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            back to home
          </Link>
          <h1 className="text-3xl font-bold text-white mb-2">blog</h1>
          <p className="text-gray-400">
            thoughts on development, technology, and building things
          </p>
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border-b border-gray-800 pb-8 last:border-b-0"
            >
              <Link href={`/blog/${post.slug}`} className="group block">
                <h2 className="text-xl font-semibold text-white group-hover:text-[#344532] transition-colors mb-2">
                  {post.title}
                </h2>
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <time>{post.date}</time>
                </div>
                <p className="text-gray-300 leading-relaxed">{post.excerpt}</p>
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
