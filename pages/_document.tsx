import React from 'react';
import Script from 'next/script';
import Document, { Html, Head, Main, NextScript } from 'next/document'
const nonceScriptSrc = process.env.nonceScriptSrc;

class MyDocument extends Document {

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="manifest" href='/manifest.json' />
          <link rel="apple-touch-icon" type="image/png" href='/favicon.ico' />
          <link rel="icon" href='/logos/logo-144x144.png' />
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
