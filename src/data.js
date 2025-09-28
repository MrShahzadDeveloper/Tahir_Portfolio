import BullDogs from "./assets/BullDogs.png"
import barbr from "./assets/barbr.png"
import chargers from "./assets/chargers.png"
import haApp from "./assets/haApp.png"
import lions from "./assets/loins.png"

import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

import client1 from "./assets/c1.png";
import client2 from "./assets/c2.png";
import client3 from "./assets/c3.png";

export const services = [
  {
    id: 1,
    title: "App Development",
    details:
      "In today’s digital-first world, mobile apps are essential for connecting with customers and enhancing business growth. Our app development services cover everything from idea validation and UI/UX design to development and deployment. We specialize in building cross-platform mobile applications using React Native and Expo, allowing you to reach both iOS and Android users with a single, cost-effective solution. Our apps are designed to be fast, reliable, and user-friendly, offering features like push notifications, secure authentication, real-time updates, and seamless API integrations. Whether you need an e-commerce app, a booking system, or a custom solution for your business, we deliver apps that provide exceptional performance, scalability, and a delightful user experience.",
  },
  {
    id: 2,
    title: "Web Development",
    details:
      "Our web development services focus on creating fast, secure, and modern websites tailored to your unique business needs. We specialize in building responsive websites that adapt seamlessly to any device, ensuring an excellent user experience across desktops, tablets, and mobile phones. Using cutting-edge technologies like React, Next.js, and Tailwind CSS, we develop scalable web solutions that not only look great but also perform exceptionally well. From simple landing pages to complex web applications, we emphasize clean code, optimized performance, and SEO-friendly structures to help your business stand out and grow online.",
  },
  {
    id: 3,
    title: "Branding & Identity",
    details:
      "Your brand is more than just a logo — it’s the personality and story of your business. Our branding and identity services help you create a strong and lasting impression on your audience. We design logos, color palettes, typography, and complete brand guidelines that align with your company’s vision and values. Beyond visuals, we also focus on shaping your brand’s tone and strategy to ensure consistency across all platforms. Whether you’re launching a new business or refreshing an existing identity, we craft designs and brand assets that not only look professional but also build trust, recognition, and loyalty with your audience.",
  },
  {
    id: 4,
    title: "UX/UI Design",
    details:
      "We believe that great design goes beyond aesthetics — it’s about how users feel when interacting with your product. Our UX/UI design services aim to create intuitive, user-friendly, and visually engaging interfaces that enhance the overall digital experience. We conduct in-depth research and user testing to understand your audience’s needs and behaviors, then design interfaces that are both beautiful and functional. From wireframes and prototypes to final polished designs, we focus on clarity, accessibility, and seamless navigation. The result is a design that not only delights users but also drives higher engagement, satisfaction, and conversions.",
  },
];

