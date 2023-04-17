import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/logos/logo-128x128.png" />
          <link rel="icon" href="/favicon.ico"></link>
          <meta name="theme-color" content="#ff6341" />
        </Head>
        <body className="scrollbar scrollbar-thumb-color2 scrollbar-track-color1 overflow-x-hidden overflow-y-auto scrollbar-hide md:scrollbar-default">
          <Main />
          <NextScript />
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MWPBQXC" height="0" width="0" style="display: none; visibility: hidden;" /> `,
            }}
          />
        </body>
      </Html>
    )
  }
}

export default MyDocument
