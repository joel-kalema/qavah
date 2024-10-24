'use client';

import React, { useState, useEffect } from "react";
import { BsHouseGear } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { Select, Option } from "@material-tailwind/react";
import { getItems } from '../../firebase/firebase';

export default function TabsWithIcon() {
  const [ville, setVille] = useState('');
  const [type, setType] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [allItems, setAllItems] = useState([]);

  const villeInput = ["Kinshasa", "Lubumbashi", "Kolwezi", "Matadi", "Goma", "Bukavu"];
  const Type = ["Parcelle", "Appartement"];

  useEffect(() => {
    async function fetchItems() {
      try {
        const data = await getItems();
        console.log("Fetched items:", data);
        setAllItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    }
    fetchItems();
  }, []);

  const handleFilter = (e) => {
    e.preventDefault();
    const filtered = allItems.filter(item => {
      const matchesVille = ville ? item.location === ville : true;
      const matchesType = type ? item.type && item.type.toLowerCase() === type.toLowerCase() : true;
      return matchesVille && matchesType;
    });
    setFilteredItems(filtered); 
  };

  return (
    <div>
      <form onSubmit={handleFilter} className=" w-5/6 flex justify-between lg:w-4/6 lg:mx-auto mt-[-3rem] bg-[#fff] z-40 relative p-2 lg:p-4 rounded-[4rem] drop-shadow-lg mb-10">
        <div className="flex items-center gap-6 w-1/4 pr-2">
          <div className="flex justify-center items-center p-3 rounded-[50%] border-2 border-[#ad8954] text-[#ad8954]">
            <BsHouseGear className="text-3xl" />
          </div>
          <div className="w-72">
            <Select label="Sélectionner la ville" onChange={(e) => setVille(e)} value={ville}>
              {villeInput.map((option, index) => (
                <Option key={index} value={option}>{option}</Option>
              ))}
            </Select>
          </div>
        </div>

        <div className="flex items-center gap-6 w-1/4 border-l-2 px-4">
          <div className="flex justify-center items-center p-3 rounded-[50%] border-2 border-[#ad8954] text-[#ad8954]">
            <MdLocationOn className="text-3xl" />
          </div>
          <div className="w-72">
            <Select label="Sélectionner le Type" onChange={(e) => setType(e)} value={type}>
              {Type.map((option, index) => (
                <Option key={index} value={option}>{option}</Option>
              ))}
            </Select>
          </div>
        </div>

        <button type="submit" className="w-1/4 bg-[#ad8954] cursor-pointer text-white rounded-[4rem] py-2 px-6 flex justify-between items-center">
          Rechercher <IoSearch />
        </button>
      </form>

      {/* Display filtered items */}
      <div className='w-5/6 mx-auto'>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div key={item.id} className="mb-6 border p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold">{item.location}</h2>
              <p>Type: {item.type}</p>
              <p>Price: {item.price}</p>
              <p>Rooms: {item.rooms}</p>
              <div className="flex gap-4">
                {item.images.map((url, index) => (
                  <img key={index} src={url} alt={`Item Image ${index + 1}`} width="150" />
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Aucun élément trouvé</p>
        )}
      </div>
    </div>
  );
}
