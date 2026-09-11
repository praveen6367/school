<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Mount Litera Zee School, Wagholi-Pune — Admission Landing Page

This project is a high-converting admission landing page for **Mount Litera Zee School, Wagholi-Pune (AY 2026–27)**, built on the clean structure, type scale, hairline grid, and animation rhythm of Primer while preserving the existing Tailwind color system.

## 🟢 Safe to Edit (Content & Customization)

1. **`src/app/content.ts`**:
   - Primary content dictionary for the entire application.
   - Edit this file to update admission copy, CBSE affiliation notes, parent reviews, school metrics, and campus photography links.
2. **`src/app/components/`**:
   - `Navbar.tsx`: Mount Litera wordmark lockup ("Mount Litera" primary mark, "Zee School Wagholi-Pune" secondary line, "Great School. Great Future." tagline with cloned accent rule), navigation, and mobile menu.
   - `Hero.tsx`: V2 Split Layout — left column contains headline & trust metrics; right column houses the elevated 4-field Lead Form (Parent Name, Phone with +91, Class dropdown, Optional Email) with Wagholi campus reassurance copy under the button. On mobile screens, the form appears at the very top above the headline.
   - `ThreeCols.tsx`: Core value pillars (Litera Octave & CBSE Mastery, Olympic Sports & Arts, 360° Safety & Child-Centric Care).
   - `Commitments.tsx`: 4-Step Transparent Admission Process Timeline.
   - `Testimonials.tsx`: Real Wagholi/Pune parent stories with verified family badges and interactive quote carousel.
   - `GalleryMarquee.tsx`: Continuous auto-scrolling photo marquee of campus life.
   - `FaqSection.tsx`: Interactive accordion covering key parent queries (curriculum, age criteria, bus transport routes, ratios).
   - `CtaSection.tsx`: Pre-footer enrollment callout for AY 2026–27.
   - `Footer.tsx`: Campus directory, Nagar Road Wagholi address, admissions helplines (`+91 91759 88998`), and legal notices.
3. **`src/app/api/admission-inquiry/route.ts`**:
   - POST endpoint handling lead capture, validation, UTM parameter ingestion, and analytics event integration.
4. **`public/images/`**:
   - Local campus photography placeholders (marked with `// TODO: replace with real school photography`).

## 🔴 System & Config (Do Not Break)
- `src/app/globals.css`: Tailwind color system tokens (`--color-primer-bg`, `--color-primer-blue`, etc.) — preserved exactly as required.
- `src/app/layout.tsx`: Root HTML wrapper, Google Fonts (`Playfair_Display` & `Inter`), and Wagholi-Pune SEO metadata.
- `tsconfig.json`: TypeScript paths (`@/*` -> `./*`).

