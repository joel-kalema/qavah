'use client'

import Image from "next/image";
import Link from "next/link";
import WhyPage from "./_components/why_page";
import AvisPage from "./_components/avis_page"
import CarouselCustomNavigation from "./_components/caroucelle"
import { Prompt } from "next/font/google";

const title = Prompt({
    subsets: ['latin', 'latin-ext', 'thai', 'vietnamese'],
    weight: '800'
})


export default function Louer() {
    return (
        <div className="pt-10 bg-[#eee]">
            <div className="md:flex w-5/6 mx-auto justify-between gap-20 pt-20 lg:pt-40 pb-20 items-end">
                <h1 className={`${title.className} text-4xl lg:text-6xl md:w-2/3 font-extrabold mb-6 md:mb-0`}>Trouvons la location qui vous ressemble&#39;&#39;</h1>
                <div className="md:w-1/3 text-sm">
                    <p>Trouvez la location idéale qui correspond à votre style et vos envies.
                    Des espaces uniques et soigneusement sélectionnés pour vous.
                    Vivez des expériences authentiques dans un lieu qui vous ressemble.</p>
                </div>
            </div>
            <div className="h-[70vh] lg:h-[70vh] mb-20 md:mb-40 lg:w-5/6 mx-auto overflow-hidden relative rounded-3xl">
                <Image src="/home3.jpeg" layout="fill" objectFit="cover" alt="bay" quality={100} />
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

            <WhyPage />
            <AvisPage />
        </div>
    );
}