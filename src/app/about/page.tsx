import React from "react";

import ContactSection from "@/section/ContactSection";
import ServicesSection from "@/section/ServicesSection";
import AboutSection from "@/section/AboutSection";
import AboutHeroSection from "@/section/AboutHeroSection";
import WorkProcessSection from "@/section/WorkProcessSection";
import TechStackSection from "@/section/TechStackSection";
import TestmonialSection from "@/section/TestmonialSection";


const Page = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <AboutHeroSection />
      {/* About Details Section */}
      <AboutSection />
      {/* Work Process Section */}
      <WorkProcessSection />
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
