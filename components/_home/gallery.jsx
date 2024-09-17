'use client'

import { Carousel, Typography, Button } from "@material-tailwind/react";

import Image from "next/image";

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
                    <Image src="/home4.jpg" layout="fill" objectFit="cover" alt="bay" quality={100} />
                </div>
                <div className="w-3/6 gap-6 flex flex-col">
                    <div className="h-[16.5rem] w-6/6 overflow-hidden relative rounded-xl">
                        <Image src="/home4.jpg" layout="fill" objectFit="cover" alt="bay" quality={100} />
                    </div>
                    <div className="flex gap-6">
                        <div className="h-[20rem] w-3/6 overflow-hidden relative rounded-xl">
                            <Image src="/home4.jpg" layout="fill" objectFit="cover" alt="bay" quality={100} />
                        </div>
                        <div className="h-[20rem] w-3/6 overflow-hidden relative rounded-xl">
                            <Image src="/home4.jpg" layout="fill" objectFit="cover" alt="bay" quality={100} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}