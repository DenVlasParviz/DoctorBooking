import React from "react";
import { assets } from "../assets/assets_frontend/assets.js";

export const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p className="text-gray-600 font-medium">
          ABOUT <span>US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium amet architecto atque beatae, dolore fugit illum
            incidunt ipsum maxime molestiae nam nisi non qui repellat sed veniam
            voluptatum. Accusantium, repellat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
            dolore et eum id iste. Accusamus autem deleniti eligendi, excepturi,
            illo incidunt ipsa laudantium nostrum quia sed sint sunt veritatis
            voluptates.
          </p>
          <b className="text-gray-800">Our vision</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            aperiam consectetur debitis dignissimos distinctio dolor doloremque
            ea eaque eveniet exercitationem inventore, ipsam maiores natus
            necessitatibus obcaecati odit, quis voluptatibus! Ut.
          </p>
        </div>
      </div>
      <div className="text-xl my-4">
        <p>Why Choose Us</p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-grey-300 cursor-pointer">
          <b>Efficiency:</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur dolores dolorum ducimus exercitationem explicabo itaque
            laudantium nihil nobis nostrum odio quaerat sed tempora, ullam ut
            voluptatibus. Ipsam laudantium neque optio.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-grey-300 cursor-pointer">
          <b>Convenience:</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            consectetur consequuntur corporis distinctio doloribus enim esse eum
            explicabo, illo illum nesciunt perspiciatis provident quae, qui
            quidem quos soluta, velit voluptate.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-grey-300 cursor-pointer">
          <b>Personalization:</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid
            at cupiditate distinctio dolores, earum illo laborum libero maxime
            pariatur, perferendis, quidem repellendus voluptatum! Aperiam
            impedit mollitia natus nihil optio?
          </p>
        </div>
      </div>
    </div>
  );
};
