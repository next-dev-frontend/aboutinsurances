import { useEffect } from 'react';
import Image from 'next/image'

const Navbar = () => {

  //ações na navbar
  useEffect(() => {
    const navMenuDiv = document.getElementById('nav-content')
    const navMenu = document.getElementById('nav-toggle')
    const navItem1 = document.getElementById('nav-item1')
    const navItem2 = document.getElementById('nav-item2')

    document.onclick = check

    function check(e) {
      const target = (e && e.target) || (event && event.srcElement)

      if (checkParent(target, navMenuDiv)) {
        if (checkParent(target, navItem1) || checkParent(target, navItem2)) {
          navMenuDiv.classList.add('hidden')
        } else {
          navMenuDiv.classList.remove('hidden')
        }
      } else {
        //verifica se clique foi no botão menu
        if (checkParent(target, navMenu)) {
          if (navMenuDiv.classList.contains('hidden')) {
            navMenuDiv.classList.remove('hidden')
          } else {
            navMenuDiv.classList.add('hidden')
          }
        } else {
          // clique no link externo e no menu externo para ocultar menu
          navMenuDiv.classList.add('hidden')
        }
      }
    }

    function checkParent(t, elm) {
      while (t.parentNode) {
        if (t == elm) {
          return true
        }
        t = t.parentNode
      }
      return false
    }
  }, [])


  return (
    <nav id="header" className="select-none flex-shrink md:flex-shrink-0 bg-white bg-no-repeat w-full max-w-full z-30 border-color1 border-opacity-70 border-b-4">
      <div className="text-color2 whitespace-nowrap w-full container mx-auto flex flex-wrap xl:flex-nowrap items-center justify-between py-2 px-2 pl-4 pr-8">
        <a href="/" className="pl-1 pt-2">
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 overflow-hidden">
          <Image
            src="/logos/logo-about-insurances.webp"
            alt="logo about insurances"
            width={200}
            height={200}
            layout="responsive"
            objectFit="cover"
            loading='lazy'
          />
        </div>
        </a>
        <div className="block xl:hidden pt-2 tab">
          <button
            id="nav-toggle"
            className="flex items-center p-1 focus:outline-none transform transition hover:scale-110 duration-1000 ease-in-out"
          >
            <svg
              className="fill-current h-5 w-5 hover:text-color1"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path strokeLinecap="round" strokeLinejoin="round" d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          id="nav-content"
          className="hidden sticky text-xs text-color1 xl:flex w-full items-center h-full pt-4 lg:pt-1"
        >
          <ul className="sticky w-full xl:flex justify-end items-center">
            <li className="sticky px-4 p-4">
              <a
                href="/terms"
                id="nav-item1"
                className="sticky inline-block no-underline font-bold relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-color2 before:transition hover:before:scale-100"
              >
                TERMS & CONDITIONS / COOKIES
              </a>
            </li>
            <li className="sticky px-4 p-4">
              <a
                href="/policy"
                id="nav-item2"
                className="sticky inline-block no-underline font-bold relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-color2 before:transition hover:before:scale-100"
              >
                PRIVACY POLICY
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
