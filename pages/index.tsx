import dynamic from 'next/dynamic'
import { useEffect } from 'react'
const PageSeo = dynamic(() => import('../components/PageSeo'))
const BgParallax1 = dynamic(() => import('../components/BgParallax1'))
const BgParallax2 = dynamic(() => import('../components/BgParallax2'))
const NavBar = dynamic(() => import('../components/Navbar'))
const SideBar = dynamic(() => import('../components/SideBar'))
const AboutInsurances = dynamic(() => import('../components/AboutInsurances'))
const Footer = dynamic(() => import('../components/Footer'))

export default function Home() {
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
    <PageSeo
      title="Consultoria e Educação Ambiental"
      titleTemplate="%s | About Insurances"
      description="Aprenda a desenvolver sustentavelmente, visando a boa relação com a natureza e a sociedade! Custos diferenciados e consultoria de alta qualidade! Clique aqui e saiba mais."
      path="/"
    >
      <main>
        <NavBar />
        <BgParallax1 />
        <section className="bg-gray-100 bg-no-repeat bg-fixed bg-cover w-screen max-w-full h-full">
          <AboutInsurances />
        </section>
        <BgParallax2 />
        <SideBar />
        <Footer />
      </main>
    </PageSeo>
  )
}
