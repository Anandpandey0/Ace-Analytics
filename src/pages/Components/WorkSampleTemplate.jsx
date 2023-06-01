import Image from "next/image";
import React from "react";

const WorkSampleTemplate = ({ imageUrl, name, designation }) => {
  return (
    <div className=" p-4 rounded-md w-full  h-[30vh] mx-auto flex flex-col gap-2 bg-blue-800">
      <div className="relative w-full  h-[30vh]  ">
        <Image
          src={imageUrl}
          alt="Alt"
          fill
          className="object-contain lg:object-contain"
        />
      </div>
      <p className="text-center font-semibold text-xl ">{name}</p>
      <p className="text-center  font-semibold">{designation}</p>
    </div>
  );
};

export default WorkSampleTemplate;
