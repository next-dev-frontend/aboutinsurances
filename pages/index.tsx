import dynamic from 'next/dynamic'
const PageSeo = dynamic(() => import('../components/PageSeo'))
const AboutInsurances = dynamic(() => import('../components/AboutInsurances'))

export default function Home() {
  return (
    <PageSeo
      title="Ask Your Questions About Insurance and Agencies"
      titleTemplate="%s | About Insurances"
      description="Insurance information and tips website. Before contracting any insurance service, visit our website and clarify all your doubts on the subject."
      path="/"
      publishedTime="2023-07-18T20:27:00Z"
      modifiedTime="2023-08-06T20:58:12Z"
    >
      <main>
        <section id='insurances' className="select-none container mx-auto w-full max-w-5xl">
          <div className="flex flex-nowrap items-center w-full max-w-5xl h-96 justify-center px-4 md:px-0 py-8 shadow-xl md:shadow-none bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/backgrounds/bg2-insurances.webp')" }}>
            <div className="w-full md:w-2/3 p-4 bg-color1 bg-opacity-70 rounded">
              <h1 className="my-4 text-center text-4xl md:text-5xl lg:text-6xl text-white font-bold underline decoration-color2">
                How to sеarch and choosе rеliablе insurancе companiеs?
              </h1>
            </div>
          </div>
          <AboutInsurances />
        </section>
      </main>
    </PageSeo>
  )
}