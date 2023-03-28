import React from "react";
import Image from 'next/image';
import logoConsultbio from '../public/logos/logo-consultbio-jr.webp';
import logoCeleste from '../public/logos/logo-celeste.webp';
import bannerNavbar from '../public/banners/navbar-bg2.webp';


const Navbar = () => {
    return (

        <nav id="header" data-anime="down" className="select-none fixed flex-shrink md:flex-shrink-0 text-light-gray bg-no-repeat w-full max-w-full z-30 border-light-green border-opacity-70 border-b-4 pb-1 md:pb-2 lg:pb-1">
            <Image
                src={bannerNavbar}
                alt="Background Navbar"
                layout="fill"
                objectFit='cover'
                quality={100}
                priority
            />

            <div className="text-light-gray whitespace-nowrap w-full container mx-auto flex flex-wrap xl:flex-nowrap items-center justify-between py-2 px-2 pl-4 pr-8">
                <a href="#home" className="pl-1">
                    <div className="relative w-40 h-8 sm:w-48 md:w-48 sm:h-10 lg:w-52 lg:h-11 transform transition hover:scale-105 duration-1000 ease-in-out">
                        <Image
                            src={logoConsultbio}
                            alt="Logotipo da ConsultBio Jr."
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                            priority
                        />
                    </div>
                </a>
                <div className="block xl:hidden pt-2 tab">
                    <button id="nav-toggle" className="flex items-center p-1 focus:outline-none transform transition hover:scale-110 duration-1000 ease-in-out">
                        <svg className="fill-current h-5 w-5 hover:text-light-green" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>

                <div id="nav-content" className="hidden sticky text-xs text-light-gray xl:flex w-full items-center h-full pt-4 lg:pt-1">
                    <ul className="sticky w-full xl:flex justify-end items-center">
                        <li className="sticky px-4 p-4">
                            <a href="#quemsomos" id="nav-item1" className="sticky inline-block no-underline font-bold relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-light-green before:transition hover:before:scale-100">
                                QUEM SOMOS
                            </a>
                        </li>
                        <li className="sticky px-4 p-4">
                            <a href="#sobreomej" id="nav-item2" className="sticky inline-block no-underline font-bold relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-light-green before:transition hover:before:scale-100">
                                SOBRE O MEJ
                            </a>
                        </li>
                        <li className="sticky px-4 p-4">
                            <a href="#organizacional" id="nav-item3" className="sticky inline-block no-underline font-bold relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-light-green before:transition hover:before:scale-100">
                                ORGANIZACIONAL
                            </a>
                        </li>
                        <li className="sticky px-4 p-4">
                            <a href="#cartaservicos" id="nav-item4" className="sticky inline-block no-underline font-bold relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-light-green before:transition hover:before:scale-100">
                                SERVIÇOS
                            </a>
                        </li>
                        <li className="sticky px-4 p-4">
                            <a href="#equipe" id="nav-item5" className="sticky inline-block no-underline font-bold relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-light-green before:transition hover:before:scale-100">
                                EQUIPE
                            </a>
                        </li>


                        <li className="sticky px-4 p-4">
                            <a href="#sobreceleste" id="nav-item6" className="sticky inline-block no-underline font-bold relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-light-green before:transition hover:before:scale-100">
                                <Image
                                    src={logoCeleste}
                                    alt="Mascote Cobra Celeste"
                                    width={18}
                                    height={14}
                                    quality={100}
                                    priority
                                />
                                CELESTE
                            </a>
                        </li>

                        <li className="sticky pl-4 pb-2 md:pb-0">
                            <a href="#contato" id="nav-item8">
                                <button id="navAction" className="sticky mx-auto lg:mx-0 hover:no-underline bg-white text-lg text-light-green hover:bg-light-green hover:text-white rounded-full border-4 border-light-green hover:border-white mt-4 lg:mt-0 py-2 px-8 focus:outline-none focus:shadow-outline transform transition hover:scale-100 duration-500 ease-in-out">
                                    Contato
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    );
}

export default Navbar;