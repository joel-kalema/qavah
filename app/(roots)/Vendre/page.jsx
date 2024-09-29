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
            <div className="h-[90vh] mb-40 w-11/12 mx-auto overflow-hidden relative rounded-3xl">
                <Image src="/vendre.jpeg" layout="fill" objectFit="cover" alt="bay" quality={100} />
                <div className="absolute bottom-10  p-4 left-10 flex w-4/6 justify-between items-center gap-10 bg-[#0000006d] backdrop-blur-md rounded-2xl">
                    <div className="text-white w-5/6">
                        <h1 className="text-4xl text-white font-extrabold mb-6">Réussissons ensemble la vente de votre bien immobilier</h1>
                        <div className="btn flex justify-between gap-4 p-1 bg-[#ffffff35] rounded-3xl pr-10">
                            <Link href="/contact" className='py-2 px-6 bg-[#ad8954] rounded-3xl text-sm font-extrabold'>Contacter</Link>
                            <p className="flex items-center float-right text-[#fff] gap-5 ml-10"><CiCalendarDate className="text-2xl"/>Expertise, accompagnement, transparence, rapidité, succès.</p>
                        </div>
                    </div>
                    <div className="w-1/6 h-[10rem]">
                        <CarouselCustomNavigation />
                    </div>
                </div>
            </div>

            <div className="flex w-4/5 mx-auto">
                <div className="flex mx-auto gap-10 bg-[#ececec] rounded-xl p-6">
                    <div className="w-3/6 p-6">
                        <h1 className='text-4xl font-extrabold mb-10'>Confiez votre vente à une équipe experte de vos quartiers</h1>
                        <p className='mb-10'>Vous souhaitez vendre votre bien immobilier rapidement et au meilleur prix ? Chez Qavah Group,
                            nous mettons tout en œuvre pour transformer votre projet en succès. Notre équipe d&apos;experts en
                            immobilier vous accompagne à chaque étape du processus, en vous offrant une approche personnalisée et adaptée à vos besoins.</p>
                        <Link href="/contact" className="w-2/6 bg-[#ad8954] text-white rounded-md py-2 px-6 flex justify-between items-center">
                            Contacter <AiOutlineLogin />
                        </Link>
                    </div>

                    <div className="h-full w-3/6 overflow-hidden relative rounded-xl">
                        <Image src="/vente01.jpg" layout="fill" objectFit="cover" alt="bay" quality={100} />
                    </div>
                </div>
            </div>

            <div className="flex w-4/5 mx-auto gap-6 my-40">
                <h1 className="text-6xl w-1/2 font-extrabold mb-4">Pourquoi choisir Qavah pour la vente de votre bien immobilier ?</h1>
                <div className='w-1/2'>
                    <div className="mb-4">
                        <h1 className="flex gap-2 items-center font-bold text-xl mb-2"><AiFillCheckCircle className="text-[#ad8954]" />Évaluation précise :</h1>
                        <p className="ml-6">Nous analysons le marché et évaluons votre bien pour déterminer sa valeur optimale.</p>
                    </div>

                    <div className="mb-4">
                        <h1 className="flex gap-2 items-center font-bold text-xl mb-2"><AiFillCheckCircle className="text-[#ad8954]" />Marketing ciblé :</h1>
                        <p className="ml-6">Grâce à nos stratégies de communication innovantes, nous mettons en avant votre bien auprès d&apos;acheteurs potentiels qualifiés.</p>
                    </div>

                    <div className="mb-4">
                        <h1 className="flex gap-2 items-center font-bold text-xl"><AiFillCheckCircle className="text-[#ad8954]" />Accompagnement complet :</h1>
                        <p className="ml-6">De la première consultation à la finalisation de la vente, nous sommes à vos côtés pour vous guider et répondre à toutes vos questions.</p>
                    </div>

                    <div className="mb-4">
                        <h1 className="flex gap-2 items-center font-bold text-xl"><AiFillCheckCircle className="text-[#ad8954]" />Expérience et savoir-faire :</h1>
                        <p className="ml-6">Forts de notre expertise et d&apos;une connaissance approfondie du marché, nous maximisons vos chances de vendre rapidement, tout en respectant vos attentes financières.</p>
                    </div>
                </div>
            </div>

            <div className='w-4/5 mx-auto'>
                <h1 className='text-4xl font-extrabold mb-6'>Votre satisfaction, notre priorité</h1>
                <p>Nous comprenons que la vente d&apos;un bien immobilier est une décision importante. C&apos;est pourquoi nous nous engageons à vous offrir un service sur mesure, transparent et efficace, afin de vous garantir une vente réussie, en toute sérénité.</p>
            </div>
        </div>
    )
}

export default Vendre;