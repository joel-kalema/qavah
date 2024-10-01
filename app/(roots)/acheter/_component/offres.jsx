import { BiSolidOffer } from "react-icons/bi";

export default function Offres() {
    return (
        <div className="lg:w-4/6 mx-auto px-4 mt-20 mb-40">
            <div className="flex gap-7 items-center my-10">
                <h1 className="text-3xl lg:text-5xl font-extrabold">Offre en cash</h1>
                <div className="shadow-design shadow02 w-20 h-20 rounded-[50%] flex justify-center items-center">
                    <BiSolidOffer className="drop-shadow-lg text-[#ad8954] text-5xl"/>
                </div>
            </div>

            <div className="text-center shadow-xl">
                <div className="flex justify-between">
                    <div className="w-1/3">
                        <h1 className="bg-[#ededed] py-2 font-extrabold">Items</h1>
                        <p className="p-4 text-xs">Définition de l&apos;offre</p>
                    </div>
                    <div className="w-1/3">
                        <h1 className="py-2 bg-[#ffe8c4] font-extrabold">Terrain 20/20</h1>
                        <div className="p-4">
                            <p className="text-xs">Terrains regroupés par lots avec voie d&apos;accès facile, bornés, viables et sécurisés</p>
                            <p className="text-xs">Dimensions: 400 Mètres carrés</p>
                        </div>
                    </div>
                    <div className="w-1/3">
                        <h1 className="bg-[#ededed] py-2 font-extrabold">Terrain 25/20</h1>
                        <div className="p-4">
                            <p className="text-xs">Terrains regroupés par lots avec voie d&apos;accès facile, bornés, viables et sécurisés</p>
                            <p className="text-xs">Dimensions: 500 Mètres carrés</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex justify-between">
                        <h1 className="w-1/3 bg-[#ededed] py-2 font-extrabold">Prix Terrain</h1>
                        <h1 className="w-1/3 py-2 bg-[#ffe8c4] font-extrabold">4 500$</h1>
                        <h1 className="w-1/3 bg-[#ededed] py-2 font-extrabold">5 600$</h1>
                    </div>
                    <p className="w-5/6 p-6 mx-auto text-xs">Une formule qui, outre le fait de vous mettre à l&apos;abris d&apos;un eventuel oubli d&apos;épargner sur votre achat.
                        Avec l&apos;offre en cash, faites-vous plaisir en une fois et bénéficiez
                        d&apos;une réduction instantanée sur l&apos;achat de votre terrain</p>
                    <div>
                        <h1 className="bg-[#ededed] py-2 font-extrabold">Valeur Ajoutée de l&apos;Offre</h1>
                        <div className="px-6 py-4">
                        <p className="border-b border-[#a1a1a1] py-4">Barrage, Sécurité et Pancarte Numéro Cadastre</p>
                        <p className="py-4 font-bold text-[#818181]">Les formalités de notarisation et de mutation s&apos;accompliront aux frais de l&apos;acquéreur pour les soins de la vendeuse...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}