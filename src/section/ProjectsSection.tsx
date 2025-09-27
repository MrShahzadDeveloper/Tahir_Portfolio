import Image from "next/image";
import React from "react";
import Link from "next/link";
import { projects } from "@/data"; // ✅ importing from data.js

const ProjectsSection = () => {
  return (
    <section className="px-4 md:px-16 lg:px-32 bg-[#020202] py-16">
      {/* Section Heading */}
      <div className="flex justify-center items-end mb-20">
        <h1 className="text-[60px] md:text-[120px] lg:text-[150px] text-white font-bold uppercase leading-none">
          Portfolio
        </h1>
        <Image
          width={100}
          height={100}
          src="/star2.svg"
          alt="star"
          className="ml-6"
        />
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`} // ✅ route to dynamic page
            className="group"
          >
            <div className="overflow-hidden rounded-lg shadow-lg relative">
              <Image
                width={600}
                height={400}
                src={project.image}
                alt={project.title}
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                <h2 className="text-white text-2xl font-bold">
                  {project.title}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
