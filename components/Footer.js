import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="border-t-2">
      {/* <div > */}
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
            <h1 className=" text-[32px] mb-4 font-extrabold text-[#AA1F2E]">
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
          <div className=" flex flex-col gap-1 ">
            <h1 className=" text-[#AA1F2E] font-extrabold text-xl mb-5">
              CONTACT
            </h1>
            <p>
              {" "}
              <span className=" font-semibold text-base">Call Us: </span>{" "}
              <span className="text-[#AA1F2E] font-semibold text-base">
                +91 9769035683
              </span>
            </p>
            <p>
              {" "}
              <span className=" font-semibold text-base">Email: </span>{" "}
              <span className="text-[#AA1F2E] font-semibold text-base">
                info@safeinvotec.com
              </span>
            </p>
          </div>

          <div className=" flex flex-col gap-1 ">
            <h1 className=" text-[#AA1F2E] font-extrabold text-xl mb-5">
              INFORMATION
            </h1>
            <p className="hover:border-b text-base font-semibold w-fit text-[54565A]  hover:border-[#AA1F2E] hover:text-[#AA1F2E] transition-all duration-300">
              About Us
            </p>
            <p className="hover:border-b text-base font-semibold w-fit text-[54565A] hover:border-[#AA1F2E] hover:text-[#AA1F2E] transition-all duration-300">
              Contact Us
            </p>
          </div>

          <div className=" flex flex-col gap-1 ">
            <h1 className=" text-[#AA1F2E] font-extrabold text-xl mb-5">
              PRODUCTS
            </h1>
            <p className="hover:border-b w-fit font-semibold text-base text-[54565A] hover:border-[#AA1F2E] hover:text-[#AA1F2E] transition-all duration-300">
              Industries Gas Equipment
            </p>
            <p className="hover:border-b w-fit font-semibold text-base text-[54565A] hover:border-[#AA1F2E] hover:text-[#AA1F2E] transition-all duration-300">
              Speciality Gas Equipment
            </p>
            <p className="hover:border-b w-fit font-semibold text-base text-[54565A] hover:border-[#AA1F2E] hover:text-[#AA1F2E] transition-all duration-300">
              Ultra High Purity Gas Equipment
            </p>
            <p className="hover:border-b w-fit font-semibold text-base text-[54565A] hover:border-[#AA1F2E] hover:text-[#AA1F2E] transition-all duration-300">
              Brazing Filler & Fluxes
            </p>
            <p className="hover:border-b font-semibold w-fit text-base text-[54565A] hover:border-[#AA1F2E] hover:text-[#AA1F2E] transition-all duration-300">
              Gas Flux
            </p>
          </div>
          <div className=" flex flex-col gap-1 ">
            <h1 className=" text-[#AA1F2E] font-extrabold text-xl mb-5">
              TURNKEY SOLUTIONS
            </h1>
            <p className="hover:border-b font-semibold text-base text-[54565A] w-fit hover:border-[#AA1F2E] hover:text-[#AA1F2E] transition-all duration-300">
              Gas Distribution System
            </p>
          </div>
        </div>
      </div>

      {/* </div> */}

      <div className=" bg-[#0E1035] ">
        <div className="   text-white text-base font-semibold h-auto sm:h-[60px] flex justify-between flex-wrap gap-5 py-5 sm:py-0 px-5 sm:px-10 max-w-[1440px] mx-auto items-center">
          <p>Copyright 2024 © Safe Invotec JCS LLP</p>
          <p> Privacy Policy | Terms & Condition</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
