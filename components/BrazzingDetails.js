import Link from "next/link";
import React from "react";
import { PiFileArrowDown } from "react-icons/pi";
import Image from "next/image";

const BrazzingDetails = () => {
  return (
    <div>
      <div className=" max-w-[1440px] mx-auto">
        <div className=" px-5 sm:px-10 py-[60px] flex gap-10 flex-col md:flex-row">
          <div className="lg:h-[480px] lg:min-w-[480px] sm:h-[430px] h-[350px] sm:min-w-[400px] bg-[#FCFCFC] gas-b flex items-center justify-center">
            <Image
              src="/GasEquipment/601-25-AC right_11zon.png"
              alt="Gas Equipment"
              width={480}
              height={480}
              className=" sm:h-[75%] sm:w-[75%] h-[85%] w-[85%] object-contain"
            />
          </div>
          <div>
            <h1 className="text-[#AA1F2E] text-[42px] font-normal">
              SAFETY-SILV 54
            </h1>
            <div className=" mt-2">
              <h1 className="text-[#000] opacity-80 text-lg font-medium">
                Standard:
              </h1>
              <h3 className="text-[#000] opacity-60 text-base font-normal">
                AMS: 4772
              </h3>
            </div>

            <div className=" mt-5">
              <h1 className="text-[#000] opacity-80 text-lg font-medium">
                Standard:
              </h1>
              <h3 className="text-[#000] opacity-60 text-base font-normal">
                AMS: 4772
              </h3>
            </div>

            <div className="mt-5">
              <h1 className="text-[#000] opacity-80 text-lg font-medium">
                Standard:
              </h1>
              <h3 className="text-[#000] opacity-60 text-base font-normal">
                AMS: 4772
              </h3>
            </div>

            <a
              href={"/GasEquipment/gas-equipment-bg.jpg"}
              download
              className=" flex items-center gap-2 h-[54px] mt-10 bg-[#AA1F2E] text-[#fff] py-4 px-10 font-medium uppercase text-sm "
            >
              <PiFileArrowDown className=" text-2xl" /> TECHNICAL SHEET
            </a>
          </div>
        </div>
      </div>

      <div className="relative">
        <Image
          src="/GasEquipment/gas-equipment-bg.jpg"
          className="absolute top-0 h-full opacity-50 w-full -z-10 left-0 object-cover"
          layout="fill"
          alt="Background Image"
        />
        <div className="absolute top-0 -z-10 left-0 h-full w-full bg-gray-100 opacity-90"></div>
        <div className="max-w-[1440px] mx-auto py-[100px] px-5 md:pl-[60px] relative">
          <div className=" flex flex-col gap-10 items-start md:flex-row ">
            <h1 className="text-[#AA1F2E] text-[36px] font-normal md:w-[190px] w-full text-center md:text-right ">
              Properties
            </h1>
            <p className=" w-full md:w-3/4 sm:pr-5 text-[#000] opacity-80 text-base font-normal">
              A cadmium-free braze alloy with a fairly long melting range. The
              reduced zinc content makes it suitable for furnace brazing
              applications, often used to braze stainless steel. When oxy-fuel
              brazing with this filler metal it should be rapidly heated through
              its melting range to avoid liquation.
            </p>
          </div>

          <div className=" flex flex-col md:flex-row gap-10 items-start py-[60px]">
            <h1 className="text-[#AA1F2E] text-[36px] font-normal md:w-[190px] w-full text-center md:text-right ">
              Specs
            </h1>

            <div className=" flex flex-col gap-2">
              <div className="text-[#000] flex gap-5 sm:gap-10 justify-between sm:justify-start">
                <h1 className="opacity-80 font-medium w-3/5 sm:w-[180px]">
                  Solidus
                </h1>
                <h2 className=" text-base opacity-70 w-2/5 sm:w-auto">
                  1325oF (718°C)
                </h2>
              </div>

              <div className="text-[#000] flex gap-5 sm:gap-10 justify-between sm:justify-start">
                <h1 className="opacity-80 font-medium w-3/5 sm:w-[180px]">
                  Liquidus
                </h1>
                <h2 className=" text-base opacity-70 w-2/5 sm:w-auto">
                  1575°F (857°C)
                </h2>
              </div>

              <div className="text-[#000] flex gap-5 sm:gap-10 justify-between sm:justify-start">
                <h1 className="opacity-80 font-medium w-3/5 sm:w-[180px]">
                  Brazing Range
                </h1>
                <h2 className=" text-base opacity-70 w-2/5 sm:w-auto">
                  1575°F- 1775°F (860°C -970°C)
                </h2>
              </div>

              <div className="text-[#000] flex gap-5 sm:gap-10 justify-between sm:justify-start">
                <h1 className="opacity-80 font-medium w-3/5 sm:w-[180px]">
                  Electrical Conductivity
                </h1>
                <h2 className="text-base opacity-70  w-2/5 sm:w-fit">
                  49.3 (%IACS)
                </h2>
              </div>

              <div className="text-[#000] flex gap-5 sm:gap-10 justify-between sm:justify-start">
                <h1 className="opacity-80 font-medium w-3/5 sm:w-[180px]">
                  Density
                </h1>
                <h2 className="text-base opacity-70 w-2/5 sm:w-auto">
                  5.05 (T.O./cu.in.).
                </h2>
              </div>
            </div>
          </div>

          <div className=" flex flex-col md:flex-row gap-10 items-start ">
            <h1 className="text-[#AA1F2E] text-[36px] font-normal md:w-[190px] w-full text-center md:text-right ">
              Disclaimer
            </h1>
            <p className="md:w-3/4 w-full sm:pr-5 text-[#000] opacity-80 text-base font-normal">
              Any suggestion of product applications or results is given without
              representation or warranty, either expressed or implied. Without
              exception or limitation, there are no warranties of
              merchantability or of fitness for particular purpose or
              application. The user must fully evaluate every process and
              application in all aspects, including suitability, compliance with
              applicable law and noninfringement of the rights of others. The
              Harris Products Group and its affiliates shall have no liability
              in respect thereof.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrazzingDetails;
