import React from "react";

import ContactSection from "@/section/ContactSection";
import ServicesSection from "@/section/ServicesSection";
import AboutSection from "@/section/AboutSection";
import WorkProcessSection from "@/section/WorkProcessSection";
import TechStackSection from "@/section/TechStackSection";
import TestmonialSection from "@/section/TestmonialSection";
import HeroHeader from "@/components/Header";


const Page = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <HeroHeader
        introText="Hey There, Its"
        heading1="Tahir"
        heading2="Mehmood"
      />

      {/* About Details Section */}
      <AboutSection />
      {/* Work Process Section */}
      <div>
      <WorkProcessSection />
      </div>
      {/* Tech Stack Section */}
      <TechStackSection />
      {/* Services Section */}
      <ServicesSection />
      {/* Contact Section */}
      {/* Testmonial Section */}
      <TestmonialSection />
      <ContactSection />
    </div>
  );
};

export default Page;
