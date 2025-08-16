import React from "react";
import { assets } from "../assets/assets_frontend/assets.js";

export const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>CONTACT US</p>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p>Our office</p>
          <p>23423423</p>
          <p>345345345</p>
          <p>456456456</p>
          <p>45645645654</p>
            <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-200'>Explore Jobs</button>
        </div>
      </div>
    </div>
  );
};
