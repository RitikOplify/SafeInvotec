import React from "react";
import Image from "next/image";

const IndustrialSolutionsOverview = () => {
  return (
    <div>
      <div className="max-w-[1440px] h-3/5 flex-col md:flex-row flex gap-20 md:gap-0 pt-[120px] pb-[100px] mx-auto px-5 sm:px-10 items-center">
        <div className="h-full md:w-1/2 w-full flex items-center">
          <Image
            src="/MapImage/Map.png"
            alt="Map"
            height={100}
            width={600}
            className="object-cover"
          />
        </div>
        <div className="md:w-1/2 text-[#54565A] text-base w-full md:pt-0 flex items-center flex-col justify-center px-5 md:px-6 lg:px-14">
          <p>
            Safe Invotec is your leading source for advanced joining and cutting
            solutions, including brazing, welding, and soldering materials. Our
            expertise ensures precision and reliability across a wide range of
            applications.
          </p>
          <p className=" mt-5">
            We also specialize in gas handling solutions, providing
            comprehensive support in industries like HVAC&R, aerospace,
            automotive, electronics, medical, and oil and gas, we are dedicated
            to excellence and innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndustrialSolutionsOverview;
