'use client'
import React from 'react';
import {
    Input,
    Button
} from "@material-tailwind/react";
import { Dialog } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
import Image from "next/image";
import { BsPatchCheckFill } from "react-icons/bs";
import Link from 'next/link';

const Contact = () => {
    const [open, setOpen] = React.useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        const formEle = document.querySelector("form");
        const formDatab = new FormData(formEle);

        fetch(
            "https://script.google.com/macros/s/AKfycbwocoEevtbSNxucgewqbT93I2u4DlFeeoDKDVffAdq89bqAbpBRzRtQ2pnsvQn0b8B3lQ/exec",
            {
                method: "POST",
                body: formDatab
            }
        ).then(res => {
            setOpen(true)
            console.log("this is the respose", res)
            // setName("");
            // setEmail("");


        })
            .catch((error) => {
                console.log(error);

            });
    }
    const handleOpen = () => setOpen(!open);

    return (
        <div className="">
            <div className="pt-20 lg:pt-40 w-5/6 mx-auto">
                <h1 className="text-3xl lg:text-4xl font-extrabold my-10 lg:w-3/4 text-center mx-auto">Demander des informations pour acheter un logement avec QAVAH Group</h1>
                <div className="flex items-center justify-between">
                    <div className="lg:w-2/4 h-[60dvh] hidden lg:block relative rounded-3xl p-10 overflow-hidden">
                        <Image src="/contact.jpeg" layout="fill" objectFit="cover" alt="bay" quality={90} />
                    </div>
                            <form className="mt-8 mb-2 w-[100%] lg:w-2/4 mx-auto bg-white rounded-xl p-4 shadow-md " onSubmit={(e) => handleSubmit(e)}>
                                <div className="mb-1 flex flex-col gap-6">
                                    <Input variant="outlined" label="Prénom" placeholder="Prénom" type="text" name="Prenom" />
                                    <Input variant="outlined" label="Nom" placeholder="Nom" type="text" name="Nom" />
                                    <Input variant="outlined" label="E-mail" placeholder="E-mail" type="mail" name="Email" />
                                    <Input variant="outlined" label="+243 xxx xxx xxx" placeholder="Téléphone" type="number" name="Numero" />
                                    <Textarea label="Message" name="Message" />
                                </div>

                                <Button className="mt-6" fullWidth type='submit'>
                                    Contacter
                                </Button>
                            </form>
            
                </div>
                <p className='text-center py-10 lg:py-20 text-3xl'>Ensemble avec vous à chaque pas.</p>
            </div>

            <Dialog open={open} handler={handleOpen} className='relative p-6 text-center'>
                <div className="shadow-design shadow02 w-20 h-20 -mt-16 rounded-[50%] mx-auto flex justify-center items-center bg-[#fff]">
                    <BsPatchCheckFill className="drop-shadow-lg text-[#ad8954] text-5xl" />
                </div>
                <h1 className='text-[#202020] font-extrabold text-2xl mt-6 mb-4'>Merci d&apos;avoir soumis votre demande auprès de Qavah Group.</h1>
                <p className='mb-10'>Nous avons bien reçu votre demande concernant nos services immobiliers
                    et sommes ravis de pouvoir vous accompagner dans la recherche de la
                    solution idéale correspondant à vos besoins.
                </p>
                <Link href="/" className='bg-[#ad8954] text-white px-6 py-2 rounded-md hover:shadow-xl' onClick={handleOpen}>
                    Fermer
                </Link>
            </Dialog>

        </div>
    )
}

export default Contact;