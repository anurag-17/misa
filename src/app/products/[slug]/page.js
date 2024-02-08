"use client";
import Header from "@/app/components/header/header";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { products } from "@/app/page";
console.log(products);

const ProductDetails = ({ params }) => {
  const router = useRouter();
  const prodId = params?.slug || "";

  const filterProduct = products.filter((pro) => pro?.id == prodId);

  return (
    <>
      <div>
        <Header />
        <section className="mt-40 mx-32">
          <h1 className="text-[50px] flex justify-center">Product Details</h1>
          <div className="border border-gray-400  mx-auto p-8 rounded-lg shadow-2xl">
            {filterProduct.map((product) => (
              <div key={product.productId}>
                <div className="flex flex-row  ">
                  <div className="border border-gray-400 px-20 py-10 rounded-lg shadow-2xl">
                    <Image className="" src={product.imageSrc} alt="image" />
                  </div>
                  <div className="ml-20 space-y-5">
                    <p className="text-[25px]">Name: <span className="text-[30px]">{product.id}</span></p>
                    
                    <p className="text-[25px]">Title: <span className="text-[30px]">{product.title}</span></p>
                    <p className="text-[25px]">Discription: <span className="text-[20px]">{product.discription}</span></p>
                    <p className="text-[25px]">Price: <span className="text-[30px]">{product.price}</span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductDetails;
