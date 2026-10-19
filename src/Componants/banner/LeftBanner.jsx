
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiReact,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { motion } from "framer-motion";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Software Developer.",
      "Full Stack Developer.",
      "Frontend Developer.",
      "React.js Developer.",
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 30,
    delaySpeed: 1800,
  });

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/Vijaykumar7055",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/",
    },
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/",
    },
  ];

  const skills = [
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "React", icon: <SiReact /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
  ];

  return (
    <div className="w-full flex flex-col gap-10 lg:gap-12">
      {/* Introduction */}
      <motion.div
        className="flex flex-col gap-5"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm md:text-base font-semibold tracking-[0.25em] text-emerald-700 dark:text-emerald-400 uppercase">
          Welcome to my portfolio
        </p>

        <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight text-[#17251F] dark:text-[#E5F5EC]">
          Hi, I'm{" "}
          <span className="text-emerald-600 dark:text-emerald-400">
            Vijay Kumar
          </span>
        </h1>

        <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold leading-snug text-[#34483D] dark:text-[#D1E7DA]">
          A{" "}
          <span className="text-emerald-600 dark:text-emerald-400">
            {text}
          </span>
          <Cursor
            cursorBlinking={true}
            cursorStyle="|"
            cursorColor="#10b981"
          />
        </h2>

        <p className="max-w-2xl text-base md:text-lg leading-8 tracking-wide text-[#52645A] dark:text-[#A5B8AD]">
          I'm a passionate developer with a strong interest in building
          modern, responsive, and user-friendly web applications. I work
          with React.js, JavaScript, Java, and backend technologies to
          turn ideas into practical digital solutions. I'm always eager
          to learn new technologies and improve my development skills.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="#resume"
            className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700"
          >
            Explore My Resume
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl border border-emerald-600/40 px-6 py-3 font-semibold text-emerald-700 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-50 dark:text-emerald-400 dark:hover:bg-emerald-950/40"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Social Links and Skills */}
      <div className="flex flex-col gap-8 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between">
        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#52645A] dark:text-[#A5B8AD]">
            Find me on
          </h3>

          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
                className="bannerIcon"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#52645A] dark:text-[#A5B8AD]">
            Technologies I use
          </h3>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className="bannerIcon"
                title={skill.name}
                aria-label={skill.name}
              >
                {skill.icon}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Resume Download */}
      <motion.div
        className="flex justify-start"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        <a
          href="/vijay_web2024.pdf"
          download="Vijay_Kumar_Resume.pdf"
          className="inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-7 py-4 font-bold text-emerald-700 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-600 hover:text-white dark:text-emerald-400 dark:hover:text-white"
        >
          Download Resume
          <span aria-hidden="true">↓</span>
        </a>
      </motion.div>
    </div>
  );
};

export default LeftBanner;