export const projects = [
  {
    slug: "ha",
    title: "Ha Health Ai",
    category: "Technology",
    para1:
      "We believe a brand goes beyond a logo or tagline—it’s the core of your business. Our Branding & Identity services help you build and express your unique brand personality, ensuring it connects with your audience and makes an impact in your market. We start with a solid strategy, working with you to understand your business goals, target audience, and positioning. Together, we define your mission, vision, and values, creating a clear path for your brand’s success.",
    para2:
      "Meeting project deadlines is a top priority. We understand the importance of timely delivery and have established a comprehensive approach to ensure that all projects.",
    para3:
      "A successful brand starts with a clear strategy. We work closely with you to understand your business goals, target audience, and market positioning. Together, we define your brand's mission, vision, and values, creating a solid foundation for all your branding efforts.",
    description: "A modern portfolio site built with Next.js and TailwindCSS.",
    li1: "Analytics & Strategy",
    li2: "UX/UI Design",
    li3: "Branding & Identity",
    li4: "Web Development",
    image: haApp,
    info: {
      client: "Kazi Erfan",
      category: "Technology",
      completedOn: "July 30, 2024",
      website: "www.pentaclay.com",
    },
    socials: [
      { name: "Facebook", icon: FaFacebookF, link: "https://facebook.com/pentaclay" },
      { name: "Twitter", icon: FaXTwitter, link: "https://twitter.com/pentaclay" },
      { name: "Instagram", icon: FaInstagram, link: "https://instagram.com/pentaclay" },
      { name: "YouTube", icon: FaYoutube, link: "https://youtube.com/@pentaclay" },
    ],
  },
  {
    slug: "barbr",
    title: "Barbr",
    category: "Technology",
    para1:
      "We believe a brand goes beyond a logo or tagline—it’s the core of your business. Our Branding & Identity services help you build and express your unique brand personality, ensuring it connects with your audience and makes an impact in your market. We start with a solid strategy, working with you to understand your business goals, target audience, and positioning. Together, we define your mission, vision, and values, creating a clear path for your brand’s success.",
    para2:
      "Meeting project deadlines is a top priority. We understand the importance of timely delivery and have established a comprehensive approach to ensure that all projects.",
    para3:
      "A successful brand starts with a clear strategy. We work closely with you to understand your business goals, target audience, and market positioning. Together, we define your brand's mission, vision, and values, creating a solid foundation for all your branding efforts.",
    description: "A modern portfolio site built with Next.js and TailwindCSS.",
    li1: "Analytics & Strategy",
    li2: "UX/UI Design",
    li3: "Branding & Identity",
    li4: "Web Development",
    image: barbr,
    info: {
      client: "Kazi Erfan",
      category: "Technology",
      completedOn: "July 30, 2024",
      website: "www.pentaclay.com",
    },
    socials: [
      { name: "Facebook", icon: FaFacebookF, link: "https://facebook.com/pentaclay" },
      { name: "Twitter", icon: FaXTwitter, link: "https://twitter.com/pentaclay" },
      { name: "Instagram", icon: FaInstagram, link: "https://instagram.com/pentaclay" },
      { name: "YouTube", icon: FaYoutube, link: "https://youtube.com/@pentaclay" },
    ],
  },
  {
    slug: "bulldogs",
    title: "BullDogs",
    category: "Technology",
    para1:
      "We believe a brand goes beyond a logo or tagline—it’s the core of your business. Our Branding & Identity services help you build and express your unique brand personality, ensuring it connects with your audience and makes an impact in your market. We start with a solid strategy, working with you to understand your business goals, target audience, and positioning. Together, we define your mission, vision, and values, creating a clear path for your brand’s success.",
    para2:
      "Meeting project deadlines is a top priority. We understand the importance of timely delivery and have established a comprehensive approach to ensure that all projects.",
    para3:
      "A successful brand starts with a clear strategy. We work closely with you to understand your business goals, target audience, and market positioning. Together, we define your brand's mission, vision, and values, creating a solid foundation for all your branding efforts.",
    description: "A modern portfolio site built with Next.js and TailwindCSS.",
    li1: "Analytics & Strategy",
    li2: "UX/UI Design",
    li3: "Branding & Identity",
    li4: "Web Development",
    image: BullDogs,
    info: {
      client: "Kazi Erfan",
      category: "Technology",
      completedOn: "July 30, 2024",
      website: "www.pentaclay.com",
    },
    socials: [
      { name: "Facebook", icon: FaFacebookF, link: "https://facebook.com/pentaclay" },
      { name: "Twitter", icon: FaXTwitter, link: "https://twitter.com/pentaclay" },
      { name: "Instagram", icon: FaInstagram, link: "https://instagram.com/pentaclay" },
      { name: "YouTube", icon: FaYoutube, link: "https://youtube.com/@pentaclay" },
    ],
  },
  {
    slug: "chargers",
    title: "Chargers",
    category: "Technology",
    para1:
      "We believe a brand goes beyond a logo or tagline—it’s the core of your business. Our Branding & Identity services help you build and express your unique brand personality, ensuring it connects with your audience and makes an impact in your market. We start with a solid strategy, working with you to understand your business goals, target audience, and positioning. Together, we define your mission, vision, and values, creating a clear path for your brand’s success.",
    para2:
      "Meeting project deadlines is a top priority. We understand the importance of timely delivery and have established a comprehensive approach to ensure that all projects.",
    para3:
      "A successful brand starts with a clear strategy. We work closely with you to understand your business goals, target audience, and market positioning. Together, we define your brand's mission, vision, and values, creating a solid foundation for all your branding efforts.",
    description: "A modern portfolio site built with Next.js and TailwindCSS.",
    li1: "Analytics & Strategy",
    li2: "UX/UI Design",
    li3: "Branding & Identity",
    li4: "Web Development",
    image: chargers,
    info: {
      client: "Kazi Erfan",
      category: "Technology",
      completedOn: "July 30, 2024",
      website: "www.pentaclay.com",
    },
    socials: [
      { name: "Facebook", icon: FaFacebookF, link: "https://facebook.com/pentaclay" },
      { name: "Twitter", icon: FaXTwitter, link: "https://twitter.com/pentaclay" },
      { name: "Instagram", icon: FaInstagram, link: "https://instagram.com/pentaclay" },
      { name: "YouTube", icon: FaYoutube, link: "https://youtube.com/@pentaclay" },
    ],
  },
  {
    slug: "lions",
    title: "Lions",
    category: "Technology",
    para1:
      "We believe a brand goes beyond a logo or tagline—it’s the core of your business. Our Branding & Identity services help you build and express your unique brand personality, ensuring it connects with your audience and makes an impact in your market. We start with a solid strategy, working with you to understand your business goals, target audience, and positioning. Together, we define your mission, vision, and values, creating a clear path for your brand’s success.",
    para2:
      "Meeting project deadlines is a top priority. We understand the importance of timely delivery and have established a comprehensive approach to ensure that all projects.",
    para3:
      "A successful brand starts with a clear strategy. We work closely with you to understand your business goals, target audience, and market positioning. Together, we define your brand's mission, vision, and values, creating a solid foundation for all your branding efforts.",
    description: "A modern portfolio site built with Next.js and TailwindCSS.",
    li1: "Analytics & Strategy",
    li2: "UX/UI Design",
    li3: "Branding & Identity",
    li4: "Web Development",
    image: lions,
    info: {
      client: "Kazi Erfan",
      category: "Technology",
      completedOn: "July 30, 2024",
      website: "www.pentaclay.com",
    },
    socials: [
      { name: "Facebook", icon: FaFacebookF, link: "https://facebook.com/pentaclay" },
      { name: "Twitter", icon: FaXTwitter, link: "https://twitter.com/pentaclay" },
      { name: "Instagram", icon: FaInstagram, link: "https://instagram.com/pentaclay" },
      { name: "YouTube", icon: FaYoutube, link: "https://youtube.com/@pentaclay" },
    ],
  },
];

