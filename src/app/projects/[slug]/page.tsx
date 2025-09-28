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
        <Image src={project.image} alt={project.title} />
      </section>

      <section className="mt-20 px-4 md:px-16 lg:px-32 flex gap-14">
        {/* Left Side */}
        <div className="max-w-3xl">
          <div>
            <h3 className="text-lg text-[#D8D8D8] mb-3">Technology</h3>
            <h1 className="text-white text-5xl font-semibold">
              ClayAI SaaS Website
            </h1>
          </div>
          <hr className="hidden sm:block w-full my-8 border-[#575757]" />

          <div>
            <p className="text-[#D8D8D8] mb-8">
              We believe a brand goes beyond a logo or tagline—it&#39;s the core
              of your business. Our Branding & Identity services help you build
              and express your unique brand personality, ensuring it connects
              with your audience and makes an impact in your market. We start
              with a solid strategy, working with you to understand your
              business goals, target audience, and positioning. Together, we
              define your mission, vision, and values, creating a clear path for
              your brand&#39;s success.
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
                  Meeting project deadlines is a top priority. We understand the
                  importance of timely delivery and have established a
                  comprehensive approach to ensure that all projects.
                </p>
                <ul>
                  <li className="flex items-center gap-1">
                    <MdCheck size={22} color="#C9F31D" />
                    <h3>Analytics & Strategy</h3>
                  </li>
                  <li className="flex items-center gap-1">
                    <MdCheck size={22} color="#C9F31D" />
                    <h3>UX/UI Design</h3>
                  </li>
                  <li className="flex items-center gap-1">
                    <MdCheck size={22} color="#C9F31D" />
                    <h3>Branding & Identity</h3>
                  </li>
                  <li className="flex items-center gap-1">
                    <MdCheck size={22} color="#C9F31D" />
                    <h3>Web Development</h3>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-[#D8D8D8] mt-8 ">
              A successful brand starts with a clear strategy. We work closely
              with you to understand your business goals, target audience, and
              market positioning. Together, we define your brand&#39;s mission,
              vision, and values, creating a solid foundation for all your
              branding efforts.
            </p>

            <div className="mt-10 flex justify-center">
              <ProjectDetailAccordion slug={params.slug} />
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
