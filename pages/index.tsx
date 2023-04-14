import dynamic from 'next/dynamic'
const PageSeo = dynamic(() => import('../components/PageSeo'))
const BgParallax1 = dynamic(() => import('../components/BgParallax1'))
const BgParallax2 = dynamic(() => import('../components/BgParallax2'))
const NavBar = dynamic(() => import('../components/Navbar'))
const SideBar = dynamic(() => import('../components/SideBar'))
const AboutInsurances = dynamic(() => import('../components/AboutInsurances'))
const Footer = dynamic(() => import('../components/Footer'))

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
