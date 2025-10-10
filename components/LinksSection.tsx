"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

type LinkItem = {
  label: string;
  labelKo?: string;
  href: string;
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
        { label: "Projects", labelKo: "프로젝트", href: "/projects" },
        { label: "Updates", labelKo: "업데이트", href: "/blog" },
      ],
    },
    {
      items: [
        { label: "Computer", labelKo: "컴퓨터", href: "#" },
        { label: "Audio", labelKo: "오디오", href: "#" },
        { label: "Workout", labelKo: "운동", href: "#" },
        { label: "Coffee", labelKo: "커피", href: "#" },
        { label: "Library", labelKo: "서재", href: "#" },
      ],
    },
    {
      items: [
        { label: "Bookmarks", labelKo: "북마크", href: "#" },
        {
          label: "Contact",
          labelKo: "연락",
          href: "mailto:julian@refractedai.com",
          external: true,
        },
        {
          label: "GitHub",
          href: "https://github.com/julianluczywo",
          external: true,
        },
        { label: "FAQ", href: "#" },
      ],
    },
  ];

  return (
    <section className="pt-8 pb-16 mt-8 font-mono">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-12 md:gap-16 items-start">
          {/* Korean Taeguk-inspired SVG */}
          <Link href="/">
            <motion.div
              className="flex justify-center md:justify-start cursor-pointer"
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative w-32 h-32 flex items-center justify-center">
                <svg
                  width="128"
                  height="128"
                  viewBox="0 0 128 128"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="drop-shadow-lg transition-all duration-300"
                >
                  {/* Outer circle - inspired by Korean flag circle */}
                  <motion.circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke={isHovered ? "#c6d7e6" : "#899878"}
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />

                  {/* Taeguk-inspired yin-yang pattern with Korean colors */}
                  <motion.g
                    initial={{ opacity: 0, rotate: 0 }}
                    whileInView={{ opacity: 1, rotate: 360 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  >
                    {/* Red (upper) - 태극의 양 */}
                    <path
                      d="M64 16 A48 48 0 0 1 64 112 A24 24 0 0 0 64 64 A24 24 0 0 1 64 16"
                      fill={isHovered ? "#e74c3c" : "#c44444"}
                      fillOpacity={isHovered ? "0.3" : "0.2"}
                      stroke={isHovered ? "#c6d7e6" : "#899878"}
                      strokeWidth="1"
                    />

                    {/* Blue (lower) - 태극의 음 */}
                    <path
                      d="M64 112 A48 48 0 0 1 64 16 A24 24 0 0 0 64 64 A24 24 0 0 1 64 112"
                      fill={isHovered ? "#3498db" : "#4466aa"}
                      fillOpacity={isHovered ? "0.3" : "0.2"}
                      stroke={isHovered ? "#c6d7e6" : "#899878"}
                      strokeWidth="1"
                    />
                  </motion.g>

                  {/* Four trigrams corners - inspired by Korean flag trigrams */}
                  <motion.g
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                  >
                    {/* Top-left trigram bars */}
                    <g transform="translate(20, 20) rotate(45, 8, 8)">
                      <rect
                        x="0"
                        y="0"
                        width="16"
                        height="2"
                        fill={isHovered ? "#c6d7e6" : "#899878"}
                        opacity="0.8"
                      />
                      <rect
                        x="0"
                        y="6"
                        width="16"
                        height="2"
                        fill={isHovered ? "#c6d7e6" : "#899878"}
                        opacity="0.8"
                      />
                      <rect
                        x="0"
                        y="12"
                        width="16"
                        height="2"
                        fill={isHovered ? "#c6d7e6" : "#899878"}
                        opacity="0.8"
                      />
                    </g>

                    {/* Top-right trigram bars */}
                    <g transform="translate(92, 20) rotate(-45, 8, 8)">
                      <rect
                        x="0"
                        y="0"
                        width="7"
                        height="2"
                        fill={isHovered ? "#c6d7e6" : "#899878"}
                        opacity="0.8"
                      />
                      <rect
                        x="9"
                        y="0"
                        width="7"
                        height="2"
                        fill={isHovered ? "#c6d7e6" : "#899878"}
                        opacity="0.8"
                      />
                      <rect
                        x="0"
                        y="6"
                        width="16"
                        height="2"
                        fill={isHovered ? "#c6d7e6" : "#899878"}
                        opacity="0.8"
                      />
                      <rect
                        x="0"
                        y="12"
                        width="7"
                        height="2"
                        fill={isHovered ? "#c6d7e6" : "#899878"}
                        opacity="0.8"
                      />
                      <rect
                        x="9"
                        y="12"
                        width="7"
                        height="2"
                        fill={isHovered ? "#c6d7e6" : "#899878"}
                        opacity="0.8"
                      />
                    </g>

                    {/* Bottom-left trigram bars */}
                    <g transform="translate(20, 92) rotate(135, 8, 8)">
                      <rect
                        x="0"
                        y="0"
                        width="7"
                        height="2"
                        fill={isHovered ? "#c6d7e6" : "#899878"}
                        opacity="0.8"
                      />
                      <rect
                        x="9"
                        y="0"
                        width="7"
                        height="2"
                        fill={isHovered ? "#c6d7e6" : "#899878"}
                        opacity="0.8"
                      />
                      <rect
                        x="0"
                        y="6"
                        width="16"
                        height="2"
                        fill={isHovered ? "#c6d7e6" : "#899878"}
                        opacity="0.8"
                      />
                      <rect
                        x="0"
                        y="12"
                        width="16"
                        height="2"
                        fill={isHovered ? "#c6d7e6" : "#899878"}
                        opacity="0.8"
                      />
                    </g>

                    {/* Bottom-right trigram bars */}
                    <g transform="translate(92, 92) rotate(-135, 8, 8)">
                      <rect
                        x="0"
                        y="0"
                        width="16"
                        height="2"
                        fill={isHovered ? "#c6d7e6" : "#899878"}
                        opacity="0.8"
                      />
                      <rect
                        x="0"
                        y="6"
                        width="7"
                        height="2"
                        fill={isHovered ? "#c6d7e6" : "#899878"}
                        opacity="0.8"
                      />
                      <rect
                        x="9"
                        y="6"
                        width="7"
                        height="2"
                        fill={isHovered ? "#c6d7e6" : "#899878"}
                        opacity="0.8"
                      />
                      <rect
                        x="0"
                        y="12"
                        width="16"
                        height="2"
                        fill={isHovered ? "#c6d7e6" : "#899878"}
                        opacity="0.8"
                      />
                    </g>
                  </motion.g>

                  {/* Center decorative dots */}
                  <motion.circle
                    cx="64"
                    cy="40"
                    r="3"
                    fill={isHovered ? "#e74c3c" : "#899878"}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 1.2 }}
                  />
                  <motion.circle
                    cx="64"
                    cy="88"
                    r="3"
                    fill={isHovered ? "#3498db" : "#899878"}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 1.3 }}
                  />
                </svg>
              </div>
            </motion.div>
          </Link>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-4">
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
