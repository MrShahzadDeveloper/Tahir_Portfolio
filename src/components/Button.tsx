"use client";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  fillColor?: string; // default green
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  fillColor = "#C9F31D",
}) => {
  return (
    <button
      onClick={onClick}
      className="relative flex items-center justify-center w-30 h-30 rounded-full border border-gray-500 overflow-hidden group transition-all duration-300"
    >
      {/* Background dot that expands on hover */}
      <span
        className="absolute bottom-0 left-0 w-full h-full rounded-full scale-20 group-hover:scale-100 transition-transform duration-500 origin-bottom-left"
        style={{ backgroundColor: fillColor }}
      ></span>

      {/* Small dot preview before hover */}
      <span
        className="absolute bottom-0 left-0 w-10 h-10 rounded-full"
        style={{ backgroundColor: fillColor }}
      ></span>

      {/* Text + Fixed Icon */}
      <span className="relative z-10 flex items-center gap-2 text-white group-hover:text-black font-semibold">
        {text}
        <FiArrowUpRight />
      </span>
    </button>
  );
};

export default Button;
