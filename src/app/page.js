"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import misa from "../../public/misa.svg";
import srch from "../../public/search.svg";
import search from "../../public/Union.svg";
import user from "../../public/Vector (1).svg";
import basket from "../../public/Vector (2).svg";
import p1 from "../../public/P1.svg";
import p2 from "../../public/P2.svg";
import p3 from "../../public/P3.svg";
import p4 from "../../public/P4.svg";
import p5 from "../../public/P5.svg";
import p6 from "../../public/P6.svg";
import p7 from "../../public/P7.png";
import p8 from "../../public/P8.png";
import p9 from "../../public/P9.png";
import g1 from "../../public/Group 31.svg";
import g2 from "../../public/Group 29.svg";
import g3 from "../../public/Group 28.svg";
import g4 from "../../public/Group 30.svg";
import r1 from "../../public/Rectangle 18.svg";
import r2 from "../../public/Rectangle 19.svg";
import r3 from "../../public/Rectangle 20.svg";
import r4 from "../../public/Rectangle 21.svg";
import r5 from "../../public/Rectangle 22.svg";
import instagram from "../../public/instagram.png";
import arrow from "../../public/arrow.png";
import rating1 from "../../public/rating1.png";
import rating2 from "../../public/rating2.png";
import twitter from "../../public/twitter.svg";
import facebook from "../../public/facebook.svg";
import instag from "../../public/instag.svg";
import tiktok from "../../public/tiktok.svg";
import youtube from "../../public/youtube.svg";
import xcross from "../../public/xcross.svg";
import google from "../../public/google.svg";
import starr from "../../public/starrate.svg";
import blutik from "../../public/tickcircle.svg";
import righttik from "../../public/righttik.svg";
import aaa from "../../public/aalpha.svg";
import uuu from "../../public/usersvg.svg";
import rrr from "../../public/salpha.svg";
import kkk from "../../public/kalpha.svg";
import iii from "../../public/ialpha.svg";
import sss from "../../public/salpha.svg";

