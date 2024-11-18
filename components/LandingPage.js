"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const LandingPage = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const slides = [
    {
      title: "Innovative Brazing Solutions",
      subtitle: "Precision and Reliability",
      description:
        "Safe Invotec: Delivering Advanced Brazing Technologies for Unmatched Performance and Durability",
      images: "/HomePageBanner/BrazingSolutionSlider.jpg",
    },
    {
      title: "Efficient and Reliable",
      subtitle: "Gas Savers",
      description:
        "Reduce gas usage and maximize efficiency with our trusted solutions",
      images: "/HomePageBanner/gassaverslider.jpg",
    },
    {
      title: "Precise and Durable",
      subtitle: "Soldering Solutions",
      description:
        "Achieve flawless connections with our reliable soldering expertise",
      images: "/HomePageBanner/solderingsolutionslider.jpg",
    },
    {
      title: "Strong and Accurate",
      subtitle: "Welding Solutions",
      description:
        "Delivering dependable welds with unmatched precision for every application",
      images: "/HomePageBanner/weldingsolutionslider.jpg",
    },
  ];
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleTransitionEnd = () => {
      if (activeSlide === slides.length) {
        setIsTransitioning(false);
        setActiveSlide(0);
        sliderRef.current.style.transition = "none";
        sliderRef.current.style.transform = `translateX(0%)`;
        setTimeout(() => {
          setIsTransitioning(true);
          sliderRef.current.style.transition = "";
        }, 0);
      }
    };

    const slider = sliderRef.current;
    slider.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      slider.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [activeSlide, slides.length]);

  useEffect(() => {
    let interval;

    const startSlider = () => {
      interval = setInterval(() => {
        setActiveSlide((prevSlide) => prevSlide + 1);
      }, 6000);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearInterval(interval);
      } else {
        startSlider();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    startSlider();

    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden relative">
      <div
        ref={sliderRef}
        className={`slider-container relative w-full flex ${
          isTransitioning
            ? "transition-transform duration-1000 ease-in-out"
            : ""
        }`}
        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
      >
        {[...slides, slides[0]].map((slide, index) => (
          <div
            key={index}
            className="slide h-fit w-full flex-shrink-0 flex justify-start items-center relative overflow-hidden"
          >
            {/* <Image
              src={slide.images}
              alt={slide.title}
              width={1440}
              height={100}
            /> */}

            <img src={slide.images} alt={slide.title} className=" w-full" />
            <div className="absolute top-[50%] transform -translate-y-1/2 flex items-center h-full w-[47%] z-10 bg-opacity-50 p-5 rounded-lg typewriter">
              <div>
                <h1
                  key={activeSlide}
                  className="text-[#AA1F2E] lg:text-[34px] md:text-2xl sm:text-xl text-xs w-fit font-bold overflow-hidden whitespace-nowrap animate-typing"
                >
                  {slide.title}
                </h1>
                <h2 className="text-black lg:py-1 lg:text-4xl md:text-2xl sm:text-xl text-xs lg:text-[30px] font-extrabold">
                  {slide.subtitle}
                </h2>
                <p className="text-xs lg:xl: sm:text-lg my-1">
                  {slide.description}
                </p>
                <div className=" flex lg:mt-5 flex-col md:flex-row md:mt-4 items-start gap-1 sm:gap-3 sm:mt-2">
                  <div className="bg-[#AA1F2E] font-bold md:py-3 md:px-3 text-white sm:py-2 py-1 px-2 text-xs rounded-lg">
                    VIEW OUR PRODUCTS
                  </div>
                  <div className="bg-black font-bold text-xs md:py-3 md:px-3 text-white sm:py-2 py-1 px-2 rounded-lg">
                    LEARN MORE ABOUT
                  </div>
                </div>
              </div>
            </div>
            <div />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
