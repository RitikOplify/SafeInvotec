import React, { useMemo } from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

const IndustriesOverview = () => {
  const industryRange = useMemo(
    () => [
      {
        image: "/Industries/Airplane-Maintenance.jpeg",
        title: "AEROSPACE",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere sem est, rhoncus pulvinar mi condimentum vel.",
        link: "/",
      },
      {
        image: "/Industries/AUTOMOBILE.png",
        title: "AUTOMOBILE",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere sem est, rhoncus pulvinar mi condimentum vel.",
        link: "/",
      },
      {
        image: "/Industries/HVAC&R.jpg",
        title: "HVAC&R",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere sem est, rhoncus pulvinar mi condimentum vel.",
        link: "/",
      },
      {
        image: "/Industries/chiptest.jpg",
        title: " MACRO & MICRO ELECTRIC",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere sem est, rhoncus pulvinar mi condimentum vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere sem est, rhoncus pulvinar mi condimentum vel.",
        link: "/",
      },
      {
        image: "/Industries/RIXIndustries_medicalcylinders.jpg",
        title: "MEDICAL",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere sem est, rhoncus pulvinar mi condimentum vel.",
        link: "/",
      },
      {
        image: "/Industries/cuttingtool.jpeg",
        title: "Cutting Tools",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere sem est, rhoncus pulvinar mi condimentum vel.",
        link: "/",
      },
    ],
    []
  );

  return (
    <div>
      <div className="px-5 sm:px-10 pb-[120px] max-w-[1440px] mx-auto ">
        <h1 className="text-center text-4xl font-bold mb-[30px] text-[#AA1F2E]">
          Integration Across Industries
        </h1>
        <div className=" flex justify-center pb-10">
          <p className=" lg:text-center lg:w-3/5 text-[#54565A] text-base text-left">
            In addition to our premium products, we provide value-added services
            such as cost reduction strategies, technical support for new
            applications, and quality improvement initiatives, ensuring that you
            receive the best possible solutions for your brazing needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {industryRange.map((item) => {
            return (
              <div
                key={item.title}
                className="h-72 flex relative flex-col justify-end group overflow-hidden"
              >
                <Image
                  className="h-full absolute w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                  priority={item.image === "/Industries/cuttingtool.jpeg"}
                />
                <h1 className="absolute w-full text-center top-1/2 -translate-y-1/2 font-bold text-xl text-white z-10 group-hover:opacity-0 transition-opacity duration-500">
                  {item.title}
                </h1>

                <div className=" flex translate-y-full group-hover:translate-y-0 transition-all duration-500 items-end">
                  {" "}
                  <div className="pt-5 flex bg-white px-5 bg-opacity-80 w-[70%] relative ">
                    <div className="overflow-hidden">
                      <h2 className=" text-xl mb-2 text-[#AA1F2E] font-extrabold">
                        {item.title}
                      </h2>
                      <div className="mb-6 text-sm text-[#54565A]">
                        {item.description}
                      </div>
                    </div>
                  </div>
                  <div className="cursor-pointer h-11 w-11 bg-[#AA1F2E] grayscale group-hover:grayscale-0 transition-all duration-500 text-white flex items-center justify-center text-4xl">
                    <IoIosArrowForward />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default IndustriesOverview;
