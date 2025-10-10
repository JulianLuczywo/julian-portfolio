"use client";

import { motion } from "framer-motion";

type KoreanSymbolProps = {
  isHovered?: boolean;
  size?: number;
  layoutId?: string;
};

export default function KoreanSymbol({
  isHovered = false,
  size = 128,
  layoutId = "korean-symbol",
}: KoreanSymbolProps) {
  return (
    <motion.svg
      layoutId={layoutId}
      width={size}
      height={size}
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
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* Taeguk-inspired yin-yang pattern with Korean colors */}
      <motion.g
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 360 }}
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
        animate={{ opacity: 1 }}
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
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 1.2 }}
      />
      <motion.circle
        cx="64"
        cy="88"
        r="3"
        fill={isHovered ? "#3498db" : "#899878"}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 1.3 }}
      />
    </motion.svg>
  );
}
