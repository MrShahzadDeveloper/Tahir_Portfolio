"use client";

import React, { useEffect, useState } from "react";
import { FaFacebookF, FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-black text-gray-300 px-4 md:px-16 lg:px-32 py-6 md:py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About Us */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">About Me</h3>
          <p className="text-sm leading-6">
            I’m a software engineer specializing in app and web development, dedicated to building scalable and user-friendly solutions. I transform ideas into impactful digital experiences.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {[FaFacebookF, FaXTwitter, FaInstagram, FaYoutube].map(
              (Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[#C9F31D] hover:text-black transition"
                >
                  <Icon size={16} />
                </a>
              )
            )}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Navigation</h3>
          <ul className="space-y-3 text-sm">
            {["Home", "About", "Services", "My Projects"].map(
              (item) => (
                <li key={item}>
                  <span
                    className="relative inline-block cursor-pointer transition text-gray-300 hover:text-[#C9F31D]
                               before:absolute before:left-0 before:bottom-0 before:h-[1px] before:bg-white
                               before:w-0 before:transition-all before:duration-300
                               hover:before:w-full"
                  >
                    {item}
                  </span>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Services</h3>
          <ul className="space-y-3 text-sm">
            {[
              "App Development",
              "Web Development",
              "UX/UI Design",
              "Branding & Identity",
              "Analytics & Strategy",
            ].map((service) => (
              <li key={service}>
                <span
                  className="relative inline-block cursor-pointer transition text-gray-300 hover:text-[#C9F31D]
                             before:absolute before:left-0 before:bottom-0 before:h-[1px] before:bg-white
                             before:w-0 before:transition-all before:duration-300
                             hover:before:w-full"
                >
                  {service}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Newsletter</h3>
          <div className="flex items-center border-b border-gray-700">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-2 py-3 w-full bg-transparent focus:outline-none text-sm placeholder-gray-500"
            />
            <button className="bg-[#C9F31D] text-black w-10 h-9 flex items-center justify-center rounded-full hover:opacity-90 transition -ml-2 cursor-pointer">
              <FaArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-xs text-gray-500 mt-12 border-t border-gray-800 pt-6">
        © {year ?? ""} Tahir Portfolio. All rights reserved.
      </div>
    </footer>
  );
}
