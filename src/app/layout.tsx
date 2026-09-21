import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { profile } from "@/data/profile";
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
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.name}`,
  },
  description: profile.heroDescription,
  keywords: [
    "Front-end Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Desenvolvimento Web",
    "Portfólio",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: `${profile.name} — ${profile.role}`,
    description: profile.heroDescription,
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.heroDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/favicon.ico",
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
    url: siteUrl,
    email: profile.email,
    address: { "@type": "PostalAddress", addressLocality: profile.location },
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
      </body>
    </html>
  );
}
