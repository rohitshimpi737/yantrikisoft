import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        domains: ["readdy.ai", "th.bing.com"], // ✅ Add all external image domains in a single array
    },
     eslint: {
    // Ignore ESLint errors during builds so export works without lint errors blocking it
    ignoreDuringBuilds: true,
  },
    // output: "export",
};

export default nextConfig;
