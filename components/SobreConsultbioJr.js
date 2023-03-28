import Image from 'next/image';
import logoCeleste from '../public/logos/logo-celeste.webp';
import img2Nature from '../public/banners/img2-nature.webp';

const SobreConsultbioJr = () => {
    return (
        <div id="quemsomos" className="select-none container mx-auto pt-20 w-full max-w-5xl">
            <div className='flex flex-nowrap items-center justify-left md:justify-center px-4 md:px-0 shadow-xl md:shadow-none'>
                <div data-anime="left" className='w-auto px-4 lg:px-8 pt-2 lg:pt-3'>
                    <div className='w-8 md:w-14 lg:w-16 h-auto'>
                        <Image
                            src={logoCeleste}
                            alt="Mascote Celeste"
                            layout="intrinsic"
                            objectFit='cover'
                            priority
                        />
                    </div>
                </div>
                <div data-anime="up" className='w-auto'>
                    <p className="my-4 text-left lg:text-center text-4xl md:text-5xl lg:text-6xl font-bold text-dark-green">
                        Quem Somos
                    </p>
                </div>
            </div>

            <div data-anime="left" className="w-full mb-6">
                <div className="h-1 mx-8 my-0 py-0 bg-light-green bg-opacity-25" />
            </div>

            <div className="flex flex-wrap">
                <div className="w-auto md:w-1/2 px-8">
                    <div data-anime="up" className="mx-auto align-middle">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl pt-10 text-dark-green mx-auto font-bold leading-none mb-3">
                            ConsultBio Jr.
                        </h2>
                        <p className="text-justify indent-8 text-lg md:text-xl lg:text-2xl py-4 text-gray-700">
                            A ConsultBio Jr é uma empresa júnior do curso de Ciências Biológicas - Bacharelado da Universidade Federal de Alfenas, que atua nas áreas de consultoria e educação ambiental.
                            A empresa foi criada em 2021 por alunos do curso de Biologia e mantém-se gerida e organizada pelos discentes da biologia com auxílio dos docentes da UNIFAL-MG. Atualmente a ConsultBio Jr tem como Professor-tutor o Prof. Dr. Vinícius Silva, a fim de orientar os membros da empresa Júnior em sua trajetória empreendedora.
                            A ConsultBio jr tem o intuito de possibilitar novas experiências para os alunos de graduação com o mercado de trabalho, impulsionando o empreendedorismo e a autonomia dos discentes dentro do curso. Nossa missão tem como objetivo auxiliar seus clientes a alcançarem seu desenvolvimento em equilíbrio com a natureza, através de práticas e soluções sustentáveis através dos serviços prestados à sociedade.
                            Para mais informações sobre as atividades da empresa Júnior ou para prestações de serviço entre em contato.
                        </p>
                    </div>
                </div>
                <div className="float-right block w-sm lg:w-lg xl:w-xl md:w-1/2 px-4 md:px-8 p-8 pl-8 md:pl-4 xl:pl-2">
                    <div data-anime="left" className="relative rounded-md shadow-xl p-2 max-w-full">
                        <Image
                            className='rounded-sm mask mask-parallelogram-3'
                            src={img2Nature}
                            alt="Imagem Trabalho Natureza"
                            sizes="100vw"
                            layout="responsive"
                            objectFit='cover'
                            quality={100}
                        />
                    </div>
                    <div data-anime="up" className="w-full items-center pt-10 py-6">
                        <a href="#contato">
                            <button id="navAction2" className="mx-auto text-md md:text-lg lg:text-xl lg:mx-0 hover:no-underline bg-light-green border-4 border-white text-white hover:bg-white hover:text-light-green hover:border-light-green rounded-full mt-4 lg:mt-0 py-4 px-8 focus:outline-none focus:shadow-outline transform transition hover:scale-100 duration-1000 ease-in-out shadow-xl">
                                Entrar em Contato Conosco
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SobreConsultbioJr;