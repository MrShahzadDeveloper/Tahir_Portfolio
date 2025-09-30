"use client";

import { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { projectFaqs } from "@/data"; // ✅ Import shared FAQs

export default function ProjectDetailAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-2xl space-y-4">
        {projectFaqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`border-b border-gray-700 pb-4  rounded-lg transition-colors ${
                isOpen ? "bg-[#0f0f0f]" : ""
              }`}
            >
              {/* Question Row */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left gap-x-6"
              >
                <h3
                  className={`text-xl font-semibold transition-colors ${
                    isOpen ? "text-[#C9F31D]" : "text-white"
                  }`}
                >
                  {faq.question}
                </h3>

                {/* ✅ Animated Plus/X */}
                <motion.span
                  animate={{ rotate: isOpen ? -90 : 90, scale: isOpen ? 1 : 1.1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  className="text-[#C9F31D] text-2xl flex items-center justify-center w-7 h-7"
                >
                  {isOpen ? <FiX /> : <FiPlus />}
                </motion.span>
              </button>

              {/* Answer with slide-down animation */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.p
                    key="content"
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="mt-3 text-gray-300 overflow-hidden"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
