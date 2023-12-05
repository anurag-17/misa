import React from "react";
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
import twitter from "../../public/twitter.png";
import facebook from "../../public/facebook.png";
import instag from "../../public/instagrams.png";
import tiktok from "../../public/tiktok.png";
import youtube from "../../public/youtube.png";

const Page = () => {
  return (
    <>
      <section>
        <div className="container-fluid" id="family">
        <div className="fixed  
                w-full top-0 left-0 bg-white">
          <div className="py-4 flex items-center justify-center mx-24 2xl:my-5 xl:my-2 lg:my-1 relative">
            <Image
              src={misa}
              alt="image"
              className="absolute 2xl:w-52 xl:w-36 lg:w-32 "
            />
            <div className="flex 2xl:gap-9 ml-auto ">
              <Image className="cursor-pointer w-6" src={search} alt="image" />
              <Image className="cursor-pointer w-6" src={user} alt="image" />
              <Image className="cursor-pointer w-6" src={basket} alt="image" />
            </div>
          </div>

          <hr className="border-t-2 border-[#315031] opacity-25" />
          <div className="meanu lg:block hidden ">
            <ul className="flex justify-center lg:text-[15px] xl:text-xs 2xl:text-base lg:space-x-4 xl:space-x-7 2xl:space-x-16   py-3 ">
              <li> <Link href="#" className="hover:underline">
              HOME AND NEWS
                    </Link></li>
              <li><Link href="#" className="hover:underline">
              BESTSELLERS
                    </Link></li>
              <li><Link href="#" className="hover:underline">
              COMPLEXION
                    </Link></li>
              <li><Link href="#" className="hover:underline">
              EYES
                    </Link></li>
              <li><Link href="#" className="hover:underline">
              LIPS
                    </Link></li>
              <li><Link href="#" className="hover:underline">
              CARE
                    </Link></li>
              <li><Link href="#" className="hover:underline">
              MAKEUP SESSION
                    </Link></li>
              <li><Link href="#" className="hover:underline">
              SERVICES
                    </Link></li>
            </ul>
          </div>
          </div>
          <div id="main-img" className="z-50 mt-32 flex 2xl:pt-72 xl:pt-52 lg:pt-40">
            <div className="lg:px-16 xl:px-24 2xl:px-28  middle-text">
              <div className="lg:text-3xl xl:text-4xl 2xl:text-6xl lg:pb-1 xl:pb-2 2xl:pb-4 bright fontf">
                BRIGHT
              </div>
              <div className="lg:text-3xl xl:text-4xl 2xl:text-6xl lg:pb-5 xl:pb-10 2xl:pb-16 bright lips fontf">
                MOVING LIPS
              </div>
              <button className="lg:mb-52 xl:mb-56 2xl:mb-52 border border-black rounded-full lg:py-2 xl:py-2 2xl:py-4 lg:px-5 xl:px-5 2xl:px-10 lg:text-[12px] xl:text-[16px] font-medium shop">
                SHOP NOW
              </button>
            </div>
          </div>
          <div className="lg:text-4xl xl:text-4xl 2xl:text-5xl 2xl:mt-28 flex justify-center fontf">
            OUR COLLECTIONS
          </div>
          {/* ----------section 2---------- */}
          <div className="flex justify-around lg:px-16 xl:px-24 2xl:px-28 gap-1 mt-16">
            <div className="w-1/3">
              <div id="purple">
                <Image
                  className="mx-auto lg:h-80 xl:h-full lg:py-7 xl:py-9"
                  src={p1}
                  alt="image"
                />
              </div>
              <h1 className="flex justify-center xl:text-lg 2xl:text-xl my-5">
                CORRECTORS
              </h1>
            </div>
            <div className="w-1/3">
              <div id="purple">
                <Image
                  className="mx-auto lg:h-80 xl:h-full lg:py-7 xl:py-12"
                  src={p2}
                  alt="image"
                />
              </div>
              <h1 className="flex justify-center xl:text-lg 2xl:text-xl my-5">
                PERLY EYES COLLECTION
              </h1>
            </div>
            <div className="w-1/3">
              <div id="purple">
                <Image
                  className="mx-auto lg:h-80 xl:h-full lg:py-7 xl:py-9"
                  src={p3}
                  alt="image"
                />
              </div>
              <h1 className="flex justify-center xl:text-lg 2xl:text-xl my-5">
                BLUSH BLUSH
              </h1>
            </div>
          </div>

          <div className="flex justify-around lg:px-16 xl:px-24 2xl:px-28 gap-1 lg:mt-7 xl:mt-10 2xl:mt-16">
            <div className="w-1/3">
              <div id="purple">
                <Image
                  className="mx-auto lg:h-80 xl:h-full lg:py-7 xl:py-9"
                  src={p4}
                  alt="image"
                />
              </div>
              <h1 className="flex justify-center xl:text-lg 2xl:text-xl my-5">
                SATIN LIPSTICKS
              </h1>
            </div>
            <div className="w-1/3">
              <div id="purple">
                <Image
                  className="mx-auto  lg:h-80 xl:h-full lg:py-7 xl:py-9"
                  src={p5}
                  alt="image"
                />
              </div>
              <h1 className="flex justify-center xl:text-lg 2xl:text-xl my-5">
                FOUNDATIONS
              </h1>
            </div>
            <div className="w-1/3">
              <div id="purple">
                <Image
                  className="mx-auto lg:h-80 xl:h-full lg:py-7 xl:py-9"
                  src={p6}
                  alt="image"
                />
              </div>
              <h1 className="flex justify-center xl:text-lg 2xl:text-xl my-5">
                EYES
              </h1>
            </div>
          </div>
          {/* --------section 3------ */}
          <div className="px-28 mt-16" id="box1">
            <div className="flex flex-col items-center lg:py-32 xl:py-36 2xl:py-72 text-white">
              <div className="fontf  lg:text-[35px] xl:text-[40px] 2xl:text-[54px]">
                PERLAY EYES
              </div>
              <div className="fontf lg:text-[35px] xl:text-[40px] 2xl:text-[54px]">
                COLLECTION
              </div>
              <div>
                <button className="lg:mr-[80px] xl:mr-[120px] 2xl:mr-52 lg:text-[14px] xl:text-[16px] lg:px-4 xl:px-6 lg:py-2 xl:py-3 lg:mt-5 xl:mt-8 border border-white rounded-full">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>

          {/* ---------SECTION 5---------- */}
          <div className="lg:text-3xl  xl:text-4xl 2xl:text-5xl lg:mt-16 xl:mt-20 2xl:mt-10 flex justify-center fontf">
            NEW ARRIVAL
          </div>

          <div className="flex justify-around lg:px-16 xl:px-24 2xl:px-28 gap-1 mt-16">
            <div className="w-1/3">
              <div id="voilets">
                <Image
                  className="mx-auto py-12 lg:h-96 2xl:h-full"
                  src={p7}
                  alt="image"
                />
              </div>
              <h1 className="flex justify-center xl:text-lg 2xl:text-xl my-5">
                SMOOTHING SMOOTHING BASE
              </h1>
            </div>
            <div className="w-1/3">
              <div id="voilets">
                <Image
                  className="mx-auto py-10 lg:h-96 2xl:h-full"
                  src={p8}
                  alt="image"
                />
              </div>
              <h1 className="flex justify-center xl:text-lg 2xl:text-xl my-5">
                EYE LINER LIKER BLACK
              </h1>
            </div>
            <div className="w-1/3">
              <div id="voilets">
                <Image
                  className="mx-auto py-9 lg:h-96 2xl:h-full"
                  src={p9}
                  alt="image"
                />
              </div>
              <h1 className="flex justify-center xl:text-lg 2xl:text-xl my-5">
                LIPLIKER LIPSTICK MISAPARIS
              </h1>
            </div>
          </div>

          {/* ----------SECTION 6---------- */}
         <div className="lg:px-16 xl:px-24 2xl:px-28 mt-20">
         <div>
          
         </div>
         </div>

          <div className="lg:px-16 xl:px-24 2xl:px-28 mt-20">
            <div className="flex justify-between lg:py-12 xl:py-16 lg:px-16 xl:px-20  bg-black">
              <Image
                className="lg:w-40 xl:w-56  2xl:w-64"
                src={g1}
                alt="image"
              />
              <Image
                className="lg:w-40 xl:w-56  2xl:w-64"
                src={g2}
                alt="image"
              />
              <Image
                className="lg:w-40 xl:w-56  2xl:w-64"
                src={g3}
                alt="image"
              />
              <Image
                className="lg:w-40 xl:w-56  2xl:w-64"
                src={g4}
                alt="image"
              />
            </div>
          </div>
          {/* ----------section 7---------- */}
          <div className="w-full  mt-24 lg:px-40 xl:px-44 2xl:px-48">
            <Image className="w-full" src={rating1} alt="image" />
            <Image className="w-full" src={rating2} alt="image" />
          </div>

          {/* -----------section 8--------- */}
          <div className="fontf lg:text-3xl xl:text-4xl 2xl:text-5xl mt-20 flex justify-center">
            FOLLOW US ON INSTAGRAM
          </div>
          <div className=" flex gap-6 mt-9">
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
          <div className="flex items-center justify-between lg:px-16 xl:px-24 2xl:px-28 mt-16">
            <div>
              <div className="fontf lg:text-[30px] xl:text-[36px] 2xl:text-[46px] lg:pb-4 2xl:pb-7 ">
                SUBSCRIBE TO OUR NEWS LETTER
              </div>
              <div className="lg:text-[14px]  xl:text-sm 2xl:text-base">
                Join us today at no cost and be the first to know about our
                latest updates, discounts and special offers.
              </div>
            </div>
            <div className="relative w-[30%]">
              <input
                className="border w-full border-[#BABABA] bg-[#F5F5F5]  xl:px-2 2xl:px-2 lg:py-2 xl:py-3 2xl:py-4 text-black"
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

          <hr className="lg:mx-16 xl:mx-24 2xl:mx-28 lg:mt-14 xl:mt-20 border-t-2 border-[#315031] opacity-25" />
          {/* ----------section 10------------------------- */}
          <div className="lg:px-16 xl:px-24 2xl:px-28 mt-20">
            <footer className="">
              <div className="flex flex-wrap justify-between">
                <div className="space-y-3 w-[25%]">
                  <Image className="mb-5" src={misa} alt="image" />

                  <p className="lg:text-xs xl:text-sm 2xl:text-base">
                    Our products are certified “guaranteed French origin”
                    <br /> and environmentally friendly.
                  </p>
                  <p className="lg:text-xs xl:text-sm 2xl:text-base">
                    All of our makeup products are formulated and manufactured
                    in France with natural ingredients and using sustainable
                    processes. Very high quality pigments.
                  </p>

                  <div className="flex gap-4 pt-6">
                    <Link id="roundd" href="https://www.facebook.com">
                      <Image src={twitter} />
                    </Link>
                    <Link id="roundd" href="https://www.instagram.com">
                      <Image src={facebook} />
                    </Link>
                    <Link id="roundd" href="https://twitter.com">
                      <Image src={instag} />
                    </Link>
                    <Link id="roundd" href="https://tiktok.com">
                      <Image src={tiktok} />
                    </Link>
                    <Link id="roundd" href="https://youtube.com">
                      <Image src={youtube} />
                    </Link>
                  </div>
                </div>

                <div className="  ">
                  <h2 className="lg:text-lg xl:text-xl mb-6 uppercase fontf ">
                    QUICK LINKS
                  </h2>
                  <ul className="xl:text-sm 2xl:text-base dark:text-gray-400 lg:space-y-2 xl:space-y-2 2xl:space-y-3 ">
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
                  <h2 className="mb-6   uppercase fontf text-xl">
                    CUSTOMER SERVICES
                  </h2>
                  <ul className="xl:text-sm 2xl:text-base dark:text-gray-400 lg:space-y-2 xl:space-y-2 2xl:space-y-3 ">
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

                <div className="space-y-7 lg:mt-0 md:mt-7  text-xl lg:w-[19%] xl:w-[17%] 2xl:w-[12%] ">
                  <p className="fontf">COUNTRY REGION</p>
                  <input
                    className="border py-2 w-full"
                    type="email"
                    placeholder=" EUR € | France"
                  />
                </div>
              </div>
              <hr className="mt-14 xl:mx- 2xl:mx- lg:mx- md:mx- sm:mx- mx- border-t-2 border-[#315031] opacity-25" />

              <div className="xl:py-3 2xl:py-6 ">
                <div className="xl:text-sm 2xl:text-base font-light  text-[#AAA] flex justify-center text-center ">
                  © 2023 TALH All Rights Reserved.
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
