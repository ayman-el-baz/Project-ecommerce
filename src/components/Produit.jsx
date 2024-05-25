// import React, { useEffect, useState } from 'react'
// import Layout from './LayoutsHome/LayoutH'
// import { Link, useParams } from 'react-router-dom'
// import axios from 'axios';

// export default function Produit() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.post(`http://localhost:8000/api/products/${id}`);
//         console.log("Product data:", response.data);
//         setProduct(response.data.data); // Assurez-vous de vérifier la structure de votre réponse API et d'accéder aux données appropriées
//       } catch (error) {
//         console.error("Error fetching product:", error);
//       }
//     };

//     if (id) {
//       fetchProduct();
//     }
//   }, [id]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }
//   return (
//     <Layout>
//       <div className="bg-white">
//         <div className="pt-6">
//           <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
//             <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
//               <img src={`http://localhost:8000/products/${product.img}`} alt="" srcset="" className="h-full w-full object-cover object-center" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   )
// }

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Layout from './LayoutsHome/LayoutH';

export default function Produit() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.post(`http://localhost:8000/api/products/${id}`);
        console.log("Product data:", response.data);
        setProduct(response.data.data); // Assurez-vous de vérifier la structure de votre réponse API et d'accéder aux données appropriées
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div className="p-10 flex lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
        <div className="bg-gray-300 w-fit rounded-xl mr-20 relative">
          <img
            src={`http://localhost:8000/products/${product.img}`}
            alt=""
            className="w-80 h-80 rounded-lg"
          />
          <div class="absolute inline-flex items-center justify-center w-28 h-20 text-2xl font-bold text-white bg-red-500 border-2 border-white rounded-sm -top-5 -end-6 dark:border-gray-900">-20 %</div>
        </div>
        <div className="mt-4 ">
          <p className="text-4xl font-bold text-blue-900">{product.price} MAD</p>
          <h1 className='text-2xl font-medium text-black'>{product.name}</h1>
        </div>
      </div>
    </Layout>
  )
}
