"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterTextProps {
  text: string;
  speed?: number; // milliseconds between characters
  delay?: number; // initial delay before typing starts
  className?: string;
  showCursor?: boolean;
  cursorClassName?: string;
}

export default function TypewriterText({
  text,
  speed = 100,
  delay = 500,
  className = "",
  showCursor = true,
  cursorClassName = "inline-block ml-1",
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const typeText = () => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
        setTimeout(typeText, speed);
      }
    };

    // Start typing after the specified delay
    const timeoutId = setTimeout(typeText, delay);

    return () => clearTimeout(timeoutId);
  }, [text, speed, delay]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={cursorClassName}
        >
          |
        </motion.span>
      )}
    </span>
  );
}
