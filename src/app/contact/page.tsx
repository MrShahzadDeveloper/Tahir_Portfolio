"use client";

import HeroHeader from "@/components/Header";
import ContactSection from "@/section/ContactSection";
import React, { useState } from "react";
import { FiPhone, FiMail, FiMapPin, FiArrowUpRight } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formsubmit.co/ajax/tm9211ya@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      }); 
      if (response.ok) {
        setStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
        toast.success("Message sent successfully!");
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      setStatus("error");
      toast.error("Failed to send message. Try again later.");
    } finally {
      setStatus("idle");
    }
  };

  return (
    <div className="bg-black text-white">
      <HeroHeader introText="Say Hi!" heading1="Contact" heading2="Today!" />

      <div className="px-4 md:px-16 xl:px-32 py-10">
        {/* Heading */}
        <div className="mb-10">
          <div className="flex items-center gap-3">
            <p className="text-lg font-semibold">Estimate Your Project</p>
            <hr className="w-[80px] text-[#575757]" />
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-8xl font-bold">
            Get in touch
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="bg-[#0c0c0c] p-10 rounded-md">
            <h2 className="text-xl font-bold mb-8">Company Info</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FiPhone className="text-[#C9F31D] text-2xl" />
                <p>(704) 555-0127</p>
              </div>
              <div className="flex items-center gap-4">
                <FiMail className="text-[#C9F31D] text-2xl" />
                <p>hello@pentaclay.com</p>
              </div>
              <div className="flex items-center gap-4">
                <FiMapPin className="text-[#C9F31D] text-2xl" />
                <p>8502 Preston Rd. Inglewood, Maine 98380</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-sm font-semibold">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gray-700 focus:outline-none py-2"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-semibold">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gray-700 focus:outline-none py-2"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-sm font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gray-700 focus:outline-none py-2"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-semibold">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gray-700 focus:outline-none py-2"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold">Message</label>
              <textarea
                name="message"
                placeholder="Write here...."
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-gray-700 focus:outline-none py-2"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="relative overflow-hidden px-6 py-3 font-semibold flex items-center gap-2 w-fit text-black bg-[#C9F31D] group transition"
            >
              <span className="relative z-10 text-sm flex items-center gap-2">
                {status === "sending" ? "Sending..." : "SEND MESSAGE"} <FiArrowUpRight />
              </span>
              <span className="absolute left-0 top-0 h-full w-0 bg-white transition-all duration-500 group-hover:w-full"></span>
            </button>
          </form>
        </div>
      </div>

      <ContactSection />

      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default Page;
