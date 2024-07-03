import React from "react";
import FaqItem from "./FaqItem";

const FAQ = () => {
  const faq = [
    {
      id: 1,
      question: " What are your office hours?",
      answer:
        "Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.",
    },
    {
      id: 2,
      question: "How can I schedule an appointment?",
      answer:
        "Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.",
    },
    {
      id: 3,
      question: "Do you accept insurance?",
      answer:
        "Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.",
    },
    {
      id: 4,
      question: "What should I bring to my appointment?",
      answer:
        "Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.",
    },
    {
      id: 5,
      question: "Do you offer telemedicine appointments?",
      answer:
        "Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.",
    },
  ];

  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[16px]">
        <p className="px-[24px] py-[12px] border rounded-full w-fit ">FAQ</p>
        <h1 className="text-[24px] md:text-[36px] font-semibold">
          Frequently Asked Question
        </h1>
      </div>

      <div className=" flex flex-col gap-[14px]">
        {faq.map((item) => (
          <FaqItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
