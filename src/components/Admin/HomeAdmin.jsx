import React, { useState, useEffect } from 'react';
import produit from '../assets/produit.png';
import client from '../assets/client.png';
import notification from '../assets/notification.png';
import ChartComponent from './ChartComponent';
import Statics from './Statics';
import { Link } from 'react-router-dom';

export default function HomeAdmin() {
  const [numClients, setNumClients] = useState(0);
  const [numProducts, setNumProducts] = useState(0);

  useEffect(() => {
    fetch('http://localhost:8000/api/clients')
      .then(response => response.json())
      .then(data => setNumClients(data.length))
      .catch(error => console.error('Error:', error));
  }, []);

  useEffect(() => {
    fetch('http://localhost:8000/api/productCount')
      .then(response => response.json())
      .then(data => setNumProducts(data.count))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <Link to="/AllProducts" className="rounded bg-blue-500 dark:bg-gray-800">
            <div className='flex justify-between p-4'>
              <h1 className='font-bold text-xl text-white'>PRODUITS</h1>
              <img src={produit} className='w-10 h-10' alt="" />
            </div>
            <h1 className='text-white text-3xl font-bold m-4'>{numProducts}</h1>
          </Link>
          <Link to="/Users" className="rounded bg-green-500 dark:bg-gray-800">
            <div className='flex justify-between p-4'>
              <h1 className='font-bold text-xl text-white'>CLIENTS</h1>
              <img src={client} className='w-10 h-10' alt="" />
            </div>
            <h1 className='text-white text-3xl font-bold m-4'>{numClients}</h1>
          </Link>
          <Link to="/Notifications" className="rounded bg-red-500 dark:bg-gray-800">
            <div className='flex justify-between p-4'>
              <h1 className='font-bold text-xl text-white'>NOTIFICATIONS</h1>
              <img src={notification} className='w-10 h-10' alt="" />
            </div>
            <h1 className='text-white text-3xl font-bold m-4'>56</h1>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 gap-4 mb-4">
          <ChartComponent />
        </div>
        <div className="">
          <Statics />
        </div>
      </div>
    </div>
  );
}
