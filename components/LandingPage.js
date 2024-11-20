"use client";
import React, { useState, useEffect } from "react";

const LandingPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const slides = [
    {
      title: "Innovative Brazing Solutions",
      subtitle: "Precision and Reliability",
      description:
        "Safe Invotec: Delivering Advanced Brazing Technologies for Unmatched Performance and Durability",
      image: "/HomePageBanner/Brazingsolutionsliderimage.jpg",
    },
    {
      title: "Efficient and Reliable",
      subtitle: "Gas Savers",
      description:
        "Reduce gas usage and maximize efficiency with our trusted solutions",
      image: "/HomePageBanner/gassaversliderimage.png",
    },
    {
      title: "Precise and Durable",
      subtitle: "Soldering Solutions",
      description:
        "Achieve flawless connections with our reliable soldering expertise",
      image: "/HomePageBanner/solderingsolutionsliderimage.png",
    },
    {
      title: "Strong and Accurate",
      subtitle: "Welding Solutions",
      description:
        "Delivering dependable welds with unmatched precision for every application",
      image: "/HomePageBanner/Weldingsolutionsliderimage.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(/HomePageBanner/homepageplainbackground.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className=" md:max-h-[75vh]"
    >
      <div className="max-w-[1440px] mx-auto overflow-hidden md:flex-row flex flex-col items-center">
        <div className="md:w-[47%] w-full z-10 bg-opacity-50 p-5 rounded-lg typewriter">
          <div>
            <h1
              key={currentImage}
              className="text-[#AA1F2E] lg:text-[34px] text-2xl w-fit font-bold overflow-hidden whitespace-nowrap animate-typing h-[45px]"
            >
              {slides[currentImage].title}
            </h1>
            <h2 className="text-black lg:py-1 text-2xl lg:text-[30px] font-extrabold">
              {slides[currentImage].subtitle}
            </h2>
            <p className="lg:xl: sm:text-lg my-1">
              {slides[currentImage].description}
            </p>
            <div className="flex lg:mt-5 mt-4 items-start gap-4 flex-wrap">
              <div className="bg-[#AA1F2E] font-bold md:py-3 md:px-3 text-white py-2 px-2 text-xs rounded-lg">
                VIEW OUR PRODUCTS
              </div>
              <div className="bg-black font-bold text-xs md:py-3 md:px-3 text-white py-2 px-2 rounded-lg">
                LEARN MORE ABOUT
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-[53%] w-full h-full flex">
          <div>
            {slides.map(
              (slide, index) =>
                index === currentImage && (
                  <div
                    key={index}
                    className="flex items-center p-5 right-0 slide-in"
                  >
                    <img
                      src={slide.image}
                      alt={slide.image || "Slide image"}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
