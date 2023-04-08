import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import React from 'react'
import { useEffect } from 'react'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo-config'
import * as gtag from '../lib/gtag';
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  //animação no scroll
  useEffect(() => {
    const item = document.querySelectorAll<HTMLElement>('[data-anime]')
    const animeScroll = () => {
      const windowTop = window.pageYOffset + window.innerHeight * 0.85
      item.forEach((element) => {
        if (windowTop > element.offsetTop) {
          element.classList.add('animate')
        } else {
          element.classList.remove('animate')
        }
      })
    }
    animeScroll()

    window.addEventListener('scroll', () => {
      animeScroll()
    })
  }, [])


  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      <DefaultSeo {...SEO} />
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
