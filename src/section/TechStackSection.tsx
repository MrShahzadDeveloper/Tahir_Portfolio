"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import node from "../assets/nodejs.png";
import firebase from "../assets/firebase.png";
import flutter from "../assets/Flutter.png";
import kotlin from "../assets/Kotlin.png";
import android from "../assets/Android Studio.png";

const TechStackSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const skills = [
    "Analytics & Strategy",
    "UX/UI Design",
    "Branding & Identity",
    "Web Development",
  ];

  const tools = [
    { name: "HTML", img: html },
    { name: "CSS", img: css },
    { name: "JavaScript", img: js },
    { name: "React Native", img: react },
    { name: "Node.js", img: node },
    { name: "Android", img: android },
    { name: "Flutter", img: flutter },
    { name: "Kotlin", img: kotlin },
    { name: "Fire Base", img: firebase },
  ];

  // Variants
  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      ref={ref}
      className="text-white py-16 px-4 sm:px-8 md:px-16 xl:px-32"
    >
      <motion.div
        className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Left Section */}
        <motion.div variants={itemVariants}>
          <div className="mb-10">
            <div className="flex items-center gap-3">
              <p className="text-lg font-semibold">Professional Skills</p>
              <hr className="w-[80px] text-[#575757]" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">Tech Stack</h2>
          </div>
          <ul className="grid grid-cols-2 gap-4 text-lg">
            {skills.map((skill, idx) => (
              <motion.li
                key={idx}
                className="flex items-center gap-2"
                variants={itemVariants}
              >
                <span className="text-lime-400">✔</span> {skill}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center"
          variants={containerVariants}
        >
          {tools.map((tool, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center justify-center rounded-xl border border-gray-700 bg-neutral-900 p-4 sm:p-6 shadow-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={tool.img}
                alt={tool.name}
                className="w-16 h-16 object-contain"
              />
              <p className="mt-4 text-sm text-gray-300">{tool.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TechStackSection;
