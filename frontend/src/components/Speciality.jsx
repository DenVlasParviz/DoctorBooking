import React from "react";
import { specialityData } from "../assets/assets_frontend/assets.js";
import { Link } from "react-router-dom";
export const Speciality = () => {
  return (
    <div
      className="flex flex-col items-center gap-4 py-16 text-gray-800"
      id="speciality"
    >
      <h1 className="text-3xl font-medium">Find by Speciality</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Browse through doctors idk loool
      </p>
      <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-scroll scrollbar-hidden ">
        {specialityData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
            key={index}
            to={`/doctors/${item.speciality}`}
            key={index}
          >
            <img className="w-36 sm:sw-24 mb-2" src={item.image} alt="" />
            <p className="text-center py-1 ">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
