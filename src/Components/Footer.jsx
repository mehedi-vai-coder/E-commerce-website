import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                {/* Left side */}
                <div>
                    <img className='mb-5 w-32' src={assets.logo} alt="" />
                    <p className='w-full md:w-2/3 text-gray-600 '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ea facilis architecto molestias aut explicabo vero quidem. Dolores, in accusamus?
                    </p>
                </div>
                {/* Middle side  */}
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>

                    </ul>
                </div>
                {/* Right side */}
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+8801310715382</li>
                        <li>md.mehedihasan27@gamail.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr className='text-gray-200' />
                <p className='py-5 text-sm text-center'>Copyright 2025@ forever.com - All Right Reserved.</p>
            </div>
        </div>


    );
};

export default Footer;