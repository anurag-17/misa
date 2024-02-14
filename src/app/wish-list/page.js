"use client";
import React from "react";
import Header from "../components/header/header";
import { useCart } from "../createcontext/CartContext";
import Image from "next/image";
import delet from "../../../public/deleteicon.svg";
import Link from "next/link";
import Footer from "../components/footer/footer";

const WishList = () => {
  const { wishlist, removeFromWishlist, addToCart,clearWishlist } = useCart();

  return (
    <>
      <div>
        <Header/>
        <div className="mt-24 md:mt-32 2xl:mt-44 w-2/3 mx-auto">
          <div>
          <div className="flex justify-between items-center">
            <p className="text-[24px] 2xl:text-[40px]">Wishlist</p>
            {wishlist.length > 0 && (
            <button className="2xl:py-2 py-1 px-2 2xl:px-4 my-2 text-[14px] md:text-[16px] bg-neutral-300 hover:bg-neutral-400 rounded-lg hover:text-white" onClick={clearWishlist}>Remove all</button>
            )}
            </div>
            {wishlist.length === 0 ? (
              <div>
                <p className="flex justify-center text-[20px] 2xl:text-[25px] font-bold border px-1 2xl:px-2 py-3 2xl:py-4 rounded-lg">
                  Your wishlist is empty
                </p>
                <div>
                <Link href='/'>
                <button className=" text-[14px] 2xl:text-[22px] hover:border-green-300 flex mx-auto mt-3 2xl:mt-4 px-3 2xl:px-4 py-1 2xl:py-2 border border-neutral-500 bg-neutral-200 hover:bg-neutral-900 hover:text-white rounded-lg">Continue shopping</button>
                </Link>
                </div>
              </div>
            ) : (
              wishlist.map((item) => (
               
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row justify-around items-center text-[14px] 2xl:text-[25px] border border-gray-400 py-4 rounded-lg my-3"
                >
                  <Image
                  className="w-20 2xl:w-32"
                    src={item.imageSrc}
                    alt="image"
                    width={150}
                    height={150}
                  />
                  <p>Title : {item.title}</p>
                  <div>
                    <p className="flex items-center">
                      Qunatity: 1
                      <Image
                    
                        onClick={() => removeFromWishlist(item.id)}
                        className="cursor-pointer w-4 2xl:w-9 mx-4"
                        src={delet}
                        alt="product-image"
                        width={25}
                        height={25}
                      />
                    </p>
                  </div>
                  <p>Product Price : {item.price}</p>
                  <div>
                    <button
                      className="bg-black text-white py-2 px-4 2xl:py-3 2xl:px-8 rounded text-[14px] 2xl:text-[18px] transition-transform transform hover:scale-105 duration-300 ease-in-out border border-black hover:bg-transparent hover:text-black hover:border hover:border-black"
                      onClick={() => {
                        addToCart(item);
                        removeFromWishlist(item.id);
                        alert("Product added to cart!");
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <hr className="mt-16 2xl:mt-44"/>
      <Footer/>
    </>
  );
};

export default WishList;
