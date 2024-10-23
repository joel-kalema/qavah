"use client";

import { useEffect, useState } from 'react';
import { getItems, deleteItem, updateItem } from '../../../firebase/firebase';
import CardPlacehoderSkeleton from '@/components/previewCard';
import Link from 'next/link';
import Image from 'next/image';
import { Prompt } from "next/font/google";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const title = Prompt({
  subsets: ['latin', 'latin-ext', 'thai', 'vietnamese'],
  weight: '800'
})

export default function Home() {
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(null); // State to track item being edited
  const [formData, setFormData] = useState({ location: '', price: '', detail: '', type: '', rooms: '' }); // State for form data
  const [newImages, setNewImages] = useState([]); // State to track newly uploaded images

  useEffect(() => {
    async function fetchItems() {
      const data = await getItems();
      setItems(data);
    }

    fetchItems();
  }, []);

  // Handle the delete action
  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this item?')) {
      await deleteItem(id); // Call the delete function
      setItems(items.filter(item => item.id !== id)); // Update the state to remove the deleted item
    }
  };

  // Handle the edit action (set form with item data)
  const handleEdit = (item) => {
    setEditItem(item.id);
    setFormData({ location: item.location, price: item.price, detail: item.detail, type: item.type, rooms: item.rooms });
    setNewImages([]); // Reset the image array when editing
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle image upload changes
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files); // Get multiple file inputs
    setNewImages(files); // Update the image state
  };

  // Handle the update action
  const handleUpdate = async (id) => {
    await updateItem(id, formData, newImages); // Call the update function with the new data and images
    const updatedItems = items.map(item => item.id === id ? { ...item, ...formData } : item);
    setItems(updatedItems); // Update the state with the new data
    setEditItem(null); // Reset edit mode
  };

  return (
    <div className=''>
      <div className="h-[30vh] lg:h-[50vh] overflow-hidden relative rounded-b-[5rem]">
        <Image src="/home2.jpeg" layout="fill" objectFit="cover" alt="bay" quality={100} />
        <div className="absolute bottom-0 lg:bottom-20  p-4 lg:left-10 lg:flex lg:w-4/6 justify-between items-center gap-10 bg-[#0000003b] md:bg-[#0000006d] backdrop-blur-sm md:backdrop-blur-md rounded-2xl">
          <div className="text-white mb-4 w-5/6">
            <h1 className={`${title.className} text-2xl lg:text-4xl text-white font-extrabold mb-6`}>List des Produits Disponible</h1>
            <p className="hidden w-[85%] mb-4 md:block">Nous traiterons votre demande dans les plus brefs délais.</p>
            <Link href="/" className='py-2 px-6 bg-[#ad8954] rounded-3xl text-sm mb-2 font-extrabold'>Home</Link>
          </div>
        </div>
      </div>
      <div className='-mt-16 pb-20 w-5/6 mx-auto flex gap-8'>
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.id}>
              {editItem === item.id ? (
                // If item is being edited, show the form
                <div>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Location"
                  />
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="Price"
                  />
                  <input
                    type="number"
                    name="price"
                    value={formData.type}
                    onChange={handleChange}
                    placeholder="Price"
                  />
                  <input
                    type="number"
                    name="rooms"
                    value={formData.rooms}
                    onChange={handleChange}
                    placeholder="Rooms"
                  />
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                  <p>Upload 3 new images (if you want to replace the existing ones)</p>
                  <button onClick={() => handleUpdate(item.id)}>Update</button>
                  <button onClick={() => setEditItem(null)}>Cancel</button>
                </div>
              ) : (
                // Display item details

                <div>
                  <Card className="mt-6 w-96">
                    <CardHeader
                      shadow={false}
                      floated={false}
                      className="relative grid h-56 place-items-center bg-gray-300"
                    >
                      <img src={item.images[0]} alt='image' width="200" />
                    </CardHeader>
                    <CardBody>
                      <Typography
                        className="mb-4 w-56"
                      >
                        {item.location}
                      </Typography>
                      <Typography
                      >
                       <p>Detail: {item.detail}</p>
                      </Typography>
                      <Typography
                      >
                        Price: {item.price}
                      </Typography>
                      <Typography
                      >
                        Type: {item.type}
                      </Typography>
                      <Typography
                      >
                        Rooms: {item.rooms}
                      </Typography>
                    </CardBody>
                    <CardFooter className="pt-0 flex gap-8">
                      <Button
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </Button>
                      <Button
                      color="red"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </Button>
                    </CardFooter>
                  </Card>
                  {/* <h2>{item.location}</h2>
                  <p>Detail: {item.detail}</p>
                  <p>Price: {item.price}</p>
                  <p>Type: {item.type}</p>
                  <p>Rooms: {item.rooms}</p>
                  <div>
                    {item.images.map((url, index) => (
                      <img key={index} src={url} alt={`Item Image ${index + 1}`} width="200" />
                    ))}
                  </div>
                  <button onClick={() => handleEdit(item)}>Edit</button>
                  <button onClick={() => handleDelete(item.id)}>Delete</button> */}
                </div>
              )}
            </div>
          ))
        ) : (
          <div className='w-5/6 mx-auto flex justify-between'>
            <CardPlacehoderSkeleton />
            <CardPlacehoderSkeleton />
            <CardPlacehoderSkeleton />
          </div>
        )}
      </div>
    </div>
  );
}
