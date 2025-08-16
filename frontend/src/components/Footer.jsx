import React from "react";
import { assets } from "../assets/assets_frontend/assets.js";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/*{Left }*/}
        <div className="">
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae
            dicta dolorem esse est impedit labore molestiae perferendis porro,
            quisquam, totam voluptate. Architecto delectus fugiat iusto labore,
            pariatur saepe sequi!
          </p>
        </div>

        {/*{Center }*/}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/*{Right }*/}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Phone number</li>
            <li>Email</li>
          </ul>
        </div>
      </div>
      <div>
        {/*{Copyright Text}*/}
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2025</p>
      </div>
    </div>
  );
};
export default Footer;
