import React from "react";
import Image from "next/image";
import { siteContent } from "../content";

export function BeyondAcademicsSection() {
  const { beyondAcademics } = siteContent;

  return (
    <section id="beyond-academics" className="scroll-mt-24 w-full border-b border-[#E6E2D8] bg-[#FBF9F5] py-12 sm:py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-[#111111] leading-[1.15] mb-3 sm:mb-4">
            {beyondAcademics.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#555555] leading-relaxed">
            {beyondAcademics.subtitle}
          </p>
        </div>

        {/* 4-Column Cards Row with Extracurricular & Activity Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {beyondAcademics.cards.map((card, idx) => (
            <div
              key={card.title}
              className="bg-white border border-[#E6E2D8] rounded-2xl p-5 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <div className="text-xs font-mono font-semibold text-[#2A60E4] mb-2 sm:mb-3">
                  0{idx + 1}
                </div>
                <h3 className="text-lg sm:text-xl font-serif text-[#111111] font-semibold mb-2 sm:mb-3">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-4 sm:mb-6">
                  {card.description}
                </p>
              </div>

              {card.image && (
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-[#E6E2D8] bg-[#F5F2EA]">
                  <Image
                    src={card.image}
                    alt={card.alt || card.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                    unoptimized
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
