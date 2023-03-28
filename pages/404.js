import Image from 'next/image';

export default function Custom404() {
    return (
        <section id="home" className="select-none relative flex flex-wrap flex-shrink md:flex-shrink-0 items-center justify-center m-auto bg-no-repeat w-full max-w-full h-screen">
            <Image
                src="/banners/background-tree.webp"
                alt="Background de Natureza"
                layout="fill"
                objectFit='cover'
                quality={100}
                loading="eager"
                priority
            />
            <div className="absolute grid h-screen place-content-center bg-opacity-0">
                <div className="text-center">
                    <strong className="text-9xl font-black text-dark-gray">404</strong>
                    <p className="mt-4 text-gray-500 pb-8">Página não encontrada.</p>
                    <div className="w-full items-center">
                        <a href="/">
                            <button id="navAction1" className="inline-block w-max mx-auto text-md md:text-lg lg:text-xl lg:mx-0 hover:no-underline bg-light-green border-4 border-white text-white hover:bg-white hover:text-light-green hover:border-light-green rounded-full mt-4 lg:mt-0 py-4 px-8 focus:outline-none focus:shadow-outline transform transition hover:scale-100 duration-1000 ease-in-out shadow-xl">
                                Voltar p/ Página Inicial
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}