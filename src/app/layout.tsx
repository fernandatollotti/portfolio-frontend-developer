import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { profile } from "@/data/profile";
import { Analytics } from "@/components/Analytics";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: profile.seoTitle,
    template: `%s — ${profile.name}`,
  },
  description: profile.seoDescription,
  keywords: profile.keywords,
  authors: [{ name: profile.name }],
  creator: profile.name,
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: profile.seoTitle,
    description: profile.seoDescription,
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: profile.seoTitle,
    description: profile.seoDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0d11",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    description: profile.seoDescription,
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    email: profile.email,
    address: { "@type": "PostalAddress", addressLocality: profile.location },
    knowsAbout: ["React", "Next.js", "TypeScript", "WordPress", "Desenvolvimento Front-end"],
    sameAs: profile.socials
      .filter((social) => social.href.startsWith("http"))
      .map((social) => social.href),
  };

  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full">
        <a href="#main-content" className="skip-link">
          Pular para o conteúdo principal
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Analytics />
      </body>
    </html>
  );
}
