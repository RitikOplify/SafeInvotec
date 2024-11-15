"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav>
      <div className="max-w-[1440px] flex md:hidden py-6 px-5 sm:px-10 justify-between items-center relative">
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
            href={""}
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
            href={""}
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
          <Link href={""}>CERTIFICATIONS</Link>
          <span>/</span>

          <Link href={""}>CAREERS</Link>
          <span>/</span>

          <Link href={""}>CONTACT US</Link>
        </div>

        </div>
     
        <div className="max-w-[1440px] mx-auto flex font-semibold text-[16px] text-[#000000] justify-between items-center py-6 px-10">
          <Image
            width={200}
            height={10}
            alt="logo"
            className=" object-cover"
            src="/Logo/SafeInvotecLogo.png"
          />
          <div className=" text-end flex gap-5 items-center ">
            <Link href={""}>PRODUCTS</Link>
            <Link href={""}>INDUSTRIES</Link>
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
