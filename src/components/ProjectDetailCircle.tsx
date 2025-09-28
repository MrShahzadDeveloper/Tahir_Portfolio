"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const ProjectDetailCircle = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Inner circle with border and arrow */}
      <div className="p-8 border rounded-full border-[#575757] relative z-10 flex items-center justify-center">
        <Image width={30} height={30} src="/arrow.svg" alt="App Developer" />
      </div>

      {/* Circular text with rotation */}
      <motion.svg
        className="absolute w-[150px] h-[140px]"
        viewBox="0 0 100 100"
        overflow="visible"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20, // 👈 slower rotation (increase for slower, decrease for faster)
        }}
      >
        {/* Circle Path */}
        <path
          id="outerCirclePath"
          d="M 0 50 
             A 1 1 0 0 1 100 50 
             A 1 1 0 0 1 0 50"
          fill="transparent"
          stroke="none"
        />

        <text>
          <textPath
            href="#outerCirclePath"
            startOffset="0"
            dominantBaseline="central"
            style={{
              fontFamily: "Outfit, sans-serif",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.38em",
              lineHeight: "0.5em",
              fill: "rgb(243,245,242)",
            }}
          >
            App - Developer - Website -
          </textPath>
        </text>
      </motion.svg>
    </div>
  );
};

export default ProjectDetailCircle;
