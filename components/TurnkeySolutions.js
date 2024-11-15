import React from "react";

const TurnkeySolutions = () => {
  return (
    <div className="py-5 pb-[120px] w-full">
      <h1 className="text-center text-5xl mb-5 font-extrabold text-[#AA1F2E]">
        Turnkey Solutions
      </h1>
      <div className=" w-full">
        <div className=" flex justify-center relative">
          <div className=" w-full h-10 bg-[#AA1F2E] absolute left-1/2  top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <img
            className=" scale-75 object-cover"
            src="/TurnkeySolutions/gasdistributionsystems.png"
          />
        </div>
        <div>
          <h1 className="text-center sm:text-3xl text-lg text-[#000] text-[28px] mb-4 font-bold">
            GAS DISTRIBUTION SYSTEM
          </h1>
          <p className=" mt-1 font-bold text-[#000] text-base text-center">
            Learn More <i className="ri-arrow-right-s-line"></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TurnkeySolutions;
