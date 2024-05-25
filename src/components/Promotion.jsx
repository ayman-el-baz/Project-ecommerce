import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './ContextCart'; // Assurez-vous que le chemin est correct
import Cart from './Cart/Cart';

export default function Promotion() {
  const [products, setProducts] = useState([]);
  const [isCartVisible, setCartVisible] = useState(false);
  const { dispatch } = useCart();

  useEffect(() => {
    fetch("http://localhost:8000/api/promotionalProducts")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', product });
    setCartVisible(true);
  };

  const closeCart = () => {
    setCartVisible(false);
  };

  return (
    <section className="bg-gray-100">
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Promotion</h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id}>
                <Link to={`/products/${product.id}`} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={`http://localhost:8000/products/${product.img}`}
                      alt=""
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{product.price} MAD</p>
                  </div>
                </Link>
                <div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className='mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                  >
                    <div className='flex items-center space-x-3'>
                      <svg className="w-8 h-8 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
                      </svg>
                      <p>Ajouter au Panier</p>
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {isCartVisible && (
            <Cart closeCart={closeCart} />
          )}
        </div>
      </div>
    </section>
  );
}
