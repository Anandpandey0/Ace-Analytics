import Image from "next/image";
import React from "react";

const TechnologyTab = () => {
  return (
    <div className="   flex-col lg:flex-row bg-white mt-8 h-fit rounded-xl flex p-4">
      <div className="lg:w-1/2">
        <h1 className="underline text-2xl font-semibold">
          Technology & Innovation
        </h1>
        <div className="p-4 mt-8">
          <ol className="list-decimal text-gray-400 text-md p-2 ">
            <li>
              Poltek Solutions is committed to using the latest technology to
              deliver cutting-edge solutions.
            </li>
            <li>
              The team employs advanced data analytics tools, social media
              monitoring platforms, and digital advertising technologies.
            </li>
            <li>
              Poltek Solutions helps clients target the right audience and
              communicate their message effectively.
            </li>
            <li>
              The team stays up-to-date with the latest technological
              advancements in the political consulting industry.
            </li>
            <li>
              Poltek Solutions provides clients with innovative and effective
              solutions using the latest technology.
            </li>
          </ol>
        </div>
        <button className="bg-blue-600 p-3 px-6 rounded-lg text-white">
          Discover Me{" "}
        </button>
      </div>
      <div className=" lg:w-1/2 relative w-full h-[50vh]  lg:h-inherit">
        <Image
          alt=""
          src="https://raw.githubusercontent.com/Anandpandey0/portfolio-images/main/Technology.png"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default TechnologyTab;
