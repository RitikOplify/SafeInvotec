import Link from "next/link";
import React from "react";
import Image from "next/image";
const GasEquipmentListing = () => {
  return (
    <div>
      <Image
        src="/GasEquipment/Industrial Gas Equipment sliders.jpg"
        className=" w-full object-cover"
        alt="Industrial Gas Equipment"
        layout="responsive"
        width={1440}
        height={600}
      />
      <div className=" max-w-[1440px] mx-auto">
        <div className=" px-5 sm:px-10 py-[80px]">
          <h1 className=" text-[#AA1F2E] text-[42px] font-medium pb-[50px]">
            Industrial Gas Equipments
          </h1>
          <div>
            <div className="overflow-x-auto hide-scrollbar flex whitespace-nowrap">
              <div className="relative flex-1">
                <h1 className="text-[#000] px-5 whitespace-nowrap cursor-pointer hover:opacity-100 opacity-60 text-lg hover:border-b-4 hover:border-b-[#AA1F2E] hover:text-[#AA1F2E] transition-all duration-300 font-mediumn text-center">
                  Pressure Regulators
                </h1>
                <span className="absolute top-1/2 right-0 w-[2px] h-1/2 bg-gray-200 transform -translate-y-1/2"></span>
              </div>
              <div className="relative flex-1">
                <h1 className="text-[#000] px-5 whitespace-nowrap cursor-pointer hover:opacity-100 opacity-60 text-lg hover:border-b-4 hover:border-b-[#AA1F2E] hover:text-[#AA1F2E] transition-all duration-300 font-mediumn text-center">
                  Shielding Gas Savers
                </h1>
                <span className="absolute top-1/2 right-0 w-[2px] h-1/2 bg-gray-200 transform -translate-y-1/2"></span>
              </div>
              <div className="relative flex-1">
                <h1 className="text-[#000] px-5 whitespace-nowrap cursor-pointer hover:opacity-100 opacity-60 text-lg hover:border-b-4 hover:border-b-[#AA1F2E] hover:text-[#AA1F2E] transition-all duration-300 font-mediumn text-center">
                  Pipeline Regulators
                </h1>
                <span className="absolute top-1/2 right-0 w-[2px] h-1/2 bg-gray-200 transform -translate-y-1/2"></span>
              </div>
              <div className="relative flex-1">
                <h1 className="text-[#000] px-5 whitespace-nowrap cursor-pointer hover:opacity-100 opacity-60 text-lg hover:border-b-4 hover:border-b-[#AA1F2E] hover:text-[#AA1F2E] transition-all duration-300 font-mediumn text-center">
                  High Performance Regulators
                </h1>
              </div>
            </div>
          </div>

          <div className=" pt-[40px] gap-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href={"/gas-equipment/wueyjgdc"}
              className=" border rounded-2xl p-[12px]"
            >
              <div className=" border rounded-lg bg-[#FCFCFC]">
                <Image
                  src="/GasEquipment/601-25-AC right_11zon.png"
                  className=" scale-75"
                  alt="Model 601"
                  layout="responsive"
                  width={100}
                  height={100}
                />
              </div>
              <h6 className="text-[#AA1F2E] text-2xl font-medium mt-3">
                Model 601
              </h6>
              <p className="text-[#000] mt-1 opacity-60 text-sm font-normal">
                Compact Single Stage Cylinder Regulator
              </p>
            </Link>

            <Link
              href={"/gas-equipment/wueyjgdc"}
              className=" border rounded-2xl p-[12px]"
            >
              <div className=" border rounded-lg bg-[#FCFCFC]">
                <Image
                  src="/GasEquipment/601-25-AC right_11zon.png"
                  className=" scale-75"
                  alt="Model 601"
                  layout="responsive"
                  width={100}
                  height={100}
                />
              </div>
              <h6 className="text-[#AA1F2E] text-2xl font-medium mt-3">
                Model 801
              </h6>
              <p className="text-[#000] mt-1 opacity-60 text-sm font-normal">
                Single Single Stage Cylinder Regulator
              </p>
            </Link>

            <Link
              href={"/gas-equipment/wueyjgdc"}
              className=" border rounded-2xl p-[12px]"
            >
              <div className=" border rounded-lg bg-[#FCFCFC]">
                <Image
                  src="/GasEquipment/601-25-AC right_11zon.png"
                  className=" scale-75"
                  alt="Model 601"
                  layout="responsive"
                  width={100}
                  height={100}
                />
              </div>
              <h6 className="text-[#AA1F2E] text-2xl font-medium mt-3">
                Model 896
              </h6>
              <p className="text-[#000] mt-1 opacity-60 text-sm font-normal">
                Two Stage Regulator For Increased Delivery Pressure Control
              </p>
            </Link>

            <Link
              href={"/gas-equipment/wueyjgdc"}
              className=" border rounded-2xl p-[12px]"
            >
              <div className=" border rounded-lg bg-[#FCFCFC]">
                <Image
                  src="/GasEquipment/601-25-AC right_11zon.png"
                  className=" scale-75"
                  alt="Model 601"
                  layout="responsive"
                  width={100}
                  height={100}
                />
              </div>
              <h6 className="text-[#AA1F2E] text-2xl font-medium mt-3">
                Model 801
              </h6>
              <p className="text-[#000] mt-1 opacity-60 text-sm font-normal">
                Single Single Stage Cylinder Regulator
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GasEquipmentListing;
