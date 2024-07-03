import React from "react";
import Shell from "./Shell";
import Image from "next/image";
import logo from "@/public/logo light.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#020043] py-[80px] md:py-[120px] lg:py-[120px]">
      <Shell>
        <Image src={logo} alt="logo" className="w-[125px] mb-[16px]" />

        <div className="text-[#FFFFF5] font-normal grid gap-[20px] grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex  flex-col gap-[20px]">
            <p>
              123 Main Street Anytown, USA <br />
              Postal Code: 12345
            </p>
            <p>
              Support: support@oyolloo.com <br />
              (Available : 10:00am to 07:00pm)
            </p>
          </div>

          <div className="flex flex-col gap-[10px]">
            <p>Home</p>
            <p>About Us</p>
            <p>Success page</p>
            <p>Terms and condition</p>
          </div>

          <div className="flex flex-col gap-[10px] ">
            <p>Services</p>
            <p>Scheduling</p>
            <p>Contact Us</p>
            <p>Patient Portal</p>
          </div>

          <div className="flex flex-col gap-[16px]">
            <div>
            <p className="mb-[10px]">Follow Us</p>
            <p className="flex gap-[12px] text-[24px]">
              <FaFacebook />
              <FaInstagram />
              <FaLinkedin />
              <FaYoutube />
            </p>
           
            </div>
            <p>@Docplus 2024</p>
          </div>

        </div>
      </Shell>
    </div>
  );
};

export default Footer;
