import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SidebarAdmin from '../SidebarAdmin';

export default function AllProducts() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [products, setProducts] = useState([]);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  useEffect(() => {
    axios.get('http://localhost:8000/api/allProduct')
      .then(response => {
        setProducts(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleDelete = (productId) => {
    axios.delete(`http://localhost:8000/api/deleteProduct/${productId}`)
      .then(response => {
        // Update the state to remove the deleted product
        setProducts(products.filter(product => product.id !== productId));
        // Show success message
        toast.success('Produit supprimé avec succès!', {
          position: "top-center", // Positioning the toast to the top-center
          autoClose: 3000, // Auto close after 3 seconds
          hideProgressBar: true, // Hide progress bar
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch(error => {
        console.error('Error deleting product:', error);
        // Show error message
        toast.error('Erreur lors de la suppression du produit.', {
          position: "top-center", // Positioning the toast to the top-center
          autoClose: 3000, // Auto close after 3 seconds
          hideProgressBar: true, // Hide progress bar
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <div className='grid-container'>
      <SidebarAdmin openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            {/* Search form */}
          </div>
          <div>
            {products.length === 0 ? (
              <div className="flex items-center justify-center h-64">
                <p className="text-gray-500 dark:text-gray-400">Aucun produit disponible.</p>
              </div>
            ) : (
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">Photo</th>
                      <th scope="col" className="px-6 py-3">Product name</th>
                      <th scope="col" className="px-6 py-3">Description</th>
                      <th scope="col" className="px-6 py-3">Category</th>
                      <th scope="col" className="px-6 py-3">Price</th>
                      <th scope="col" className="px-6 py-3 text-center">Action</th>
                      <th scope="col" className="px-6 py-3"><span className="sr-only">Edit</span></th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map(product => (
                      <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          <img src={`http://localhost:8000/products/${product.img}`} className='w-8 h-8' alt={product.name} />
                        </td>
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {product.name}
                        </td>
                        <td className="px-6 py-4">{product.desc}</td>
                        <td className="px-6 py-4">{product.category}</td>
                        <td className="px-2 mx-5 py-4">{product.price} MAD</td>
                        <td className="px-6 space-x-3 py-4 text-right">
                          <td className='space-x-6'>
                            <a href="#" className="font-medium text-green-600 dark:text-green-500 hover:underline">Edit</a>
                            <a
                              href="#"
                              className="font-medium text-red-600 dark:text-red-500 hover:underline"
                              onClick={() => handleDelete(product.id)}
                            >
                              Delete
                            </a>
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Afficher</a>
                          </td>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
