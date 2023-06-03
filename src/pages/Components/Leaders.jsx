import React from "react";
import WorkSampleTemplate from "./WorkSampleTemplate";

const Leaders = () => {
  return (
    <main className="bg-blue-800 mt-10 p-4">
      <h1 className="text-center">
        <span className="text-yellow-500 text-3xl font-bold mr-6">
          Few Prominent Leaders
        </span>
        <span className="text-white text-3xl font-bold">
          We Have Worked With
        </span>
      </h1>
      <div className="flex lg:h-[60vh] lg:flex-row flex-col  text-white mt-8">
        <div className=" w-full lg:w-1/2 h-full mx-auto p-6  ">
          <div className="border-solid border-4 h-full lg:h-3/5 my-8 border-yellow-500">
            <div className="flex w-full justify-evenly  text-center text-3xl my-4 mb-10">
              <div>
                {" "}
                <p>8</p>
                <p>States</p>
              </div>
              <div>
                {" "}
                <p>2</p>
                <p>State Presidents</p>
              </div>
            </div>
            <div className="flex w-full justify-evenly text-center text-3xl ">
              <div>
                {" "}
                <p>50+</p>
                <p>MLAs</p>
              </div>{" "}
              <div>
                {" "}
                <p>10+</p>
                <p>Cabinate Ministers</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2  h-full mx-auto mt-4">
          <div className="flex w-full justify-evenly">
            <WorkSampleTemplate
              imageUrl="https://raw.githubusercontent.com/Anandpandey0/portfolio-images/main/govind-singh.png"
              name="Govind Singh"
              designation="State President, Rajasthan
            INC"
            />
            <WorkSampleTemplate
              imageUrl="https://raw.githubusercontent.com/Anandpandey0/portfolio-images/a0b8be2e606d2560ec629d0c38a24d1a08d71207/Jyotipriya-malik.png"
              name="Jyotipriya Malik"
              designation="Cabinet Minister, W.B
            TMC"
            />
          </div>
          <div className="flex w-full justify-evenly">
            <WorkSampleTemplate
              imageUrl="https://raw.githubusercontent.com/Anandpandey0/portfolio-images/a0b8be2e606d2560ec629d0c38a24d1a08d71207/Amit-Patkar.png"
              name="Amit Patkar"
              designation="State President , Goa
            INC"
            />
            <WorkSampleTemplate
              imageUrl="https://raw.githubusercontent.com/Anandpandey0/portfolio-images/a0b8be2e606d2560ec629d0c38a24d1a08d71207/Suresh-Rana.png"
              name="Suresh Rana"
              designation="Ex-Cabinet Minister, U.P
            BJP"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Leaders;
