import React from "react";
import Image from "next/image";
import { siteContent } from "../content";

export function GalleryMarquee() {
  const { marqueeGallery } = siteContent;

  return (
    <section id="campus" className="scroll-mt-24 w-full border-b border-[#E6E2D8] bg-[#FBF9F5] py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 lg:mb-14">
        <h2 className="text-3xl sm:text-5xl font-serif text-[#111111] max-w-3xl mx-auto leading-[1.15]">
          {marqueeGallery.heading}
        </h2>
      </div>

      {/* Marquee Row */}
      <div className="relative w-full overflow-hidden border-y border-[#E6E2D8] py-6 bg-white">
        <div className="flex animate-marquee gap-6">
          {/* Double array to create seamless loop */}
          {/* TODO: replace with real school photography */}
          {[...marqueeGallery.images, ...marqueeGallery.images].map((imgUrl, i) => (
            <div
              key={i}
              className="relative w-[280px] sm:w-[340px] h-[200px] sm:h-[240px] flex-shrink-0 rounded-2xl overflow-hidden border border-[#E6E2D8] shadow-sm hover:opacity-90 transition-opacity bg-[#F5F2EA]"
            >
              <Image
                src={imgUrl}
                alt="Campus moment"
                fill
                className="object-cover"
                sizes="340px"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
