import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "@/data";
import Circle from "@/components/Circle";
import ProjectDetailCircle from "@/components/ProjectDetailCircle";
import { MdCheck } from "react-icons/md";
import ProjectDetailAccordion from "@/components/ProjectDetailAccordian";

const ProjectDetailPage = ({ params }: { params: { slug: string } }) => {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <section className="flex flex-col justify-center items-center relative px-4 md:px-16 lg:px-32 min-h-[80vh] bg-[url('/bg-grid.svg')] bg-no-repeat bg-left bg-contain">
        {/* Circle on the left */}
        <div className="absolute left-[-60px] top-[95%] -translate-y-1/2 -z-10 pointer-events-none">
          <Circle />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 mb-4">
            <h3 className="font-bold text-lg sm:text-xl text-white text-center sm:text-left">
              Detail Presentation
            </h3>
            <hr className="hidden sm:block w-[80px] border-[#575757]" />
          </div>
          {/* Project */}
          <div className="flex ">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-end sm:gap-6 mb-5">
                <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[150px] text-white font-bold uppercase leading-none">
                  Project
                </h1>
              </div>

              {/* Details */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                <Image
                  width={350}
                  height={80}
                  className="w-28 h-8 sm:w-40 sm:h-10 md:w-60 md:h-14 lg:w-[350px] lg:h-[80px] mt-4 sm:mt-0"
                  src="/rings.svg"
                  alt="rings"
                />
                <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[150px] text-white font-bold uppercase leading-none">
                  Details
                </h1>
              </div>
            </div>
            <div>
              <ProjectDetailCircle />
            </div>
          </div>
        </div>
      </section>

      <section>
        <Image className="" src={project.image} alt={project.title} />
      </section>

      <section className="mt-20 px-4 md:px-16 lg:px-32 flex gap-14">
        {/* Left Side */}
        <div className="max-w-3xl">
          <div>
            <h3 className="text-lg text-[#D8D8D8] mb-3">{project.category}</h3>
            <h1 className="text-white text-5xl font-semibold">
              {project.title}
            </h1>
          </div>
          <hr className="hidden sm:block w-full my-8 border-[#575757]" />

          <div>
            <p className="text-[#D8D8D8] mb-8">
              {project.para1}
            </p>
            <div className=" flex gap-5">
              <Image
                width={400}
                height={400}
                src={project.image}
                alt={`${project.title} Image`}
              />
              <div className="text-[#D8D8D8] flex flex-col justify-center">
                <p className="mb-3 max-w-[340px]">
                  {project.para2}
                </p>
                <ul>
                  <li className="flex items-center gap-1">
                    <MdCheck size={22} color="#C9F31D" />
                    <h3>{project.li1}</h3>
                  </li>
                  <li className="flex items-center gap-1">
                    <MdCheck size={22} color="#C9F31D" />
                    <h3>{project.li2}</h3>
                  </li>
                  <li className="flex items-center gap-1">
                    <MdCheck size={22} color="#C9F31D" />
                    <h3>{project.li3}</h3>
                  </li>
                  <li className="flex items-center gap-1">
                    <MdCheck size={22} color="#C9F31D" />
                    <h3>{project.li4}</h3>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-[#D8D8D8] mt-8 ">
              {project.para3}
            </p>

            <div className="mt-10 flex justify-center">
              <ProjectDetailAccordion />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="text-white pt-10">
          <h2 className="text-4xl font-bold mb-6">Project Information</h2>

          {/* Info Grid */}
          <div className="grid grid-cols-1 gap-6">
            {Object.entries(project.info).map(([key, value]) => (
              <div key={key}>
                <h4 className="text-[#D8D8D8] text-lg capitalize">
                  {key.replace(/([A-Z])/g, " $1")}:
                </h4>
                <h1 className="text-2xl font-medium">{value}</h1>
              </div>
            ))}
          </div>

          {/* Share On */}
          <div className="mt-8">
            <h4 className="text-[#D8D8D8] text-lg mb-3">Share On:</h4>
            <div className="flex gap-4">
              {project.socials?.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 "
                  >
                    <Icon className="text-lg" />
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
