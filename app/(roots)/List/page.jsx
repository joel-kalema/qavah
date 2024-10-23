"use client";

import { useEffect, useState } from 'react';
import { getItems } from '../../../firebase/firebase';

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      const data = await getItems();
      setItems(data);
    }

    fetchItems();
  }, []);

  return (
    <div className='py-40 w-5/6 mx-auto'>
      <h1>Items List</h1>
      {items.length > 0 ? (
        items.map((item) => (
          <div key={item.id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
            <div>
              <h2>{item.location}</h2>
              <p>Price: {item.price}</p>
              <p>type: {item.type}</p>
              <p>Rooms: {item.rooms}</p>
              <div>
                {item.images.map((url, index) => (
                  <img key={index} src={url} alt={`Item Image ${index + 1}`} width="200" />
                ))}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No items found</p>
      )}
    </div>
  );
}
