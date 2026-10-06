import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { profile } from "@/data/profile";
import { CookieConsent } from "@/components/CookieConsent";
import { siteUrl, ogImage } from "@/lib/site";
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
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: profile.seoTitle,
    description: profile.seoDescription,
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    apple: "/apple-touch-icon.png",
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
  const personId = `${siteUrl}/#person`;
  const person = {
    "@type": "Person",
    "@id": personId,
    name: profile.name,
    jobTitle: profile.role,
    description: profile.seoDescription,
    url: siteUrl,
    image: `${siteUrl}/images/avatar.webp`,
    email: profile.email,
    address: { "@type": "PostalAddress", addressCountry: "BR" },
    knowsAbout: [
      "Desenvolvimento Front-end",
      "Web Design",
      "Sites institucionais",
      "Landing pages",
      "SEO",
      "Acessibilidade web",
      "React",
      "Next.js",
      "WordPress",
    ],
    sameAs: profile.socials
      .filter((social) => social.href.startsWith("http"))
      .map((social) => social.href),
  };
  // WebSite.name is what Google uses as the site name shown above search results.
  const website = {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: profile.name,
    alternateName: new URL(siteUrl).hostname,
    inLanguage: "pt-BR",
    publisher: { "@id": personId },
  };
  const jsonLd = { "@context": "https://schema.org", "@graph": [website, person] };

  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <a href="#main-content" className="skip-link">
          Pular para o conteúdo principal
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <CookieConsent />
      </body>
    </html>
  );
}
