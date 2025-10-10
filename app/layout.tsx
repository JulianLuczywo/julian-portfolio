"use client";

import type React from "react";
import localFont from "next/font/local";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";
import LinksSection from "../components/LinksSection";
import FloatingCommandButton from "../components/FloatingCommandButton";
import LoadingScreen from "../components/LoadingScreen";
import { useState, useEffect } from "react";
import { LayoutGroup } from "framer-motion";

const satoshi = localFont({
  src: [
    { path: "./fonts/Satoshi-Light.woff2", weight: "300", style: "normal" },
    { path: "./fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/Satoshi-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-noto-sans-kr",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate loading time - adjust as needed
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setShowContent(true);
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${satoshi.variable} ${notoSansKR.variable} font-mono antialiased`}
      >
        <LayoutGroup>
          <LoadingScreen
            isLoading={isLoading}
            onComplete={handleLoadingComplete}
          />
          {showContent && (
            <>
              <LinksSection />
              {children}
              <FloatingCommandButton />
            </>
          )}
        </LayoutGroup>
      </body>
    </html>
  );
}
