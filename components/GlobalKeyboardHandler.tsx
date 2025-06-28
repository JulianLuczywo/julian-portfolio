"use client";

import { useEffect } from "react";

export default function GlobalKeyboardHandler() {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        const floatingButton = document.querySelector(
          "[data-floating-command-button]"
        ) as HTMLButtonElement;
        if (floatingButton) {
          floatingButton.click();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
}
