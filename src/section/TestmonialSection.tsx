"use client";
import React from "react";
import Image from "next/image";
import { testimonials } from "@/data";
import comma from "../../public/comma.svg";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Parent container (for staggered children)
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const TestmonialSection = () => {
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="px-4 md:px-16 xl:px-32 py-16 bg-black text-white">
      {/* Heading */}
      <motion.div
        ref={headingRef}
        variants={containerVariants}
        initial="hidden"
        animate={headingInView ? "visible" : "hidden"}
        className="mb-12"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-3">
          <p className="text-lg font-semibold">Testimonials</p>
          <hr className="w-[80px] border-[#575757]" />
        </motion.div>
        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-5xl lg:text-[70px] font-bold mt-3"
        >
          What my clients say
        </motion.h2>
      </motion.div>

      {/* Content */}
      <div className="flex flex-col gap-20">
        {testimonials.map((t, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.2,
          });

          return (
            <motion.div
              key={index}
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex flex-col md:flex-row justify-between items-center gap-10"
            >
              {/* Left side - text */}
              <motion.div
                variants={containerVariants}
                className="max-w-2xl"
              >
                {/* Floating comma */}
                <motion.div
                  animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <motion.div variants={fadeUp}>
                    <Image
                      src={comma}
                      alt="comma"
                      width={80}
                      height={80}
                      className="mb-6 text-[#C6FF00]"
                    />
                  </motion.div>
                </motion.div>

                <motion.p
                  variants={fadeUp}
                  className="text-xl font-semibold leading-relaxed"
                >
                  {t.text}
                </motion.p>

                <motion.div variants={fadeUp} className="mt-6">
                  <p className="font-bold text-lg">{t.name}</p>
                  <p className="text-gray-400 text-sm">{t.role}</p>
                </motion.div>
              </motion.div>

              {/* Right side - image */}
              <motion.div
                variants={fadeUp}
                className="shrink-0"
              >
                <Image
                  src={t.image}
                  alt={t.name}
                  width={300}
                  height={350}
                  className="rounded-lg rotate-0 md:rotate-3 shadow-lg"
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default TestmonialSection;
