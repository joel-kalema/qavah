'use client'
import React from 'react';
import CarouselCustomNavigation from "./_component/caroucelle"
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineLogin } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
import { Prompt } from "next/font/google";

const title = Prompt({
    subsets: ['latin', 'latin-ext', 'thai', 'vietnamese'],
    weight: '800'
})


const Vendre = () => {

    return (
        <div className="pt-20">

            <div className="md:flex w-5/6 mx-auto justify-between gap-20 pt-20 lg:pt-40 pb-20 items-end">
                <h1 className={`${title.className} text-4xl lg:text-6xl md:w-2/3 font-extrabold mb-6 md:mb-0`}>Réussissons ensemble la vente de votre bien immobilier&#39;&#39;</h1>
                <div className="md:w-1/3 text-sm">
                    <p>Maximisez la vente de votre bien immobilier avec notre expertise.
                        Ensemble, nous trouvons les acheteurs parfaits et optimisons chaque étape.
                        Confiez-nous votre projet pour une vente rapide et réussie.</p>
                </div>
            </div>
            <div className="h-[70vh] lg:h-[70vh] mb-20 md:mb-40 lg:w-5/6 mx-auto overflow-hidden relative rounded-3xl">
                <Image src="/vendre.jpeg" layout="fill" objectFit="cover" alt="bay" quality={100} />
                <div className="absolute bottom-0 lg:bottom-10 p-4 lg:left-10 lg:flex lg:w-3/6 justify-between items-center gap-10 bg-[#0000003b] md:bg-[#0000006d] backdrop-blur-sm md:backdrop-blur-md rounded-2xl">
                    <div className="text-white w-4/6">
                        <h1 className=" text-white mb-6">Des espaces adaptés à votre style de vie et à vos besoins</h1>
                        <Link href="/contact" className='inline-block text-white mb-4 py-2 px-6 bg-[#ad8954] rounded-3xl text-sm font-extrabold'>Contacter</Link>
                    </div>
                    <div className="lg:w-2/6 h-[10rem] md:flex items-start gap-4">
                        <CarouselCustomNavigation />
                    </div>
                </div>
            </div>

            <div className="flex lg:w-4/5 mx-auto">
                <div className="flex mx-auto gap-10 rounded-xl flex-col-reverse lg:flex-row">
                    <div className="lg:w-3/6 lg:p-6">
                        <h1 className='text-4xl hidden md:block font-extrabold mb-10'>Confiez votre vente à une équipe experte de vos quartiers</h1>
                        <p className='mb-10'>Vous souhaitez vendre votre bien immobilier rapidement et au meilleur prix ? Chez Qavah Group,
                            nous mettons tout en œuvre pour transformer votre projet en succès. Notre équipe d&apos;experts en
                            immobilier vous accompagne à chaque étape du processus, en vous offrant une approche personnalisée et adaptée à vos besoins.</p>
                        <Link href="/contact" className="w-2/6 bg-[#ad8954] text-white rounded-md py-2 px-6 flex justify-between items-center">
                            Contacter <AiOutlineLogin />
                        </Link>
                    </div>

                    <div className="lg:h-full h-[30vh] lg:w-3/6 overflow-hidden relative rounded-xl">
                        <Image src="/vente01.jpg" layout="fill" objectFit="cover" alt="bay" quality={100} />
                    </div>
                    <h1 className='md:hidden text-4xl font-extrabold mb-4'>Confiez votre vente à une équipe experte de vos quartiers</h1>
                </div>
            </div>

            <div className="lg:flex lg:w-4/5 px-4 mx-auto gap-6 my-40">
                <h1 className="text-3xl lg:text-6xl lg:w-1/2 font-extrabold mb-4">Pourquoi choisir Qavah pour la vente de votre bien immobilier ?</h1>
                <div className='lg:w-1/2'>
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