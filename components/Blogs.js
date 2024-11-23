import React from "react";
import Image from "next/image";
import Link from "next/link";

const Blogs = () => {
  return (
    <div>
      <div className="px-5 sm:px-10 max-w-[1440px] mx-auto py-[120px]">
        <h1 className="text-center text-4xl font-bold text-[#AA1F2E] mb-[60px]">
          Stay Engaged: Explore our New Blogs
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 ">
          <div className="">
            <Image
              src="https://safeinvotec.com/wp-content/uploads/2023/05/Content-Split-gasmanifold-500x357.jpg.webp"
              className="w-full h-[300px] object-cover"
              alt="blogs"
              width={500}
              height={357}
            />
            <h2 className="font-bold mt-5 text-base text-[#212121]">
              Exploring Gas Equipment: Applications and Uses in Various
              Industries
            </h2>
            <Link href={""} className=" mt-5 font-bold text-gray-600">
              Read More <i className="ri-arrow-right-s-line ml-2"></i>
            </Link>
          </div>
          <div className="">
            <Image
              src="https://safeinvotec.com/wp-content/uploads/2023/02/screen3-1.jpg.webp"
              className="w-full h-[300px]  object-cover"
              alt="blogs"
              width={500}
              height={357}
            />
            <h2 className="font-bold mt-5 text-base text-[#212121]">
              Exploring Gas Equipment: Applications and Uses in Various
              Industries
            </h2>
            <Link href={""} className=" mt-5 font-bold text-gray-600">
              Read More <i className="ri-arrow-right-s-line ml-2"></i>
            </Link>
          </div>
          <div className="">
            <Image
              src="https://safeinvotec.com/wp-content/uploads/2023/05/Welcome-to-safe-invotech.webp"
              className="w-full h-[300px] object-cover"
              alt="blogs"
              width={500}
              height={357}
            />
            <h2 className="font-bold mt-5 text-base text-[#212121]">
              Exploring Gas Equipment: Applications and Uses in Various
              Industries
            </h2>
            <Link href={""} className=" mt-5 font-bold text-gray-600">
              Read More <i className="ri-arrow-right-s-line ml-2"></i>
            </Link>
          </div>
        </div>
        <div className=" w-full flex justify-center">
          <Link
            href={""}
            className="mt-10 text-base font-normal text-[#AA1F2E] border-b border-b-[#AA1F2E] w-fit"
          >
            MORE BLOG POSTS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
