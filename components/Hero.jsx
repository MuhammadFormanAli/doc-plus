import React from "react";
import heroImage from "@/public/hero-image.png";
import userGroup from "@/public/user-group.png";
import pi from "@/public/pi.svg";
import certificate from "@/public/certificate.svg";
import coin from "@/public/coin.svg";
import video from "@/public/video-icon.svg";
import Shell from "@/components/Shell";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const Hero = () => {
  return (
    <div
    style={{
      backgroundImage: "url('hero-bg.svg')",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
    className="   backdrop-blur-3xl mb-[80px] md:mb-[120px] lg:mb-[160px]  "
  >
      <div className="h-full w-full bg-[#ffffff89] ">
      
      <Shell>
        <div className="flex flex-col gap-[50px]">
          {/* hero section first part */}
          <section className="relative">
            <Image src={heroImage} alt="hero image" />
            <div className="h-full w-full bg-gradient-to-b from-[#00c19e40] to-[#020043] absolute top-0 left-0 rounded-[40px] opacity-45"></div>
          </section>
          {/* hero section second part */}
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 md:grid-rows-8 md:items-end gap-2 md:gap-0 md:gap-x-2 items-center">
            {/* heading section */}
            <div className="  md:col-start-2 md:col-span-4 md:row-start-1 md:col-end-5 md:row-span-3  ">
              <p className="font-semibold text-[24px] md:text-[36px] lg:text-[48px] text-[#020043]  text-center">
                Comprehensive Care <br /> for Every Patient
              </p>
            </div>

            {/* Card one */}
            <div className="bg-[#FBFBFB] rounded-[24px] border border-[#02004352] p-[20px] w-ful  flex flex-row justify-between md:max-h-[312px]  gap-[16px] md:flex-col md:max-w-[215px] md:col-start-1 md:row-span-8 md:row-start-1">
              <div className="flex flex-col gap-[12px]">
                <p className="font-semibold text-[24px] md:text-[30px] ">90%</p>
                <p className="text-[14px] ">
                  Patient satisfaction rate, reflecting our commitment.
                </p>
              </div>
              <div className="w-full flex justify-end items-center md:justify-center">
                <Image src={pi} alt="pi image " />
              </div>
            </div>

            {/* card two */}
            <div className="bg-[#FBFBFB] rounded-[24px] border border-[#02004352] p-[20px] w-full flex md:flex-col  md:max-w-[215px] md:col-start-2 md:row-span-8 md:row-start-4">
              <div className="w-full">
                <p className="font-semibold text-[24px] md:text-[30px] ">
                  500+
                </p>
                <p className="text-[14px] mt-[8px] max-w-[115px]">
                  Board-certified doctors
                </p>
              </div>
              <div className="w-full flex  justify-end">
                <Image src={certificate} alt="pi image " />
              </div>
            </div>
            {/* card three  */}
            <div className="bg-[#FBFBFB] rounded-[24px] border border-[#02004352] flex md:flex-col h-full p-[20px] w-full md:max-w-[215px] md:col-start-3 md:row-span-8 md:row-start-5">
              <div className="w-full">
                <p className="font-semibold text-[24px] md:text-[30px] flex gap-[8px] items-center ">
                  4.8 <FaStar className="text-[#FFE03D]" />{" "}
                </p>
                <p className="text-[14px] mt-[4px] mb-[20px]">
                  Over 20,000 Patient
                </p>
              </div>
              <div className="w-full flex  justify-end">
                <Image src={userGroup} alt="pi image " />
              </div>
            </div>
            {/* card four */}
            <div className="bg-[#FBFBFB] rounded-[24px] border border-[#02004352] flex justify-between md:flex-col h-full p-[20px] w-full md:max-w-[215px] md:col-start-4 md:row-span-8 md:row-start-4">
              <div className="w-full">
                <p className="font-semibold text-[24px] md:text-[30px] ">
                  $5000
                </p>
                <p className="text-[14px] mt-[8px] max-w-[115px]">
                  Money spend for poor patient
                </p>
              </div>
              <div className="w-full flex  justify-end">
                <Image src={coin} alt="pi image " />
              </div>
            </div>
            {/* Card five */}
            <div className="bg-[#FBFBFB] rounded-[24px] border border-[#02004352] p-[20px] h-full flex md:flex-col  md:max-h-[312px] w-full md:max-w-[215px] md:col-start-5 md:row-span-8 md:row-start-1">
              <div className="w-full">
                <p className="font-semibold text-[24px] md:text-[30px] ">50+</p>
                <p className="text-[14px] mt-[8px] mb-[22px]">
                  Free lesions video for patient
                </p>
              </div>
              <div className="w-full flex justify-end items-center md:justify-center">
                <Image src={video} alt="pi image " />
              </div>
            </div>
          </section>
        </div>
      </Shell>
      </div>
    </div>
  );
};

export default Hero;
