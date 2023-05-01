import React from 'react';
import Script from 'next/script';
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/logos/logo-128x128.png" />
          <link rel="icon" href="/favicon.ico"></link>
          <meta name="theme-color" content="#ff6341" />
                  </Head>
        <body className="scrollbar scrollbar-thumb-color2 scrollbar-track-color1 overflow-x-hidden overflow-y-auto scrollbar-hide md:scrollbar-default">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
