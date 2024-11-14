import React from "react";

const IndustrialSolutionsOverview = () => {
  return (
    <div className="w-full h-3/5 flex-col md:flex-row flex md:px-6 lg:px-16 py-5">
      <div className="h-full md:w-1/2 w-full flex items-center">
        <img src="/MapImage/Map.png" className=" h-full w-full object-cover"/>
      </div>
      <div className="md:w-1/2 w-full mt-4 md:pt-0 flex items-center flex-col justify-center px-5 md:px-6 lg:px-14">
        <p>
          Safe Invotec is your leading source for advanced joining and cutting
          solutions, including brazing, welding, and soldering materials. Our
          expertise ensures precision and reliability across a wide range of
          applications.
        </p>
        <p className=" mt-5">
          We also specialize in gas handling solutions, providing comprehensive
          support in industries like HVAC&R, aerospace, automotive, electronics,
          medical, and oil and gas, we are dedicated to excellence and
          innovation.
        </p>
      </div>
    </div>
  );
};

export default IndustrialSolutionsOverview;
