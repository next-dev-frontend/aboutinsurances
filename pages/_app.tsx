import React from 'react';
import { useEffect } from 'react';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import Script from "next/script";
import SEO from '../next-seo-config';
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import dynamic from 'next/dynamic'
const NavBar = dynamic(() => import('../components/Navbar'))
const BgParallax1 = dynamic(() => import('../components/BgParallax1'))
const BgParallax2 = dynamic(() => import('../components/BgParallax2'), {
  loading: () => <p>Loading BgParallax2...</p>,
})
const SideBar = dynamic(() => import('../components/SideBar'), {
  loading: () => <p>Loading SideBar...</p>,
})
const Footer = dynamic(() => import('../components/Footer'), {
  loading: () => <p>Loading Footer...</p>,
})



function MyApp({ Component, pageProps }) {
  
   //registrar service-worker
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('Service worker registered:', registration);
          })
          .catch(error => {
            console.log('Service worker registration failed:', error);
          });
      });
    }
  }, []);


  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      <DefaultSeo {...SEO} />     
      <NavBar />
      <BgParallax1 />
      <Component {...pageProps} />
      <BgParallax2 />
      <SideBar />
      <Footer />
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

    </>
  )
}
export default MyApp
