'use client'

import Image from "next/image";

export default function Presentation() {
  return (
    <div className="relative  h-[100vh] overflow-hidden p-40 flex gap-5">
        <div className="w-1/2">
            <h1 className="text-6xl font-extrabold">Vos conseillers immobiliers de confiance</h1>
            <div></div>
        </div>
        <div className="w-1/2">
            <p> la plateforme de référence pour toutes vos transactions immobilières. Que vous souhaitiez acheter, vendre, ou gérer vos biens, nous sommes là pour vous accompagner à chaque étape. Avec un réseau d’agents professionnels et un large choix de propriétés, nous rendons vos projets immobiliers simples, sûrs et efficaces.</p>
            <h2 className="text-[#ad8954] my-4 font-extrabold">Pourquoi Nous choisir?</h2>
            <div className="flex justify-between text-sm my-10">
                <div className="bg-[#e8e8e8] py-4 px-8 rounded-xl">
                    <h1 className="text-3xl font-extrabold mb-4">+100</h1>
                    <p>Unités prêtes</p>
                </div>
                <div className="bg-[#c7c7c7] py-4 px-8 rounded-xl">
                    <h1 className="text-3xl font-extrabold mb-4">+60K</h1>
                    <p>Clients satisfaits</p>
                </div>
                <div className="bg-[#ad8954] py-4 px-8 text-[#fff] rounded-xl">
                    <h1 className="text-3xl font-extrabold mb-4">+70K</h1>
                    <p>Collections de propriétés</p>
                </div>
            </div>
        </div>


    </div>
  );
}