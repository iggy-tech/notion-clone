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



      <div className=" flex justify-between  w-[55%] mx-auto relative gap-6 mt-10 ">
        <div className="shadow-md rounded-xl bg-[#f6f5f4]  flex flex-col p-6 w-full h-32">
          <div className="text-6xl text-sky-600">1M+</div>
          <div className=" font-normal">community members</div>
        </div>

        <div className="shadow-md rounded-xl bg-[#f6f5f4]  flex flex-col p-6 w-full h-32 ">
          <div className="text-6xl text-sky-600 font-medium">150+</div>
          <div className="font-normal">community groups</div>
        </div>

        <div className="shadow-md rounded-xl bg-[#f6f5f4]  flex flex-col p-6 w-full h-32">
          <div className="text-6xl text-sky-600">50+</div>
          <div className=" font-normal">countries represented</div>
        </div>
      </div>

      <div className="mt-6 flex justify-between  w-[55%] mx-auto relative gap-6">
        <div className="shadow-md rounded-xl bg-[#f6f5f4]  flex flex-col p-6  ">
          <div className="pt-4 pb-2 font-semibold text-lg">
            Customize the info you track
          </div>
          <div className="w-96">
            Create your own labels, tags, owners, and more, so everyone has
          </div>
          <Image
            src="/assets/GroovyDoodle.svg"
            alt="logo"
            width={500}
            height={500}
            className="p-10"
          />
        </div>

        <div className="shadow-md rounded-xl bg-[#f6f5f4]  flex flex-col p-6  ">
         
          <div className="pt-4 pb-2 font-semibold text-lg">
            Customize the info you track
          </div>
          <div className="w-96">
            Create your own labels, tags, owners, and more, so everyone has
            context and everything stays organized.
          </div>
          <Image
            src="/assets/GroovyDoodle.svg"
            alt="logo"
            width={500}
            height={500}
            className="p-10 "
          />
        </div>
      </div>

      <div className="mt-6 flex justify-between  w-[55%] mx-auto relative gap-6">
        <div className="shadow-md rounded-xl bg-[#f6f5f4]  flex flex-col p-6 w-full  items-center justify-center">
 
          <Image
            src="/assets/StrollingDoodle.svg"
            alt="logo"
            width={500}
            height={500}
            className="p-10"
          />
        </div>

        <div className="space-y-6 w-3/5">

     

        <div className="shadow-md rounded-xl bg-[#f6f5f4]  flex flex-col p-6  ">
         
         <div className="flex items-center">
            <Image
                src="/assets/DoogieDoodle.svg"
                alt="logo"
                width={50}
                height={50}
                className=" border p-2 rounded-full h-14 w-14 items-center justify-center"
                />
                <div className="ml-2">

        
            <div className="font-medium  text-lg">
                Hector Easl
                </div>
                <div className="text-gray-500 text-sm">
                @EaslHector
                </div>
                </div>

         </div>
          <div className="mt-2">
            <span className="text-sky-500 font-light"> @BirdSoftware </span>
            This is the best thing since sliced bread. I love it.
          </div>
    
        </div>

        <div className="shadow-md rounded-xl bg-[#f6f5f4]  flex flex-col p-6  ">
         
         <div className="flex items-center">
            <Image
                src="/assets/DoogieDoodle.svg"
                alt="logo"
                width={50}
                height={50}
                className=" border p-2 rounded-full h-14 w-14 items-center justify-center"
                />
                <div className="ml-2">

        
            <div className="font-medium  text-lg">
                Hector Easl
                </div>
                <div className="text-gray-500 text-sm">
                @EaslHector
                </div>
                </div>

         </div>
          <div className="mt-2">
           Subscribing to this channel was the best decision i ever made.
            <span className="text-sky-500 font-light"> @BirdSoftware </span>
             It has improved my coding skills

          </div>
    
        </div>


        <div className="shadow-md rounded-xl bg-[#f6f5f4]  flex flex-col p-6  ">
         
         <div className="flex items-center">
            <Image
                src="/assets/DoogieDoodle.svg"
                alt="logo"
                width={50}
                height={50}
                className=" border p-2 rounded-full h-14 w-14 items-center justify-center"
                />
                <div className="ml-2">

        
            <div className="font-medium  text-lg">
                Hector Easl
                </div>
                <div className="text-gray-500 text-sm">
                @EaslHector
                </div>
                </div>

         </div>
          <div className="mt-2">
            i used to have a lot of trouble with this but now its my go to.
            <span className="text-sky-500 font-light"> @BirdSoftware </span>
             It has improved my productivity by 1000%.
          </div>
    
        </div>

        </div>
        
      </div>

    </div>
  );
};

export default SixthSection;
