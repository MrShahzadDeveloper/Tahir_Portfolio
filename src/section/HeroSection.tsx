"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import bg from "../assets/bg.avif";
import Circle from "@/components/Circle";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-[70vh] sm:h-screen flex items-center px-4 sm:px-8 md:px-16 lg:px-32 sm:pt-24 text-white bg-[url('/bg-grid.svg')] bg-no-repeat bg-left bg-contain overflow-hidden"
    >
      {/* Glowing Circle (half visible on left) */}
      <div className="absolute left-[-100px] top-[40%] -translate-y-1/2 -z-10 pointer-events-none">
        <Circle />
      </div>

      {/* Content */}
      <div className="relative z-10 ">
        {/* Intro text */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 mb-4">
          <h3 className="font-bold text-sm sm:text-xl text-center sm:text-left">
            Hey There! Tahir Mehmood
          </h3>
          <hr className="hidden sm:block w-[80px] border-[#575757]" />
        </div>

        {/* Hero Title with BG behind */}
        <div className="relative flex flex-col gap-6 sm:gap-10">
          {/* Background image BEHIND text */}
          <div className="absolute sm:-right-[100px] top-[90%] sm:top-[70%] -translate-y-1/2 -z-10 opacity-70 pointer-events-none">
            <Image
              src={bg}
              alt="background"
              width={600}
              height={600}
              priority
              unoptimized
              className="object-contain w-[300] h-[300] sm:w-[600] sm:h-[600] "
            />
          </div>

          {/* Titles */}
          <div>
            <div className="flex justify-center sm:justify-start gap-3 sm:items-end sm:gap-6 sm:mb-5">
              <span className="text-xl sm:text-6xl md:text-7xl lg:text-[75px] border-b font-bold text-[#C9F31D] leading-none mb-2 sm:mb-3 w-fit flex justify-center sm:justify-end items-end">
                Senior
              </span>
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[150px] font-bold uppercase leading-none relative z-10">
                App
              </h1>
              <Image
                src="/star.svg"
                alt="star"
                width={120}
                height={120}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-[120px] lg:h-[120px] mt-1 sm:mt-0 "
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 relative z-10">
              <Image
                src="/rings.svg"
                alt="rings"
                width={350}
                height={80}
                className="hidden sm:block w-28 h-8 sm:w-40 sm:h-10 md:w-60 md:h-14 lg:w-[350px] lg:h-[80px] mt-4 sm:mt-0"
              />
              <h1 className="text-5xl text-center sm:text-start sm:text-7xl md:text-8xl lg:text-[150px] font-bold uppercase leading-none">
                Developer
              </h1>
            </div>
          </div>

          {/* Paragraph */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-lg md:max-w-2xl text-[#D2D2D2] mt-6 sm:mt-0 text-center sm:text-left relative z-10">
            I believe in the power of innovation and creativity to transform
            your ideas into exceptional digital experiences. Working closely
            with you, I strive to bring your vision to life.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 flex justify-center sm:justify-start">
          <Button text="LET'S TALK" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
