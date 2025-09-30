"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // ✅ to detect current route
import React, { useState, useEffect } from "react";
import { FiArrowUpRight, FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import logo from "../assets/logo2.png";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname(); // ✅ current page

  const navMenu = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
  ];

  const dropdownMenu = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
    { name: "Portfolio", href: "/portfolio" },
  ];

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  return (
    <nav className="w-full bg-black text-white px-4 md:px-16 xl:px-32 py-4 flex items-center justify-between relative z-50 shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-2 text-xl font-bold">
        <Image src={logo} alt="logo" width={50} height={50} />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
        {navMenu.map((item) => (
          <li key={item.name} className="relative cursor-pointer group">
            <Link
              href={item.href}
              className={`transition ${
                pathname === item.href ? "text-[#C9F31D]" : "hover:text-[#C9F31D]"
              }`}
            >
              {item.name}
            </Link>
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-[#C9F31D] transition-all duration-300 ${
                pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </li>
        ))}

        {/* Dropdown (hover on desktop) */}
        <li
          className="relative cursor-pointer group"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button className="flex items-center gap-1 hover:text-[#C9F31D] transition">
            All Pages{" "}
            <FiChevronDown
              className={`transition-transform duration-300 ${
                dropdownOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          <ul
            className={`absolute left-0 mt-2 bg-black border border-gray-700 rounded-md shadow-lg text-sm w-44 transition-all duration-300 overflow-hidden ${
              dropdownOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {dropdownMenu.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`block px-4 py-2 transition ${
                    pathname === item.href
                      ? "bg-[#C9F31D] text-black"
                      : "hover:bg-[#C9F31D] hover:text-black"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>

      {/* Contact Button (Desktop) */}
      <Link
        href="/contact"
        className="hidden md:flex ml-6 relative overflow-hidden px-5 py-2 font-semibold items-center gap-2 transition text-black bg-[#C9F31D] group"
      >
        <span className="relative z-10 text-sm flex items-center gap-2">
          CONTACT <FiArrowUpRight />
        </span>
        <span className="absolute left-0 top-0 h-full w-0 bg-white transition-all duration-500 group-hover:w-full"></span>
      </Link>

      {/* Hamburger (Mobile) */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden text-2xl z-50"
      >
        {mobileOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-black text-white flex flex-col items-center gap-6 pt-12 text-lg font-medium transition-all duration-500 md:hidden mb-5 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {navMenu.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`relative cursor-pointer group ${
              pathname === item.href ? "text-[#C9F31D]" : "hover:text-[#C9F31D]"
            }`}
          >
            {item.name}
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300 ${
                pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </Link>
        ))}

        {/* Mobile Dropdown (toggle by click) */}
        <div className="w-full flex flex-col items-center">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-1 hover:text-[#C9F31D] transition"
          >
            All Pages{" "}
            <FiChevronDown
              className={`transition-transform duration-300 ${
                dropdownOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          <ul
            className={`flex flex-col items-center gap-2 mt-2 transition-all duration-300 overflow-hidden ${
              dropdownOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {dropdownMenu.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`px-4 py-2 rounded-md transition block ${
                    pathname === item.href
                      ? "bg-[#C9F31D] text-black"
                      : "hover:bg-[#C9F31D] hover:text-black"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Button (Mobile) */}
        <Link
          href="/contact"
          className="relative overflow-hidden px-6 py-3 font-semibold flex items-center gap-2 rounded-sm transition text-black bg-[#C9F31D] group mb-4"
        >
          <span className="relative z-10 flex items-center gap-2">
            CONTACT <FiArrowUpRight />
          </span>
          <span className="absolute left-0 top-0 h-full w-0 bg-white transition-all duration-500 group-hover:w-full"></span>
        </Link>
      </div>
    </nav>
  );
}
