import { FiSearch, FiPenTool, FiCode, FiSend } from "react-icons/fi";
import React from "react";

const services = [
  {
    icon: <FiSearch className="text-3xl text-[#C9F31D]" />,
    title: "Step 01. Research & Planning",
    description:
      "I start by understanding your business goals, audience, and challenges. This helps define a clear roadmap and strategy before development begins.",
  },
  {
    icon: <FiPenTool className="text-3xl text-[#C9F31D]" />,
    title: "Step 02. Design & Prototyping",
    description:
      "I create wireframes, prototypes, and visual designs to craft user-friendly interfaces that align with your brand and user needs.",
  },
  {
    icon: <FiCode className="text-3xl text-[#C9F31D]" />,
    title: "Step 03. Development & Testing",
    description:
      "I build scalable, secure, and high-performing websites or applications, followed by thorough testing to ensure quality and reliability.",
  },
  {
    icon: <FiSend className="text-3xl text-[#C9F31D]" />,
    title: "Step 04. Launch & Support",
    description:
      "I deploy your product smoothly and provide ongoing support, updates, and optimizations to ensure long-term success.",
  },
];

const ServiceCards = () => {
  return (
    <section className="grid grid-cols-1 gap-6 mt-12 ">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-[#111] border border-gray-800 rounded-lg p-6 hover:border-[#C9F31D] transition-all group shadow-md"
        >
          <div className="mb-4">{service.icon}</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-[#C9F31D] transition">
            {service.title}
          </h3>
          <p className="text-sm text-gray-400 mt-2">{service.description}</p>
        </div>
      ))}
    </section>
  );
};

export default ServiceCards;
