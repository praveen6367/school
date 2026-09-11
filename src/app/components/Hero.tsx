"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteContent } from "../content";

export function Hero() {
  const { hero } = siteContent;

  const [formData, setFormData] = useState({
    studentName: "",
    grade: "Nursery",
    parentName: "",
    phone: "",
    email: "",
    address: "",
    residesNearby: "yes",
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

  return (
    <section className="relative w-full border-b border-[#E6E2D8] bg-[#FBF9F5] py-10 lg:py-16 overflow-hidden">
      {/* Ambient Autoplay Background Video with Directional Light Overlay */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center opacity-70"
        >
          <source src="/herovideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#FBF9F5]/90 via-[#FBF9F5]/50 to-[#FBF9F5]/20" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/*
          Split Layout:
          Mobile: Form is explicitly first (order-1), Headline is second (order-2)
          Desktop: Headline on left (lg:order-1), Form on right (lg:order-2)
        */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-16">
          {/* Left Column (Desktop) / Below Form (Mobile): Compelling Admissions Headline */}
          <div className="w-full lg:w-5/12 pt-2 lg:pt-8 text-left order-2 lg:order-1">
            <div className="text-xs font-mono uppercase tracking-widest text-[#555555] font-semibold mb-4">
              {hero.eyebrow}
            </div>

            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#111111] leading-[1.08] tracking-tight mb-6">
              {hero.title}
            </h1>

            <p className="text-lg sm:text-xl text-[#555555] font-normal leading-relaxed">
              {hero.subtitle}
            </p>
          </div>

          {/* Right Column (Desktop) / Top (Mobile): The Dark Registration Card */}
          <div
            id="lead-form"
            className="scroll-mt-28 w-full lg:w-7/12 max-w-2xl bg-[#111111] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-9 shadow-2xl border border-[#222222] order-1 lg:order-2"
          >
            {/* Header inside card */}
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                Student Registration
              </h2>
              <p className="text-xs sm:text-sm text-[#AAAAAA] mt-1.5 font-normal">
                Join the Mount Litera Zee School family for AY 2026–27. Please fill in your details below.
              </p>
            </div>

            {submitted ? (
              <div className="py-10 text-center space-y-4 animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-[#00AD6F]/20 text-[#00AD6F] flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">Application Received</h3>
                <p className="text-sm text-[#CCCCCC] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.parentName}</strong>. Your registration for <strong className="text-white">{formData.studentName}</strong> ({formData.grade}) has been received with reference <span className="font-mono text-[#2A60E4] font-semibold">{leadId}</span>. Our Wagholi admissions coordinator will call you shortly.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        studentName: "",
                        grade: "Nursery",
                        parentName: "",
                        phone: "",
                        email: "",
                        address: "",
                        residesNearby: "yes",
                      });
                    }}
                    className="text-xs text-[#2A60E4] hover:underline"
                  >
                    Submit another application
                  </button>
                </div>
              </div>
            ) : (
              <form suppressHydrationWarning onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {errorMessage && (
                  <div className="p-3 rounded-lg bg-red-900/50 border border-red-500/50 text-xs text-red-200">
                    {errorMessage}
                  </div>
                )}

                {/* Row 1: Student Name + Class Applying For (Two columns) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-white font-semibold text-xs sm:text-[13px] mb-1.5">
                      Student Name *
                    </label>
                    <input
                      suppressHydrationWarning
                      type="text"
                      required
                      placeholder="Enter student's full name"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      className="w-full bg-white text-[#111111] placeholder:text-[#888888] px-3.5 py-2.5 sm:py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2A60E4]"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold text-xs sm:text-[13px] mb-1.5">
                      Class Applying For *
                    </label>
                    <select
                      suppressHydrationWarning
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      className="w-full bg-white text-[#111111] px-3.5 py-2.5 sm:py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2A60E4] cursor-pointer"
                    >
                      <option value="Nursery">Nursery</option>
                      <option value="Jr. KG">Jr. KG</option>
                      <option value="Sr. KG">Sr. KG</option>
                      <option value="Grade 1">Grade 1</option>
                      <option value="Grade 2">Grade 2</option>
                      <option value="Grade 3">Grade 3</option>
                      <option value="Grade 4">Grade 4</option>
                      <option value="Grade 5">Grade 5</option>
                      <option value="Grade 6">Grade 6</option>
                      <option value="Grade 7">Grade 7</option>
                      <option value="Grade 8">Grade 8</option>
                      <option value="Grade 9">Grade 9</option>
                      <option value="Grade 10">Grade 10</option>
                    </select>
                  </div>
                </div>

                {/* Row 2: Parent / Guardian Name (Full width) */}
                <div>
                  <label className="block text-white font-semibold text-xs sm:text-[13px] mb-1.5">
                    Parent / Guardian Name *
                  </label>
                  <input
                    suppressHydrationWarning
                    type="text"
                    required
                    placeholder="Enter parent or guardian's full name"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full bg-white text-[#111111] placeholder:text-[#888888] px-3.5 py-2.5 sm:py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2A60E4]"
                  />
                </div>

                {/* Row 3: Phone Number + Email Address (Two columns) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-white font-semibold text-xs sm:text-[13px] mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      suppressHydrationWarning
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      pattern="[0-9]{10}"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white text-[#111111] placeholder:text-[#888888] px-3.5 py-2.5 sm:py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2A60E4]"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold text-xs sm:text-[13px] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      suppressHydrationWarning
                      type="email"
                      required
                      placeholder="parent@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white text-[#111111] placeholder:text-[#888888] px-3.5 py-2.5 sm:py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2A60E4]"
                    />
                  </div>
                </div>

                {/* Row 4: Residential Address (Optional, full width textarea) */}
                <div>
                  <label className="block text-white font-semibold text-xs sm:text-[13px] mb-1.5">
                    Residential Address <span className="text-[#888888] font-normal text-xs">(Optional)</span>
                  </label>
                  <textarea
                    suppressHydrationWarning
                    rows={2}
                    placeholder="Society, street name, or area in Pune"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-white text-[#111111] placeholder:text-[#888888] px-3.5 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2A60E4]"
                  />
                </div>

                {/* Row 5: Wagholi location Yes / No radio */}
                <div className="pt-1">
                  <span className="block text-white font-semibold text-xs sm:text-[13px] mb-2">
                    Do you reside in Wagholi or nearby (Kharadi, Viman Nagar, Keshavnagar)?
                  </span>
                  <div className="flex items-center gap-6 text-sm text-white">
                    <label className="inline-flex items-center gap-2 cursor-pointer">
                      <input
                        suppressHydrationWarning
                        type="radio"
                        name="residesNearby"
                        value="yes"
                        checked={formData.residesNearby === "yes"}
                        onChange={() => setFormData({ ...formData, residesNearby: "yes" })}
                        className="accent-[#2A60E4] w-4 h-4 cursor-pointer"
                      />
                      <span>Yes</span>
                    </label>

                    <label className="inline-flex items-center gap-2 cursor-pointer">
                      <input
                        suppressHydrationWarning
                        type="radio"
                        name="residesNearby"
                        value="no"
                        checked={formData.residesNearby === "no"}
                        onChange={() => setFormData({ ...formData, residesNearby: "no" })}
                        className="accent-[#2A60E4] w-4 h-4 cursor-pointer"
                      />
                      <span>No</span>
                    </label>
                  </div>
                </div>

                {/* Primary Submit Button */}
                <div className="pt-2">
                  <button
                    suppressHydrationWarning
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-[#2A60E4] to-[#1D4ED8] hover:from-[#1E4DC0] hover:to-[#172554] text-white font-bold text-base transition-all active:scale-[0.99] disabled:opacity-50 shadow-lg shadow-[#2A60E4]/30 flex items-center justify-center gap-2 group"
                  >
                    <span>{isSubmitting ? "Submitting Application..." : "⚡ Get Admission Now — Register Child"}</span>
                    {!isSubmitting && (
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    )}
                  </button>
                </div>

                {/* Footer Microcopy */}
                <div className="text-center text-xs text-[#888888] pt-1">
                  By submitting this form, you agree to our{" "}
                  <a href="#faq" className="underline text-white hover:text-[#2A60E4]">
                    Terms & Admission Policy
                  </a>{" "}
                  and{" "}
                  <a href="#faq" className="underline text-white hover:text-[#2A60E4]">
                    Privacy Notice
                  </a>
                  . Wagholi campus desk will reach out via call/WhatsApp.
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
