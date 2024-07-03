
import React from "react";
import { LuArrowUpRight } from "react-icons/lu";

const Services = () => {
  return (
    <div className=" p-[20px] md:p-[30px] lg:p-[40px]  rounded-[32px] bg-[#fffff5] grid grid-cols-1 md:grid-cols-2 gap-[40px] ">
      <div>
        <p className="px-[24px] py-[12px] border rounded-full w-fit mb-[12px] ">
          Services
        </p>
        <div className="flex flex-col gap-[16px] w-full max-w-[470px]">
          <h1 className="text-[24px] md:text-[36px] font-semibold">
            Empowering Health, <br /> Enriching Lives
          </h1>
          <p className="text-[#4D4C7B]">
            We are committed to providing high-quality, compassionate care to
            every patient we serve. Whatever your healthcare needs may be, you
            can trust us to be your partner in health and wellness.
          </p>
        </div>
        <button className="text-[#000000] bg-[#FFC637] py-[12px] ps-[24px] pr-[16px] rounded-[12px] mt-[40px] flex gap-[8px] items-center ">
          Appointment
          <LuArrowUpRight className="text-[20px] " />
        </button>
      </div>

      {/* service one  */}
      <div
        style={{
          backgroundImage: "url('service-image-1.png')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="p-[20px] flex items-end rounded-[30px]  h-[300px] md:h-[400px]"
      >
        <div className="bg-[#020043a8] rounded-[20px] px-[20px] md:px-[30px] py-[30px] md:py-[45px] flex flex-col gap-[20px] w-full max-w-[321px] ">
          <p className="text-white font-semibold text-[20px]">
            Advanced Technology
          </p>
          <div className="flex gap-[8px] justify-between w-full items-end">
            <p className="text-white w-full text-[12px]">
              Our surgeons are trained in the latest robotic surgical
              techniques, which allow for greater precision
            </p>
            <div className="min-w-[48px] w-[48px] h-[48px] rounded-full bg-[#FFC637] flex items-center justify-center cursor-pointer">
              <LuArrowUpRight className="text-[30px] text-white " />
            </div>
          </div>
        </div>
      </div>

      {/* service Two  */}
      <div
        style={{
          backgroundImage: "url('service-image-2.png')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="p-[20px] flex items-end rounded-[30px]  h-[300px] md:h-[400px]"
      >
        <div className="bg-[#020043a8] rounded-[20px] px-[20px] md:px-[30px] py-[30px] md:py-[45px] flex flex-col gap-[20px] w-full max-w-[321px] ">
          <p className="text-white font-semibold text-[20px]">
            Online Doctor Meet
          </p>
          <div className="flex gap-[8px] justify-between w-full items-end">
            <p className="text-white w-full text-[12px]">
            Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision
            </p>
            <div className="min-w-[48px] w-[48px] h-[48px] rounded-full bg-[#FFC637] flex items-center justify-center cursor-pointer">
              <LuArrowUpRight className="text-[30px] text-white " />
            </div>
          </div>
        </div>
      </div>
      {/* service Three  */}
      <div
        style={{
          backgroundImage: "url('service-image-3.png')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="p-[20px] flex items-end rounded-[30px]  h-[300px] md:h-[400px]"
      >
        <div className="bg-[#020043a8] rounded-[20px] px-[20px] md:px-[30px] py-[30px] md:py-[45px] flex flex-col gap-[20px] w-full max-w-[321px] ">
          <p className="text-white font-semibold text-[20px]">
          Consultancy your health
          </p>
          <div className="flex gap-[8px] justify-between w-full items-end">
            <p className="text-white w-full text-[12px]">
              Our surgeons are trained in the latest robotic surgical
              techniques, which allow for greater precision
            </p>
            <div className="min-w-[48px] w-[48px] h-[48px] rounded-full bg-[#FFC637] flex items-center justify-center cursor-pointer">
              <LuArrowUpRight className="text-[30px] text-white " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
