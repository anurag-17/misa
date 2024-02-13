'use client';
import React from "react";
import Image from "next/image";
import { useCart } from "../createcontext/CartContext";
import Header from "../components/header/header";
import delet from '../../../public/deleteicon.svg';
import Link from "next/link";
import pay from '../../../public/paypal.svg';
import Footer from "../components/footer/footer";

const Cart = () => {
  const { cart,removeFromCart,calculateTotalPrice,clearCart } = useCart();

  return (
    <>
    <div>
    <Header/>
    <div className="mt-56 w-2/3 mx-auto">
            
      <h2 className="text-[40px]">Your Basket</h2>
      <div className="">
      <div className="flex justify-between items-center">
      <p className="text-[22px] opacity-60 my-5 ">Product</p>
      <button className="px-3 py-2 my-4 rounded-lg opacity-50 hover:text-white text-[20px] border border-neutral-400 hover:bg-slate-500" onClick={clearCart}>Clear Cart</button>
      </div>
      {cart.length === 0 ? ( 
        <div>
        <p className="flex justify-center text-[25px] font-bold border px-2 py-4 rounded-lg">Your cart is empty.</p>
        <Link href='/'>
                <button className="text-[22px] hover:border-green-300 flex mx-auto mt-4 px-4 py-2 border border-neutral-500 bg-neutral-200 hover:bg-neutral-900 hover:text-white rounded-lg">Continue shopping</button>
                </Link>
        </div>
      ) : (
        <ul className="">
          {cart.map((product, index) => (
            <li className="flex justify-around items-center text-[25px] border border-gray-400 py-4 rounded-lg my-3" key={index}>
             
              <Image src={product.imageSrc} alt="image" width={150} height={150} />
              <p>Title : {product.title}</p>
              <div>
              <p  className="flex items-center">Qunatity: {product.quantity}
               <Image onClick={()=>removeFromCart(product.id)}
                className="cursor-pointer mx-4" src={delet} alt="product-image" width={25} height={25}/></p>
              </div>
              <p>Product Price : $ {product.price}</p>
              
            </li>
          ))}
      
        </ul>
      )}
          <div className="flex flex-col items-end mb-5 space-y-3">
      <p className="text-[28px] font-medium ">Total Price : $ {calculateTotalPrice()}</p>
     <p className="opacity-40  ">Tax including.Shipping cost and discount calculated at checkout</p>
     <Link href="https://www.controlf5.in/">
     <button className="px-5 py-2 bg-gray-400 text-white font-semibold text-[20px]">Proceed to payment</button>
     </Link>
     <div className=" ">
     <Image src={pay} width={150}  alt="paypal"/>
     </div>
      </div>

      </div>
    </div>
    </div>
    <hr className="my-5"/>
    <Footer/>
</>
  );
};

export default Cart;
