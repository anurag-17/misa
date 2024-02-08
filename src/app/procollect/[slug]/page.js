"use client";
import Header from "@/app/components/header/header";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

import { produc } from "@/app/page";
import Footer from "@/app/components/footer/footer";
console.log(produc);

const Procollection = ({ params }) => {
  const router = useRouter();
  const prodId = params?.slug || "";

  const filterProduct = produc.filter((pro) => pro?.id == prodId);

  return (
    <>
      <div>
        <Header />
        <section className="mt-40 mx-32">
          <h1 className="text-[50px] flex justify-center">Product Details</h1>
          <div className="  mx-auto p-8">
            {filterProduct.map((product) => (
              <div key={product.productId}>
                <div className="flex flex-row  justify-evenly">
                  <div className="border border-gray-400  rounded-lg shadow-2xl w-[30%] flex justify-center py-10">
                    <Image className="w-[50%]" src={product.imageSrc} alt="image" />
                  </div>
                  <div className="space-y-5 w-[50%]">
                    {/* <p className="text-[25px]">Name: <span className="text-[30px]">{product.id}</span></p> */}
                    
                    <p className="text-[35px]">Title: <span className="text-[35px]">{product.title}</span></p>
                    <p className="text-[35px]">Discription: <span className="text-[20px] opacity-60 leading-normal">{product.discription}</span></p>
                    <p className="text-[35px]">Price: <span className="text-[35px]">{product.price}</span></p>
                    <p className="text-[35px]">Services : Cash on delivery available</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <hr className="mt-10" />
      <Footer/>
    </>
  );
};

export default Procollection;
