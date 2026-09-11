import React from "react";
import { Hero } from "./components/Hero";
import { ThreeCols } from "./components/ThreeCols";
import { PedagogySection } from "./components/PedagogySection";
import { FutureSkillsSection } from "./components/FutureSkillsSection";
import { CampusSpacesSection } from "./components/CampusSpacesSection";
import { BeyondAcademicsSection } from "./components/BeyondAcademicsSection";
import { SupportSection } from "./components/SupportSection";
import { DifferentiatorsSection } from "./components/DifferentiatorsSection";
import { Testimonials } from "./components/Testimonials";
import { Commitments } from "./components/Commitments";
import { GalleryMarquee } from "./components/GalleryMarquee";
import { CtaSection } from "./components/CtaSection";
import { FaqSection } from "./components/FaqSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#FBF9F5]">
      {/* 3. Hero Section with Split Layout & Registration Card */}
      <Hero />

      {/* 4. More Than a School / Value Pillars */}
      <ThreeCols />

      {/* 5. Pedagogy Section */}
      <PedagogySection />

      {/* 6. Future-Skills Section */}
      <FutureSkillsSection />

      {/* 7. Dark Campus Spaces Section */}
      <CampusSpacesSection />

      {/* 8. Beyond Academics Section */}
      <BeyondAcademicsSection />

      {/* 9. Light Support Section */}
      <SupportSection />

      {/* 10. Differentiators Section */}
      <DifferentiatorsSection />

      {/* 11. Testimonials Section */}
      <Testimonials />

      {/* 12. How Admission Works Section */}
      <Commitments />

      {/* Campus Daily Life Marquee Gallery */}
      <GalleryMarquee />

      {/* 13. Warm CTA Band */}
      <CtaSection />

      {/* 14. FAQ Accordion */}
      <FaqSection />
    </div>
  );
}
