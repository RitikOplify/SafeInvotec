"use client";
import React, { useState } from "react";

export default function Exhibitions() {
  const [slides] = useState([
   "Blogs/GasEquipment.jpg",
   "Blogs/GasEquipment.jpg",
   "Blogs/GasEquipment.jpg",
   "Blogs/GasEquipment.jpg",

  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < slides.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      <div className="py-5 px-2 w-full">
        <h1 className="text-center text-4xl font-extrabold text-[#AA1F2E] mb-10">
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
          <div className="flex justify-between w-full">
            {slides
              .slice(currentIndex, currentIndex + 3)
              .map((slideContent, index) => (
                <img
                  key={index}
                  className="object-cover w-[33%] h-48"
                  src={slideContent}
                  alt="Exhibition slide"
                />
              ))}
          </div>
          <button
            onClick={handleNext}
            disabled={currentIndex === slides.length - 3}
            className="disabled:opacity-50"
          >
            <i className="ri-arrow-right-wide-line text-4xl"></i>
          </button>
        </div>
      </div>
    </>
  );
}
