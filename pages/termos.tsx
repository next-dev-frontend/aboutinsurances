import Image from 'next/image';
import logoCeleste from '../public/logos/logo-celeste.webp';
import dynamic from 'next/dynamic';
const PageSeo = dynamic(() => import("../components/PageSeo"));

export default function Termos() {
    return (
        <PageSeo
            title="Termos e Condições de Uso"
            titleTemplate="%s | ConsultBio Jr."
            description="Ao acessar ao site ConsultBio Jr., concorda em cumprir estes termos de serviço,
            todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo
            cumprimento de todas as leis locais aplicáveis..."
            path="/termos"
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
                                    Termos & Condições de Uso / Cookies
                                </h1>
                            </div>
                        </div>

                        <div className="w-full mb-6">
                            <div className="h-1 mx-8 my-0 py-0 bg-light-green bg-opacity-25" />
                        </div>

                        <div className="flex flex-wrap">
                            <div className="w-auto px-8">
                                <div className="mx-auto align-middle">
                                    <p className="text-2xl md:text-3xl lg:text-4xl pt-10 text-dark-green mx-auto font-bold leading-none mb-3">
                                        1. Termos
                                    </p>
                                    <p className="text-justify indent-8 text-lg md:text-xl lg:text-2xl py-4 text-gray-700">
                                        Ao acessar o site da ConsultBio Jr., o usuário concorda em cumprir estes termos de serviço,
                                        todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo
                                        cumprimento de todas as leis locais aplicáveis. Os materiais
                                        contidos neste site são protegidos pelas leis de direitos autorais e marcas
                                        comerciais aplicáveis.
                                    </p>
                                </div>

                                <div className="mx-auto align-middle">
                                    <p className="text-2xl md:text-3xl lg:text-4xl pt-10 text-dark-green mx-auto font-bold leading-none mb-3">
                                        2. Uso de Licença
                                    </p>
                                    <p className="text-justify indent-8 text-lg md:text-xl lg:text-2xl py-4 text-gray-700">
                                        É concedida permissão para baixar temporariamente uma cópia dos materiais
                                        (informações ou software) no site da ConsultBio Jr. , apenas para visualização
                                        transitória pessoal e não comercial. Esta é a concessão de uma licença, não
                                        uma transferência de título e, sob esta licença, você não pode:
                                        <p>1- Modificar ou copiar os materiais contidos no site;</p>
                                        <p>2- Usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</p>
                                        <p>3- Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site da ConsultBio Jr.;</p>
                                        <p>4- Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</p>
                                        <p>5- Transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</p>
                                        <p>Esta licença será automaticamente rescindida se você violar alguma dessas restrições e
                                            poderá ser rescindida pela ConsultBio Jr. a qualquer momento. Ao encerrar a visualização
                                            desses materiais ou após o término desta licença, você deve apagar todos os materiais
                                            baixados em sua posse, seja em formato eletrónico ou impresso.</p>
                                    </p>
                                </div>

                                <div className="mx-auto align-middle">
                                    <p className="text-2xl md:text-3xl lg:text-4xl pt-10 text-dark-green mx-auto font-bold leading-none mb-3">
                                        3. Isenção de responsabilidade
                                    </p>
                                    <p className="text-justify indent-8 text-lg md:text-xl lg:text-2xl py-4 text-gray-700">
                                        Os materiais contidos no site da ConsultBio Jr. são fornecidos 'como estão'. A ConsultBio Jr. não oferece
                                        garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias,
                                        incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a
                                        um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
                                        Além disso, a ConsultBio Jr. não garante ou faz qualquer representação relativa à precisão,
                                        aos resultados prováveis ​​ou à confiabilidade do uso dos materiais em seu site ou de outra
                                        forma relacionado a esses materiais ou em sites vinculados a este site.
                                    </p>
                                </div>

                                <div className="mx-auto align-middle">
                                    <p className="text-2xl md:text-3xl lg:text-4xl pt-10 text-dark-green mx-auto font-bold leading-none mb-3">
                                        4. Limitações
                                    </p>
                                    <p className="text-justify indent-8 text-lg md:text-xl lg:text-2xl py-4 text-gray-700">
                                        Em nenhum caso a ConsultBio Jr. ou seus fornecedores serão responsáveis ​​por quaisquer danos
                                        (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios)
                                        decorrentes do uso ou da incapacidade de usar os materiais em ConsultBio Jr., mesmo que
                                        ConsultBio Jr. ou um representante autorizado da ConsultBio Jr. tenha sido notificado
                                        oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não
                                        permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos
                                        conseqüentes ou incidentais, essas limitações podem não se aplicar a você.
                                    </p>
                                </div>


                                <div className="mx-auto align-middle">
                                    <p className="text-2xl md:text-3xl lg:text-4xl pt-10 text-dark-green mx-auto font-bold leading-none mb-3">
                                        6. Links
                                    </p>
                                    <p className="text-justify indent-8 text-lg md:text-xl lg:text-2xl py-4 text-gray-700">
                                        A ConsultBio Jr. não analisou todos os sites vinculados ao seu site e não é
                                        responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer
                                        link não implica endosso pela ConsultBio Jr. do site. O uso de qualquer site
                                        vinculado é por conta e risco do usuário.
                                    </p>
                                </div>

                                <div className="mx-auto align-middle">
                                    <p className="text-2xl md:text-3xl lg:text-4xl pt-10 text-dark-green mx-auto font-bold leading-none mb-3">
                                        7. Uso de Cookies
                                    </p>
                                    <p className="text-justify indent-8 text-lg md:text-xl lg:text-2xl py-4 text-gray-700">
                                        A ConsultBio Jr. não utiliza cookies em seu site. O site da Consultbio Jr. foi
                                        desenvolvido com intúito de divulgação da empresa e dos serviços prestados. Os usuários
                                        terão acesso apenas a conteúdos estáticos com as informações da empresa e os serviços oferecidos.
                                        A ConsultBio Jr. não se é responsável por cookies contidos em links ou sites de terceiros,
                                        divulgados no site.
                                        No momento o site não coleta nenhuma informação do cliente e as armazena em navegadores web.
                                        Em caso de qualquer alteração no site, que
                                        nessecite de utilização de cookies, esse termo será alterado de acordo com a Lei aplicável.
                                    </p>
                                </div>


                                <div className="mx-auto align-middle">
                                    <p className="text-lg md:text-2xl lg:text-3xl pt-10 text-dark-green mx-auto font-bold leading-none mb-3">
                                        Modificações
                                    </p>
                                    <p className="text-justify indent-8 text-sm md:text-lg lg:text-xl pb-4 text-gray-700">
                                        A ConsultBio Jr. pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio.
                                        Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
                                    </p>
                                </div>

                                <div className="mx-auto align-middle">
                                    <p className="text-lg md:text-2xl lg:text-3xl pt-10 text-dark-green mx-auto font-bold leading-none mb-3">
                                        Lei aplicável
                                    </p>
                                    <p className="text-justify indent-8 text-sm md:text-lg lg:text-xl pb-4 text-gray-700">
                                        Estes termos e condições são regidos e interpretados de acordo com as
                                        leis seguidas pela ConsultBio Jr. e você se submete irrevogavelmente à jurisdição exclusiva
                                        dos tribunais naquele estado ou localidade.
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