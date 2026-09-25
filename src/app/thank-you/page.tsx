"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { siteContent } from "../content";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const leadId = searchParams.get("leadId") || "";
  const name = searchParams.get("name") || "";
  const { brand } = siteContent;

  return (
    <div className="w-full min-h-[75vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <div className="max-w-2xl w-full bg-white rounded-3xl border border-[#E6E2D8] shadow-xl p-8 sm:p-12 text-center">
        {/* Animated Success Checkmark Icon */}
        <div className="w-20 h-20 rounded-full bg-[#107A48]/10 text-[#107A48] border-2 border-[#107A48]/30 flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Eyebrow */}
        <div className="inline-block bg-[#107A48]/10 text-[#107A48] border border-[#107A48]/25 text-xs font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full mb-4">
          Admission Enquiry Received
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-4xl font-serif font-bold text-[#111111] mb-3">
          Thank You{name ? `, ${name}` : ""}!
        </h1>

        <p className="text-base sm:text-lg text-[#555555] mb-6 leading-relaxed">
          Your admission inquiry for{" "}
          <strong className="text-[#111111] font-semibold">
            Mount Litera Zee School, Wagholi
          </strong>{" "}
          has been successfully submitted.
        </p>

        {/* Reference ID card if present */}
        {leadId && (
          <div className="bg-[#F8F7F3] border border-[#E8E4DA] rounded-xl py-3 px-5 inline-block mb-6">
            <span className="text-xs text-[#777777] uppercase tracking-wider block font-medium">
              Inquiry Reference ID
            </span>
            <span className="font-mono text-base sm:text-lg font-bold text-[#2A60E4]">
              {leadId}
            </span>
          </div>
        )}

        {/* Next Steps Box */}
        <div className="bg-[#FBF9F5] border border-[#EFECE5] rounded-2xl p-6 text-left mb-8 space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#111111]">
            What Happens Next?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-[#444444]">
            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-[#2A60E4] text-white flex-shrink-0 flex items-center justify-center text-[11px] font-bold mt-0.5">
                1
              </span>
              <span>
                <strong className="text-[#111111] block">Counsellor Call</strong>
                Our Wagholi admissions team will call you within 24 hours.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-[#2A60E4] text-white flex-shrink-0 flex items-center justify-center text-[11px] font-bold mt-0.5">
                2
              </span>
              <span>
                <strong className="text-[#111111] block">Campus Tour</strong>
                Schedule a guided walkthrough of our classrooms & sports turf.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-[#2A60E4] text-white flex-shrink-0 flex items-center justify-center text-[11px] font-bold mt-0.5">
                3
              </span>
              <span>
                <strong className="text-[#111111] block">Seat Confirmation</strong>
                Complete simple document verification to confirm admission.
              </span>
            </div>
          </div>
        </div>

        {/* Campus & Helpline Info */}
        <div className="border-t border-[#EFECE5] pt-6 mb-8 text-xs sm:text-sm text-[#666666] space-y-2">
          <p className="font-medium text-[#333333]">
            Campus Address:{" "}
            <span className="text-[#111111] font-semibold">{brand.address}</span>
          </p>
          <p>
            Need immediate assistance? Call Admissions Desk:{" "}
            <a
              href="tel:+919175122265"
              className="text-[#2A60E4] font-bold hover:underline"
            >
              +91 9175122265
            </a>{" "}
            /{" "}
            <a
              href="tel:+919175122295"
              className="text-[#2A60E4] font-bold hover:underline"
            >
              +91 9175122295
            </a>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-[#2A60E4] to-[#1D4ED8] hover:from-[#1E4DC0] hover:to-[#172554] text-white font-bold text-sm shadow-md shadow-[#2A60E4]/30 hover:scale-105 active:scale-95 transition-all text-center"
          >
            ← Return to Home Page
          </Link>
          <a
            href="tel:+919175122265"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-[#111111] text-[#111111] hover:bg-black/5 font-bold text-sm transition-all text-center"
          >
            Call Admissions Helpline
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[70vh] flex items-center justify-center">
          <p className="text-sm text-[#666666]">Loading...</p>
        </div>
      }
    >
      <ThankYouContent />
    </Suspense>
  );
}
