import Circle from '@/components/Circle'
import ProjectDetailCircle from '@/components/ProjectDetailCircle'
import Image from 'next/image'
import React from 'react'

const AboutHeroSection = () => {
  return (
    <div>
      <section className="flex flex-col justify-center md:items-center relative min-h-[60vh] bg-[url('/bg-grid.svg')] bg-no-repeat bg-left bg-contain ">
        {/* Circle on the left */}
        <div className="absolute left-[-30px] top-[95%] -translate-y-1/2 -z-10 pointer-events-none">
          <Circle />
        </div>

       {/* Content */}
        <div className="relative z-10 px-4 sm:px-8 md:px-16 xl:px-32">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center gap-3 sm:gap-5 mb-4">
            <h3 className="font-bold text-lg sm:text-xl text-white md:text-center sm:text-left">
              About Me
            </h3>
            <hr className="hidden sm:block w-[80px] border-[#575757]" />
          </div>
          {/* Project */}
          <div className="flex flex-col md:flex-row ">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-end sm:gap-6 mb-5">
                <h1 className="text-6xl lg:text-[100px] text-white font-bold uppercase leading-none">
                  Tahir
                </h1>
              </div>

              {/* Details */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                <Image
                  width={350}
                  height={80}
                  className="w-56 h-14 sm:w-40 sm:h-10 md:w-60 md:h-14 lg:w-[350px] lg:h-[80px] mt-4 sm:mt-0"
                  src="/rings.svg"
                  alt="rings"
                />
                <h1 className="text-6xl lg:text-[100px] text-white font-bold uppercase leading-none">
                  Mehmood
                </h1>
              </div>
            </div>
            <div className="mt-20 md:mt-0">
              <ProjectDetailCircle />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutHeroSection
