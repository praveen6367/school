import React from "react";
import { siteContent } from "../content";

export function CtaSection() {
  const { cta } = siteContent;

  return (
    <section id="tour" className="scroll-mt-24 w-full border-b border-[#E6E2D8] bg-[#FBF9F5] py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto rounded-2xl border border-[#E6E2D8] bg-white p-8 sm:p-12 text-center shadow-xs">
          <h2 className="text-2xl sm:text-4xl font-serif text-[#111111] leading-[1.15] mb-3">
            {cta.title}
          </h2>

          <p className="text-sm sm:text-base text-[#555555] max-w-lg mx-auto mb-8 leading-relaxed">
            {cta.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={cta.primaryBtn.href}
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#111111] text-[#FBF9F5] hover:bg-black font-medium text-sm transition-all"
            >
              {cta.primaryBtn.label}
            </a>

            <a
              href={cta.secondaryBtn.href}
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 rounded-full border border-[#111111] text-[#111111] hover:bg-black/5 font-medium text-sm transition-all"
            >
              {cta.secondaryBtn.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
