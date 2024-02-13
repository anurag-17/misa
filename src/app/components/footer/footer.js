'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import misa from "../../../../public/misa.svg";
import twitter from "../../../../public/twitter.svg";
import facebook from "../../../../public/facebook.svg";
import instag from "../../../../public/instag.svg";
import tiktok from "../../../../public/tiktok.svg";
import youtube from "../../../../public/youtube.svg";


const Footer = () => {
  return (
   <>
      <div className="px-5 sm:px-5 md:px-12 lg:px-16 xl:px-24 2xl:px-28 mt-10 sm:mt-10 md:mt-14 lg:mt-16 xl:mt-24">
            <footer className="">
              <div className="flex md:flex-wrap md:flex-row flex-col md:justify-between">
                <div className="fot-makup xl:space-y- 2xl:space-y- w-[90%] sm:w-[90%] md:w-[90%]  lg:w-[24%] xl:w-[25%] 2xl:w-[25%]">
                  <Image
                    className="w-[27%] sm:w-[27%] md:w-[25%] lg:w-[50%] xl:w-[50%] 2xl:w-30"
                    src={misa}
                    alt="image"
                  />

                  <p className="text-[12px] sm:text-[12px] md:text-[12px] lg:text-[9px] xl:text-[10px] 2xl:text-sm mt-5 sm:mt-5 md:mt-5 lg:mt-5 xl:mt-5 2xl:mt-6">
                    Our products are certified “guaranteed French origin”
                    <br /> and environmentally friendly.
                  </p>
                  <p className="text-[12px] sm:text-[12px] md:text-[12px] lg:text-[9px] xl:text-[10px] 2xl:text-sm mt-3 sm:mt-3 md:mt-3  lg:mt-2 xl:mt-2 2xl:mt-4">
                    All of our makeup products are formulated and manufactured
                    in France with natural ingredients and using sustainable
                    processes. Very high quality pigments.
                  </p>

                  <div
                    data-aos="fade-right"
                    className="flex gap-4 sm:gap-4 md:gap-4 lg:gap-5 xl:gap-4 2xl:gap-6 pt-3 sm:pt-3 md:pt-4 lg:pt-6 xl:pt-6 2xl:pt-9"
                  >
                    <Link id="roundd" href="https://www.twitter.com">
                      <Image
                        className="w-5 sm:w-5 md:w-6 lg:w-4 xl:w-4  2xl:w-8"
                        src={twitter}
                        alt="image"
                      />
                    </Link>
                    <Link id="roundd" href="https://www.facebook.com">
                      <Image
                        className="w-5 sm:w-5 md:w-6 lg:w-4 xl:w-4  2xl:w-8"
                        src={facebook}
                        alt="image"
                      />
                    </Link>
                    <Link id="roundd" href="https://instagram.com">
                      <Image
                        className="w-5 sm:w-5 md:w-6 lg:w-4 xl:w-4  2xl:w-7"
                        src={instag}
                        alt="image"
                      />
                    </Link>
                    <Link id="roundd" href="https://tiktok.com">
                      <Image
                        className="w-5 sm:w-5 md:w-6 lg:w-4 xl:w-4  2xl:w-7"
                        src={tiktok}
                        alt="image"
                      />
                    </Link>
                    <Link id="roundd" href="https://youtube.com">
                      <Image
                        className="w-5 sm:w-5 md:w-6 lg:w-4 xl:w-4  2xl:w-7"
                        src={youtube}
                        alt="image"
                      />
                    </Link>
                  </div>
                </div>

                <div className="mt-8 sm:mt-8 md:mt-8 lg:mt-0  ">
                  <h2 className=" lg:text-[14px] xl:text-[15px] 2xl:text-xl  uppercase fontf ">
                    QUICK LINKS
                  </h2>
                  <ul className="text-[12px] sm:text-[12px] md:text-[12px] mt-3 md:mt-3 lg:mt-5 xl:mt-6 2xl:mt-6 lg:text-[9px] xl:text-[10px] 2xl:text-sm md:space-y-1 lg:space-y-2 xl:space-y-2 2xl:space-y-3 ">
                    <li className="">
                      <Link href="/" className="hover:underline">
                        Home
                      </Link>
                    </li>
                    <li className="">
                      <Link href="/bestSeller" className="hover:underline">
                        Bestsellers
                      </Link>
                    </li>
                    <li className="">
                      <Link href="/giftsection" className="hover:underline">
                        Gift Section
                      </Link>
                    </li>
                    
                    <li className="">
                      <Link href="/recycle" className="hover:underline">
                        Services
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 sm:mt-8 md:mt-8 lg:mt-0 ">
                  <h2 className="   uppercase fontf lg:text-[14px] xl:text-[15px] 2xl:text-xl">
                    CUSTOMER SERVICES
                  </h2>
                  <ul className="mt-3 sm:mt-3 text-[12px] sm:text-[12px] md:text-[12px] md:mt-3 lg:mt-5 xl:mt-6 2xl:mt-6 lg:text-[9px] xl:text-[10px] 2xl:text-sm  md:space-y-1 lg:space-y-2 xl:space-y-2 2xl:space-y-3 ">
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

                <div className="country lg:mt-0  mt-8 sm:mt-8 md:mt-8 lg:text-[14px] xl:text-[15px] 2xl:text-xl w-[50%] md:w-[30%] lg:w-[14%] xl:w-[15%] 2xl:w-[12%] ">
                  <p className="fontf">COUNTRY REGION</p>
                  <input
                    className="border xl:py-0 2xl:py-2 w-full mt-3 md:mt-3 lg:mt-5 xl:mt-6 2xl:mt-6"
                    type="email"
                    placeholder=" EUR € | France"
                  />
                </div>
              </div>
              <hr className="mt-14 xl:mx- 2xl:mx- lg:mx- md:mx- sm:mx- mx- border opacity-80" />

              <div className="py-2 lg:py-3 xl:py-3 2xl:py-6 ">
                <div className="text-[10px] sm:text-[10px] md:text-[10px] lg:text-[9px] xl:text-[11px] 2xl:text-base font-light  text-[#7D7D7D] flex justify-center text-center ">
                  © 2024 MisaParis. All Rights Reserved.
                </div>
              </div>
            </footer>
          </div>
   </>
  )
}

export default Footer