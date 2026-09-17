"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteContent } from "../content";

export function Footer() {
  const { brand, footer } = siteContent;

  return (
    <footer className="relative w-full bg-[#111111] text-white border-t border-[#222222] overflow-hidden">
      {/* Background Campus Exterior / Signage Treatment */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <Image
          src="/images/contact/contact-header-background.jpg"
          alt="Mount Litera Zee School Wagholi Campus Exterior & Signage"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-[#111111]" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Pre-footer Callout Row */}
        <div className="border-b border-[#2A2A2A] pb-8 sm:pb-12 mb-8 sm:mb-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8">
          <div className="max-w-2xl">
            <h3 className="text-xl sm:text-3xl lg:text-4xl font-serif font-bold text-white mb-2 sm:mb-3">
              {footer.closingTitle}
            </h3>
            <p className="text-xs sm:text-base text-[#AAAAAA] leading-relaxed">
              {footer.closingSubtitle}
            </p>
          </div>

          <a
            href="#lead-form"
            onClick={(e) => {
              e.preventDefault();
              if (typeof window !== "undefined") {
                window.dispatchEvent(new CustomEvent("open-lead-modal"));
              }
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#2A60E4] hover:bg-[#1E4DC0] text-white font-bold text-sm transition-all shadow-md shadow-[#2A60E4]/30 hover:scale-105 active:scale-95 text-center flex-shrink-0 cursor-pointer"
          >
            {footer.visitButton.label}
          </a>
        </div>

        {/* Main Footer Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-12">
          {/* Brand & Address */}
          <div className="lg:col-span-6 space-y-4">
            <a
              href={brand.website || "https://mountliterazeepune.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-1 hover:opacity-90 transition-opacity"
              title="Visit Mount Litera Zee School Wagholi - Main Website (mountliterazeepune.com)"
            >
              <Image
                src="/Logo-white.png"
                alt="Mount Litera Zee School Wagholi-Pune"
                width={215}
                height={73}
                className="h-11 sm:h-12 w-auto object-contain"
              />
            </a>

            <p className="text-sm text-[#AAAAAA] max-w-md leading-relaxed">
              {footer.affiliation}
            </p>

            <p className="text-xs sm:text-sm text-[#888888] max-w-md leading-relaxed">
              {brand.address}
            </p>

            <div className="pt-1">
              <a
                href={brand.website || "https://mountliterazeepune.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-[#4E82EE] hover:text-[#7CA6FF] font-medium transition-colors"
              >
                <svg className="w-4 h-4 text-[#4E82EE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span>mountliterazeepune.com</span>
                <span className="text-xs">↗</span>
              </a>
            </div>
          </div>

          {/* Quick Links & Admissions Helpline */}
          <div className="lg:col-span-3">
            <h4 className="font-semibold text-white mb-3 uppercase tracking-wider text-[11px]">
              Explore
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#AAAAAA]">
              <li><a href="#academics" className="hover:text-white transition-colors">More Than a School</a></li>
              <li><a href="#pedagogy" className="hover:text-white transition-colors">Pedagogy</a></li>
              <li><a href="#future-skills" className="hover:text-white transition-colors">Future Skills</a></li>
              <li><a href="#campus-spaces" className="hover:text-white transition-colors">Campus Spaces</a></li>
              <li><a href="#beyond-academics" className="hover:text-white transition-colors">Beyond Academics</a></li>
              <li><a href="#differentiators" className="hover:text-white transition-colors">Differentiators</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-semibold text-white mb-3 uppercase tracking-wider text-[11px]">
              Admissions Desk
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#AAAAAA]">
              <li>
                <span className="text-[#666666] block text-xs">Direct Helpline:</span>
                <a href="tel:+919175122265" className="hover:text-white font-medium text-white">
                  +91 9175122265
                </a>
              </li>
              <li>
                <span className="text-[#666666] block text-xs">Alternate:</span>
                <a href="tel:+919175122295" className="hover:text-white font-medium text-white">
                  +91 9175122295
                </a>
              </li>
              <li>
                <span className="text-[#666666] block text-xs">Email:</span>
                <a href={`mailto:${brand.email}`} className="hover:text-white text-white">
                  {brand.email}
                </a>
              </li>
              <li>
                <span className="text-[#666666] block text-xs">Official Website:</span>
                <a
                  href={brand.website || "https://mountliterazeepune.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-white font-medium inline-flex items-center gap-1"
                >
                  mountliterazeepune.com
                  <span className="text-xs text-[#4E82EE]">↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="pt-8 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#777777]">
          <div>{footer.copyright}</div>
          <div className="flex flex-wrap items-center gap-5">
            {footer.legalLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
