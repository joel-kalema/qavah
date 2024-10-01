'use client'
import React from 'react';
import CarouselCustomNavigation from "./_component/caroucelle"
import { CiCalendarDate } from "react-icons/ci";
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineLogin } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";


const Vendre = () => {

    return (
        <div className="">

            <div className="h-[70vh] lg:h-[90vh] mb-40 lg:w-11/12 mx-auto overflow-hidden relative rounded-3xl">
                <Image src="/gerer.jpeg" layout="fill" objectFit="cover" alt="bay" quality={100} />
                <div className="absolute bottom-0 lg:bottom-10  p-4 lg:left-10 lg:flex lg:w-4/6 justify-between items-center gap-10 bg-[#0000006d] backdrop-blur-md rounded-2xl">
                    <div className="text-white w-5/6">
                        <h1 className="text-2xl lg:text-4xl text-white font-extrabold mb-6">Vos locataires sont insolvable ou paient en reatard?</h1>
                        <div className="btn hidden lg:flex justify-between gap-4 p-1 bg-[#ffffff35] rounded-3xl pr-10">
                            <Link href="/contact" className='py-2 px-6 bg-[#ad8954] rounded-3xl text-sm font-extrabold'>Contacter</Link>
                            <p className="flex items-center float-right text-[#fff] gap-5 ml-10"><CiCalendarDate className="text-2xl" /> Gestion immobilière fiable, proche de vous.</p>
                        </div>
                    </div>
                    <div className="lg:w-1/6 h-[10rem] flex items-start gap-4">
                        <Link href="/contact" className='inline-block text-white lg:hidden py-2 px-6 bg-[#ad8954] rounded-3xl text-sm font-extrabold'>Contacter</Link>
                        <CarouselCustomNavigation />
                    </div>
                </div>
            </div>

            <div className="flex lg:w-4/5 mx-auto">
                <div className="flex mx-auto gap-10 bg-[#ececec] rounded-xl p-6 flex-col-reverse lg:flex-row">
                    <div className="lg:w-3/6 lg:p-6">
                        <h1 className='text-4xl font-extrabold mb-10'>Confiez votre  bien immobilier à notre équipe</h1>
                        <p className='mb-10'>Confiez la gestion de votre copropriété à un partenaire de confiance, présent et à l&apos;écoute de vos besoins.
                            Chez Qavah Group, nous comprenons l&apos;importance d&apos;une gestion efficace, transparente et de proximité pour assurer la tranquillité
                            de votre immeuble et la valorisation de votre patrimoine.</p>
                        <Link href="/contact" className="w-2/6 bg-[#ad8954] text-white rounded-md py-2 px-6 flex justify-between items-center">
                            Contacter <AiOutlineLogin />
                        </Link>
                    </div>

                    <div className="lg:h-full h-[30vh] lg:w-3/6 overflow-hidden relative rounded-xl">
                        <Image src="/syndicat.jpeg" layout="fill" objectFit="cover" alt="bay" quality={100} />
                    </div>
                </div>
            </div>

            <div className="lg:flex px-4 lg:px-0 lg:w-4/5 mx-auto gap-6 my-40">
                <h1 className="text-3xl lg:text-6xl lg:w-1/2 font-extrabold mb-4">Pourquoi choisir Qavah Group comme votre syndic ?</h1>
                <div className='lg:w-1/2'>
                    <div className="mb-4">
                        <h1 className="flex gap-2 items-center font-bold text-xl mb-2"><AiFillCheckCircle className="text-[#ad8954]" />Proximité et disponibilité :</h1>
                        <p className="ml-6">Nous analysons le marché et évaluons votre bien pour déterminer sa valeur optimale.</p>
                    </div>

                    <div className="mb-4">
                        <h1 className="flex gap-2 items-center font-bold text-xl mb-2"><AiFillCheckCircle className="text-[#ad8954]" />Gestion sur mesure :</h1>
                        <p className="ml-6">Nous adaptons nos services aux spécificités de votre immeuble et aux besoins des copropriétaires, en offrant une approche personnalisée pour chaque copropriété.</p>
                    </div>

                    <div className="mb-4">
                        <h1 className="flex gap-2 items-center font-bold text-xl"><AiFillCheckCircle className="text-[#ad8954]" />Transparence financière :</h1>
                        <p className="ml-6">Nos rapports financiers sont clairs et accessibles, afin que vous puissiez suivre les dépenses de votre copropriété en toute confiance.</p>
                    </div>
                </div>
            </div>

            <div className='w-4/5 mx-auto mb-20'>
                <h1 className='text-4xl font-extrabold mb-6'>Un syndic au service de votre tranquillité</h1>
                <p>Avec Qavah Group, bénéficiez d&apos;une gestion sereine et d&apos;un accompagnement sur mesure, au cœur des villes, là où vous en avez besoin. Nous mettons tout en œuvre pour protéger et faire fructifier votre patrimoine immobilier.</p>
            </div>
        </div>
    )
}

export default Vendre;