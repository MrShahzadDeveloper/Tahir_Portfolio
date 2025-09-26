"use client";

import React from "react";
import bg from "../assets/hero_bg.jpg";
import Image from "next/image";
import Button from "@/components/Button";

const HeroSection = () => {
  return (
    <section
      className="min-h-screen pt-24 w-full flex items-center bg-cover bg-center relative px-4 sm:px-8 md:px-16 lg:px-32 text-white"
      style={{ backgroundImage: `url(${bg.src})` }}
      suppressHydrationWarning
    >
      <div className="w-full">
        {/* Intro text */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 mb-4">
          <h3 className="font-bold text-lg sm:text-xl text-center sm:text-left">
            Hey There! Tahir Mehmood Here
          </h3>
          <hr className="hidden sm:block w-[80px] text-[#575757]" />
        </div>

        {/* Hero Title */}
        <div className="flex flex-col gap-6 sm:gap-10">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-end sm:gap-6 mb-5">
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-[75px] border-b font-bold text-[#C9F31D] leading-none mb-2 sm:mb-0 w-fit">
                Senior
              </span>
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[150px] font-bold uppercase leading-none">
                App
              </h1>
              <Image
                width={100}
                height={100}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-[120px] lg:h-[120px] mt-4 sm:mt-0"
                src="/star.svg"
                alt="star"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
              <Image
                width={100}
                height={100}
                className="w-28 h-8 sm:w-40 sm:h-10 md:w-60 md:h-14 lg:w-[350px] lg:h-[80px] mt-4 sm:mt-0"
                src="/rings.svg"
                alt="rings"
              />
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[150px] font-bold uppercase leading-none">
                Developer
              </h1>
            </div>
          </div>

          {/* Paragraph */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-lg md:max-w-2xl text-[#D2D2D2] mt-6 sm:mt-0 text-center sm:text-left">
            I believe in the power of innovation and creativity to transform
            your ideas into exceptional digital experiences. Working closely
            with you, I strive to bring your vision to life.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-10 sm:mt-16 md:mt-20 flex justify-center sm:justify-start">
          <Button text="LET'S TALK" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
