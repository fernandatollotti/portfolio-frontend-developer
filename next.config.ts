import type { NextConfig } from "next";
import { basePath } from "./src/lib/basePath";

// Always a static export: deployed to Cloudflare Pages (and GitHub Pages, under
// a basePath). Security headers live in public/_headers, which Cloudflare Pages
// applies — next.config headers() is not supported with output: "export".
const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  images: { unoptimized: true },
};

export default nextConfig;
