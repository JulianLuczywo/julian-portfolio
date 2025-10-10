"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import KoreanSymbol from "./KoreanSymbol";

type LinkItem = {
  label: string;
  labelKo?: string;
  href: string;
  target?: string;
  rel?: string;
  external?: boolean;
};

type LinksColumn = {
  items: LinkItem[];
};

export default function LinksSection() {
  const [isHovered, setIsHovered] = useState(false);

  const linksColumns: LinksColumn[] = [
    {
      items: [
        { label: "Journal", labelKo: "일지", href: "/blog" },
        { label: "Updates", labelKo: "업데이트", href: "/blog" },
        { label: "Projects", labelKo: "프로젝트", href: "/projects" },
      ],
    },
    {
      items: [
        { label: "Computer", labelKo: "컴퓨터", href: "#" },
        // { label: "Desk", href: "#" },
        // { label: "Keyboard", href: "#" },
        // { label: "Command Line", href: "#" },
        // { label: "Infrastructure", href: "#" },
        // { label: "EDC", href: "#" },
        // { label: "Phone", href: "#" },
        // { label: "Camera", href: "#" },
        { label: "Audio", labelKo: "오디오", href: "#" },
        { label: "Coffee", labelKo: "커피", href: "#" },
        { label: "Workout", labelKo: "운동", href: "#" },
      ],
    },
    {
      items: [
        // { label: "Travel", href: "#" },
        // { label: "Luggage", href: "#" },
        // { label: "Belongings", href: "#" },
        // { label: "Locations", href: "#" },
        { label: "Library", labelKo: "서재", href: "#" },
        { label: "Bookmarks", labelKo: "북마크", href: "#" },
        {
          label: "Contact",
          labelKo: "연락",
          href: "mailto:julian@refractedai.com",
          target: "_blank",
          rel: "noopener noreferrer",
          external: true,
        },
        {
          label: "GitHub",
          href: "https://github.com/julianluczywo",
          target: "_blank",
          rel: "noopener noreferrer",
          external: true,
        },
        { label: "FAQ", href: "#" },
      ],
    },
  ];

  return (
    <section className="pt-6 pb-12 mt-6 md:pt-8 md:pb-16 md:mt-8 font-mono">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="flex flex-col items-center gap-6">
            {/* Korean Symbol - Centered and Bigger on Mobile */}
            <Link href="/">
              <motion.div
                className="cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <KoreanSymbol
                    isHovered={isHovered}
                    size={128}
                    layoutId="main-korean-symbol"
                  />
                </div>
              </motion.div>
            </Link>

            {/* Links Grid - 2 Columns Below SVG on Mobile */}
            <div className="w-full grid grid-cols-2 gap-x-8 gap-y-2">
              {linksColumns.map((column, colIndex) => (
                <motion.div
                  key={colIndex}
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + colIndex * 0.1 }}
                >
                  {column.items.map((link, linkIndex) => (
                    <div key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:bg-[#899878] hover:text-[#222725] px-1 py-0.5 transition-all duration-200 text-xs font-medium underline underline-offset-2 decoration-gray-600 hover:decoration-gray-400 inline-block"
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                      >
                        {link.label}
                      </Link>
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex md:gap-12 lg:gap-16 items-start">
          {/* Korean Symbol - Centered on Desktop */}
          <Link href="/" className="flex-shrink-0">
            <motion.div
              className="flex justify-center cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative w-32 h-32 flex items-center justify-center">
                <KoreanSymbol
                  isHovered={isHovered}
                  size={128}
                  layoutId="main-korean-symbol"
                />
              </div>
            </motion.div>
          </Link>

          {/* Links Grid - 4 Columns on Desktop */}
          <div className="flex-1 grid grid-cols-4 gap-x-8 lg:gap-x-12 gap-y-3">
            {linksColumns.map((column, colIndex) => (
              <motion.div
                key={colIndex}
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: colIndex * 0.15 }}
              >
                {column.items.map((link, linkIndex) => (
                  <div key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:bg-[#899878] hover:text-[#222725] px-2 py-1 transition-all duration-200 text-sm font-medium underline underline-offset-4 decoration-gray-600 hover:decoration-gray-400 inline-block group"
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                    >
                      <span className="font-sans">{link.label}</span>
                      {link.labelKo && (
                        <span className="ml-1.5 text-xs opacity-60 font-[--font-noto-sans-kr] group-hover:opacity-80">
                          ({link.labelKo})
                        </span>
                      )}
                    </Link>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
