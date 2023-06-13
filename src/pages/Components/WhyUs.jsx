import Image from "next/image";
import React, { useState } from "react";
import {
  FaCircle,
  FaUserTie,
  FaPrayingHands,
  FaUserCheck,
} from "react-icons/fa";
import { GrMonitor } from "react-icons/gr";
import ExpertiseTab from "./WhyUs-Components/ExpertiseTab";
import TechnologyTab from "./WhyUs-Components/TechnologyTab";
import WorkEhics from "./WhyUs-Components/WorkEhics";
import PersonalisedSoution from "./WhyUs-Components/PersonalisedSoution";

const WhyUs = () => {
  const [selectedButton, setSelectedButton] = useState("Button 1");

  const handleClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <div className="w-5/6  mx-auto mt-8">
      <h4 className="flex items-center gap-4">
        <FaCircle className="text-5xl text-blue-800" />
        <span className="  font-semibold">Why Us?</span>
      </h4>
      <h1 className="text-3xl font-bold mt-4">Why You Should Hire Us?</h1>
      <div className="flex w-full flex-col lg:flex-row p-2    mt-10 gap-10">
        <button
          className="lg:w-1/4 bg-white text-center   flex gap-4 items-center   p-4  hover:bg-blue-800 hover:text-white "
          style={{
            backgroundColor: selectedButton === "Button 1" ? "blue" : "",
            color: selectedButton === "Button 1" ? "white" : "",
          }}
          onClick={() => handleClick("Button 1")}
        >
          <FaUserTie className="text-2xl text-center" />
          <h1 className="text-center">Expertise</h1>
        </button>
        <button
          className="lg:w-1/4 bg-white flex gap-4 items-center  p-4 hover:bg-blue-800 hover:text-white "
          onClick={() => handleClick("Button 2")}
          style={{
            backgroundColor: selectedButton === "Button 2" ? "blue" : "",
            color: selectedButton === "Button 2" ? "white" : "",
          }}
        >
          <GrMonitor className="text-2xl" />
          <h1>Technology</h1>
        </button>
        <button
          className="lg:w-1/4 bg-white flex  items-center gap-4   p-4  hover:bg-blue-800 hover:text-white"
          onClick={() => handleClick("Button 3")}
          style={{
            backgroundColor: selectedButton === "Button 3" ? "blue" : "",
            color: selectedButton === "Button 3" ? "white" : "",
          }}
        >
          <FaPrayingHands />
          <h1>Strong Work Ethics</h1>
        </button>
        <button
          className="lg:w-1/4 bg-white flex gap-4 items-center  p-4 hover:bg-blue-800 hover:text-white "
          onClick={() => handleClick("Button 4")}
          style={{
            backgroundColor: selectedButton === "Button 4" ? "blue" : "",
            color: selectedButton === "Button 4" ? "white" : "",
          }}
        >
          <FaUserCheck />
          <h1>Personalised Solution</h1>
        </button>
      </div>
      {selectedButton && (
        <div>
          {selectedButton === "Button 1" && <ExpertiseTab />}
          {selectedButton === "Button 2" && <TechnologyTab />}
          {selectedButton === "Button 3" && <WorkEhics />}
          {selectedButton === "Button 4" && <PersonalisedSoution />}
        </div>
      )}
    </div>
  );
};

export default WhyUs;
