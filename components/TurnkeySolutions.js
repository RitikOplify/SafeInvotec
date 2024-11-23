import React from "react";
import Image from "next/image";
import Link from "next/link";

const TurnkeySolutions = () => {
  return (
    <div className="w-full">
      <h1 className="text-center text-4xl font-bold mb-5 text-[#AA1F2E]">
        Turnkey Solutions
      </h1>
      <div className="w-full">
        <div className=" flex justify-center relative">
          <div className=" w-full h-10 bg-[#AA1F2E] absolute left-1/2  top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <Image
            className="z-10 pt-5 pb-10 scale-90"
            src="/TurnkeySolutions/gasdistributionsystems.png"
            alt="Gas Distribution Systems"
            layout="intrinsic"
            width={500}
            height={500}
          />
        </div>
        <div>
          <h1 className="text-center sm:text-3xl text-lg text-[#000] text-[28px] mb-4 font-bold">
            GAS DISTRIBUTION SYSTEM
          </h1>
          <Link href={""} className=" mt-1 font-bold text-base text-center">
            <h1 className="text-[#000]">
              Learn More <i className="ri-arrow-right-s-line"></i>
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TurnkeySolutions;
