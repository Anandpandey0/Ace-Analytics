import Image from "next/image";
import React from "react";
import WorkSampleTemplate from "./WorkSampleTemplate";
import Section from "./Section";
import Aside from "./Aside";

const WorkExperience = () => {
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:h-[60vh] h-fit ">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
          <section className="col-span-2  p-4 h-full bg-blue-800 text-white">
            <ul className="list-disc   h-full text-lg p-4">
              <li className="my-8 ">
                In Rajasthan, the team works in close association with the State
                President of one of the most important political parties in the
                state.
              </li>
              <li className="my-8 ">
                In Telangana, the team is involved in studying and generating
                political intelligence reports for all the 119 ACs. The team is
                working in both, on- field visits and primary research modules.
              </li>
              <li className="my-8 ">
                The Team has worked in WB-AE 2021, UP-AE 2022, Punjab-AE 2022
                and Goa-AE 2022 assembly elections with multiple Cabinet
                Ministers and senior leaders from different parties.
              </li>
            </ul>
          </section>
          <aside className="col-span-2 relative w-full h-[60vh] border-solid border-2">
            <Image
              src="https://raw.githubusercontent.com/Anandpandey0/portfolio-images/main/india-map.jpg"
              alt="Alt"
              fill
              className="object-fill lg:object-fill"
            />
          </aside>
        </div>
      </div>
    </>
  );
};

export default WorkExperience;
