"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { MdOutlineArrowDropUp } from "react-icons/md";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav>
      <div className=" max-w-[1440px] flex md:hidden py-6 px-5 sm:px-10 justify-between shadow-sm items-center relative">
        <i
          className={`${
            isOpen
              ? "ri-close-large-fill text-3xl cursor-pointer"
              : "ri-menu-line text-3xl cursor-pointer"
          }`}
          onClick={menuOpen}
        ></i>
        <Link href={"/"}>
          <Image
            width={180}
            height={10}
            alt="logo"
            className=" object-cover"
            src="/Logo/SafeInvotecLogo.png"
          />
        </Link>
        {isOpen && (
          <div className="flex md:hidden flex-col items-start absolute top-[100%] left-0 z-10 w-full bg-white gap-3 p-5 border">
            <Link
              className="hover:border-b w-fit  hover:border-[#AA1F2E] hover:text-[#AA1F2E] transition-all duration-300"
              href={"/"}
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
              href={"/"}
            >
              CAREERS
            </Link>
            <Link
              className="hover:border-b w-fit  hover:border-[#AA1F2E] hover:text-[#AA1F2E] transition-all duration-300"
              href={"/"}
            >
              CONTACT US
            </Link>
            <div
              onClick={() => {
                setIsProductOpen((prev) => !prev);
              }}
              className="hover:border-b cursor-pointer w-fit flex items-center gap-2   hover:border-[#AA1F2E] hover:text-[#AA1F2E] transition-all duration-300"
            >
              PRODUCTS{" "}
              {isProductOpen ? (
                <MdOutlineArrowDropUp />
              ) : (
                <MdOutlineArrowDropDown />
              )}
            </div>

            {isProductOpen && (
              <div className="px-5 bg-gray-100 w-full py-4 flex flex-col gap-4">
                <div className=" text-base text-left">
                  <h3 className=" font-bold text-black mb-4">
                    INDUSTRIAL GAS EQUIPMENTS
                  </h3>
                  <ul>
                    <li className=" p-2  rounded-sm cursor-pointer hover:bg-gray-100">
                      Regulators
                    </li>
                    <li className=" p-2  rounded-sm cursor-pointer hover:bg-gray-100">
                      Torches
                    </li>
                    <li className=" p-2  rounded-sm cursor-pointer hover:bg-gray-100">
                      Flashback Arrestors
                    </li>
                    <li className=" p-2  rounded-sm cursor-pointer hover:bg-gray-100">
                      Panels
                    </li>
                    <li className=" p-2  rounded-sm cursor-pointer hover:bg-gray-100">
                      Accessories
                    </li>
                  </ul>
                </div>

                <div className=" text-base text-left">
                  <h3 className=" font-bold text-black mb-4">
                    SPECIALITY GAS EQUIPMENTS (GRADE 5)
                  </h3>
                  <ul>
                    <li className=" p-2  rounded-sm cursor-pointer hover:bg-gray-100">
                      Regulators
                    </li>
                    <li className=" p-2  rounded-sm cursor-pointer hover:bg-gray-100">
                      Panels
                    </li>
                    <li className=" p-2  rounded-sm cursor-pointer hover:bg-gray-100">
                      Accessories
                    </li>
                  </ul>
                </div>

                <div className=" text-base text-left">
                  <h3 className=" font-bold text-black mb-4">
                    ULTRA HIGH PURITY GAS EQUIPMENTS (GRADE 6)
                  </h3>
                  <ul>
                    <li className=" p-2  rounded-sm cursor-pointer hover:bg-gray-100">
                      Regulators
                    </li>
                    <li className=" p-2  rounded-sm cursor-pointer hover:bg-gray-100">
                      Panels
                    </li>
                    <li className=" p-2  rounded-sm cursor-pointer hover:bg-gray-100">
                      Point of Use Systems
                    </li>
                    <li className=" p-2  rounded-sm cursor-pointer hover:bg-gray-100">
                      Accessories
                    </li>
                  </ul>
                </div>

                <div className=" text-base text-left">
                  <h3 className=" font-bold text-black mb-4">
                    BRAZING FILLER AND FLUXES
                  </h3>
                  <ul>
                    <li className=" p-2  rounded-sm cursor-pointer hover:bg-gray-100">
                      Filler Metals
                    </li>
                    <li className=" p-2  rounded-sm cursor-pointer hover:bg-gray-100">
                      Fluxes
                    </li>
                    <li className=" p-2  rounded-sm cursor-pointer hover:bg-gray-100">
                      Pastes
                    </li>
                    <li className=" p-2  rounded-sm cursor-pointer hover:bg-gray-100">
                      Custom Shapes
                    </li>
                  </ul>
                </div>

                <div className=" text-base text-left">
                  <h3 className=" font-bold text-black mb-4">GAS FLUX</h3>
                  <ul>
                    <li className=" p-2  rounded-sm cursor-pointer hover:bg-gray-100">
                      Flux
                    </li>
                    <li className=" p-2  rounded-sm cursor-pointer hover:bg-gray-100">
                      Tank
                    </li>
                  </ul>
                </div>
              </div>
            )}

            <div
              onClick={() => {
                setIsIndustriesOpen((prev) => !prev);
              }}
              className="hover:border-b w-fit flex cursor-pointer items-center gap-2  hover:border-[#AA1F2E] hover:text-[#AA1F2E] transition-all duration-300"
              href={"/"}
            >
              INDUSTRIES import{" "}
              {isIndustriesOpen ? (
                <MdOutlineArrowDropUp />
              ) : (
                <MdOutlineArrowDropDown />
              )}
            </div>

            {isIndustriesOpen && (
              <div className=" flex flex-col text-left w-full bg-gray-100">
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

            <button className="bg-[#AA1F2E] py-2 px-3 w-fit rounded-lg text-white">
              REQUEST A QUOTE
            </button>
          </div>
        )}
      </div>

      <div className="hidden md:block">
        <div className=" bg-[#AA1F2E]">
          <div className="h-[54px] items-center font-bold text-[14px] text-white flex justify-end gap-5 py-4 pr-11 max-w-[1440px] mx-auto">
            <Link href={"/"}>ABOUT US</Link>
            <span>/</span>
            <Link href={"/certifications"}>CERTIFICATIONS</Link>
            <span>/</span>

            <Link href={"/"}>CAREERS</Link>
            <span>/</span>

            <Link href={"/"}>CONTACT US</Link>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto flex font-semibold text-[16px] justify-between items-center py-6 shadow-sm px-10">
          <Link href={"/"}>
            <Image
              width={180}
              height={10}
              alt="logo"
              className=" object-cover"
              src="/Logo/SafeInvotecLogo.png"
            />
          </Link>
          <div className=" text-end flex gap-5 items-center ">
            <div className="group">
              <div className="px-2 py-1 cursor-pointer gap-3 flex items-center justify-between">
                <span>PRODUCTS</span>
                <IoIosArrowDown className="text-xl" />
              </div>

              <div className="absolute hidden group-hover:block pt-2 w-screen z-10 font-normal text-gray-600 right-0">
                <div className="grid px-5 sm:px-10  grid-cols-1 shadow-lg md:grid-cols-3 py-4 bg-gray-50 gap-4">
                  <div className=" text-base text-left">
                    <h3 className=" font-bold text-black mb-4">
                      INDUSTRIAL GAS EQUIPMENTS
                    </h3>
                    <ul>
                      <li className=" p-2  rounded-sm cursor-pointer hover:bg-gray-100">
                        Regulators
                      </li>
                      <li className=" p-2  rounded-sm cursor-pointer hover:bg-gray-100">
                        Torches
                      </li>
                      <li className=" p-2  rounded-sm cursor-pointer hover:bg-gray-100">
                        Flashback Arrestors
                      </li>
                      <li className=" p-2  rounded-sm cursor-pointer hover:bg-gray-100">
                        Panels
                      </li>
                      <li className=" p-2  rounded-sm cursor-pointer hover:bg-gray-100">
                        Accessories
                      </li>
                    </ul>
                  </div>

                  <div className=" text-base text-left">
                    <h3 className=" font-bold text-black mb-4">
                      SPECIALITY GAS EQUIPMENTS (GRADE 5)
                    </h3>
                    <ul>
                      <li className=" p-2  rounded-sm cursor-pointer hover:bg-gray-100">
                        Regulators
                      </li>
                      <li className=" p-2  rounded-sm cursor-pointer hover:bg-gray-100">
                        Panels
                      </li>
                      <li className=" p-2  rounded-sm cursor-pointer hover:bg-gray-100">
                        Accessories
                      </li>
                    </ul>
                  </div>

                  <div className=" text-base text-left">
                    <h3 className=" font-bold text-black mb-4">
                      ULTRA HIGH PURITY GAS EQUIPMENTS (GRADE 6)
                    </h3>
                    <ul>
                      <li className=" p-2  rounded-sm cursor-pointer hover:bg-gray-100">
                        Regulators
                      </li>
                      <li className=" p-2  rounded-sm cursor-pointer hover:bg-gray-100">
                        Panels
                      </li>
                      <li className=" p-2  rounded-sm cursor-pointer hover:bg-gray-100">
                        Point of Use Systems
                      </li>
                      <li className=" p-2  rounded-sm cursor-pointer hover:bg-gray-100">
                        Accessories
                      </li>
                    </ul>
                  </div>

                  <div className=" text-base text-left">
                    <h3 className=" font-bold text-black mb-4">
                      BRAZING FILLER AND FLUXES
                    </h3>
                    <ul>
                      <li className=" p-2  rounded-sm cursor-pointer hover:bg-gray-100">
                        Filler Metals
                      </li>
                      <li className=" p-2  rounded-sm cursor-pointer hover:bg-gray-100">
                        Fluxes
                      </li>
                      <li className=" p-2  rounded-sm cursor-pointer hover:bg-gray-100">
                        Pastes
                      </li>
                      <li className=" p-2  rounded-sm cursor-pointer hover:bg-gray-100">
                        Custom Shapes
                      </li>
                    </ul>
                  </div>

                  <div className=" text-base text-left">
                    <h3 className=" font-bold text-black mb-4">GAS FLUX</h3>
                    <ul>
                      <li className=" p-2  rounded-sm cursor-pointer hover:bg-gray-100">
                        Flux
                      </li>
                      <li className=" p-2  rounded-sm cursor-pointer hover:bg-gray-100">
                        Tank
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="px-2 py-1 cursor-pointer gap-3 flex items-center justify-between">
                <span>INDUSTRIES</span>
                <IoIosArrowDown className="text-xl" />
              </div>

              <div className="absolute hidden group-hover:block py-2  z-10 font-normal text-gray-600 left-0">
                <div className=" flex flex-col text-left w-auto border border-gray-300 bg-gray-50 rounded-md shadow-lg">
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
              </div>
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
