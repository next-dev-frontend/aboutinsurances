import Image from 'next/image';
import logoCeleste from '../public/logos/logo-celeste.webp';
import logoAnaliseAgua from '../public/logos/logos-servicos/logo-analise-agua.webp';
import logoLevantamentoFaunaFlora from '../public/logos/logos-servicos/logo-levantamento-fauna-flora.webp';
import logoJardinagem from '../public/logos/logos-servicos/logo-jardinagem.webp';
import logoPrad from '../public/logos/logos-servicos/logo-prad.webp';
import logoMateriaisDidaticos from '../public/logos/logos-servicos/logo-materiais-didaticos.webp';
import logoEcoturismo from '../public/logos/logos-servicos/logo-ecoturismo.webp';
import logoKitEcologico from '../public/logos/logos-servicos/logo-kit-ecologico.webp';
import logoGerenciamentoResiduos from '../public/logos/logos-servicos/logo-gerenciamento-residuos.webp';


const CartaSevicos = () => {
    return (
        <div id="cartaservicos" data-anime="left" className="select-none container mx-auto py-20 max-w-5xl bg-white bg-opacity-80 border-dashed border-4 border-light-green">

            <div className='flex flex-nowrap items-center justify-left md:justify-center px-4 md:px-0 shadow-xl md:shadow-none'>
                <div className='w-auto px-4 lg:px-2 pt-2 lg:pt-3'>
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
                <div className='w-auto'>
                    <p className="my-4 text-left lg:text-center text-4xl md:text-5xl lg:text-6xl font-bold text-dark-green">
                        Carta de Serviços
                    </p>
                </div>
            </div>

            <div className="w-full mb-6">
                <div className="h-1 mx-8 my-0 py-0 bg-light-green bg-opacity-25" />
            </div>

            <div className="w-full px-4 pt-8">
                <div className="w-full lg:w-1/2 text-dark-green text-xl md:text-2xl lg:text-3xl gap-4 mx-auto h-full bg-opacity-0 p-2">

                    <div className="w-full space-y-4 py-2">
                        <details className="group items-left">
                            <summary className="font-semibold flex flax-nowrap items-left justify-left p-4 bg-white border-2 md:border-4 border-light-green shadow-xl">
                                <span className='px-4'>
                                    <Image
                                        src={logoAnaliseAgua}
                                        alt="Logotipo de Serviço Análise de Água"
                                        width={80}
                                        height={80}
                                        layout="fixed"
                                    />
                                </span>
                                <h3 className="text-dark-green py-2">
                                    Análise de Água
                                </h3>
                            </summary>
                        </details>
                    </div>

                    <div className="w-full space-y-4 py-2">
                        <details className="group items-left">
                            <summary className="font-semibold flex flax-nowrap items-left justify-left p-4 bg-white border-2 md:border-4 border-light-green shadow-xl">
                                <span className='px-4'>
                                    <Image
                                        src={logoLevantamentoFaunaFlora}
                                        alt="Logotipo de Serviço Levantamento de Fauna e Flora"
                                        width={80}
                                        height={80}
                                        layout="fixed"
                                    />
                                </span>
                                <h3 className="text-dark-green py-2">
                                    Levantamento de Fauna e Flora
                                </h3>
                            </summary>
                        </details>
                    </div>

                    <div className="w-full space-y-4 py-2">
                        <details className="group items-left">
                            <summary className="font-semibold flex flax-nowrap items-left justify-left p-4 bg-white border-2 md:border-4 border-light-green shadow-xl">
                                <span className='px-4'>
                                    <Image
                                        src={logoJardinagem}
                                        alt="Logotipo de Serviço Levantamento de Fauna e Flora"
                                        width={80}
                                        height={80}
                                        layout="fixed"
                                    />
                                </span>
                                <h3 className="text-dark-green">
                                    Jardinagem - Composteiras, Hortas e Viveiros de Mudas
                                </h3>
                            </summary>
                        </details>
                    </div>

                    <div className="w-full space-y-4 py-2">
                        <details className="group items-left">
                            <summary className="font-semibold flex flax-nowrap items-left justify-left p-4 bg-white border-2 md:border-4 border-light-green shadow-xl">
                                <span className='px-4'>
                                    <Image
                                        src={logoPrad}
                                        alt="Logotipo de Serviço Levantamento de Fauna e Flora"
                                        width={80}
                                        height={80}
                                        layout="fixed"
                                    />
                                </span>
                                <h3 className="text-dark-green">
                                    PRAD - Plano de Recuperação de Áreas Degradadas
                                </h3>
                            </summary>
                        </details>
                    </div>

                    <div className="w-full space-y-4 py-2">
                        <details className="group items-left">
                            <summary className="font-semibold flex flax-nowrap items-left justify-left p-4 bg-white border-2 md:border-4 border-light-green shadow-xl">
                                <span className='px-4'>
                                    <Image
                                        src={logoMateriaisDidaticos}
                                        alt="Logotipo de Serviço Levantamento de Fauna e Flora"
                                        width={80}
                                        height={80}
                                        layout="fixed"
                                    />
                                </span>
                                <h3 className="text-dark-green py-2">
                                    Criação de Materiais Didáticos
                                </h3>
                            </summary>
                        </details>
                    </div>

                    <div className="w-full space-y-4 py-2">
                        <details className="group items-left">
                            <summary className="font-semibold flex flax-nowrap items-left justify-left p-4 bg-white border-2 md:border-4 border-light-green shadow-xl">
                                <span className='px-4'>
                                    <Image
                                        src={logoEcoturismo}
                                        alt="Logotipo de Serviço Levantamento de Fauna e Flora"
                                        width={80}
                                        height={80}
                                        layout="fixed"
                                    />
                                </span>
                                <h3 className="text-dark-green py-2">
                                    Ecoturismo
                                </h3>
                            </summary>
                        </details>
                    </div>

                    <div className="w-full space-y-4 py-2">
                        <details className="group items-left">
                            <summary className="font-semibold flex flax-nowrap items-left justify-left p-4 bg-white border-2 md:border-4 border-light-green shadow-xl">
                                <span className='px-4'>
                                    <Image
                                        src={logoKitEcologico}
                                        alt="Logotipo de Serviço Levantamento de Fauna e Flora"
                                        width={80}
                                        height={80}
                                        layout="fixed"
                                    />
                                </span>
                                <h3 className="text-dark-green py-2">
                                    Kits Ecológicos
                                </h3>
                            </summary>
                        </details>
                    </div>

                    <div className="w-full space-y-4 py-2">
                        <details className="group items-left">
                            <summary className="font-semibold flex flax-nowrap items-left justify-left p-4 bg-white border-2 md:border-4 border-light-green shadow-xl">
                                <span className='px-4'>
                                    <Image
                                        src={logoGerenciamentoResiduos}
                                        alt="Logotipo de Serviço Levantamento de Fauna e Flora"
                                        width={80}
                                        height={80}
                                        layout="fixed"
                                    />
                                </span>
                                <h3 className="text-dark-green py-2">
                                    Gerenciamento de Resíduos
                                </h3>
                            </summary>
                        </details>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CartaSevicos;