/* eslint-disable @next/next/no-script-in-head */
/* eslint-disable @next/next/inline-script-id */
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Head from "next/head";
import React from 'react';
import { useEffect } from 'react';
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo-config";

function MyApp({ Component, pageProps }) {

  //animação no scroll
  useEffect(() => {
    const item = document.querySelectorAll<HTMLElement>("[data-anime]");
    const animeScroll = () => {
      const windowTop = window.pageYOffset + window.innerHeight * 0.85;
      item.forEach((element) => {
        if (windowTop > element.offsetTop) {
          element.classList.add("animate");
        } else {
          element.classList.remove("animate");
        }
      })
    }
    animeScroll();

    window.addEventListener("scroll", () => {
      animeScroll();
    })
  }, []);



  //inicializa o service-work pwa
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
          .then(registration => {
            console.log('Service Worker registrado com sucesso:', registration.scope);
          })
          .catch(error => {
            console.log('Falha ao registrar o Service Worker:', error);
          });
      });
    }
  }, []);


  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp;



