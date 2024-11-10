import Image from "next/image";
import React from "react";

const LandingPage = () => {
  return (
    <div className=" w-full h-4/5 px-16 py-10 bg-[url('/HomePageBanner/BrazingSolutionSlider.jpg')] bg-cover bg-center">
      
      <div className=" h-full w-1/2 flex flex-col justify-center items-center">
        <div className=" pr-5 typewriter">
          <h1 className="text-[#AA1F2E] w-fit font-bold text-4xl">
            Innovative Brazing Solutions
          </h1>
          <h2 className="text-black mt-1 font-extrabold text-4xl">
            Precision and Reliability
          </h2>
          <p className=" text-xl mt-3">
            Safe Invotec: Delivering Advanced Brazing Technologies for Unmatched
            Performance and Durability
          </p>
          <button className="bg-[#AA1F2E] mt-6 font-bold text-white py-2 px-3 rounded-lg">
            VIEW OUR PRODUCTS
          </button>
          <button className=" bg-black ml-6 mt-6 font-bold text-white py-2 px-3 rounded-lg">
            LEARN MORE ABOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
