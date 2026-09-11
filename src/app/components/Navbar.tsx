"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteContent } from "../content";

export function Navbar() {
  const { brand } = siteContent;

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#E6E2D8]">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: School Logo & Clean Affiliation Line */}
        <div className="flex items-center gap-2 sm:gap-6 min-w-0">
          <Link href="/" className="flex items-center group py-1 flex-shrink-0">
            <Image
              src="/Logo-dark.png"
              alt="Mount Litera Zee School Wagholi-Pune"
              width={215}
              height={73}
              className="h-8 sm:h-12 w-auto object-contain"
              priority
            />
          </Link>

          <div className="hidden lg:block pl-4 border-l border-[#E6E2D8]">
            <p className="text-xs text-[#555555] font-medium tracking-tight">
              CBSE Affiliated · Wagholi, Pune · Affiliation No. 1131377
            </p>
          </div>
        </div>

        {/* Right: Clean Actions (Compact Call link/icon + Enquire Now button) */}
        <div className="flex items-center gap-2 sm:gap-5 flex-shrink-0">
          <a
            href="tel:+919175988998"
            className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#111111] hover:text-[#2A60E4] transition-colors p-1.5 sm:p-0 rounded-full"
            aria-label="Call admissions helpline at +91 91759 88998"
          >
            <div className="w-8 h-8 sm:w-auto sm:h-auto rounded-full bg-[#2A60E4]/10 sm:bg-transparent flex items-center justify-center text-[#2A60E4]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <span className="hidden sm:inline">Call Us: +91 91759 88998</span>
          </a>

          <a
            href="#lead-form"
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#2A60E4] to-[#1D4ED8] hover:from-[#1E4DC0] hover:to-[#172554] text-white px-3 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-md shadow-[#2A60E4]/30 whitespace-nowrap"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </header>
  );
}
