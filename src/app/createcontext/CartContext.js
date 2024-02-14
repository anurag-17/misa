'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
 

  // Load cart from local storage on component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setCart(storedCart);
    setWishlist(storedWishlist);
  }, []);  // Empty dependency array ensures this effect runs only once on mount

  const saveCartToLocalStorage = (newCart) => {
    localStorage.setItem('cart', JSON.stringify(newCart));
  };
  const saveWishlistToLocalStorage = (newWishlist) => {
    localStorage.setItem('wishlist', JSON.stringify(newWishlist));
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((p) => p.id === product.id);
  
      if (existingProduct) {
        // Increment quantity if the product is already in the cart
        existingProduct.quantity += 1;
      } else {
        // Add a new product with quantity 1 to the cart
        prevCart = [...prevCart, { ...product, quantity: 1 }];
      }
  
      saveCartToLocalStorage(prevCart);
      return prevCart;
    });
  };
  

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const newCart = prevCart.filter((product) => product.id !== productId);
      saveCartToLocalStorage(newCart);
      return newCart;
    });
  };


  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => {
      if (!prevWishlist.includes(product)) {
        const newWishlist = [...prevWishlist, product];
        saveWishlistToLocalStorage(newWishlist);
        return newWishlist;
      }
      return prevWishlist;
    });
  };
  const removeFromWishlist = (productId) => {
    setWishlist((prevWishlist) => {
      const newWishlist = prevWishlist.filter((id) => id.id !== productId);
      saveWishlistToLocalStorage(newWishlist);
      return newWishlist;
    });
  };
  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };
  const clearCart = () => {
    setCart([]);
    saveCartToLocalStorage([]);
  };
  const clearWishlist=()=>{
    setWishlist([]);
    saveWishlistToLocalStorage([]);
  };
 
  return (
    <CartContext.Provider value={{ cart,clearWishlist, addToCart, removeFromCart, addToWishlist, removeFromWishlist,calculateTotalPrice,clearCart,wishlist }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
