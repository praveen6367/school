import React from "react";
import { Hero } from "./components/Hero";
import { ThreeCols } from "./components/ThreeCols";
import { Commitments } from "./components/Commitments";
import { Testimonials } from "./components/Testimonials";
import { GalleryMarquee } from "./components/GalleryMarquee";
import { FaqSection } from "./components/FaqSection";
import { CtaSection } from "./components/CtaSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#FBF9F5]">
      <Hero />
      <ThreeCols />
      <Commitments />
      <Testimonials />
      <GalleryMarquee />
      <FaqSection />
      <CtaSection />
    </div>
  );
}
