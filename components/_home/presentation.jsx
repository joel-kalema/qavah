'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import { AiOutlineSend } from "react-icons/ai";
import { GrCertificate } from "react-icons/gr";
import Gallery from './gallery'

import { BsHouseCheck } from "react-icons/bs";

export default function Presentation() {
    return (
        <div className="">
            <div className="p-40">
                <div className="flex gap-10 mb-10">
                    <h1 className="text-5xl font-extrabold w-3/6">Vos conseillers immobiliers de confiance</h1>
                    <p className="w-3/6">Bienvenue sur Qavah Group, votre partenaire pour toutes vos transactions immobilières :
                        achat, vente, gestion ou location. Notre équipe expérimentée et nos services personnalisés
                        vous garantissent des démarches simples, sûres et efficaces.</p>
                </div>
                <div className="flex gap-4">
                    <div className="flex flex-wrap gap-4 w-3/6">
                        <div className="bg-[#e8e8e8] py-4 px-8 rounded-xl w-[48%]">
                            <h1 className="text-4xl font-extrabold mb-6">+100</h1>
                            <p className="text-sm">Unités prêtes</p>
                        </div>
                        <div className="bg-[#c7c7c7] py-4 px-8 rounded-xl w-[48%]">
                            <h1 className="text-4xl font-extrabold mb-6">+60K</h1>
                            <p className="text-sm">Clients satisfaits</p>
                        </div>
                        <div className="bg-[#ad8954] py-4 px-8 text-[#fff] rounded-xl w-[48%]">
                            <h1 className="text-4xl font-extrabold mb-6">+70K</h1>
                            <p className="text-sm">Collections de propriétés</p>
                        </div>
                        <div className="bg-[#e8e8e8] py-4 px-8 rounded-xl w-[48%]">
                            <h1 className="text-4xl font-extrabold mb-6">+100</h1>
                            <p className="text-sm">Unités prêtes</p>
                        </div>
                    </div>

                    <div className="flex w-3/6 gap-4 bg-[#ececec] rounded-xl p-6">
                        <div className="w-3/6">
                            <p className="text-sm mb-6">Nous avons été témoins de l’évolution constante du paysage du marché immobilier et sommes devenus un partenaire de confiance pour des milliers de clients.</p>

                            <div className="w-[5rem] h-[5rem] bg-[#ad8954] rounded-[50%] flex justify-center items-center">
                                <div className="w-[4rem] border border-[#fff] border-dashed h-[4rem] bg-[#ad8954] rounded-[50%] flex justify-center items-center">
                                    <BsHouseCheck className="text-2xl text-[#fff]" />
                                </div>
                            </div>
                        </div>

                        <div className="h-full w-3/6 overflow-hidden relative rounded-xl">
                            <Image src="/home4.jpg" layout="fill" objectFit="cover" alt="bay" quality={100} />
                        </div>

                    </div>
                </div>
            </div>

            <Gallery />

            <div className="w-5/6 flex h-[85dvh] mx-auto bg-[#303030] text-white rounded-2xl">
                <div className="w-2/6 h-full relative overflow-hidden rounded-3xl p-10">
                    <Image src="/about.jpg" layout="fill" objectFit="cover" alt="bay" quality={100} />
                </div>
                <div className="w-4/6 py-12 px-10">
                    <h1 className="text-3xl mb-6 font-extrabold">Chez Qavah Group, nous nous efforçons de vous offrir des solutions immobilières qui répondent à vos besoins.</h1>
                    <div className="">
                        <p className="mb-4">Que vous souhaitiez acheter, vendre, louer ou gérer vos biens, notre expertise et nos services personnalisés vous accompagnent à chaque étape pour garantir la réussite de vos projets immobiliers.</p>
                        <h2 className="text-[#ad8954] mb-4 font-extrabold">Principales Valeurs :</h2>
                        <div className="">
                            <div className="w-2/3 flex items-center gap-10 bg-[#fffaf1] text-black rounded-2xl px-6 py-4 mb-2">
                                <GrCertificate className="text-3xl" />
                                <div>
                                    <h1 className="font-bold mb-2">Confiance</h1>
                                    <p className="text-sm">Nous bâtissons des relations basées sur la transparence et l'intégrité.</p>
                                </div>
                            </div>
                            <div className="w-2/3 flex items-center gap-10 bg-[#fffaf1] text-black rounded-2xl px-6 py-4 mb-2">
                                <GrCertificate className="text-3xl" />
                                <div>
                                    <h1 className="font-bold mb-2">Innovation</h1>
                                    <p className="text-sm">Profitez d'outils modernes pour simplifier vos démarches immobilières.</p>
                                </div>
                            </div>
                            <div className="w-2/3 flex items-center gap-10 bg-[#e3e3e3] text-black rounded-2xl px-6 py-4 mb-2">
                                <GrCertificate className="text-3xl" />
                                <div>
                                    <h1 className="font-bold mb-2">Expertise</h1>
                                    <p className="text-sm">Bénéficiez de conseils professionnels et personnalisés tout au long de votre parcours.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className="text-center font-extrabold m-20 my-28 text-4xl">Menus <span className="text-[#ad8954]">Qavah Group</span></h1>

            <div className="flex justify-between gap-5 w-5/6 mx-auto my-20">
                <div className="w-1/3 h-[25rem] relative overflow-hidden rounded-3xl">
                    <div className="z-30 absolute top-3 right-3 hover:-rotate-45 transition duration-300 ease-in-out text-white p-3 rounded-full text-2xl flex justify-center items-center">
                        <AiOutlineSend />
                    </div>
                    <Image src="/home1.jpg" layout="fill" objectFit="cover" alt="bay" quality={100} />
                    <div className="absolute bg-[#0000006d] backdrop-blur-md w-[93%] m-auto h-[8rem] bottom-3 left-3 right-3 rounded-2xl p-4">
                        <h1 className="text-white font-bold mb-2">Gérez vos biens en toute sérénité</h1>
                        <p className="text-[#d8d8d8] text-xs">Confiez-nous la gestion locative et administrative de vos propriétés.</p>
                    </div>
                </div>
                <div className="w-1/3 h-[25rem] relative overflow-hidden rounded-3xl">
                    <div className=" z-30 absolute top-3 right-3 hover:-rotate-45 transition duration-300 ease-in-out text-white p-3 rounded-full text-2xl flex justify-center items-center">
                        <AiOutlineSend />
                    </div>
                    <Image src="/home3.jpg" layout="fill" objectFit="cover" alt="bay" quality={100} />
                    <div className="absolute bg-[#0000006d] backdrop-blur-md w-[93%] m-auto h-[8rem] bottom-3 left-3 right-3 rounded-2xl p-4">
                        <h1 className="text-white font-bold mb-2">Trouvez votre prochaine location</h1>
                        <p className="text-[#d8d8d8] text-xs">Accédez à une large gamme de logements adaptés à vos besoins.</p>
                    </div>
                </div>
                <div className="w-1/3 h-[25rem] relative overflow-hidden rounded-3xl">
                    <div className=" z-30 absolute top-3 right-3 hover:-rotate-45 transition duration-300 ease-in-out text-white p-3 rounded-full text-2xl flex justify-center items-center">
                        <AiOutlineSend />
                    </div>
                    <Image src="/home2.jpg" layout="fill" objectFit="cover" alt="bay" quality={100} />
                    <div className="absolute bg-[#0000006d] backdrop-blur-md w-[93%] m-auto h-[8rem] bottom-3 left-3 right-3 rounded-2xl p-4">
                        <h1 className="text-white font-bold mb-2">Explorez nos terrains disponibles</h1>
                        <p className="text-[#d8d8d8] text-xs">Parcourez une sélection exclusive de terrains prêts à être développés.</p>
                    </div>
                </div>

                <div className="w-1/3 h-[25rem] relative overflow-hidden rounded-3xl">
                    <div className=" z-30 absolute top-3 right-3 hover:-rotate-45 transition duration-300 ease-in-out text-white p-3 rounded-full text-2xl flex justify-center items-center">
                        <AiOutlineSend />
                    </div>
                    <Image src="/home2.jpg" layout="fill" objectFit="cover" alt="bay" quality={100} />
                    <div className="absolute bg-[#0000006d] backdrop-blur-md w-[93%] m-auto bottom-3 left-3 right-3 rounded-2xl p-4">
                        <h1 className="text-white font-bold mb-2">Découvrez notre offre de syndic de copropriété</h1>
                        <p className="text-[#d8d8d8] text-xs">Bénéficiez d'une gestion transparente et efficace de votre copropriété.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}