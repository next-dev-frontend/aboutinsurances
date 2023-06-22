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
          <meta property="twitter:image" content="/backgrounds/bg-insurances.jpeg" />
          <meta property="twitter:card" content="/logos/logo-96x96.png" />
          <meta property="twitter:title" content="Tire suas dúvidas sobre seguros e agências | Sobre Seguros" />
          <meta property="twitter:description" content="Insurance information and tips website. Before contracting any insurance service, visit our website and clarify all your doubts on the subject." />
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
