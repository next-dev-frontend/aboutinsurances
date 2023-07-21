//import '../styles/tailwind.css'
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import React, { useEffect } from 'react';
import { AppProps } from 'next/app'
import Head from 'next/head';
import dynamic from 'next/dynamic'
const NavBar = dynamic(() => import('../components/Navbar'))
const SideBar = dynamic(() => import('../components/SideBar'), { loading: () => <p>Loading...</p>, })
const PublicationDate = dynamic(() => import('../components/PublicationDate'))
const BgParallax = dynamic(() => import('../components/BgParallax'), { loading: () => <p>Loading...</p>, })
const PostCards = dynamic(() => import('../components/PostCards'), { loading: () => <p>Loading...</p>, })
const BreadCrumbs = dynamic(() => import('../components/BreadCrumbs'))
const Footer = dynamic(() => import('../components/Footer'), { loading: () => <p>Loading...</p>, })
const Analytics = dynamic(() => import('../components/Analytics'))

const MyApp = ({ Component, pageProps }: AppProps) => {

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

  //animação no scroll
  useEffect(() => {
    const item = document.querySelectorAll<HTMLElement>("[data-anime]");
    const animeScroll = () => {
      const windowTop = window.pageYOffset + window.innerHeight * 0.85;
      item.forEach((element) => {
        if (windowTop > element.offsetTop) {
          element.classList.add("animate");
        }
      })
    }
    animeScroll();

    window.addEventListener("scroll", () => {
      animeScroll();
    })
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="manifest" href='/manifest.json' />
        <link rel="apple-touch-icon" type="image/png" href='/favicon.ico' />
        <link rel="icon" href='/logos/logo-144x144.png' />
      </Head>
      <NavBar />
      <BreadCrumbs />
      <Component {...pageProps} />
      <PublicationDate />
      <PostCards />
      <BgParallax />
      <SideBar />
      <Footer />
      <Analytics />
    </>
  )
}
export default MyApp