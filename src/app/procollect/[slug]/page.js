"use client";
import Header from "@/app/components/header/header";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useCart } from "@/app/createcontext/CartContext";

import { produc } from "@/app/page";
import Footer from "@/app/components/footer/footer";
import { ToastContainer, toast } from "react-toastify";
console.log(produc);

const Procollection = ({ params }) => {
  const { addToCart, cart } = useCart();
  const [count, setCount] = useState(0);
  const router = useRouter();
  const prodId = params?.slug || "";

  console.log(cart);
  const filterProduct = produc.filter((pro) => pro?.id == prodId);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <>
    <ToastContainer/>
      <div>
        <Header />
        <section className="mt-20 2xl:mt-40 mx-5 2xl:mx-32">
          <h1 className=" text-[25px] 2xl:text-[50px] flex justify-center">
            Product Details
          </h1>
          <div className="  mx-auto py-4 2xl:p-8">
            {filterProduct.map((product) => (
              <div key={product.productId}>
                <div className="flex md:flex-row flex-col  md:justify-evenly items-center">
                  <div className="border border-gray-400  rounded-lg shadow-2xl w-[250px] md:w-[30%] flex justify-center py-10">
                    <Image
                      className="w-[50%]"
                      src={product.imageSrc}
                      alt="image"
                    />
                  </div>
                  <div className="space-y-2 2xl:space-y-5  w-full md:w-[50%]">
                    {/* <p className="text-[22px]">Name: <span className="text-[30px]">{product.id}</span></p> */}
                    <p className="text-[16px] 2xl:text-[35px]">
                      Title:
                      <span className="text-[16px] 2xl:text-[35px]">
                        {product.title}
                      </span>
                    </p>
                    <p className="text-[16px] 2xl:text-[35px]">
                      Price : 
                      <span className="text-[16px] 2xl:text-[35px]">
                        $ {product.price}
                      </span>
                    </p>
                    <div className="flex flex-col md:flex-row gap-x-2 2xl:gap-x-4">
                      <div className="flex gap-2">
                        <button
                          className={`p-2 2xl:p-3 px-[17px] 2xl:px-5 rounded-lg bg-neutral-500 text-white text-xl ${
                            count === 0
                              ? "cursor-not-allowed opacity-50"
                              : "hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
                          }`}
                          onClick={handleDecrement}
                          disabled={count === 0}
                        >
                          -
                        </button>

                        <p className="text-[16px] 2xl:text-[27px] flex items-center">
                          {count}
                        </p>
                        <button
                          className="p-2 2xl:p-3 px-4 2xl:px-5 rounded-lg bg-neutral-500 text-white text-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                          onClick={handleIncrement}
                        >
                          +
                        </button>
                      </div>
                      <div >
                        <button
                          className="mt-3 md:mt-0 bg-black text-white py-2 px-9 2xl:py-3 2xl:px-8 rounded text-[12px] 2xl:text-[18px] transition-transform transform hover:scale-105 duration-300 ease-in-out border border-black hover:bg-transparent hover:text-black hover:border hover:border-black"
                          onClick={() => {
                            addToCart(filterProduct[0]);
                            toast.success("Product added sucessfully")
                          }}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                    <p className="text-[16px] 2xl:text-[35px]">
                      Services : Cash on delivery available
                    </p>
                    <p className="text-[16px] 2xl:text-[35px]">Discription:</p>
                    <div className="w-full">
                    <p className="text-[14px] 2xl:text-[20px] opacity-60 leading-tight md:leading-normal">
                      {product.discription}
                    </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <hr className="mt-10" />
      <Footer />
    </>
  );
};

export default Procollection;
