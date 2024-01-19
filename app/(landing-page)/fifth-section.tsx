"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useState } from "react";
import {
  PiArrowRight,
  PiBookOpenTextLight,
  PiClockAfternoonLight,
  PiCompassLight,
  PiFileThin,
  PiHeadset,
  PiMegaphoneLight,
  PiRocketLaunchFill,
  PiSparkleLight,
  PiTargetLight,
} from "react-icons/pi";

const tabs = [
  {
    icon: <PiSparkleLight />,
    name: "Engineering",
    image: "/assets/DancingDoodle.svg",
  },
  {
    icon: <PiBookOpenTextLight />,
    name: "Design",
    image: "/assets/DogJumpDoodle.svg",
  },
  {
    icon: <PiRocketLaunchFill />,
    name: "Product",
    image: "/assets/MeditatingDoodle.svg",
  },
  {
    icon: <PiMegaphoneLight />,
    name: "Marketing",
    image: "/assets/ReadingDoodle.svg",
  },
  {
    icon: <PiCompassLight />,
    name: "Operations",
    image: "/assets/SittingDoodle.svg",
  },
  {
    icon: <PiHeadset />,
    name: "HR",
    image: "/assets/SleekDoodle.svg",
  },
];

const FifthSection = () => {
  const ref = useRef(null);


  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="pt-16 relative flex justify-center items-center flex-col">
      <div className=" text-3xl xl:text-5xl font-medium text-center pb-8">
        Every team, side-by-side
      </div>

      <div className="grid grid-cols-5 space-x-20 mx-auto md:flex  hover:cursor-pointer  ">
        {tabs.map((tab) => (
          <motion.div
            key={tab.name}
            className={`
              flex 
      
                cursor-pointer
        
                ${
                  activeTab.name === tab.name
                    ? "rounded-md bg-[#f6f5f4] hover:bg-[#ebebe9]"
                    : " "
                }
            `}
            onClick={() => setActiveTab(tab)}
          >
            <div className="flex flex-col   items-center md:justify-center mx-auto">
              <div className="hidden md:flex text-6xl">{tab.icon}</div>
              <div className="font-medium text-sm  xl:text-lg mt-1">{tab.name}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Display content based on the active tab */}
      <div className="pt-6  px-8 xl:w-[55%]">
      {activeTab && (
            <div className=" flex justify-center items-center flex-col">
              <Image
                src={activeTab.image}
                width={1025}
                height={500}
                alt="logo"
                className="
                w-full
             border
             rounded-xl
             p-20
                "
              />
            </div>
          )}
      </div>
    </div>
  );
};

export default FifthSection;
