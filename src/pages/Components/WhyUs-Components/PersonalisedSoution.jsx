import Image from "next/image";
import React from "react";

const PersonalisedSoution = () => {
  return (
    <div className=" bg-white mt-8 rounded-xl h-fit  flex flex-col lg:flex-row p-4">
      <div className="lg:w-1/2">
        <h1 className="underline text-2xl font-semibold">
          Personalised Solution
        </h1>
        <div className="p-4 mt-8">
          <ol className="list-decimal text-gray-400 text-md p-2 ">
            <li>
              Poltek Solutions understands that every political campaign is
              unique.
            </li>
            <li>
              The team provides personalized solutions tailored to meet specific
              needs.
            </li>
            <li>
              Poltek Solutions works closely with clients to understand campaign
              objectives, target audience, and budget constraints.
            </li>
            <li>The team develops a strategy that aligns with client goals.</li>
            <li>
              Poltek Solutions&apos; personalized approach ensures the best
              possible results from political campaigns.
            </li>
          </ol>
        </div>
        <button className="bg-blue-600 p-3 px-6 rounded-lg text-white">
          Discover Me{" "}
        </button>
      </div>
      <div className="border-2 border-solid lg:w-1/2 relative h-[50vh]">
        <Image
          alt=""
          src="https://raw.githubusercontent.com/Anandpandey0/portfolio-images/main/personalised.jpg"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default PersonalisedSoution;
