import React, { useMemo } from "react";
import Image from "next/image";

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
    <div className="px-16 py-5 w-full">
      <h1 className="text-center text-4xl font-extrabold text-[#AA1F2E]">
        Integration Across Industries
      </h1>
      <div className=" flex justify-center pt-10">
        <p className=" text-center w-3/5">
          In addition to our premium products, we provide value-added services
          such as cost reduction strategies, technical support for new
          applications, and quality improvement initiatives, ensuring that you
          receive the best possible solutions for your brazing needs.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-12 py-10">
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
              <div className="pt-5 bg-white px-5 bg-opacity-80 w-[70%] relative translate-y-full group-hover:translate-y-0 transition-all duration-500">
                <div className="overflow-hidden">
                  <h2 className="font-bold text-xl mb-2 text-black">
                    {item.title}
                  </h2>
                  <div className="mb-6">{item.description}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IndustriesOverview;
