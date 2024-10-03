'use client'

import Image from "next/image";
import { Prompt } from "next/font/google";

const title = Prompt({
    subsets: ['latin', 'latin-ext', 'thai', 'vietnamese'],
    weight: '800'
})


export default function AvisPage() {
    return (
        <div className="lg:py-40 py-20 bg-[#fff] rounded-xl lg:rounded-t-[6rem]">
            <div className="flex lg:w-5/6 mx-auto">
                <div className="md:flex mx-auto gap-20 rounded-xl p-6">
                    <div className="h-[30vh] lg:h-[50vh] md:w-3/6 overflow-hidden relative rounded-xl shadow-xl mb-6 md:mb-0">
                        <Image src="/impression.jpeg" layout="fill" objectFit="cover" alt="bay" quality={100} />
                    </div>

                    <div className="md:w-3/6 ">
                        <h1 className={`${title.className} text-4xl lg:text-6xl mb-16 text-[#ad8954] font-extrabold`}>Votre avis nous est précieux</h1>
                        <p className="text-2xl lg:text-3xl">Suivi clair et précis, équipe très professionnelle qui vous aide,
                            très patients. Premier logement pour mon cas et l&lsquo;expérience était parfaite ! &#39;&#39;</p>
                    </div>
                </div>
            </div>
        </div>
    );
}