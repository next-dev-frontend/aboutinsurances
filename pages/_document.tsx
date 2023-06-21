import Script from 'next/script';
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {

    return (
      <Html lang="en">
        <Head>
          <meta name="google-site-verification" content="rRKlKFWnlhU_kUGxe4fgENDoEIIcYSSc1DbdpRMn1kY" />
          <link rel="manifest" href='/manifest.json' />
          <link rel="apple-touch-icon" type="image/png" href='/favicon.ico' />
          <link rel="icon" href='/logos/logo-144x144.png' />
          <meta name="theme-color" content="#ff6341" />
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
