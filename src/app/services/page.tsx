import HeroHeader from "@/components/Header";
import React from "react";
import ServiceCards from "@/components/ServiceCards";
import ServicesSection from "@/section/ServicesSection";
import WorkProcessSection from "@/section/WorkProcessSection";
import ContactSection from "@/section/ContactSection";

const Page = () => {
  return (
    <div className="flex flex-col min-h-[80vh]">
      {/* Hero Header */}
      <HeroHeader
        introText="What I provide"
        heading1="Service"
        heading2="Details"
      />

      {/* Services Section + Cards Side by Side */}
      <section className="py-12 text-white grid grid-cols-1 lg:grid-cols-2 gap-12  px-4 sm:px-8 md:px-16 lg:px-32">
        {/* Left Column – Details */}
        <div>
          <p className="mb-4 text-lg">
            I enhance your online visibility, making it easier for customers to
            discover you through search engines and digital platforms. By
            delivering engaging and intuitive digital experiences, I help your
            business grow and keep your customers satisfied.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-10">
            Benefits of My Services
          </h2>

          {/* 01 App Development */}
          <div className="mb-10">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              01. App Development
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                I build seamless, user-focused mobile applications that provide
                an excellent user experience across devices.
              </li>
              <li>
                My expertise ensures performance, scalability, and innovative
                solutions tailored to your business goals.
              </li>
            </ul>
          </div>

          {/* 02 Web Development */}
          <div className="mb-10">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              02. Web Development
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                I design and develop responsive, fast, and secure websites that
                help you stand out in the competitive digital landscape.
              </li>
              <li>
                I leverage the latest technologies to create web experiences
                that keep users engaged and satisfied.
              </li>
            </ul>
          </div>

          {/* 03 Custom Software */}
          <div className="mb-10">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              03. Custom Software
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                My custom software solutions improve efficiency by addressing
                your unique business challenges.
              </li>
              <li>
                From prototyping to deployment, I ensure scalable and
                future-ready software tailored to your needs.
              </li>
            </ul>
          </div>

          {/* 04 Other Digital Solutions */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              04. Other Digital Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                From UI/UX design to system integrations, I deliver digital
                solutions that align with your business objectives.
              </li>
              <li>
                My expertise ensures measurable results and long-term value for
                your investment.
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column – Cards */}
        <div>
          <ServiceCards />
        </div>
      </section>

      <ServicesSection />
      <WorkProcessSection />
      <ContactSection />
    </div>
  );
};

export default Page;
