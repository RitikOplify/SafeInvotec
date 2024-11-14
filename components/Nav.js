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
      <div className=" flex md:hidden py-5 sm:px-10 px-3 justify-between items-center">
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
      </div>
      {isOpen && (
        <div className=" flex md:hidden flex-col items-start absolute z-10 w-full bg-white gap-3 pb-5 sm:px-10 px-3">
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
      <div className=" hidden md:block">
        <div className=" bg-[#AA1F2E] text-white flex justify-end gap-5 py-4 pr-11">
          <Link href={""}>ABOUT US</Link>
          <Link href={""}>CERTIFICATIONS</Link>
          <Link href={""}>CAREERS</Link>
          <Link href={""}>CONTACT US</Link>
        </div>
        <div className="flex justify-between items-center py-6 px-10">
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
            <button className="bg-[#AA1F2E] py-2 px-3 rounded-lg text-white">
              REQUEST A QUOTE
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
