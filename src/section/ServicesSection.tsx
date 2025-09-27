"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import {services} from "../data"


const ServicesSection = () => {
  const [openService, setOpenService] = useState<number | null>(null);

  const toggleService = (id: number) => {
    setOpenService(openService === id ? null : id);
  };

  return (
    <section className="px-4 md:px-16 lg:px-32 py-16 bg-black text-white">
      {/* Heading */}
      <div className="mb-10">
        <div className="flex items-center gap-3">
        <p className="text-lg font-semibold">Services</p>
         <hr className="w-[80px] text-[#575757]" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold">Expertise Solutions</h2>
      </div>

      {/* Services List */}
      <div className="space-y-6">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="border-b border-gray-700 pb-4 cursor-pointer"
          >
            {/* Title Row */}
            <div
              className="flex justify-between items-center"
              onClick={() => toggleService(service.id)}
            >
              <h3 className="text-lg md:text-xl font-semibold flex items-center gap-3">
                <span className="text-gray-400">
                  {String(service.id).padStart(2, "0")}.
                </span>
                {service.title}
              </h3>

              {/* Arrow Animation */}
              <motion.div
                animate={{ rotate: openService === service.id ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center"
              >
                <FiArrowUpRight size={18} />
              </motion.div>
            </div>

            {/* Dropdown Animation */}
            <motion.div
              initial={false}
              animate={{
                height: openService === service.id ? "auto" : 0,
                opacity: openService === service.id ? 1 : 0,
              }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <p className="mt-4 ml-9 text-gray-300 text-sm md:text-base">
                {service.details}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
