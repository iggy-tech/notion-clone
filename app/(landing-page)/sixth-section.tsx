import Image from "next/image";
import React from "react";
import { PiArrowRight, PiEyeLight } from "react-icons/pi";



const SixthSection = () => {
  return (
    <div>
      <div className="pt-20  xl:pt-24 flex justify-center items-center flex-col ">
        <div className="text-3xl w-3/4 xl:text-5xl font-medium xl:w-1/3 text-center">
          Join a global movement. Unleash your creativity.
        </div>
        <div className="py-4 px-10  xl:w-1/3  text-center">
          Our vibrant community produces content, teaches courses, and leads
          events all over the world.
        </div>
        <div className="text-sky-500 flex items-center hover:underline hover:cursor-pointer">
          Learn more <PiArrowRight className="ml-3 text-sm " />
        </div>
      </div>





      
      
        

   
    </div>
  );
};

export default SixthSection;
