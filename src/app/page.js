import React from "react";
import Image from "next/image";
import misa from "../../public/misa.svg";
import srch from "../../public/search.svg";
import p1 from "../../public/P1.svg";
import p2 from "../../public/P2.svg";
import p3 from "../../public/P3.svg";
import p4 from "../../public/P4.svg";
import p5 from "../../public/P5.svg";
import p6 from "../../public/P6.svg";
import p7 from "../../public/P7.png";
import p8 from "../../public/P8.png";
import p9 from "../../public/P9.png";
import g1 from "../../public/Group 31.png";
import g2 from "../../public/Group 29.png";
import g3 from "../../public/Group 28.png";
import g4 from "../../public/Group 30.png";
import r1 from "../../public/Rectangle 18.png";
import r2 from "../../public/Rectangle 19.png";
import r3 from "../../public/Rectangle 20.png";
import r4 from "../../public/Rectangle 21.png";
import r5 from "../../public/Rectangle 22.png";
import instagram from "../../public/instagram.png";
import arrow from "../../public/arrow.png";

const Page = () => {
  return (
    <>
      <section>
        <div className="container-fluid" id="family">
          <div className="flex justify-center mx-24 2xl:my-5 xl:my-2 lg:my-1">
            <Image
              src={misa}
              alt="image"
              className="ml-auto 2xl:w-52 xl:w-36 lg:w-32"
            />
            <Image
              src={srch}
              alt="image"
              className="ml-auto 2xl:w-44 xl:w-24 lg:w-20"
            />
          </div>
          <hr className="border-t-2 border-[#315031] opacity-25" />
          <div className="meanu">
            <ul className="flex justify-center lg:text-[15px] xl:text-xs 2xl:text-base lg:space-x-4 xl:space-x-7 2xl:space-x-16   py-3 ">
              <li>HOME AND NEWS</li>
              <li>BESTSELLERS</li>
              <li>COMPLEXION</li>
              <li>EYES</li>
              <li>LIPS</li>
              <li>CARE</li>
              <li>MAKEUP SESSION</li>
              <li>SERVICES</li>
            </ul>
          </div>
          <div id="main-img" className="flex 2xl:pt-72 xl:pt-52 lg:pt-40">
            <div className="lg:px-16 xl:px-20 2xl:px-28  middle-text">
              <div className="lg:text-3xl xl:text-4xl 2xl:text-6xl lg:pb-1 xl:pb-2 2xl:pb-4 bright fontf">
                BRIGHT
              </div>
              <div className="lg:text-3xl xl:text-4xl 2xl:text-6xl lg:pb-5 xl:pb-10 2xl:pb-16 bright lips fontf">
                MOVING LIPS
              </div>
              <button className="xl:mb-56 2xl:mb-52 border border-black rounded-full lg:py-2 xl:py-2 2xl:py-4 lg:px-5 xl:px-5 2xl:px-10 lg:text-[12px] xl:text-[16px] font-medium shop">
                SHOP NOW
              </button>
            </div>
          </div>
          <div className="xl:text-4xl 2xl:text-5xl 2xl:mt-28 flex justify-center fontf">
            OUR COLLECTIONS
          </div>
          {/* ----------section 2---------- */}
          <div className="flex justify-around px-28 gap-1 mt-16">
            <div className="w-1/3">
              <div id="purple">
                <Image className="mx-auto py-9" src={p1} alt="image" />
              </div>
              <h1 className="flex justify-center text-xl my-5">CORRECTORS</h1>
            </div>
            <div className="w-1/3">
              <div id="purple">
                <Image className="mx-auto py-12" src={p2} alt="image" />
              </div>
              <h1 className="flex justify-center text-xl my-5">
                PERLY EYES COLLECTION
              </h1>
            </div>
            <div className="w-1/3">
              <div id="purple">
                <Image className="mx-auto py-9" src={p3} alt="image" />
              </div>
              <h1 className="flex justify-center text-xl my-5">BLUSH BLUSH</h1>
            </div>
          </div>

          <div className="flex justify-around px-28 gap-1 mt-16">
            <div className="w-1/3">
              <div id="purple">
                <Image className="mx-auto py-9" src={p4} alt="image" />
              </div>
              <h1 className="flex justify-center text-xl my-5">
                SATIN LIPSTICKS
              </h1>
            </div>
            <div className="w-1/3">
              <div id="purple">
                <Image className="mx-auto py-9" src={p5} alt="image" />
              </div>
              <h1 className="flex justify-center text-xl my-5">FOUNDATIONS</h1>
            </div>
            <div className="w-1/3">
              <div id="purple">
                <Image className="mx-auto py-9" src={p6} alt="image" />
              </div>
              <h1 className="flex justify-center text-xl my-5">EYES</h1>
            </div>
          </div>

          {/* ---------SECTION 5---------- */}
          <div className="xl:text-4xl 2xl:text-5xl 2xl:mt-28 flex justify-center fontf">
            NEW ARRIVAL
          </div>

          <div className="flex justify-around px-28 gap-1 mt-16">
            <div className="w-1/3">
              <div id="voilets">
                <Image className="mx-auto py-12" src={p7} alt="image" />
              </div>
              <h1 className="flex justify-center text-xl my-5">
                SMOOTHING SMOOTHING BASE
              </h1>
            </div>
            <div className="w-1/3">
              <div id="voilets">
                <Image className="mx-auto py-10" src={p8} alt="image" />
              </div>
              <h1 className="flex justify-center text-xl my-5">
                EYE LINER LIKER BLACK
              </h1>
            </div>
            <div className="w-1/3">
              <div id="voilets">
                <Image className="mx-auto py-9" src={p9} alt="image" />
              </div>
              <h1 className="flex justify-center text-xl my-5">
                LIPLIKER LIPSTICK MISAPARIS
              </h1>
            </div>
          </div>

          {/* ----------SECTION 6---------- */}
          <div className="px-28 mt-14">
            <div className="flex justify-between py-10 px-20  bg-black">
              <Image src={g1} alt="image" />
              <Image src={g2} alt="image" />
              <Image src={g3} alt="image" />
              <Image src={g4} alt="image" />
            </div>
          </div>

          {/* -----------section 8--------- */}
          <div className="fontf text-5xl mt-20 flex justify-center">
            FOLLOW US ON INSTAGRAM
          </div>
          <div className=" flex gap-6 mt-9">
            <div id="image2">
              <Image
                id="img1"
                className=" w-96 "
                src={r1}
                alt="image"
              />
              <div className="img3">
                <Image id="img4" src={instagram} alt="image" />
              </div>
            </div>
            <div id="image2">
              <Image
                id="img1"
                className=" w-96 "
                src={r2}
                alt="image"
              />
              <div className="img3">
                <Image id="img4" src={instagram} alt="image" />
              </div>
            </div>
            <div id="image2">
              <Image
                id="img1"
                className=" w-96 "
                src={r3}
                alt="image"
              />
              <div className="img3">
                <Image id="img4" src={instagram} alt="image" />
              </div>
            </div>
            <div id="image2">
              <Image
                id="img1"
                className=" w-96 "
                src={r4}
                alt="image"
              />
              <div className="img3">
                <Image id="img4" src={instagram} alt="image" />
              </div>
            </div>
            <div id="image2">
              <Image
                id="img1"
                className=" w-96 "
                src={r5}
                alt="image"
              />
              <div className="img3">
                <Image id="img4" src={instagram} alt="image" />
              </div>
            </div>
          </div>
          {/* ----------section 9---------- */}
          <div className="flex justify items-center px-28 mt-16">
            <div>
              <div className="fontf text-5xl pb-10 ">SUBSCRIBE TO OUR NEWS LETTER</div>
              <div className="">Join us today at no cost and be the first to know about our latest updates, discounts and special offers.</div>
            </div>
            <div className="relative w-full" >
                    <input
                    
                      className=" border w-[40%]  border-[#BABABA] bg-[#F5F5F5]  2xl:px-6   2xl:py-2 py-1  text-black"
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
        </div>
      </section>
    </>
  );
};

export default Page;
