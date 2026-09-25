import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2592000, // 30 days
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/approach",
        destination: "/#academics",
        permanent: false,
      },
      {
        source: "/schools",
        destination: "/#campus",
        permanent: false,
      },
      {
        source: "/admissions",
        destination: "/#admission-steps",
        permanent: false,
      },
      {
        source: "/tuition",
        destination: "/#faq",
        permanent: false,
      },
      {
        source: "/thank-you",
        destination: "/thankyou",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
