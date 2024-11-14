import React from "react";

const Blogs = () => {
  return (
    <div className="md:px-16 px-10 py-5 w-full">
      <h1 className="text-center text-4xl font-extrabold text-[#AA1F2E]">
        Stay Engaged: Explore our New Blogs
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        <div>
          <img src="/Blogs/gasequipmenticon.jpg" className="h-48 object-contain" alt="blogs"/>
          <h2 className="font-bold mt-3 text-base text-[#212121]">
          Exploring Gas Equipment: Applications and Uses in Various Industries
          </h2>
          <p className=" mt-1 font-bold text-gray-600">
            Read More <i className="ri-arrow-right-s-line ml-2"></i>
          </p>
        </div>
        <div>
          <img src="/Blogs/gasequipmenticon.jpg" className="h-48 object-contain" alt="blogs"/>
          <h2 className="font-bold mt-3 text-base text-[#212121]">
          Exploring Gas Equipment: Applications and Uses in Various Industries
          </h2>
          <p className=" mt-1 font-bold text-gray-600">
            Read More <i className="ri-arrow-right-s-line ml-2"></i>
          </p>
        </div>
        <div>
          <img src="/Blogs/gasequipmenticon.jpg" className="h-48 object-contain" alt="blogs"/>
          <h2 className="font-bold mt-3 text-base text-[#212121]">
          Exploring Gas Equipment: Applications and Uses in Various Industries
          </h2>
          <p className=" mt-1 font-bold text-gray-600">
            Read More <i className="ri-arrow-right-s-line ml-2"></i>
          </p>
        </div>
        
      </div>
      <div className=" w-full flex justify-center">
        {" "}
        <p className="mt-5 text-[#AA1F2E] border-b border-b-[#AA1F2E] w-fit">
          MORE BLOG POSTS
        </p>
      </div>
    </div>
  );
};

export default Blogs;
