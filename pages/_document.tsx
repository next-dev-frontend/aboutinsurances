import Script from 'next/script';
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {

    return (
      <Html lang="en">
        <Head>
          <link rel="manifest" href='/manifest.json' />
          <link rel="apple-touch-icon" type="image/png" href='/favicon.ico' />
          <link rel="icon" href='/logos/logo-144x144.png' />
          <meta name="theme-color" content="#ff6341" />
        </Head>
        <body className="scrollbar scrollbar-thumb-color1 scrollbar-track-color2 overflow-x-hidden overflow-y-auto scrollbar-hide md:scrollbar-default">
          <Main />
          <Script
            id="ga-tracking"
            strategy='afterInteractive'
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
            nonce={process.env.nonceScriptSrc}
          />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
