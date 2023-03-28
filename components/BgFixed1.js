import Image from "next/image";

function BgFixed1() {
  return (
    <section id="home" className="relative flex flex-wrap flex-shrink md:flex-shrink-0 items-center justify-center m-auto bg-no-repeat w-full max-w-full h-96 md:h-screen">
      <Image
        src="/banners/bg1-nature.webp"
        alt="Background de Natureza"
        layout="fill"
        objectFit='cover'
        quality={100}
        priority
      />
      <div data-anime="blur" className="absolute select-none w-72 md:w-96 xl:w-1/2 h-max text-white bg-opacity-0">
        <h2 className="sticky flex flex-wrap bg-light-green bg-opacity-70 p-4 text-5xl md:text-6xl xl:text-7xl font-bold text-center md:text-left z-0">
          Consultoria e Educação Ambiental
        </h2>
        <div data-anime="left" className="sticky bg-white h-1 flex flex-col w-full">
        </div>
      </div>
    </section>
  )
}
export default BgFixed1;



