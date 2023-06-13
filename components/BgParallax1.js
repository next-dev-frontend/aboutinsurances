function BgParallax1() {
  return (
    <div>
      <section className="relative bg-center flex items-center justify-center bg-fixed bg-cover bg-no-repeat w-screen h-96 md:h-max">
        <div className="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: 'url(/backgrounds/bg1-insurances.webp)' }} />
        <div className="select-none sticky h-max max-w-3xl text-white bg-gray-900 bg-opacity-30">
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