'use client'

import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Image from "next/image";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

export default function Questions() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="mx-4 lg:w-5/6 lg:mx-auto my-40 bg-[#efefef] flex gap-10 px-6 lg:px-10 py-10 lg:py-12 rounded-2xl">
      <div className="lg:w-4/6">
        <h1 className="font-extrabold text-2xl lg:text-4xl">Questions Fréquemment Posées</h1>
        <p className="mt-10 mb-4 text-sm lg:w-4/5">Vous avez choisi d&apos;acheter un bien neuf pour y habiter ou investir ; 
          Nexity vous accompagne dans vos premiers pas en tant que propriétaire ou investisseur.</p>
        <div>
          <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(1)}>Comment puis-je acheter un bien immobilier avec Qavah Group ?</AccordionHeader>
            <AccordionBody className="lg:w-5/6">
              Pour acheter un bien immobilier, parcourez notre catalogue de propriétés
              disponibles. Vous pouvez filtrer les biens par emplacement,
              prix et type. Une fois que vous avez trouvé un bien qui vous
              intéresse, nos agents vous accompagneront tout au long du processus,
              de la visite du bien à la finalisation des documents.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(2)}>
              Quels services de gestion immobilière offrez-vous ?
            </AccordionHeader>
            <AccordionBody className="lg:w-5/6">
              Nous proposons une gestion complète incluant la collecte des loyers,
              l&apos;entretien des propriétés, la gestion des baux, et le suivi des obligations
              légales. Accédez à notre portail propriétaire pour suivre la gestion de vos biens.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(3)}>
              Comment obtenir une estimation de mon bien immobilier ?
            </AccordionHeader>
            <AccordionBody className="lg:w-5/6">
              Demandez une estimation gratuite en ligne en remplissant le formulaire dans
              la section &quot;Vendez votre bien&quot;. Nos experts évalueront votre propriété en
              fonction des tendances du marché et vous fourniront un prix compétitif.
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(4)}>
              Que faire si j&apos;ai un problème avec ma location ?
            </AccordionHeader>
            <AccordionBody className="lg:w-5/6">
              Signalez tout problème via votre portail locataire. Notre équipe se chargera
              de gérer les réparations urgentes et l&apos;entretien courant pour assurer votre satisfaction.
            </AccordionBody>
          </Accordion>
        </div>
      </div>

      <div className="hidden lg:block h-[30rem] overflow-hidden w-2/6 relative rounded-xl">
        <Image src="/question.jpeg" layout="fill" objectFit="cover" alt="bay" quality={100} />
      </div>
    </div>
  );
}