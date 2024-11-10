import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="px-16 py-5 w-full">
        {" "}
        <div className=" flex gap-48 items-center">
          <div>
            <Image
              width={200}
              height={20}
              alt="logo"
              className=" object-cover mb-4"
              src="/Logo/SafeInvotecLogo.png"
            />
            <p>
              C517{","} 215 Atrium Andheri Kurla Road{","} <br /> Andheri (E)
              {","} Mumbai- 400059
            </p>
          </div>

          <div>
            <h1 className=" text-3xl mb-4 font-bold text-[#AA1F2E]">
              Would you like to start a project with us?
            </h1>
            <div className=" flex mt-3">
              <button className=" px-2 rounded-lg bg-[#AA1F2E] text-white">REQUEST A QUOTE</button>
              <div className=" ml-5">
                <p>or give us a call at </p>
                <p className=" font-bold text-xl text-[#AA1F2E]">
                  +91 9769035683
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" h-1 w-full bg-black mt-10"></div>
        <div className=" flex justify-between py-10">
          <div className=" flex flex-col gap-1 ">
            <h1 className=" text-[#AA1F2E] font-bold text-xl mb-2">CONTACT</h1>
            <p>
              {" "}
              <span className=" font-bold">Call Us: </span>{" "}
              <span className="text-[#AA1F2E]">+91 9769035683</span>
            </p>
            <p>
              {" "}
              <span className=" font-bold">Email: </span>{" "}
              <span className="text-[#AA1F2E]">info@safeinvotec.com</span>
            </p>
          </div>

          <div className=" flex flex-col gap-1 ">
            <h1 className=" text-[#AA1F2E] font-bold text-xl mb-2">
              INFORMATION
            </h1>
            <p className="hover:border-b w-fit  hover:border-[#AA1F2E] hover:text-[#AA1F2E] transition-all duration-300">
              About Us
            </p>
            <p className="hover:border-b w-fit hover:border-[#AA1F2E] hover:text-[#AA1F2E] transition-all duration-300">
              Contact Us
            </p>
          </div>

          <div className=" flex flex-col gap-1 ">
            <h1 className=" text-[#AA1F2E] font-bold text-xl mb-2">PRODUCTS</h1>
            <p className="hover:border-b w-fit hover:border-[#AA1F2E] hover:text-[#AA1F2E] transition-all duration-300">
              Industries Gas Equipment
            </p>
            <p className="hover:border-b w-fit hover:border-[#AA1F2E] hover:text-[#AA1F2E] transition-all duration-300">
              Speciality Gas Equipment
            </p>
            <p className="hover:border-b w-fit hover:border-[#AA1F2E] hover:text-[#AA1F2E] transition-all duration-300">
              Ultra High Purity Gas Equipment
            </p>
            <p className="hover:border-b w-fit hover:border-[#AA1F2E] hover:text-[#AA1F2E] transition-all duration-300">
              Brazing Filler & Fluxes
            </p>
            <p className="hover:border-b w-fit hover:border-[#AA1F2E] hover:text-[#AA1F2E] transition-all duration-300">
              Gas Flux
            </p>
          </div>
          <div className=" flex flex-col gap-1 ">
            <h1 className=" text-[#AA1F2E] font-bold text-xl mb-2">
              TURNKEY SOLUTIONS
            </h1>
            <p className="hover:border-b w-fit hover:border-[#AA1F2E] hover:text-[#AA1F2E] transition-all duration-300">
              Gas Distribution System
            </p>
          </div>
        </div>
      </div>
      <div className=" bg-blue-950 text-white flex justify-between px-16 py-3">
        <p>Copyright 2024 © Safe Invotec JCS LLP</p>
        <p> Privacy Policy | Terms & Condition</p>
      </div>
    </div>
  );
};

export default Footer;
