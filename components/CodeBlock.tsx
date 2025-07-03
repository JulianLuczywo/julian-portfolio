"use client";

import { useState, useEffect, useRef } from "react";
import { Copy, Check, Terminal } from "lucide-react";

// Static Prism imports to avoid dynamic loading issues
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-css";
import "prismjs/components/prism-json";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-python";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-yaml";
import React from "react";

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

// Language configurations
const LANGUAGE_CONFIG = {
  javascript: { label: "JavaScript", icon: "JS", color: "#f7df1e" },
  typescript: { label: "TypeScript", icon: "TS", color: "#3178c6" },
  react: { label: "React", icon: "JSX", color: "#61dafb" },
  prisma: { label: "Prisma", icon: "PRS", color: "#ffffff" },
  jsx: { label: "React", icon: "JSX", color: "#61dafb" },
  tsx: { label: "React TS", icon: "TSX", color: "#61dafb" },
  python: { label: "Python", icon: "PY", color: "#3776ab" },
  bash: { label: "Terminal", icon: "SH", color: "#4eaa25" },
  shell: { label: "Shell", icon: "SH", color: "#4eaa25" },
  css: { label: "CSS", icon: "CSS", color: "#1572b6" },
  html: { label: "HTML", icon: "HTML", color: "#e34f26" },
  json: { label: "JSON", icon: "JSON", color: "#000000" },
  sql: { label: "SQL", icon: "SQL", color: "#336791" },
  yaml: { label: "YAML", icon: "YML", color: "#cb171e" },
  text: { label: "Text", icon: "TXT", color: "#6b7280" },
};

export default function CodeBlock({
  children,
  className,
  title,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const codeRef = useRef<HTMLElement>(null);

  // Extract language and code content
  const language = className?.replace(/language-/, "") || "text";
  const langConfig =
    LANGUAGE_CONFIG[language as keyof typeof LANGUAGE_CONFIG] ||
    LANGUAGE_CONFIG.text;

  const code =
    typeof children === "string"
      ? children
      : React.Children.toArray(children).join("");

  useEffect(() => {
    setMounted(true);
  }, []);

  // Apply syntax highlighting
  useEffect(() => {
    if (mounted && codeRef.current && language !== "text") {
      try {
        codeRef.current.className = `language-${language}`;
        Prism.highlightElement(codeRef.current);
      } catch (error) {
        console.warn(`Failed to highlight ${language}:`, error);
      }
    }
  }, [mounted, language, children]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  if (!mounted) {
    return (
      <div className="relative my-8 group">
        <pre className="bg-[#0f1419] border border-[#1e2328] rounded-xl p-6 overflow-x-auto">
          <code className="text-[#e6e1dc] font-mono text-sm">{children}</code>
        </pre>
      </div>
    );
  }

  return (
    <div className="relative my-8 group">
      {/* Header */}
      <div className="flex items-center justify-between bg-[#222725] border border-[#2d3340] rounded-t-xl px-6 py-3">
        <div className="flex items-center gap-3">
          {/* Language badge */}
          <div
            className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium"
            style={{
              backgroundColor: `${langConfig.color}15`,
              color: langConfig.color,
              border: `1px solid ${langConfig.color}30`,
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: langConfig.color }}
            />
            {langConfig.label}
          </div>

          {/* Title if provided */}
          {title && (
            <span className="text-sm text-gray-400 font-mono">{title}</span>
          )}
        </div>

        {/* Copy button */}
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-2 px-3 py-1.5 text-xs text-gray-400 hover:text-white transition-all duration-200 rounded-lg hover:bg-[#2d3340] border border-transparent hover:border-[#3d4450]"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-green-400" />
              <span className="text-green-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code content */}
      <div className="relative">
        <pre className="bg-[#0f1419] border border-[#2d3340] border-t-0 rounded-b-xl p-6 overflow-x-auto m-0 text-sm leading-relaxed">
          <code
            ref={codeRef}
            className={`language-${language} font-mono`}
            style={{ color: "#e6e1dc" }}
          >
            {children}
          </code>
        </pre>

        {/* Gradient overlay for long code */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#0f1419] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  );
}
