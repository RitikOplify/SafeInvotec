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
    <div className="px-16 py-5 w-full">
      <h1 className="text-center text-4xl font-extrabold text-[#AA1F2E]">
        Product Range
      </h1>
      <div className="grid grid-cols-2 gap-12 py-10">
        {productRange.map((item) => {
          return (
            <div
              key={item.title}
              className="h-72 relative flex flex-col justify-end group overflow-hidden"
            >
              <Image
                className="h-full absolute w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                src={item.image.startsWith('/') ? item.image : `/${item.image}`}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />

              <div className="absolute inset-0 bg-gradient-to-r from-red-800 via-red-600 to-red-100 opacity-0 group-hover:opacity-60 transition-all duration-500"></div>
              <div className="relative z-10 mt-auto overflow-hidden">
                <div className="px-8 py-4 transform translate-y-[calc(100%-4rem)] group-hover:translate-y-0 transition-transform duration-500">
                  <h1 className="font-bold text-xl mb-2 text-white">
                    {item.title}
                  </h1>

                  <div className="overflow-hidden">
                    <p className="text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
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
  );
};

export default ProductRange;
