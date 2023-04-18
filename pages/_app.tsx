import React, { useEffect } from 'react';
import { useRouter } from "next/router";
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import SEO from '../next-seo-config';
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import dynamic from 'next/dynamic';
import { pageview } from "../lib/gtag";
import { initGA } from "../lib/initGA";

const NavBar = dynamic(() => import('../components/Navbar'));
const BgParallax1 = dynamic(() => import('../components/BgParallax1'));
const BgParallax2 = dynamic(() => import('../components/BgParallax2'), {
  loading: () => <p>Loading BgParallax2...</p>,
});
const SideBar = dynamic(() => import('../components/SideBar'), {
  loading: () => <p>Loading SideBar...</p>,
});
const Footer = dynamic(() => import('../components/Footer'), {
  loading: () => <p>Loading Footer...</p>,
});

const GAWrapper = ({ children }) => {
  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
    };
    const router = useRouter();
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  useEffect(() => {
    initGA();
  }, []);

  return <>{children}</>;
};

const MyApp = ({ Component, pageProps }) => {
  // registrar service-worker
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
      <GAWrapper>
        <NavBar />
        <BgParallax1 />
        <Component {...pageProps} />
        <BgParallax2 />
        <SideBar />
        <Footer />
      </GAWrapper>
    </>
  );
};

export default MyApp;