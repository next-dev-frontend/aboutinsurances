import Image from 'next/image';
import logoBrasilJr from '../public/logos/logo-brasil-jr.webp';
import logoCeleste from '../public/logos/logo-celeste.webp';

const SobreMej = () => {
    return (
        <div id="sobreomej" className="select-none container w-full max-w-5xl mx-auto pt-20 pb-10">
            <div className='flex flex-nowrap items-center justify-left md:justify-center px-4 md:px-0 shadow-xl md:shadow-none'>
                <div className='w-auto px-4 lg:px-8 pt-2 lg:pt-3'>
                    <div data-anime="left" className='w-8 md:w-14 lg:w-16 max-w-full h-auto'>
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
                        Sobre o MEJ
                    </p>
                </div>
            </div>

            <div data-anime="left" className="w-full mb-6">
                <div className="h-1 mx-8 my-0 py-0 bg-light-green bg-opacity-25" />
            </div>

            <div className="flex flex-wrap">
                <div className="w-auto px-8">
                    <div className="mx-auto align-middle">
                        <h2 data-anime="left" className="text-center text-2xl md:text-3xl lg:text-4xl pt-10 text-dark-green mx-auto font-bold leading-none mb-3 pb-8">
                            Movimento Empresas Juniores
                        </h2>

                        <div data-anime="up" className="relative">
                            <div className="float-left w-44 md:w-1/2 h-full pr-4 pt-8">
                                <Image
                                    src={logoBrasilJr}
                                    alt="Logo Brasil Jr."
                                    layout="intrinsic"
                                    objectFit='cover'
                                    quality={100}
                                />
                            </div>
                            <div>
                                <p className="text-justify text-lg md:text-xl lg:text-2xl py-4 text-gray-700">
                                    Empresas Júniores (EJ) são empresas compostas e
                                    geridas por acadêmicos que realizam projetos em
                                    suas áreas de graduação, principalmente para micro
                                    e pequenas empresas. Caracterizam-se pela prestação
                                    de serviços com custos diferenciados e de alta
                                    qualidade; têm a finalidade de proporcionar
                                    vivências práticas organizacionais aos empresários juniores.
                                    Tal atitude coloca a existência de uma EJ como sendo uma
                                    importante ferramenta que atua no desenvolvimento de uma região,
                                    seja fomentando o crescimento da economia ou agindo como
                                    redutora de desigualdades socias. Acesse ufpel.com.br e saiba mais!
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default SobreMej;