import dynamic from 'next/dynamic'
const PageSeo = dynamic(() => import('../components/PageSeo'), { loading: () => <p>Carregando...</p>, ssr: false })
const BgParallax1 = dynamic(() => import('../components/BgParallax1'))
const BgParallax2 = dynamic(() => import('../components/BgParallax2'), { loading: () => <p>Carregando...</p>, ssr: false })
const NavBar = dynamic(() => import('../components/Navbar'), { loading: () => <p>Carregando...</p>, ssr: false })
const SideBar = dynamic(() => import('../components/SideBar'), { loading: () => <p>Carregando...</p>, ssr: false })
const AboutInsurances = dynamic(() => import('../components/AboutInsurances'), { loading: () => <p>Carregando...</p>, ssr: false })
const Footer = dynamic(() => import('../components/Footer'), { loading: () => <p>Carregando...</p>, ssr: false })

export default function Home() {
  return (
    <PageSeo
      title="Ask Your Questions About Insurance and Agencies"
      titleTemplate="%s | About Insurances"
      description="Insurance information and tips website. Before contracting any insurance service, visit our website and clarify all your doubts on the subject."
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
