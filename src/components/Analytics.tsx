import Script from "next/script";

/**
 * Loads Google Analytics 4 only when NEXT_PUBLIC_GA_ID is set — no tracking
 * script ships until you configure a real measurement ID. See .env.example.
 *
 * Note: once enabled, this collects visitor analytics. If you're targeting
 * Brazilian traffic, review LGPD requirements (a privacy policy / cookie
 * notice) before going live — this component does not add a consent banner.
 */
export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  if (!gaId) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}
