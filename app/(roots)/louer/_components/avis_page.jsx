'use client'

import Image from "next/image";


export default function AvisPage() {
    return (
        <div className=" mx-auto relative flex  my-20">
            <div className="overflow-hidden relative h-[70vh] w-4/6 rounded-r-3xl mt-20">
                <Image src="/avis.jpg" layout="fill" objectFit="cover" alt="bay" quality={100} />
            </div>

        <div className="w-3/6 py-10 px-14 glass absolute right-20 bottom-40">
            <h1 className="text-4xl mb-10 text-[#ad8954] font-extrabold">Votre avis nous est précieux</h1>
            <p className="font-bold text-2xl">&#39;&#39;Suivi clair et précis, équipe très professionnelle qui vous aide, 
            très patients. Premier logement pour mon cas et l&lsquo;expérience était parfaite ! &#39;&#39;</p>
        </div>
    </div>
    );
}