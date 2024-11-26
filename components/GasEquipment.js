import React from "react";
import { PiFileArrowDown } from "react-icons/pi";
import Image from 'next/image';
const GasEquipment = () => {
  return (
    <div>
      <Image
        src="/GasEquipment/Industrial Gas Equipment sliders.jpg"
        className=" w-full object-cover"
        alt="Industrial Gas Equipment"
        layout="responsive"
        width={1440}
        height={800}
      />
      <div className=" max-w-[1440px] mx-auto">
        <div className=" px-5 sm:px-10 py-[60px] flex gap-10 flex-col md:flex-row">
          <div className="lg:h-[480px] lg:min-w-[480px] sm:h-[430px] h-[350px] sm:min-w-[400px] bg-[#FCFCFC] gas-b flex items-center justify-center">
            <Image
              src="/GasEquipment/601-25-AC right_11zon.png"
              className=" sm:h-[75%] sm:w-[75%] h-[85%] w-[85%] object-contain"
              alt="Model 601"
              width={480}
              height={480}
            />
          </div>
          <div>
            <h1 className="text-[#AA1F2E] text-[42px] font-normal">
              Model 601
            </h1>
            <h2 className=" text-lg opacity-80 font-medium">
              Compact Single Stage Cylinder Regulator
            </h2>
            <p className=" text-[#000] opacity-60 text-base font-normal mt-7 mb-10 lg:w-2/3">
              Model 601 is a compact single stage cylinder regulator designed
              for light duty cutting, welding and brazing application.
            </p>
            <button className=" flex items-center gap-2 h-[54px] bg-[#AA1F2E] text-[#fff] py-4 px-10 font-medium uppercase text-sm ">
              <PiFileArrowDown className=" text-2xl" /> TECHNICAL SHEET
            </button>
          </div>
        </div>
      </div>

      <div className=" relative">
        <Image
          src="/GasEquipment/gas-equipment-bg.jpg"
          className=" absolute opacity-50 top-0 h-full w-full -z-10 left-0 object-cover"
          layout="fill"
          alt="Background Image"
        />
        <div className="absolute top-0 -z-10 left-0 h-full w-full bg-gray-100 opacity-90"></div>
        <div className="max-w-[1440px] mx-auto py-[100px] pl-[30px] sm:pl-[60px] relative">
          <h1 className="text-[#AA1F2E] text-[42px] font-normal pb-[30px]">
            Features
          </h1>
          <div className="text-[#000] flex flex-col gap-3 text-base font-normal">
            <div className=" flex items-center">
              <div className="h-[6px] w-[6px] bg-[#AA1F2E] rounded-full"></div>
              <span className=" opacity-70 ml-4">Compact and economical</span>
            </div>
            <div className=" flex items-center">
              <div className="h-[6px] w-[6px] bg-[#AA1F2E] rounded-full"></div>
              <span className=" opacity-70 ml-4">
                Maximum inlet pressure of 230 bar
              </span>
            </div>{" "}
            <div className=" flex items-center">
              <div className="h-[6px] w-[6px] bg-[#AA1F2E] rounded-full"></div>
              <span className=" opacity-70 ml-4">
                Forged brass body and bonnet
              </span>
            </div>
            <div className=" flex items-center">
              <div className="h-[6px] w-[6px] bg-[#AA1F2E] rounded-full"></div>
              <span className=" opacity-70 ml-4 md:w-full w-[80%]">
                One-piece encapsulated seat design with internal filter and PTFE
                (Teflon®*) seat
              </span>
            </div>
            <div className=" flex items-center">
              <div className="h-[6px] w-[6px] bg-[#AA1F2E] rounded-full"></div>
              <span className=" opacity-70 ml-4">
                Rear inlet connection (side entry optional)
              </span>
            </div>{" "}
            <div className=" flex items-center">
              <div className="h-[6px] w-[6px] bg-[#AA1F2E] rounded-full"></div>
              <span className=" opacity-70 ml-4">50 mm safety gauges</span>
            </div>{" "}
            <div className=" flex items-center">
              <div className="h-[6px] w-[6px] bg-[#AA1F2E] rounded-full"></div>
              <span className=" opacity-70 ml-4">7 year warranty</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GasEquipment;
