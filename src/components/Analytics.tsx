import Script from "next/script";
import { gaId } from "@/lib/site";

/**
 * GA4 (gtag.js) by default, or Google Tag Manager if NEXT_PUBLIC_GTM_ID is set
 * (GA4 is then skipped — configure it as a tag inside GTM to avoid double-counting).
 *
 * Rendered by src/components/CookieConsent.tsx only after the visitor accepts
 * the cookie banner — don't render this directly elsewhere, or tracking would
 * run without consent (LGPD requirement for Brazilian traffic).
 */
export function Analytics() {
  // Keeps local development visits out of the real analytics property.
  if (process.env.NODE_ENV !== "production") return null;

  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

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
