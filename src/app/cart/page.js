'use client';
import React from "react";
import Image from "next/image";
import { useCart } from "../createcontext/CartContext";

const Cart = () => {
  const { cart } = useCart();

  return (
    <div>
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((product, index) => (
            <li key={index}>
              {product.title}
              <Image src={product.imageSrc} alt="image" width={50} height={50} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
