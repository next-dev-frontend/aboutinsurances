import dynamic from 'next/dynamic'
const PageSeo = dynamic(() => import('../components/PageSeo'))
const BgParallax1 = dynamic(() => import('../components/BgParallax1'))
const AboutInsurances = dynamic(() => import('../components/AboutInsurances'))

export default function Home() {
  return (
    <PageSeo
      title="Ask Your Questions About Insurance and Agencies"
      titleTemplate="%s | About Insurances"
      description="Insurance information and tips website. Before contracting any insurance service, visit our website and clarify all your doubts on the subject."
      path="/"
    >
      <main>
        <BgParallax1 />
        <AboutInsurances />
      </main>
    </PageSeo>
  )
}