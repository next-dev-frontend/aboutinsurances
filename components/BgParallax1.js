import Image from "next/image";

function BgParallax1() {
  return (
    <div>
      <section className="select-none relative bg-center bg-cover bg-fixed bg-no-repeat flex items-center justify-center w-screen h-96 md:h-screen">
        <Image
          src="/backgrounds/bg1-insurances.webp"
          alt="Background Image"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
          quality={100}
          priority
        />
        <span className="sr-only">Image Background</span>
        <div className="sticky h-max max-w-3xl text-white bg-gray-900 bg-opacity-30">
          <h2 className="sticky p-4 text-3xl xs:text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-center md:text-left">
            "Security is not the end goal. It's a starting point."
          </h2>
          <p className="text-3xl">- Wendy Kopp</p>
          <div className="sticky bg-white h-1 w-full"></div>
        </div>
      </section>
    </div>
  );
}

export default BgParallax1;