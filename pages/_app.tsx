import React from 'react';
import { useEffect } from 'react';
import { useRouter } from "next/router";
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import SEO from '../next-seo-config';
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import dynamic from 'next/dynamic'
import * as gtag from "../lib/gtag";
import { initGA } from "../lib/initGA";
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

const MyApp = ({ Component, pageProps }) => {
  
  //google analytics
  const router = useRouter();

  //responsável por registrar uma função handleRouteChange que é executada toda vez que há uma mudança de rota no aplicativo, utilizando o objeto router do Next.js. Essa função, por sua vez, chama o método pageview do arquivo gtag.js, que é responsável por enviar a informação de página visualizada para o Google Analytics. Este useEffect só é executado uma vez, quando o componente é montado, graças à dependência [].
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  //responsável por chamar a função initGA do arquivo initGA.tsx, que é responsável por carregar o script do Google Analytics no aplicativo e configurá-lo para que possa ser usado pelo método pageview do gtag.js. Este useEffect também só é executado uma vez, quando o componente é montado, graças à dependência [].
  useEffect(() => {
    initGA();
  }, []);

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
    </>
  )
}
export default MyApp
