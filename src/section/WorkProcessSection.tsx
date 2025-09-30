import Image from 'next/image'
import React from 'react'

import { workProcess } from "@/data";

const WorkProcessSection = () => {
  return (
    <div>
      <section className="py-16 sm:py-20 bg-black text-white  px-4 sm:px-8 md:px-16 xl:px-32">
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3">
            <p className="text-lg font-semibold">My Linear Process</p>
            <hr className="w-[80px] border-[#575757]" />
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-[70px] xl:text-[100px] font-bold mt-4">
            Work Process
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {workProcess.map((item, index) => (
            <div
              key={index}
              className="border border-[#2c2c2c] px-6 py-8 md:py-16 rounded-xl transition-all duration-300 
                         hover:shadow-lg sm:hover:border-transparent"
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={50}
                height={50}
                className="w-10 h-10 md:w-14 md:h-14 lg:w-[50px] lg:h-[50px] mb-4"
              />
              <h3 className="text-lg md:text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-sm md:text-base text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default WorkProcessSection
