import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav>
      <div className=" bg-[#AA1F2E] text-white flex justify-end gap-5 py-4 pr-11">
        <Link href={""}>ABOUT US</Link>
        <Link href={""}>CERTIFICATIONS</Link>
        <Link href={""}>CAREERS</Link>
        <Link href={""}>CONTACT US</Link>
      </div>
      <div className="flex justify-between items-center py-6 px-10">
        <Image width={200} height={10} alt='logo' className=" object-cover" src="/Logo/SafeInvotecLogo.png" />
        <div className=" text-end flex gap-5 items-center ">
          <Link href={""}>PRODUCTS</Link>
          <Link href={""}>INDUSTRIES</Link>
          <button className="bg-[#AA1F2E] py-2 px-3 rounded-lg text-white">
            REQUEST A QUOTE
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
