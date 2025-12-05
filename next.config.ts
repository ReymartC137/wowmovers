import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wowmover.com",
      },
    ],
  },
};

export default nextConfig;
