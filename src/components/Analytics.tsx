import Script from "next/script";

/**
 * Loads tracking only when the corresponding env var is set — no script ships
 * until configured. See .env.example.
 *
 * Two options, pick one:
 * - NEXT_PUBLIC_GTM_ID: Google Tag Manager container. Recommended if you'll
 *   manage GA4, Meta Pixel, conversion tags etc. without touching code again.
 * - NEXT_PUBLIC_GA_ID: Google Analytics 4 loaded directly (gtag.js), simpler
 *   if GTM is more than you need. Ignored if NEXT_PUBLIC_GTM_ID is also set —
 *   configure GA4 as a tag inside GTM instead, to avoid double-counting.
 *
 * Note: once enabled, this collects visitor analytics. If you're targeting
 * Brazilian traffic, review LGPD requirements (a privacy policy / cookie
 * notice) before going live — this component does not add a consent banner.
 */
export function Analytics() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <>
      {gtmId && (
        <>
          <Script id="gtm-init" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="Google Tag Manager"
            />
          </noscript>
        </>
      )}

      {gaId && !gtmId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`}
          </Script>
        </>
      )}
    </>
  );
}
