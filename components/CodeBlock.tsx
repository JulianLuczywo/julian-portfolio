"use client";

import { useState, useEffect, useRef } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CodeBlockProps = React.HTMLAttributes<HTMLElement> & {
  children?: React.ReactNode;
  language?: string;
};

export function CodeBlock({ children, className, ...props }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [highlighted, setHighlighted] = useState(false);
  const codeRef = useRef<HTMLElement>(null);

  const language = className?.replace(/language-/, "") || "text";
  const code =
    typeof children === "string" ? children : children?.toString() || "";

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const highlightCode = async () => {
      if (!mounted || !codeRef.current || language === "text" || highlighted)
        return;

      try {
        const Prism = (await import("prismjs")).default;

        if (language === "javascript" || language === "js") {
          await import("prismjs/components/prism-javascript");
        } else if (language === "typescript" || language === "ts") {
          await import("prismjs/components/prism-typescript");
        } else if (language === "python") {
          await import("prismjs/components/prism-python");
        } else if (language === "jsx") {
          await import("prismjs/components/prism-jsx");
        } else if (language === "tsx") {
          await import("prismjs/components/prism-tsx");
        } else if (language === "css") {
          await import("prismjs/components/prism-css");
        } else if (language === "json") {
          await import("prismjs/components/prism-json");
        } else if (language === "bash" || language === "shell") {
          await import("prismjs/components/prism-bash");
        } else if (language === "sql") {
          await import("prismjs/components/prism-sql");
        } else if (language === "yaml") {
          await import("prismjs/components/prism-yaml");
        }

        codeRef.current.className = `language-${language}`;
        Prism.highlightElement(codeRef.current);
        setHighlighted(true);
      } catch (error) {
        console.warn(`Failed to highlight ${language}:`, error);
      }
    };

    highlightCode();
  }, [mounted, language, code, highlighted]);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-6 rounded-xl overflow-hidden border border-border bg-card shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-3 bg-muted/30 border-b border-border">
        <div className="flex items-center gap-3">
          {/* Visual dots like macOS window */}
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <span className="text-sm font-medium text-muted-foreground">
            {language}
          </span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background/80"
          onClick={copyToClipboard}
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-600" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Code content */}
      <div className="relative">
        <pre
          className={cn(
            "overflow-x-auto p-6 font-mono text-sm leading-relaxed bg-card",
            "scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent",
            // Enhanced Prism.js token styling
            "[&_.token.comment]:text-slate-500 [&_.token.comment]:italic",
            "[&_.token.keyword]:text-purple-600 [&_.token.keyword]:font-semibold",
            "[&_.token.function]:text-blue-600",
            "[&_.token.string]:text-emerald-600",
            "[&_.token.number]:text-orange-600",
            "[&_.token.boolean]:text-orange-600",
            "[&_.token.variable]:text-blue-500",
            "[&_.token.property]:text-blue-500",
            "[&_.token.operator]:text-slate-600",
            "[&_.token.punctuation]:text-slate-600",
            "[&_.token.class-name]:text-amber-600",
            "[&_.token.tag]:text-red-600",
            "[&_.token.attr-name]:text-amber-500",
            "[&_.token.attr-value]:text-emerald-600",
            "[&_.token.regex]:text-pink-600",
            "[&_.token.builtin]:text-cyan-600",
            "[&_.token.important]:text-red-600 [&_.token.important]:font-bold",
            // Dark mode variants with softer colors
            "dark:bg-slate-900/50",
            "dark:[&_.token.comment]:text-slate-400",
            "dark:[&_.token.keyword]:text-purple-400",
            "dark:[&_.token.function]:text-blue-400",
            "dark:[&_.token.string]:text-emerald-400",
            "dark:[&_.token.number]:text-orange-400",
            "dark:[&_.token.boolean]:text-orange-400",
            "dark:[&_.token.variable]:text-blue-300",
            "dark:[&_.token.property]:text-blue-300",
            "dark:[&_.token.operator]:text-slate-400",
            "dark:[&_.token.punctuation]:text-slate-400",
            "dark:[&_.token.class-name]:text-amber-400",
            "dark:[&_.token.tag]:text-red-400",
            "dark:[&_.token.attr-name]:text-amber-300",
            "dark:[&_.token.attr-value]:text-emerald-400",
            "dark:[&_.token.regex]:text-pink-400",
            "dark:[&_.token.builtin]:text-cyan-400",
            className
          )}
          {...props}
        >
          <code ref={codeRef} className={cn("text-foreground", className)}>
            {children}
          </code>
        </pre>

        {/* Subtle gradient overlay for long code */}
        <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-card to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  );
}
