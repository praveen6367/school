import React from "react";
import { siteContent } from "../content";

export function SupportSection() {
  const { supportSection } = siteContent;

  return (
    <section id="support" className="scroll-mt-24 w-full border-b border-[#E6E2D8] bg-[#FBF9F5] py-12 sm:py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-[#111111] leading-[1.15] mb-3 sm:mb-4">
            {supportSection.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#555555] leading-relaxed">
            {supportSection.subtitle}
          </p>
        </div>

        {/* 2x2 Grid of Support Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {supportSection.cards.map((card) => (
            <div
              key={card.title}
              className="bg-white border border-[#E6E2D8] rounded-2xl p-5 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <h3 className="text-lg sm:text-2xl font-serif text-[#111111] font-semibold mb-2 sm:mb-3">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-base text-[#555555] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
