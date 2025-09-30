"use client";

import HeroHeader from "@/components/Header";
import React from "react";
import ServiceCards from "@/components/ServiceCards";
import ServicesSection from "@/section/ServicesSection";
import WorkProcessSection from "@/section/WorkProcessSection";
import ContactSection from "@/section/ContactSection";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Page = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  // Stagger container
  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  // Each item fades up
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const servicesList = [
    {
      title: "01. App Development",
      points: [
        "I build seamless, user-focused mobile applications that provide an excellent user experience across devices.",
        "My expertise ensures performance, scalability, and innovative solutions tailored to your business goals.",
      ],
    },
    {
      title: "02. Web Development",
      points: [
        "I design and develop responsive, fast, and secure websites that help you stand out in the competitive digital landscape.",
        "I leverage the latest technologies to create web experiences that keep users engaged and satisfied.",
      ],
    },
    {
      title: "03. Custom Software",
      points: [
        "My custom software solutions improve efficiency by addressing your unique business challenges.",
        "From prototyping to deployment, I ensure scalable and future-ready software tailored to your needs.",
      ],
    },
    {
      title: "04. Other Digital Solutions",
      points: [
        "From UI/UX design to system integrations, I deliver digital solutions that align with your business objectives.",
        "My expertise ensures measurable results and long-term value for your investment.",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-[80vh]">
      {/* Hero Header */}
      <HeroHeader
        introText="What I provide"
        heading1="Service"
        heading2="Details"
      />

      {/* Services Section */}
      <section className="py-12 text-white grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 sm:px-8 md:px-16 lg:px-32">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Stagger each text element */}
          <motion.p variants={itemVariants} className="mb-4 text-lg">
            I enhance your online visibility, making it easier for customers to
            discover you through search engines and digital platforms. By
            delivering engaging and intuitive digital experiences, I help your
            business grow and keep your customers satisfied.
          </motion.p>

          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-bold mb-10">
            Benefits of My Services
          </motion.h2>

          {servicesList.map((service, idx) => (
            <motion.div key={idx} variants={itemVariants} className="mb-10">
              <motion.h3 variants={itemVariants} className="text-xl md:text-2xl font-semibold mb-4">
                {service.title}
              </motion.h3>
              <motion.ul variants={itemVariants} className="list-disc list-inside space-y-2 text-gray-300">
                {service.points.map((point, i) => (
                  <motion.li key={i} variants={itemVariants}>
                    {point}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Column – Cards */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <ServiceCards />
        </motion.div>
      </section>

      <ServicesSection />
      <WorkProcessSection />
      <ContactSection />
    </div>
  );
};

export default Page;
