import { profile } from "@/data/profile";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://fernandatollotti.com.br";

// Same GA4 property as the previous site, so visit history carries over.
export const gaId = process.env.NEXT_PUBLIC_GA_ID ?? "G-HME1HCRWZX";

export const ogImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: profile.seoTitle,
};
