import React from 'react';
import { useEffect } from 'react';
import { useRouter } from "next/router";
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import SEO from '../next-seo-config';
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import dynamic from 'next/dynamic'
import * as gtag from '../lib/gtag'
const BgParallax1 = dynamic(() => import('../components/BgParallax1'))
const BgParallax2 = dynamic(() => import('../components/BgParallax2'))
const NavBar = dynamic(() => import('../components/Navbar'))
const SideBar = dynamic(() => import('../components/SideBar'))
const Footer = dynamic(() => import('../components/Footer'))
const Analytics = dynamic(() => import('../components/Analytics'), {
  ssr: false,
  loading: () => <p>Loading Google Analytics...</p>,
})

const MyApp = ({ Component, pageProps }) => {
  
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

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
      <Analytics />
    </>
  )
}
export default MyApp
