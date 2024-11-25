"use client";
import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";
import Image from "next/image";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <div className="my-auto z-50 fixed bottom-16 right-5 sm:right-10 flex gap-8 flex-col items-center">
        <Image
          src={"/whatsapp.png"}
          height={45}
          width={45}
          alt="whatsapp icon"
          className="text-[#7BE57D] cursor-pointer"
        />
        <div
          className="h-9 w-9 flex items-center justify-center cursor-pointer bg-[#AA1F2E]"
          onClick={handleScrollToTop}
        >
          <IoIosArrowUp className="text-white text-3xl" />
        </div>
      </div>
    )
  );
};

export default ScrollToTop;
