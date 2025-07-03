import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug } from "@/lib/blog";
import { formatDate } from "@/lib/types";
import { mdxComponents } from "@/components/mdx-components";
import { Github, Linkedin, Twitter } from "lucide-react";
import ShareButton from "@/components/ShareButton";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0d0f0d] text-gray-300">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Navigation */}
        <nav className="mb-12">
          <div className="flex justify-between">
            <Link
              href="/blog"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              ← back to blog
            </Link>
            <div className="flex gap-2 items-center">
              <ShareButton />
            </div>
          </div>
        </nav>

        {/* Article */}
        <article className="prose prose-invert max-w-none">
          <header className="mb-12">
            <h1 className="text-3xl font-bold text-white mb-6">
              <span className="text-[#899878]">*</span> {post.title}
            </h1>
            <div className="text-sm text-gray-500 mb-4">
              {formatDate(post.date)} • {post.readTime}
            </div>
            {post.description && (
              <p className="text-sm text-gray-400 leading-relaxed">
                {post.description}
              </p>
            )}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div className="space-y-6">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>
        </article>

        <footer className="mt-16">
          <div className="flex justify-between">
            <Link
              href="/blog"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              ← back to blog
            </Link>
            <div className="flex gap-4">
              <Link
                href="https://github.com/julianluczywo/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://twitter.com/julianluczywo"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="https://linkedin.com/in/julianluczywo"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
