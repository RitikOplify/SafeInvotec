import React from "react";
import { LiaDownloadSolid } from "react-icons/lia";
import Image from 'next/image';

const Certifications = () => {
  const data = [
    {
      heading: "SAFRAN",
      image:
        "https://www.aerospacewalesforum.com/wp-content/uploads/thumbnail_LOGO_SAFRAN_rvb.png",
    },
    {
      heading: "ISO CERTIFIED",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUXKBYrKKqISK5MueGn3U34VWp9zwSDkfFFQ&s",
    },
    {
      heading: "NADCAP",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGkorZn2PRl6p3ZUzEsFU1UUsqU1doizJiTA&s",
    },
    {
      heading: "PRATT & WHITNEY",
      image:
        "https://img.aviationpros.com/files/base/cygnus/cavc/image/2020/11/Capture.5faaf4f197134.png?auto=format%2Ccompress&w=640&width=640",
    },

    {
      heading: "GE AEROSPACE",
      image:
        "https://mms.businesswire.com/media/20240719740240/en/2190719/5/ge_aerospace_logo.jpg",
    },

    {
      heading: "COLLINS AEROSPACE",
      image:
        "https://www.logo.wine/a/logo/Collins_Aerospace/Collins_Aerospace-Logo.wine.svg",
    },
    {
      heading: "ROLLS ROYCE",
      image:
        "https://logos-world.net/wp-content/uploads/2021/04/Rolls-Royce-Emblem.png",
    },
  ];

  return (
   <div>
    <div className=" max-w-[1440px] mx-auto px-5 sm:px-10 py-[60px]">
      <h1 className="text-[#AA1F2E] text-[42px] pb-10 uppercase font-normal">
        Certifications
      </h1>
      <p className="text-[#000] opacity-80 text-base mb-[60px]">
        Safe Invotec LLP is committed to providing customers with the best
        available material solutions with 100% customer satisfaction rating. To
        ensure we meet customer standards and expectations, we operate a quality
        management system that complies with key certifications related to the
        industries we serve.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-y-[60px] gap-x-[30px]">
        {data.map((item, i) => (
          <div key={i}>
            <div className="w-full h-56 bg-gray-200 py-10 flex items-center justify-center">
              <Image
                src={item.image}
                alt={item.heading}
                height={200}
                width={200}
                objectFit="contain"
                className="mix-blend-multiply"
              />
            </div>
            <div className="flex justify-between items-center mt-6">
              <h1 className="text-[#000] opacity-80 text-2xl uppercase font-medium">
                {item.heading}
              </h1>
              <button className="bg-[#F0F1F3] flex items-center gap-1 text-xs py-2 px-3 font-normal">
                DOWNLOAD
                <LiaDownloadSolid className="text-lg text-[#AA1F2E]" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
   </div>
  );
};

export default Certifications;
