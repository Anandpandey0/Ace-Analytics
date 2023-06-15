import Image from "next/image";
import React from "react";

const WorkEhics = () => {
  return (
    <div className="border-2 border-solid border-green-500 h-fit   flex-col lg:flex-row bg-white mt-8 rounded-xl flex p-4">
      <div className="lg:w-1/2">
        <h1 className="underline text-2xl font-semibold">Work Ethics</h1>
        <div className="p-4 mt-8">
          <ol className="list-decimal text-gray-400 text-md p-2 ">
            <li>
              Poltek Solutions believes in hard work and delivering the best
              results for clients.
            </li>
            <li>
              The team understands the importance of timely delivery and strives
              to complete projects within given deadlines.
            </li>
            <li>
              Poltek Solutions works closely with clients to understand their
              needs and develop customized solutions that meet unique
              requirements.
            </li>
            <li>
              The team maintains strict confidentiality and ensures that all
              shared information is kept secure.
            </li>
          </ol>
        </div>
        <button className="bg-blue-600 p-3 px-6 rounded-lg text-white">
          Discover Me{" "}
        </button>
      </div>
      <div className="border-2 border-solid lg:w-1/2 relative h-[50vh] h-inherit">
        <Image
          alt=""
          src="https://raw.githubusercontent.com/Anandpandey0/portfolio-images/main/work-ethic.jpg"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default WorkEhics;
