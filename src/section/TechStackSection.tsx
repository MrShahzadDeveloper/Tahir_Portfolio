import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import node from "../assets/nodejs.png";
import firebase from "../assets/firebase.png";
import flutter from "../assets/Flutter.png"
import kotlin from "../assets/Kotlin.png";
import android from "../assets/Android Studio.png";

import Image from "next/image";

const TechStackSection = () => {
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

  return (
    <section className=" text-white py-16 px-4 sm:px-8 md:px-16 xl:px-32">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div>
          <div className="mb-10">
            <div className="flex items-center gap-3">
              <p className="text-lg font-semibold">Proffessional Skills</p>
              <hr className="w-[80px] text-[#575757]" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">
              Tech Stack
            </h2>
          </div>
          <ul className="grid grid-cols-2 gap-4 text-lg">
            {skills.map((skill, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="text-lime-400">✔</span> {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center rounded-xl border border-gray-700 bg-neutral-900 p-4 sm:p-6 shadow-lg hover:scale-105 transition-transform"
            >
              <Image
                src={tool.img}
                alt={tool.name}
                className="w-16 h-16 object-contain"
              />
              <p className="mt-4 text-sm text-gray-300">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
