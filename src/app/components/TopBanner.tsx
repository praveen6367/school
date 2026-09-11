"use client";

import React from "react";

export function TopBanner() {
  return (
    <div className="w-full bg-[#111111] text-[#FBF9F5] border-b border-[#222222] py-2 px-4 text-xs font-medium relative z-50">
      <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-2 sm:gap-4">
        {/* Left: Blinking indicator & admissions text */}
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-semibold text-[#FED933] uppercase tracking-wider text-[11px]">
            Admissions Open AY 2026–27
          </span>
          <span className="hidden md:inline text-white/50">•</span>
          <span className="hidden md:inline text-[#CCCCCC] text-[11px]">
            Nursery to Grade 10 • Strictly 15 Students per Classroom • Wagholi Campus
          </span>
        </div>

        {/* Right: Quick CTA link */}
        <div className="flex items-center gap-3 ml-auto">
          <a
            href="tel:+919175988998"
            className="hidden sm:inline-flex items-center text-[11px] text-[#AAAAAA] hover:text-white transition-colors"
          >
            Admissions Helpline: <strong className="ml-1 text-white">+91 91759 88998</strong>
          </a>
          <a
            href="#lead-form"
            className="inline-flex items-center gap-1 bg-[#2A60E4] hover:bg-[#1E4DC0] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm transition-all hover:scale-105 active:scale-95"
          >
            <span>Register Now</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
