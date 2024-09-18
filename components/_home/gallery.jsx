'use client'

import Image from "next/image";
import { FaRegHeart } from "react-icons/fa6";

export default function Gallery() {
    return (
        <div className="w-5/6 mx-auto px-10 py-40">
            <div className="flex gap-10 mb-16">
                <h1 className="text-5xl font-extrabold w-3/6">Découvrez votre propriété idéale</h1>
                <p className="w-3/6">Embarquez pour un voyage de découverte à travers des collections 
                exclusives de maisons, de propriétés de luxe pour répondre à vos aspirations et inspirer votre imagination</p>
            </div>
            <div className="flex gap-6 overflow-hidden">
                <div className="h-[38rem] w-3/6 overflow-hidden relative rounded-xl">
                    <Image src="/house1.jpg" layout="fill" objectFit="cover" alt="bay" quality={100} />
                    <div className="absolute bg-[#0000006d] backdrop-blur-md w-[93%] m-auto bottom-3 left-3 right-3 rounded-2xl p-4">
                        <h1 className="text-white text-2xl font-bold mb-2">Découvrez notre offre de syndic de copropriété</h1>
                        <p className="text-[#d8d8d8] text-xs">Bénéficiez d'une gestion transparente et efficace de votre copropriété.</p>
                    </div>
                </div>
                <div className="w-3/6 gap-6 flex flex-col">
                    <div className="h-[16.5rem] w-6/6 overflow-hidden relative rounded-xl">
                        <Image src="/house2.jpg" layout="fill" objectFit="cover" alt="bay" quality={100} />
                    </div>
                    <div className="flex gap-6">
                        <div className="h-[20rem] w-3/6 overflow-hidden relative rounded-xl">
                            <Image src="/house3.jpg" layout="fill" objectFit="cover" alt="bay" quality={100} />
                        </div>
                        <div className="h-[20rem] w-3/6 overflow-hidden relative rounded-xl">
                            <Image src="/house4.jpg" layout="fill" objectFit="cover" alt="bay" quality={100} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}