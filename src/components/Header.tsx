import React from "react";
import Image from "next/image";
import Circle from "@/components/Circle";
import ProjectDetailCircle from "./ProjectDetailCircle";

interface HeroHeaderProps {
  introText: string;   // Small intro text (e.g. "Hey There! Tahir Mehmood")
  heading1: string;    // First big heading (e.g. "App")
  heading2: string;    // Second big heading (e.g. "Developer")
  bg?: string;         // Optional background image
}

const HeroHeader: React.FC<HeroHeaderProps> = ({
  introText,
  heading1,
  heading2,
  bg,
}) => {
  return (
    <section className="relative min-h-[40vh] md:min-h-[60vh] py-10 md:py-20 lg:py-36 flex flex-col justify-center text-white overflow-hidden">
      {/* Circle on the left */}
      <div className="absolute left-[-100px] top-[40%] -translate-y-1/2 -z-10 pointer-events-none">
        <Circle />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full  px-4 sm:px-8 md:px-16 xl:px-32">
        {/* Header intro */}
        <div className="flex flex-col md:flex-row md:items-center gap-3 sm:gap-5 mb-6 text-center md:text-left">
          <h3 className="font-bold text-lg sm:text-xl text-white">
            {introText}
          </h3>
          <hr className="hidden sm:block w-[80px] border-[#575757]" />
        </div>

        {/* Title + Circle */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full">
          {/* Title Block */}
          <div className="text-center md:text-left">
            {/* First Line */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:gap-6 mb-5 justify-center md:justify-start">
              <h1 className="text-5xl sm:text-7xl lg:text-[100px] font-bold uppercase leading-none">
                {heading1}
              </h1>
              <Image
                src="/star.svg"
                alt="star"
                width={120}
                height={120}
                className="hidden md:block w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[120px] lg:h-[120px] mt-2 sm:mt-0"
              />
            </div>

            {/* Second Line */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 justify-center md:justify-start">
              <Image
                src="/rings.svg"
                alt="rings"
                width={350}
                height={80}
                className="hidden md:block w-28 h-8 sm:w-40 sm:h-10 md:w-60 md:h-14 lg:w-[350px] lg:h-[80px] my-8 sm:my-0"
              />
              <h1 className="text-5xl sm:text-7xl lg:text-[100px] font-bold uppercase leading-none">
                {heading2}
              </h1>
            </div>
          </div>

          {/* Right Project Circle */}
          <div className="flex-shrink-0 flex justify-center md:justify-end w-full md:w-auto mb-30">
            <ProjectDetailCircle />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHeader;
