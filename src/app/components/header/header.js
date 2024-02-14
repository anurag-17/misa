'use client';
import React, { useEffect, useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import misa from "../../../../public/misa.svg";
import search from "../../../../public/search.svg";
import xcross from "../../../../public/xcross.svg";
import user from "../../../../public/Vector (1).svg";
import basket from "../../../../public/Vector (2).svg";
import closebuton from "../../../../public/close.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useCart } from "@/app/createcontext/CartContext";
import wishlistt from '../../../../public/wishlist.svg';
import { useRouter } from 'next/navigation';



const Header = () => {
  const { cart,wishlist } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sidenavWidth, setSidenavWidth] = useState(0);
  const [dialogMatch, setDialogMatch] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });
  
  const router = useRouter();
  const handleHome = () => {
    router.push("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store the data in local storage
    localStorage.setItem('userData', JSON.stringify(formData));
    setDialogMatch(false);
    // Optionally, you can clear the form fields after submission
    setFormData({
      name: '',
      password: '',
    });}

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));

    };
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

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="shadow-lg">
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="z-50 fixed  
                w-full top-0 left-0 bg-white shadow-xl"
        >
          <div className=" py-[10px] flex items-center justify-center mx-5 sm:mx-5 md:mx-12 lg:mx-24 2xl:my-5 xl:my-2 lg:my-1 relative">
            {/* -----navbar-------- */}
            <div className="md:hidden block">
              <span
                className=""
                style={{ fontSize: "17px", cursor: "pointer" }}
                onClick={openNav}
              >
                &#9776;
              </span>
              <div
                id="mySidenav"
                className="sidenav "
                style={{ width: `${sidenavWidth}px` }}
              >
                <a
                  href="javascript:void(0)"
                  className="closebtn"
                  onClick={closeNav}
                >
                  &times;
                </a>
                <ul className="navlink ">
                  <li className="text-[10px]">
                    <Link href="/" className=" hover:underline">
                      HOME
                    </Link>
                  </li>
                  <li>
                    <Link href="/bestSeller" className="hover:underline">
                      BESTSELLERS
                    </Link>
                  </li>
                  <li>
                <Link href="/giftsection" className="hover:underline">
                GIFT SECTION
                </Link>
              </li>
                  <li>
                    <Link href="/recycle" className="hover:underline">
                      SERVICES
                    </Link>
                  </li>
                  <li>
                <Link href="/termcondition" className="hover:underline">
                  TERMS & CONDITION
                </Link>
              </li>
              <li>
                <Link href="/refund" className="hover:underline">
                 REFUND POLICY
                </Link>
              </li>
                </ul>
              </div>
            </div>
            
            <Image
              src={misa}
              alt="image"
              onClick={handleHome}
              className="absolute 2xl:w-52 xl:w-36 lg:w-32 md:w-24 sm:w-28 w-24 cursor-pointer"
            />
            <div className="flex 2xl:gap-9 xl:gap-6 lg:gap-6  md:gap-5 sm:gap-4 gap-2 ml-auto items-center">
              <button onClick={() => setDialogMatch(true)}>
                <Image
                  className="cursor-pointer w-[15px] sm:w-[15px] md:w-[11px] lg:w-4 xl:w-4 2xl:w-6"
                  src={user}
                  alt="image"
                />
              </button>
              <Link href="/wish-list">
                <Image className="cursor-pointer w-[19px] sm:w-[19px] md:w-[15px]  lg:w-6 xl:w-6  2xl:w-8" 
                 src={wishlistt} alt="wishlist" />
                 {wishlist.length > 0 && (
                  <span className="absolute top-1 md:top-0 right-6 sm:right-7 2xl:right-14 bg-red-500 text-white rounded-full px-1 lg:px-[6px] xl:px-[6px] 2xl:px-2 text-[9px] lg:text-[11px] xl:text-[11px] 2xl:text-[16px]">
                    {wishlist.length}
                  </span>
                 )}
              </Link>
             <Link href='/cart'>
              <Image
                className="cursor-pointer w-[15px] sm:w-[15px] md:w-[11px] lg:w-4 xl:w-4 2xl:w-6 "
                src={basket}
                alt="image"
              />
                 {cart.length > 0 && (
              <span className="absolute top-1 md:top-0 right-[-3px] md:right-[-4px] lg:right-[-12px]  bg-red-500 text-white rounded-full px-1 lg:px-[6px] xl:px-[6px] 2xl:px-2 text-[9px] lg:text-[11px] 2xl:text-[16px]">
                {cart.length}
              </span>
            )}
              </Link>

            </div>
          </div>

          <hr className=" opacity" />
          <div className="meanu md:block hidden ">
            <ul className=" flex justify-center md:text-[10px] lg:text-[12px] xl:text-[12px] 2xl:text-base md:space-x-4 lg:space-x-6 xl:space-x-7 2xl:space-x-16 md:py-[11px] lg:py-[14px] xl:py-[14px] ">
              <li>
                <Link href="/" className="hover:underline">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/bestSeller" className="hover:underline">
                  BESTSELLERS
                </Link>
              </li>
              <li>
                <Link href="/giftsection" className="hover:underline">
                  GIFT SECTION
                </Link>
              </li>
              <li>
                <Link href="/recycle" className="hover:underline">
                  SERVICES
                </Link>
              </li>
              <li>
                <Link href="/termcondition" className="hover:underline">
                  TERMS & CONDITION
                </Link>
              </li>
              <li>
                <Link href="/refund" className="hover:underline">
                 REFUND POLICY
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* ----------popup----------- */}
      <Transition appear show={dialogMatch} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => {}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[90%] sm:w-full sm:max-w-[500px] transform overflow-hidden rounded-2xl bg-white p-4  sm:px-8 lg:px-8 2xl:p-5 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-end ">
                    <button
                      onClick={() => setDialogMatch(false)}
                      className="w-8"
                    >
                      <Image src={closebuton} alt="close"/>
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-[40px] font-semibold  text-gray-900 flex justify-center"
                  >
                   Login
                  </Dialog.Title>
                  <div className="mt-2 flex justify-center w-full">
                    <form onSubmit={handleSubmit}>
                     
                      <input
                      className="border border-gray-400 mb-4 py-2 rounded px-3 pr-24"
                        type="text"
                        id="email"
                        name="name"
                        placeholder="Email"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                     <br/>
                 
                      <input
                      className="border border-gray-400 py-2 rounded px-3 pr-24"
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                      <br/>
                      <div className="flex justify-center">
                      <button  className="text-[20px] font-bold px-5 py-3 bg-blue-300  hover:bg-blue-400 rounded-md mt-3" type="submit">Submit</button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Header;
