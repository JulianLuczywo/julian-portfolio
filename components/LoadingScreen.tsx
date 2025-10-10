"use client";

import { motion, AnimatePresence } from "framer-motion";
import KoreanSymbol from "./KoreanSymbol";

type LoadingScreenProps = {
  isLoading: boolean;
  onComplete: () => void;
};

export default function LoadingScreen({
  isLoading,
  onComplete,
}: LoadingScreenProps) {
  return (
    <AnimatePresence mode="wait" onExitComplete={onComplete}>
      {isLoading && (
        <motion.div
          key="loading"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d0f0d]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.div
            className="flex items-center justify-center"
            initial={{ scale: 1, opacity: 1 }}
            exit={{
              scale: 0.5,
              opacity: 0,
              x:
                typeof window !== "undefined"
                  ? -(window.innerWidth / 2.5)
                  : -300,
              y:
                typeof window !== "undefined"
                  ? -(window.innerHeight / 3)
                  : -200,
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <KoreanSymbol size={256} layoutId="main-korean-symbol" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
