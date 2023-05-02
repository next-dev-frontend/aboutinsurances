import Script from 'next/script';

const GoogleAnalyticsScript = () => {
  return (

    <Script
      id="ga-tracking"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `,
      }}
    />
 
  );
};

export default GoogleAnalyticsScript;