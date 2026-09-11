"use client";

import React, { useState, useEffect } from "react";

export function StickyCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear cleanly with slide-up only after scrolling past the hero fold (> 850px)
      if (window.scrollY > 850) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      aria-label="Admissions Quick Actions"
      className={`fixed bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.25rem)] sm:w-[calc(100%-2rem)] max-w-3xl transition-all duration-500 ease-out transform ${
        visible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-16 opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-[#181A20]/95 backdrop-blur-xl text-white border border-white/[0.14] shadow-[0_20px_50px_rgba(0,0,0,0.45)] rounded-full overflow-hidden px-3.5 sm:px-8 py-2 sm:py-4 flex items-center justify-between gap-2 sm:gap-6">
        {/* Left: Clear Visual Anchor with Clean Typography Hierarchy */}
        <div className="flex flex-col text-left min-w-0 pr-1">
          <span className="text-xs sm:text-[17px] font-bold text-white tracking-tight leading-tight whitespace-nowrap">
            Admissions Open
          </span>
          <span className="text-[10px] sm:text-xs text-[#9CA3AF] tracking-normal mt-0.5 whitespace-nowrap">
            AY 2026–27<span className="hidden md:inline"> · Wagholi, Pune</span>
          </span>
        </div>

        {/* Right: Compact Phone Action + Brand Blue Button */}
        <div className="flex items-center gap-2 sm:gap-6 flex-shrink-0">
          <a
            href="tel:+919175988998"
            className="w-8 h-8 sm:w-auto sm:h-auto rounded-full bg-white/10 sm:bg-transparent flex items-center justify-center text-xs sm:text-sm text-[#D1D5DB] hover:text-white transition-colors"
            aria-label="Call Admissions Helpline at +91 91759 88998"
          >
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#9CA3AF]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span className="hidden sm:inline ml-2 font-medium">+91 91759 88998</span>
          </a>

          {/* Primary CTA Button */}
          <a
            href="#lead-form"
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#2A60E4] to-[#1D4ED8] hover:from-[#1E4DC0] hover:to-[#172554] text-white px-3.5 sm:px-7 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-md shadow-[#2A60E4]/30 whitespace-nowrap"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </aside>
  );
}
