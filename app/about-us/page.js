import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      <Image
        src="/Contact-Us/Contact-Us.jpg"
        className="w-full object-cover"
        alt="Brazing Solutions"
        layout="responsive"
        width={1440}
        height={600}
      />
      <section>
        <div>
          <div className=" max-w-[1440px] bg-white text-gray-800 py-6 lg:py-12 px-5 sm:px-10 mx-auto">
            <h2 className="text-3xl font-bold text-[#AA1F2E] text-start mb-8">
              About Us
            </h2>
            <p className=" text-gray-600 mb-6 text-base">
              Safe Invotec India, a leading supplier of high-quality filler
              metals and related products for various industries. We specialize
              in providing top-of-the-line products for the aerospace,
              automotive, HVAC, and tools in industry.
            </p>
            <p className=" text-gray-600 mb-12 text-base">
              Our company has a strong focus on providing our customers with
              exceptional service and high-quality products. We understand the
              importance of using the right materials in your projects, and we
              take pride in our ability to provide you with the right products
              to meet your specific needs.
            </p>
            <div className="flex flex-wrap -mx-4 mb-12">
              <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                <div className="p-6 bg-gray-50  h-full">
                  <h3 className="text-xl font-semibold text-[#AA1F2E] mb-4">
                    Vision
                  </h3>
                  <p className="text-gray-600 text-base">
                    Lorem ipsum dolor sit amet, adkc consectetur adipiscing
                    elit. Cras amet mauris tortor. Quisque nec tincidunt neque,
                    a accumsan nulla. Donec non fermentum justo.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4">
                <div className="p-6 bg-gray-50  h-full">
                  <h3 className="text-xl font-semibold text-[#AA1F2E] mb-4">
                    Mission
                  </h3>
                  <p className="text-gray-600 text-base">
                    Lorem ipsum dolor sit amet, adkc consectetur adipiscing
                    elit. Cras amet mauris tortor. Quisque nec tincidunt neque,
                    a accumsan nulla. Donec non fermentum justo.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 py-12 w-full ">
            <div className="max-w-[1440px] text-gray-800 py-6 lg:py-12 px-5 sm:px-10 mx-auto">
              <h3 className="text-3xl font-normal text-[#AA1F2E] mb-8 ">
                Our Values
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="text-[#AA1F2E] mb-4">
                    <i className="fas fa-award text-4xl"></i>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Excellence
                  </h4>
                  <p className="text-gray-600 text-base">
                    We experiment, design, build, and transform with speed and
                    agility.
                  </p>
                </div>
                <div>
                  <div className="text-[#AA1F2E] mb-4">
                    <i className="fas fa-lightbulb text-4xl"></i>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Innovation
                  </h4>
                  <p className="text-gray-600 text-base">
                    We experiment, design, build, and transform with speed and
                    agility.
                  </p>
                </div>
                <div>
                  <div className="text-[#AA1F2E] mb-4">
                    <i className="fas fa-users text-4xl"></i>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Collaboration
                  </h4>
                  <p className="text-gray-600 text-base">
                    We share insights, learn together, and perform as a team.
                  </p>
                </div>
                <div>
                  <div className="text-[#AA1F2E] mb-4">
                    <i className="fas fa-check-circle text-4xl"></i>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Accountability
                  </h4>
                  <p className="text-gray-600 text-base">
                    We honor our commitments, expect excellence, and take pride
                    in our work.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="max-w-[1440px] text-[#AA1F2E] py-6 lg:py-12 px-5 sm:px-10 mx-auto">
              <h2 className="text-3xl font-normal mb-16">
                Company Highlights
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white ">
                  <h3 className="text-xl font-normal text-black mb-4">Industry Best</h3>
                  <p className=" text-base text-gray-700">
                    Safe Invotec India stocks and distributes from the
                    industry{"'"}s best. The goods are designed & manufactured in
                    the USA, Europe, the UK and Asia.
                  </p>
                </div>

                <div className="bg-white ">
                  <h3 className="text-xl font-normal text-black mb-4">B2B</h3>
                  <p className=" text-base text-gray-700">
                    Safe Invotec India is a strictly B2B company catering to
                    large and SME OEMs, Distributors, Contractors, Installation
                    and Service.
                  </p>
                </div>

                <div className="bg-white ">
                  <h3 className="text-xl font-normal text-black mb-4">Reputed</h3>
                  <p className=" text-base text-gray-700">
                    Safe Invotec India is trusted for its domain knowledge,
                    quality products and on-time deliveries.
                  </p>
                </div>

                <div className="bg-white ">
                  <h3 className="text-xl font-normal text-black mb-4">Global Network</h3>
                  <p className=" text-base text-gray-700">
                    Safe Invotec India is a one-stop shop for quality HVAC&R
                    components and global brands.
                  </p>
                </div>

                <div className="bg-white ">
                  <h3 className="text-xl font-normal text-black mb-4">
                    Value-added Offerings
                  </h3>
                  <p className=" text-base text-gray-700">
                    Safe Invotec India provides value-added sales by offering
                    {"'"}Documented cost Reduction{"'"}, Training and Application
                    support by trained engineers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
