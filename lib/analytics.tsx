// lib/analytics.tsx
import Script from "next/script";

export type AnalyticsProvider = "plausible" | "ga4" | "none";

export const provider: AnalyticsProvider =
  process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ? "plausible" :
  process.env.NEXT_PUBLIC_GA4_ID ? "ga4" : "none";

export function Analytics() {
  if (provider === "plausible") {
    const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN!;
    return (
      <Script
        src="https://plausible.io/js/script.js"
        data-domain={domain}
        strategy="afterInteractive"
      />
    );
  }

  if (provider === "ga4") {
    const id = process.env.NEXT_PUBLIC_GA4_ID!;
    return (
      <>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${id}');`}
        </Script>
      </>
    );
  }

  return null;
}
