import React, { useMemo } from "react";
import Image from "next/image";

const ProductRange = () => {
  const productRange = useMemo(
    () => [
      {
        image: "/Product/gasequipment.jpg",
        title: "GAS EQUIPMENTS",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere sem est, rhoncus pulvinar mi condimentum vel.",
        link: "/",
      },
      {
        image: "Product/brazing.jpg",
        title: "BRAZING",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere sem est, rhoncus pulvinar mi condimentum vel.",
        link: "/",
      },
      {
        image: "/Product/welding.jpg",
        title: "WELDING",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere sem est, rhoncus pulvinar mi condimentum vel.",
        link: "/",
      },
      {
        image: "/Product/soldering.jpg",
        title: "SOLDERING",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere sem est, rhoncus pulvinar mi condimentum vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere sem est, rhoncus pulvinar mi condimentum vel.",
        link: "/",
      },
    ],
    []
  );

  return (

    <div>
   <div className="px-5 sm:px-10 pb-[100px] max-w-[1440px] mx-auto">
      <h1 className="text-center text-5xl mb-[60px] font-bold text-[#AA1F2E]">
        Product Range
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-10">
        {productRange.map((item) => {
          return (
            <div
              key={item.title}
              className="h-72 relative flex flex-col justify-end group overflow-hidden"
            >
              <Image
                className="h-full absolute w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                src={item.image.startsWith("/") ? item.image : `/${item.image}`}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#AA1F2E] to-red-0 opacity-0 group-hover:opacity-60 transition-all duration-500"></div>
              <div className="relative z-10 mt-auto overflow-hidden">
                <div className="px-8 py-4 transform translate-y-[calc(100%-4rem)] group-hover:translate-y-0 transition-transform duration-500">
                  <h1 className="font-bold text-2xl mb-2 text-white">
                    {item.title}
                  </h1>

                  <div className="overflow-hidden">
                    <p className="text-white text-base font-normal transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      {item.description}
                    </p>
                  </div>
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

export default ProductRange;
