import React from "react";
import Image from "next/image";
import { siteContent } from "../content";

export function Commitments() {
  const { commitments } = siteContent;

  return (
    <section id="admission-steps" className="scroll-mt-24 w-full border-b border-[#E6E2D8] bg-[#FBF9F5] py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-5xl font-serif text-[#111111] leading-[1.15] mb-12 lg:mb-16">
          {commitments.heading}
        </h2>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.items.map((item) => (
            <div
              key={item.num}
              className="bg-white border border-[#E6E2D8] rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <div className="text-xs font-mono font-bold text-[#2A60E4] mb-3">
                  STEP {item.num}
                </div>
                <h3 className="text-lg font-serif font-semibold text-[#111111] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-6">
                  {item.text}
                </p>
              </div>

              {/* TODO: replace with real school photography */}
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-[#E6E2D8] bg-[#F5F2EA]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
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
