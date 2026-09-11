// Content dictionary for Mount Litera Zee School, Wagholi-Pune
// Human-crafted, concrete copy without generic marketing filler.

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const siteContent = {
  brand: {
    logo: "/Logo.png",
    name: "Mount Litera",
    subBrand: "Zee School Wagholi-Pune",
    tagline: "Great School. Great Future.",
    claim: "CBSE Affiliation No. 1130765",
    campus: "Wagholi, Pune",
    phone: "+91 91759 88998",
    alternatePhone: "+91 91759 88999",
    email: "admissions.wagholi@mountlitera.com",
    address: "Gat No. 921/922, Nagar Road, Wagholi, Pune 412207",
  },

  navigation: {
    links: [
      { label: "Academics", href: "#academics" },
      { label: "Campus & Grounds", href: "#campus" },
      { label: "Admission Steps", href: "#admission-steps" },
      { label: "Parent Reviews", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
    ] as NavItem[],
    actions: {
      call: { label: "+91 91759 88998", href: "tel:+919175988998" },
      apply: { label: "Get Admission Now", href: "#lead-form" },
    },
  },

  hero: {
    eyebrow: "Admissions Open for AY 2026–27 • Nursery to Grade 10",
    title: "Enroll Your Child at Mount Litera Zee School, Wagholi.",
    subtitle: "Give your child a great future with CBSE academic excellence, 15-student capped classrooms, and daily outdoor sports on our 5-acre Nagar Road campus.",
  },

  strongBeginning: {
    heading: "What we focus on.",
    columns: [
      {
        title: "Reading, math, and science taught through practical work.",
        description: "Daily laboratory time from Grade 3 and direct phonics instruction in the early years.",
        // TODO: replace with real school photography
        image: "/images/lab.jpg",
      },
      {
        title: "Sports every day, not once a week.",
        description: "Two hours on our grounds with coached football, skating, and athletics.",
        // TODO: replace with real school photography
        image: "/images/sports.jpg",
      },
      {
        title: "Small rooms where teachers know every family.",
        description: "Class sizes capped at 15 students so no child gets lost in the back row.",
        // TODO: replace with real school photography
        image: "/images/library.jpg",
      },
    ],
  },

  commitments: {
    heading: "How admission works.",
    // TODO: replace with real school photography
    topImage: "/images/arts.jpg",
    items: [
      {
        num: "01",
        title: "Submit the registration form.",
        text: "Leave your details on this page so our admissions desk can reach you.",
        // TODO: replace with real school photography
        image: "/images/hero.jpg",
      },
      {
        num: "02",
        title: "Walk the campus.",
        text: "Tour the classrooms, meet the grade coordinator, and see the grounds.",
        // TODO: replace with real school photography
        image: "/images/library.jpg",
      },
      {
        num: "03",
        title: "Submit school records.",
        text: "Bring previous report cards, transfer certificate, and birth record.",
        // TODO: replace with real school photography
        image: "/images/lab.jpg",
      },
      {
        num: "04",
        title: "Confirm enrollment.",
        text: "Receive class allocation and the schedule for the new school term.",
        // TODO: replace with real school photography
        image: "/images/sports.jpg",
      },
    ],
  },

  testimonials: {
    heading: "Notes from families currently here.",
    items: [
      {
        quote:
          "Aaryav joined in Grade 2 after moving from Bangalore. What stood out immediately was that his class has only 14 students, so his teacher actually noticed where he was struggling in math within the first week.",
        author: "Dr. Ananya Deshmukh",
        role: "Parent of Aaryav, Grade 4 • Wagholi",
        // TODO: replace with real school photography
        image: "/images/avatar1.jpg",
      },
      {
        quote:
          "We live in Kharadi and were worried about the daily commute. The bus picks Anvi up right at our society gate with a female attendant on board every single morning.",
        author: "Vikramaditya Joshi",
        role: "Parent of Anvi, Sr. KG • Kharadi",
        // TODO: replace with real school photography
        image: "/images/avatar2.jpg",
      },
      {
        quote:
          "Our daughter plays basketball almost every afternoon after classes finish. Having proper grounds on campus makes a real difference compared to other schools nearby.",
        author: "Capt. Rajesh Nair",
        role: "Parent of Devika, Grade 7 • Viman Nagar",
        // TODO: replace with real school photography
        image: "/images/avatar3.jpg",
      },
    ],
  },

  marqueeGallery: {
    heading: "Daily life on campus.",
    // TODO: replace with real school photography
    images: [
      "/images/hero.jpg",
      "/images/lab.jpg",
      "/images/sports.jpg",
      "/images/arts.jpg",
      "/images/library.jpg",
      "/images/hero.jpg",
      "/images/sports.jpg",
    ],
  },

  faqs: [
    {
      question: "What are the age cutoffs for Pre-Primary and Grade 1 for 2026–27?",
      answer:
        "Nursery requires children to be 3 years old by December 31, 2026. Jr. KG is 4 years, Sr. KG is 5 years, and Grade 1 is 6 years, following Maharashtra state guidelines.",
    },
    {
      question: "Which areas does the school bus fleet cover?",
      answer:
        "Buses run dedicated morning and afternoon routes through Wagholi, Kharadi, Viman Nagar, Keshavnagar, Mundhwa, and Dhanori. Every bus carries a female attendant and GPS tracking accessible through the parent app.",
    },
    {
      question: "What board syllabus is taught?",
      answer:
        "We follow the CBSE national curriculum (Affiliation No. 1130765) from Grade 1 through the Grade 10 board examinations.",
    },
    {
      question: "How is tuition billed?",
      answer:
        "Fees are billed in quarterly installments across the academic term, covering laboratory materials, library books, and sports coaching without surprise mid-term fees.",
    },
  ],

  cta: {
    title: "Visit the campus this Saturday.",
    description: "Tours run between 9:00 AM and 1:00 PM. Fill out the registration form to hold a slot.",
    primaryBtn: { label: "Go to Registration", href: "#lead-form" },
    secondaryBtn: { label: "Call Admissions: +91 91759 88998", href: "tel:+919175988998" },
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Mount Litera Zee School, Wagholi-Pune.`,
    affiliation: "CBSE Affiliation No. 1130765 • School Code: 30722",
    legalLinks: [
      { label: "Admissions Policy", href: "#admission-steps" },
      { label: "Curriculum Details", href: "#academics" },
      { label: "Mandatory Public Disclosure", href: "#faq" },
    ],
  },
};
