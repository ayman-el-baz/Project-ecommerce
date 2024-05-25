// CartContext.js
import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingProductIndex = state.findIndex(p => p.id === action.product.id);
      if (existingProductIndex !== -1) {
        const updatedProduct = {
          ...state[existingProductIndex],
          quantity: state[existingProductIndex].quantity + 1
        };
        const updatedState = [...state];
        updatedState[existingProductIndex] = updatedProduct;
        return updatedState;
      }
      return [...state, { ...action.product, quantity: 1 }];
    case 'REMOVE_FROM_CART':
      return state.filter(product => product.id !== action.id);
    case 'SET_CART':
      return action.cart;
    default:
      return state;
  }
};

const loadCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : [];
};

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    return loadCartFromLocalStorage();
  });

  useEffect(() => {
    saveCartToLocalStorage(cart);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
