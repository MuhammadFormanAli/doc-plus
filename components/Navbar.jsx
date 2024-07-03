import React from "react";
import logo from "@/public/logo dark.png";
import Image from "next/image";
import Shell from "./Shell";
import { LuArrowUpRight } from "react-icons/lu";

const Navbar = () => {
  return (
    <Shell>
      <div className="flex justify-between items-center text-[#020043] font-medium pb-[40px] ">
        <Image src={logo} alt="logo" className="w-[70px] md:w-[125px]" />
        <ul className="flex gap-[14px] md:gap-[24px]">
          <li>Home</li>
          <li>Services</li>
          <li>Blog</li>
          <li>About Us</li>
        </ul>
       
        <div className=" hidden border border-[#343268]  bg-[#ffffff00] py-[8px] w-fit md:py-[12px] md:px-[16px] px-[16px] rounded-[12px]  md:flex gap-[8px] items-center  ">
          Appointment
          <LuArrowUpRight className="text-[20px] " />
        </div>
      </div>
    </Shell>
  );
};

export default Navbar;
