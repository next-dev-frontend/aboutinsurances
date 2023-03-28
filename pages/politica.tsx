import Image from 'next/image';
import logoCeleste from '../public/logos/logo-celeste.webp';
import dynamic from 'next/dynamic';
const PageSeo = dynamic(() => import("../components/PageSeo"));

export default function Politica() {
    return (
        <PageSeo
            title="Política de Privacidade"
            titleTemplate="%s | ConsultBio Jr."
            description="A sua privacidade é importante para nós. É política do ConsultBio Jr.
             respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site"
            path="/politica"
        >
            <main>
                <section className="bg-[url('/banners/background-tree-flip.webp')] bg-no-repeat bg-fixed bg-cover w-screen max-w-full h-full">

                    <div className="select-none container mx-auto pt-10 w-full max-w-5xl">
                        <div className="w-full items-center pb-12 pl-8">
                            <a href="/">
                                <button id="navAction2" className="inline-block w-max mx-auto text-md md:text-lg lg:text-xl lg:mx-0 hover:no-underline bg-light-green border-4 border-white text-white hover:bg-white hover:text-light-green hover:border-light-green rounded-full mt-4 lg:mt-0 py-4 px-8 focus:outline-none focus:shadow-outline transform transition hover:scale-100 duration-1000 ease-in-out shadow-xl">
                                    Voltar p/ Página Inicial
                                </button>
                            </a>
                        </div>

                        <div className='flex flex-nowrap items-center justify-left md:justify-center px-4 md:px-0 shadow-xl md:shadow-none'>
                            <div className='w-auto px-4 lg:px-8 pt-2 lg:pt-3'>
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
                            <div className='w-auto'>
                                <h1 className="my-4 text-left lg:text-center text-4xl md:text-5xl lg:text-6xl font-bold text-dark-green">
                                    Política de Privacidade
                                </h1>
                            </div>
                        </div>

                        <div className="w-full mb-6">
                            <div className="h-1 mx-8 my-0 py-0 bg-light-green bg-opacity-25" />
                        </div>

                        <div className="flex flex-wrap">
                            <div className="w-auto px-8">
                                <div className="mx-auto align-middle">
                                    <div className="text-justify indent-8 text-lg md:text-xl lg:text-2xl py-4 text-gray-700">
                                        <p>
                                            A sua privacidade é importante para nós. É política da ConsultBio Jr.
                                            respeitar a privacidade do usuário em relação a qualquer informação que
                                            possamos coletar no site ConsultBio Jr., e outros sites que possuímos e operamos.
                                        </p>
                                        <p>
                                            Solicitamos informações pessoais apenas quando realmente precisamos
                                            delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais,
                                            com o seu conhecimento e consentimento. Também informamos por que estamos
                                            coletando e como será usado.
                                        </p>
                                        <p>
                                            Apenas retemos as informações coletadas pelo tempo necessário para
                                            fornecer o serviço solicitado. Quando armazenamos dados, protegemos
                                            dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos,
                                            bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
                                        </p>

                                        <p>
                                            Não compartilhamos informações de identificação pessoal publicamente ou
                                            com terceiros, exceto quando exigido por lei.
                                        </p>

                                        <p>
                                            O nosso site pode ter links para sites externos que não são operados por
                                            nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses
                                            sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
                                        </p>

                                        <p>
                                            Você é livre para recusar a nossa solicitação de informações pessoais,
                                            entendendo que talvez não possamos fornecer alguns dos serviços desejados.
                                        </p>
                                        <p>
                                            O uso continuado de nosso site será considerado como aceitação de nossas
                                            práticas em torno de privacidade e informações pessoais. Se você tiver
                                            alguma dúvida sobre como lidamos com dados do usuário e informações pessoais,
                                            entre em contacto connosco.
                                        </p>
                                    </div>
                                </div>

                                <div className="mx-auto align-middle">
                                    <p className="text-2xl md:text-3xl lg:text-4xl pt-10 text-dark-green mx-auto font-bold leading-none mb-3">
                                        Compromisso do Usuário
                                    </p>
                                    <p className="text-justify indent-8 text-lg md:text-xl lg:text-2xl py-4 text-gray-700">
                                        O usuário se compromete a fazer uso adequado dos conteúdos e da informação que a ConsultBio Jr.
                                        oferece no site e com caráter enunciativo, mas não limitativo:
                                        <p>A- Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</p>
                                        <p>B- Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, betano ou azar,
                                            qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</p>
                                        <p>C- Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do ConsultBio Jr., de
                                            seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer
                                            outros sistemas de hardware ou
                                            software que sejam capazes de causar danos anteriormente mencionados.
                                        </p>
                                    </p>
                                </div>

                                <div className="mx-auto align-middle">
                                    <p className="text-2xl md:text-3xl lg:text-4xl pt-10 text-dark-green mx-auto font-bold leading-none mb-3">
                                        Mais informações
                                    </p>
                                    <p className="text-justify indent-8 text-lg md:text-xl lg:text-2xl py-4 text-gray-700">
                                        Esperamos ter esclarecido bem como funciona nossa política de uso do site,
                                        como mencionado anteriormente, se houver algo que
                                        você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies
                                        ativados, caso interaja com um dos recursos que você usa em nosso site.
                                    </p>
                                </div>



                                <div className="mx-auto align-middle">
                                    <p className="text-lg md:text-2xl lg:text-3xl pt-10 text-dark-green mx-auto font-bold leading-none mb-3">
                                        Modificações
                                    </p>
                                    <p className="text-justify indent-8 text-sm md:text-lg lg:text-xl pb-4 text-gray-700">
                                        A ConsultBio Jr. pode revisar esta política de utilização do site a qualquer momento,
                                        sem aviso prévio.
                                        Ao usar este site, você concorda em ficar vinculado à versão atual desses
                                        termos apresentados acima.
                                    </p>
                                </div>

                                <div className="mx-auto align-middle">
                                    <p className="text-lg md:text-2xl lg:text-3xl pt-10 text-dark-green mx-auto font-bold leading-none mb-3">
                                        Lei aplicável
                                    </p>
                                    <p className="text-justify indent-8 text-sm md:text-lg lg:text-xl pb-4 text-gray-700">
                                        Esta política de uso do site é regida e interpretada de acordo com as
                                        leis seguidas pela ConsultBio Jr. e você se submete irrevogavelmente à jurisdição exclusiva
                                        dos tribunais naquele estado ou localidade.
                                    </p>
                                </div>

                                <div className="mx-auto align-middle">
                                    <p className="text-sm md:text-md lg:text-lg pt-10 text-dark-green mx-auto font-bold leading-none mb-3">
                                        Esta política é efetiva a partir de 27 outubro 2022 01:42
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className="w-full items-center pt-10 pl-8 pb-20">
                            <a href="/">
                                <button id="navAction1" className="inline-block w-max mx-auto text-md md:text-lg lg:text-xl lg:mx-0 hover:no-underline bg-light-green border-4 border-white text-white hover:bg-white hover:text-light-green hover:border-light-green rounded-full mt-4 lg:mt-0 py-4 px-8 focus:outline-none focus:shadow-outline transform transition hover:scale-100 duration-1000 ease-in-out shadow-xl">
                                    Voltar p/ Página Inicial
                                </button>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </PageSeo>
    )
}