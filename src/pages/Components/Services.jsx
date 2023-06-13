import React from "react";
import { HiOutlineTrophy } from "react-icons/hi2";
import { CiGlobe } from "react-icons/ci";
import { FiSettings } from "react-icons/fi";
const Services = () => {
  return (
    <div className="flex flex-col lg:flex-row z-2  gap-4 lg:h-[45vh] mt-[-15rem] lg:mt-[-5rem] w-5/6 mx-auto ">
      <div className="lg:mt-8 lg:w-1/3  flex flex-col items-center    p-4 py-8 gap-4 bg-white text-black hover:bg-blue-800 hover:text-white px-8 ">
        <HiOutlineTrophy className="text-6xl lg:mt-8" />
        <h1 className="font-bold text-xl">Brand Building </h1>
        <p className="text-center lg:text-left">
          Our team of experts will work with you to craft a compelling brand
          story.
        </p>
      </div>
      <div className=" lg:w-1/3 lg:mt-8 flex flex-col items-center  p-4 py-8 gap-4 bg-white text-black hover:bg-blue-800 hover:text-white px-8 ">
        <CiGlobe className="text-6xl lg:mt-8" />
        <h1 className="font-bold text-xl">Brand Building </h1>
        <p className="text-center lg:text-left">
          Our team of experts will work with you to craft a compelling brand
          story.
        </p>
      </div>
      <div className="lg:w-1/3 lg:mt-8 flex flex-col items-center   p-4  py-8 gap-4 bg-white text-black hover:bg-blue-800 hover:text-white px-8  ">
        <FiSettings className="text-6xl lg:mt-8" />
        <h1 className="font-bold text-xl">Brand Building </h1>
        <p className="text-center lg:text-left">
          Our team of experts will work with you to craft a compelling brand
          story.
        </p>
      </div>
    </div>
  );
};

export default Services;
