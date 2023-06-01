import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-200">
      <div className="w-full lg:w-1/2 mx-auto p-4 flex flex-col gap-6 ">
        <h1 className="text-3xl font-semibold underline	">About Us</h1>
        <h3 className="text-xl font-semibold">
          Work with Leaders, Deliver Excellence to Voters
        </h3>
        <p>
          We are a team of young professionals, led by IIT graduates, having
          vast experience of political consultation and execution of electoral
          campaigns.
        </p>
        <p>
          Our founders have held leadership positions at most of the renowned
          political consultancy firms like I-PAC, Mindshare and ABM
        </p>
        <p>
          Our team members have played important roles in the designing and
          execution of some of the biggest political campaigns, like West Bengal
          2021, Goa 2022, Punjab 2022 and Uttar Pradesh 2022 .
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
