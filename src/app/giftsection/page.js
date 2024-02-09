import React from "react";
import Header from "../components/header/header";
import Image from "next/image";
import Link from "next/link";
import p1 from "../../../public/P1.svg";
import p2 from "../../../public/P2.svg";
import p3 from "../../../public/P3.svg";
import p4 from "../../../public/P4.svg";
import p5 from "../../../public/P5.svg";
import p6 from "../../../public/P6.svg";
import google from "../../../public/google.svg";
import arrow from "../../../public/arrow.svg";
import starr from "../../../public/starrate.svg";
import blutik from "../../../public/tickcircle.svg";
import righttik from "../../../public/righttik.svg";
import aaa from "../../../public/aalpha.svg";
import uuu from "../../../public/usersvg.svg";
import rrr from "../../../public/salpha.svg";
import kkk from "../../../public/kalpha.svg";
import iii from "../../../public/ialpha.svg";
import sss from "../../../public/salpha.svg";
import Footer from "../components/footer/footer";

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

const GiftSection = () => {
  return (
    <>
      <section>
        <Header />
        <div>
          <div className="mt-40  w-[75%] mx-auto ">
            <div className="space-y-3">
              <p className="text-[40px] 2xl:text-[45px] flex justify-center">
                Valentine Day Gifts
              </p>
              <p className="text-[14px] 2xl:text-[20px] opacity-50">
                Discover the glow of luxury with Passion exclusive gift offers
                for your makeup.Whether you want to intensify your look, enhance
                your smile or perfect your complexion, Passion offers you a
                refined selection of high-end products to magnify every feature
                of your beauty.{" "}
              </p>
              <p className="text-[14px] 2xl:text-[20px] opacity-50">
                It is the perfect time to pamper yourself or a loved one with
                our gift sets specially designed for eye, lip and complexion
                makeup. Take advantage of this unique opportunity to enrich your
                beauty kit with innovative formulas and captivating shades that
                will highlight your face.{" "}
              </p>
              <p className="text-[14px] 2xl:text-[20px] opacity-50">
                At Passion, we believe that every detail counts. That is why our
                products are designed with care and dedication, to guarantee you
                an unparalleled experience.Our offers are designed to meet your
                desire for accessible luxury, without ever compromising quality.
              </p>
              <p className="text-[14px] 2xl:text-[20px] opacity-50">
                Do not wait any longer to explore our range and find the ideal
                gift that will make a splash. Visit our website or go to the
                store to benefit from personalized advice and make your purchase
                an exceptional moment.{" "}
              </p>
              <p className="text-[14px] 2xl:text-[20px] opacity-50">
                With Passion, reveal the splendor of your beauty and let
                yourself be seduced by a world of refinement. Treat yourself to
                the luxury you deserve.
              </p>
            </div>
          </div>

          <div>
            <div
              data-aos="zoom-in"
              className="grid md:grid-cols-3 grid-cols-1 gap-y-7 md:gap-y-20 justify-around px-24 sm:px-28 md:px-12 lg:px-16 xl:px-24 2xl:px-28 gap-1 mt-4 sm:mt-4 md:mt-6 lg:mt-9 xl:mt-12 2xl:mt-32"
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

          <div>
            <p className="text-[40px] 2xl:mt-32 flex justify-center">
              Discover more from our favorites
            </p>
            <div className="">
              <div
                data-aos="zoom-in"
                className="w-[40%]  mx-auto px-24 sm:px-28 md:px-12 lg:px-16 xl:px-24 2xl:px-28 gap-1 mt-4 sm:mt-4 md:mt-6 lg:mt-9 xl:mt-12 2xl:mt-16 "
              >
                {produc
                  .filter((prod) => prod.id == "satin")
                  .map((product) => (
                    <div key={product.id} className="">
                      <Link
                        href={`/procollect/[slug]`}
                        as={`/procollect/${product.id}`}
                      >
                        <div
                          className="w-full md:h-[90%] xl:h-[80%] 2xl:h-full "
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
          </div>
          <div className="bg-[#2E2A39] flex mt-10">
            <div className="mx-auto py-20  ">
              <p className="text-white text-[30px] mb-4">Contact us</p>
              <div className="space-y-7">
                <div className="flex gap-x-2">
                  <input
                    type="text"
                    placeholder="Name"
                    className="text-white border border-neutral-600 rounded-lg py-3 w-[400px] bg-[#2E2A39] placeholder:pl-3"
                  />
                  <input
                    type="email"
                    placeholder="Email *"
                    className="text-white border border-neutral-600 rounded-lg py-3 w-[400px] bg-[#2E2A39] placeholder:pl-3"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="Phone number"
                    className="text-white border border-neutral-600 rounded-lg py-3 w-[100%] bg-[#2E2A39] placeholder:pl-3"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="write comment"
                    className="text-white border border-neutral-600 rounded-lg w-[100%] bg-[#2E2A39] placeholder:pl-3"
                    rows="4"
                    cols="50"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

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

        {/* --------subscribe----------- */}
        <div className='flex flex-col items-center m-20 relative'>
    <p className='text-[35px] font-semibold'>Subscribe to our newsletter</p>
    <div className="relative w-[30%]">
        <input
            className="m-4 w-full border rounded-2xl border-[#BABABA] bg-[#F5F5F5] px-2 py-2 text-black placeholder-gray"
            type="email"
            placeholder="Email"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            required
        />
        <Image
            id="view1"
            src={arrow}
            alt="Right Arrow"
            className="cursor-pointer absolute top-1/2 right-2 transform -translate-y-1/2 w-10 sm:w-5"
        />
    </div>
</div>
<hr className="mt-10"/>
<Footer/>

        </div>
      </section>
    </>
  );
};

export default GiftSection;
