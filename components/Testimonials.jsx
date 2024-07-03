import Image from "next/image";
import React from "react";

import { FaStar } from "react-icons/fa";
import TestimonialsCard from "./TestimonialsCard";
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      title: "Expertise and Compassion Combined",
      text: "I can not thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.",
      rating: 5,
      name: "Sarah D",
      position: "IT Professional",
      image:
        "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Life-Saving Care, Life-Changing Experience",
      text: "My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.",
      rating: 5,
      name: "Michael R,",
      position: "Business Executive",
      image:
        "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "A Partner in Health and Wellness",
      text: "As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From tale medicine consultations to routine check-ups, they've become my trusted partner in health and.",
      rating: 5,
      name: "John Doe",
      position: "Web Developer",
      image:
        "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[16px]">
        <p className="px-[24px] py-[12px] border rounded-full w-fit ">
          Testimonials
        </p>
        <h1 className="text-[24px] md:text-[36px] font-semibold">
          What they say about us
        </h1>
      </div>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
          {/* testimonials cards*/}
          {testimonials.map((item) => (
            <TestimonialsCard key={item?.id} testimonial={item} />
          ))}
        </div>
        <div className="flex items-center justify-center gap-[8px] mt-[24px]">
        <span className="w-[10px] h-[10px] bg-[#0200432c] rounded-full"></span>{" "}
        <span className="w-[10px] h-[10px] bg-[#FFC637] rounded-full"></span>
        <span className="w-[10px] h-[10px] bg-[#0200432c] rounded-full"></span>
      </div>
      </div>
    </div>
  );
};

export default Testimonials;
