'use client'

import Image from "next/image";
import WhyPage from "./_components/why_page";
import AvisPage from "./_components/avis_page"
import CarouselCustomNavigation from "./_components/caroucelle"
import { CiCalendarDate } from "react-icons/ci";


export default function Louer() {
    return (
        <div className="">
            <div className="h-[90vh] mb-40 w-11/12 mx-auto overflow-hidden relative rounded-3xl">
                <Image src="/home3.jpeg" layout="fill" objectFit="cover" alt="bay" quality={100} />
                <div className="absolute bottom-10  p-4 left-10 flex w-4/6 justify-between items-center gap-10 bg-[#00000037] backdrop-blur-xl rounded-2xl">
                    <div className="text-white w-5/6">
                        <h1 className="text-4xl text-white font-extrabold mb-6">Trouvons la location qui vous ressemble</h1>
                        <div className="btn flex gap-4 p-1 bg-[#ffffff35] rounded-3xl">
                                <p className='py-2 px-6 bg-[#fff] bg-[#ffffff35] rounded-3xl text-sm font-extrabold'>See More</p>
                                <p className="py-2 px-6 bg-[#ffffff35] rounded-3xl text-sm text-[#fff] font-extrabold">Subscribe</p>
                               <p className="flex items-center float-right text-[#fff] gap-5 ml-10"><CiCalendarDate className="text-2xl"/> Réussissez votre achat immobilier avec Qavah</p> 
                            </div>
                    </div>
                    <div className="w-1/6 h-[10rem]">
                        <CarouselCustomNavigation />
                        {/* <div className="h-[4rem] bg-white"></div> */}
                    </div>
                </div>
            </div>

            <WhyPage />
            <AvisPage />
        </div>
    );
}