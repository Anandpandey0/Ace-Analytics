import React from "react";
import HomepageForm from "./HomepageForm";

const HomepageFormTemplate = () => {
  return (
    <div className=" lg:w-[30vw] h-[70vh] mt-[5rem] bg-white  lg:mt-0  text-black text-center p-4 rounded-lg">
      <h1 className="font-bold text-3xl">Book appointment</h1>
      <h3 className="font-semibold  mt-4">
        We here to help you 24/7 with experts
      </h3>
      <div className="flex flex-col mt-4 h-4/5 justify-evenly">
        <HomepageForm placeholderValue="Name" type="text" />
        <HomepageForm placeholderValue="Email" type="email" />
        <HomepageForm placeholderValue="Phone" type="tel" />
        <textarea className="resize-none w-5/6 h-24 mx-auto p-2 py-2 px-4 border-2 bg-gray-100 outline-none" />
        <button className="bg-blue-500 text-white w-5/6 mx-auto p-2 hover:bg-blue-800">
          Book Appointment Now
        </button>
      </div>
    </div>
  );
};

export default HomepageFormTemplate;
