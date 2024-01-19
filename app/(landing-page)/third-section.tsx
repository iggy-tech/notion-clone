import Image from 'next/image';
import React from 'react';

import { Lora } from 'next/font/google';
import { cn } from '@/lib/utils';


const font = Lora({
    subsets: ["latin"],
    weight: ["400"],
})

const ThirdSection = () => {
    return (
        <div className="xl:pt-32 pt-24 relative flex justify-center items-center flex-col">
            <div className="xl:text-5xl text-3xl w-3/5  font-medium xl:w-1/4 mx-auto text-center">
                Consolidate tools. Cut costs.
            </div>

            <div className="hidden xl:flex">
                <Image
                    src="/assets/RollerSkatingDoodle.svg"
                    alt="Groovy Doodle logo"
                    width={1000}
                    height={1000}
                    className="
                        absolute
                        xl:top-[15%]
                        right-[22%]
                        w-56

                    "
                />
            </div>

            <Image
                src="/assets/canva-logo.png"
                alt="Canva logo"
                width={1000}
                height={1000}
                className="pt-10 xl:pt-10 "
            />

<div className={cn(
    'flex items-center justify-center text-xl xl:text-2xl pt-10 pb-4  xl:py-10 px-8 xl:w-1/3 text-center ',
    font.className
)}>
                &quot;We got rid of nearly a dozen different tools because of what Bird does for us.&quot;
            </div>

   
            <div className="items-center flex justify-center flex-col">
            <Image
              src="/logos/logoipsum-327.svg"
              alt="Canva logo"
              width={1000}
              height={1000}
              className="pt-2 xl:pt-0  w-10 xl:w-14 "
            />
       
          <div className=" text-center">
            <div className="text-sm  font-medium pt-4">Carlos Hernandez</div>
            <div className="text-sm">Marketing Director, Palium Software</div>
          </div>
          </div>

        </div>
    );
}

export default ThirdSection;