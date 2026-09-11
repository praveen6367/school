"use client";

import React, { useState, useEffect } from "react";

export function StickyCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA bar once user has scrolled past the top 350px
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside
      aria-label="Admissions Quick Actions"
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-6 lg:left-1/2 lg:-translate-x-1/2 lg:max-w-4xl z-40 transition-all duration-300 animate-slideUp"
    >
      <div className="bg-[#111111]/95 backdrop-blur-md text-white border border-white/15 shadow-2xl rounded-2xl sm:rounded-full px-4 sm:px-6 py-3 sm:py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Left: Admissions Open Indicator */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-bold tracking-tight text-white">
                  Admissions Open 2026–27
                </span>
                <span className="text-[10px] font-mono uppercase bg-[#2A60E4] text-white px-2 py-0.5 rounded-full font-semibold">
                  AY 2026–27
                </span>
              </div>
              <p className="text-[11px] text-[#AAAAAA] hidden md:block">
                Mount Litera Zee School, Wagholi-Pune • Nursery to Grade 10
              </p>
            </div>
          </div>

          {/* Quick Call on mobile top-right */}
          <a
            href="tel:+919175988998"
            className="sm:hidden text-xs text-[#FED933] font-medium flex items-center gap-1"
          >
            <span>📞 Call</span>
          </a>
        </div>

        {/* Right: Flashy Action Buttons */}
        <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
          <a
            href="tel:+919175988998"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-white/90 hover:text-white px-3.5 py-2 rounded-full border border-white/20 hover:border-white/40 transition-colors"
          >
            <span>📞</span>
            <span>+91 91759 88998</span>
          </a>

          <a
            href="#lead-form"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#2A60E4] to-[#1D4ED8] hover:from-[#1E4DC0] hover:to-[#172554] text-white text-xs sm:text-sm font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-full shadow-lg shadow-[#2A60E4]/30 hover:scale-105 active:scale-95 transition-all text-center"
          >
            <span>⚡ Get Admission Now</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
