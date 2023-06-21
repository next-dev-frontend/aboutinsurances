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
          <meta property="twitter:image" content="/backgrounds/bg-insurances.webp" />
          <meta property="twitter:card" content="/cards/post-card4.webp"></meta>
          <meta property="twitter:title" content="Tire suas dúvidas sobre seguros e agências | Sobre Seguros"></meta>
          <meta property="twitter:description" content="Site de informações e dicas sobre seguros. Antes de contratar qualquer serviço de seguro, visite nosso site e esclareça todas as suas dúvidas sobre o assunto."></meta>
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
