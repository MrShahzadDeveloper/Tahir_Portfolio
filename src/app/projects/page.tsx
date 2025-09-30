import HeroHeader from "@/components/Header";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { projects } from "@/data";
import ContactSection from "@/section/ContactSection";

const ProjectDetailPage = () => {
  return (
    <section className="flex flex-col min-h-[80vh] ">
      {/* Header */}
      <HeroHeader
        introText="Detailed Presentation"
        heading1="Project"
        heading2="Completed"
      />

      {/* Section Heading */}
      <div className="flex justify-center items-end mb-12 md:mb-20">
        <Image
          width={70}
          height={70}
          src="/star2.svg"
          alt="star"
          className="ml-3 sm:ml-6 w-8 sm:w-12 md:w-16 lg:w-20"
        />
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-4 sm:px-8 md:px-16 xl:px-32 pb-10 md:pb-20" >
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group"
          >
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
      <ContactSection />
    </section>
  );
};

export default ProjectDetailPage;
