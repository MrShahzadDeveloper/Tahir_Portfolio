"use client";
import React from "react";
import Image from "next/image";

import client from "../assets/c3.png"; // your client image
import comma from "../../public/comma.svg"; // quotation mark svg

const TestmonialSection = () => {
  return (
    <div className="px-4 md:px-16 lg:px-32 py-16 bg-black text-white">
      {/* Heading */}
      <div className="mb-12">
        <div className="flex items-center gap-3">
          <p className="text-lg font-semibold">Testimonials</p>
          <hr className="w-[80px] border-[#575757]" />
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-[70px] font-bold mt-3">
          What my clients say
        </h2>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left side - text */}
        <div className="max-w-2xl">
          {/* Quotation mark */}
          <Image
            src={comma}
            alt="comma"
            width={80}
            height={80}
            className="mb-6 text-[#C6FF00]"
          />

          {/* Testimonial text */}
          <p className="text-xl font-semibold leading-relaxed">
            Working with Tahir Mehmood is a fantastic experience. He truly understood our vision and turned our dream home into a reality. The attention to detail and dedication were beyond my imagination
          </p>

          {/* Author */}
          <div className="mt-6">
            <p className="font-bold text-lg">Cameron Williamson</p>
            <p className="text-gray-400 text-sm">CEO, ISHKON</p>
          </div>
        </div>

        {/* Right side - image */}
        <div className="shrink-0">
          <Image
            src={client}
            alt="client"
            width={300}
            height={350}
            className="rounded-lg rotate-0 md:rotate-3 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default TestmonialSection;
