"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { siteContent } from "../content";

export function Hero() {
  const { hero } = siteContent;

  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    email: "",
    studentName: "",
    currentClass: "",
    seekingClass: "",
    callbackTime: "",
  });

  const [utmParams, setUtmParams] = useState({
    utmSource: "",
    utmMedium: "",
    utmCampaign: "",
    utmContent: "",
    utmTerm: "",
    referrer: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [leadId, setLeadId] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const q = new URLSearchParams(window.location.search);
      setUtmParams({
        utmSource: q.get("utm_source") || "direct",
        utmMedium: q.get("utm_medium") || "organic",
        utmCampaign: q.get("utm_campaign") || "admission_2026_27",
        utmContent: q.get("utm_content") || "",
        utmTerm: q.get("utm_term") || "",
        referrer: document.referrer || "",
      });
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const payload = {
        ...formData,
        grade: formData.seekingClass,
        ...utmParams,
      };

      const res = await fetch("/api/admission-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Submission failed. Please try again.");
      }

      setLeadId(data.leadId);
      setSubmitted(true);
    } catch (err: unknown) {
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please check your details.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const classOptions = [
    "Nursery",
    "Jr. KG",
    "Sr. KG",
    "Grade 1",
    "Grade 2",
    "Grade 3",
    "Grade 4",
    "Grade 5",
    "Grade 6",
    "Grade 7",
    "Grade 8",
    "Grade 9",
    "Grade 10",
  ];

  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    // Only load background video on desktop screens (>= 768px) and after the page has rendered
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      const timer = setTimeout(() => {
        setLoadVideo(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <section className="relative w-full border-b border-[#E6E2D8] bg-[#FBF9F5] py-10 lg:py-16 overflow-hidden">
      {/* Optimized Hero Visual Background (Preloaded WebP/AVIF Poster + Deferred Desktop Video) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <Image
          src="/images/home/admissions-open-hero-banner.jpeg"
          alt="Mount Litera Zee School Wagholi Campus"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-70"
        />
        {loadVideo && (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            className="hidden md:block absolute inset-0 w-full h-full object-cover object-center opacity-70 transition-opacity duration-1000"
          >
            <source src="/herovideo.mp4" type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FBF9F5]/92 via-[#FBF9F5]/60 to-[#FBF9F5]/30" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/*
          Split Layout:
          Mobile: Form is explicitly first (order-1), Headline is second (order-2)
          Desktop: Headline on left (lg:order-1), Form on right (lg:order-2)
        */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-14">
          {/* Left Column: Hero Content with Brand Blue / Dark Palette */}
          <div className="w-full lg:w-5/12 pt-2 lg:pt-6 text-left order-2 lg:order-1">
            {/* Pill Badge */}
            <div className="inline-block bg-[#2A60E4]/10 text-[#2A60E4] border border-[#2A60E4]/20 text-xs font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full mb-6">
              {hero.eyebrow}
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-[50px] font-bold text-[#111111] leading-[1.15] tracking-tight mb-4 sm:mb-6 font-serif">
              {hero.title}
            </h1>

            {/* Paragraph */}
            <p className="text-sm sm:text-base lg:text-lg text-[#555555] font-normal leading-relaxed mb-6 sm:mb-8">
              {hero.subtitle}
            </p>

            {/* Dual CTA Buttons - Brand Blue & Crisp Dark Outline */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5 mb-6">
              <a
                href={hero.secondaryBtn.href}
                className="inline-flex items-center justify-center px-5 sm:px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#2A60E4] to-[#1D4ED8] hover:from-[#1E4DC0] hover:to-[#172554] text-white font-bold text-sm sm:text-base shadow-md shadow-[#2A60E4]/30 hover:scale-105 active:scale-95 transition-all text-center"
              >
                {hero.secondaryBtn.label}
              </a>

              <a
                href={hero.primaryBtn.href}
                className="inline-flex items-center justify-center px-5 sm:px-6 py-3.5 rounded-xl border-2 border-[#111111] text-[#111111] hover:bg-black/5 font-bold text-sm sm:text-base transition-all text-center"
              >
                {hero.primaryBtn.label}
              </a>
            </div>

            {/* Affiliation / Registration Line */}
            <p className="text-xs sm:text-sm font-semibold text-[#666666] tracking-wide">
              {hero.affiliationDetail}
            </p>

            {/* Wagholi Campus Supporting Visual Card */}
            <div className="mt-6 sm:mt-8 pt-6 border-t border-[#E6E2D8] flex items-center gap-3.5 sm:gap-4">
              <div className="relative w-16 h-12 sm:w-24 sm:h-16 rounded-xl overflow-hidden border border-[#E6E2D8] shadow-sm flex-shrink-0 bg-[#F5F2EA]">
                <Image
                  src="/images/home/admissions-open-hero-banner.jpeg"
                  alt="Mount Litera Zee School Wagholi Campus Grounds & Infrastructure"
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <div>
                <div className="text-[11px] sm:text-xs font-mono font-bold text-[#2A60E4] uppercase tracking-wider">
                  Spread over 1,00,000 sq.ft.
                </div>
                <p className="text-xs sm:text-sm text-[#555555] font-medium leading-snug mt-0.5">
                  Spacious smart classrooms, Olympic sports turf & composite science labs on Nagar Road.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Clean White Form with Brand Blue Accents */}
          <div
            id="lead-form"
            className="scroll-mt-28 w-full lg:w-7/12 max-w-xl bg-white text-[#111111] rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl border border-[#E6E2D8] order-1 lg:order-2"
          >
            {submitted ? (
              <div className="py-8 sm:py-10 text-center space-y-4 animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-[#00AD6F]/20 text-[#00AD6F] flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111111]">Inquiry Received</h3>
                <p className="text-xs sm:text-sm text-[#555555] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#111111]">{formData.parentName}</strong>. Your inquiry for <strong className="text-[#111111]">{formData.studentName}</strong> ({formData.seekingClass}) has been received with reference <span className="font-mono text-[#2A60E4] font-bold">{leadId}</span>. Our Wagholi admissions coordinator will call you shortly.
                </p>
                <div className="pt-3 sm:pt-4">
                  <button
                    suppressHydrationWarning
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        parentName: "",
                        phone: "",
                        email: "",
                        studentName: "",
                        currentClass: "",
                        seekingClass: "",
                        callbackTime: "",
                      });
                    }}
                    className="text-xs text-[#2A60E4] font-semibold underline hover:text-[#1E4DC0]"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form suppressHydrationWarning onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                {errorMessage && (
                  <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 font-medium">
                    {errorMessage}
                  </div>
                )}

                {/* Field 1: Parent/Guardian Name* */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-[#111111] mb-1">
                    Parent/Guardian Name*
                  </label>
                  <input
                    suppressHydrationWarning
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full bg-white border border-[#D1D5DB] rounded-lg px-3.5 py-2.5 text-base sm:text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#2A60E4] focus:border-transparent transition-all"
                  />
                </div>

                {/* Field 2: Mobile Number* */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-[#111111] mb-1">
                    Mobile Number*
                  </label>
                  <input
                    suppressHydrationWarning
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-[#D1D5DB] rounded-lg px-3.5 py-2.5 text-base sm:text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#2A60E4] focus:border-transparent transition-all"
                  />
                </div>

                {/* Field 3: Email Address */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-[#111111] mb-1">
                    Email Address
                  </label>
                  <input
                    suppressHydrationWarning
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-[#D1D5DB] rounded-lg px-3.5 py-2.5 text-base sm:text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#2A60E4] focus:border-transparent transition-all"
                  />
                </div>

                {/* Field 4: Student Name* */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-[#111111] mb-1">
                    Student Name*
                  </label>
                  <input
                    suppressHydrationWarning
                    type="text"
                    required
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    className="w-full bg-white border border-[#D1D5DB] rounded-lg px-3.5 py-2.5 text-base sm:text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#2A60E4] focus:border-transparent transition-all"
                  />
                </div>

                {/* Field 5: Current Class* */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-[#111111] mb-1">
                    Current Class*
                  </label>
                  <select
                    suppressHydrationWarning
                    required
                    value={formData.currentClass}
                    onChange={(e) => setFormData({ ...formData, currentClass: e.target.value })}
                    className="w-full bg-white border border-[#D1D5DB] rounded-lg px-3.5 py-2.5 text-base sm:text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#2A60E4] focus:border-transparent cursor-pointer transition-all"
                  >
                    <option value="">Select class</option>
                    {classOptions.map((cls) => (
                      <option key={cls} value={cls}>
                        {cls}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Field 6: Class Seeking Admission For* */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-[#111111] mb-1">
                    Class Seeking Admission For*
                  </label>
                  <select
                    suppressHydrationWarning
                    required
                    value={formData.seekingClass}
                    onChange={(e) => setFormData({ ...formData, seekingClass: e.target.value })}
                    className="w-full bg-white border border-[#D1D5DB] rounded-lg px-3.5 py-2.5 text-base sm:text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#2A60E4] focus:border-transparent cursor-pointer transition-all"
                  >
                    <option value="">Select class</option>
                    {classOptions.map((cls) => (
                      <option key={cls} value={cls}>
                        {cls}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Field 7: Preferred Callback Time */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-[#111111] mb-1">
                    Preferred Callback Time
                  </label>
                  <select
                    suppressHydrationWarning
                    value={formData.callbackTime}
                    onChange={(e) => setFormData({ ...formData, callbackTime: e.target.value })}
                    className="w-full bg-white border border-[#D1D5DB] rounded-lg px-3.5 py-2.5 text-base sm:text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#2A60E4] focus:border-transparent cursor-pointer transition-all"
                  >
                    <option value="">Select a time</option>
                    <option value="Morning (9:00 AM – 12:00 PM)">Morning (9:00 AM – 12:00 PM)</option>
                    <option value="Afternoon (12:00 PM – 3:00 PM)">Afternoon (12:00 PM – 3:00 PM)</option>
                    <option value="Evening (3:00 PM – 6:00 PM)">Evening (3:00 PM – 6:00 PM)</option>
                  </select>
                </div>

                {/* Submit Button - Brand Blue Accent */}
                <div className="pt-2">
                  <button
                    suppressHydrationWarning
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-[#2A60E4] to-[#1D4ED8] hover:from-[#1E4DC0] hover:to-[#172554] text-white font-bold text-sm sm:text-base transition-all active:scale-[0.99] disabled:opacity-50 shadow-md shadow-[#2A60E4]/30 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{isSubmitting ? "Submitting Inquiry..." : hero.form.submitLabel}</span>
                  </button>
                </div>

                {/* Microcopy */}
                <p className="text-center text-xs text-[#666666] pt-1">
                  {hero.form.consent}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
