import Image from 'next/image';
import logoGreen from "../public/logos/logo-green-clover.webp";
import logoCeleste from '../public/logos/logo-celeste.webp';


const Organizacional = () => {
    return (
        <div id="organizacional" className="container select-none mx-auto pt-20 pb-10 w-full max-w-5xl">
            <div className='flex flex-nowrap items-center justify-left md:justify-center px-4 md:px-0 shadow-xl md:shadow-none'>
                <div data-anime="left" className='w-auto px-4 lg:px-8 pt-2 lg:pt-3'>
                    <div className='w-8 md:w-14 lg:w-16 h-auto'>
                        <Image
                            src={logoCeleste}
                            alt="Mascote Celeste"
                            layout="intrinsic"
                            objectFit='cover'
                            quality={100}
                        />
                    </div>
                </div>
                <div data-anime="down" className='w-auto'>
                    <p className="my-4 text-left lg:text-center text-4xl md:text-5xl lg:text-6xl font-bold text-dark-green">
                        Cultura Organizacional
                    </p>
                </div>
            </div>

            <div data-anime="left" className="w-full mb-6">
                <div className="h-1 mx-8 my-0 py-0 bg-light-green bg-opacity-25" />
            </div>

            <div data-anime="left" className="w-full items-center p-4 pt-8 flex flex-col flex-grow flex-shrink">
                <div className="w-80 lg:w-1/2 space-y-4">
                    <details className="p-6 border-l-4 border-light-green bg-light-green bg-opacity-30 rounded group">
                        <summary className="flex items-center justify-between cursor-pointer">
                            <div className="flex flex-nowrap w-full items-center">
                                <div className="relative flex w-6 h-5 md:w-7 md:h-6 lg:w-9 lg:h-8">
                                    <Image
                                        src={logoGreen}
                                        alt="Logotipo Folhas da Consultbio Jr."
                                        layout="fill"
                                        quality={100}
                                        loading="lazy"
                                    />
                                </div>
                                <div className='pl-4 font-bold text-2xl md:text-3xl lg:text-4xl text-dark-green'>
                                    Missão
                                </div>
                            </div>
                            <span className="flex-shrink-0 ml-1.5 p-1 md:p-2 lg:p-3 text-white bg-light-green rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </summary>
                        <span className='text-md md:text-lg lg:text-xl xl:text-2xl'>
                            <p className="mt-4 leading-relaxed text-dark-green">
                                - Auxiliar os clientes a alcançarem seu desenvolvimento e o equilíbrio com a natureza através de práticas e soluções sustentáveis.
                            </p>
                            <p className="mt-4 leading-relaxed text-dark-green">
                                - Ajudar nossos clientes a se desenvolver sustentavelmente, visando a boa relação com a natureza e a sociedade.
                            </p>
                        </span>
                    </details>
                </div>
            </div>

            <div data-anime="left" className="w-full items-center p-4 flex flex-col flex-grow flex-shrink">
                <div className="w-80 lg:w-1/2 space-y-4">
                    <details className="p-6 border-l-4 border-light-green bg-light-green bg-opacity-30 rounded group">
                        <summary className="flex items-center justify-between cursor-pointer">
                            <div className="flex flex-nowrap w-full items-center">
                                <div className="relative flex w-6 h-5 md:w-7 md:h-6 lg:w-9 lg:h-8">
                                    <Image
                                        src={logoGreen}
                                        alt="Logotipo Folhas da Consultbio Jr."
                                        layout="fill"
                                        quality={100}
                                        loading="lazy"
                                    />
                                </div>
                                <div className='pl-4 font-bold text-2xl md:text-3xl lg:text-4xl text-dark-green'>
                                    Visão
                                </div>
                            </div>
                            <span className="flex-shrink-0 ml-1.5 p-1 md:p-2 lg:p-3 text-white bg-light-green rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </summary>
                        <span className='text-sm sm:text-md lg:text-lg xl:text-xl'>
                            <p className="mt-4 leading-relaxed text-dark-green">
                                - Para 2021, almejamos que a  ConsultBio esteja consolidada atuando no mercado, com diversos projetos e com um maior número integrantes.
                            </p>
                        </span>
                    </details>
                </div>
            </div>

            <div data-anime="left" className="w-full items-center p-4 flex flex-col flex-grow flex-shrink">
                <div className="w-80 lg:w-1/2 space-y-4">
                    <details className="p-6 border-l-4 border-light-green bg-light-green bg-opacity-30 rounded group">
                        <summary className="flex items-center justify-between cursor-pointer">
                            <div className="flex flex-nowrap w-full items-center">
                                <div className="relative flex w-6 h-5 md:w-7 md:h-6 lg:w-9 lg:h-8">
                                    <Image
                                        src={logoGreen}
                                        alt="Logotipo Folhas da Consultbio Jr."
                                        layout="fill"
                                        quality={100}
                                        loading="lazy"
                                    />
                                </div>
                                <div className='pl-4 font-bold text-2xl md:text-3xl lg:text-4xl text-dark-green'>
                                    Valores
                                </div>
                            </div>
                            <span className="flex-shrink-0 ml-1.5 p-1 md:p-2 lg:p-3 text-white bg-light-green rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </summary>
                        <span className='text-sm sm:text-md lg:text-lg xl:text-xl'>
                            <p className="mt-4 leading-relaxed text-dark-green">
                                ✔️ Sustentabilidade
                            </p>
                            <p className="mt-4 leading-relaxed text-dark-green">
                                ✔️ Transparência
                            </p>
                            <p className="mt-4 leading-relaxed text-dark-green">
                                ✔️ Conservação da natureza
                            </p>
                            <p className="mt-4 leading-relaxed text-dark-green">
                                ✔️ Coletividade
                            </p>
                            <p className="mt-4 leading-relaxed text-dark-green">
                                ✔️ Responsabilidade
                            </p>
                            <p className="mt-4 leading-relaxed text-dark-green">
                                ✔️ Criatividade fora curva
                            </p>
                            <p className="mt-4 leading-relaxed text-dark-green">
                                ✔️ Otimismo
                            </p>
                        </span>
                    </details>
                </div>
            </div>
        </div>
    );
}

export default Organizacional;