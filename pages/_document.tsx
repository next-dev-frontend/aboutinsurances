import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document'
import dynamic from 'next/dynamic'
const Analytics = dynamic(() => import('../components/Analytics'))

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/logos/logo-128x128.png" type="image/png" />
          <link rel="icon" href="/favicon.ico"></link>
          <meta name="theme-color" content="#ff6341" />
        </Head>
        <body className="scrollbar scrollbar-thumb-color2 scrollbar-track-color1 overflow-x-hidden overflow-y-auto scrollbar-hide md:scrollbar-default">
          <Main />
          <NextScript />
          <Analytics />
        </body>
      </Html>
    )
  }
}

export default MyDocument
