export type AnalyticsProvider = "plausible" | "ga4" | "none";

export const provider: AnalyticsProvider =
  process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ? "plausible" :
  process.env.NEXT_PUBLIC_GA4_ID ? "ga4" : "none";

export function Analytics() {
  if (provider === "plausible") {
    const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
    return (
      <script defer data-domain={domain!} src="https://plausible.io/js/script.js"></script>
    );
  }
  if (provider === "ga4") {
    const id = process.env.NEXT_PUBLIC_GA4_ID;
    return (
      <>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${id}`}></script>
        <script dangerouslySetInnerHTML={{__html:`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}');
        `}} />
      </>
    );
  }
  return null;
}
