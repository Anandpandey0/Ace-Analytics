import Image from "next/image";
import React from "react";
import WorkSampleTemplate from "./WorkSampleTemplate";
import Section from "./Section";
import Aside from "./Aside";

const WorkExperience = () => {
  const arr = [
    "Telangana | BRS | 119 AC",
    "Rajasthan | INC | 100 AC",
    "WB | AITC | 44 AC",
    "Orissa | BJP | 7AC",
    "UP | BJP | 8 AC",
    "Goa | INC | 5 AC ",
    "Uk | INC | 5 AC",
    "Punjab | Akali | 1 AC]",
  ];
  return (
    <>
      <div className="py-6 ">
        <h1 className="font-bold text-3xl text-center underline">
          Work Experience{" "}
        </h1>
        <h3 className="font-semibold text-lg text-center py-4">
          We bring years of experience in political consulting, policy analysis,
          and strategic advising.
        </h3>
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        <section className="lg:w-1/2 w-full  p-4 h-[70vh] bg-blue-800 text-white border-2 border-solid  ">
          <ul className="list-disc h-full text-lg p-4 ">
            {arr.map((item) => (
              <li key={item.id} className="my-8 ">
                {item}
              </li>
            ))}
          </ul>
        </section>
        <aside className="lg:w-1/2 w-full relative  h-[70vh] border-solid border-2">
          <Image
            src="https://raw.githubusercontent.com/Anandpandey0/portfolio-images/main/india-map.jpg"
            alt="Alt"
            fill
            className="object-fill lg:object-fill"
          />
        </aside>
      </div>
    </>
  );
};

export default WorkExperience;
