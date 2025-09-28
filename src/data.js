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
    title: "Ha Health AI",
    category: "Technology",
    para1:
      "Hā Health is your AI-powered wellness companion, built on evidence-based nutrition and holistic health principles. The app creates affordable meal plans, tracks exercise, and provides mindfulness tools tailored to your lifestyle.",
    para2:
      "Whether it’s managing a diet on a budget, staying consistent with workouts, or practicing meditation, Hā adapts to your personal needs. It delivers actionable, AI-personalised insights backed by science and dietitian best practices.",
    para3:
      "Hā means breath, energy, vitality—empowering you and your family to live healthier, longer lives with smart, adaptive guidance and real-time progress tracking.",
    description:
      "An AI-powered health and wellness app focused on nutrition, fitness, and mindfulness.",
    li1: "AI Meal Planning",
    li2: "Fitness & Mindfulness Tools",
    li3: "Affordable Nutrition Guidance",
    li4: "Progress Tracking & Insights",
    image: haApp,
    info: {
      client: "Hā Labs",
      category: "HealthTech",
      completedOn: "August 12, 2024",
      website: "www.hahealth.ai",
    },
    socials: [
      { name: "Facebook", icon: FaFacebookF, link: "https://facebook.com/hahealth" },
      { name: "Twitter", icon: FaXTwitter, link: "https://twitter.com/hahealth" },
      { name: "Instagram", icon: FaInstagram, link: "https://instagram.com/hahealth" },
      { name: "YouTube", icon: FaYoutube, link: "https://youtube.com/@hahealth" },
    ],
  },
  {
    slug: "barbr",
    title: "Barbr",
    category: "Technology",
    para1:
      "Barbr is a smart booking and business growth platform designed specifically for barbers. It helps barbers attract new clients, manage schedules, and grow their brand effortlessly.",
    para2:
      "With a unique booking link and customizable profile, barbers can save time while giving clients a seamless booking experience. Automated reminders and simple calendar management reduce no-shows and keep appointments organized.",
    para3:
      "Barbr empowers barbers to focus on their craft while unlocking their full earning potential, all while building stronger client relationships.",
    description:
      "A barber-focused platform for booking, client management, and brand growth.",
    li1: "Smart Scheduling",
    li2: "Client Management",
    li3: "Brand Growth Tools",
    li4: "Unique Booking Link",
    image: barbr,
    info: {
      client: "Barbr Inc.",
      category: "Business Tech",
      completedOn: "September 20, 2024",
      website: "www.barbrapp.com",
    },
    socials: [
      { name: "Facebook", icon: FaFacebookF, link: "https://facebook.com/barbrapp" },
      { name: "Twitter", icon: FaXTwitter, link: "https://twitter.com/barbrapp" },
      { name: "Instagram", icon: FaInstagram, link: "https://instagram.com/barbrapp" },
      { name: "YouTube", icon: FaYoutube, link: "https://youtube.com/@barbrapp" },
    ],
  },
  {
    slug: "bulldogs",
    title: "BullDogs",
    category: "Technology",
    para1:
      "BullDogs is a next-generation eSports and gaming community platform that connects players, fans, and teams. It combines live streaming, competitive match scheduling, and fan engagement into one sleek hub.",
    para2:
      "Players can showcase their talent, track stats, and gain visibility, while fans get access to highlights, exclusive content, and live chat interactions with their favorite gamers.",
    para3:
      "With its gamified approach and modern design, BullDogs is built to push gaming communities forward into the digital future.",
    description:
      "A modern eSports and gaming hub connecting players and fans with live features.",
    li1: "Live Streaming",
    li2: "Competitive Match Hub",
    li3: "Player Profiles",
    li4: "Fan Engagement Tools",
    image: BullDogs,
    info: {
      client: "BullDogs Gaming",
      category: "eSports",
      completedOn: "October 2, 2024",
      website: "www.bulldogsgaming.com",
    },
    socials: [
      { name: "Facebook", icon: FaFacebookF, link: "https://facebook.com/bulldogsgaming" },
      { name: "Twitter", icon: FaXTwitter, link: "https://twitter.com/bulldogsgaming" },
      { name: "Instagram", icon: FaInstagram, link: "https://instagram.com/bulldogsgaming" },
      { name: "YouTube", icon: FaYoutube, link: "https://youtube.com/@bulldogsgaming" },
    ],
  },
  {
    slug: "chargers",
    title: "Chargers",
    category: "Technology",
    para1:
      "Chargers is a clean-energy mobile app helping EV owners find, book, and pay for charging stations with ease. It’s designed for convenience, speed, and sustainability.",
    para2:
      "The app provides real-time availability, cost estimates, and route optimization to ensure drivers always know where their next charge is coming from.",
    para3:
      "By connecting EV drivers to charging infrastructure, Chargers supports the transition to greener, more efficient mobility worldwide.",
    description:
      "A smart EV charging app with booking, payments, and route optimization.",
    li1: "Real-time Station Availability",
    li2: "Seamless Payments",
    li3: "Route Optimization",
    li4: "Eco-friendly Mobility",
    image: chargers,
    info: {
      client: "ChargeNet",
      category: "CleanTech",
      completedOn: "August 29, 2024",
      website: "www.chargersapp.com",
    },
    socials: [
      { name: "Facebook", icon: FaFacebookF, link: "https://facebook.com/chargersapp" },
      { name: "Twitter", icon: FaXTwitter, link: "https://twitter.com/chargersapp" },
      { name: "Instagram", icon: FaInstagram, link: "https://instagram.com/chargersapp" },
      { name: "YouTube", icon: FaYoutube, link: "https://youtube.com/@chargersapp" },
    ],
  },
  {
    slug: "lions",
    title: "Lions",
    category: "Technology",
    para1:
      "Lions is an AI-driven social platform built for creative professionals. From designers to developers, it helps creators showcase portfolios, collaborate, and grow their networks.",
    para2:
      "The app intelligently recommends collaborations, events, and opportunities based on each user’s skills and career goals.",
    para3:
      "Lions empowers the creative community with tools that help professionals grow faster while staying inspired.",
    description:
      "A social collaboration platform for creative professionals and innovators.",
    li1: "Portfolio Showcasing",
    li2: "AI Collaboration Matching",
    li3: "Career Opportunities",
    li4: "Community Building",
    image: lions,
    info: {
      client: "Lions Network",
      category: "SocialTech",
      completedOn: "September 10, 2024",
      website: "www.lionsnetwork.com",
    },
    socials: [
      { name: "Facebook", icon: FaFacebookF, link: "https://facebook.com/lionsnetwork" },
      { name: "Twitter", icon: FaXTwitter, link: "https://twitter.com/lionsnetwork" },
      { name: "Instagram", icon: FaInstagram, link: "https://instagram.com/lionsnetwork" },
      { name: "YouTube", icon: FaYoutube, link: "https://youtube.com/@lionsnetwork" },
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
