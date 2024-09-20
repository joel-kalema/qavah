'use client'

import Image from "next/image";
import { Button } from "@material-tailwind/react";

export default function Contacts() {
    return (
        <div className="-mb-[5rem]">
            <div className="">
                <div className="h-[100vh] w-6/6 overflow-hidden relative rounded-xl">
                    <Image src="/contact.jpeg" layout="fill" objectFit="cover" alt="bay" quality={100} />
                    <div className="absolute left-40 top-10 text-white">
                        <div className="text-white mb-20">
                            <h1 className="text-center text-6xl mb-4">Et si on se parlait ?</h1>
                            <p className="w-3/4 mx-auto text-center">Profitez de nos experts pour y voir plus clair et concrétiser votre acquisition.</p>
                        </div>

                        <div className="glass rounded-2xl py-8 px-6 shadow-xl ml-6 w-3/4  relative z-20">
                            <h1 className="text-2xl font-extrabold mb-2">Service client</h1>
                            <p className="text-sm mb-6">Vous avez une question sur votre achat immobilier avec nous ?</p>
                            <Button variant="outlined">Accder au formulaire</Button>
                        </div>

                        <div className="glass rounded-2xl py-8 px-6 shadow-xl -mt-2 ml-12 w-3/4">
                            <h1 className="text-2xl font-extrabold mb-2">Par téléphone</h1>
                            <p className="text-sm mb-6">Service et appels gratuits du lundi au samedi de 9h à 20h et le dimanche de 10h à 18h.</p>
                            <Button variant="outlined" className="text-white">+243 979 797 979</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}