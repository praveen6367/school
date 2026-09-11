import React from "react";
import { siteContent } from "../content";

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
          <div className="space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg text-[#555555] leading-relaxed">
            <p>{pedagogy.paragraph1}</p>
            <p>{pedagogy.paragraph2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
