import Image from "next/image";
import React from "react";

const ExpertiseTab = () => {
  return (
    <div className="border-2 border-solid border-green-500  bg-white mt-8 h-fit   flex-col lg:flex-row rounded-xl flex p-4">
      <div className="lg:w-1/2">
        <h1 className="underline text-2xl font-semibold">Our Expertise</h1>
        <p className="p-4 mt-8">
          <ol className="list-decimal text-gray-400 text-md p-2 ">
            <li>
              Poltek Solutions is a team of experienced political strategists.
            </li>
            <li>
              The team has expertise in political consulting, including
              political analysis, communication strategy, media consultation,
              and campaign management.
            </li>
            <li>
              Poltek Solutions has helped political candidates win elections at
              various levels.Poltek Solutions has helped political candidates
              win elections at various levels.
            </li>
            <li>
              The team&apos;s unmatched expertise can assist you in devising
              winning political strategies.
            </li>
            <li>
              Poltek Solutions aims to help you achieve your political goals
            </li>
          </ol>
        </p>
        <button className="bg-blue-600 p-3 px-6 rounded-lg text-white">
          Discover Me{" "}
        </button>
      </div>
      <div className="border-2 border-solid lg:w-1/2 relative h-[50vh]   mt-8">
        <Image
          alt=""
          src="https://raw.githubusercontent.com/Anandpandey0/portfolio-images/main/Expertise.jpg"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default ExpertiseTab;
