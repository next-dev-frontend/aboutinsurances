import Head from 'next/head'

export default function pageOffline() {
  return (
    <div>
      <Head>
        <title>Offline Page</title>
        <meta name="description" content="This page is offline. Try later." />
      </Head>
      <section id="offline" className="select-none relative flex flex-wrap flex-shrink md:flex-shrink-0 items-center justify-center m-auto bg-no-repeat w-full max-w-full h-screen">
        <div className="absolute grid h-screen place-content-center bg-opacity-0">
          <div className="text-center">
            <h1 className="text-9xl font-black text-[#142039]">This page is Offline! Try Later.</h1>
            <p className="mt-4 text-gray-500 pb-8">Page not found.</p>
            <div className="w-full items-center">
              <a href="/">
                <button id="navAction1" className="inline-block w-max mx-auto text-md md:text-lg lg:text-xl lg:mx-0 hover:no-underline bg-[#142039] border-4 border-white text-white hover:bg-white hover:text-[#142039] hover:border-[#ff6341] rounded-full mt-4 lg:mt-0 py-4 px-8 focus:outline-none focus:shadow-outline transform transition hover:scale-100 duration-1000 ease-in-out shadow-xl" >
                  Back to Home Page
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}