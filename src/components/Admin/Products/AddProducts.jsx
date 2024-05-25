import React, { useState } from 'react';
import SidebarAdmin from '../SidebarAdmin';

export default function AddProducts({ onAdd }) {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    price: "",
    promotion: "",
    img: null,
    category: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      img: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, desc, price, promotion, img, category } = formData;

    const formDataToSend = new FormData();
    formDataToSend.append("name", name);
    formDataToSend.append("desc", desc);
    formDataToSend.append("price", price);
    formDataToSend.append("promotion", promotion);
    formDataToSend.append("img", img);
    formDataToSend.append("category", category);

    fetch("http://localhost:8000/api/addProduct", {
      method: "POST",
      body: formDataToSend
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFormData({
          name: "",
          desc: "",
          price: "",
          promotion: "",
          img: null,
          category: ""
        });
        if (onAdd) {
          onAdd();
          toast.success('Produit ajoute avec succès!', {
            position: "top-center", // Positioning the toast to the top-center
            autoClose: 3000, // Auto close after 3 seconds
            hideProgressBar: true, // Hide progress bar
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Erreur lors de l'ajoute du produit.", {
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

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className='grid-container'>
      <SidebarAdmin openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <div className="p-4 sm:ml-64">
        <h1 className='mx-auto mt-16 m-8 font-bold text-4xl'>Ajouter Produit</h1>
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div className="sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <div className="flex items-center">
                <label htmlFor="name" className="w-40 mr-2 text-sm font-medium text-gray-700 dark:text-gray-200">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md dark:border-gray-700 dark:bg-gray-900 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-600 dark:focus:border-indigo-600" />
              </div>
              <div className="flex items-center">
                <label htmlFor="desc" className="w-40 mr-2 text-sm font-medium text-gray-700 dark:text-gray-200">Description:</label>
                <textarea id="desc" name="desc" value={formData.desc} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md dark:border-gray-700 dark:bg-gray-900 text-gray-900 resize-none focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-600 dark:focus:border-indigo-600"></textarea>
              </div>
              <div className="flex items-center">
                <label htmlFor="price" className="w-40 mr-2 text-sm font-medium text-gray-700 dark:text-gray-200">Price:</label>
                <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md dark:border-gray-700 dark:bg-gray-900 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-600 dark:focus:border-indigo-600" />
              </div>
              <div className="flex items-center">
                <label htmlFor="promotion" className="w-40 mr-2 text-sm font-medium text-gray-700 dark:text-gray-200">promotion:</label>
                <input type="number" id="promotion" name="promotion" value={formData.promotion} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md dark:border-gray-700 dark:bg-gray-900 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-600 dark:focus:border-indigo-600" />
              </div>
              <div className="flex items-center">
                <label htmlFor="img" className="w-40 mr-2 text-sm font-medium text-gray-700 dark:text-gray-200">Image:</label>
                <input type="file" id="img" name="img" onChange={handleFileChange} className="w-full px-3 py-2  dark:border-gray-700 dark:bg-gray-900 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-600 dark:focus:border-indigo-600" />
              </div>
              <div className="flex items-center">
                <label htmlFor="category" className="w-40 mr-2 text-sm font-medium text-gray-700 dark:text-gray-200">Category:</label>
                <select id="category" name="category" value={formData.category} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md dark:border-gray-700 dark:bg-gray-900 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-600 dark:focus:border-indigo-600">
                  <option value="réparation">Réparation</option>
                  <option value="amélioration">Amélioration</option>
                  <option value="entretien">Entretien</option>
                  <option value="installation">Installation</option>
                </select>
              </div>
              <button type="submit" className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Ajouter</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
