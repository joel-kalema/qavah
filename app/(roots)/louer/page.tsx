'use client'

import Image from "next/image";
import Link from "next/link";
import WhyPage from "./_components/why_page";
import AvisPage from "./_components/avis_page"
import CarouselCustomNavigation from "./_components/caroucelle"
import { CiCalendarDate } from "react-icons/ci";


export default function Louer() {
    return (
        <div className="">
            <div className="h-[70vh] lg:h-[90vh] mb-40 lg:w-11/12 mx-auto overflow-hidden relative rounded-3xl">
                <Image src="/home3.jpeg" layout="fill" objectFit="cover" alt="bay" quality={100} />
                <div className="absolute bottom-0 lg:bottom-10  p-4 lg:left-10 lg:flex lg:w-4/6 justify-between items-center gap-10 bg-[#0000006d] backdrop-blur-md rounded-2xl">
                    <div className="text-white w-5/6">
                        <h1 className="text-2xl lg:text-4xl text-white font-extrabold mb-6">Trouvons la location qui vous ressemble</h1>
                        <div className="btn hidden lg:flex justify-between gap-4 p-1 bg-[#ffffff35] rounded-3xl pr-10">
                            <Link href="/contact" className='py-2 px-6 bg-[#ad8954] rounded-3xl text-sm font-extrabold'>Contacter</Link>
                            <p className="flex items-center float-right text-[#fff] gap-5 ml-10"><CiCalendarDate className="text-2xl" /> Des espaces adaptés à votre style de vie et à vos besoins</p>
                        </div>
                    </div>
                    <div className="lg:w-1/6 h-[10rem] flex items-start gap-4">
                        <Link href="/contact" className='inline-block text-white lg:hidden py-2 px-6 bg-[#ad8954] rounded-3xl text-sm font-extrabold'>Contacter</Link>
                        <CarouselCustomNavigation />
                    </div>
                </div>
            </div>

            <WhyPage />
            <AvisPage />
        </div>
    );
}