"use client";

import Button from "@/components/Button";
import React from "react";
import bg from "../assets/hero_bg.jpg";

const HeroSection = () => {
  return (
    <div
      className="h-[98vh] w-full bg-cover bg-center relative px-4 md:px-16 lg:px-32 text-white"
      style={{ backgroundImage: `url(${bg.src})` }} // ✅ uses consistent string
      suppressHydrationWarning // prevents mismatch warning
    >
      <p>Start Writing the Code for Ui form Here......</p>
      {/* Example Button Usage */}
      <Button text="LET'S TALK" />
    </div>
  );
};

export default HeroSection;
