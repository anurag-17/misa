"use client";
import React from "react";
import { useState, useEffect } from "react";
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
import arrow from "../../public/arrow.svg";
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
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/header/header";

export const products = [
  {
    id: "Voilet",
    imageSrc: p7,
    title: "SMOOTHING SMOOTHING BASE",
    price: "$ 10.00",
    discription:
      "Mascara is makeup that makes your eyelashes look longer and thicker. If you wear mascara while watching a really sad movie, you may end up with black smudges under your eyes. Some people wear mascara every day, to darken their lashes or accent their eyes.",
  },
  {
    id: "Liner-black",
    imageSrc: p8,
    title: "EYE LINER LIKER BLACK",
    price: "$ 22.00",
    discription:
      "Eye liner or eyeliner is a cosmetic used to define the eyes. It is applied around the contours of the eye(s). It is often used to create various aesthetic effects.",
  },
  {
    id: "Lipstick-misaparis",
    imageSrc: p9,
    title: "LIPLIKER LIPSTICK MISAPARIS",
    price: "$ 30.00",
    discription:
      "Reveal your natural beauty with Penny Lipstick. With its rich oils and natural waxes, it imparts a silky, delicate and ultra-hydrating texture. Its formula containing vitamin E provides softness and protection. Its radiant, vibrant and long-lasting color lets pure pigments shine through to enhance every smile. A feeling of well-being with each application!",
  },
];
export const produc = [
  {
    id: "corectrs",
    title: "Correctors",
    imageSrc: p1,
    discription:
      "Découvrez le Fond de Teint Fluide HD de MisaParis, une véritable révolution dans l'art du maquillage. Conçu pour transcender la beauté naturelle, ce fond de teint offre une couvrance modulable, de la légèreté aérienne à l'intensité désirée, pour un teint parfait sans démarcation.Its unique formula smoothes, protects and illuminates your skin, while discreetly reshaping your features in seconds. The MisaParis illuminating strobe base captures light and diffuses it onto your face, creating a natural halo effect. It blurs imperfections, wrinkles and fine lines, for an unified and radiant complexion. Enriched with moisturizing agents, this primer nourishes and protects your skin throughout the day. It is suitable for all skin types, even the most sensitive. With the MisaParis illuminating and correcting primer, you can say goodbye to dull and tired complexion. Find luminous, hydrated and radiant skin, for a natural and sophisticated look. ",
    price: "$ 89.00",
  },
  {
    id: "perl",
    title: "Perly Eyes Collection",
    imageSrc: p2,
    discription:
      "Discover timeless elegance with MisaParis Pearly Eyeshadows – the very essence of glamour. A highlighter with a finely milled texture that illuminates the complexion and eyes. This highlighter harnesses the power of mother-of-pearl to capture and reflect light, creating an amber glow on the skin. Full of emollient ingredients, its light texture melts into the skin. Full of emollient ingredients, its light texture melts into the skin. Use as a highlighter or blush on the face. 1) Place a touch of Highlighter on the cheek, below the middle of the eye, then 2) spread it with your finger or a fan brush going down towards the nostril and then 3) going up towards the temples.  ",
    price: "$ 45.00",
  },
  {
    id: "blushss",
    title: "Blush Blush",
    imageSrc: p3,
    discription:
      "The Luxury Coverage Matte Trio Correctors is a concealer that will provide a touch of sophistication and total coverage of skin imperfections and enhance beauty by masking the imperfections of your complexion and enhancing it.Reveal your natural glow with our cutting-edge Highlighter! Its finely milled texture and formula enriched with mother-of-pearl capture the light to enhance your complexion with an unrivaled amber glow. Perfect for brightening the eyes and enhancing the cheekbones, this dual-function illuminator adapts to your needs: use it for instant radiance or as a blush for a delicate touch of color. Its composition rich in emollient ingredients fuses with the skin for a luminous and natural finish. Dare to shine, choose our Highlighter for radiant beauty! Its pigment-rich formula offers intense coverage and long-lasting hold, while its regenerating oil nourishes and protects your lips.With Aurore lipstick, say goodbye to dry and irritated lips.",
    price: "$ 23.00",
  },
  {
    id: "satin",
    title: "Satin Lipsticks",
    imageSrc: p4,
    discription:
      "Discover Aurore Satin Lipstick, a perfect fusion of vibrant colors and exceptional comfort. Its pigment-rich formula offers intense coverage and long-lasting hold, while its regenerating oil nourishes and protects your lips.With Aurore lipstick, say goodbye to dry and irritated lips. Its soft, creamy texture glides easily onto your lips, leaving them soft and hydrated throughout the day.Create a glamorous and sophisticated look with a diverse color palette, from natural to bold shades. Aurore is the ideal choice for all occasions, whether for a special evening or a casual day.Treat yourself to the luxury of a lipstick that combines performance and comfort. ",
    price: "$ 65.00",
  },
  {
    id: "foundation",
    title: "Foundations",
    imageSrc: p5,
    discription:
      "Découvrez le Fond de Teint Fluide HD de MisaParis, une véritable révolution dans l'art du maquillage. Conçu pour transcender la beauté naturelle, ce fond de teint offre une couvrance modulable, de la légèreté aérienne à l'intensité désirée, pour un teint parfait sans démarcation.Its unique formula smoothes, protects and illuminates your skin, while discreetly reshaping your features in seconds. The MisaParis illuminating strobe base captures light and diffuses it onto your face, creating a natural halo effect. It blurs imperfections, wrinkles and fine lines, for an unified and radiant complexion. Enriched with moisturizing agents, this primer nourishes and protects your skin throughout the day. It is suitable for all skin types, even the most sensitive. With the MisaParis illuminating and correcting primer, you can say goodbye to dull and tired complexion. Find luminous, hydrated and radiant skin, for a natural and sophisticated look.",
    price: "$ 30.00",
  },
  {
    id: "eye",
    title: "Eyes",
    imageSrc: p6,
    discription:
      "Enhance your eyes with the nobility of the Palette Parisienne Matte Eyeshadow from MisaParis. Handcrafted, our palette is the perfect combination of elegance and performance, offering an impeccable matte finish. The easy application, similar to a caress of powder, is accompanied by opulent pigments, for a natural effect with warm reflections.Designed for demanding beauty enthusiasts and glamor professionals, our eyeshadows are the result of French artisanal know-how, guaranteeing unparalleled quality and a luxurious experience with each application. Select from five captivating colors, from vibrant hues to subtle nuances, for a result as unique as your style. Each shade is reusable, allowing you to create varied and personalized looks that captivate and fascinate. Our pearly eyeshadows are composed of pure pigments, offering uncompromising color intensity and long-wearing effect for an effect that lasts all day. The satiny, velvety texture",
    price: "$ 36.00",
  },
];
const Page = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sidenavWidth, setSidenavWidth] = useState(0);

  const openNav = () => {
    setSidenavWidth(147);
  };

  const closeNav = () => {
    setSidenavWidth(0);
  };

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

  const handleToast = () => {
    toast.success("Email Sucessfully", { autoClose: 3000 });
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <ToastContainer />
      <section>
        <div className="container-fluid" id="family">
          <Header />

          <div
            id="main-img"
            className="mt-[45px] sm:mt-[45px] md:mt-[69px] lg:mt-[90px] 2xl:mt-32 flex 2xl:pt-72 xl:pt-52 lg:pt-48   py-20 sm:py-20  md:py-40 lg:py-0"
          >
            <div
              data-aos="fade-right"
              className="px-5 sm:px-5 md:px-12 lg:px-16 xl:px-24 2xl:px-28  middle-text"
            >
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-6xl md:pb-1 lg:pb-1 xl:pb-2 2xl:pb-4 bright fontf">
                BRIGHT
              </div>
              <div className="lg:mb-36 xl:mb-56  2xl:mb-60 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-6xl pb-4 sm:pb-4 md:pb-6 lg:pb-10 xl:pb-10 2xl:pb-32  lips fontf">
                MOVING LIPS
              </div>
              {/* <button className="lg:mb-36 xl:mb-56  2xl:mb-60 border border-black rounded-full py-1 sm:py-2 md:py-2 lg:py-3 xl:py-3 2xl:py-5 px-3 sm:px-5 md:px-7 lg:px-8 xl:px-9 2xl:px-14 text-[8px] sm:text-[8px] md:text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-[16px] font-medium shop  hover:text-white hover:font-semibold">
                SHOP NOW
              </button> */}
            </div>
          </div>
          {/* ----------section 2---------- */}

          <div className="collections text-[22px] sm:text-[24px] md:text-xl lg:text-3xl xl:text-3xl  2xl:text-5xl mt-5 sm:mt-6 md:mt-6 lg:mt-14 xl:mt-4 2xl:mt-32 flex justify-center fontf ">
            OUR COLLECTIONS
          </div>

          <div>
            <div
              data-aos="zoom-in"
              className="grid md:grid-cols-3 grid-cols-1 gap-y-7 md:gap-y-20 justify-around px-24 sm:px-28 md:px-12 lg:px-16 xl:px-24 2xl:px-28 gap-1 mt-4 sm:mt-4 md:mt-6 lg:mt-9 xl:mt-12 2xl:mt-16"
            >
              {produc.map((product) => (
                <div key={product.id} className="">
                  <Link
                    href={`/procollect/[slug]`}
                    as={`/procollect/${product.id}`}
                  >
                    <div
                      className="w-full md:h-[90%] xl:h-[80%] 2xl:h-full"
                      id="purple"
                    >
                      <Image
                        className="mx-auto h-72 sm:h-72 md:h-64 lg:h-80 xl:h-full py-4 md:py-4 lg:py-7 xl:py-9 hover:scale-110 ease-in duration-500 cursor-pointer"
                        src={product.imageSrc}
                        alt={`Product ${product.id}`}
                      />
                    </div>
                    <h1 className="tsmall flex justify-center md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-xl mt-3 md:mt-3 lg:mt-5 xl:mt-7">
                      {product.title}
                    </h1>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* <div
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
          </div> */}
          {/* --------section 3------ */}
          <div
            className="px-28 mt-10 md:mt-14 lg:mt-20 xl:mt-10 2xl:mt-44"
            id="box1"
          >
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="flex flex-col  items-center sm:pr-10 md:pr-14 lg:pr-16 xl:pr-20 2xl:pr-20 py- lg:py-36 xl:py-40 2xl:py-[270px] text-white perleye"
            >
              <div className="perleye fontf sm:text-[22px] md:text-[28px] pt-20 sm:pt-24 md:pt-28 lg:pt-0  lg:text-[35px] xl:text-[40px] 2xl:text-[54px]">
                PERLAY EYES
              </div>
              <div className="fontf collection sm:text-[22px] md:text-[28px] lg:text-[35px] xl:text-[40px] 2xl:text-[54px] md:leading-7 lg:leading-9 xl:leading-9 2xl:leading-normal ">
                COLLECTION
              </div>
              {/* <div>
                <button className="now lg:mb-0 md:mb-28 sm:mb-20 mb-[100%] sm:mr-[73px] md:mr-[90px] lg:mr-[110px] xl:mr-[120px] 2xl:mr-40  text-[8px] sm:text-[8px] md:text-[9px] lg:text-[10px] xl:text-[10px] 2xl:text-[16px] px-2 sm:px-3 md:px-5 lg:px-7  xl:px-10  2xl:px-12 py-1 sm:py-1 md:py-2 lg:py-2 xl:py-4 2xl:py-4 mt- sm:mt-5 md:mt-6  lg:mt-7 xl:mt-10 2xl:xl:mt-10 border border-white rounded-full  hover:font-semibold">
                  SHOP NOW
                </button>
              </div> */}
            </div>
          </div>

          {/* ---------SECTION 5---------- */}
          <div
            data-aos="fade-right"
            className="arrival text-[22px] sm:text-[24px] md:text-xl lg:text-3xl  xl:text-3xl 2xl:text-5xl mt-10 sm:mt-10 md:mt-14 lg:mt-20 xl:mt-20 2xl:mt-24 flex justify-center fontf"
          >
            NEW ARRIVAL
          </div>

          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="grid md:grid-cols-3 grid-cols-1 gap-y-7 md:gap-y-0 justify-around px-28 md:px-12 lg:px-16 xl:px-24 2xl:px-28 gap-1 mt-4 sm:mt-4 md:mt-5 lg:mt-8 xl:mt-10 2xl:mt-20"
          >
            {products.map((product) => (
              <div key={product.id} className="">
                <Link href="/products/[slug]" as={`/products/${product.id}`}>
                  <div
                    className="vv w-full xl:h-[80%] 2xl:h-full"
                    id={product.id}
                  >
                    <Image
                      className="mx-auto py-3 sm:py-5 md:py-6 xl:pb-16 lg:py-12 h-80 sm:h-80 md:h-80 lg:h-96 xl:h-full hover:scale-110 ease-in duration-500 cursor-pointer hover:drop-shadow-2xl"
                      src={product.imageSrc}
                      alt="image"
                    />
                  </div>
                </Link>
                <h1 className="tsmall flex justify-center text-[16px] md:text-[11px] lg:text-[12px] xl:text-[14px] 2xl:text-xl my-3 md:my-3 lg:my-4 xl:my-5">
                  {product.title}
                </h1>
              </div>
            ))}
          </div>

          {/* ----------SECTION 6---------- */}
          {/* <div className="lg:px-16 xl:px-24 2xl:px-28 mt-20">
            <div></div>
          </div> */}

          <div className="px-3 sm:px-5 md:px-12 lg:px-16 xl:px-24 2xl:px-28 mt-10 sm:mt-10 md:mt-10 lg:mt-12 xl:mt-8 2xl:mt-44">
            <div className="flex flex-wrap justify-between py-4 sm:py-5 md:py-8 lg:py-12 xl:py-14 2xl:py-16 px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 bg-black">
              <Image
                data-aos="flip-left"
                className=" w-36 sm:w-28 md:w-32 lg:w-44 xl:w-48 2xl:w-72 mb-4 sm:mb-0"
                src={g1}
                alt="image"
              />
              <Image
                data-aos="flip-left"
                className="w-36 sm:w-24 md:w-28 lg:w-40 xl:w-44 2xl:w-64 mb-4 sm:mb-0"
                src={g2}
                alt="image"
              />
              <Image
                data-aos="flip-left"
                className="w-36 sm:w-24 md:w-28 lg:w-40 xl:w-44 2xl:w-64 mb-4 sm:mb-0"
                src={g3}
                alt="image"
              />
              <Image
                data-aos="flip-left"
                className="w-36 sm:w-24 md:w-28 lg:w-40 xl:w-44 2xl:w-64 mb-4 sm:mb-0"
                src={g4}
                alt="image"
              />
            </div>
          </div>
          {/* ----------section 7---------- */}
          <div className="mx-12 sm:mx-20 md:mx-28 lg:mx-40 xl:mx-48 2xl:mx-64 bg-gray-50 hover:bg-slate-100 py-4 sm:py-4 md:py-7 rounded-lg mt-12 sm:mt-16 md:mt-16 lg:mt-20 xl:mt-24 2xl:mt-36">
            <div className="flex justify-between items-center px-4">
              <div className="flex">
                <div className="">
                  <Image
                    className="w-9 sm:w-9 md:w-10 lg:w-14 xl:w-14 2xl:w-16"
                    src={google}
                    alt="google"
                  />
                </div>
                <div className="ml-2 2xl:space-y-1 xl:space-y-1">
                  <p className="text-[#8B7F84] text-[12px] sm:text-[10px] md:text-[12px] lg:text-[15px] 2xl:text-xl">
                    MisaParis
                  </p>
                  <div className="flex gap-1">
                    <Image
                      className="w-2 sm:w-2 md:w-3 lg:w-3 xl:w-3 2xl:w-5"
                      src={starr}
                      alt="rating"
                    />
                    <Image
                      className="w-2 sm:w-2 md:w-3 lg:w-3 xl:w-3 2xl:w-5"
                      src={starr}
                      alt="rating"
                    />
                    <Image
                      className="w-2 sm:w-2 md:w-3 lg:w-3 xl:w-3 2xl:w-5"
                      src={starr}
                      alt="rating"
                    />
                    <Image
                      className="w-2 sm:w-2 md:w-3 lg:w-3 xl:w-3 2xl:w-5"
                      src={starr}
                      alt="rating"
                    />
                    <Image
                      className="w-2 sm:w-2 md:w-3 lg:w-3 xl:w-3 2xl:w-5"
                      src={starr}
                      alt="rating"
                    />
                  </div>
                  <p className="text-[#8B7F84] text-[10px] sm:text-[8px] md:text-[10px] lg:text-[11px] xl:text-[12px] 2xl:text-[16px]">
                    19 notice
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="star1 mx-12 sm:mx-20 md:mx-28 lg:mx-40 xl:mx-48 2xl:mx-64 mt-4 sm:mt-4 md:mt-5 lg:mt-5 2xl:mt-4 grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3 md:gap-5"
          >
            <div className="">
              <div className="bg-gray-50 hover:bg-slate-100 py-5 px-3  2xl:space-y-1 rounded-lg ">
                <div className="flex gap-1">
                  <Image
                    className="w-3 sm:w-3 md:w-3 lg:w-3 xl:w-3 2xl:w-5"
                    src={starr}
                    alt="rating"
                  />
                  <Image
                    className="w-3 sm:w-3 md:w-3 lg:w-3 xl:w-3 2xl:w-5"
                    src={starr}
                    alt="rating"
                  />
                  <Image
                    className="w-3 sm:w-3 md:w-3 lg:w-3 xl:w-3 2xl:w-5"
                    src={starr}
                    alt="rating"
                  />
                  <Image
                    className="w-3 sm:w-3 md:w-3 lg:w-3 xl:w-3 2xl:w-5"
                    src={starr}
                    alt="rating"
                  />
                  <Image
                    className="w-3 sm:w-3 md:w-3 lg:w-3 xl:w-3 2xl:w-5"
                    src={starr}
                    alt="rating"
                  />
                  <Image
                    className="w-4 sm:w-4 md:w-4 lg:w-4 xl:w-4 2xl:w-6"
                    src={blutik}
                    alt="rating"
                  />
                </div>

                <div className="flex 2xl:mt-0 lg:mt-2 mt-2">
                  <Image
                    className="w-4 sm:w-4 md:w-4 lg:w-5 xl:w-6 2xl:w-8"
                    src={righttik}
                    alt="righttik"
                  />
                  <p className="text-[#8B7F84]  text-[10px] sm:text-[10px] md:text-[10px] lg:text-[10px] xl:text-[13px] 2xl:text-lg">
                    Warm welcome from Mireille
                  </p>
                </div>
                <div className="flex">
                  <Image
                    className="w-4 sm:w-4 md:w-4 lg:w-5 xl:w-6 2xl:w-8"
                    src={righttik}
                    alt="righttik"
                  />
                  <p className="text-[#8B7F84] text-[10px] sm:text-[10px] md:text-[10px] lg:text-[10px] xl:text-[13px] 2xl:text-lg">
                    Unbeatable price
                  </p>
                </div>
                <div className="flex">
                  <Image
                    className="w-4 sm:w-4 md:w-4 lg:w-5 xl:w-6 2xl:w-8"
                    src={righttik}
                    alt="righttik"
                  />
                  <p className="text-[#8B7F84] text-[10px] sm:text-[10px] md:text-[10px] lg:text-[10px] xl:text-[13px] 2xl:text-lg ">
                    Quality products
                  </p>
                </div>
              </div>

              <div className="flex md:mt-4 lg:mt-4 2xl:mt-6">
                <div>
                  <Image
                    className="w-9 sm:w-9 md:w-10 lg:w-10 xl:w-12 2xl:w-full"
                    src={aaa}
                    alt="google"
                  />
                </div>
                <div className="ml-2">
                  <p className="gradient-text text-[10px] sm:text-[10px] md:text-[11px] lg:text-[12px] xl:text-[14px] 2xl:text-xl font-bold ">
                    AI-generated summary
                  </p>
                  <p className="text-[#8B7F84] text-[9px] sm:text-[9px] md:text-[9px] lg:text-[9px] xl:text-[12px] 2xl:text-base">
                    Based on 19 reviews
                  </p>
                </div>
              </div>
            </div>

            <div className="">
              <div className="bg-gray-50 hover:bg-slate-100 py-5 px-3 space-y-2 rounded-lg">
                <div className="flex justify-between">
                  <div className="flex gap-1">
                    <Image
                      className="w-3 sm:w-3 md:w-3 lg:w-3 xl:w-3 2xl:w-5"
                      src={starr}
                      alt="rating"
                    />
                    <Image
                      className="w-3 sm:w-3 md:w-3 lg:w-3 xl:w-3 2xl:w-5"
                      src={starr}
                      alt="rating"
                    />
                    <Image
                      className="w-3 sm:w-3 md:w-3 lg:w-3 xl:w-3 2xl:w-5"
                      src={starr}
                      alt="rating"
                    />
                    <Image
                      className="w-3 sm:w-3 md:w-3 lg:w-3 xl:w-3 2xl:w-5"
                      src={starr}
                      alt="rating"
                    />
                    <Image
                      className="w-3 sm:w-3 md:w-3 lg:w-3 xl:w-3 2xl:w-5"
                      src={starr}
                      alt="rating"
                    />
                    <Image
                      className="w-4 sm:w-4 md:w-4 lg:w-4 xl:w-4 2xl:w-6"
                      src={blutik}
                      alt="rating"
                    />
                  </div>
                  <div>
                    <Image
                      className="w-4 sm:w-4 md:w-4 lg:w-4 xl:w-4 2xl:w-6"
                      src={google}
                      alt="google"
                    />
                  </div>
                </div>

                <p className="text-[#8B7F84] text-[10px] sm:text-[10px] md:text-[10px] lg:text-[10px] xl:text-[13px] 2xl:text-lg  md:leading-4">
                  Always a pleasure to visit this store.A warm welcome from
                  Mireille and I always come out with very good quality breast
                  products at an unbeatable price.Their lipstick are amazing
                  i...
                </p>
              </div>

              <div className="flex md:mt-4 lg:mt-4 2xl:mt-6">
                <div>
                  <Image
                    className="w-9 sm:w-9 md:w-10 lg:w-10 xl:w-12 2xl:w-full"
                    src={uuu}
                    alt="google"
                  />
                </div>
                <div className="ml-2">
                  <p className="text-[#8B7F84]  text-[10px] sm:text-[10px] md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-xl font-semibold  ">
                    AI-generated summary
                  </p>
                  <p className="text-[#8B7F84] text-[10px] sm:text-[10px] md:text-[10px] lg:text-[8px] xl:text-[12px] 2xl:text-base">
                    4 month ago
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="bg-gray-50 hover:bg-slate-100 py-5 px-3 space-y-2 rounded-lg">
                <div className="flex justify-between">
                  <div className="flex gap-1">
                    <Image
                      className="w-3 sm:w-3 md:w-3 lg:w-3 xl:w-3 2xl:w-5"
                      src={starr}
                      alt="rating"
                    />
                    <Image
                      className="w-3 sm:w-3 md:w-3 lg:w-3 xl:w-3 2xl:w-5"
                      src={starr}
                      alt="rating"
                    />
                    <Image
                      className="w-3 sm:w-3 md:w-3 lg:w-3 xl:w-3 2xl:w-5"
                      src={starr}
                      alt="rating"
                    />
                    <Image
                      className="w-3 sm:w-3 md:w-3 lg:w-3 xl:w-3 2xl:w-5"
                      src={starr}
                      alt="rating"
                    />
                    <Image
                      className="w-3 sm:w-3 md:w-3 lg:w-3 xl:w-3 2xl:w-5"
                      src={starr}
                      alt="rating"
                    />
                    <Image
                      className="w-4 sm:w-4 md:w-4 lg:w-4 xl:w-4 2xl:w-6"
                      src={blutik}
                      alt="rating"
                    />
                  </div>
                  <div>
                    <Image
                      className="w-4 sm:w-4 md:w-4 lg:w-4 xl:w-4 2xl:w-6"
                      src={google}
                      alt="google"
                    />
                  </div>
                </div>

                <p className="text-[#8B7F84] text-[10px] sm:text-[10px] md:text-[10px] lg:text-[10px] xl:text-[13px] 2xl:text-lg md:leading-4">
                  I went to the MisaParis boutique,the staff is very welcoming
                  and friendly.Personally i found the service and advice very
                  interesting and the quantity of the products excellent.I
                  recommend....
                </p>
              </div>

              <div className="flex md:mt-4 lg:mt-4 2xl:mt-6">
                <div>
                  <Image
                    className="w-9 sm:w-9 md:w-10 lg:w-10 xl:w-12 2xl:w-full"
                    src={rrr}
                    alt="google"
                  />
                </div>
                <div className="ml-2">
                  <p className="text-[#8B7F84] text-[10px] sm:text-[10px] md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-xl font-semibold ">
                    Ribero
                  </p>
                  <p className="text-[#8B7F84] text-[10px] sm:text-[10px] md:text-[10px] lg:text-[8px] xl:text-[12px] 2xl:text-base">
                    2 months ago
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="bg-gray-50 hover:bg-slate-100 py-5 px-3 space-y-2 rounded-lg">
                <div className="flex justify-between">
                  <div className="flex gap-1">
                    <Image
                      className=" w-3 sm:w-3 md:w-3 lg:w-3 xl:w-3 2xl:w-5"
                      src={starr}
                      alt="rating"
                    />
                    <Image
                      className=" w-3 sm:w-3 md:w-3 lg:w-3 xl:w-3 2xl:w-5"
                      src={starr}
                      alt="rating"
                    />
                    <Image
                      className=" w-3 sm:w-3 md:w-3 lg:w-3 xl:w-3 2xl:w-5"
                      src={starr}
                      alt="rating"
                    />
                    <Image
                      className=" w-3 sm:w-3 md:w-3 lg:w-3 xl:w-3 2xl:w-5"
                      src={starr}
                      alt="rating"
                    />
                    <Image
                      className=" w-3 sm:w-3 md:w-3 lg:w-3 xl:w-3 2xl:w-5"
                      src={starr}
                      alt="rating"
                    />
                    <Image
                      className=" w-4 sm:w-4 md:w-4 lg:w-4 xl:w-4 2xl:w-6"
                      src={blutik}
                      alt="rating"
                    />
                  </div>
                  <div>
                    <Image
                      className="w-4 sm:w-4 md:w-4 lg:w-4 xl:w-4 2xl:w-6"
                      src={google}
                      alt="google"
                    />
                  </div>
                </div>

                <p className="text-[#8B7F84] text-[10px] sm:text-[10px] md:text-[10px] lg:text-[10px] xl:text-[13px] 2xl:text-lg md:leading-4">
                  I visited the MisaParis boutique on rue de Marignan in the
                  8th.A warm welcome and express makeup offered to test the
                  products and I was won over by the HD fluid foundation.A visit
                  to the store and you will...
                </p>
              </div>

              <div className="flex md:mt-4 lg:mt-4 2xl:mt-6">
                <div>
                  <Image
                    className="w-8  sm:w-8 md:w-10 lg:w-10 xl:w-12 2xl:w-full"
                    src={kkk}
                    alt="google"
                  />
                </div>
                <div className="ml-2">
                  <p className="text-[#8B7F84] text-[10px] sm:text-[10px] md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-xl font-semibold ">
                    Karion Diallo
                  </p>
                  <p className="text-[#8B7F84] text-[10px] sm:text-[10px] md:text-[10px] lg:text-[8px] xl:text-[12px] 2xl:text-base">
                    6 months ago
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="bg-gray-50 hover:bg-slate-100 py-5 px-3 space-y-2 rounded-lg">
                <div className="flex justify-between">
                  <div className="flex gap-1">
                    <Image
                      className="w-3 sm:w-3 md:w-3 lg:w-3 xl:w-3 2xl:w-5"
                      src={starr}
                      alt="rating"
                    />
                    <Image
                      className="w-3 sm:w-3 md:w-3 lg:w-3 xl:w-3 2xl:w-5"
                      src={starr}
                      alt="rating"
                    />
                    <Image
                      className="w-3 sm:w-3 md:w-3 lg:w-3 xl:w-3 2xl:w-5"
                      src={starr}
                      alt="rating"
                    />
                    <Image
                      className="w-3 sm:w-3 md:w-3 lg:w-3 xl:w-3 2xl:w-5"
                      src={starr}
                      alt="rating"
                    />
                    <Image
                      className="w-3 sm:w-3 md:w-3 lg:w-3 xl:w-3 2xl:w-5"
                      src={starr}
                      alt="rating"
                    />
                    <Image
                      className="w-4 sm:w-4 md:w-4 lg:w-4 xl:w-4 2xl:w-6"
                      src={blutik}
                      alt="rating"
                    />
                  </div>
                  <div>
                    <Image
                      className="w-4 sm:w-4 md:w-4 lg:w-4 xl:w-4 2xl:w-6"
                      src={google}
                      alt="google"
                    />
                  </div>
                </div>

                <p className="text-[#8B7F84] text-[10px] sm:text-[10px] md:text-[10px] lg:text-[10px] xl:text-[13px] 2xl:text-lg md:leading-4">
                  Very friendly welcome,quality products with a range of colors
                  for all skin type,the textures are very pleasent,i highly
                  recommend this preety Parisian brand.A visit to the store and
                  you will
                </p>
              </div>

              <div className="flex md:mt-4 lg:mt-4 2xl:mt-6">
                <div>
                  <Image
                    className="w-8  sm:w-8 md:w-10 lg:w-10 xl:w-12 2xl:w-full"
                    src={iii}
                    alt="google"
                  />
                </div>
                <div className="ml-2">
                  <p className="text-[#8B7F84] text-[10px] sm:text-[10px] md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-xl font-semibold rounded-lg">
                    Ivideh Moghtader
                  </p>
                  <p className="text-[#8B7F84] text-[10px] sm:text-[10px] md:text-[10px] lg:text-[8px] xl:text-[12px] 2xl:text-base">
                    One year ago
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="bg-gray-50 hover:bg-slate-100 py-5 px-3 space-y-2 rounded-lg">
                <div className="flex justify-between">
                  <div className="flex gap-1">
                    <Image
                      className="w-3 sm:w-3 md:w-3 lg:w-3 xl:w-3 2xl:w-5"
                      src={starr}
                      alt="rating"
                    />
                    <Image
                      className="w-3 sm:w-3 md:w-3 lg:w-3 xl:w-3 2xl:w-5"
                      src={starr}
                      alt="rating"
                    />
                    <Image
                      className="w-3 sm:w-3 md:w-3 lg:w-3 xl:w-3 2xl:w-5"
                      src={starr}
                      alt="rating"
                    />
                    <Image
                      className="w-3 sm:w-3 md:w-3 lg:w-3 xl:w-3 2xl:w-5"
                      src={starr}
                      alt="rating"
                    />
                    <Image
                      className="w-3 sm:w-3 md:w-3 lg:w-3 xl:w-3 2xl:w-5"
                      src={starr}
                      alt="rating"
                    />
                    <Image
                      className="w-4 sm:w-4 md:w-4 lg:w-4 xl:w-4 2xl:w-6"
                      src={blutik}
                      alt="rating"
                    />
                  </div>
                  <div>
                    <Image
                      className="w-4 sm:w-4 md:w-4 lg:w-4 xl:w-4 2xl:w-6"
                      src={google}
                      alt="google"
                    />
                  </div>
                </div>

                <p className="text-[#8B7F84] text-[10px] sm:text-[10px] md:text-[10px] lg:text-[10px] xl:text-[13px] 2xl:text-lg md:leading-4">
                  A very welcome and accessible setting for all with products
                  designed for black and white skin at unbeatable price.I invite
                  you to take a look because you will be satisfied with the
                  service
                </p>
              </div>

              <div className="flex md:mt-4 lg::mt-4 2xl:mt-6">
                <div>
                  <Image
                    className="w-8  sm:w-8 md:w-10 lg:w-10 xl:w-12 2xl:w-full"
                    src={sss}
                    alt="google"
                  />
                </div>
                <div className="ml-2">
                  <p className="text-[#8B7F84] text-[10px] sm:text-[10px] md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-xl font-semibold ">
                    Safi Safi
                  </p>
                  <p className="text-[#8B7F84] text-[10px] sm:text-[10px] md:text-[10px] lg:text-[8px] xl:text-[12px] 2xl:text-base">
                    10 months ago
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="w-full  mt-24 lg:px-40 xl:px-44 2xl:px-48">
            <Image className="w-full" src={rating1} alt="image" />
            <Image className="w-full" src={rating2} alt="image" />
          </div> */}

          {/* -----------section 8--------- */}
          <div className="fontf text-[24px] sm:text-[24px] md:text-2xl lg:text-3xl xl:text-[32px] 2xl:text-5xl mt-[38px] sm:mt-[40px] md:mt-[60px] lg:mt-[70px] xl:mt-32 2xl:mt-36 flex justify-center">
            FOLLOW US ON INSTAGRAM
          </div>
          <div className=" flex md:gap-2 lg:gap-3 xl:gap-4 mt-5 sm:mt-6 md:mt-6 lg:mt-8 xl:mt-7 2xl:mt-12">
            <div data-aos="zoom-in" id="image2">
              <Image id="img1" className=" w-96 " src={r1} alt="image" />
              <div className="img3">
                <Image id="img4" src={instagram} alt="image" />
              </div>
            </div>
            <div data-aos="zoom-in" id="image2">
              <Image id="img1" className=" w-96 " src={r2} alt="image" />
              <div className="img3">
                <Image id="img4" src={instagram} alt="image" />
              </div>
            </div>
            <div data-aos="zoom-in" id="image2">
              <Image id="img1" className=" w-96 " src={r3} alt="image" />
              <div className="img3">
                <Image id="img4" src={instagram} alt="image" />
              </div>
            </div>
            <div data-aos="zoom-in" id="image2">
              <Image id="img1" className=" w-96 " src={r4} alt="image" />
              <div className="img3">
                <Image id="img4" src={instagram} alt="image" />
              </div>
            </div>
            <div data-aos="zoom-in" id="image2">
              <Image id="img1" className=" w-96 " src={r5} alt="image" />
              <div className="img3">
                <Image id="img4" src={instagram} alt="image" />
              </div>
            </div>
          </div>
          {/* ----------section 9---------- */}
          <div className="flex sm:flex-row flex-col  sm:items-center justify-between px-5 sm:px-5 md:px-12 lg:px-16 xl:px-24 2xl:px-28 mt-10 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16 2xl:mt-20">
            <div data-aos="fade-right">
              <div className="fontf text-[22px]  sm:text-[20px]  md:text-[25px] lg:text-[28px] xl:text-[32px] 2xl:text-[46px] sm:pb-3  md:pb-3 lg:pb-4 2xl:pb-7 ">
                SUBSCRIBE TO OUR NEWS LETTER
              </div>
              <div className="text-[12px] sm:text-[7px] md:text-[9px] lg:text-[11px]  xl:text-[12px] 2xl:text-base">
                Join us today at no cost and be the first to know about our
                latest updates, discounts and special offers.
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="mt-4 sm:mt-0  relative w-[30%]"
            >
              <form onSubmit={handleToast}>
                <input
                  className="border w-full border-[#BABABA] bg-[#F5F5F5]  xl:px-2 2xl:px-2 lg:py-2 xl:py-2 2xl:py-4 text-black placeholder-black"
                  type="email"
                  placeholder="Email"
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                  required
                />
                <button type="submit">
                  <Image
                    id="view1"
                    src={arrow}
                    alt="Right Arrow"
                    className="cursor-pointer absolute top-1/2 right-2 transform -translate-y-1/2 w-10 sm:w-5 "
                  />
                </button>
              </form>
            </div>
          </div>

          <hr className="lg:mx-16 xl:mx-24 2xl:mx-28 mt-10 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-24  border opacity-80" />
          {/* ----------section 10------------------------- */}
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
                        Home And News
                      </Link>
                    </li>
                    <li className="">
                      <Link href="/bestSeller" className="hover:underline">
                        Bestsellers
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
