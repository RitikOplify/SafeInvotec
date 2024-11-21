"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

const LandingPage = () => {
  const [currentContent, setCurrentContent] = useState({
    image: "/HomePageBanner/Brazingsolutionsliderimage.jpg",
    subheading: "Precision and Reliability",
    desc: "Safe Invotec: Delivering Advanced Brazing Technologies for Unmatched Performance and Durability",
  });

  const [animate, setAnimate] = useState(false);

  const contentData = [
    {
      image: "/HomePageBanner/gassaversliderimage.png",
      subheading: "Gas Savers",
      desc: "Reduce gas usage and maximize efficiency with our trusted solutions",
    },
    {
      image: "/HomePageBanner/solderingsolutionsliderimage.png",
      subheading: "Soldering Solutions",
      desc: "Achieve flawless connections with our reliable soldering expertise",
    },
    {
      image: "/HomePageBanner/Weldingsolutionsliderimage.jpg",
      subheading: "Welding Solutions",
      desc: "Delivering dependable welds with unmatched precision for every application",
    },
  ];

  useEffect(() => {
    // Trigger animation on image change
    setAnimate(true);
    const timeout = setTimeout(() => setAnimate(false), 750); // Match animation duration
    return () => clearTimeout(timeout);
  }, [currentContent]);

  return (
    <div
      className="w-full"
      style={{
        backgroundImage: `url(/HomePageBanner/homepageplainbackground.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 flex gap-10 md:gap-0 flex-col md:flex-row py-10">
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-5">
          <h1 className="text-[#AA1F2E] text-2xl sm:text-3xl md:text-4xl font-bold">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Innovative Brazing Solutions")
                  .pauseFor(500)
                  .deleteAll()
                  .callFunction(() => {
                    setCurrentContent(contentData[0]);
                  })
                  // .pauseFor(500)
                  .typeString("Efficient and Reliable")
                  .pauseFor(500)
                  .deleteAll()
                  .callFunction(() => {
                    setCurrentContent(contentData[1]);
                  })
                  // .pauseFor(500)
                  .typeString("Precise and Durable")
                  .pauseFor(500)
                  .deleteAll()
                  .callFunction(() => {
                    setCurrentContent(contentData[2]);
                  })
                  // .pauseFor(500)
                  .typeString("Strong and Accurate")
                  .pauseFor(500)
                  .deleteAll()
                  .callFunction(() => {
                    setCurrentContent({
                      image: "/HomePageBanner/Brazingsolutionsliderimage.jpg",
                      subheading: "Precision and Reliability",
                      desc: "Safe Invotec: Delivering Advanced Brazing Technologies for Unmatched Performance and Durability",
                    });
                  })
                  .start();
              }}
              options={{
                loop: true,
                delay: 50,
              }}
            />
          </h1>
          <h2 className="text-black font-bold text-xl sm:text-2xl md:text-3xl">
            {currentContent.subheading}
          </h2>
          <p className="w-full md:[85%] lg:w-[80%] xl:w-[75%] text-black font-medium">
            {currentContent.desc}
          </p>
          <div className="flex items-center gap-5 flex-wrap">
            <button className="bg-[#AA1F2E] text-white px-3 font-medium text-sm py-2 rounded-md">
              VIEW OUR PRODUCTS
            </button>
            <button className="bg-black text-white px-3 py-2 font-medium text-sm rounded-md">
              LEARN MORE ABOUT
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center relative overflow-hidden">
          {/* Static Image */}
          <Image
            src={"/HomePageBanner/Brazingsolutionsliderimage.jpg"}
            width={893}
            height={766}
            className="w-full opacity-0"
            alt="banner-img"
            quality={100}
          />
          {/* Animated Image */}
          <Image
            src={currentContent.image}
            width={893}
            height={766}
            className={`w-full absolute top-0 left-0 transition-transform duration-500 ease-out ${
              animate
                ? "translate-x-[100%] opacity-0"
                : "translate-x-0 opacity-100"
            }`}
            alt="banner-img"
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
