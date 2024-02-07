'use client';
import React from 'react';
import Header from '../header/header';
import Image from 'next/image';
import p1 from "../../../../public/P1.svg";
import p2 from "../../../../public/P2.svg";
import p3 from "../../../../public/P3.svg";
import p4 from "../../../../public/P4.svg";
import p5 from "../../../../public/P5.svg";
import p6 from "../../../../public/P6.svg";
import p7 from "../../../../public/P7.png";
import p8 from "../../../../public/P8.png";
import p9 from "../../../../public/P9.png";
import Footer from '../footer/footer';

const BestSeller = () => {
  return (
    <>
    <Header/>
        <div className='mt-36'>
       
        <div className="collections text-[22px] sm:text-[24px] md:text-xl lg:text-3xl xl:text-3xl  2xl:text-5xl mt-5 sm:mt-6 md:mt-6 lg:mt-14 xl:mt-4 2xl:mt-32 flex justify-center fontf ">
            Our BestSeller Products
          </div>

          <div
            data-aos="zoom-in"
            className="grid md:grid-cols-3 grid-cols-1 gap-y-7 md:gap-y-0 justify-around px-24 sm:px-28 md:px-12 lg:px-16 xl:px-24 2xl:px-28 gap-1 mt-4 sm:mt-4 md:mt-6 lg:mt-9 xl:mt-12 2xl:mt-16"
          >
            <div className="">
              <div
                className=" 2xl:w-full  md:h-[90%] xl:h-[80%] 2xl:h-full"
                id="purple"
              >
                <Image
                  className="mx-auto h-72 sm:h-72 md:h-64 lg:h-80 xl:h-full  py-4 md:py-4 lg:py-7 xl:py-  hover:scale-110 ease-in duration-500 cursor-pointer hover:drop-shadow-2xl"
                  src={p1}
                  alt="image"
                />
              </div>
              <h1 className="tsmall flex justify-center md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-xl  mt-3 md:mt-3 lg:mt-5 xl:mt-7 ">
                CORRECTORS
              </h1>
            </div>
            <div className="">
              <div
                className="w-full md:h-[90%] xl:h-[80%] 2xl:h-full"
                id="purple"
              >
                <Image
                  className="mx-auto h-72 sm:h-72 md:h-64 lg:h-80 xl:h-full py-4 md:py-4 lg:py-7 xl:py-12 hover:scale-110 ease-in duration-500 cursor-pointer hover:drop-shadow-2xl"
                  src={p2}
                  alt="image"
                />
              </div>
              <h1 className="tsmall flex justify-center md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-xl mt-3 md:mt-3 lg:mt-5 xl:mt-7">
                PERLY EYES COLLECTION
              </h1>
            </div>
            <div className="">
              <div
                className="w-full md:h-[90%] xl:h-[80%] 2xl:h-full"
                id="purple"
              >
                <Image
                  className="mx-auto h-72 sm:h-72 md:h-64 lg:h-80 xl:h-full py-4 md:py-4 lg:py-7 xl:py-9 hover:scale-110 ease-in duration-500 cursor-pointer hover:drop-shadow-2xl"
                  src={p3}
                  alt="image"
                />  
              </div>
              <h1 className="tsmall flex justify-center md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-xl mt-3 md:mt-3 lg:mt-5 xl:mt-7">
                BLUSH BLUSH
              </h1>
            </div>
          </div>

          <div
            data-aos="zoom-in"
            className="grid md:grid-cols-3 grid-cols-1 gap-y-7 md:gap-y-0 justify-around px-28 md:px-12 lg:px-16 xl:px-24 2xl:px-28 gap-1 mt-7 md:mt-8 lg:mt-7 xl:-mt-1 2xl:mt-36"
          >
            <div className="">
              <div
                className="w-full  md:h-[90%] xl:h-[80%] 2xl:h-full"
                id="purple"
              >
                <Image
                  className="mx-auto h-72 sm:h-72 md:h-64 lg:h-80 xl:h-full py-4 md:py-4 lg:py-7 xl:py-9 hover:scale-110 ease-in duration-500 cursor-pointer "
                  src={p4}
                  alt="image"
                />
              </div>
              <h1 className="tsmall flex justify-center md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-xl mt-3 md:mt-3 lg:mt-5 xl:mt-7">
                SATIN LIPSTICKS
              </h1>
            </div>
            <div className="">
              <div
                className="w-full md:h-[90%] xl:h-[80%] 2xl:h-full"
                id="purple"
              >
                <Image
                  className="mx-auto h-72 sm:h-72 md:h-64 lg:h-80 xl:h-full py-4 md:py-4 lg:py-7 xl:py-9 hover:scale-110 ease-in duration-500 cursor-pointer "
                  src={p5}
                  alt="image"
                />
              </div>
              <h1 className="tsmall flex justify-center md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-xl mt-3 md:mt-3 lg:mt-5 xl:mt-7">
                FOUNDATIONS
              </h1>
            </div>
            <div className="">
              <div
                className="w-full md:h-[90%] xl:h-[80%] 2xl:h-full"
                id="purple"
              >
                <Image
                  className="mx-auto h-72 sm:h-72 md:h-64 lg:h-80 xl:h-full py-4 md:py-4 lg:py-7 xl:py-9 hover:scale-110 ease-in duration-500 cursor-pointer "
                  src={p6}
                  alt="image"
                />
              </div>
              <h1 className="tsmall flex justify-center md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-xl mt-3 md:mt-3 lg:mt-5 xl:mt-7">
                EYES
              </h1>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="grid md:grid-cols-3 grid-cols-1 gap-y-7 md:gap-y-0 justify-around px-28 md:px-12 lg:px-16 xl:px-24 2xl:px-28 gap-1 mt-4 sm:mt-4 md:mt-5 lg:mt-8 xl:mt-10 2xl:mt-20"
          >
            <div className="">
              <div className="w-full xl:h-[80%] 2xl:h-full" id="voilets">
                <Image
                  className="mx-auto py-3 sm:py-5 md:py-6 xl:pb-16 lg:py-12 h-80 sm:h-80 md:h-80 lg:h-96 xl:h-full hover:scale-110 ease-in duration-500 cursor-pointer hover:drop-shadow-2xl"
                  src={p7}
                  alt="image"
                />
              </div>
              <h1 className="tsmall flex justify-center text-[16px] md:text-[11px] lg:text-[12px] xl:text-[14px] 2xl:text-xl my-3 md:my-3 lg:my-4 xl:my-5">
                SMOOTHING SMOOTHING BASE
              </h1>
            </div>
            <div className="">
              <div className="w-full xl:h-[80%] 2xl:h-full" id="voilets">
                <Image
                  className="mx-auto  py-3 sm:py-5 md:py-4   lg:py-10 h-80 sm:h-80  md:h-80 lg:h-96 xl:h-full hover:scale-110 ease-in duration-500 cursor-pointer"
                  src={p8}
                  alt="image"
                />
              </div>
              <h1 className="tsmall flex justify-center sm:text-[16px] md:text-[11px] lg:text-[12px] xl:text-[14px] 2xl:text-xl my-3 md:my-3 lg:my-4 xl:my-5">
                EYE LINER LIKER BLACK
              </h1>
            </div>
            <div className="">
              <div className="w-full xl:h-[80%] 2xl:h-full" id="voilets">
                <Image
                  className="mx-auto py-3 sm:py-5 md:py-4 lg:py-9 h-80 sm:h-80  md:h-80 lg:h-96 xl:h-full hover:scale-110 ease-in duration-500 cursor-pointer "
                  src={p9}
                  alt="image"
                />
              </div>
              <h1 className="tsmall flex justify-center sm:text-[16px] md:text-[11px] lg:text-[12px] xl:text-[14px] 2xl:text-xl my-3 md:my-3 lg:my-4 xl:my-5">
                LIPLIKER LIPSTICK MISAPARIS
              </h1>
            </div>
          </div> 

          {/* -------footer---------    */}
          
            <div className='mt-20'>
          <Footer/></div>
        </div>
    </>
  )
}

export default BestSeller