export const projectFaqs = [
  {
    question: "What is the typical timeline for a project?",
    answer:
      "Meeting project deadlines is a top priority. We understand the importance of timely delivery and have established a comprehensive approach to ensure that all projects.",
  },
  {
    question: "How do you handle website maintenance and updates?",
    answer:
      "We provide ongoing website maintenance and updates to ensure security, performance, and feature enhancements as your business grows.",
  },
  {
    question: "What strategies do you use for digital marketing?",
    answer:
      "We use SEO, social media campaigns, PPC, and content marketing strategies tailored to your business goals.",
  },
  {
    question: "What payment methods do you accept?!",
    answer:
      "We accept all major credit cards, PayPal, and bank transfers depending on your preference.",
  },
];



export const testimonials = [
  {
    text: "Working with Tahir Mehmood is a fantastic experience. He truly understood our vision and turned our dream home into a reality. The attention to detail and dedication were beyond my imagination",
    name: "Cameron Williamson",
    role: "CEO, ISHKON",
    image: client1,
  },
  {
    text: "Collaborating with Tahir Mehmood has been nothing short of incredible. He listened carefully to our requirements and delivered results that exceeded our expectations. The professionalism and creativity shown throughout the process made the entire journey smooth and enjoyable.",
    name: "Jenny Wilson",
    role: "Marketing Head, Globex",
    image: client2,
  },
  {
    text: "Tahir Mehmood transformed our ideas into something extraordinary. The level of commitment and precision he brought to the project was outstanding. Every detail was carefully handled, and the final outcome was more than we could have hoped for.",
    name: "Robert Fox",
    role: "Founder, Starto",
    image: client3,
  },
];

export const workProcess = [
    {
      icon: "/workProcess1.svg",
      title: "Discovery & Research",
      description:
        "We start by getting to know your business, your goals, and your target audience. Through in-depth research and analysis, we gather valuable insights that inform.",
    },
    {
      icon: "/workProcess2.avif",
      title: "Strategy & Planning",
      description:
        "Based on our research, we develop a comprehensive strategy and detailed project plan. This includes setting clear goals, defining key performance indicators.",
    },
    {
      icon: "/workProcess3.svg",
      title: "Implementation & Deploy",
      description:
        "We start by delivering the results and taking feedback. Through in-depth research and analysis, we gather valuable feedback that shapes the output.",
    },
  ];
