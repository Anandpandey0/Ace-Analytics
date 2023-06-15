import React, { useState } from "react";
import {
  FaCircle,
  FaUserTie,
  FaPrayingHands,
  FaUserCheck,
} from "react-icons/fa";
import { GrMonitor } from "react-icons/gr";
import ExpertiseTab from "./WhyUs-Components/ExpertiseTab";
import TechnologyTab from "./WhyUs-Components/TechnologyTab";
import WorkEhics from "./WhyUs-Components/WorkEhics";
// import PersonalisedSolution from "./WhyUs-Components/PersonalisedSolution";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import PersonalisedSoution from "./WhyUs-Components/PersonalisedSoution";

const WhyUs = () => {
  return (
    <Tabs isFitted variant="enclosed" className=" mt-8 ">
      <TabList mb="1em" className="flex overflow-x-scroll lg:overflow-hidden">
        <Tab
          _selected={{ color: "white", bg: "blue.500" }}
          className="bg-white text-black mx-4 lg:mx-[2rem]"
        >
          Expertise
        </Tab>
        <Tab
          _selected={{ color: "white", bg: "blue.500" }}
          className="bg-white text-black mx-4 lg:mx-[2rem]"
        >
          Personalised Solution
        </Tab>
        <Tab
          _selected={{ color: "white", bg: "blue.500" }}
          className="bg-white text-black mx-4 lg:mx-[2rem]"
        >
          Technology
        </Tab>
        <Tab
          _selected={{ color: "white", bg: "blue.500" }}
          className="bg-white text-black mx-4 lg:mx-[2rem]"
        >
          WorkEthics
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <ExpertiseTab />
        </TabPanel>
        <TabPanel>
          <PersonalisedSoution />
        </TabPanel>
        <TabPanel>
          <TechnologyTab />
        </TabPanel>
        <TabPanel>
          <WorkEhics />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default WhyUs;
