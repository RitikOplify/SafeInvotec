import Link from "next/link";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";

const data = [
  {
    category: "15% Silver",
    standard: "AWS:BCuP-5\nIndustry: HVAC&R Brazing",
    application: "Copper to Copper or Brass Technical Sheet",
    details: "View",
  },
  {
    category: "2% Silver",
    standard: "AWS: BCuP-6\nIndustry: HVAC&R Brazing",
    application: "Copper to Copper or Brass Technical Sheet",
    details: "View",
  },
  {
    category: "40/60",
    standard: "B32 Sn40a\nIndustry: Electrical Brazing",
    application: "Steel to Copper, Brass, or Steel Technical Sheet",
    details: "View",
  },
  {
    category: "5% Silver",
    standard: "BCuP-3\nIndustry: HVAC/R Brazing",
    application: "Copper to Copper or Brass Technical Sheet",
    details: "View",
  },
  {
    category: "50 NCW",
    standard: "AMS: 4788\nIndustry: HVAC/R, Medical, Oil & Gas Brazing",
    application:
      "Carbide to Steel or Stainless Copper to Copper or Brass Stainless Steel To Steel, Stainless, Copper, or Brass Steel to Copper, Brass, or Steel Technical Sheet",
    details: "View",
  },
  {
    category: "50/50",
    standard: "ASTM: B32 Sn50\nIndustry: Electrical Brazing",
    application: "Steel To Copper, Brass, or Steel Technical Sheet",
    details: "View",
  },
  {
    category: "6% Silver",
    standard: "Industry: HVAC&R Brazing",
    application: "Copper to Copper or Brass Technical Sheet",
    details: "View",
  },
  {
    category: "60/40",
    standard: "ASTM: B32 Sn60\nIndustry: Electrical Brazing",
    application: "Steel to Copper, Brass, or Steel Technical Sheet",
    details: "View",
  },
  {
    category: "95/5",
    standard: "ASTM: B32 Sb5\nIndustry: Other Brazing",
    application: "Steel to Copper, Brass, or Steel Technical Sheet",
    details: "View",
  },
  {
    category: "ALUXCOR - 78/22",
    standard: "Automotive,\nHVAC&R Brazing",
    application:
      "Aluminum to Aluminum Aluminum to Copper/ Brass Technical Sheet",
    details: "View",
  },
  {
    category: "ALUXCOR 4047",
    standard: "AMS: 4185\nIndustry: Automotive, HVAC/R Brazing",
    application:
      "Aluminum to Aluminum, Aluminum to Copper or Brass Technical Sheet",
    details: "View",
  },
  {
    category: "ALUXCOR 98/2",
    standard: "HVAC/R Brazing",
    application:
      "Aluminum to Aluminum, Aluminum to Copper or Brass Technical Sheet",
    details: "View",
  },
];

const Brazzing = () => {
  return (
    <div>
      <Image
        src="/Industries/industriesBanner/brazingsolutionssliders.jpg"
        className="w-full object-cover"
        alt="Brazing Solutions"
        layout="responsive"
        width={1440}
        height={600}
      />
      <div className="px-5 sm:px-10 pb-[100px] max-w-[1440px] mx-auto">
        <div className="flex pt-[100px] justify-between items-center space-x-4">
          <button className="h-10 px-4 bg-[#fff] border border-[#E1E1E1] flex items-center gap-5 text-black font-normal opacity-60 text-sm">
            Sort by
            <IoIosArrowDown className=" text-lg " />
          </button>
          <button className="h-10 px-6 bg-[#AA1F2E] text-white text-sm font-normal">
            Reset Filter
          </button>
        </div>

        <div className="overflow-x-auto pt-10">
          <table className="w-full min-w-[800px] text-left">
            <thead>
              <tr className="bg-[#AA1F2E] text-[#fff] text-base h-12 font-medium">
                <th className="text-base px-4 font-medium relative">
                  CATEGORY
                </th>
                <th className="text-base px-4 font-medium relative">
                  STANDARD
                  <span className="border-l-[2px] absolute left-0 top-1/2 transform -translate-y-1/2 h-1/2 border-solid border-[#fff]"></span>
                </th>
                <th className="text-base px-4 font-medium relative">
                  APPLICATION
                  <span className="border-l-[2px] absolute left-0 top-1/2 h-1/2 transform -translate-y-1/2 border-solid border-[#fff]"></span>
                </th>
                <th className="text-base px-4 font-medium relative">
                  DETAILS
                  <span className="border-l-[2px] absolute left-0 top-1/2 transform -translate-y-1/2 h-1/2 border-solid border-[#fff]"></span>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-[#F3F3F3]" : "bg-white"
                  } border-b`}
                >
                  <td className="p-4 text-gray-700 text-base">
                    {item.category}
                  </td>
                  <td className="p-4 text-gray-700 text-base whitespace-pre-wrap">
                    {item.standard}
                  </td>
                  <td className="p-4 text-gray-700 text-base">
                    {item.application}
                  </td>

                  <td className="p-4 text-[#AA1F2E] text-base font-medium underline cursor-pointer">
                    <Link href={"/brazzing/wjcygw"}>{item.details}</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Brazzing;
