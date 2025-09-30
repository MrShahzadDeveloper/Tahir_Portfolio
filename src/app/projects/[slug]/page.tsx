import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "@/data";
import Circle from "@/components/Circle";
import ProjectDetailCircle from "@/components/ProjectDetailCircle";
import { MdCheck } from "react-icons/md";
import ProjectDetailAccordion from "@/components/ProjectDetailAccordian";
import Link from "next/link";
import googlePlay from "../../../assets/googlepaly.png";
import { div } from "framer-motion/client";
import HeroHeader from "@/components/Header";

const ProjectDetailPage = ({ params }: { params: { slug: string } }) => {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
          <HeroHeader
        introText="Detailed Presentation"
        heading1="Project"
        heading2="Detail"
      />

      {/* Banner Image */}
      <section className="w-full h-[300px] sm:h-[450px] md:h-[600px] lg:h-[750px] relative overflow-hidden">
        <div className="absolute inset-0 shadow-2xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      </section>

      {/* Project Details + Info */}
      <section className="mt-8 mb-20 px-4 md:px-16 xl:px-32 flex flex-col lg:flex-row gap-14">
        {/* Left Side */}
        <div className="w-full lg:w-2/3 max-w-3xl">
          <div>
            <h3 className="text-base sm:text-lg text-[#D8D8D8] mb-3">
              {project.category}
            </h3>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
              {project.title}
            </h1>
          </div>
          <hr className="hidden sm:block w-full my-8 border-[#575757]" />

          <div>
            <p className="text-[#D8D8D8] mb-8">{project.para1}</p>

            {/* Image + Bullet Points */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/2 h-[220px] sm:h-[280px] md:h-[300px] relative overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={`${project.title} Image`}
                  fill
                  className="object-cover object-top"
                />
              </div>

              <div className="text-[#D8D8D8] flex flex-col justify-center w-full md:w-1/2">
                <p className="mb-3">{project.para2}</p>
                <ul className="space-y-2">
                  {[project.li1, project.li2, project.li3, project.li4].map(
                    (item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <MdCheck size={22} color="#C9F31D" />
                        <h3>{item}</h3>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            <p className="text-[#D8D8D8] mt-8">{project.para3}</p>

            <div className="mt-10 flex justify-center">
              <ProjectDetailAccordion />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/3 text-white pt-6 lg:pt-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Project Information
          </h2>

          {/* Info Grid */}
          <div className="grid grid-cols-1 gap-6">
            {Object.entries(project.info).map(([key, value]) => (
              <div key={key}>
                {/* For normal fields */}
                {key.toLowerCase() !== "website" ? (
                  <>
                    <h4 className="text-[#D8D8D8] text-base sm:text-lg capitalize">
                      {key.replace(/([A-Z])/g, " $1")}:
                    </h4>
                    <h1 className="text-xl sm:text-2xl font-medium">{value}</h1>
                  </>
                ) : (
                  /* For website field → show Google Play button instead of raw URL */
                  <Link
                    href={value as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Image
                      src={googlePlay}
                      alt="Get it on Google Play"
                      width={140}
                      height={50}
                    />
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Share On */}
          <div className="mt-8">
            <h4 className="text-[#D8D8D8] text-base sm:text-lg mb-3">
              Share On:
            </h4>
            <div className="flex gap-3 flex-wrap">
              {project.socials?.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[#C9F31D] hover:text-black transition"
                  >
                    <Icon className="text-base sm:text-lg" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetailPage;
