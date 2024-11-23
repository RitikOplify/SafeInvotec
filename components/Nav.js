"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const [isOpenProduct, setIsOpenProduct] = useState(false);
  const [isOpenSolutions, setIsOpenSolutions] = useState(false);

  return (
    <nav>
      <div className=" max-w-[1440px] flex md:hidden py-6 px-5 sm:px-10 justify-between shadow-sm items-center relative">
        <i
          className={`${
            isOpen ? "ri-close-large-fill text-3xl" : "ri-menu-line text-3xl"
          }`}
          onClick={menuOpen}
        ></i>
        <Image
          width={200}
          height={10}
          alt="logo"
          className=" object-cover"
          src="/Logo/SafeInvotecLogo.png"
        />
        {isOpen && (
          <div className="flex md:hidden flex-col items-start absolute top-[100%] left-0 z-10 w-full bg-white gap-3 p-5 border">
            <Link
              className="hover:border-b w-fit  hover:border-[#AA1F2E] hover:text-[#AA1F2E] transition-all duration-300"
              href={""}
            >
              ABOUT US
            </Link>
            <Link
              className="hover:border-b w-fit  hover:border-[#AA1F2E] hover:text-[#AA1F2E] transition-all duration-300"
              href={"/certifications"}
            >
              CERTIFICATIONS
            </Link>
            <Link
              className="hover:border-b w-fit  hover:border-[#AA1F2E] hover:text-[#AA1F2E] transition-all duration-300"
              href={""}
            >
              CAREERS
            </Link>
            <Link
              className="hover:border-b w-fit  hover:border-[#AA1F2E] hover:text-[#AA1F2E] transition-all duration-300"
              href={""}
            >
              CONTACT US
            </Link>
            <Link
              className="hover:border-b w-fit  hover:border-[#AA1F2E] hover:text-[#AA1F2E] transition-all duration-300"
              href={"/#product"}
            >
              PRODUCTS
            </Link>
            <Link
              className="hover:border-b w-fit  hover:border-[#AA1F2E] hover:text-[#AA1F2E] transition-all duration-300"
              href={""}
            >
              INDUSTRIES
            </Link>
            <button className="bg-[#AA1F2E] py-2 px-3 w-fit rounded-lg text-white">
              REQUEST A QUOTE
            </button>
          </div>
        )}
      </div>

      <div className="hidden md:block">
        <div className=" bg-[#AA1F2E]">
          <div className="h-[54px] items-center font-bold text-[14px] text-white flex justify-end gap-5 py-4 pr-11 max-w-[1440px] mx-auto">
            <Link href={""}>ABOUT US</Link>
            <span>/</span>
            <Link href={"/certifications"}>CERTIFICATIONS</Link>
            <span>/</span>

            <Link href={""}>CAREERS</Link>
            <span>/</span>

            <Link href={""}>CONTACT US</Link>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto flex font-semibold text-[16px] justify-between items-center py-6 shadow-sm px-10">
          <Image
            width={200}
            height={10}
            alt="logo"
            className=" object-cover"
            src="/Logo/SafeInvotecLogo.png"
          />
          <div className=" text-end flex gap-5 items-center ">
            <div className="relative">
              <div
                className="px-2 py-1 cursor-pointer gap-3 w-auto flex items-center justify-between"
                onClick={() => {
                  setIsOpenSolutions(false);
                  setIsOpenProduct((prev) => !prev);
                }}
              >
                <span>PRODUCTS</span>
                <IoIosArrowDown className="text-xl" />
              </div>

              {isOpenProduct && (
                <div className="absolute flex flex-col text-left z-10 px-3 font-normal mt-2 text-gray-600 left-0 w-auto border border-gray-300 bg-gray-50 rounded-md shadow-lg">
                  <div
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => (window.location.href = "")}
                  >
                    Automotive
                  </div>
                  <div
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => (window.location.href = "")}
                  >
                    HVAC & Refrigeration
                  </div>
                  <div
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => (window.location.href = "")}
                  >
                    Medical
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <div
                className="px-2 py-1 cursor-pointer gap-3 flex items-center justify-between"
                onClick={() => {
                  setIsOpenProduct(false);
                  setIsOpenSolutions((prev) => !prev);
                }}
              >
                <span>INDUSTRIES</span>
                <IoIosArrowDown className="text-xl" />
              </div>

              {isOpenSolutions && (
                <div className="absolute flex flex-col text-left z-10 font-normal mt-2 text-gray-600 left-0 w-auto border border-gray-300 bg-gray-50 rounded-md shadow-lg">
                  <Link
                    href={"/brazzing?automotive"}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  >
                    Aerospace
                  </Link>
                  <Link
                    href={"/brazzing?hvac"}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  >
                    Automotive
                  </Link>
                  <Link
                    href={"/brazzing?Electrical"}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  >
                    Electrical
                  </Link>

                  <Link
                    href={"/brazzing?HVAC/R"}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  >
                    HVAC/R
                  </Link>
                  <Link
                    href={"/brazzing?Medical"}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  >
                    Medical
                  </Link>
                  <Link
                    href={"/brazzing?Microelectronics"}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  >
                    Microelectronics
                  </Link>
                  <Link
                    href={"/brazzing?OilGas"}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  >
                    Oil & Gas
                  </Link>
                  <Link
                    href={"/brazzing?Others"}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  >
                    Others
                  </Link>
                </div>
              )}
            </div>

            <button className="bg-[#AA1F2E] h-[42px] py-2 px-3 rounded-lg text-white">
              REQUEST A QUOTE
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
