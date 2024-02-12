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
import Link from 'next/link';

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

const BestSeller = () => {
  return (
    <>
    <Header/>
        <div className='2xl:mt-48 mt-32'>
       
        <div className="collections text-[22px] sm:text-[24px] md:text-xl lg:text-3xl xl:text-3xl  2xl:text-5xl mt-5 sm:mt-6 md:mt-6 lg:mt-14 xl:mt-4 2xl:mt-32 flex justify-center fontf ">
            Our BestSeller Products
          </div>

          <div>
            <div
              data-aos="zoom-in"
              className="grid md:grid-cols-3 grid-cols-1 gap-y-7 md:gap-y-0 2xl:gap-y-20 justify-around px-24 sm:px-28 md:px-12 lg:px-16 xl:px-24 2xl:px-28 gap-1 mt-4 sm:mt-4 md:mt-6 lg:mt-9 xl:mt-12 2xl:mt-16"
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
<hr className='2xl:mt-32 mt-8  border-[1px]'/>
          {/* -------footer---------    */}
          
            <div className=''>
          <Footer/></div>
        </div>
    </>
  )
}

export default BestSeller