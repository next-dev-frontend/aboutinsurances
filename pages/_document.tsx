import React from 'react';
import Script from 'next/script';
import Document, { Html, Head, Main, NextScript } from 'next/document'
const nonceScriptSrc = process.env.nonceScriptSrc;
const nonceStyleSrc = process.env.nonceStyleSrc;

class MyDocument extends Document {

  render() {

    const isProduction = process.env.NODE_ENV === "production";
    const cssFileUrl = isProduction ? "https://aboutinsurances.vercel.app/styles/globals.css" : "http://localhost:3000/styles/globals.css";
    const manifestUrl = isProduction ? "https://aboutinsurances.vercel.app/manifest.json" : "http://localhost:3000/manifest.json";
    const logoAppleUrl = isProduction ? "https://aboutinsurances.vercel.app/logos/logo-144x144.png" : "http://localhost:3000/logos/logo-144x144.png";
    const faviconUrl = isProduction ? "https://aboutinsurances.vercel.app/favicon.ico" : "http://localhost:3000/favicon.ico";

    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" nonce={nonceStyleSrc} href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" />
          <link rel="stylesheet" nonce={nonceStyleSrc} href={cssFileUrl} type='text/html' />
          <link rel="manifest" nonce={nonceStyleSrc} href={manifestUrl} />
          <link rel="apple-touch-icon" nonce={nonceStyleSrc} href={logoAppleUrl} type="image/png" />
          <link rel="icon" nonce={nonceStyleSrc} href={faviconUrl} />
          <meta name="theme-color" content="#ff6341" />
          <Script
            id="ga-tracking"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
                  cookie_flags: 'SameSite=None;Secure',
                  page_path: window.location.pathname,
                });
              `,
            }}
            nonce={nonceScriptSrc}
          />
        </Head>
        <body className="scrollbar scrollbar-thumb-[#ff6341] scrollbar-track-[#142039] overflow-x-hidden overflow-y-auto scrollbar-hide md:scrollbar-default">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
