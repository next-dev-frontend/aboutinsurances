import Link from "next/link";
import Contato from "./Contato";

const Footer = () => {
    return (
        <section id="contato" className="select-none mx-auto border-light-green border-opacity-70 border-t-4">
            <footer className="select-none bg-[url('/banners/navbar-bg.webp')] bg-center bg-cover bg-fixed bg-no-repeat w-screen">

                <Contato />

                <div className="container max-w-5xl mx-auto px-4 pt-6 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-4">
                    <div className="w-full pb-4">
                        <div className="h-1 my-0 py-0 bg-light-green bg-opacity-30" />
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <nav className="flex justify-center gap-6 text-xs text-gray-200 md:justify-end">
                            <Link href="/termos">
                                <a className="relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-light-green before:transition hover:before:scale-100">
                                    Termos &amp; Condições / Cookies
                                </a>
                            </Link>
                            <Link href="/politica">
                                <a className="relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-light-green before:transition hover:before:scale-100">
                                    Política de Privacidade
                                </a>
                            </Link>
                        </nav>
                        <p className="text-center text-xs text-gray-400 md:text-left">
                            ©2022 ConsultBio Jr.
                            Todos os Direitos Reservados.
                        </p>

                    </div>

                </div>
            </footer>
        </section>

    );
}

export default Footer;