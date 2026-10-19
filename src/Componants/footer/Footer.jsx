
import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaHeart,
  FaArrowUp,
  FaCode,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Resume", href: "#resume" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Vijaykumar7055",
      icon: <FaGithub />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/",
      icon: <FaLinkedinIn />,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/",
      icon: <FaFacebookF />,
    },
    {
      name: "Email",
      href: "mailto:",
      icon: <MdEmail />,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-emerald-500/20 bg-[#0B0F14] py-14 text-gray-100">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-24 top-10 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 pb-6 pt-14 sm:px-8 lg:px-12">
        {/* Main footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">

          {/* Brand section */}
          <div className="sm:col-span-2 lg:col-span-2">
            <a
              href="#home"
              className="inline-flex items-center gap-3"
              aria-label="Back to home"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500 text-xl font-bold text-white shadow-lg shadow-emerald-500/20">
                V
              </span>

              <span className="text-2xl font-bold tracking-wide">
                Vijay<span className="text-emerald-500">.</span>
              </span>
            </a>

            <h2 className="mt-6 max-w-md text-2xl font-bold leading-snug sm:text-3xl">
              Turning ideas into{" "}
              <span className="text-emerald-500">digital experiences.</span>
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
              I'm Vijay Kumar, a developer passionate about building
              responsive websites, modern user interfaces, and useful
              web applications with clean and maintainable code.
            </p>

            {/* Skills */}
            <div className="mt-5 flex flex-wrap gap-2">
              {["React.js", "JavaScript", "Java", "Tailwind CSS", "MERN Stack"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5 text-xs font-medium text-emerald-700 transition hover:bg-emerald-500 hover:text-white dark:text-emerald-300"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-5 text-lg font-bold">
              Quick Links
              <span className="ml-2 text-emerald-500">—</span>
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-gray-600 transition hover:translate-x-1 hover:text-emerald-500 dark:text-gray-400"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 opacity-60 transition group-hover:opacity-100" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-5 text-lg font-bold">
              Let's Connect
              <span className="ml-2 text-emerald-500">—</span>
            </h3>

            <p className="mb-5 text-sm leading-6 text-gray-600 dark:text-gray-400">
              Have a project or opportunity in mind? Let's connect and
              build something meaningful.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition duration-300 hover:-translate-y-1 hover:bg-emerald-600"
            >
              Let's Talk <FaCode />
            </a>

            {/* Social icons */}
            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.name === "Email" ? undefined : "_blank"}
                  rel={social.name === "Email" ? undefined : "noreferrer"}
                  aria-label={social.name}
                  title={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 transition duration-300 hover:-translate-y-1 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white dark:border-gray-700 dark:bg-[#141c24] dark:text-gray-300"
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

        {/* Bottom footer */}
        <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear}{" "}
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">
              Vijay Kumar
            </span>
            . All rights reserved.
          </p>

          <p className="flex flex-wrap items-center justify-center gap-1 text-sm text-gray-600 dark:text-gray-400">
            Crafted with <FaHeart className="mx-1 text-emerald-500" /> and{" "}
            <FaCode className="mx-1 text-emerald-500" /> by Vijay
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            title="Back to top"
            className="group flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 transition duration-300 hover:-translate-y-1 hover:bg-emerald-500 hover:text-white dark:text-emerald-400"
          >
            <FaArrowUp className="transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
