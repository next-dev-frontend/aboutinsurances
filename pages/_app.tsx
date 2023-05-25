import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app'
import Head from 'next/head';
import SEO from '../next-seo-config';
import dynamic from 'next/dynamic'
const NavBar = dynamic(() => import('../components/Navbar'))
const BgParallax1 = dynamic(() => import('../components/BgParallax1'), { loading: () => <p>Loading BgParallax1...</p>, })
const BgParallax2 = dynamic(() => import('../components/BgParallax2'), { loading: () => <p>Loading BgParallax2...</p>, })
const SideBar = dynamic(() => import('../components/SideBar'), { loading: () => <p>Loading SideBar...</p>, })
const Footer = dynamic(() => import('../components/Footer'), { loading: () => <p>Loading Footer...</p>, })
const Analytics = dynamic(() => import('../components/Analytics'))

const MyApp = ({ Component, pageProps }: AppProps) => {

  const router = useRouter();

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

    const handleRouteChange = () => {
      const nonce = generateNonce();
      const styleElements = document.querySelectorAll('style[nonce=""]');
      styleElements.forEach((style) => {
        style.setAttribute('nonce', nonce);
      });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };

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

function generateNonce() {
  const nonceChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let nonce = '';

  for (let i = 0; i < 32; i++) {
    nonce += nonceChars.charAt(Math.floor(Math.random() * nonceChars.length));
  }

  return nonce;
}