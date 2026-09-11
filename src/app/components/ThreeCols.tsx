import React from "react";
import Image from "next/image";
import { siteContent } from "../content";

export function ThreeCols() {
  const { strongBeginning } = siteContent;

  return (
    <section id="academics" className="scroll-mt-24 w-full border-b border-[#E6E2D8] bg-[#FBF9F5] py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-5xl font-serif text-[#111111] leading-[1.15] mb-12 lg:mb-16">
          {strongBeginning.heading}
        </h2>

        {/* 3 Columns Grid - Clone structure */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-[#E6E2D8] divide-y md:divide-y-0 md:divide-x divide-[#E6E2D8] bg-white rounded-2xl overflow-hidden shadow-sm">
          {strongBeginning.columns.map((col, idx) => (
            <div key={col.title} className="p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-semibold text-[#2A60E4] mb-3">
                  0{idx + 1}
                </div>
                <h3 className="text-xl sm:text-2xl font-serif text-[#111111] mb-3 font-semibold">
                  {col.title}
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed mb-8">
                  {col.description}
                </p>
              </div>

              {/* TODO: replace with real school photography */}
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-[#E6E2D8] bg-[#F5F2EA]">
                <Image
                  src={col.image}
                  alt={col.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
