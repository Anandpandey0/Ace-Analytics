import React from "react";
import { FiList } from "react-icons/fi";
import ServicesCard from "./ServicesCard";

const AllServices = () => {
  return (
    <div className="w-5/6 h-full mx-auto mt-8">
      <h1 className="text-center text-5xl p-4 font-bold ">All Services</h1>
      <div class="flex flex-wrap mt-12 gap-10  ">
        <ServicesCard
          title="Political Intel Report"
          paragraph="A thorough study of the political landscape of the targeted zone/constituency...."
          iconType="icon1"
        />
        <ServicesCard
          title="Political Intel Report"
          paragraph="A thorough study of the political landscape of the targeted zone/constituency...."
          iconType="icon2"
        />
        <ServicesCard
          title="Political Intel Report"
          paragraph="A thorough study of the political landscape of the targeted zone/constituency...."
          iconType="icon3"
        />
        <ServicesCard
          title="Political Intel Report"
          paragraph="A thorough study of the political landscape of the targeted zone/constituency...."
          iconType="icon4"
        />
      </div>
    </div>
  );
};

export default AllServices;
