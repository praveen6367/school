import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteContent } from "../content";

export function Footer() {
  const { brand, footer } = siteContent;

  return (
    <footer className="w-full bg-[#FBF9F5] border-t border-[#E6E2D8] text-[#111111]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Main Footer Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          {/* Left Column: Logo, Contact Info, & Nav Links */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-10">
            <div>
              {/* Brand Logo */}
              <Link href="/" className="inline-block group mb-6">
                <Image
                  src="/Logo.png"
                  alt="Mount Litera Zee School Wagholi-Pune"
                  width={215}
                  height={73}
                  className="h-12 sm:h-14 w-auto object-contain mix-blend-multiply"
                />
              </Link>

              <p className="text-xs sm:text-sm text-[#555555] max-w-xl mb-6">
                {footer.affiliation}
              </p>

              {/* Navigation Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs sm:text-sm pt-4 border-t border-[#E6E2D8]">
                <div>
                  <h4 className="font-semibold text-[#111111] mb-3 uppercase tracking-wider text-[11px]">
                    Academics & Grounds
                  </h4>
                  <ul className="space-y-2 text-[#555555]">
                    <li><a href="#academics" className="hover:text-[#2A60E4]">Curriculum & Labs</a></li>
                    <li><a href="#academics" className="hover:text-[#2A60E4]">15:1 Ratio Classrooms</a></li>
                    <li><a href="#campus" className="hover:text-[#2A60E4]">5-Acre Sports Turf</a></li>
                    <li><a href="#campus" className="hover:text-[#2A60E4]">Campus Life Gallery</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-[#111111] mb-3 uppercase tracking-wider text-[11px]">
                    Admissions 2026–27
                  </h4>
                  <ul className="space-y-2 text-[#555555]">
                    <li><a href="#lead-form" className="hover:text-[#2A60E4] font-semibold text-[#2A60E4]">Register Student Now</a></li>
                    <li><a href="#admission-steps" className="hover:text-[#2A60E4]">4-Step Admission Timeline</a></li>
                    <li><a href="#testimonials" className="hover:text-[#2A60E4]">Parent Reviews</a></li>
                    <li><a href="#faq" className="hover:text-[#2A60E4]">Frequently Asked Questions</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-[#111111] mb-3 uppercase tracking-wider text-[11px]">
                    Campus & Location
                  </h4>
                  <p className="text-xs text-[#555555] leading-relaxed mb-3">
                    {brand.address}
                  </p>
                  <p className="text-xs text-[#666666]">
                    <strong>Hours:</strong> Mon – Sat, 8:30 AM – 4:30 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Admissions Direct Contact Bar */}
            <div className="pt-6 border-t border-[#E6E2D8] flex flex-wrap items-center justify-between gap-4 text-xs text-[#666666]">
              <div>
                <span className="font-semibold text-[#111111]">Admissions Helpline:</span>{" "}
                <a href="tel:+919175988998" className="hover:text-[#2A60E4] font-medium">+91 91759 88998</a>
                <span className="mx-2">•</span>
                <a href="tel:+919175988999" className="hover:text-[#2A60E4] font-medium">+91 91759 88999</a>
              </div>

              <div>
                <span className="font-semibold text-[#111111]">Email:</span>{" "}
                <a href={`mailto:${brand.email}`} className="hover:text-[#2A60E4]">{brand.email}</a>
              </div>
            </div>
          </div>

          {/* Right Column: Campus Photography Card */}
          {/* TODO: replace with real school photography */}
          <div className="lg:col-span-4 relative aspect-[4/5] rounded-3xl overflow-hidden border border-[#E6E2D8] shadow-sm bg-[#EAE6DD]">
            <Image
              src="/images/sports.jpg"
              alt="Mount Litera Wagholi Sports Ground"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex items-end p-6">
              <div className="text-white">
                <p className="font-serif italic text-lg font-medium">“Great School. Great Future.”</p>
                <p className="text-xs text-white/80 mt-1">5-Acre Holistic Campus • Wagholi, Pune</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal + Copyright */}
        <div className="pt-8 border-t border-[#E6E2D8] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#777777]">
          <div>{footer.copyright}</div>
          <div className="flex flex-wrap items-center gap-5">
            {footer.legalLinks.map((item) => (
              <Link key={item.label} href={item.href} className="hover:text-[#111111]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
