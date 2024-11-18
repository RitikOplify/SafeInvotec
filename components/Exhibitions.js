"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Exhibitions() {
  const [slides] = useState([
    "https://safeinvotec.com/wp-content/uploads/2023/05/Welcome-to-safe-invotech.webp",
    "https://safeinvotec.com/wp-content/uploads/2023/05/Welcome-to-safe-invotech.webp",
    "https://safeinvotec.com/wp-content/uploads/2023/05/Welcome-to-safe-invotech.webp",
    "https://safeinvotec.com/wp-content/uploads/2023/05/Welcome-to-safe-invotech.webp",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const updateSlidesToShow = () => {
    if (window.innerWidth >= 1100) {
      setSlidesToShow(3);
    } else if (window.innerWidth >= 850) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(1);
    }
  };

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const handleNext = () => {
    if (currentIndex < slides.length - slidesToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div>
      <div className=" pb-[120px] max-w-[1440px] mx-auto px-5 sm:px-10 overflow-hidden">
        <h1 className="text-center text-4xl font-bold mb-[60px] text-[#AA1F2E]">
          Exhibitions
        </h1>
        <div className="flex gap-4 items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="disabled:opacity-50"
          >
            <i className="ri-arrow-left-wide-line text-4xl"></i>
          </button>
          <div className="flex justify-between gap-2">
            {slides
              .slice(currentIndex, currentIndex + slidesToShow)
              .map((slideContent, index) => (
                <Image
                  height={1000}
                  width={1000}
                  quality={100}
                  src={slideContent}
                  key={index}
                  alt="Exhibition slide"
                />
              ))}
          </div>
          <button
            onClick={handleNext}
            disabled={currentIndex === slides.length - slidesToShow}
            className="disabled:opacity-50"
          >
            <i className="ri-arrow-right-wide-line text-4xl"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
