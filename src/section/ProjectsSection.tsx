import Image from "next/image";
import React from "react";
import Link from "next/link";
import { projects } from "@/data"; // ✅ importing from data.js
import Button from "@/components/Button";

const ProjectsSection = () => {
  // Split projects into 2 columns
  const leftColumn = projects.filter((_, i) => i % 2 === 0);
  const rightColumn = projects.filter((_, i) => i % 2 === 1);

  return (
    <section className="px-4 md:px-12 lg:px-20 xl:px-32 bg-[#020202] py-12 md:py-16 lg:py-20">
      {/* Section Heading */}
      <div className="flex justify-center items-end mb-12 md:mb-20">
        <h1
          className="
            text-[40px] sm:text-[60px] md:text-[100px] lg:text-[120px] xl:text-[150px] 
            text-white font-bold uppercase leading-none text-center
          "
        >
          Portfolio
        </h1>
        <Image
          width={70}
          height={70}
          src="/star2.svg"
          alt="star"
          className="ml-3 sm:ml-6 w-8 sm:w-12 md:w-16 lg:w-20"
        />
      </div>

      {/* Projects Grid - Two staggered columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Left Column */}
        <div className="flex flex-col gap-6 md:gap-14">
          {leftColumn.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="group">
              <div className="overflow-hidden relative">
                <Image
                  width={600}
                  height={600}
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full 
                    h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] xl:h-[800px] 
                    object-cover object-top 
                    transition duration-500
                  "
                />
                {/* Hover Overlay */}
                <div
                  className="
                    absolute inset-0 bg-black/40 
                    opacity-0 group-hover:opacity-100 
                    transition-opacity duration-500 
                    flex items-end justify-center pb-6 md:pb-12
                  "
                >
                  <button
                    className="
                      px-6 sm:px-8 md:px-10 py-2 sm:py-3 
                      text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold 
                      bg-[#C9F31D] text-black shadow-md rounded 
                      transform translate-y-10 opacity-0
                      group-hover:translate-y-0 group-hover:opacity-100
                      transition-all duration-500 ease-out
                    "
                  >
                    {project.title}
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Right Column (shifted down) */}
        <div className="flex flex-col gap-6 md:gap-14 mt-20">
          {rightColumn.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="group">
              <div className="overflow-hidden relative">
                <Image
                  width={600}
                  height={600}
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full 
                    h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] xl:h-[800px] 
                    object-cover object-top 
                    transition duration-500
                  "
                />
                {/* Hover Overlay */}
                <div
                  className="
                    absolute inset-0 bg-black/40 
                    opacity-0 group-hover:opacity-100 
                    transition-opacity duration-500 
                    flex items-end justify-center pb-6 md:pb-12
                  "
                >
                  <button
                    className="
                      px-6 sm:px-8 md:px-10 py-2 sm:py-3 
                      text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold 
                      bg-[#C9F31D] text-black shadow-md rounded 
                      transform translate-y-10 opacity-0
                      group-hover:translate-y-0 group-hover:opacity-100
                      transition-all duration-500 ease-out
                    "
                  >
                    {project.title}
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-12 md:mt-20 flex justify-center">
        <Button text="All Projects" />
      </div>
    </section>
  );
};

export default ProjectsSection;
