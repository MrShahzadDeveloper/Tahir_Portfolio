"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import comma from "../../public/comma.svg";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

import client1 from "../assets/c1.jpeg";
import client2 from "../assets/c2.jpeg";
import client3 from "../assets/c3.png";
import client4 from "../assets/c4.png";
import client5 from "../assets/c5.jpeg";

// ✅ Type for a single testimonial
type Testimonial = {
  text: string;
  name: string;
  role: string;
  image: StaticImageData;
};

// ✅ Testimonial data
const testimonials: Testimonial[] = [
  {
    text: "Working with Tahir on the Hā Health AI app was an amazing experience. He perfectly captured our vision of combining wellness, nutrition, and mindfulness into a seamless app. The design and functionality exceeded our expectations.",
    name: "Sarah Mitchell",
    role: "Founder, Hā Labs",
    image: client3,
  },
  {
    text: "Tahir built the UNA Charger app for our college tournaments, and it has completely changed how we organize events. From team registrations to match updates, everything runs smoothly now. His dedication made this project a huge success.",
    name: "Matthew Rhodes",
    role: "Founder of Nivy Techenologies",
    image: client4,
  },
  {
    text: "Vibe Matching was a challenging idea, but Tahir delivered it brilliantly. The interactive features and clean UI make connecting people seamless. His creativity and technical expertise really shone through.",
    name: "Muhammad Naeem Maqsood",
    role: "CTO & GenAI Specialist",
    image: client1,
  },
  {
    text: "The Barbr app turned out exactly how we imagined—simple, intuitive, and powerful for managing barber appointments. Tahir’s ability to translate our business needs into a user-friendly app was outstanding.",
    name: "Reef Ray",
    role: "Founder & CEO @Barbr",
    image: client5,
  },
  {
    text: "With the Digifoot scanner app, Tahir helped us bring advanced 3D foot scanning technology to our customers. The integration with our webshop was flawless, and the app performs with precision. A real game-changer for our business.",
    name: "Shehryar Malik",
    role: "AI-Powered Products",
    image: client2,
  },
];

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

// ✅ Strongly typed card
const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="flex flex-col md:flex-row justify-between items-center gap-10"
    >
      {/* Left side - text */}
      <motion.div variants={containerVariants} className="max-w-2xl">
        {/* Floating comma */}
        <motion.div
          animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
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
          {testimonial.text}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-6">
          <p className="font-bold text-lg">{testimonial.name}</p>
          <p className="text-gray-400 text-sm">{testimonial.role}</p>
        </motion.div>
      </motion.div>

      {/* Right side - image */}
      <motion.div variants={fadeUp} className="shrink-0">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={300}
          height={350}
          className="rounded-lg rotate-0 md:rotate-3 shadow-lg"
        />
      </motion.div>
    </motion.div>
  );
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
        {testimonials.map((t, index) => (
          <TestimonialCard key={index} testimonial={t} />
        ))}
      </div>
    </section>
  );
};

export default TestmonialSection;
