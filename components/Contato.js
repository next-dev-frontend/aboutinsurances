
import React, { useRef } from 'react'
import Image from 'next/image';
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
import logoConsultbio from '../public/logos/logo-consultbio-jr.webp';
import logoCeleste from '../public/logos/logo-celeste.webp';
import logoUnifal from '../public/logos/logo-unifal-mg.webp';
import logoGoogle from '../public/logos/logo-google.webp';

const Contato = () => {
    const nameRef = useRef()
    const emailRef = useRef()
    const messageRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        /* 
        conteúdo aqui !
        */
    }

    return (
        <div className="select-none container max-w-5xl mx-auto w-full bg-opacity-0 rounded text-light-green">
            <div className="grid grid-cols-2">

                <div className="order-1 col-span-full md:col-span-1 py-5 md:py-6 px-6">
                    <div className="bg-opacity-0 mx-auto max-w-xl flex flex-col space-y-5">
                        <a href="#home">
                            <div className="relative w-44 h-8 md:w-48 sm:h-10 lg:w-52 lg:h-11 transform transition hover:scale-105 duration-1000 ease-in-out">
                                <Image
                                    src={logoConsultbio}
                                    alt="Logotipo da ConsultBio Jr."
                                    layout="fill"
                                    objectFit="cover"
                                    sizes="(max-width: 256px) 100vw,
                                    (max-width: 240px) 50vw,
                                    33vw"
                                    quality={100}
                                />
                            </div>
                        </a>
                        <p className="text-xs md:text-sm lg:text-md text-light-gray pb-8">
                            A ConsultBio Jr é uma empresa júnior do curso de Ciências Biológicas - Bacharelado da Universidade Federal de Alfenas, que atua nas áreas de consultoria e educação ambiental. A empresa foi criada em 2021 por alunos do curso de Biologia e mantém-se gerida e organizada pelos discentes da biologia com auxílio dos docentes da UNIFAL-MG.
                        </p>


                        <div className="w-full mb-4">
                            <p className="w-full text-2xl sm:text-3xl lg:text-4xl font-bold text-left text-light-gray">
                                Contato
                            </p>
                            <div className="w-full py-2">
                                <div className="h-1 my-0 py-0 bg-light-green bg-opacity-30" />
                            </div>
                        </div>

                        <a href="#mail" title="Envie uma Menagem por E-mail" className="inline-flex items-center text-base text-light-green w-min bg-white hover:bg-light-green rounded px-4 py-4 border-4 border-light-green hover:border-white hover:text-white">
                            <MailIcon className="mr-2 w-6" />
                            consultbioej@gmail.com
                        </a>


                        <div title="Ligue para Nós Agora Mesmo" className="grid grid-flow-col auto-cols-auto w-max border-4 border-light-green rounded text-sm text-dark-green bg-white px-4 py-2 leading-6">
                            <PhoneIcon className="mr-2 w-6 text-light-green" />
                            +55 35 9773-7978
                        </div>



                        <div className="flex items-center">
                            <ul className="flex justify-center gap-4 md:gap-6 sm:justify-start">
                                <li>
                                    <a href="/" title="Facebook da ConsultBio Jr." rel="noopener noreferrer" target="_blank" className="text-light-gray transition hover:text-light-green">
                                        <span className="sr-only">Facebook</span>
                                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/consultbiojr" title="Instagram da ConsultBio Jr." rel="noopener noreferrer" target="_blank" className="text-light-gray transition hover:text-light-green">
                                        <span className="sr-only">Instagram</span>
                                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="/" title="Twitter da ConsultBio Jr." rel="noopener noreferrer" target="_blank" className="text-light-gray transition hover:text-light-green">
                                        <span className="sr-only">Twitter</span>
                                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="/" title="Linkedin da ConsultBio Jr." rel="noopener noreferrer" target="_blank" className="text-light-gray transition hover:text-light-green">
                                        <span className="sr-only">Linkedin</span>
                                        <svg className="w-8 h-8 py-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                </li>

                            </ul>

                        </div>

                    </div>
                </div>

                <div className="order-2 col-span-full md:col-span-1 py-5 md:py-10 px-6">
                    <form action="" className="bg-opacity-0 rounded mx-auto max-w-xl space-y-4" onSubmit={handleSubmit}>

                        <div className="w-full mb-4">
                            <p className="w-full text-2xl sm:text-3xl lg:text-4xl font-bold text-left text-light-gray">
                                Localização
                            </p>
                            <div className="w-full py-2">
                                <div className="h-1 my-0 py-0 bg-light-green bg-opacity-30" />
                            </div>
                        </div>

                        <div className="google-map-code col-span-full">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29713.812132100164!2d-45.98372070395273!3d-21.420339790391047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b5f5ac8b5a247f%3A0x46cb2184f1223f91!2sUniversidade%20Federal%20de%20Alfenas%20-%20UNIFAL-MG!5e0!3m2!1spt-BR!2sbr!4v1659409488486!5m2!1spt-BR!2sbr" title="map" scrolling="no"
                                width="100%" height="400px"
                                className="border-4 border-light-green rounded bg-opacity-0"
                                loading="lazy"
                            />

                        </div>

                        <div className='w-full'>
                            <ul className="flex mx-auto w-max h-full gap-2 md:gap-4 bg-white border-2 border-light-green rounded p-2 items-center">
                                <li className='transform transition hover:scale-110 duration-500 ease-in-out pl-2'>
                                    <a href="https://www.unifal-mg.edu.br/portal/index/" rel="noopener noreferrer" target="_blank">
                                        <div className='relative w-10 h-8'>
                                            <Image
                                                src={logoUnifal}
                                                alt="Logotipo da Unifal MG"
                                                title="Unifal - Universidade Federal de Alfenas"
                                                layout="fill"
                                                quality={100}
                                            />
                                        </div>
                                    </a>
                                </li>
                                <li className='transform transition hover:scale-110 duration-500 ease-in-out'>
                                    <a href="https://transparencyreport.google.com/safe-browsing/search?url=https:%2F%2Fconsultbio-jr.vercel.app%2F&hl=pt_BR" rel="noopener noreferrer" target="_blank">
                                        <div className='relative w-20 h-8'>
                                            <Image
                                                src={logoGoogle}
                                                alt="Logo Site Seguro - Google"
                                                title="Site Seguro - Clique para Verificar!"
                                                layout="fill"
                                                objectFit='cover'
                                                quality={100}
                                            />
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>


                    </form>
                </div>

            </div>
        </div >
    )
}

export default Contato
