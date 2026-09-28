import type { NextConfig } from "next";
import { basePath } from "./src/lib/basePath";

// Set only for the GitHub Pages build (see .github/workflows/deploy.yml) — GitHub
// Pages is a static host, so it needs `output: "export"` and can't serve custom
// response headers, unlike a normal Next.js server deployment.
const isStaticExport = basePath !== "";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const nextConfig: NextConfig = {
  basePath: basePath || undefined,
  images: { unoptimized: true },
  ...(isStaticExport
    ? { output: "export" as const }
    : {
        async headers() {
          return [
            {
              source: "/:path*",
              headers: securityHeaders,
            },
          ];
        },
      }),
};

export default nextConfig;
