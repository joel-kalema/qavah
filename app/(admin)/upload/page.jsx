'use client';

import { useState } from 'react';
import { uploadImagesAndAddItem } from '../../../firebase/firebase';
import { Radio } from "@material-tailwind/react";
import { Input, IconButton, Typography } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Dialog } from "@material-tailwind/react";

import { BsPatchCheckFill } from "react-icons/bs";
import { AiFillPicture } from "react-icons/ai";
import Link from 'next/link';


export default function AddItem() {
    const [location, setLocation] = useState('');
    const [detail, setDetail] = useState('');
    const [price, setPrice] = useState(0);
    const [rooms, setRooms] = useState(0);
    const [type, setType] = useState('');
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);

    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleImageUpload = (index) => (e) => {
        const file = e.target.files[0];
        if (index === 1) setImage1(file);
        if (index === 2) setImage2(file);
        if (index === 3) setImage3(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!image1 || !image2 || !image3) {
            alert('Please upload all three images.');
            return;
        }

        const images = [image1, image2, image3];

        try {
            await uploadImagesAndAddItem(images, location, detail, price, type, rooms);
            setLoading(false)
            setOpen(true)
        } catch (error) {
            console.error('Error adding item:', error);
        }

        setLocation('');
        setDetail('');
        setPrice(0);
        setType('');
        setRooms(0);
        setImage1(null);
        setImage2(null);
        setImage3(null);
    };

    const handleOpen = () => setOpen(!open);
    const handleUpload = () => setLoading(!loading);

    const ImageInput = [handleImageUpload(1), handleImageUpload(2), handleImageUpload(3)];
    const villeInput = ["Kinshasa", "Lubumbashi", "Kolwezi", "Matadi", "Goma", "Bukavu"];
    const Type = ["Parcelle", "Appartement"];

    return (
        <div className='py-20 w-4/6 mx-auto'>
            <h1 className='text-5xl text-[#ad8954] mb-12'>Ajouter un nouvel élément</h1>
            <form onSubmit={handleSubmit}>
                {/* Image upload */}
                <div className='my-16'>
                    <h2 className='mb-10 text-2xl font-extrabold'>Ajouter des Images (3 au max)</h2>
                    {ImageInput.map((item) => (
                        <div className='flex items-center gap-4 mb-4 border-dashed border-2 w-2/4 rounded-2xl p-4'>
                            <AiFillPicture className='text-3xl text-[#ad8954]' />
                            <input
                                type="file"
                                onChange={item}
                                accept="image/*"
                                required
                            />
                        </div>
                    ))}
                </div>

                {/* add decriptioon */}

                <div className="w-96">
                    <h2 className='my-4 text-2xl font-extrabold'>Ajouter une description</h2>
                    <Textarea
                        type="text"
                        label="Descrition"
                        value={detail}
                        onChange={(e) => setDetail(e.target.value)}
                        required
                    />
                </div>
                {/* Location as radio buttons */}
                <div className='my-6'>
                    <h2 className='my-4 text-2xl font-extrabold'>Sélectionner la ville</h2>
                    {villeInput.map((item) => (
                        <Radio
                            label={item}
                            name="location"
                            value={item}
                            checked={location === item}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                        />
                    ))}
                </div>

                {/* Type as radio buttons */}
                <div>
                    <h2 className='my-4 text-2xl font-extrabold'>Sélectionner le Type</h2>
                    {Type.map((item) => (
                        <Radio
                        label={item}
                        name="type"
                        value={item}
                        checked={type === item}
                        onChange={(e) => setType(e.target.value)}
                        required
                    />
                    ))}
                </div>


                <div className="w-80">
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="my-4 text-2xl font-extrabold"
                    >
                        Sélectionnez le montant ($).
                    </Typography>
                    <div className="relative w-full">
                        <Input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="!border-t-blue-gray-200 placeholder:text-blue-gray-300 placeholder:opacity-100  focus:!border-t-gray-900 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            labelProps={{ className: "before:content-none after:content-none",}}
                            containerProps={{className: "min-w-0",}}
                        />
                        <div className="absolute right-1 top-1 flex gap-0.5">
                            <IconButton
                                size="sm"
                                className="rounded"
                                onClick={() => setPrice((cur) => (cur === 0 ? 0 : cur - 1))}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                                </svg>
                            </IconButton>
                            <IconButton
                                size="sm"
                                className="rounded"
                                onClick={() => setPrice((cur) => cur + 1)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                                </svg>
                            </IconButton>
                        </div>
                    </div>
                    <Typography variant="small" color="gray" className="mt-2 font-normal">
                        Ajustez le nombre à l'aide des commandes + et -.
                    </Typography>
                </div>

                <div className="w-80 my-10">
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-1 font-medium"
                    >
                        Sélectionnez le nombre de pièces
                    </Typography>
                    <div className="relative w-full">
                        <Input
                            type="number"
                            value={rooms}
                            // value={value}
                            onChange={(e) => setRooms(e.target.value)}
                            className="!border-t-blue-gray-200 placeholder:text-blue-gray-300 placeholder:opacity-100  focus:!border-t-gray-900 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            containerProps={{
                                className: "min-w-0",
                            }}
                        />
                        <div className="absolute right-1 top-1 flex gap-0.5">
                            <IconButton
                                size="sm"
                                className="rounded"
                                onClick={() => setRooms((cur) => (cur === 0 ? 0 : cur - 1))}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                                </svg>
                            </IconButton>
                            <IconButton
                                size="sm"
                                className="rounded"
                                onClick={() => setRooms((cur) => cur + 1)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                                </svg>
                            </IconButton>
                        </div>
                    </div>
                    <Typography variant="small" color="gray" className="mt-2 font-normal">
                        Ajustez le nombre à l'aide des commandes + et -.
                    </Typography>
                </div>

                <Button onClick={handleUpload} type="submit">Ajouter un article</Button>
            </form>

            <Dialog open={open} handler={handleOpen} className='relative p-6 text-center'>
                <div className="shadow-design shadow02 w-20 h-20 -mt-16 rounded-[50%] mx-auto flex justify-center items-center bg-[#fff]">
                    <BsPatchCheckFill className="drop-shadow-lg text-[#ad8954] text-5xl" />
                </div>
                <h1 className='text-[#202020] font-extrabold text-2xl mt-6 mb-4'>Votre soumission a été enregistrée avec succès !</h1>
                <p className='mb-10 w-3/4 mx-auto'>Vous pouvez maintenant consulter la liste des éléments ou ajouter un nouvel élément.</p>
                <Link href="/list" className='bg-[#ad8954] text-white px-6 py-2 rounded-md hover:shadow-xl' onClick={handleOpen}>
                    Fermer
                </Link>
            </Dialog>

            <div className={loading ? "fixed w-full bg-[#192746bf] top-0 left-0 flex justify-center items-center h-[100%]" : "hidden"}>
                <div className="downoading"></div>
            </div>
        </div>
    );
}
