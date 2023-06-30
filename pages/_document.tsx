import Document, { Html, Head, Main, NextScript } from 'next/document'
import AdSense from "../components/AdSense";

class MyDocument extends Document {
  render() {

    return (
      <Html lang="en">
        <Head>
          <meta name="google-site-verification" content="rRKlKFWnlhU_kUGxe4fgENDoEIIcYSSc1DbdpRMn1kY" />
          <meta name="theme-color" content="#ff6341" />
          <script
            nonce={process.env.nonceScriptSrc}
            data-ad-client="ca-pub-4253472436511726"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>
        </Head>
        <body className="scrollbar scrollbar-thumb-color1 scrollbar-track-color2 overflow-x-hidden overflow-y-auto scrollbar-hide md:scrollbar-default">
          <AdSense adSlot="1234567890" />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument


