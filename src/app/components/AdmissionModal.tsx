"use client";

import React, { useState, useEffect } from "react";

export function AdmissionModal() {
  const [isOpen, setIsOpen] = useState(false);

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

      const handleOpenModal = () => setIsOpen(true);
      window.addEventListener("open-lead-modal", handleOpenModal);
      return () => window.removeEventListener("open-lead-modal", handleOpenModal);
    }
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen]);

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

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Admission Inquiry Form"
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/65 backdrop-blur-sm overflow-y-auto animate-fadeIn"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative w-full max-w-lg bg-white text-[#111111] rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl border border-[#E6E2D8] my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          suppressHydrationWarning
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 rounded-full bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#4B5563] hover:text-[#111111] flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close form"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="py-8 sm:py-10 text-center space-y-4 animate-fadeIn">
            <div className="w-14 h-14 rounded-full bg-[#00AD6F]/20 text-[#00AD6F] flex items-center justify-center mx-auto text-2xl font-bold">
              ✓
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#111111]">Inquiry Received</h3>
            <p className="text-xs sm:text-sm text-[#555555] max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-[#111111]">{formData.parentName}</strong>. Your inquiry for <strong className="text-[#111111]">{formData.studentName}</strong> ({formData.seekingClass}) has been received with reference <span className="font-mono text-[#2A60E4] font-bold">{leadId}</span>. Our Wagholi admissions coordinator will call you shortly.
            </p>
            <div className="pt-3">
              <button
                suppressHydrationWarning
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-6 py-2.5 rounded-full bg-[#2A60E4] text-white text-xs font-bold hover:bg-[#1E4DC0] transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-4 sm:mb-6 pr-8">
              <div className="text-[11px] font-mono font-bold text-[#2A60E4] uppercase tracking-wider mb-1">
                Mid-Term & AY 2026–27
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#111111]">
                Enquire for Admission
              </h2>
              <p className="text-xs sm:text-sm text-[#666666] mt-1">
                Mount Litera Zee School, Wagholi · Nagar Road, Pune
              </p>
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#555555] mt-2 pt-2 border-t border-[#F0ECE1]">
                <span>Prefer to call?</span>
                <a href="tel:+919175122265" className="font-bold text-[#2A60E4] hover:underline">
                  +91 9175122265
                </a>
                <span>/</span>
                <a href="tel:+919175122295" className="font-bold text-[#2A60E4] hover:underline">
                  +91 9175122295
                </a>
              </div>
            </div>

            <form suppressHydrationWarning onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
              {errorMessage && (
                <div className="p-2.5 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 font-medium">
                  {errorMessage}
                </div>
              )}

              {/* Field 1: Parent/Guardian Name* */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-[#111111] mb-1">
                  Parent/Guardian Name*
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Patil"
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  className="w-full bg-white border border-[#D1D5DB] rounded-lg px-3.5 py-2 text-base sm:text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#2A60E4] focus:border-transparent transition-all"
                />
              </div>

              {/* Field 2: Mobile Number* */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-[#111111] mb-1">
                  Mobile Number*
                </label>
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  placeholder="10-digit mobile number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white border border-[#D1D5DB] rounded-lg px-3.5 py-2 text-base sm:text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#2A60E4] focus:border-transparent transition-all"
                />
              </div>

              {/* Field 3: Email Address */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-[#111111] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="parent@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white border border-[#D1D5DB] rounded-lg px-3.5 py-2 text-base sm:text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#2A60E4] focus:border-transparent transition-all"
                />
              </div>

              {/* Field 4: Student Name* */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-[#111111] mb-1">
                  Student Name*
                </label>
                <input
                  type="text"
                  required
                  placeholder="Student full name"
                  value={formData.studentName}
                  onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                  className="w-full bg-white border border-[#D1D5DB] rounded-lg px-3.5 py-2 text-base sm:text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#2A60E4] focus:border-transparent transition-all"
                />
              </div>

              {/* Field 5: Current Class & Class Seeking (2 columns) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-[#111111] mb-1">
                    Current Class*
                  </label>
                  <select
                    required
                    value={formData.currentClass}
                    onChange={(e) => setFormData({ ...formData, currentClass: e.target.value })}
                    className="w-full bg-white border border-[#D1D5DB] rounded-lg px-3 py-2 text-base sm:text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#2A60E4] focus:border-transparent cursor-pointer transition-all"
                  >
                    <option value="">Select class</option>
                    {classOptions.map((cls) => (
                      <option key={cls} value={cls}>
                        {cls}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-[#111111] mb-1">
                    Seeking Admission For*
                  </label>
                  <select
                    required
                    value={formData.seekingClass}
                    onChange={(e) => setFormData({ ...formData, seekingClass: e.target.value })}
                    className="w-full bg-white border border-[#D1D5DB] rounded-lg px-3 py-2 text-base sm:text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#2A60E4] focus:border-transparent cursor-pointer transition-all"
                  >
                    <option value="">Select class</option>
                    {classOptions.map((cls) => (
                      <option key={cls} value={cls}>
                        {cls}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Field 6: Preferred Callback Time */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-[#111111] mb-1">
                  Preferred Callback Time
                </label>
                <select
                  value={formData.callbackTime}
                  onChange={(e) => setFormData({ ...formData, callbackTime: e.target.value })}
                  className="w-full bg-white border border-[#D1D5DB] rounded-lg px-3 py-2 text-base sm:text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#2A60E4] focus:border-transparent cursor-pointer transition-all"
                >
                  <option value="">Select a time</option>
                  <option value="Morning (9:00 AM – 12:00 PM)">Morning (9:00 AM – 12:00 PM)</option>
                  <option value="Afternoon (12:00 PM – 3:00 PM)">Afternoon (12:00 PM – 3:00 PM)</option>
                  <option value="Evening (3:00 PM – 6:00 PM)">Evening (3:00 PM – 6:00 PM)</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  suppressHydrationWarning
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#2A60E4] to-[#1D4ED8] hover:from-[#1E4DC0] hover:to-[#172554] text-white font-bold text-sm sm:text-base transition-all active:scale-[0.99] disabled:opacity-50 shadow-md shadow-[#2A60E4]/30 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{isSubmitting ? "Submitting Inquiry..." : "Book Campus Tour & Enquire"}</span>
                </button>
              </div>

              <p className="text-center text-[11px] text-[#666666] pt-0.5">
                By submitting, you agree to be contacted by Mount Litera Zee School Wagholi.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
