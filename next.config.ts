import type { NextConfig } from "next";

// Static export for Cloudflare Pages. Security headers live in public/_headers —
// next.config headers() is not supported with output: "export".
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
