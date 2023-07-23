import dynamic from 'next/dynamic'
const PageSeo = dynamic(() => import('../../components/PageSeo'))

export default function convertText() {

  return (
    <PageSeo
      title="Securing Your Family's Future"
      titleTemplate="%s | With the Right Policy"
      description="As responsible adults and caring individuals, one of our top priorities is ensuring the safety and well-being of our family. Life is unpredictable, and it is crucial to have a solid plan in place to protect our loved ones financially and emotionally."
      path="/articles/"
    >
      <main>
        <section id='convertText' className="container mx-auto pt-10 pb-10 w-full max-w-5xl">

          <div className="flex flex-nowrap items-center justify-left md:justify-center px-4 md:px-0 shadow-xl md:shadow-none py-8">
            <div className="w-auto pl-5">
              <h1 className="my-4 text-left lg:text-center text-4xl md:text-5xl lg:text-6xl text-[#142039] font-bold">
                Securing Your Family's Future with the Right Policy
              </h1>
            </div>
          </div>

          <div className="w-full mb-6">
            <div className="h-1 mx-8 my-0 py-0 bg-gray-400 bg-opacity-25" />
          </div>

          <div className="flex flex-wrap">
            <div className="w-full px-8 text-md md:text-xl lg:text-2xl">
              <div className="mx-auto align-middle">


              </div>
            </div>
          </div>

        </section>
      </main>
    </PageSeo >
  )
}