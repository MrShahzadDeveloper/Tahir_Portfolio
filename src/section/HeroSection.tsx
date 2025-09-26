"use client";

import React from "react";
import bg from "../assets/hero_bg.jpg";
import Image from "next/image";
import Button from "@/components/Button";

const HeroSection = () => {
  return (
    <section
      className="h-[99vh] pt-30 w-full flex items-center bg-cover bg-center relative px-4 md:px-16 lg:px-32 text-white"
      style={{ backgroundImage: `url(${bg.src})` }}
      suppressHydrationWarning
    >
      <div>
        <div className="flex items-center gap-5 mb-4">
          <h3 className="font-bold text-xl">Hey There! Tahir Mehmood Here</h3>
          <hr className="w-[80px] text-[#575757]" />
        </div>
        <div className="flex flex-col gap-10">
          <div>
            <div className="flex items-center gap-10">
              <div className="flex justify-end items-end gap-10 mb-5">
                <span className="text-[75px] border-b font-bold text-[#C9F31D] leading-none mb-3 ">
                  Senior
                </span>
                <h1 className="text-[150px] font-bold uppercase leading-none">
                  {" "}
                  App
                </h1>
              </div>
              <Image
                width={100}
                height={200}
                className="w-[120px] mt-4 h-[120px] "
                src="/star.svg"
                alt="star"
              />
            </div>
            <div className="flex items-center">
              <Image
                width={100}
                height={200}
                className="w-[350px] mt-4 h-[80px] "
                src="/rings.svg"
                alt="rings"
              />
              <h1 className="text-[150px] font-bold uppercase leading-none">
                Developer
              </h1>
            </div>
          </div>
          <p className="text-2xl max-w-2xl text-[#D2D2D2] ">
            I believe in the power of innovation and creativity to transform
            your ideas into exceptional digital experiences. Working closely
            with you, I strive to bring your vision to life.
          </p>
        </div>
        <div className="mt-20">
          <Button text="LET'S TALK" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
