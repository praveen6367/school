import React from "react";
import Image from "next/image";
import { siteContent } from "../content";

export function Commitments() {
  const { commitments } = siteContent;

  return (
    <section id="admission-steps" className="scroll-mt-24 w-full border-b border-[#E6E2D8] bg-[#FBF9F5] py-12 sm:py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-[#111111] leading-[1.15] mb-3 sm:mb-4">
            {commitments.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#555555] leading-relaxed">
            {commitments.subtitle}
          </p>
        </div>

        {/* 4 Steps Grid - Pre-reference visual style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-8 sm:mb-12">
          {commitments.items.map((item) => (
            <div
              key={item.num}
              className="bg-white border border-[#E6E2D8] rounded-2xl p-5 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <div className="text-xs font-mono font-bold text-[#2A60E4] mb-2 sm:mb-3">
                  STEP {item.num}
                </div>
                <h3 className="text-base sm:text-lg font-serif font-semibold text-[#111111] mb-1.5 sm:mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-4 sm:mb-6">
                  {item.text}
                </p>
              </div>

              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-[#E6E2D8] bg-[#F5F2EA]">
                <Image
                  src={item.image}
                  alt={(item as any).alt || item.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>

        {/* Centered Action Button */}
        <div className="text-center">
          <a
            href={commitments.ctaButton.href}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#111111] text-[#FBF9F5] hover:bg-black font-medium text-sm transition-all shadow-sm hover:scale-105 active:scale-95"
          >
            {commitments.ctaButton.label}
          </a>
        </div>
      </div>
    </section>
  );
}
