import Button from '@/components/Button'
import React from 'react'

const ContactSection = () => {
  return (
    <div className="px-4 md:px-16 lg:px-32 my-20 flex flex-col justify-center items-center text-white text-center">
      {/* Heading */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl xl:text-[10rem] font-extrabold text-[#C9F31D] leading-tight">
        Let’s Talk
      </h1>

      {/* Email */}
      <p className="text-lg sm:text-2xl md:text-4xl lg:text-6xl xl:text-8xl font-bold mt-4 break-words">
        tm9211ya@gmail.com
      </p>

      {/* Button */}
      <div className="py-10">
        <Button text="Contact Me" />
      </div>
    </div>
  )
}

export default ContactSection
