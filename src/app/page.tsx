import Banner from "@/components/Banner";
import AboutSection from "@/section/AboutSection";
import ContactSection from "@/section/ContactSection";
import HeroSection from "@/section/HeroSection";
import ProjectsSection from "@/section/ProjectsSection";
import ServicesSection from "@/section/ServicesSection";
import TestmonialSection from "@/section/TestmonialSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <AboutSection />
      <Banner />
      <ServicesSection />
      <ProjectsSection />
      <TestmonialSection />
      <ContactSection />
    </div>
  );
}
