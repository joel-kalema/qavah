'use client'

import Image from "next/image";
import Link from "next/link";
import Offres from './_component/offres';
import { AiOutlineSend } from "react-icons/ai";
import Gallery from '@/components/_home/gallery';
import { AiFillCheckCircle } from "react-icons/ai";

import { LuChevronRightCircle } from "react-icons/lu";
import { IoChevronForwardSharp } from "react-icons/io5";
import CarouselCustomNavigation from "./_component/caroucelle"
import { GiSpeedometer } from "react-icons/gi";
import { RiDoubleQuotesL } from "react-icons/ri";
import { Prompt } from "next/font/google";

const title = Prompt({
    subsets: ['latin', 'latin-ext', 'thai', 'vietnamese'],
    weight: '800'
})

export default function Presentation() {
    return (
        <div className="pt-20">
            <div className="h-[70vh] lg:h-[80vh] mb-40 lg:w-11/12 mx-auto overflow-hidden relative rounded-3xl">
                <Image src="/home2.jpeg" layout="fill" objectFit="cover" alt="bay" quality={100} />
                <div className="absolute bottom-0 lg:bottom-10  p-4 lg:left-10 lg:flex lg:w-4/6 justify-between items-center gap-10 bg-[#0000003b] md:bg-[#0000006d] backdrop-blur-sm md:backdrop-blur-md rounded-2xl">
                    <div className="text-white mb-4 w-5/6">
                        <h1 className={`${title.className} text-2xl lg:text-4xl text-white font-extrabold mb-6`}>Concrétisons votre projet d&apos;achat d&apos;un bien immobilier</h1>
                        <p className="hidden w-[85%] mb-4 md:block">Réalisez votre rêve immobilier avec notre accompagnement personnalisé.
                            Nous vous guidons à chaque étape pour concrétiser votre projet d&apos;achat.
                            Ensemble, trouvons le bien idéal qui correspond à vos attentes.</p>
                        <Link href="/contact" className='py-2 px-6 bg-[#ad8954] rounded-3xl text-sm mb-2 font-extrabold'>Contacter</Link>
                    </div>
                    <div className="lg:w-2/6 h-[10rem] md:h-[12rem] md:flex items-start gap-4">
                        <CarouselCustomNavigation />
                    </div>
                </div>
            </div>
            <div className="px-4 lg:px-40">
                <div className="lg:flex gap-10 mb-20">
                    <h1 className={`${title.className} text-3xl lg:text-5xl font-extrabold lg:w-3/6 mb-4 lg:mb-0`}>Réussissez votre achat immobilier avec Qavah Group</h1>
                    <p className="lg:w-3/6">Chacun possède une bonne raison pour acheter un appartement ou une maison :
                        votre famille qui s&apos;agrandit, une nouvelle carrière qui commence, un projet de vie qui aboutit…
                        Nous vous proposons dans votre ville et votre quartier la sélection de biens qui donneront vie à votre projet.</p>
                </div>
                <div className="flex">

                    <div className="flex mx-auto gap-10 bg-[#ececec] rounded-xl p-6">
                        <div className="lg:w-3/6">
                            <p className="lg:text-xl mb-6">At Qavah, we facilitate the acquisition of land by supporting you
                                at every step of the process. Whether you are an investor seeking the ideal plot or an
                                individual looking to build your dream home, our team is here to provide personalized advice.
                                We identify the most interesting land opportunities while respecting your needs and budget.</p>

                            <div className="text-[#fff] bg-[#303030] p-4 rounded-xl flex justify-between items-center">
                                <div className="">
                                    <p className="text-[#ad8954] font-extrabold text-xl mb-4">Procédure d&apos;achat :</p>
                                    <p className="flex gap-2 items-center font-bold text-xl mb-2"><AiFillCheckCircle className="text-[#ad8954]" />Recherche et sélection</p>
                                    <p className="flex gap-2 items-center font-bold text-xl mb-2"><AiFillCheckCircle className="text-[#ad8954]" />Évaluation et négociation</p>
                                    <p className="flex gap-2 items-center font-bold text-xl mb-2"><AiFillCheckCircle className="text-[#ad8954]" />Acquisition</p>
                                </div>
                                <div className="w-[5rem] h-[5rem] hidden bg-[#ad8954] rounded-[50%] lg:flex justify-center items-center">
                                    <GiSpeedometer className="text-6xl text-[#fff]" />
                                </div>
                            </div>
                        </div>

                        <div className="hidden lg:block h-full w-3/6 overflow-hidden relative rounded-xl">
                            <Image src="/louer1.jpeg" layout="fill" objectFit="cover" alt="bay" quality={100} />
                        </div>

                    </div>
                </div>
            </div>


            <div className="flex mx-4 lg:w-5/6 lg:mx-auto mt-20 lg:mt-40">

                <div className="flex flex-col-reverse lg:flex-row mx-auto gap-6 lg:gap-20">
                    <div className="lg:w-3/6">
                        <div>
                            <h1 className={`${title.className} text-4xl font-extrabold mb-4`}>Pourquoi choisir Qavah pour l&apos;achat de vos terrains ?</h1>
                            <div className="mb-4">
                                <h1 className="flex gap-2 items-start lg:items-center font-bold text-xl mb-2"><AiFillCheckCircle className="text-[#ad8954]" />Un réseau étendu de partenaires locaux : </h1>
                                <p className="ml-6">Nos relations avec des promoteurs, des agences gouvernementales et des partenaires fonciers nous permettent d&apos;avoir accès à des terrains exclusifs avant même qu&apos;ils n&apos;arrivent sur le marché.</p>
                            </div>

                            <div className="mb-4">
                                <h1 className="flex gap-2 items-start lg:items-center font-bold text-xl mb-2"><AiFillCheckCircle className="text-[#ad8954]" />Des opportunités sur mesure : </h1>
                                <p className="ml-6">Que vous cherchiez une petite parcelle pour un projet résidentiel ou un terrain plus vaste pour une opération commerciale, nous trouvons pour vous des terrains adaptés à votre vision.</p>
                            </div>

                            <div className="mb-4">
                                <h1 className="flex gap-2 items-start lg:items-center font-bold text-xl"><AiFillCheckCircle className="text-[#ad8954]" />Un accompagnement personnalisé :</h1>
                                <p className="ml-6">Nous vous fournissons non seulement des conseils stratégiques, mais également des services post-acquisition, tels que l&apos;aide à la planification des travaux et la gestion des formalités pour démarrer votre projet dans les meilleures conditions.</p>
                            </div>
                        </div>
                    </div>

                    <div className="h-[30vh] lg:h-full lg:w-3/6 overflow-hidden relative rounded-xl mb-2">
                        <Image src="/plot.jpeg" layout="fill" objectFit="cover" alt="bay" quality={80} />
                    </div>

                </div>
            </div>


            <Gallery />
            <Offres />

            <div className="lg:flex justify-between px-4 lg:px-0 lg:w-4/5 mx-auto mt-40 items-center">
                <div className="mb-4 lg:mb-0">
                    <h1 className="lg:text-end font-extrabold text-6xl">Menus</h1>
                    <h1 className="lg:text-end font-extrabold text-6xl text-[#ad8954]">Qavah Group</h1>
                </div>
                <div>
                    <p className="flex gap-4 items-center mb-2"><LuChevronRightCircle className="text-3xl lg:text-xl text-[#ad8954]" />Explorez les offres actuelles spécialement sélectionnées pour vous.</p>
                    <p className="flex gap-4 items-center mb-2"><LuChevronRightCircle className="text-3xl lg:text-xl text-[#ad8954]" />Ne manquez pas les meilleures opportunités du moment, disponibles dès maintenant.</p>
                    <p className="flex gap-4 items-center mb-2"><LuChevronRightCircle className="text-3xl lg:text-xl text-[#ad8954]" />Faites un pas vers la découverte de biens uniques qui correspondent à vos attentes.</p>
                </div>
            </div>

            <div className="lg:flex justify-between gap-5 w-5/6 mx-auto my-20">
                <div className="lg:w-1/3 h-[25rem] mb-6 lg:mb-0 relative overflow-hidden rounded-3xl">
                    <div className="z-30 absolute top-3 right-3 transition duration-300 ease-in-out text-white p-3 rounded-full text-2xl flex justify-center items-center">
                        <AiOutlineSend />
                    </div>
                    <Image src="/about.jpeg" layout="fill" objectFit="cover" alt="bay" quality={100} />
                    <div className="absolute bg-[#0000006d] backdrop-blur-md w-[93%] m-auto h-[8rem] bottom-3 left-3 right-3 rounded-2xl p-4">
                        <h1 className="text-white font-bold mb-2">Gérez vos biens en toute sérénité</h1>
                        <p className="text-[#d8d8d8] text-xs">Confiez-nous la gestion locative et administrative de vos propriétés.</p>
                    </div>
                </div>
                <div className="lg:w-1/3 h-[25rem] mb-6 lg:mb-0 relative overflow-hidden rounded-3xl">
                    <div className=" z-30 absolute top-3 right-3 transition duration-300 ease-in-out text-white p-3 rounded-full text-2xl flex justify-center items-center">
                        <AiOutlineSend />
                    </div>
                    <Image src="/salon.jpeg" layout="fill" objectFit="cover" alt="bay" quality={100} />
                    <div className="absolute bg-[#0000006d] backdrop-blur-md w-[93%] m-auto h-[8rem] bottom-3 left-3 right-3 rounded-2xl p-4">
                        <h1 className="text-white font-bold mb-2">Trouvez votre prochaine location</h1>
                        <p className="text-[#d8d8d8] text-xs">Accédez à une large gamme de logements adaptés à vos besoins.</p>
                    </div>
                </div>
                <div className="lg:w-1/3 h-[25rem] mb-6 lg:mb-0 relative overflow-hidden rounded-3xl">
                    <div className=" z-30 absolute top-3 right-3 transition duration-300 ease-in-out text-white p-3 rounded-full text-2xl flex justify-center items-center">
                        <AiOutlineSend />
                    </div>
                    <Image src="/plot1.jpeg" layout="fill" objectFit="cover" alt="bay" quality={100} />
                    <div className="absolute bg-[#0000006d] backdrop-blur-md w-[93%] m-auto h-[8rem] bottom-3 left-3 right-3 rounded-2xl p-4">
                        <h1 className="text-white font-bold mb-2">Explorez nos terrains disponibles</h1>
                        <p className="text-[#d8d8d8] text-xs">Parcourez une sélection exclusive de terrains prêts à être développés.</p>
                    </div>
                </div>

                <div className="lg:w-1/3 h-[25rem] mb-6 lg:mb-0 relative overflow-hidden rounded-3xl">
                    <div className=" z-30 absolute top-3 right-3 transition duration-300 ease-in-out text-white p-3 rounded-full text-2xl flex justify-center items-center">
                        <AiOutlineSend />
                    </div>
                    <Image src="/syndicat.jpeg" layout="fill" objectFit="cover" alt="bay" quality={100} />
                    <div className="absolute bg-[#0000006d] backdrop-blur-md w-[93%] m-auto bottom-3 left-3 right-3 rounded-2xl p-4">
                        <h1 className="text-white font-bold mb-2">Découvrez notre offre de syndic de copropriété</h1>
                        <p className="text-[#d8d8d8] text-xs">Bénéficiez d&apos;une gestion transparente et efficace de votre copropriété.</p>
                    </div>
                </div>
            </div>

            <div className="lg:flex gap-4 w-5/6 mx-auto items-end">
                <h1 className="text-2xl font-extrabold">Explorez nos bien :</h1>
                <Link href='#' className="text-[#ad8954] underline underline-offset-2 flex items-center gap-3">Nos biens à moins de 100 000 $<IoChevronForwardSharp /></Link>
                <Link href='#' className="text-[#ad8954] underline underline-offset-2 flex items-center gap-3">Spécial investissement locatif en Pinel<IoChevronForwardSharp /></Link>
                <Link href='#' className="text-[#ad8954] underline underline-offset-2 flex items-center gap-3">Nos terrains à bâtir<IoChevronForwardSharp /></Link>
            </div>

            <div className='w-4/4 md:w-3/4 my-40 z-30 mx-auto'>
                <div className='bg-[#fff] p-6 shadow-lg'>
                    <div className='p-4 md:p-10 md:bg-[#1b1c2100] border-2 border-[#343434]'>
                        <p className='text-2xl lg:text-4xl text-[#3f3f3f] flex gap-5 items-start lg:items-center'><RiDoubleQuotesL className='text-6xl' />
                            Avec Qavah, vous n&apos;achetez pas simplement un terrain :
                        </p>
                        <h2 className='text-[#000000] mt-4 lg:text-2xl'>vous bénéficiez d&apos;un partenaire fiable et expérimenté pour faire de votre projet un succès.
                            Que vous soyez à la recherche d&apos;un investissement à fort rendement ou d&apos;un
                            terrain pour construire votre futur chez-vous, nous mettons tout en œuvre pour que votre
                            expérience d&apos;achat soit fluide, transparente et satisfaisante.</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}