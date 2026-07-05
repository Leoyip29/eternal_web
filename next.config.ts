import type { NextConfig } from "next";

const apiBaseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8000/api";
const apiOrigin = new URL(apiBaseUrl).origin;

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL(`${apiOrigin}/**`)],
  },
};

export default nextConfig;
