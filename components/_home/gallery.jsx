'use client'

import Image from "next/image";
export default function Gallery() {
    return (
        <div className="lg:w-5/6 mx-auto px-4 lg:px-10 py-20 lg:py-40">
            <div className="lg:flex gap-10 mb-16">
                <h1 className="text-3xl lg:text-5xl font-extrabold lg:w-3/6 mb-2 lg:mb-0">Découvrez votre propriété idéale</h1>
                <p className="lg:w-3/6">Embarquez pour un voyage de découverte à travers des collections 
                exclusives de maisons, de propriétés de luxe pour répondre à vos aspirations et inspirer votre imagination</p>
            </div>
            <div className="lg:flex gap-6 overflow-hidden">
                <div className="h-[20rem] lg:h-[38rem] mb-6 lg:mb-0 lg:w-3/6 overflow-hidden relative rounded-xl">
                    <Image src="/house1.jpeg" layout="fill" objectFit="cover" alt="bay" quality={100} />
                    <div className="absolute bg-[#0000006d] backdrop-blur-md w-[93%] m-auto bottom-3 left-3 right-3 rounded-2xl p-4">
                        <h1 className="text-white lg:text-2xl font-bold mb-2">Découvrez notre offre de syndic de copropriété</h1>
                        <p className="text-[#d8d8d8] text-xs">Bénéficiez d&apos;une gestion transparente et efficace de votre copropriété.</p>
                    </div>
                </div>
                <div className="lg:w-3/6 gap-6 flex flex-col">
                    <div className="h-[10rem] lg:h-[16.5rem] w-6/6 overflow-hidden relative rounded-xl">
                        <Image src="/salon.jpeg" layout="fill" objectFit="cover" alt="bay" quality={100} />
                    </div>
                    <div className="flex gap-6">
                        <div className="h-[10rem] lg:h-[20rem] w-3/6 overflow-hidden relative rounded-xl">
                            <Image src="/house3.jpeg" layout="fill" objectFit="cover" alt="bay" quality={100} />
                        </div>
                        <div className="h-[10rem] lg:h-[20rem] w-3/6 overflow-hidden relative rounded-xl">
                            <Image src="/house4.jpeg" layout="fill" objectFit="cover" alt="bay" quality={100} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}