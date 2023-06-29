import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';

class MyDocument extends Document {
  render() {

    return (
      <Html lang="en">
        <Head>
          <meta name="google-site-verification" content="rRKlKFWnlhU_kUGxe4fgENDoEIIcYSSc1DbdpRMn1kY" />
          <meta name="theme-color" content="#ff6341" />
          <Script
            id="Absence-banner"
            strategy="afterInteractive"
            onError={(e) => {
              console.error('Script failed to load', e);
            }}
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}`}
            crossOrigin="anonymous"
          />
        </Head>
        <body className="scrollbar scrollbar-thumb-color1 scrollbar-track-color2 overflow-x-hidden overflow-y-auto scrollbar-hide md:scrollbar-default">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument


