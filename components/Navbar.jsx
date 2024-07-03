import React from 'react';
import logo from '@/public/logo dark.png'
import Image from 'next/image';
import Shell from './Shell';


const Navbar = () => {
    return (
           <Shell>
            <div className='flex justify-between items-center text-[#020043] font-medium pb-[40px] '>
           <Image src={logo} alt="logo" className='w-[70px] md:w-[125px]' />
            <ul className='flex gap-[14px] md:gap-[24px]'>
                <li>Home</li>
                <li>Services</li>
                <li>Blog</li>
                <li>About Us</li>
            </ul>
            <p className='border border-[#343268] rounded-[12px] px-[28px] py-[14px] hidden md:block'>Appointment</p>

           </div>
           </Shell>
        
    );
};

export default Navbar;