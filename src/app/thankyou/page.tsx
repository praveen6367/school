import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { siteContent } from "../content";

export const metadata: Metadata = {
  title: "Thank You | Mount Litera Zee School, Wagholi-Pune",
  description: "Thank you for contacting Mount Litera Zee School Wagholi. Our admissions counselor will get in touch with you shortly.",
};

export default function ThankYouPage() {
  const { brand } = siteContent;

  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-433960391"
        strategy="afterInteractive"
      />
      <Script id="gtag-thankyou" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-433960391');
        `}
      </Script>

      <div className="w-full min-h-[75vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-md w-full bg-white rounded-3xl border border-[#E6E2D8] shadow-lg p-8 sm:p-10 text-center">
          {/* Success Checkmark */}
          <div className="w-16 h-16 rounded-full bg-[#107A48]/10 text-[#107A48] border-2 border-[#107A48]/25 flex items-center justify-center mx-auto mb-5">
            <svg
              className="w-8 h-8"
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

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#111111] mb-2">
            Thank You!
          </h1>

          <p className="text-sm sm:text-base text-[#555555] mb-6 leading-relaxed">
            Your admission enquiry has been successfully received. Our Wagholi admissions counselor will contact you shortly.
          </p>

          {/* School & Help Info */}
          <div className="bg-[#FBF9F5] border border-[#EFECE5] rounded-xl p-4 mb-6 text-xs sm:text-sm text-[#444444] text-left space-y-2">
            <div>
              <span className="font-semibold text-[#111111] block">Campus:</span>
              <span className="text-[#666666]">{brand.address}</span>
            </div>
            <div>
              <span className="font-semibold text-[#111111] block">Helpline:</span>
              <div className="flex gap-2 font-medium text-[#2A60E4]">
                <a href="tel:+919175122265" className="hover:underline">+91 9175122265</a>
                <span>/</span>
                <a href="tel:+919175122295" className="hover:underline">+91 9175122295</a>
              </div>
            </div>
          </div>

          {/* Return Home Button */}
          <Link
            href="/"
            className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-[#2A60E4] to-[#1D4ED8] hover:from-[#1E4DC0] hover:to-[#172554] text-white font-bold text-sm shadow-md shadow-[#2A60E4]/30 hover:scale-[1.02] active:scale-95 transition-all text-center"
          >
            ← Return to Home
          </Link>
        </div>
      </div>
    </>
  );
}
