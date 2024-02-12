'use client';
import React from "react";
import Image from "next/image";
import { useCart } from "../createcontext/CartContext";
import Header from "../components/header/header";
import delet from '../../../public/deleteicon.svg';

const Cart = () => {
  const { cart,removeFromCart } = useCart();

  return (
    <>
    <div>
    <Header/>
    <div className="mt-44 w-2/3 mx-auto">
            
      <h2 className="text-[40px]">Your Basket</h2>
      <p className="text-[22px] opacity-60 my-5 ">Product</p>
      <div className="">
      {cart.length === 0 ? (
        <p className="flex justify-center text-[25px] font-bold border px-2 py-4 rounded-lg">Your cart is empty.</p>
      ) : (
        <ul className="">
          {cart.map((product, index) => (
            <li className="flex justify-around items-center text-[25px] border border-gray-400 py-4 rounded-lg my-3" key={index}>
             
              <Image src={product.imageSrc} alt="image" width={150} height={150} />
              <p>Title : {product.title}</p>
              <div>
              <p  className="flex items-center">Qunatity: 1
               <Image onClick={()=>removeFromCart(product.id)}
                className="cursor-pointer mx-4" src={delet} alt="product-image" width={25} height={25}/></p>
              </div>
              <p>Product Price : {product.price}</p>
              
            </li>
          ))}
        </ul>
      )}
      </div>
    </div>
    </div>
</>
  );
};

export default Cart;
