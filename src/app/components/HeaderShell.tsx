"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";

type HeaderShellProps = {
  children: ReactNode;
};

export function HeaderShell({ children }: HeaderShellProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 h-20 text-white transition-[padding] duration-300 ${
        isScrolled ? "px-3 pt-2" : ""
      }`}
    >
      <div
        data-scrolled={isScrolled}
        className={`relative mx-auto transition-all duration-300 ${
          isScrolled
            ? "h-16 max-w-6xl rounded-full border border-white/10 bg-brand/75 shadow-lg backdrop-blur-md"
            : "h-20 max-w-full border-b border-white/10 bg-brand"
        }`}
      >
        {children}
      </div>
    </header>
  );
}
