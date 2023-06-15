import React from "react";
import { FiList } from "react-icons/fi";
import { MdEditSquare } from "react-icons/md";
import { FaLandmark } from "react-icons/fa";
import { BsArrowsMove } from "react-icons/bs";

const ServicesCard = ({ title, paragraph, iconType }) => {
  let IconComponent;
  switch (iconType) {
    case "icon1":
      IconComponent = FiList;
      break;
    case "icon2":
      IconComponent = MdEditSquare;
      break;
    case "icon3":
      IconComponent = FaLandmark;
      break;
    case "icon4":
      IconComponent = BsArrowsMove;
      break;
    default:
      IconComponent = null;
  }

  return (
    <div class="w-full group sm:w-1/3  lg:w-1/5 mx-auto  h-[45vh] border-1 hover:bg-blue-800 hover:text-white p-6 rounded-xl shadow-2xl">
      <div className=" w-fit bg-blue-800 text-white  group-hover:bg-white group-hover:text-blue-800">
        {/* <FiList className="text-5xl " /> */}
        {IconComponent && <IconComponent className="text-5xl " />}
      </div>
      <h1 className="text-2xl mt-4 font-bold">{title}</h1>
      <p className="my-2">{paragraph}</p>
      <p className="cursor-pointer mt-8">Read more</p>
    </div>
  );
};

export default ServicesCard;
