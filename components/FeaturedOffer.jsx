import React from "react";
import Shell from "./Shell";
import Image from "next/image";
import logo from "@/public/logo light.png";
import { LuArrowUpRight } from "react-icons/lu";

const FeaturedOffer = () => {
  return (
    <div
      style={{
        backgroundImage: "url('hero-bg.svg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="   backdrop-blur-3xl  "
    >
      <div className="h-full w-full bg-[#ffffff78] py-[80px] md:py-[120px] lg:py-[160px] relative">
        <div className="md:w-[400px] md:h-[400px] h-full w-full bg-[#020043] blur-[250px] absolute top-0 left-[50%] translate-x-[-50%]"></div>
        <Shell>
          <div
            style={{
              backgroundImage: "url('Rectangle 32.png')",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="  w-full rounded-[32px] "
          >
            <div className="bg-gradient-to-br from-[#020043]  to-[#0200434d] w-full h-full rounded-[32px] p-[60px] flex flex-col gap-[12px]">
              <div className="flex items-center justify-end">
                <Image
                  src={logo}
                  alt="logo"
                  className="w-[70px] md:w-[125px]"
                />
              </div>
              <div className="flex flex-col gap-[24px]">
                <p className="text-[26px] md:text-[40px] font-semibold text-[#FFFFF5]">
                  Get Your <br /> First Appointment <br /> at 50% Off!
                </p>
                <div className="flex gap-[16px] flex-col sm:flex-row">
                  <button className="text-[#000000] bg-[#FFC637] py-[8px] md:py-[12px] px-[16px] w-fit rounded-[12px]  flex gap-[8px] items-center ">
                    Appointment
                    <LuArrowUpRight className="text-[20px] " />
                  </button>

                  <button className="text-[#FFFFF5] bg-[#ffffff00] py-[8px] w-fit md:py-[12px] md:px-[16px] px-[16px] rounded-[12px]  flex gap-[8px] items-center border  ">
                    Learn More
                    <LuArrowUpRight className="text-[20px] " />
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        </Shell>
      </div>
    </div>
  );
};

export default FeaturedOffer;
