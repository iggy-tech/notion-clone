"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

import { TbSwitch3 } from "react-icons/tb";
import { PiEyeLight, PiPaletteLight, PiArrowRight } from "react-icons/pi";
import { Lora } from "next/font/google";

const font = Lora({
  subsets: ["latin"],
  weight: ["400"],
});

const tabs = [
  {
    text: '1M+',
    subtext: 'community members',
  },
  {
    text: '150+',
    subtext: 'community groups',
  },
  {
    text: '50+',
    subtext: 'countries represented',
  },

  {

    header: "Customize the info you track",
    subheading:
      "Create your own labels, tags, owners, and more, so everyone has context and everything stays organized.",

    image: "/assets/DumpingDoodle.svg",
  },
  

  {

    header: "Choose from a variety of colors",
    subheading:
      "Everything is customizable. Choose your own colors, icons, and more to make Bird work for you.",
    image: "/assets/CoffeeDoddle.svg",
  },





  {
    icon: <TbSwitch3 className="text-3xl mr-2 text-sky-600 rounded-md" />,
    title: "Visualize, filter & sort any way you want",
    description:
      "Show only tasks assigned to you, or items marked as urgent. Break down any project in the way that is most helpful to you.",
    images: [
      { title: "Board", picture: "/assets/ZombieingDoodle.svg" },
      { title: "Table", picture: "/assets/SprintingDoodle.svg" },
      { title: "Timeline", picture: "/assets/UnboxingDoodle.svg" },
      { title: "AI", picture: "/assets/RollingDoodle.svg" },
      { title: "Note", picture: "/assets/DogJumpDoodle.svg" },
      { title: "List", picture: "/assets/RunningDoodle.svg" },
    ],
    
  },
];

type Tab = {
  icon: JSX.Element;
  header: string;
  subheading: string;
  images?: { title: string; picture: string }[];
  description?: string;
  image?: string;
};

const SixthSection = () => {
  const ref = useRef(null);


  const [activeImageIndex, setActiveImageIndex] = useState(0);



  return (
    <>
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

        <div className="grid grid-cols-12   md:row-span-1  gap-4  xl:gap-6 mt-8 px-10  xl:w-3/5  mx-auto md:w-full ">
          {tabs.map((tab, index) => (
            <>
            <div
              key={index}
              className={`${
                index <= 2 ?
                " col-span-12 md:col-span-6  lg:col-span-4 "
                : " col-span-12 md:col-span-6  "
              } bg-[#f6f5f4] p-6 rounded-xl  flex `}
  
                >
                <div className="flex flex-col ">

                      
                <div className="text-5xl font-medium text-sky-600">{tab.text}</div>
                <div className="text-sm">{tab.subtext}</div>


        
              </div>
                <>
              
              { index >= 3 && (
                <>
                 <div>

                <div className="text-lg font-medium mt-2">{tab.header}</div>
                <div className="text-sm mt-2">{tab.subheading}</div>
            
                <div className="mt-4">
                    <Image
                      src={tab?.image || ""}
                      alt={`${tab.header} Image`}
                      width={500}
                      height={500}
                      className="mt-10  rounded-xl"
                    />
                  </div>
                </div>
                </>
                )}
                </>
            


              </div>




      



     

              </>
         
          ))}
        </div>

        <div
          className={cn(
            "flex items-center justify-center text-xl xl:text-2xl xl:py-10 pt-6 xl:w-1/3 text-center ",
            font.className
          )}
        >
          &quot;Bird adapts to your needs. It&apos;s as minimal or as powerful
          as you need it to be.&quot;
        </div>


          <div className="items-center flex justify-center flex-col">
            <Image
              src="/logos/logoipsum-327.svg"
              alt="Canva logo"
              width={1000}
              height={1000}
              className="pt-2 xl:pt-0  w-10 xl:w-14 "
            />
       
          <div className="m text-center">
            <div className="text-sm  font-medium pt-4">Carlos Hernandez</div>
            <div className="text-sm">Marketing Director, Palium Software</div>
          </div>
          </div>
        </div>
     
    </>
  );
};

export default SixthSection;
