'use client'

import React from "react";
import {
  Navbar,
  Collapse,
  IconButton,
  List,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
 
function NavList() {
  return (
    <List className="mb-6 mt-4 p-0 lg:mb-0 lg:mt-0 lg:flex-row lg:p-1">
      <Link href="/" className="flex items-center gap-2 py-2 px-6">Acueil</Link>
      <Link href="/acheter" className="flex items-center gap-2 py-2 px-6">Acheter</Link>
      <Link href="/louer" className="flex items-center gap-2 py-2 px-6">Louer</Link>
      <Link href="/Vendre" className="flex items-center gap-2 py-2 px-6">Vendre</Link>
      <Link href="/gerer" className="flex items-center gap-2 py-2 px-6">Faire Gérer</Link>
    </List>
  );
}
 
export default function Topbar() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  return (
    <Navbar fullWidth={true} className="mx-auto w-[100%] px-4 lg:px-20 py-4 fixed z-50">
      <div className="flex items-center justify-between text-blue-gray-900">
      <Image src='/logo.png' height={80} width={100} alt="logo" className='md:w-10 lg:w-28'/>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-4 lg:flex items-center">
        <Link href="mailto:contact@qavahgroup.com" className="">contact@qavahgroup.com</Link>
          <Link href="/contact" className="bg-[#ad8954] text-white px-6 py-2 rounded-3xl hover:shadow-xl">
            Contacter
          </Link>
        </div>
        <IconButton
          variant="text"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
        <Link href="mailto:contact@qavahgroup.com" className="">contact@qavahgroup.com</Link>
          <Link href="/contact" className="bg-[#ad8954] text-white px-6 py-2 rounded-3xl hover:shadow-xl">
            Contacter
          </Link>
        </div>
      </Collapse>
    </Navbar>
  );
}