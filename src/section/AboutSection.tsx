"use client";

import React from "react";
import Image from "next/image";
import tahir from "../assets/tahir.jpg";
import Button from "@/components/Button";
import Link from "next/link";
import CountUp from "react-countup";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

/** Typed variants */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      when: "beforeChildren",
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const AboutSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="px-4 md:px-12 xl:px-32">
      {/* attach the intersection ref to a plain div to avoid ref typing issues */}
      <div ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
            variants={itemVariants}
          >
            <div>
              <motion.div variants={itemVariants} className="flex items-center gap-5">
                <h3 className="font-bold text-lg md:text-xl text-white ml-[6px]">About</h3>
                <hr className="w-[50px] md:w-[70px] text-[#575757]" />
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl text-white font-bold leading-tight"
              >
                Passion for <br /> Digital Innovation
              </motion.h1>
            </div>

            {/* Floating bolt (independent looping animation) */}
            <motion.div
              animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                width={60}
                height={60}
                src="/bolt.svg"
                alt="bolt"
                className="sm:w-[100px] sm:h-[100px]"
              />
            </motion.div>
          </motion.div>

          {/* Content */}
          <div className="mt-16 flex flex-col xl:flex-row justify-between gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              className="relative w-full sm:w-[400px] md:w-[500px] h-[350px] sm:h-[400px] md:h-[450px] flex-shrink-0"
              variants={itemVariants}
            >
              <Image
                fill
                src={tahir}
                alt="tahir"
                className="rounded-t-2xl shadow-md object-cover 
                  [mask-image:linear-gradient(to_bottom,black_85%,transparent)] 
                  [mask-repeat:no-repeat] [mask-size:100%_100%]"
              />
            </motion.div>

            {/* Text + Stats */}
            <motion.div className="text-[rgb(210,210,210)] flex-1" variants={itemVariants}>
              <motion.div className="text-base sm:text-lg max-w-full md:max-w-[600px]" variants={itemVariants}>
                <p className="mb-6 md:mb-10">
                  My journey began with a simple yet powerful idea: to revolutionise
                  the digital landscape through innovative solutions and exceptional
                  creativity.
                </p>
                <p>
                  Driven by a passion for design and technology, I set out to create
                  unique digital experiences that make an impact in online.
                </p>
              </motion.div>

              {/* Stats block (each stat is a child so it participates in the stagger) */}
              <motion.div
                className="mt-10 flex flex-col sm:flex-row items-center sm:justify-start gap-8 sm:gap-12 text-white text-center sm:text-left"
                variants={itemVariants}
              >
                <motion.div variants={itemVariants}>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#C9F31D]">
                    {inView && <CountUp end={100} duration={3} suffix="+" />}
                  </h3>
                  <p className="text-sm text-gray-300">Projects Completed</p>
                </motion.div>

                <div className="hidden sm:block h-8 w-px bg-gray-700" />

                <motion.div variants={itemVariants}>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#C9F31D]">
                    {inView && <CountUp end={145} duration={3} suffix="+" />}
                  </h3>
                  <p className="text-sm text-gray-300">Happy Clients</p>
                </motion.div>

                <div className="hidden sm:block h-8 w-px bg-gray-700" />

                <motion.div variants={itemVariants}>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#C9F31D]">
                    {inView && <CountUp end={259} duration={3} separator="," />}
                  </h3>
                  <p className="text-sm text-gray-300">Cups of Coffee</p>
                </motion.div>
              </motion.div>

              {/* Button */}
              <motion.div
                className="py-10 flex justify-center items-center md:justify-start"
                variants={itemVariants}
              >
                <Link href="/about">
                  <Button text="About me" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
