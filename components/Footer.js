"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="border-t-2">
      <div className="px-5 sm:px-10 pb-[60px] pt-[70px] max-w-[1440px] mx-auto">
        {" "}
        <div className="flex flex-col md:flex-row gap-10 md:gap-48 items-start md:items-center">
          <div>
            <Image
              width={200}
              height={20}
              alt="logo"
              className=" object-cover mb-4"
              src="/Logo/SafeInvotecLogo.png"
            />
            <p className=" text-[#54565A] text-base font-normal">
              C517{","} 215 Atrium Andheri Kurla Road{","} <br /> Andheri (E)
              {","} Mumbai- 400059
            </p>
          </div>

          <div>
            <h1 className=" text-[32px] mb-4 font-bold text-[#AA1F2E]">
              Would you like to start a project with us?
            </h1>
            <div className=" flex mt-3 flex-wrap gap-2 sm:gap-4 items-start sm:items-center">
              <button className="px-2 py-3 h-fit rounded-lg bg-[#AA1F2E] text-white">
                REQUEST A QUOTE
              </button>
              <div className="">
                <p>or give us a call at </p>
                <p className=" font-extrabold text-xl text-[#AA1F2E]">
                  +91 9769035683
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" h-1 w-full bg-black mt-10 mb-[60px]"></div>
        <div className=" flex justify-between py-10 flex-wrap gap-10">
          <div className=" flex flex-col">
            <h1 className=" text-[#AA1F2E] font-extrabold text-xl mb-5">
              CONTACT
            </h1>
            <div className=" flex flex-col gap-4">
              <p>
                <span className=" font-semibold text-base">Call Us: </span>{" "}
                <span className="text-[#AA1F2E] font-semibold text-base">
                  +91 9769035683
                </span>
              </p>
              <Link href={""}>
                <span className=" font-semibold text-base">Email: </span>{" "}
                <span className="text-[#AA1F2E] font-semibold text-base">
                  info@safeinvotec.com
                </span>
              </Link>
              <div className="bg-[#172B4D] text-white w-10 h-10 text-xl flex items-center justify-center">
                <FaLinkedinIn />
              </div>
            </div>
          </div>

          <div className=" flex flex-col ">
            <h1 className=" text-[#AA1F2E] font-extrabold text-xl mb-5">
              INFORMATION
            </h1>
            <div className=" flex flex-col gap-4 font-medium">
              <Link
                href={""}
                className="text-[#54565A] hover:border-b text-base w-fit text-[54565A]  hover:border-[#AA1F2E] hover:text-[#AA1F2E] transition-all duration-300"
              >
                About Us
              </Link>
              <Link
                href={""}
                className="text-[#54565A] hover:border-b text-base font-semibold w-fit hover:border-[#AA1F2E] hover:text-[#AA1F2E] transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className=" flex flex-col font-medium ">
            <h1 className=" text-[#AA1F2E] font-extrabold text-xl mb-5">
              PRODUCTS
            </h1>
            <div className=" flex flex-col gap-4">
              <Link
                href={""}
                className=" text-[#54565A] hover:border-b w-fit text-base text-[54565A] hover:border-[#AA1F2E] hover:text-[#AA1F2E] transition-all duration-300"
              >
                Industries Gas Equipment
              </Link>
              <Link
                href={" "}
                className=" text-[#54565A] hover:border-b w-fit text-base text-[54565A] hover:border-[#AA1F2E] hover:text-[#AA1F2E] transition-all duration-300"
              >
                Speciality Gas Equipment
              </Link>
              <Link
                href={""}
                className=" text-[#54565A] hover:border-b w-fit text-base text-[54565A] hover:border-[#AA1F2E] hover:text-[#AA1F2E] transition-all duration-300"
              >
                Ultra High Purity Gas Equipment
              </Link>
              <Link
                href={""}
                className=" text-[#54565A] hover:border-b w-fit text-base text-[54565A] hover:border-[#AA1F2E] hover:text-[#AA1F2E] transition-all duration-300"
              >
                Brazing Filler & Fluxes
              </Link>
              <Link
                href={""}
                className=" text-[#54565A] hover:border-b w-fit text-base text-[54565A] hover:border-[#AA1F2E] hover:text-[#AA1F2E] transition-all duration-300"
              >
                Gas Flux
              </Link>
            </div>
          </div>
          <div className=" flex flex-col ">
            <h1 className=" text-[#AA1F2E] font-extrabold text-xl mb-5">
              TURNKEY SOLUTIONS
            </h1>
            <Link
              href={""}
              className=" text-[#54565A] hover:border-b font-medium text-base text-[54565A] w-fit hover:border-[#AA1F2E] hover:text-[#AA1F2E] transition-all duration-300"
            >
              Gas Distribution System
            </Link>
          </div>
          <div className=" my-auto flex gap-8 flex-col items-center">
            <IoLogoWhatsapp className="text-[#7BE57D] text-5xl" />
            <div
              className=" h-9 w-9 flex items-center justify-center cursor-pointer bg-[#AA1F2E]"
              onClick={handleScrollToTop}
            >
              <IoIosArrowUp className=" text-white text-3xl" />
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-[#0E1035] ">
        <div className="   text-white text-base font-medium h-auto sm:h-[60px] flex justify-between flex-wrap gap-5 py-5 sm:py-0 px-5 sm:px-10 max-w-[1440px] mx-auto items-center">
          <p>Copyright 2024 © Safe Invotec JCS LLP</p>
          <p> Privacy Policy | Terms & Condition</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