const Page = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const openSearch = () => {
    setIsSearchOpen(true);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  const performSearch = () => {
    // Add your search functionality here
    // For example, you can use the 'searchTerm' state to perform a search
    console.log("Performing search for:", searchTerm);

    // Close the search popup after performing the search
    closeSearch();
  };

  return (
    <>
      <section>
        <div className="container-fluid" id="family">
          <div
            className="z-50 fixed  
                w-full top-0 left-0 bg-white"
          >
            <div className=" py-4 flex items-center justify-center mx-24 2xl:my-5 xl:my-2 lg:my-1 relative">
              <Image
                src={misa}
                alt="image"
                className="absolute 2xl:w-52 xl:w-36 lg:w-32 "
              />
              <div className="flex 2xl:gap-9 xl:gap-6 lg:gap-6 ml-auto ">
                <div className="search-container">
                  {!isSearchOpen && (
                    <div className="search-icon" onClick={openSearch}>
                      <Image
                        className="lg:w-[75%] xl:w-4 2xl:w-7  cursor-pointer"
                        src={search}
                        alt="image"
                      />
                    </div>
                  )}
                  {isSearchOpen && (
                    <div className="search-popup flex items-center">
                      <span className="close-icon" onClick={closeSearch}>
                        <Image className="xl:w-4 2xl:w-6 xl:h-4 2xl:h-6" src={xcross} alt="cross" />
                      </span>
                      <input
                        className="border xl:w-36 2xl:w-52 2xl:p-2 flex-grow" // Use flex-grow to allow the input to grow and take remaining space
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  )}
                </div>

                <Image className="cursor-pointer lg:w-4 xl:w-4 2xl:w-6" src={user} alt="image" />
                <Image
                  className="cursor-pointer lg:w-4 xl:w-4 2xl:w-6"
                  src={basket}
                  alt="image"
                />
              </div>
            </div>

            <hr className=" opacity" />
            <div className="meanu lg:block hidden ">
              <ul className=" flex justify-center lg:text-[12px] xl:text-xs 2xl:text-base lg:space-x-6 xl:space-x-7 2xl:space-x-16  lg:py-2 xl:py-3 ">
                <li>
                
                  <Link href="#" className="hover:underline">
                    HOME AND NEWS
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    BESTSELLERS
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    COMPLEXION
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    EYES
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    LIPS
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    CARE
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    MAKEUP SESSION
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    SERVICES
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            id="main-img"
            className=" mt-24 2xl:mt-32 flex 2xl:pt-72 xl:pt-52 lg:pt-48"
          >
            <div className="lg:px-16 xl:px-24 2xl:px-28  middle-text">
              <div className="lg:text-4xl xl:text-4xl 2xl:text-6xl lg:pb-1 xl:pb-2 2xl:pb-4 bright fontf">
                BRIGHT
              </div>
              <div className="lg:text-4xl xl:text-4xl 2xl:text-6xl lg:pb-10 xl:pb-10 2xl:pb-16 bright lips fontf">
                MOVING LIPS
              </div>
              <button className="lg:mb-36 xl:mb-56  2xl:mb-60 border border-black rounded-full lg:py-3 xl:py-3 2xl:py-5 lg:px-8 xl:px-9 2xl:px-14 lg:text-[9px] xl:text-[10px] 2xl:text-[16px] font-medium shop">
                SHOP NOW
              </button>
            </div>
          </div>
          {/* ----------section 2---------- */}

          <div className="collections lg:text-3xl xl:text-3xl  2xl:text-5xl lg:mt-14 xl:mt-4 2xl:mt-32 flex justify-center fontf">
            OUR COLLECTIONS
          </div>

          <div className="grid grid-cols-3  justify-around lg:px-16 xl:px-24 2xl:px-28 gap-1 xl:mt-12 2xl:mt-16">
            <div className="">
              <div className=" 2xl:w-full xl:h-[80%] 2xl:h-full" id="purple">
                <Image
                  className="mx-auto lg:h-80 xl:h-full lg:py-7 xl:py-"
                  src={p1}
                  alt="image"
                />
              </div>
              <h1 className="flex justify-center xl:text-[14px] 2xl:text-xl mt-7 ">
                CORRECTORS
              </h1>
            </div>
            <div className="">
              <div className="w-full xl:h-[80%] 2xl:h-full" id="purple">
                <Image
                  className="mx-auto lg:h-80 xl:h-full lg:py-7 xl:py-12"
                  src={p2}
                  alt="image"
                />
              </div>
              <h1 className="flex justify-center xl:text-[14px] 2xl:text-xl mt-7">
                PERLY EYES COLLECTION
              </h1>
            </div>
            <div className="">
              <div className="w-full xl:h-[80%] 2xl:h-full" id="purple">
                <Image
                  className="mx-auto lg:h-80 xl:h-full lg:py-7 xl:py-9"
                  src={p3}
                  alt="image"
                />
              </div>
              <h1 className="flex justify-center xl:text-[14px] 2xl:text-xl mt-7">
                BLUSH BLUSH
              </h1>
            </div>
          </div>

          <div className="flex justify-around lg:px-16 xl:px-24 2xl:px-28 gap-1 lg:mt-7 xl:-mt-1 2xl:mt-36">
            <div className="w-1/3">
              <div className="w-full xl:h-[80%] 2xl:h-full" id="purple">
                <Image
                  className="mx-auto lg:h-80 xl:h-full lg:py-7 xl:py-9"
                  src={p4}
                  alt="image"
                />
              </div>
              <h1 className="flex justify-center xl:text-[14px] 2xl:text-xl my-5">
                SATIN LIPSTICKS
              </h1>
            </div>
            <div className="w-1/3">
              <div className="w-full xl:h-[80%] 2xl:h-full" id="purple">
                <Image
                  className="mx-auto  lg:h-80 xl:h-full lg:py-7 xl:py-9"
                  src={p5}
                  alt="image"
                />
              </div>
              <h1 className="flex justify-center xl:text-[14px] 2xl:text-xl my-5">
                FOUNDATIONS
              </h1>
            </div>
            <div className="w-1/3">
              <div className="w-full xl:h-[80%] 2xl:h-full" id="purple">
                <Image
                  className="mx-auto lg:h-80 xl:h-full lg:py-7 xl:py-9"
                  src={p6}
                  alt="image"
                />
              </div>
              <h1 className="flex justify-center xl:text-[14px] 2xl:text-xl my-5">
                EYES
              </h1>
            </div>
          </div>
          {/* --------section 3------ */}
          <div className="px-28 2xl:mt-44" id="box1">
            <div className="flex flex-col items-center xl:pr-20 2xl:pr-20 lg:py-32 xl:py-40 2xl:py-64 text-white perleye">
              <div className="fontf  lg:text-[35px] xl:text-[40px] 2xl:text-[54px]">
                PERLAY EYES
              </div>
              <div className="fontf lg:text-[35px] xl:text-[40px] 2xl:text-[54px] 2xl:leading-normal xl:leading-9">
                COLLECTION
              </div>
              <div>
                <button className="lg:mr-[80px] xl:mr-[120px] 2xl:mr-40 lg:text-[14px] xl:text-[10px] 2xl:text-[16px] lg:px-4  xl:px-10  2xl:px-12 lg:py-2 xl:py-4 2xl:py-4 lg:mt-5 xl:mt-10 2xl:xl:mt-10 border border-white rounded-full">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>

          {/* ---------SECTION 5---------- */}
          <div className="lg:text-3xl  xl:text-3xl 2xl:text-5xl lg:mt-16 xl:mt-20 2xl:mt-24 flex justify-center fontf">
            NEW ARRIVAL
          </div>

          <div className="flex justify-around lg:px-16 xl:px-24 2xl:px-28 gap-1 xl:mt-10 2xl:mt-20">
            <div className="w-1/3">
              <div className="w-full xl:h-[80%] 2xl:h-full" id="voilets">
                <Image
                  className="mx-auto py-12 lg:h-96 2xl:h-full"
                  src={p7}
                  alt="image"
                />
              </div>
              <h1 className="flex justify-center xl:text-[14px] 2xl:text-xl my-5">
                SMOOTHING SMOOTHING BASE
              </h1>
            </div>
            <div className="w-1/3">
              <div className="w-full xl:h-[80%] 2xl:h-full" id="voilets">
                <Image
                  className="mx-auto  py-10 lg:h-96 2xl:h-full"
                  src={p8}
                  alt="image"
                />
              </div>
              <h1 className="flex justify-center xl:text-[14px] 2xl:text-xl my-5">
                EYE LINER LIKER BLACK
              </h1>
            </div>
            <div className="w-1/3">
              <div className="w-full xl:h-[80%] 2xl:h-full" id="voilets">
                <Image
                  className="mx-auto py-9 lg:h-96 2xl:h-full"
                  src={p9}
                  alt="image"
                />
              </div>
              <h1 className="flex justify-center xl:text-[14px] 2xl:text-xl my-5">
                LIPLIKER LIPSTICK MISAPARIS
              </h1>
            </div>
          </div>

          {/* ----------SECTION 6---------- */}
          {/* <div className="lg:px-16 xl:px-24 2xl:px-28 mt-20">
            <div></div>
          </div> */}

          <div className="lg:px-16 xl:px-24 2xl:px-28 xl:mt-8 2xl:mt-44">
            <div className="flex justify-between lg:py-12 xl:py-14 2xl:py-16 lg:px-16 xl:px-20  bg-black">
              <Image
                className="lg:w-40 xl:w-44  2xl:w-64"
                src={g1}
                alt="image"
              />
              <Image
                className="lg:w-40 xl:w-44  2xl:w-64"
                src={g2}
                alt="image"
              />
              <Image
                className="lg:w-40 xl:w-44  2xl:w-64"
                src={g3}
                alt="image"
              />
              <Image
                className="lg:w-40 xl:w-44  2xl:w-64"
                src={g4}
                alt="image"
              />
            </div>
          </div>
          {/* ----------section 7---------- */}
          <div className="xl:mx-48 2xl:mx-64 bg-gray-50 py-7 rounded-lg xl:mt-24 2xl:mt-36">
            <div className="flex justify-between items-center px-4">
              <div className="flex">
                <div className="">
                  <Image className="xl:w-14 2xl:w-16" src={google} alt="google" />
                </div>
                <div className="ml-2 2xl:space-y-1 xl:space-y-1">
                  <p className="text-[#8B7F84] xl:text-[15px] 2xl:text-xl">MisaParis</p>
                  <div className="flex gap-1">
                    <Image className="xl:w-3 2xl:w-5" src={starr} alt="rating" />
                    <Image className="xl:w-3 2xl:w-5" src={starr} alt="rating" />
                    <Image className="xl:w-3 2xl:w-5" src={starr} alt="rating" />
                    <Image className="xl:w-3 2xl:w-5" src={starr} alt="rating" />
                    <Image className="xl:w-3 2xl:w-5" src={starr} alt="rating" />
                  </div>
                  <p className="text-[#8B7F84] xl:text-[12px] 2xl:text-[16px]">19 notice</p>
                </div>
              </div>
              <div>
              <button className="bg-[#F2F2F3] xl:px-4 2xl:px-8 xl:py-3 2xl:py-3 xl:text-[13px] 2xl:text-lg rounded-lg ">
                Leave a comment
              </button></div>
            </div>
          </div>

          <div className="xl:mx-48 2xl:mx-64 xl:mt-5 2xl:mt-4 grid grid-cols-3 gap-5">
            <div className="">
              <div className="bg-gray-50 py-5 px-3  2xl:space-y-1 rounded-lg ">
                <div className="flex gap-1">
                  <Image className="xl:w-3 2xl:w-5" src={starr} alt="rating" />
                  <Image className="xl:w-3 2xl:w-5" src={starr} alt="rating" />
                  <Image className="xl:w-3 2xl:w-5" src={starr} alt="rating" />
                  <Image className="xl:w-3 2xl:w-5" src={starr} alt="rating" />
                  <Image className="xl:w-3 2xl:w-5" src={starr} alt="rating" />
                  <Image className="xl:w-4 2xl:w-6" src={blutik} alt="rating" />
                </div>

                <div className="flex 2xl:mt-0 xl:mt-2">
                  <Image className="xl:w-6 2xl:w-8" src={righttik} alt="righttik" />
                  <p className="text-[#8B7F84] xl:text-[13px] 2xl:text-lg">
                    Warm welcome from Mireille
                  </p>
                </div>
                <div className="flex">
                  <Image className="xl:w-6 2xl:w-8" src={righttik} alt="righttik" />
                  <p className="text-[#8B7F84] xl:text-[13px] 2xl:text-lg">Unbeatable price</p>
                </div>
                <div className="flex">
                  <Image className="xl:w-6 2xl:w-8" src={righttik} alt="righttik" />
                  <p className="text-[#8B7F84] xl:text-[13px] 2xl:text-lg ">Quality products</p>
                </div>
              </div>

              <div className="flex xl:mt-4 2xl:mt-6">
                <div>
                  <Image className="xl:w-12 2xl:w-full" src={aaa} alt="google" />
                </div>
                <div className="ml-2">
                  <p className="gradient-text xl:text-[14px] 2xl:text-xl font-bold ">
                    AI-generated summary
                  </p>
                  <p className="text-[#8B7F84] xl:text-[12px] 2xl:text-base">Based on 19 reviews</p>
                </div>
              </div>
            </div>

            <div className="">
              <div className="bg-gray-50 py-5 px-3 space-y-2 rounded-lg">
                <div className="flex justify-between">
                  <div className="flex gap-1">
                    <Image className="xl:w-3 2xl:w-5" src={starr} alt="rating" />
                    <Image className="xl:w-3 2xl:w-5" src={starr} alt="rating" />
                    <Image className="xl:w-3 2xl:w-5" src={starr} alt="rating" />
                    <Image className="xl:w-3 2xl:w-5" src={starr} alt="rating" />
                    <Image className="xl:w-3 2xl:w-5" src={starr} alt="rating" />
                    <Image className="xl:w-4 2xl:w-6" src={blutik} alt="rating" />
                  </div>
                  <div>
                    <Image className="xl:w-4 2xl:w-6" src={google} alt="google" />
                  </div>
                </div>

                <p className="text-[#8B7F84] xl:text-[13px] 2xl:text-lg leading-4">
                  Always a pleasure to visit this store.A warm welcome from
                  Mireille and I always come out with very good quality breast
                  products at an unbeatable price.Their lipstick are amazing
                  i...
                </p>
              </div>

              <div className="flex xl:mt-4 2xl:mt-6">
                <div>
                  <Image className="xl:w-12 2xl:w-full" src={uuu} alt="google" />
                </div>
                <div className="ml-2">
                  <p className="text-[#8B7F84] xl:text-[14px] 2xl:text-xl font-semibold ">
                    AI-generated summary
                  </p>
                  <p className="text-[#8B7F84] xl:text-[12px] 2xl:text-base">4 month ago</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="bg-gray-50 py-5 px-3 space-y-2 rounded-lg">
              <div className="flex justify-between">
                  <div className="flex gap-1">
                    <Image className="xl:w-3 2xl:w-5" src={starr} alt="rating" />
                    <Image className="xl:w-3 2xl:w-5" src={starr} alt="rating" />
                    <Image className="xl:w-3 2xl:w-5" src={starr} alt="rating" />
                    <Image className="xl:w-3 2xl:w-5" src={starr} alt="rating" />
                    <Image className="xl:w-3 2xl:w-5" src={starr} alt="rating" />
                    <Image className="xl:w-4 2xl:w-6" src={blutik} alt="rating" />
                  </div>
                  <div>
                    <Image className="xl:w-4 2xl:w-6" src={google} alt="google" />
                  </div>
                </div>

                <p className="text-[#8B7F84] xl:text-[13px] 2xl:text-lg leading-4">
                  I went to the MisaParis boutique,the staff is very welcoming
                  and friendly.Personally i found the service and advice very
                  interesting and the quantity of the products excellent.I
                  recommend....
                </p>
              </div>

              <div className="flex xl:mt-4 2xl:mt-6">
                <div>
                  <Image className="xl:w-12 2xl:w-full" src={rrr} alt="google" />
                </div>
                <div className="ml-2">
                  <p className="text-[#8B7F84] xl:text-[14px] 2xl:text-xl font-semibold ">
                    Ribero
                  </p>
                  <p className="text-[#8B7F84] xl:text-[12px] 2xl:text-base">2 months ago</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="bg-gray-50 py-5 px-3 space-y-2 rounded-lg">
              <div className="flex justify-between">
                  <div className="flex gap-1">
                    <Image className="xl:w-3 2xl:w-5" src={starr} alt="rating" />
                    <Image className="xl:w-3 2xl:w-5" src={starr} alt="rating" />
                    <Image className="xl:w-3 2xl:w-5" src={starr} alt="rating" />
                    <Image className="xl:w-3 2xl:w-5" src={starr} alt="rating" />
                    <Image className="xl:w-3 2xl:w-5" src={starr} alt="rating" />
                    <Image className="xl:w-4 2xl:w-6" src={blutik} alt="rating" />
                  </div>
                  <div>
                    <Image className="xl:w-4 2xl:w-6" src={google} alt="google" />
                  </div>
                </div>

                <p className="text-[#8B7F84] xl:text-[13px] 2xl:text-lg leading-4">
                  I visited the MisaParis boutique on rue de Marignan in the 8th.A warm welcome and express makeup offered to test the products and I was won over by the HD fluid foundation.A visit to the store and you will...
                </p>
              </div>

              <div className="flex xl:mt-4 2xl:mt-6">
                <div>
                  <Image className="xl:w-12 2xl:w-full" src={kkk} alt="google" />
                </div>
                <div className="ml-2">
                  <p className="text-[#8B7F84] xl:text-[14px] 2xl:text-xl font-semibold ">
                    Karion Diallo
                  </p>
                  <p className="text-[#8B7F84] xl:text-[12px] 2xl:text-base">6 months ago</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="bg-gray-50 py-5 px-3 space-y-2 rounded-lg">
              <div className="flex justify-between">
                  <div className="flex gap-1">
                    <Image className="xl:w-3 2xl:w-5" src={starr} alt="rating" />
                    <Image className="xl:w-3 2xl:w-5" src={starr} alt="rating" />
                    <Image className="xl:w-3 2xl:w-5" src={starr} alt="rating" />
                    <Image className="xl:w-3 2xl:w-5" src={starr} alt="rating" />
                    <Image className="xl:w-3 2xl:w-5" src={starr} alt="rating" />
                    <Image className="xl:w-4 2xl:w-6" src={blutik} alt="rating" />
                  </div>
                  <div>
                    <Image className="xl:w-4 2xl:w-6" src={google} alt="google" />
                  </div>
                </div>

                <p className="text-[#8B7F84] xl:text-[13px] 2xl:text-lg leading-4">
                Very friendly welcome,quality products with a range of colors for all skin type,the textures are very pleasent,i highly recommend this preety Parisian brand.A visit to the store and you will
                </p>
              </div>

              <div className="flex xl:mt-4 2xl:mt-6">
                <div>
                  <Image className="xl:w-12 2xl:w-full" src={iii} alt="google" />
                </div>
                <div className="ml-2">
                  <p className="text-[#8B7F84] xl:text-[14px] 2xl:text-xl font-semibold rounded-lg">
                    Ivideh Moghtader
                  </p>
                  <p className="text-[#8B7F84] xl:text-[12px] 2xl:text-base">One year ago</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="bg-gray-50 py-5 px-3 space-y-2 rounded-lg">
              <div className="flex justify-between">
                  <div className="flex gap-1">
                    <Image className="xl:w-3 2xl:w-5" src={starr} alt="rating" />
                    <Image className="xl:w-3 2xl:w-5" src={starr} alt="rating" />
                    <Image className="xl:w-3 2xl:w-5" src={starr} alt="rating" />
                    <Image className="xl:w-3 2xl:w-5" src={starr} alt="rating" />
                    <Image className="xl:w-3 2xl:w-5" src={starr} alt="rating" />
                    <Image className="xl:w-4 2xl:w-6" src={blutik} alt="rating" />
                  </div>
                  <div>
                    <Image className="xl:w-4 2xl:w-6" src={google} alt="google" />
                  </div>
                </div>

                <p className="text-[#8B7F84] xl:text-[13px] 2xl:text-lg leading-4">
                A very welcome and accessible  setting for all with products designed for black and white skin at unbeatable price.I invite you to take a look because you will be satisfied with the service
                </p>
              </div>

              <div className="flex xl:mt-4 2xl:mt-6">
                <div>
                  <Image className="xl:w-12 2xl:w-full" src={sss} alt="google" />
                </div>
                <div className="ml-2">
                  <p className="text-[#8B7F84] xl:text-[14px] 2xl:text-xl font-semibold ">
                    Safi Safi
                  </p>
                  <p className="text-[#8B7F84] xl:text-[12px] 2xl:text-base">10 months ago</p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="w-full  mt-24 lg:px-40 xl:px-44 2xl:px-48">
            <Image className="w-full" src={rating1} alt="image" />
            <Image className="w-full" src={rating2} alt="image" />
          </div> */}

          {/* -----------section 8--------- */}
          <div className="fontf lg:text-3xl xl:text-[32px] 2xl:text-5xl xl:mt-32 2xl:mt-36 flex justify-center">
            FOLLOW US ON INSTAGRAM
          </div>
          <div className=" flex gap-6 xl:mt-7 2xl:mt-12">
            <div id="image2">
              <Image id="img1" className=" w-96 " src={r1} alt="image" />
              <div className="img3">
                <Image id="img4" src={instagram} alt="image" />
              </div>
            </div>
            <div id="image2">
              <Image id="img1" className=" w-96 " src={r2} alt="image" />
              <div className="img3">
                <Image id="img4" src={instagram} alt="image" />
              </div>
            </div>
            <div id="image2">
              <Image id="img1" className=" w-96 " src={r3} alt="image" />
              <div className="img3">
                <Image id="img4" src={instagram} alt="image" />
              </div>
            </div>
            <div id="image2">
              <Image id="img1" className=" w-96 " src={r4} alt="image" />
              <div className="img3">
                <Image id="img4" src={instagram} alt="image" />
              </div>
            </div>
            <div id="image2">
              <Image id="img1" className=" w-96 " src={r5} alt="image" />
              <div className="img3">
                <Image id="img4" src={instagram} alt="image" />
              </div>
            </div>
          </div>
          {/* ----------section 9---------- */}
          <div className="flex items-center justify-between lg:px-16 xl:px-24 2xl:px-28 xl:mt-16 2xl:mt-20">
            <div>
              <div className="fontf lg:text-[30px] xl:text-[32px] 2xl:text-[46px] lg:pb-4 2xl:pb-7 ">
                SUBSCRIBE TO OUR NEWS LETTER
              </div>
              <div className="lg:text-[14px]  xl:text-[12px] 2xl:text-base">
                Join us today at no cost and be the first to know about our
                latest updates, discounts and special offers.
              </div>
            </div>
            <div className="relative w-[30%]">
              <input
                className="border w-full border-[#BABABA] bg-[#F5F5F5]  xl:px-2 2xl:px-2 lg:py-2 xl:py-2 2xl:py-4 text-black"
                type="email"
                placeholder="Email"
              />
              <Image
                id="view1"
                src={arrow}
                alt="Right Arrow"
                className="absolute top-1/2 right-2 transform -translate-y-1/2 w-5"
              />
            </div>
          </div>

          <hr className="lg:mx-16 xl:mx-24 2xl:mx-28 lg:mt-14 xl:mt-24 border opacity-80" />
          {/* ----------section 10------------------------- */}
          <div className="lg:px-16 xl:px-24 2xl:px-28 xl:mt-24">
            <footer className="">
              <div className="flex flex-wrap justify-between">
                <div className="xl:space-y- 2xl:space-y- xl:w-[25%] 2xl:w-[25%]">
                  <Image className=" xl:w-[50%] 2xl:w-30" src={misa} alt="image" />

                  <p className="lg:text-xs xl:text-[10px] 2xl:text-sm xl:mt-5 2xl:mt-6">
                    Our products are certified “guaranteed French origin”
                    <br /> and environmentally friendly.
                  </p>
                  <p className="lg:text-xs xl:text-[10px] 2xl:text-sm xl:mt-2 2xl:mt-4">
                    All of our makeup products are formulated and manufactured
                    in France with natural ingredients and using sustainable
                    processes. Very high quality pigments.
                  </p>

                  <div className="flex xl:gap-4 2xl:gap-6 xl:pt-6 2xl:pt-9">
                    <Link id="roundd" href="https://www.twitter.com">
                      <Image className="xl:w-4  2xl:w-8" src={twitter} />
                    </Link>
                    <Link id="roundd" href="https://www.facebook.com">
                      <Image className="xl:w-4  2xl:w-8" src={facebook} />
                    </Link>
                    <Link id="roundd" href="https://instagram.com">
                      <Image className="xl:w-4  2xl:w-7" src={instag} />
                    </Link>
                    <Link id="roundd" href="https://tiktok.com">
                      <Image className="xl:w-4  2xl:w-7" src={tiktok} />
                    </Link>
                    <Link id="roundd" href="https://youtube.com">
                      <Image className="xl:w-4  2xl:w-7" src={youtube} />
                    </Link>
                  </div>
                </div>

                <div className="  ">
                  <h2 className="lg:text-lg xl:text-[15px] 2xl:text-xl  uppercase fontf ">
                    QUICK LINKS
                  </h2>
                  <ul className="xl:mt-6 2xl:mt-6 xl:text-[10px] 2xl:text-sm dark:text-gray-400 lg:space-y-2 xl:space-y-2 2xl:space-y-3 ">
                    <li className="">
                      <Link href="#" className="hover:underline">
                        Home And News
                      </Link>
                    </li>
                    <li className="">
                      <Link href="#" className="hover:underline">
                        Bestsellers
                      </Link>
                    </li>
                    <li className="">
                      <Link href="#" className="hover:underline">
                        Complexion
                      </Link>
                    </li>
                    <li className="">
                      <Link href="#" className="hover:underline">
                        Eyes
                      </Link>
                    </li>
                    <li className="">
                      <Link href="#" className="hover:underline">
                        Lips
                      </Link>
                    </li>
                    <li className="">
                      <Link href="#" className="hover:underline">
                        Care
                      </Link>
                    </li>
                    <li className="">
                      <Link href="#" className="hover:underline">
                        Makeup Sessions
                      </Link>
                    </li>
                    <li className="">
                      <Link href="#" className="hover:underline">
                        Services
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className=" ">
                  <h2 className="   uppercase fontf xl:text-[15px] 2xl:text-xl">
                    CUSTOMER SERVICES
                  </h2>
                  <ul className="xl:mt-6 2xl:mt-6  xl:text-[10px] 2xl:text-sm dark:text-gray-400 lg:space-y-2 xl:space-y-2 2xl:space-y-3 ">
                    <li className="">
                      <Link href="#" className="hover:underline">
                        Delivery & Return
                      </Link>
                    </li>
                    <li className="">
                      <Link href="#" className="hover:underline">
                        Terms & Conditions
                      </Link>
                    </li>
                    <li className="">
                      <Link href="#" className="hover:underline">
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className=" lg:mt-0 md:mt-7  xl:text-[15px] 2xl:text-xl lg:w-[19%] xl:w-[15%] 2xl:w-[12%] ">
                  <p className="fontf">COUNTRY REGION</p>
                  <input
                    className="border xl:py-0 2xl:py-2 w-full xl:mt-6 2xl:mt-6"
                    type="email"
                    placeholder=" EUR € | France"
                  />
                </div>
              </div>
              <hr className="mt-14 xl:mx- 2xl:mx- lg:mx- md:mx- sm:mx- mx- border opacity-80" />

              <div className="xl:py-3 2xl:py-6 ">
                <div className="xl:text-[11px] 2xl:text-base font-light  text-[#7D7D7D] flex justify-center text-center ">
                  © 2023 MisaParis. All Rights Reserved.
                </div>
              </div>
            </footer>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
