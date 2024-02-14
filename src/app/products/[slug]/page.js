"use client";
import Header from "@/app/components/header/header";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React,{useState} from "react";
import { useCart } from "@/app/createcontext/CartContext";
import { products } from "@/app/page";
import { ToastContainer, toast } from "react-toastify";
console.log(products);

const ProductDetails = ({ params }) => {
  const { addToCart, cart } = useCart();
  const [count, setCount] = useState(0);
  const router = useRouter();
  const prodId = params?.slug || "";

  const filterProduct = products.filter((pro) => pro?.id == prodId);

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
        <section className="mt-40 mx-32">
          <h1 className="text-[16px] 2xl:text-[50px] flex justify-center">Product Details</h1>
          <div className="border border-gray-400  mx-auto p-8 rounded-lg shadow-2xl">
            {filterProduct.map((product) => (
              <div key={product.productId}>
                <div className="flex flex-row  ">
                  <div className="border border-gray-400 px-20 py-10 rounded-lg shadow-2xl">
                    <Image className="" src={product.imageSrc} alt="image" />
                  </div>
                  <div className="ml-20 space-y-5">
                   
                    
                    <p className="text-[25px]">Title: <span className="text-[30px]">{product.title}</span></p>
                    <p className="text-[25px]">Price: <span className="text-[30px]">$ {product.price}</span></p>
                    <div className="flex gap-x-4">
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

                        <p className="text-[20px] 2xl:text-[27px] flex items-center">
                          {count}
                        </p>
                        <button
                          className="p-2 2xl:p-3 px-4 2xl:px-5 rounded-lg bg-neutral-500 text-white text-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                          onClick={handleIncrement}
                        >
                          +
                        </button>
                      </div>
                      <div>
                        <button
                          className="bg-black text-white py-2 px-4 2xl:py-3 2xl:px-8 rounded text-[16px] 2xl:text-[18px] transition-transform transform hover:scale-105 duration-300 ease-in-out border border-black hover:bg-transparent hover:text-black hover:border hover:border-black"
                          onClick={() => {
                            addToCart(filterProduct[0]);
                          toast.success("Product added sucessfully")
                          }}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                    <p className="text-[25px]">Discription: <span className="text-[20px]">{product.discription}</span></p>
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
