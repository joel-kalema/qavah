"use client"

import { useState } from 'react';
import { CgMenuRight } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';

import { usePathname } from 'next/navigation';

import Link from 'next/link'
import React from 'react'

export const navData = [
    {
        id: 1,
        title: "Acueil",
        link: "/"
    },
    {
        id: 2,
        title: "Acheter",
        link: "/acheter"
    },
    {
        id: 3,
        title: "Louer",
        link: "/louer"
    },
    {
        id: 4,
        title: "Vendre",
        link: "/vendre"
    },
    {
        id: 5,
        title: "Faire Gérer",
        link: "/gerer"
    }
]

const Nav = () => {
    const [active, setActive] = useState('nav_close');
    const [fix, setFix] = useState(false)

    const pathname = usePathname();

    const navToggle = () => (active === 'nav_active' ? setActive('nav_close') : setActive('nav_active'));

    function setFixed() {
        window.scrollY >= 10 ? setFix(true) : setFix(false)
    }

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", setFixed);
    }

    return (
        <div className={
            fix ?
                'flex transition duration-400 ease-in-out fixed top-0 w-[100%] justify-between items-center px-6 py-4 md:px-28 md:py-6 z-50 backdrop-blur-xl bg-[#fff]/80 text-[#231f20] shadow-lg'
                : 'flex transition duration-400 ease-in-out fixed top-0 w-full justify-between items-center px-6 py-4 md:px-28 md:py-6 z-50 text-[#fff]'
        }>
            <Link href='/'>
                <Image src={fix ? '/logo.png' : (pathname == '/' && !fix) ? '/logo02.png' : '/logo.png'} height={80} width={100} alt="logo" className='md:w-10 lg:w-28' />
            </Link>
            <div onClick={navToggle} className={fix ? 'lg:hidden text-xl text-[#000]' : (pathname == '/' && !fix) ? 'lg:hidden text-xl text-[#fff]' : 'lg:hidden text-xl text-[#000]'}>
                <CgMenuRight />
            </div>
            <div className='w-[45%] hidden lg:flex justify-between items-center'>
                {navData.map((nav) => (
                    <Link key={nav.id} href={nav.link}
                        className={
                            pathname === nav.link
                                ? 'bg-[#ad8954] text-white px-6 py-2 rounded-3xl shadow-xl'
                                : (pathname == '/' && fix)
                                    ? 'text-[#222] px-6 py-2 rounded-3xl hover:bg-[#ad8954] hover:text-white hover:shadow-xl transition-all duration-500'
                                    : (pathname == '/' && !fix) ? 'text-[#fff] hover:bg-[#ad8954] hover:text-white px-6 py-2 rounded-3xl hover:shadow-xl transition-all duration-500'
                                        : 'hover:bg-[#ad8954] text-[#2d2d2d] hover:text-white px-6 py-2 rounded-3xl hover:shadow-xl transition-all duration-500'
                        }
                    >{nav.title}</Link>
                ))}
            </div>
            <div className="hidden gap-4 lg:flex items-center">
                <Link href="mailto:contact@qavahgroup.com" className="font-bold">contact@qavahgroup.com</Link>
                <Link href="/contact" className="bg-[#333333] font-extrabold text-white px-6 py-2 rounded-3xl hover:shadow-xl">
                    Contacter
                </Link>
            </div>


            <div className={`${active}`}>
                <div className='relative w-[100%] h-[100%] px-10 py-10 bg-[#ffffff]'>
                    <AiOutlineClose className="absolute text-[#000] top-4 right-4" onClick={navToggle} />
                    <div className='flex flex-col mb-10'>
                        {navData.map((nav) => (
                            <Link onClick={navToggle} key={nav.id} href={nav.link} className="text-[#1f1f1f] text-2xl mt-6 font-extrabold">{nav.title}</Link>
                        ))}
                    </div>
                    <div className="">
                        <div>
                            <Link href="/contact" className="bg-[#333333] mb-4 inline-block font-extrabold text-white px-6 py-2 rounded-3xl shadow-xl">
                                Contacter
                            </Link>
                        </div>
                        <div className='mb-10'>
                            <Link href="mailto:contact@qavahgroup.com" className="font-bold text-[#000] text-xl">contact@qavahgroup.com</Link>
                        </div>
                        <Image src='/logo.png' height={80} width={100} alt="logo" className='w-28' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Nav
