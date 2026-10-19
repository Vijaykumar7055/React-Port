
import React, { useState } from "react";
import { profile } from "../../assets/index";
import Title from "../Layouts/Title";
import {
  MdOutlineEmail,
  MdOutlineLocationOn,
  MdOutlineSend,
} from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim() || !service) {
      setStatus("Please fill in all fields before submitting.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    // Email delivery is not connected yet.
    // Connect a backend or email service before sending messages.
    setStatus(
      "Your form is validated, but email delivery is not configured yet."
    );
  };

  const inputClasses =
    "w-full rounded-xl border border-emerald-100 bg-[#F7FAF7] px-4 py-3 text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-[#26372F] dark:bg-[#0B0F14] dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:border-emerald-500";

  const labelClasses =
    "mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300";

  return (
    <section
      id="Contact"
      className="relative w-full border-b border-emerald-200 py-20 transition-colors duration-300 dark:border-[#26372F]"
    >
      {/* Section Heading */}
      <div className="mb-12 flex items-center justify-center">
        <Title title="Let's Work Together" desc="Contact Me" />
      </div>

      {/* Contact Layout */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">

        {/* Profile / Contact Information */}
        <div className="lg:col-span-2">
          <div className="h-full overflow-hidden rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm dark:border-[#26372F] dark:bg-[#111820] sm:p-7">

            <div className="overflow-hidden rounded-xl bg-[#E8F1EA] dark:bg-[#17251F]">
              <img
                src={profile}
                alt="Portfolio profile"
                className="h-72 w-full object-cover object-center transition-transform duration-500 hover:scale-105 sm:h-80"
              />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
              Let's talk about your project
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
              Have a project idea, a job opportunity, or a question about
              web development? Feel free to get in touch.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-[#19382C] dark:text-emerald-400">
                  <MdOutlineEmail className="text-2xl" />
                </span>

                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Email
                  </p>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                    Contact through this form
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-[#19382C] dark:text-emerald-400">
                  <MdOutlineLocationOn className="text-2xl" />
                </span>

                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Location
                  </p>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                    Gurgaon, Haryana, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-7 border-t border-emerald-100 pt-6 dark:border-[#26372F]">
              <p className="mb-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                Connect with me
              </p>

              <div className="flex gap-3">
                <a
                  href="https://github.com/Vijaykumar7055"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8F1EA] text-gray-800 transition-all hover:-translate-y-1 hover:bg-emerald-600 hover:text-white dark:bg-[#1A2520] dark:text-gray-200 dark:hover:bg-emerald-600"
                >
                  <FaGithub className="text-xl" />
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8F1EA] text-gray-800 transition-all hover:-translate-y-1 hover:bg-emerald-600 hover:text-white dark:bg-[#1A2520] dark:text-gray-200 dark:hover:bg-emerald-600"
                >
                  <FaLinkedinIn className="text-xl" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3">
          <form
            name="contact"
            onSubmit={handleSubmit}
            className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm dark:border-[#26372F] dark:bg-[#111820] sm:p-8"
          >
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[3px] text-emerald-600 dark:text-emerald-400">
                Get In Touch
              </p>

              <h2 className="mt-3 text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">
                Send Me a Message
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                Fill out the form below with your details and project
                requirements.
              </p>
            </div>

            {/* Name */}
            <div className="mb-5">
              <label htmlFor="name" className={labelClasses}>
                Full Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setStatus("");
                }}
                className={inputClasses}
                required
              />
            </div>

            {/* Email */}
            <div className="mb-5">
              <label htmlFor="email" className={labelClasses}>
                Email Address
              </label>

              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setStatus("");
                }}
                className={inputClasses}
                required
              />
            </div>

            {/* Service */}
            <div className="mb-5">
              <label htmlFor="service" className={labelClasses}>
                Reason for Contact
              </label>

              <select
                id="service"
                name="service"
                value={service}
                onChange={(e) => {
                  setService(e.target.value);
                  setStatus("");
                }}
                className={inputClasses}
                required
              >
                <option value="">Choose a topic</option>
                <option value="job-opportunity">Job Opportunity</option>
                <option value="web-development">Web Development</option>
                <option value="frontend-development">
                  Frontend Development
                </option>
                <option value="full-stack-development">
                  Full Stack Development
                </option>
                <option value="collaboration">Project Collaboration</option>
                <option value="other">Other Inquiry</option>
              </select>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label htmlFor="message" className={labelClasses}>
                Your Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  setStatus("");
                }}
                className={`${inputClasses} resize-y`}
                required
              />
            </div>

            {/* Form Status */}
            {status && (
              <p
                role="status"
                aria-live="polite"
                className="mb-5 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm leading-6 text-emerald-800 dark:border-[#28523F] dark:bg-[#14271E] dark:text-emerald-300"
              >
                {status}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-emerald-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-emerald-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-[#111820] sm:w-auto"
            >
              Validate Message
              <MdOutlineSend className="text-xl" />
            </button>

            <p className="mt-4 text-xs leading-5 text-gray-500 dark:text-gray-400">
              Email delivery will work after connecting an email service
              or backend API.
            </p>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
