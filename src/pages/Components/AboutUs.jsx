import Image from "next/image";
import React from "react";
import { FaCircle } from "react-icons/fa";

const AboutUs = () => {
  return (
    <>
      <div className="w-5/6 mx-auto flex flex-col-reverse lg:flex-row gap-8 mt-24">
        <div className=" lg:w-1/2 h-[60vh] relative">
          <Image
            alt="india-map"
            src={
              "https://raw.githubusercontent.com/Anandpandey0/portfolio-images/main/clone-map.jpg"
            }
            fill
            className="object-fill lg:object-fill"
          />
        </div>
        <div className="lg:w-1/2 p-4">
          <h1 className="flex items-center gap-4">
            <FaCircle className="text-5xl text-blue-800" />
            <span className=" text-lg font-semibold">ABOUT THE COMPANY</span>
          </h1>
          <h1 className="text-3xl font-extrabold mt-4 ">YACEANALYTICS</h1>
          <div className="mt-4 ">
            We are a team of young professionals, led by IIT graduates, having
            vast experience of political consultation and execution of electoral
            campaigns. Our founders have held leadership positions at most of
            the renowned political consultancy firms like I-PAC, Mindshare and
            ABM Our team members have played important roles in the designing
            and execution of some of the biggest political campaigns, like West
            Bengal 2021, Goa 2022, Punjab 2022 and Uttar Pradesh 2022
          </div>
          <button className="bg-blue-700 hover:bg-blue-800 text-white p-2 mt-4 px-4">
            Discover More
          </button>
        </div>
      </div>
      <div className="lg:hidden bg-blue-800 text-white font-bold text-xl mt-4 w-5/6 mx-auto p-4">
        {" "}
        4 Years Of Experience
      </div>
    </>
  );
};

export default AboutUs;
