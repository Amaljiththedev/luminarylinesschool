import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"], // Add other domains as needed
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
