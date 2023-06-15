import React from "react";
import { BsFillTrophyFill } from "react-icons/bs";
import { AiFillSignal } from "react-icons/ai";
import HomepageForm from "./HomePageFormTemplate";
import Services from "./Services";
const HomePage = () => {
  return (
    <div className="w-full h-full  mt-[-2rem] lg:mt-24">
      <div className="lg:w-5/6 w-[95vw]  mx-auto  text-white  mt-32 lg:mt-0 h-[100vh]   ">
        <div className="flex lg:flex-row flex-col gap-6 ">
          <div className="lg:w-1/2 lg:h-1/2 lg:my-auto lg:mt-32  ">
            <h1 className="text-4xl font-bold">Poltek Solution</h1>
            <h3 className="text-lg font-semibold mt-8 mb-2">
              Political Advantage You Need. 72% Winning Rate
            </h3>
            <hr className=" lg:mt-10" />
            <div className="flex flex-col lg:flex-row mt-8 gap-6">
              <div className="flex gap-4 items-center">
                <BsFillTrophyFill className="text-5xl " />
                <div>
                  <h1 className="text-2xl font-semibold">72%</h1>
                  <h3>Winning Rate</h3>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <AiFillSignal className="text-5xl " />
                <div>
                  <h1 className="text-2xl font-semibold">100%</h1>
                  <h3>Winning Rate</h3>
                </div>
              </div>
            </div>
            <button className="mt-12 p-4 bg-blue-700 hover:bg-blue-950 px-12">
              Discover Me
            </button>
          </div>
          <div className="   lg:mt-12 ">
            <HomepageForm />
          </div>
        </div>
        {/* <Services /> */}
      </div>
    </div>
  );
};

export default HomePage;
