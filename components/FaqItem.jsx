"use client";
import { useState, useRef } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const FaqItem = ({ item }) => {
  const { question, answer } = item;
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="">
      <button
        onClick={toggleAccordion}
        className={`w-full  py-4 px-6 focus:outline-none bg-[#FFFFF5] hover:bg-[#ffffe0] text-left text-[20px] text-[#020043] font-medium flex justify-between items-center ${
            isOpen ? "border-b" : "border-b-0"
          }`}
      >
        <p>{question}</p> {isOpen?<FaAngleUp />:<FaAngleDown />}
      </button>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-[700ms]  ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
        style={{ transitionProperty: "max-height" }}
      >
        <p className="px-6 py-4 bg-white mt-[6px] text-[#343268a6] text-[14px]">{answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;
