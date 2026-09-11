"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteContent } from "../content";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const { brand, navigation } = siteContent;

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#E6E2D8]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left: Mount Litera Logo */}
        <div className="flex items-center gap-5">
          <Link href="/" className="flex items-center group py-1">
            <Image
              src="/Logo.png"
              alt="Mount Litera Zee School Wagholi-Pune"
              width={215}
              height={73}
              className="h-11 sm:h-12 w-auto object-contain mix-blend-multiply"
              priority
            />
          </Link>

          {/* Cloned Palette Accent Bar */}
          <div className="hidden xl:flex items-center gap-1.5 pl-4 border-l border-[#E6E2D8] py-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FED933]" title="Curiosity" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FE6D2E]" title="Innovation" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#00AD6F]" title="Values" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#2A60E4]" title="Excellence" />
          </div>
        </div>

        {/* Center: Desktop Navigation Links */}
        {/* Center: Desktop One-Page Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 text-[14px] font-medium text-[#111111]">
          {navigation.links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3.5 py-2 rounded-md hover:text-[#2A60E4] hover:bg-black/[0.03] transition-colors font-medium text-[#222222]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:+919175988998"
            className="text-[13px] font-semibold text-[#111111] hover:text-[#2A60E4] transition-colors px-2 py-1 flex items-center gap-1.5"
          >
            <svg className="w-3.5 h-3.5 text-[#2A60E4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>+91 91759 88998</span>
          </a>

          <a
            href="#lead-form"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#2A60E4] to-[#1D4ED8] hover:from-[#1E4DC0] hover:to-[#172554] text-white px-5 py-2.5 rounded-full text-[13px] font-bold transition-all hover:scale-105 active:scale-95 shadow-md shadow-[#2A60E4]/30"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Get Admission Now</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href="#lead-form"
            className="inline-flex items-center gap-1.5 bg-[#2A60E4] text-white px-3.5 py-1.5 rounded-full text-xs font-bold shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Apply Now</span>
          </a>
          <button
            suppressHydrationWarning
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-[#111111] hover:bg-black/5 rounded-md"
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#E6E2D8] bg-[#FBF9F5] px-4 pt-3 pb-6 space-y-3">
          <div className="pb-2 border-b border-[#E6E2D8]">
            <p className="text-xs font-semibold text-[#2A60E4]">{brand.tagline}</p>
            <p className="text-xs text-[#666666]">{brand.claim}</p>
          </div>

          {navigation.links.map((item) => (
            <div key={item.label} className="border-b border-[#E6E2D8]/60 pb-2">
              <a
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-semibold text-[#111111] py-1 hover:text-[#2A60E4]"
              >
                {item.label}
              </a>
            </div>
          ))}

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="tel:+919175988998"
              className="text-center py-2 text-xs font-semibold text-[#111111] border border-[#E6E2D8] rounded-full flex items-center justify-center gap-2"
            >
              📞 Call Admissions: +91 91759 88998
            </a>
            <a
              href="#lead-form"
              onClick={() => setMobileOpen(false)}
              className="text-center py-2.5 text-xs font-bold bg-[#2A60E4] text-white rounded-full shadow-md flex items-center justify-center gap-1.5"
            >
              <span>⚡ Get Admission Now (AY 2026–27)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
