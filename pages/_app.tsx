import React from 'react';
import { useEffect } from 'react';
import { useRouter } from "next/router";
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import SEO from '../next-seo-config';
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import * as gtag from '../lib/gtag';
import Analytics from '../components/Analytics';

function MyApp({ Component, pageProps }) {

 // google tags  
 const router = useRouter();

 useEffect(() => {
   const handleRouteChange = (url) => {
     gtag.pageview(url);
   };
   //quando o componente é montado, assina as 
   //alterações do roteador e registras as visualizações
   router.events.on('routeChangeComplete', handleRouteChange);

   // se o componente estiver desmontado, cancela
   // a assinatura do evento com o método `off`
   return () => {
     router.events.off('routeChangeComplete', handleRouteChange);
   };
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
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
export default MyApp
