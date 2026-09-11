"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteContent } from "../content";

export function Testimonials() {
  const { testimonials } = siteContent;
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.items.length - 1 : current - 1));
  };

  const next = () => {
    setActiveIndex((current) => (current === testimonials.items.length - 1 ? 0 : current + 1));
  };

  return (
    <section id="testimonials" className="scroll-mt-24 w-full border-b border-[#E6E2D8] bg-[#FBF9F5] py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-5xl font-serif text-[#111111] leading-[1.15] mb-12 lg:mb-16">
          {testimonials.heading}
        </h2>

        {/* Testimonial Active Display */}
        <div className="border border-[#E6E2D8] bg-white rounded-3xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12">
          {/* Photo Column */}
          {/* TODO: replace with real school photography */}
          <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-[420px] bg-[#EAE6DD] border-b lg:border-b-0 lg:border-r border-[#E6E2D8]">
            <Image
              src={testimonials.items[activeIndex].image}
              alt={testimonials.items[activeIndex].author}
              fill
              className="object-cover object-center transition-all duration-700"
              sizes="(max-width: 1024px) 100vw, 40vw"
              unoptimized
            />
          </div>

          {/* Quote Column */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
            <div>
              {/* Cloned SVG Quote Mark */}
              <div className="text-[#2A60E4] mb-6">
                <svg width="24" height="20" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13 2.32394C11.758 2.70423 10.5573 3.76056 10.5573 5.95774V6.67606H12.9586V12H7.82484V6.46479C7.82484 2.15493 10.2261 0.25352 13 0V2.32394ZM5.17516 2.32394C3.93312 2.70423 2.73248 3.76056 2.73248 5.95774V6.67606H5.13376V12H0V6.46479C0 2.15493 2.40127 0.25352 5.17516 0V2.32394Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              {/* Quote Text */}
              <blockquote className="text-base sm:text-lg lg:text-xl font-serif text-[#111111] leading-relaxed font-normal mb-8">
                “{testimonials.items[activeIndex].quote}”
              </blockquote>
            </div>

            {/* Author + Controls Footer */}
            <div className="pt-6 border-t border-[#E6E2D8] flex items-center justify-between">
              <div>
                <div className="font-serif text-base sm:text-lg font-bold text-[#111111]">
                  {testimonials.items[activeIndex].author}
                </div>
                <div className="text-xs sm:text-sm text-[#666666] mt-0.5">
                  {testimonials.items[activeIndex].role}
                </div>
              </div>

              {/* Arrow Controls */}
              <div className="flex items-center gap-2">
                <button
                  suppressHydrationWarning
                  type="button"
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-[#E6E2D8] flex items-center justify-center hover:bg-[#FBF9F5] hover:border-black transition-colors"
                  aria-label="Previous Testimonial"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  suppressHydrationWarning
                  type="button"
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-[#E6E2D8] flex items-center justify-center hover:bg-[#FBF9F5] hover:border-black transition-colors"
                  aria-label="Next Testimonial"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
