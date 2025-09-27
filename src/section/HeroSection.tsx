"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import bg from "../assets/bg.avif";

const HeroSection = () => {
  return (
    <section
      className="min-h-screen pt-20 sm:pt-24 w-full flex items-center bg-cover bg-center relative px-4 sm:px-8 md:px-16 lg:px-32 text-white"
      style={{ backgroundImage: `url('/hero_bg.jpg')` }} // ✅ Move bg to /public/hero_bg.jpg
      suppressHydrationWarning
    >
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Intro text */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 mb-6">
          <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-center sm:text-left">
            Hey There! Tahir Mehmood Here
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
            {/* First row */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:gap-6 mb-6">
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
