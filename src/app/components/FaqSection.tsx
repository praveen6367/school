"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteContent } from "../content";

export function FaqSection() {
  const { faqs } = siteContent;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <section id="faq" className="scroll-mt-24 w-full border-b border-[#E6E2D8] bg-[#FBF9F5] py-12 sm:py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Heading + Accordions */}
          <div className="lg:col-span-7">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-[#111111] leading-[1.15] mb-6 sm:mb-10 lg:mb-14">
              Frequently Asked Questions
            </h2>

            {/* FAQ Accordion List */}
            <div className="border-t border-[#E6E2D8] divide-y divide-[#E6E2D8]">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={faq.question} className="py-4 sm:py-6">
                    <button
                      suppressHydrationWarning
                      type="button"
                      onClick={() => toggle(idx)}
                      className="w-full flex items-center justify-between text-left gap-3 sm:gap-4 group cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="font-serif text-sm sm:text-lg font-medium text-[#111111] group-hover:text-[#2A60E4] transition-colors">
                        {faq.question}
                      </span>
                      <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-[#E6E2D8] flex items-center justify-center text-[#111111] text-xs sm:text-sm flex-shrink-0 group-hover:border-[#2A60E4] transition-colors">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="mt-2.5 sm:mt-3.5 pr-2 sm:pr-8 text-xs sm:text-base text-[#555555] leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Campus Photography */}
          <div className="lg:col-span-5 lg:pt-2">
            <div className="relative aspect-[4/3] sm:aspect-[4/5] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E6E2D8] bg-[#EAE6DD] shadow-sm">
              <Image
                src="/images/admissions/campus-building-facade.jpeg"
                alt="Mount Litera Zee School Wagholi Campus Academic Building & Outdoor Play Area"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
