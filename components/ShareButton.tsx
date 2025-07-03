"use client";

import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
      alert("Link copied to clipboard");
    }
  };

  return (
    <Button
      variant="ghost"
      className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
      onClick={handleShare}
    >
      {copied ? "Copied!" : "Share"} <ExternalLink size={18} />
    </Button>
  );
}
