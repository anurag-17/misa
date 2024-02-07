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


const Header = () => {

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sidenavWidth, setSidenavWidth] = useState(0);
  const [dialogMatch, setDialogMatch] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store the data in local storage
    localStorage.setItem('userData', JSON.stringify(formData));
    // Optionally, you can clear the form fields after submission
    setFormData({
      name: '',
      email: '',
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
                w-full top-0 left-0 bg-white"
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
                    <Link href="/recycle" className="hover:underline">
                      SERVICES
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <Image
              src={misa}
              alt="image"
              className="absolute 2xl:w-52 xl:w-36 lg:w-32 md:w-24 sm:w-28 w-28"
            />
            <div className="flex 2xl:gap-9 xl:gap-6 lg:gap-6  md:gap-5 sm:gap-4 gap-3 ml-auto ">
              <button onClick={() => setDialogMatch(true)}>
                <Image
                  className="cursor-pointer w-[15px] sm:w-[15px] md:w-[11px] lg:w-4 xl:w-4 2xl:w-6"
                  src={user}
                  alt="image"
                />
              </button>

              <Image
                className="cursor-pointer w-[15px] sm:w-[15px] md:w-[11px] lg:w-4 xl:w-4 2xl:w-6"
                src={basket}
                alt="image"
              />
            </div>
          </div>

          <hr className=" opacity" />
          <div className="meanu md:block hidden ">
            <ul className=" flex justify-center md:text-[10px] lg:text-[12px] xl:text-xs 2xl:text-base md:space-x-4 lg:space-x-6 xl:space-x-7 2xl:space-x-16 md:py-[11px] lg:py-[14px] xl:py-[14px] ">
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
                <Link href="/recycle" className="hover:underline">
                  SERVICES
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
                    className="text-[35px] font-semibold  text-gray-900 flex justify-center"
                  >
                   Login
                  </Dialog.Title>
                  <div className="mt-2 flex justify-center">
                    <form onSubmit={handleSubmit}>
                     
                      <input
                      className="border border-gray-400 mb-4 py-2 rounded px-3"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Email"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                     <br/>
                 
                      <input
                      className="border border-gray-400 py-2 rounded px-3"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Password"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <br/>
                      <div className="flex justify-center">
                      <button className="text-[20px] font-bold px-5 py-3 bg-blue-300  hover:bg-blue-400 rounded-md mt-3" type="submit">Submit</button>
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
