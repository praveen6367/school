// Content dictionary for Mount Litera Zee School, Wagholi-Pune
// Client-approved copy preserving pre-reference design tokens and component interfaces.

export interface NavItem {
  label: string;
  href: string;
}

export const siteContent = {
  brand: {
    logo: "/Logo.png",
    name: "Mount Litera",
    subBrand: "Zee School Wagholi-Pune",
    tagline: "Great School. Great Future.",
    claim: "CBSE Affiliation No. 1131377",
    campus: "Wagholi, Pune",
    phone: "+91 9175122265",
    alternatePhone: "+91 9175122295",
    email: "info@mountliterazeepune.com",
    website: "https://mountliterazeepune.com",
    websiteDisplay: "mountliterazeepune.com",
    address: "Gat No 886, Ganga Hillshire, Kesnand Rd.",
  },

  // 1. Top Utility Bar
  topUtilityBar: {
    text: "MID-TERM ADMISSIONS OPEN | ALL GRADES",
    helpline: "+91 9175122265",
    buttonLabel: "Register Now",
  },

  // 2. Navigation
  navigation: {
    links: [] as NavItem[],
    actions: {
      call: { label: "Call Us", phone: "+91 9175122265", href: "tel:+919175122265" },
      apply: { label: "Enquire Now", href: "#lead-form" },
    },
  },

  // 3. Hero Section (Word-for-word exact user copy from shared image)
  hero: {
    eyebrow: "MID-TERM ADMISSIONS OPEN | ALL GRADES",
    title: "A CBSE School in Wagholi Where Children Learn, Explore & Grow",
    subtitle:
      "At Mount Litera Zee School Pune, education goes beyond textbooks. Our approach combines academics with technology, creativity, sports and real-world learning to help children become confident, curious and capable individuals.",
    primaryBtn: { label: "Book a Campus Visit", href: "#lead-form" },
    secondaryBtn: { label: "Enquire for Admission", href: "#lead-form" },
    affiliationDetail: "CBSE Affiliated | Wagholi, Pune | Affiliation No. 1131377",
    form: {
      submitLabel: "Enquire Now",
      consent: "By submitting this form, you agree to be contacted by the school's admissions team.",
    },
  },

  // 4. "More Than a School" / Value Pillars
  moreThanSchool: {
    heading: "More Than a School. A Place to Grow.",
    subtitle:
      "At Mount Litera Zee School Wagholi, we look at learning differently. It’s not just about marks — it’s about curious minds, resilient character, and real capability.",
    cards: [
      {
        num: "01",
        title: "Strong Academic Foundation",
        description: "CBSE curriculum delivered with conceptual clarity, regular formative assessments, and individual learning attention.",
        image: "/images/middle/middle-school-admission-banner.jpeg",
        alt: "Teacher conducting interactive digital smart board lesson with students at Mount Litera Zee School Wagholi",
      },
      {
        num: "02",
        title: "Learning Beyond Textbooks",
        description: "Project-based learning, practical experiments, and real-world projects that connect classroom theory to everyday life.",
        image: "/images/about-us/litera-octave-pedagogy.jpg",
        alt: "Litera Octave child-centric experiential learning pedagogy framework",
      },
      {
        num: "03",
        title: "Future-Ready & Digital Skills",
        description: "Early exposure to computational thinking, modern technology tools, and independent research habits.",
        image: "/images/primary/primary-wing-showcase.jpeg",
        alt: "Students exploring robotics and programming concepts with teacher in the STEM innovation space",
      },
      {
        num: "04",
        title: "Holistic Development",
        description: "Equal emphasis on competitive sports, visual and performing arts, communication, and emotional resilience.",
        image: "/images/recent-activities/activity-childrens-day-celebration.jpeg",
        alt: "Students and faculty gathered on campus athletic turf celebrating school activities",
      },
    ],
  },

  // 5. Pedagogy Section
  pedagogy: {
    heading: "Helping Children Think Beyond the Textbook",
    tagline: "LITERA OCTAVE LEARNING METHODOLOGY",
    paragraph1:
      "At Mount Litera Zee School Wagholi, teaching isn't about memorising answers for the next test. Our proprietary Litera Octave pedagogy is designed around how young brains naturally absorb and apply knowledge — through inquiry, experimentation, and meaningful debate.",
    paragraph2:
      "Every classroom prioritises active discussion over passive listening. Students are encouraged to question assumptions, work collaboratively in teams, and build confident reasoning skills that stay with them through higher education and beyond.",
  },

  // 6. Future-Skills Section
  futureSkills: {
    heading: "Preparing Children for More Than the Next Exam",
    subtitle:
      "The world is evolving rapidly. Children need more than subject knowledge — they need tools to navigate technology, understand modern systems, and think independently.",
    cards: [
      {
        num: "01",
        title: "Technology & AI Exposure",
        description: "Understanding digital tools, basic algorithms, and ethical technology usage from an early age.",
        image: "/images/middle/middle-school-curriculum-wing.jpg",
        alt: "Middle school students engaged and confident in technology-enabled classroom",
      },
      {
        num: "02",
        title: "Robotics & Hands-On STEM",
        description: "Makerspace experiments and coding that turn abstract physics and math concepts into working physical models.",
        image: "/images/primary/primary-wing-showcase.jpeg",
        alt: "Students working on robotics models and coding in the makerspace laboratory",
      },
      {
        num: "03",
        title: "Financial Literacy",
        description: "Age-appropriate lessons in budgeting, saving, resource management, and understanding everyday economics.",
        image: "/images/pre-primary/pre-primary-learning-wing.jpg",
        alt: "Foundational experiential learning session fostering problem solving and analytical thinking",
      },
      {
        num: "04",
        title: "Digital Citizenship",
        description: "Guiding students to be responsible, critically aware, and safe digital creators and contributors.",
        image: "/images/secondary/secondary-asset-1.jpg",
        alt: "Students exploring creative digital arts and musical instruments in the media wing",
      },
    ],
  },

  // 7. Dark "Campus Spaces" Section
  campusSpaces: {
    heading: "A Space to Learn, Play & Create",
    subtitle: "Spread over 1,00,000 sq.ft., our campus in Wagholi is purposefully designed to give children room to move, think, collaborate, and compete.",
    statLine: "Spread over 1,00,000 sq.ft. Holistic Green Campus · Kesnand Road, Wagholi, Pune",
    zones: [
      {
        title: "Learning Spaces",
        description: "Spacious, well-ventilated smart classrooms with natural daylight and dedicated reading corners.",
        image: "/images/middle/middle-school-admission-banner.jpeg",
        alt: "Spacious, well-ventilated smart classroom with digital interactive board at Mount Litera Wagholi",
      },
      {
        title: "Exploration & Tech Spaces",
        description: "Full-scale composite science laboratories, high-speed computer suites, and STEM innovation zones.",
        image: "/images/primary/primary-wing-showcase.jpeg",
        alt: "Composite science and robotics innovation laboratory equipped for hands-on experimentation",
      },
      {
        title: "Sports & Play Spaces",
        description: "Regulation football turf, basketball court, skating rink, running track, and shaded pre-primary play areas.",
        image: "/images/secondary/secondary-senior-wing-lab.jpg",
        alt: "Regulation green sports turf and outdoor physical education grounds on Kesnand Road",
      },
      {
        title: "Arts & Creative Spaces",
        description: "Dedicated acoustic music studios, dance rooms, visual arts workshop spaces, and an open amphitheatre.",
        image: "/images/secondary/secondary-asset-1.jpg",
        alt: "Dedicated acoustic music studio and performing arts spaces for creative student expression",
      },
    ],
    image: "/images/about-us/campus-overview-aerial.jpeg",
    imageAlt: "Aerial view of Mount Litera Zee School campus spread over 1,00,000 sq.ft. in Wagholi, Pune",
  },

  // 8. "Beyond Academics" Section
  beyondAcademics: {
    heading: "Because Childhood Is About More Than Academics",
    subtitle: "Every child possesses unique sparks. We create the structured time, expert coaching, and supportive platform to discover them.",
    cards: [
      {
        num: "01",
        title: "Academic Foundation",
        description: "Clear concept-building with dedicated remedial support, continuous mentorship, and competitive exam guidance.",
        image: "/images/gallery/campus-life-moment-1.jpeg",
        alt: "Mount Litera Zee School Wagholi educators and mentors supporting holistic student development",
      },
      {
        num: "02",
        title: "Play-Based Development",
        description: "Motor-skill progression, sensory learning, and collaborative physical games in the foundational years.",
        image: "/images/secondary/secondary-senior-wing-lab.jpg",
        alt: "Physical education coach and students participating in team sports drills on the football turf",
      },
      {
        num: "03",
        title: "Creative Expression",
        description: "Visual arts, theatrical expression, choir, and instrumental music integrated seamlessly into weekly timetables.",
        image: "/images/secondary/secondary-asset-1.jpg",
        alt: "Music and performing arts classes fostering creative expression and rhythm",
      },
      {
        num: "04",
        title: "Exploration & Discovery",
        description: "Environmental clubs, quiz leagues, community service, and student-led annual exhibitions and fairs.",
        image: "/images/recent-activities/activity-childrens-day-celebration.jpeg",
        alt: "Children's Day celebration on campus grounds fostering camaraderie and school spirit",
      },
    ],
  },

  // 9. Light "Support" Section
  supportSection: {
    heading: "Every Child Deserves to Be Seen, Heard & Supported",
    subtitle: "School should be an environment where children feel secure, validated, and genuinely understood every single morning.",
    cards: [
      {
        title: "Experienced & Caring Educators",
        description: "Low student-teacher ratios ensuring every child's individual strengths, challenges, and pace are closely tracked.",
      },
      {
        title: "Student Support & Counselling",
        description: "Full-time on-campus child counsellors providing socio-emotional guidance, empathy building, and peer support.",
      },
      {
        title: "Parent Partnership",
        description: "Transparent communication through scheduled progress reviews, dedicated parent portals, and open dialogues.",
      },
      {
        title: "Safe & Nurturing Environment",
        description: "360° CCTV-monitored campus, security-vetted staff, full-time infirmary with certified nurse, and GPS-tracked bus fleet.",
      },
    ],
  },

  // 10. Differentiators Section
  differentiators: {
    heading: "What Makes the Learning Experience Different?",
    subtitle: "Six pillars that define daily life and long-term student outcomes at Mount Litera Zee School Wagholi.",
    cards: [
      {
        title: "CBSE Curriculum Rigour",
        description: "National curriculum mapped to NEP 2020 guidelines with a strong focus on conceptual clarity and board excellence.",
      },
      {
        title: "Litera Octave Pedagogy",
        description: "Proprietary child-centric learning framework developed by Zee Learn's academic research and child development teams.",
      },
      {
        title: "Future-Ready Skillsets",
        description: "Coding, AI fundamentals, critical thinking, public speaking, and practical problem-solving embedded early.",
      },
      {
        title: "Holistic Development",
        description: "Daily dedicated sports period, performing arts, and life skills given equal standing alongside academic coursework.",
      },
      {
        title: "Campus Spread Over 1,00,000 Sq.Ft.",
        description: "Unmatched open grounds, green flora, regulation sports turf, and modern laboratories located on Kesnand Road, Wagholi.",
      },
      {
        title: "Pan-India Network Legacy",
        description: "Part of the trusted Zee Learn network of 140+ Mount Litera schools educating over 1.5 lakh students nationwide.",
      },
    ],
  },

  // 11. Testimonials (Client placeholder copy)
  testimonials: {
    heading: "What Parents Say About Us",
    subtitle: "Real experiences from families whose children learn, play, and grow with us in Wagholi.",
    // TODO: client to supply real parent reviews
    items: [
      {
        quote:
          "The balance between academics and sports is exactly what we wanted for our son. He looks forward to school every single morning.",
        author: "Parent of Grade 4 Student",
        role: "Grade 4 · Wagholi Campus",
        // TODO: replace with real school photography
        image: "/images/avatar1.jpg",
      },
      {
        quote:
          "Teachers here truly know every child personally. We have seen remarkable growth in our daughter's reading confidence and spoken expression.",
        author: "Parent of Sr. KG Student",
        role: "Sr. KG · Wagholi Campus",
        // TODO: replace with real school photography
        image: "/images/avatar2.jpg",
      },
      {
        quote:
          "The transport system is punctual and safe with a female attendant on board every day. It gives working parents complete peace of mind.",
        author: "Parent of Grade 7 Student",
        role: "Grade 7 · Wagholi Campus",
        // TODO: replace with real school photography
        image: "/images/avatar3.jpg",
      },
    ],
  },

  // 12. "How Admission Works" Section
  commitments: {
    heading: "Looking for Mid-Term Admission? Here's How It Works.",
    subtitle: "A smooth, transparent 4-step admission journey designed to welcome your family seamlessly.",
    ctaButton: { label: "Check Admission Availability", href: "#lead-form" },
    items: [
      {
        num: "01",
        title: "Enquire",
        text: "Submit the online enquiry form on this page or call our admissions helpline directly.",
        image: "/images/admissions/admissions-hall-desk.jpg",
        alt: "Wagholi campus admissions enquiry reception desk for parent consultations",
      },
      {
        num: "02",
        title: "Speak to Us",
        text: "Our admissions counsellor answers your questions regarding grade availability, bus routes, and curriculum details.",
        image: "/images/middle/middle-school-curriculum-wing.jpg",
        alt: "Admissions coordinator counselling parents and reviewing grade placement",
      },
      {
        num: "03",
        title: "Visit the Campus",
        text: "Take a guided walkthrough of our smart classrooms, science labs, sports turf, and creative spaces with leadership.",
        image: "/images/admissions/campus-front-elevation.jpeg",
        alt: "Front gate entrance and main academic building during guided campus walkthrough",
      },
      {
        num: "04",
        title: "Complete Admission",
        text: "Submit previous academic records, finalize documentation, and receive class allocation and orientation schedule.",
        image: "/images/admissions/campus-building-facade.jpeg",
        alt: "Main campus administration wing for enrollment finalization and document submission",
      },
    ],
  },

  // Marquee Campus Gallery
  marqueeGallery: {
    heading: "Daily life on campus.",
    images: [
      "/images/gallery/campus-life-moment-1.jpeg",
      "/images/home/sports-ground-activities.jpg",
      "/images/gallery/cultural-fest-showcase.jpg",
      "/images/secondary/secondary-senior-wing-lab.jpg",
      "/images/recent-activities/activity-childrens-day-celebration.jpeg",
      "/images/gallery/campus-life-moment-2.jpg",
      "/images/about-us/campus-overview-aerial.jpeg",
      "/images/home/annual-celebration-ceremony.jpg",
    ],
  },

  // 13. Warm CTA Band
  cta: {
    title: "Looking for a School Right Now?",
    description:
      "Mid-term and academic year 2026–27 admissions are currently open across Nursery to Grade 10. Connect with our Wagholi campus team today.",
    primaryBtn: { label: "Enquire for Admission", href: "#lead-form" },
    secondaryBtn: { label: "Call: +91 9175122265", href: "tel:+919175122265" },
  },

  // 14. FAQ Accordion (Updated 6 client questions)
  faqs: [
    {
      question: "Are mid-term admissions currently available at Mount Litera Zee School Wagholi?",
      answer:
        "Yes, mid-term admissions are accepted subject to seat availability in respective grades (Nursery through Grade 10). We support smooth mid-year transitions for relocating families.",
    },
    {
      question: "Which grades are currently open for admission?",
      answer:
        "Admissions are open from Pre-Primary (Nursery, Jr. KG, Sr. KG) through Grade 10 for both mid-term intake and the upcoming academic year.",
    },
    {
      question: "What is the campus visit policy and when can we tour?",
      answer:
        "Campus visits are scheduled Monday through Saturday between 9:00 AM and 4:00 PM. We recommend submitting the enquiry form to reserve a designated coordinator for your visit.",
    },
    {
      question: "Is Mount Litera Zee School Wagholi affiliated with the CBSE board?",
      answer:
        "Yes, we are officially affiliated with the Central Board of Secondary Education (CBSE Affiliation No. 1130765, School Code: 30722), following the national NCERT curriculum.",
    },
    {
      question: "What is the step-by-step admission process?",
      answer:
        "The process is simple: (1) Submit the enquiry form on this page, (2) Attend a brief counselling session and campus walkthrough, (3) Submit previous academic records and birth certificate, (4) Confirm registration.",
    },
    {
      question: "How do I make an enquiry or speak to the admissions office directly?",
      answer:
        "You can fill out the enquiry form on this page, or call our direct admissions helpline at +91 9175122265 / +91 9175122295 from 8:30 AM to 5:00 PM.",
    },
  ],

  // 15. Footer / Final CTA
  footer: {
    closingTitle: "Could Mount Litera Zee School Be the Right Fit for Your Child?",
    closingSubtitle:
      "Schedule a campus visit to experience our vibrant learning spaces, meet our faculty, and discover how we help children grow.",
    visitButton: { label: "Book a Campus Visit", href: "#lead-form" },
    copyright: `© ${new Date().getFullYear()} Mount Litera Zee School, Wagholi-Pune.`,
    affiliation: "CBSE Affiliation No. 1130765 • School Code: 30722",
    legalLinks: [
      { label: "Main Website: mountliterazeepune.com", href: "https://mountliterazeepune.com" },
      { label: "Admissions Policy", href: "#admission-steps" },
      { label: "Curriculum Details", href: "#academics" },
      { label: "Mandatory Public Disclosure", href: "#faq" },
    ],
  },
};
