function BgParallax1() {
    return (
        <section>
            <div className="bg-[url('/banners/bg2-nature.webp')] py-20 px-8 bg-center flex items-center justify-center bg-fixed bg-cover bg-no-repeat w-full max-w-full h-96 md:h-screen">
                <div data-anime="blur" className="select-none sticky h-max max-w-3xl text-white bg-opacity-0">
                    <h3 className="sticky bg-light-green bg-opacity-70 p-4 text-3xl xs:text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-center md:text-left">
                        Alcance o Desenvolvimento em Equilíbrio com a Natureza!
                    </h3>
                    <div className="sticky bg-white h-1 flex flex-col w-full">
                    </div>
                </div>
            </div>
        </section>
    )
}
export default BgParallax1;