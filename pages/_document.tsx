import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/logos/logo-128x128.png" />
          <link rel="icon" href="/favicon.ico"></link>
          <meta name="theme-color" content="#008033" />
        </Head>
        <body className='scrollbar scrollbar-thumb-light-green scrollbar-track-dark-green overflow-x-hidden overflow-y-auto scrollbar-hide md:scrollbar-default'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
