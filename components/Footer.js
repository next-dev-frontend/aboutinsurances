import Contato from "./Contato";

const Footer = () => {
    return (
        <section id="contato" className="select-none mx-auto border-color1 border-opacity-70 border-t-4">
            <footer className="select-none bg-gray-200 bg-center bg-cover bg-fixed bg-no-repeat w-screen">

                <Contato />

                <div className="container max-w-5xl mx-auto px-4 pt-6 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-4">
                    <div className="w-full pb-4">
                        <div className="h-1 my-0 py-0 bg-light-green bg-opacity-30" />
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <p className="text-center text-xs text-gray-400 md:text-left">
                            ©2023 About Insurances.
                            All rights reserved.
                        </p>
                    </div>

                </div>
            </footer>
        </section>

    );
}

export default Footer;