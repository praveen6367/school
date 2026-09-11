import React from "react";
import Image from "next/image";
import { siteContent } from "../content";

export function CampusSpacesSection() {
  const { campusSpaces } = siteContent;

  return (
    <section id="campus-spaces" className="scroll-mt-24 w-full border-b border-[#222222] bg-[#111111] text-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8 sm:mb-12 lg:mb-16">
          <div className="text-xs font-mono font-bold text-[#FED933] uppercase tracking-wider mb-2 sm:mb-3">
            {campusSpaces.statLine}
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-white leading-[1.15] mb-3 sm:mb-4">
            {campusSpaces.heading}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#CCCCCC] leading-relaxed">
            {campusSpaces.subtitle}
          </p>
        </div>

        {/* 2x2 Grid of Campus Zones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-8 sm:mb-12">
          {campusSpaces.zones.map((zone) => (
            <div
              key={zone.title}
              className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-5 sm:p-7 flex flex-col justify-between hover:border-[#444444] transition-colors"
            >
              <div>
                <h3 className="text-lg sm:text-2xl font-serif text-white font-semibold mb-2 sm:mb-3">
                  {zone.title}
                </h3>
                <p className="text-xs sm:text-base text-[#AAAAAA] leading-relaxed mb-4 sm:mb-6">
                  {zone.description}
                </p>
              </div>

              {(zone as any).image && (
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-[#333333] bg-[#222222]">
                  <Image
                    src={(zone as any).image}
                    alt={(zone as any).alt || zone.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 5-Acre Campus Panoramic Aerial Showcase */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-2xl overflow-hidden border border-[#2A2A2A] bg-[#1A1A1A] shadow-lg">
          <Image
            src={campusSpaces.image}
            alt={(campusSpaces as any).imageAlt || "Mount Litera Wagholi 5-Acre Campus Spaces"}
            fill
            className="object-cover"
            sizes="(max-width: 1440px) 100vw, 1440px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end p-4 sm:p-8 lg:p-10">
            <div className="text-white">
              <p className="text-[10px] sm:text-xs font-mono text-[#FED933] font-semibold uppercase tracking-wider mb-1">
                Wagholi Campus Infrastructure
              </p>
              <h4 className="text-base sm:text-xl lg:text-2xl font-serif font-bold text-white leading-snug">
                5-Acre Purpose-Built Academic & Sports Campus · Nagar Road, Pune
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
