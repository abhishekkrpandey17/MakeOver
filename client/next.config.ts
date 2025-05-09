import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["randomuser.me", "svgrepo.com"], // 👈 allow external image host
  },
};

export default nextConfig;
