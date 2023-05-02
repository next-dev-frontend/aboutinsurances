import React from 'react';
import { useEffect } from 'react';
import { useRouter } from "next/router";
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app'
import Head from 'next/head';
import SEO from '../next-seo-config';
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import * as gtag from '../lib/gtag';
import GoogleAnalyticsScript from '../components/GoogleAnalyticsScript';
import Script from "next/script";
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



const MyApp = ({ Component, pageProps }: AppProps) => {
  
  // componente google analytics
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    }
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    }
  }, [router.events]);

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
      <GoogleAnalyticsScript />

    </>
  )
}
export default MyApp
