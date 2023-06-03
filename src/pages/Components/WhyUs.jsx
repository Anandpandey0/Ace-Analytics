import React from "react";

const WhyUs = () => {
  return (
    <div className="bg-gray-200 ">
      <h1 className="text-4xl text-center p-4">
        <span className="text-orange-400 "> &quot; Why Choose </span>
        <span className="text-blue-800 font-bold">Ace Analytics &quot;</span>
      </h1>
      <div className="card flex gap-4 w-4/5 h-[30vh ] mx-auto border-2 border-solid   bg-white p-4 rounded-lg shadow-xl">
        <div className=" h-[30vh] w-3/5  p-4 text-lg ">
          <h1 className="text-3xl text-purple-800 mb-4 font-semibold">
            Importance of Political consulting
          </h1>
          We are amongst the few Political Consultancy firms to have worked
          across the length and breadth of the country. We are the only
          political consultancy to provide community-wise voting behavior at the
          booth level and Candidate-Ranking Matrix using Data Analytics and ML.
          We are the only company to provide a tech solution to the parties
          where they can communicate effectively with the voters, conduct live
          polls and can get real time feedback at village level.
        </div>
        <div className=" h-[30vh] w-2/5 border-solid border-2 border-black text-center ">
          {" "}
          Space For Image
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
