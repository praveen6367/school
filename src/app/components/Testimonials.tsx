"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteContent } from "../content";
import { openAdmissionModal } from "../utils/modal";

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
    <section id="testimonials" className="scroll-mt-24 w-full border-b border-[#E6E2D8] bg-[#FBF9F5] py-12 sm:py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-[#111111] leading-[1.15] mb-3 sm:mb-4">
            {testimonials.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#555555] leading-relaxed">
            {testimonials.subtitle}
          </p>
        </div>

        {/* Testimonial Active Display - Pre-reference layout */}
        <div className="border border-[#E6E2D8] bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12">
          {/* Photo Column */}
          {/* TODO: replace with real school photography / client to supply real parent photos */}
          <div className="lg:col-span-5 relative min-h-[240px] sm:min-h-[300px] lg:min-h-[420px] bg-[#EAE6DD] border-b lg:border-b-0 lg:border-r border-[#E6E2D8]">
            <Image
              src={testimonials.items[activeIndex].image}
              alt={testimonials.items[activeIndex].author}
              fill
              className="object-cover object-center transition-all duration-700"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>

          {/* Quote Column */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
            <div>
              {/* Cloned SVG Quote Mark */}
              <div className="text-[#2A60E4] mb-4 sm:mb-6">
                <svg width="24" height="20" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13 2.32394C11.758 2.70423 10.5573 3.76056 10.5573 5.95774V6.67606H12.9586V12H7.82484V6.46479C7.82484 2.15493 10.2261 0.25352 13 0V2.32394ZM5.17516 2.32394C3.93312 2.70423 2.73248 3.76056 2.73248 5.95774V6.67606H5.13376V12H0V6.46479C0 2.15493 2.40127 0.25352 5.17516 0V2.32394Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              {/* Quote Text */}
              <blockquote className="text-base sm:text-lg lg:text-xl font-serif text-[#111111] leading-relaxed font-normal mb-6 sm:mb-8">
                “{testimonials.items[activeIndex].quote}”
              </blockquote>
            </div>

            {/* Author + Controls Footer */}
            <div className="pt-5 sm:pt-6 border-t border-[#E6E2D8] flex items-center justify-between gap-4">
              <div className="min-w-0 pr-2">
                <div className="font-serif text-sm sm:text-lg font-bold text-[#111111] truncate">
                  {testimonials.items[activeIndex].author}
                </div>
                <div className="text-xs sm:text-sm text-[#666666] mt-0.5 truncate">
                  {testimonials.items[activeIndex].role}
                </div>
              </div>

              {/* Arrow Controls */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  suppressHydrationWarning
                  type="button"
                  onClick={prev}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#E6E2D8] flex items-center justify-center hover:bg-[#FBF9F5] hover:border-black transition-colors cursor-pointer"
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
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#E6E2D8] flex items-center justify-center hover:bg-[#FBF9F5] hover:border-black transition-colors cursor-pointer"
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

        {/* Section CTAs */}
        <div className="mt-8 sm:mt-10 p-6 sm:p-8 rounded-2xl bg-white border border-[#E6E2D8] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <span className="text-xs font-mono font-bold text-[#2A60E4] uppercase tracking-wider block mb-1">
              Join 500+ Happy Families in Wagholi
            </span>
            <h3 className="text-lg sm:text-xl font-serif font-bold text-[#111111]">
              Come Experience the School for Yourself
            </h3>
            <p className="text-xs sm:text-sm text-[#666666] mt-0.5">
              Interact with our faculty, tour the classrooms, and discuss grade placement.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto flex-shrink-0">
            <a
              href="#lead-form"
              onClick={(e) => {
                e.preventDefault();
                openAdmissionModal();
              }}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-[#2A60E4] to-[#1D4ED8] hover:from-[#1E4DC0] hover:to-[#172554] text-white font-bold text-sm shadow-md shadow-[#2A60E4]/30 hover:scale-105 active:scale-95 transition-all text-center cursor-pointer"
            >
              Book a Campus Tour
            </a>
            <a
              href="tel:+919175122265"
              className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-[#111111] text-[#111111] hover:bg-black/5 font-semibold text-sm transition-all text-center"
            >
              <svg className="w-4 h-4 mr-2 text-[#555555]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 9175122265
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
