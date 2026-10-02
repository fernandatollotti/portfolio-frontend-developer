import { profile } from "@/data/profile";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://fernandatollotti.com.br";

export const ogImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: profile.seoTitle,
};
