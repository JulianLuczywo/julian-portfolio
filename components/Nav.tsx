"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Nav() {
  const router = useRouter();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement ||
        event.ctrlKey ||
        event.metaKey ||
        event.altKey
      ) {
        return;
      }

      switch (event.key.toLowerCase()) {
        case "h":
          router.push("/");
          break;
        case "b":
          router.push("/blog");
          break;
        case "p":
          router.push("/projects");
          break;
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [router]);

  return (
    <nav className="flex items-center justify-center pt-8 pb-16 bg-[#0d0f0d]">
      <div className="flex items-center gap-6 text-sm">
        <Link
          href="/"
          className="text-gray-400 hover:text-white transition-colors"
        >
          [h] home
        </Link>
        <Link
          href="/blog"
          className="text-gray-400 hover:text-white transition-colors"
        >
          [b] blog
        </Link>
        <Link
          href="/projects"
          className="text-gray-400 hover:text-white transition-colors"
        >
          [p] projects
        </Link>
      </div>
    </nav>
  );
}
