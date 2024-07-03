import React from "react";
import weAre from "@/public/who-we-are.png";
import Image from "next/image";
import Shell from "./Shell";
import { LuArrowUpRight } from "react-icons/lu";

const WhoWeAre = () => {
  return (
    <Shell>
      <div className=" flex flex-col md:flex-row  gap-[40px]">
        <div>
          <p className="px-[24px] py-[12px] border rounded-full w-fit mb-[12px] ">
            Who We Are
          </p>
          <div className="flex flex-col gap-[16px] w-full md:max-w-[470px]">
            <h1 className="text-[24px] md:text-[36px] font-semibold">
              We Help To Get <br /> Solutions
            </h1>
            <p className="text-[#4D4C7B] text-justify text-[14px] md:text-[16px]">
              We are proud to be a trusted healthcare provider in our community,
              and we look forward to serving you and your family with
              excellence, integrity, and compassion. Your health is our
              priority, and we are here for you every step of the way. We
              believe in treating each patient with dignity, respect, and
              empathy, ensuring that they receive the attention and care they
              deserve.
            </p>
          </div>
          <button className="text-[#000000] bg-[#FFC637] py-[12px] ps-[24px] pr-[16px] rounded-[12px] mt-[40px]  flex gap-[8px] items-center ">
            Learn More <LuArrowUpRight className="text-[20px] " />
          </button>
        </div>
        <div className="hidden md:block"></div>

        <div
        style={{
          backgroundImage: "url('who-we-are.png')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="flex flex-col justify-end items-start md:w-1/2 pt-[150px] md:pt-0 rounded-[32px]"
      >
          
          <div className="bg-[#343268] rounded-[32px] px-[30px] py-[45px] flex flex-col gap-[20px] w-full max-w-[395px] md:relative md:left-[-60px] md:bottom-[-30px]">
            <p className="text-white font-medium md:text-[22px] lg:text-[26px]">
              Our mission is simple
            </p>
            <p className="text-white text-[12px] md:text-[14px] lg:text-[16px]">
              To provide high-quality healthcare services that are accessible,
              personalized, and patient-centered.
            </p>
          </div>
        </div>
      </div>
    </Shell>
  );
};

export default WhoWeAre;
