'use client'

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { AiOutlineLogin } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Link from "next/link";
import { MdLocationOn } from "react-icons/md";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const currentYear = new Date().getFullYear();

export default function Footer() {
    return (
        <div className="bg-[#2c2c2c] text-[#fff] pt-12 rounded-t-3xl lg:rounded-[2rem] relative z-20 lg:m-8 p-4">
            <div className="lg:w-5/6 mx-auto pb-14 lg:flex justify-between items-center">
                <div className="mb-6 lg:mb-0">
                    <h1 className="text-4xl lg:text-6xl mb-4">Prêt à travailler avec nous?</h1>
                    <p>Bénéficiez d&lsquo;un service client de premier ordre et laissez-nous vous guider dans votre parcours immobilier</p>
                </div>
                <Link href="/contact" className="w-[4rem] lg:w-[7rem] h-[4rem] lg:h-[7rem] bg-[#ad8954] rounded-[50%] flex justify-center items-center hover:rotate-45 transition duration-300">
                    <div className="w-[3rem] lg:w-[5rem] border border-[#fff] cursor-pointer border-dashed h-[3rem] lg:h-[5rem] bg-[#ad8954] rounded-[50%] flex justify-center items-center">
                        <FiArrowUpRight className="text-3xl lg:text-5xl text-[#fff]" />
                    </div>
                </Link>
            </div>
            <footer className="relative w-full">
                <div className="mx-auto w-full max-w-7xl lg:px-8">
                    <div className="lg:flex justify-between items-center gap-4 py-10 border-t border-[#6c6c6c]">
                        <div className="2/4  mb-12 lg:mb-0">
                            <Image src='/logo02.png' height={60} width={200} alt="Eleka logo" className='md:w-14 lg:w-40 mb-4' />
                            <div>
                                <p className="text-sm w-3/4 mb-6 text-[#a4a4a4]">Un agent immobilier vous contactera dans les meilleurs délais</p>
                                <p className="lg:text-sm w-2/4 mb-1 flex items-center gap-2"><FaPhone className="text-[#ad8954] text-2xl"/> +243981444440</p>
                                <Link href="mailto:contact@qavahgroup.com" className="lg:text-sm lg:w-2/4 mb-2 flex items-center gap-2"><IoMdMail className="text-[#ad8954] text-2xl"/> contact@qavahgroup.com</Link>
                                <div className=" flex border border-[#6c6c6c] p-2 rounded-md">
                                    <div className="w-4/6 text-[#868686] py-1">Écrivez votre email ici</div>
                                    <div className="w-2/6 bg-[#ad8954] rounded-md py-1 px-2 flex justify-between items-center">
                                        Soumettre <AiOutlineLogin />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex lg:w-2/4 justify-between gap-4">
                            <div className="flex lg:w-3/4 gap-5">
                                <MdLocationOn className="text-6xl text-[#ad8954]"/>
                                <div>
                                    <h1 className=" font-extrabold mb-1">KINSHASA :</h1>
                                    <p className="text-sm text-[#868686] mb-2">22,Ave Tombalbaye Kinshasa-Gombe | Réf : Immeuble Otantika, en face du Magasin Regal</p>
                                    <h1 className=" font-extrabold mb-1">LUBUMBASHI :</h1>
                                    <p className="text-sm text-[#868686] mb-2">1572, Ave Kasavubu, C/LubumbashI Q/Makutano Référence En face de l’hôtel Mota </p>
                                    <h1 className=" font-extrabold mb-1">KOLWEZI :</h1>
                                    <p className="text-sm text-[#868686]">529,Ave Kajama,Kolwezi, Lualaba</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" flex w-full flex-col items-center justify-center border-t border-[#6c6c6c] py-4 md:flex-row md:justify-between">
                        <Typography
                            variant="small"
                            className="mb-4 text-center font-normal text-[#a4a4a4] md:mb-0"
                        >
                            &copy; {currentYear} Qavah Group. All
                            Rights Reserved.
                        </Typography>
                        <div className="flex gap-4 text-[#a4a4a4] sm:justify-center my-6">
                            <Typography as="a" href="https://m.facebook.com/p/QAVAH-GROUP-61553356806323/" target="_blank" className="opacity-80 transition-opacity hover:opacity-100">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        fill-rule="evenodd"
                                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </Typography>
                            <Typography as="a" href="https://www.instagram.com/qavah_group?igsh=MXJmNWl5MTd3MWp5cA==" target="_blank" className="opacity-80 transition-opacity hover:opacity-100">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        fill-rule="evenodd"
                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </Typography>
                            <Typography as="a" href="https://cd.linkedin.com/company/kowach-corporation" target="_blank" className="opacity-80 transition-opacity hover:opacity-100">
                                <FaLinkedinIn className="h-5 w-5"/>
                            </Typography>
                            <Typography as="a" href="https://www.tiktok.com/@qavah.group" target="_blank" className="opacity-80 transition-opacity hover:opacity-100">
                                <FaTiktok className="h-5 w-5"/>
                            </Typography>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}