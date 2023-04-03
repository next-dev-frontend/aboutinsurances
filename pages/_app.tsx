import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import React from 'react'
import { useEffect } from 'react'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo-config'

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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
