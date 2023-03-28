import Image from "next/image";

function BgFixed2() {
    return (
        <section id="home" className="relative flex flex-wrap flex-shrink md:flex-shrink-0 items-center justify-center m-auto bg-no-repeat w-full max-w-full h-96 md:h-screen">
            <Image
                data-anime="blur"
                className="z-0"
                src="/banners/bg8-nature.webp"
                alt="Background de Natureza"
                layout="fill"
                objectFit='cover'
                quality={100}
                loading="eager"
                priority
            />
            <div data-anime="left" className="select-none w-min h-max text-white bg-opacity-0">
                <h2 className="sticky bg-light-green bg-opacity-70 p-4 text-3xl xs:text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-center md:text-left">
                    Aprenda a Desenvolver Sustentavelmente, Visando a Boa Relação com a Natureza e a Sociedade!
                </h2>
                <div className="sticky bg-white h-1 flex flex-col w-full">
                </div>
            </div>
        </section>
    )
}
export default BgFixed2;