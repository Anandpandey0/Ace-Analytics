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
          <h1 className="text-3xl font-extrabold mt-4 ">POLTEK</h1>
          <div className="mt-4 ">
            We are a team of highly skilled young professionals, led by
            accomplished IIT graduates with extensive experience in political
            consultation and the execution of successful electoral campaigns.
            Our founders have held leadership positions at several renowned
            political consultancy firms, and our team members have played
            critical roles in designing and executing some of the most
            significant political campaigns in the country.
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
