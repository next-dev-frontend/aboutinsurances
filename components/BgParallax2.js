import Image from "next/image"

function BgParallax2() {
  return (
    <section>
      <div className="py-20 px-8 bg-center flex items-center justify-center bg-fixed bg-cover bg-no-repeat w-full max-w-full h-96 md:h-screen">
        <div className="relative select-none sticky h-max max-w-3xl text-white bg-gray-900 bg-opacity-30">
        <Image
          src="/backgrounds/bg6-insurances.webp"
          alt="background insurances"
          layout="fill"
          objectFit="cover"
        />
          <h2 className="sticky bg-light-green bg-opacity-80 p-4 text-3xl xs:text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-center md:text-left">
            "Security is not the end goal. It's a starting point."
          </h2>
          <p className="text-3xl">- Wendy Kopp</p>
          <div className="sticky bg-white h-1 flex flex-col w-full"></div>
        </div>
      </div>
    </section>
  )
}
export default BgParallax2
