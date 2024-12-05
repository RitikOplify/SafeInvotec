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
      <div className=" max-w-[1440px] flex md:hidden px-5 sm:px-10 justify-between shadow-sm items-center relative">
        <div className=" w-full h-16"></div>
        <div className=" fixed top-0 left-0 flex justify-between w-full h-16 items-center px-5 sm:px-10 z-50 bg-white">
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
        </div>
        {isOpen && (
          <div className="flex hide-scrollbar md:hidden flex-col items-start fixed max-h-[93%] overflow-y-auto top-16 z-50 left-0 w-full bg-white gap-3 p-5 border">
            <Link
              className="hover:border-b w-fit  hover:border-[#AA1F2E] hover:text-[#AA1F2E] transition-all duration-300"
              href={"/about-us"}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              ABOUT US
            </Link>
            <Link
              className="hover:border-b w-fit  hover:border-[#AA1F2E] hover:text-[#AA1F2E] transition-all duration-300"
              href={"/certifications"}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              CERTIFICATIONS
            </Link>
            <Link
              className="hover:border-b w-fit  hover:border-[#AA1F2E] hover:text-[#AA1F2E] transition-all duration-300"
              href={"/"}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              CAREERS
            </Link>
            <Link
              className="hover:border-b w-fit  hover:border-[#AA1F2E] hover:text-[#AA1F2E] transition-all duration-300"
              href={"/"}
              onClick={() => {
                setIsOpen(false);
              }}
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
              <div className="px-5 bg-gray-50 w-full py-4 flex flex-col gap-4">
                <div className=" text-base text-left">
                  <h3 className=" font-bold text-black mb-2 w-fit hover:border-b-[1.5px] hover:border-b-black transition-all duration-300">
                    INDUSTRIAL GAS EQUIPMENTS
                  </h3>
                  <ul className=" px-1">
                    <li
                      className=" py-1 cursor-pointer w-fit hover:border-b-[1.5px] hover:border-b-black transition-all duration-300"
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      Regulators
                    </li>

                    <li
                      className=" py-1 cursor-pointer w-fit hover:border-b-[1.5px] hover:border-b-black transition-all duration-300"
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      Torches
                    </li>
                    <li
                      className=" py-1 cursor-pointer w-fit hover:border-b-[1.5px] hover:border-b-black transition-all duration-300"
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      Flashback Arrestors
                    </li>
                    <li
                      className=" py-1 cursor-pointer w-fit hover:border-b-[1.5px] hover:border-b-black transition-all duration-300"
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      Panels
                    </li>
                    <li
                      className=" py-1 cursor-pointer w-fit hover:border-b-[1.5px] hover:border-b-black transition-all duration-300"
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      Accessories
                    </li>
                  </ul>
                </div>

                <div className=" text-base text-left">
                  <h3 className=" font-bold text-black mb-2 w-fit hover:border-b-[1.5px] hover:border-b-black transition-all duration-300">
                    SPECIALITY GAS EQUIPMENTS (GRADE 5)
                  </h3>
                  <ul className=" px-1">
                    <li
                      className=" py-1 cursor-pointer w-fit hover:border-b-[1.5px] hover:border-b-black transition-all duration-300"
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      Regulators
                    </li>
                    <li
                      className=" py-1 cursor-pointer w-fit hover:border-b-[1.5px] hover:border-b-black transition-all duration-300"
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      Panels
                    </li>
                    <li
                      className=" py-1 cursor-pointer w-fit hover:border-b-[1.5px] hover:border-b-black transition-all duration-300"
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      Accessories
                    </li>
                  </ul>
                </div>

                <div className=" text-base text-left">
                  <h3 className=" font-bold text-black mb-2 w-fit hover:border-b-[1.5px] hover:border-b-black transition-all duration-300">
                    ULTRA HIGH PURITY GAS EQUIPMENTS (GRADE 6)
                  </h3>
                  <ul className=" px-1">
                    <li
                      className=" py-1 cursor-pointer w-fit hover:border-b-[1.5px] hover:border-b-black transition-all duration-300"
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      Regulators
                    </li>
                    <li
                      className=" py-1 cursor-pointer w-fit hover:border-b-[1.5px] hover:border-b-black transition-all duration-300"
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      Panels
                    </li>
                    <li
                      className=" py-1 cursor-pointer w-fit hover:border-b-[1.5px] hover:border-b-black transition-all duration-300"
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      Point of Use Systems
                    </li>
                    <li
                      className=" py-1 cursor-pointer w-fit hover:border-b-[1.5px] hover:border-b-black transition-all duration-300"
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      Accessories
                    </li>
                  </ul>
                </div>

                <div className=" text-base text-left">
                  <h3 className=" font-bold text-black mb-2 w-fit hover:border-b-[1.5px] hover:border-b-black transition-all duration-300">
                    BRAZING FILLER AND FLUXES
                  </h3>
                  <ul className=" px-1">
                    <li
                      className=" py-1 cursor-pointer w-fit hover:border-b-[1.5px] hover:border-b-black transition-all duration-300"
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      Filler Metals
                    </li>
                    <li
                      className=" py-1 cursor-pointer w-fit hover:border-b-[1.5px] hover:border-b-black transition-all duration-300"
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      Fluxes
                    </li>
                    <li
                      className=" py-1 cursor-pointer w-fit hover:border-b-[1.5px] hover:border-b-black transition-all duration-300"
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      Pastes
                    </li>
                    <li
                      className=" py-1 cursor-pointer w-fit hover:border-b-[1.5px] hover:border-b-black transition-all duration-300"
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      Custom Shapes
                    </li>
                  </ul>
                </div>

                <div className=" text-base text-left">
                  <h3 className=" font-bold text-black mb-2 w-fit hover:border-b-[1.5px] hover:border-b-black transition-all duration-300">
                    GAS FLUX
                  </h3>
                  <ul className=" px-1">
                    <li
                      className=" py-1 cursor-pointer w-fit hover:border-b-[1.5px] hover:border-b-black transition-all duration-300"
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      Flux
                    </li>
                    <li
                      className=" py-1 cursor-pointer w-fit hover:border-b-[1.5px] hover:border-b-black transition-all duration-300"
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
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
              INDUSTRIES
              {isIndustriesOpen ? (
                <MdOutlineArrowDropUp />
              ) : (
                <MdOutlineArrowDropDown />
              )}
            </div>

            {isIndustriesOpen && (
              <div className=" px-5 py-4 flex flex-col text-left w-full bg-gray-50">
                <Link
                  href={"/brazzing?automotive"}
                  className=" py-1 cursor-pointer w-fit hover:border-b-[1.5px] hover:border-b-black transition-all duration-300"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  Aerospace
                </Link>
                <Link
                  href={"/brazzing?hvac"}
                  className=" py-1 cursor-pointer w-fit hover:border-b-[1.5px] hover:border-b-black transition-all duration-300"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  Automotive
                </Link>
                <Link
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  href={"/brazzing?Electrical"}
                  className=" py-1 cursor-pointer w-fit hover:border-b-[1.5px] hover:border-b-black transition-all duration-300"
                >
                  Electrical
                </Link>
                <Link
                  href={"/brazzing?HVAC/R"}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className=" py-1 cursor-pointer w-fit hover:border-b-[1.5px] hover:border-b-black transition-all duration-300"
                >
                  HVAC/R
                </Link>
                <Link
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  href={"/brazzing?Medical"}
                  className=" py-1 cursor-pointer w-fit hover:border-b-[1.5px] hover:border-b-black transition-all duration-300"
                >
                  Medical
                </Link>
                <Link
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  href={"/brazzing?Microelectronics"}
                  className=" py-1 cursor-pointer w-fit hover:border-b-[1.5px] hover:border-b-black transition-all duration-300"
                >
                  Microelectronics
                </Link>
                <Link
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  href={"/brazzing?OilGas"}
                  className=" py-1 cursor-pointer w-fit hover:border-b-[1.5px] hover:border-b-black transition-all duration-300"
                >
                  Oil & Gas
                </Link>
                <Link
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  href={"/brazzing?Others"}
                  className=" py-1 cursor-pointer w-fit hover:border-b-[1.5px] hover:border-b-black transition-all duration-300"
                >
                  Others
                </Link>
              </div>
            )}

            <button
              className="bg-[#AA1F2E] py-2 px-3 w-fit rounded-lg text-white"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              REQUEST A QUOTE
            </button>
          </div>
        )}
      </div>
      <div className=" w-full h-[111px] opacity-0 hidden md:block"></div>
      <div className="hidden fixed top-0 left-0 w-full z-50 md:block">
        <div className=" bg-[#AA1F2E]">
          <div className="items-center font-medium text-[14px] text-white flex justify-end gap-5 py-2 pr-11 max-w-[1440px] mx-auto">
            <Link
              href={"/about-us"}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              ABOUT US
            </Link>
            <span>/</span>
            <Link
              href={"/certifications"}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              CERTIFICATIONS
            </Link>
            <span>/</span>

            <Link
              href={"/"}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              CAREERS
            </Link>
            <span>/</span>

            <Link
              href={"/contact-us"}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              CONTACT US
            </Link>
          </div>
        </div>

        <div className=" bg-white">
          <div className="max-w-[1440px] bg-white mx-auto flex font-semibold text-[16px] justify-between items-center py-4 shadow-sm px-10">
            <Link
              href={"/"}
              onClick={() => {
                setIsOpen(false);
              }}
            >
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

                <div className="absolute max-w-[1440px] left-1/2 transform -translate-x-1/2 hidden group-hover:block pt-2 w-screen z-10 font-normal text-gray-600 right-0">
                  <div className="grid px-5 sm:px-10  grid-cols-1 shadow-lg md:grid-cols-3 py-4 bg-gray-50 gap-4">
                    <div className=" text-base text-left">
                      <h3 className=" font-bold text-black mb-2 w-fit hover:border-b-[1.5px] hover:border-b-black transition-all duration-300">
                        INDUSTRIAL GAS EQUIPMENTS
                      </h3>
                      <ul>
                        <li
                          className=" cursor-pointer py-1 hover:border-b-[1.5px] w-fit hover:border-b-black hover:text-black transition-all duration-300"
                          onClick={() => {
                            setIsOpen(false);
                          }}
                        >
                          Regulators
                        </li>
                        <li
                          className=" cursor-pointer py-1 hover:border-b-[1.5px] w-fit hover:border-b-black hover:text-black transition-all duration-300"
                          onClick={() => {
                            setIsOpen(false);
                          }}
                        >
                          Torches
                        </li>
                        <li
                          className=" cursor-pointer py-1 hover:border-b-[1.5px] w-fit hover:border-b-black hover:text-black transition-all duration-300"
                          onClick={() => {
                            setIsOpen(false);
                          }}
                        >
                          Flashback Arrestors
                        </li>
                        <li
                          className=" cursor-pointer py-1 hover:border-b-[1.5px] w-fit hover:border-b-black hover:text-black transition-all duration-300"
                          onClick={() => {
                            setIsOpen(false);
                          }}
                        >
                          Panels
                        </li>
                        <li
                          className=" cursor-pointer py-1 hover:border-b-[1.5px] w-fit hover:border-b-black hover:text-black transition-all duration-300"
                          onClick={() => {
                            setIsOpen(false);
                          }}
                        >
                          Accessories
                        </li>
                      </ul>
                    </div>

                    <div className=" text-base text-left">
                      <h3 className=" font-bold text-black mb-2 w-fit hover:border-b-[1.5px] hover:border-b-black transition-all duration-300">
                        SPECIALITY GAS EQUIPMENTS (GRADE 5)
                      </h3>
                      <ul>
                        <li
                          className=" cursor-pointer py-1 hover:border-b-[1.5px] w-fit hover:border-b-black hover:text-black transition-all duration-300"
                          onClick={() => {
                            setIsOpen(false);
                          }}
                        >
                          Regulators
                        </li>
                        <li
                          className=" cursor-pointer py-1 hover:border-b-[1.5px] w-fit hover:border-b-black hover:text-black transition-all duration-300"
                          onClick={() => {
                            setIsOpen(false);
                          }}
                        >
                          Panels
                        </li>
                        <li
                          className=" cursor-pointer py-1 hover:border-b-[1.5px] w-fit hover:border-b-black hover:text-black transition-all duration-300"
                          onClick={() => {
                            setIsOpen(false);
                          }}
                        >
                          Accessories
                        </li>
                      </ul>
                    </div>

                    <div className=" text-base text-left">
                      <h3 className=" font-bold text-black mb-2 w-fit hover:border-b-[1.5px] hover:border-b-black transition-all duration-300">
                        ULTRA HIGH PURITY GAS EQUIPMENTS (GRADE 6)
                      </h3>
                      <ul>
                        <li
                          className=" cursor-pointer py-1 hover:border-b-[1.5px] w-fit hover:border-b-black hover:text-black transition-all duration-300"
                          onClick={() => {
                            setIsOpen(false);
                          }}
                        >
                          Regulators
                        </li>
                        <li
                          className=" cursor-pointer py-1 hover:border-b-[1.5px] w-fit hover:border-b-black hover:text-black transition-all duration-300"
                          onClick={() => {
                            setIsOpen(false);
                          }}
                        >
                          Panels
                        </li>
                        <li
                          className=" cursor-pointer py-1 hover:border-b-[1.5px] w-fit hover:border-b-black hover:text-black transition-all duration-300"
                          onClick={() => {
                            setIsOpen(false);
                          }}
                        >
                          Point of Use Systems
                        </li>
                        <li
                          className=" cursor-pointer py-1 hover:border-b-[1.5px] w-fit hover:border-b-black hover:text-black transition-all duration-300"
                          onClick={() => {
                            setIsOpen(false);
                          }}
                        >
                          Accessories
                        </li>
                      </ul>
                    </div>

                    <div className=" text-base text-left">
                      <h3 className=" font-bold text-black mb-2 w-fit hover:border-b-[1.5px] hover:border-b-black transition-all duration-300">
                        BRAZING FILLER AND FLUXES
                      </h3>
                      <ul>
                        <li
                          className=" cursor-pointer py-1 hover:border-b-[1.5px] w-fit hover:border-b-black hover:text-black transition-all duration-300"
                          onClick={() => {
                            setIsOpen(false);
                          }}
                        >
                          Filler Metals
                        </li>
                        <li
                          className=" cursor-pointer py-1 hover:border-b-[1.5px] w-fit hover:border-b-black hover:text-black transition-all duration-300"
                          onClick={() => {
                            setIsOpen(false);
                          }}
                        >
                          Fluxes
                        </li>
                        <li
                          className=" cursor-pointer py-1 hover:border-b-[1.5px] w-fit hover:border-b-black hover:text-black transition-all duration-300"
                          onClick={() => {
                            setIsOpen(false);
                          }}
                        >
                          Pastes
                        </li>
                        <li
                          className=" cursor-pointer py-1 hover:border-b-[1.5px] w-fit hover:border-b-black hover:text-black transition-all duration-300"
                          onClick={() => {
                            setIsOpen(false);
                          }}
                        >
                          Custom Shapes
                        </li>
                      </ul>
                    </div>

                    <div className=" text-base text-left">
                      <h3 className=" font-bold text-black mb-2 w-fit hover:border-b-[1.5px] hover:border-b-black transition-all duration-300">
                        GAS FLUX
                      </h3>
                      <ul>
                        <li
                          className=" cursor-pointer py-1 hover:border-b-[1.5px] w-fit hover:border-b-black hover:text-black transition-all duration-300"
                          onClick={() => {
                            setIsOpen(false);
                          }}
                        >
                          Flux
                        </li>
                        <li
                          className=" cursor-pointer py-1 hover:border-b-[1.5px] w-fit hover:border-b-black hover:text-black transition-all duration-300"
                          onClick={() => {
                            setIsOpen(false);
                          }}
                        >
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
                  <div className=" flex flex-col text-left w-auto border overflow-hidden border-gray-300 bg-gray-50 rounded-md shadow-lg">
                    <Link
                      href={"/brazzing?automotive"}
                      onClick={() => {
                        setIsOpen(false);
                      }}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    >
                      Aerospace
                    </Link>
                    <Link
                      href={"/brazzing?hvac"}
                      onClick={() => {
                        setIsOpen(false);
                      }}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    >
                      Automotive
                    </Link>
                    <Link
                      href={"/brazzing?Electrical"}
                      onClick={() => {
                        setIsOpen(false);
                      }}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    >
                      Electrical
                    </Link>
                    <Link
                      href={"/brazzing?HVAC/R"}
                      onClick={() => {
                        setIsOpen(false);
                      }}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    >
                      HVAC/R
                    </Link>
                    <Link
                      href={"/brazzing?Medical"}
                      onClick={() => {
                        setIsOpen(false);
                      }}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    >
                      Medical
                    </Link>
                    <Link
                      href={"/brazzing?Microelectronics"}
                      onClick={() => {
                        setIsOpen(false);
                      }}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    >
                      Microelectronics
                    </Link>
                    <Link
                      href={"/brazzing?OilGas"}
                      onClick={() => {
                        setIsOpen(false);
                      }}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    >
                      Oil & Gas
                    </Link>
                    <Link
                      href={"/brazzing?Others"}
                      onClick={() => {
                        setIsOpen(false);
                      }}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    >
                      Others
                    </Link>
                  </div>
                </div>
              </div>

              <button
                className="bg-[#AA1F2E] h-[42px] py-2 px-3 rounded-lg text-white"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                REQUEST A QUOTE
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
