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

  const openWhatsAppChat = () => {
    // const phoneNumber = "";
    // const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };

  return (
    <div className=" flex justify-between fixed bottom-16 w-full items-center px-5 sm:px-10">
      <Image
        src={"/whatsapp.png"}
        height={45}
        width={45}
        alt="whatsapp icon"
        className="text-[#7BE57D] cursor-pointer"
        onClick={openWhatsAppChat}
      />
      {isVisible && (
        <div
          className="h-9 w-9 flex items-center z-50 justify-center cursor-pointer bg-[#AA1F2E]"
          onClick={handleScrollToTop}
        >
          <IoIosArrowUp className="text-white text-3xl" />
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
