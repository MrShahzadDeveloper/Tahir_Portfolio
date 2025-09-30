import Image from "next/image";
import React from "react";
import tahir from "../assets/tahir.jpg";
import Button from "@/components/Button";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className=" px-4 md:px-12 xl:px-32">
      <div>
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="flex items-center gap-5">
              <h3 className="font-bold text-lg md:text-xl text-white ml-[6px]">
                About
              </h3>
              <hr className="w-[50px] md:w-[70px] text-[#575757]" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl text-white font-bold leading-tight">
              Passion for <br /> Digital Innovation
            </h1>
          </div>
          <div>
            <Image width={60} height={60} src="/bolt.svg" alt="bolt" className="sm:w-[100px] sm:h-[100px] " />
          </div>
        </div>

        {/* Content */}
        <div className="mt-16 flex flex-col xl:flex-row justify-between gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative w-full sm:w-[400px] md:w-[500px] h-[350px] sm:h-[400px] md:h-[450px] flex-shrink-0">
            <Image
              fill
              src={tahir}
              alt="tahir"
              className="rounded-t-2xl shadow-md object-cover 
              [mask-image:linear-gradient(to_bottom,black_85%,transparent)] 
              [mask-repeat:no-repeat] [mask-size:100%_100%]"
            />
          </div>

          {/* Text + Stats */}
          <div className="text-[rgb(210,210,210)] flex-1">
            <div className="text-base sm:text-lg max-w-full md:max-w-[600px]">
              <p className="mb-6 md:mb-10">
                My journey began with a simple yet powerful idea: to revolutionise
                the digital landscape through innovative solutions and exceptional
                creativity.
              </p>
              <p>
                Driven by a passion for design and technology, I set out to create
                unique digital experiences that make an impact in online.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 flex flex-col sm:flex-row items-center sm:justify-start gap-8 sm:gap-12 text-white text-center sm:text-left">
              {/* Projects Completed */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#C9F31D]">
                  17K
                </h3>
                <p className="text-sm text-gray-300">Projects Completed</p>
              </div>

              {/* Divider (hidden on small screens) */}
              <div className="hidden sm:block h-8 w-px bg-gray-700"></div>

              {/* Happy Clients */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#C9F31D]">
                  145+
                </h3>
                <p className="text-sm text-gray-300">Happy Clients</p>
              </div>

              <div className="hidden sm:block h-8 w-px bg-gray-700"></div>

              {/* Cups of Coffee */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#C9F31D]">
                  10,459
                </h3>
                <p className="text-sm text-gray-300">Cups of Coffee</p>
              </div>
            </div>

            {/* Button */}
            <div className="py-10 flex justify-center items-center md:justify-start">
            <Link  href="/about" >
              <Button text="About me" />
            </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
