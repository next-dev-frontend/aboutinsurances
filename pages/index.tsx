import dynamic from 'next/dynamic'
const PageSeo = dynamic(() => import('../components/PageSeo'))
const BgFixed = dynamic(() => import('../components/BgFixed'))
const AboutInsurances = dynamic(() => import('../components/AboutInsurances'))

export default function Home() {
  return (
    <PageSeo
      title="Ask Your Questions About Insurance and Agencies"
      titleTemplate="%s | About Insurances"
      description="Insurance information and tips website. Before contracting any insurance service, visit our website and clarify all your doubts on the subject."
      path="/"
      publishedTime="2023-07-18T20:27:00Z"
      modifiedTime="2023-07-29T21:12:53Z"
    >
      <main>
        <BgFixed />
        <AboutInsurances />
      </main>
    </PageSeo>
  )
}