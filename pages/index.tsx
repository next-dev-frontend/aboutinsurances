import dynamic from 'next/dynamic';
import { useEffect } from 'react';
const PageSeo = dynamic(() => import("../components/PageSeo"));
const BgFixed1 = dynamic(() => import("../components/BgFixed1"));
const BgFixed2 = dynamic(() => import("../components/BgFixed2"));
const BgFixed3 = dynamic(() => import("../components/BgFixed3"));
const BgParallax1 = dynamic(() => import("../components/BgParallax1"));
const BgParallax2 = dynamic(() => import("../components/BgParallax2"));
const BgParallax3 = dynamic(() => import("../components/BgParallax3"));
const Navbar = dynamic(() => import("../components/Navbar"));
const SobreConsultbio = dynamic(() => import("../components/SobreConsultbioJr"));
const SobreMej = dynamic(() => import("../components/SobreMej"));
const Organizacional = dynamic(() => import("../components/Organizacional"));
const CartaServicos = dynamic(() => import("../components/CartaServicos"));
const ServicosPrestados = dynamic(() => import("../components/ServicosPrestados"));
const Depoimentos = dynamic(() => import("../components/Depoimentos"));
const Equipe = dynamic(() => import("../components/Equipe"));
const SobreCeleste = dynamic(() => import("../components/SobreCeleste"));
const Footer = dynamic(() => import("../components/Footer"));

export default function Home() {

  //ações na navbar
  useEffect(() => {
    var navMenuDiv = document.getElementById("nav-content");
    var navMenu = document.getElementById("nav-toggle");
    var navItem1 = document.getElementById("nav-item1");
    var navItem2 = document.getElementById("nav-item2");
    var navItem3 = document.getElementById("nav-item3");
    var navItem4 = document.getElementById("nav-item4");
    var navItem5 = document.getElementById("nav-item5");
    var navItem6 = document.getElementById("nav-item6");
    var navItem7 = document.getElementById("nav-item7");
    var navItem8 = document.getElementById("nav-item8");

    document.onclick = check;

    function check(e: { target: any; }) {
      var target = (e && e.target) || (event && event.srcElement);

      if (checkParent(target, navMenuDiv)) {
        if ((checkParent(target, navItem1)) || (checkParent(target, navItem2)) || (checkParent(target, navItem3)) || (checkParent(target, navItem4)) || (checkParent(target, navItem5)) || (checkParent(target, navItem6)) || (checkParent(target, navItem7)) || (checkParent(target, navItem8))) {
          navMenuDiv.classList.add("hidden");
        } else {
          navMenuDiv.classList.remove("hidden");
        }
      } else {
        //verifica se clique foi no botão menu
        if (checkParent(target, navMenu)) {
          if (navMenuDiv.classList.contains("hidden")) {
            navMenuDiv.classList.remove("hidden");
          } else {
            navMenuDiv.classList.add("hidden");
          }
        } else {
          // clique no link externo e no menu externo para ocultar menu
          navMenuDiv.classList.add("hidden");
        }
      }
    }

    function checkParent(t: { parentNode: any; }, elm: HTMLElement) {
      while (t.parentNode) {
        if (t == elm) {
          return true;
        }
        t = t.parentNode;
      }
      return false;
    }
  }, []);

  return (
    <PageSeo
      title="Consultoria e Educação Ambiental"
      titleTemplate="%s | ConsultBio Jr. Visite o site"
      description="Aprenda a desenvolver sustentavelmente, visando a boa relação com a natureza e a sociedade! Custos diferenciados e consultoria de alta qualidade! Clique aqui e saiba mais."
      path="/"
    >
      <main>
        <Navbar />
        <BgFixed1 />
        <section className="bg-[url('/banners/background-tree-flip.webp')] bg-no-repeat bg-fixed bg-cover w-screen max-w-full h-full">
          <SobreConsultbio />
          <SobreMej />
        </section>
        <BgParallax1 />
        <section className="bg-[url('/banners/background-tree.webp')] bg-no-repeat bg-fixed bg-cover w-screen max-w-full h-full">
          <Organizacional />
        </section>
        <BgParallax2 />
        <section className="bg-[url('/banners/bg4-nature.webp')] bg-no-repeat bg-fixed bg-cover w-screen max-w-full h-full">
          <CartaServicos />
          <ServicosPrestados />
          <Depoimentos />
        </section>
        <section className="bg-[url('/banners/background-tree-flip.webp')] bg-no-repeat bg-fixed bg-cover w-screen max-w-full h-full">
          <Equipe />
          <SobreCeleste />
        </section>
        <Footer />
      </main >
    </PageSeo>
  );
}