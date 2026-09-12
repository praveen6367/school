import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { TopBanner } from "@/src/app/components/TopBanner";
import { Navbar } from "@/src/app/components/Navbar";
import { Footer } from "@/src/app/components/Footer";
import { StickyCtaBar } from "@/src/app/components/StickyCtaBar";
import { AdmissionModal } from "@/src/app/components/AdmissionModal";

const serifFont = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const sansFont = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mountliterazeepune.com"),
  title: "Mount Litera Zee School, Wagholi-Pune | Admissions Open 2026–27",
  description:
    "Admissions open for AY 2026–27 at Mount Litera Zee School, Wagholi-Pune. CBSE Affiliated K-12 foundation with holistic Litera Octave pedagogy, Olympic-grade sports, and campus spread over 1,00,000 sq.ft.",
  openGraph: {
    title: "Mount Litera Zee School, Wagholi-Pune | Admissions Open 2026–27",
    description:
      "CBSE Affiliated K-12 school in Wagholi, Pune. Book a campus tour and secure your child's seat for AY 2026–27.",
    images: ["/images/admissions/campus-building-facade.jpeg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#FBF9F5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${serifFont.variable} ${sansFont.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="min-h-screen bg-[#FBF9F5] text-[#111111] font-sans antialiased flex flex-col">
        <TopBanner />
        <Navbar />
        <main className="flex-1 pb-28 sm:pb-36 overflow-x-hidden">{children}</main>
        <Footer />
        <StickyCtaBar />
        <AdmissionModal />
      </body>
    </html>
  );
}
