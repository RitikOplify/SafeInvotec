import React from "react";

const TurnkeySolutions = () => {
  return (
    <div className="px-16 py-5 w-full">
      <h1 className="text-center text-4xl mb-5 font-extrabold text-[#AA1F2E]">
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
          <h1 className="text-center text-3xl mb-4 font-bold">
            GAS DISTRIBUTION SYSTEM
          </h1>
          <p className=" mt-1 font-bold text-gray-600 text-center">
            Learn More <i className="ri-arrow-right-s-line"></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TurnkeySolutions;
