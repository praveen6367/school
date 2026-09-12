"use client";

import React from "react";
import { siteContent } from "../content";
import { openAdmissionModal } from "../utils/modal";

export function PedagogySection() {
  const { pedagogy } = siteContent;

  return (
    <section id="pedagogy" className="scroll-mt-24 w-full border-b border-[#E6E2D8] bg-[#F5F2EA]/50 py-12 sm:py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="text-xs font-mono font-bold text-[#2A60E4] uppercase tracking-wider mb-2 sm:mb-3">
            {pedagogy.tagline}
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-[#111111] leading-[1.15] mb-6 sm:mb-8">
            {pedagogy.heading}
          </h2>
          <div className="space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg text-[#555555] leading-relaxed mb-8 sm:mb-10">
            <p>{pedagogy.paragraph1}</p>
            <p>{pedagogy.paragraph2}</p>
          </div>

          {/* Section CTA */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
            <a
              href="#lead-form"
              onClick={(e) => {
                e.preventDefault();
                openAdmissionModal();
              }}
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-gradient-to-r from-[#2A60E4] to-[#1D4ED8] hover:from-[#1E4DC0] hover:to-[#172554] text-white font-bold text-sm shadow-md shadow-[#2A60E4]/30 hover:scale-105 active:scale-95 transition-all text-center cursor-pointer"
            >
              Experience Litera Octave · Book a Tour
            </a>
            <a
              href="tel:+919175122265"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-[#111111] text-[#111111] hover:bg-black/5 font-semibold text-sm transition-all text-center"
            >
              <svg className="w-4 h-4 mr-2 text-[#555555]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Admissions: +91 9175122265
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
