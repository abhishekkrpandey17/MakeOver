import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["randomuser.me"], // 👈 allow external image host
  },
};

export default nextConfig;
