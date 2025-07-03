"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BookingModal from "./BookingModal";
import GlobalKeyboardHandler from "./GlobalKeyboardHandler";
import { Command as CommandIcon } from "lucide-react";
export default function FloatingCommandButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [useIsMobile, setUseIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setUseIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <GlobalKeyboardHandler />
      <motion.button
        data-floating-command-button
        onClick={() => setIsModalOpen(true)}
        className={`fixed ${
          useIsMobile ? "bottom-6 right-6" : "top-6 right-6"
        } z-40 bg-[#222725]/80 backdrop-blur-sm border border-gray-700 rounded-lg p-3 text-gray-400 hover:text-white transition-all shadow-lg hover:shadow-xl`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center gap-2">
          {useIsMobile ? (
            <div className="text-xs">Connect with me</div>
          ) : (
            <div className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-gray-800 border border-gray-600 rounded text-xs font-mono">
                ⌘
              </kbd>
              <kbd className="px-1.5 py-0.5 bg-gray-800 border border-gray-600 rounded text-xs font-mono">
                K
              </kbd>
            </div>
          )}
        </div>
      </motion.button>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
