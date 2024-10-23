'use client'

import React from "react";
import { useState } from "react";
import { BsHouseGear } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";

export default function TabsWithIcon() {
  const [selectedtype, setSelectedType] = useState('');
  const [selectedcity, setSelectedCity] = useState('');
  const [opentype, setOpenType] = useState(false);
  const [opencity, setOpenCity] = useState(false);

  const type = [
    { label: 'Maison', value: 'maison' },
    { label: 'Parcelle', value: 'parcelle' },
  ];

  const Location = [
    { label: 'Kinshasa', value: 'kinshasa' },
    { label: 'Lubumbashi', value: 'lubumbashi' },
    { label: 'Kolwezi', value: 'kolwezi' }
  ];

  const handleOptionClick = (value) => {
    setSelectedType(value);
    setOpenType(false); // Close dropdown on selection
  };

  const toggleDropdown = () => {
    setOpenType((prev) => !prev);
  };

  const handleCityChange = (value) => {
    setSelectedCity(value);
    setOpenCity(false)
  };

  const toggleDropdownCity = () => {
    setOpenCity((prev) => !prev);
  };

  return (
    <div className=" w-5/6 flex justify-between lg:w-4/6 lg:mx-auto mt-[-3rem] bg-[#fff] z-40 relative p-2 lg:p-4 rounded-[4rem] drop-shadow-lg mb-10">
      <div className="flex items-center gap-6 w-1/4 pr-2">

        <div className="flex justify-center items-center  p-3 rounded-[50%] border-2 border-[#ad8954] text-[#ad8954]">
          <BsHouseGear className="text-3xl" />
        </div>

        <div className="relative inline-block w-[100%]">
          <button onClick={toggleDropdown}
            className="w-full bg-white rounded-md focus:outline-none flex items-center gap-5"
          >
            {selectedtype ? type.find((option) => option.value === selectedtype).label : 'Type'}
            <FaAngleDown />
          </button>
          {opentype && (
            <div className="absolute z-10 mt-4 w-full bg-white border border-gray-300 rounded-md shadow-lg" style={{ position: 'absolute' }}>
              {type.map((option) => (
                <div key={option.value} onClick={() => handleOptionClick(option.value)}
                  className="p-2 hover:bg-[#ad8954] hover:text-[#fff] cursor-pointer text-black"
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-6 w-1/4 border-l-2 px-4">

        <div className="flex justify-center items-center  p-3 rounded-[50%] border-2 border-[#ad8954] text-[#ad8954]">
          <MdLocationOn className="text-3xl" />
        </div>

        <div className="relative inline-block w-[100%]">
          <button onClick={toggleDropdownCity} className="w-full bg-white rounded-md focus:outline-none flex items-center gap-5">
            {selectedcity ? Location.find((option) => option.value === selectedcity).label : 'Ville'}
            <FaAngleDown />
          </button>
          {opencity && (
            <div className="absolute z-10 mt-4 w-full bg-white border border-gray-300 rounded-md shadow-lg" style={{ position: 'absolute' }}>
              {Location.map((option) => (
                <div key={option.value} onClick={() => handleCityChange(option.value)}
                  className="p-2 hover:bg-[#ad8954] hover:text-[#fff] cursor-pointer text-black">
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

      <div className="w-1/4 bg-[#ad8954] cursor-pointer text-white rounded-[4rem] py-2 px-6 flex justify-between items-center">
        Rechercher <IoSearch />
      </div>
    </div>
  );
}