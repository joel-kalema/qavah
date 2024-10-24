'use client';

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { BsHouseGear } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { Select, Option, Card, CardHeader, CardBody, Typography, Carousel } from "@material-tailwind/react";
import { FaBed } from "react-icons/fa";
// import Link from "next/link";
import Image from "next/image";
import { getItems } from '@/firebase/firebase';
import CardPlacehoderSkeleton from "@/components/previewCard";
import { Prompt } from "next/font/google";

const title = Prompt({
  subsets: ['latin', 'latin-ext', 'thai', 'vietnamese'],
  weight: '800'
});

const FilterForm = ({ ville, setVille, type, setType, handleSubmit, villeInput, Type }) => (
  <form onSubmit={handleSubmit} className="w-5/6 lg:w-4/6 lg:mx-auto mt-[-3rem] bg-[#fff] relative z-40 p-2 lg:p-4 rounded-[4rem] drop-shadow-lg mb-10 flex justify-between">
    <FilterOption icon={BsHouseGear} label="Sélectionner la ville" value={ville} setValue={setVille} options={["Tout", ...villeInput]} />
    <FilterOption icon={MdLocationOn} label="Sélectionner le Type" value={type} setValue={setType} options={["Tout", ...Type]} />
    <SearchButton />
  </form>
);

const FilterOption = ({ icon: Icon, label, value, setValue, options }) => (
  <div className="flex items-center gap-6 w-1/4 pr-2 px-4">
    <div className="flex justify-center items-center p-3 rounded-full border-2 border-[#ad8954] text-[#ad8954]">
      <Icon className="text-3xl" />
    </div>
    <div className="w-72">
      <Select label={label} onChange={setValue} value={value}>
        {options.map((option, index) => (
          <Option key={index} value={option}>{option}</Option>
        ))}
      </Select>
    </div>
  </div>
);

const SearchButton = () => (
  <button type="submit" className="w-1/4 bg-[#ad8954] rounded-[4rem] cursor-pointer text-white rounded-4xl py-2 px-6 flex justify-between items-center">
    Rechercher <IoSearch />
  </button>
);

const ItemCard = ({ item, index }) => (
  <Card className="mt-6 w-96 border z-0">
    <CardHeader shadow={false} floated={false} className="relative grid h-56 place-items-center bg-gray-300">
      <Carousel
        className="rounded-xl"
        autoplay={true}
        autoplayDelay={2000 + (index * 100)}
        loop={true}
        prevArrow={false}
        nextArrow={false}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {item.images.map((img, i) => (
          <img key={i} src={img} alt={`item ${i}`} className="h-full w-full object-cover" />
        ))}
      </Carousel>
    </CardHeader>
    <CardBody>
      <div className="flex justify-between">
        <Typography className="font-bold">{item.type}</Typography>
        <Typography className="font-extrabold">$ {item.price}</Typography>
      </div>
      <Typography className="text-sm my-4">{item.detail.substring(0, 60)}</Typography>
      <div className="flex gap-3">
        <Typography className="border rounded-lg flex gap-2 items-center px-1 text-sm">
          <FaBed />{item.rooms}
        </Typography>
        <Typography className="border rounded-lg flex gap-2 items-center px-1 text-sm">
          <MdLocationOn />{item.location}
        </Typography>
      </div>
    </CardBody>
  </Card>
);

// Main Component
export default function TabsWithIcon() {
  const [ville, setVille] = useState('');
  const [type, setType] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [click, setClick] = useState(false);

  const villeInput = ["Kinshasa", "Lubumbashi", "Kolwezi", "Matadi", "Goma", "Bukavu"];
  const Type = ["Parcelle", "Appartement"];

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getItems();
        setAllItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    fetchItems();
  }, []);

  const handleFilter = useCallback((e) => {
    e.preventDefault();
    const filtered = allItems.filter(item =>
      (ville !== 'Tout' ? item.location === ville : true) && // Filter by ville unless "All" is selected
      (type !== 'Tout' ? item.type?.toLowerCase() === type.toLowerCase() : true) // Filter by type unless "All" is selected
    );
    setFilteredItems(filtered);
    setClick(true);

    setVille('');
    setType('');
  }, [ville, type, allItems]);

  const filteredContent = useMemo(() => {
    if (click && filteredItems.length === 0) {
      return <p className="text-center text-gray-500">Aucun élément trouvé</p>;
    }
    return filteredItems.length > 0 ? (
      filteredItems.map((item, index) => <ItemCard key={item.id} item={item} index={index} />)
    ) : (
      allItems.length > 0 ? (
        allItems.map((item, index) => <ItemCard key={item.id} item={item} index={index} />)
      ) : (
        <div className='w-[100%] flex gap-8'>
          <CardPlacehoderSkeleton />
          <CardPlacehoderSkeleton />
          <CardPlacehoderSkeleton />
        </div>
      )
    );
  }, [click, filteredItems, allItems]);

  return (
    <div className='pt-40'>
      <div className='w-5/6 mx-auto'>
        <h1 className={`${title.className} text-4xl lg:text-6xl md:w-2/3 font-extrabold mb-4 md:mb-0`}>
          List des Produits Disponible
        </h1>
        <p className="hidden w-[85%] mb-4 md:block">
          Nous traiterons votre demande dans les plus brefs délais.
        </p>
      </div>
      <div className="h-[30vh] lg:h-[30vh] overflow-hidden relative rounded-3xl mx-10">
        <Image
          src="/home3.jpeg"
          layout="fill"
          objectFit="cover"
          alt="Beautiful bay view"
          quality={100}
          priority
        />
      </div>
      <FilterForm
        ville={ville}
        setVille={setVille}
        type={type}
        setType={setType}
        handleSubmit={handleFilter}
        villeInput={villeInput}
        Type={Type}
      />
      <div className='w-5/6 mx-auto p-4 flex gap-8'>
        {filteredContent}
      </div>
    </div>
  );
}
