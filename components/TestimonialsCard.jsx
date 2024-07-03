import React from 'react';
import { FaStar } from 'react-icons/fa';

const TestimonialsCard = ({testimonial}) => {
    const {title, text, rating,name,position,image} = testimonial

    return (
        <div className="bg-[#fffff5] rounded-[16px] p-[20px] flex flex-col justify-between gap-[16px] ">
          <div className="flex flex-col gap-[12px]">
            <p className="text-[#020043] text-[19px] font-semibold">
            {title}
            </p>
            <p className="text-[#4D4C7B] text-[12px] ">
             {text}
            </p>
          </div>

          <div className="flex  items-center gap-[12px]">
            <div className="h-[44px] w-[44px] rounded-full">
              <img className="h-[44px] w-[44px] rounded-full" src={image} alt="user image" />
            </div>
            <div className="flex flex-col">
                <p className="text-[#4D4C7B] text-[12px]"><span className="text-[#020043] text-[12px] font-semibold">{name}</span>, {position}</p>
                <p className="flex gap-[6px] text-[#FFE03D]"> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
            </div>
          </div>
        </div>
    );
};

export default TestimonialsCard;