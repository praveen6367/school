import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { TopBanner } from "@/src/app/components/TopBanner";
import { Navbar } from "@/src/app/components/Navbar";
import { Footer } from "@/src/app/components/Footer";
import { StickyCtaBar } from "@/src/app/components/StickyCtaBar";

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
  title: "Mount Litera Zee School, Wagholi-Pune | Admissions Open 2026–27",
  description:
    "Admissions open for AY 2026–27 at Mount Litera Zee School, Wagholi-Pune. CBSE Affiliated K-12 foundation with holistic Litera Octave pedagogy, Olympic-grade sports, and 5-acre safe green campus.",
  openGraph: {
    title: "Mount Litera Zee School, Wagholi-Pune | Admissions Open 2026–27",
    description:
      "CBSE Affiliated K-12 school in Wagholi, Pune. Book a campus tour and secure your child's seat for AY 2026–27.",
    images: ["/images/hero.jpg"],
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
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCtaBar />
      </body>
    </html>
  );
}
