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
    <>
      <Image
        src={"/whatsapp.png"}
        height={36}
        width={36}
        alt="whatsapp icon"
        className="text-[#7BE57D] cursor-pointer fixed z-[51] bottom-16 left-5 sm:left-10"
        onClick={openWhatsAppChat}
      />
      {isVisible && (
        <div
          className="h-9 w-9 flex fixed z-[51] bottom-16 right-5 sm:right-10  items-center justify-center cursor-pointer bg-[#AA1F2E]"
          onClick={handleScrollToTop}
        >
          <IoIosArrowUp className="text-white text-3xl" />
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
