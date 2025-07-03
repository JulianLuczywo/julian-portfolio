"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, ArrowUp, ArrowDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { formatDate, type BlogPostMetadata } from "@/lib/types";
import TypewriterText from "@/components/TypewriterText";

type BlogPageClientProps = {
  posts: BlogPostMetadata[];
};

export default function BlogPageClient({ posts }: BlogPageClientProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const postRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "/" && !showSearch) {
        event.preventDefault();
        setShowSearch(true);
      } else if (event.key === "Escape") {
        if (showSearch) {
          event.preventDefault();
          setShowSearch(false);
          setSearchTerm("");
          setSelectedIndex(0);
          if (searchInputRef.current) {
            searchInputRef.current.blur();
          }
        }
      } else if (event.target instanceof HTMLInputElement) {
        return;
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        setSelectedIndex((prev) =>
          prev < filteredPosts.length - 1 ? prev + 1 : prev
        );
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
      } else if (event.key === "Enter" && filteredPosts[selectedIndex]) {
        event.preventDefault();
        router.push(`/blog/${filteredPosts[selectedIndex].slug}`);
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [showSearch, filteredPosts, selectedIndex, router]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [searchTerm]);
  useEffect(() => {
    if (postRefs.current[selectedIndex]) {
      postRefs.current[selectedIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
    }
  }, [selectedIndex]);

  return (
    <div className="min-h-screen bg-[#0d0f0d] text-gray-300 font-mono">
      <main className="max-w-4xl mx-auto px-6 pb-16">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            back to home
          </Link>

          <div className="mb-8">
            <div className="mb-3">
              <TypewriterText
                text="* blog"
                className="text-[#899878] text-4xl font-bold"
              />
            </div>
            <p className="text-gray-400 text-lg mb-6">
              thoughts on development, technology, and building things
            </p>

            <div className="flex items-center justify-between mb-6">
              <div className="text-sm text-gray-500">
                <span className="text-[#899878] font-semibold">
                  {filteredPosts.length}
                </span>
                <span> {filteredPosts.length === 1 ? "post" : "posts"}</span>
                {searchTerm && (
                  <>
                    <span> matching "</span>
                    <span className="text-white">{searchTerm}</span>
                    <span>"</span>
                  </>
                )}
              </div>

              <div className="text-sm text-gray-500">
                <span>press </span>
                <kbd className="px-2 py-1 bg-gray-800 border border-gray-700 rounded text-xs font-mono">
                  /
                </kbd>
                <span> to search</span>
              </div>
            </div>
          </div>

          {showSearch && (
            <div className="mb-8 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 text-sm">/</span>
              </div>
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onBlur={() => {
                  if (!searchTerm) setShowSearch(false);
                }}
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg pl-8 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#899878] focus:ring-1 focus:ring-[#899878] backdrop-blur-sm"
                autoFocus
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <kbd className="px-2 py-1 bg-gray-800 border border-gray-700 rounded text-xs text-gray-400">
                  esc
                </kbd>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-2">
          {filteredPosts.map((post, index) => (
            <Link
              key={post.slug}
              ref={(el) => {
                postRefs.current[index] = el;
              }}
              href={`/blog/${post.slug}`}
              className={`group block p-4 rounded-lg border transition-all duration-200 ${
                index === selectedIndex
                  ? "bg-gray-800/50 border-[#899878] shadow-lg shadow-[#899878]/10"
                  : "bg-gray-900/30 border-gray-800 hover:bg-gray-800/30 hover:border-gray-700"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <h3
                    className={`text-lg font-medium transition-colors ${
                      index === selectedIndex
                        ? "text-white"
                        : "text-gray-300 group-hover:text-white"
                    }`}
                  >
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    <Calendar className="w-3 h-3 text-gray-500" />
                    <time className="text-sm text-gray-500">
                      {formatDate(post.date)}
                    </time>
                  </div>
                </div>

                <div
                  className={`ml-4 transition-all duration-200 ${
                    index === selectedIndex
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                  }`}
                >
                  <ArrowLeft className="w-4 h-4 text-[#899878] rotate-180" />
                </div>
              </div>
            </Link>
          ))}

          {filteredPosts.length === 0 && searchTerm && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                no posts found matching "{searchTerm}"
              </p>
              <p className="text-gray-600 text-sm mt-2">
                try a different search term
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
