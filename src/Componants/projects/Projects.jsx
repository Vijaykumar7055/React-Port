
import React from "react";
import Title from "../Layouts/Title";

import portfolioImg from "../../assets/images/projects/portfolio.jpg";
import ecommerceImg from "../../assets/images/projects//Ecommerce.png";
import blogImg from "../../assets/images/projects/CrmProject.jpg";
import crmImg from "../../assets/images/projects/YourTaskMyTask.jpg";
import adkeyImg from "../../assets/images/projects/adkey.jpg";

import { FaGithub } from "react-icons/fa";
import { MdOutlineOpenInNew } from "react-icons/md";

const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio showcasing my skills, experience, projects, and contact information with a clean emerald green and midnight black theme.",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    image: portfolioImg,
    liveLink: "https://vijayweb18.vercel.app",
    githubLink: "https://github.com/Vijaykumar7055",
  },
  {
    id: 2,
    title: "Kids Footwear E-Commerce",
    description:
      "A full-stack online footwear store featuring product browsing, user authentication, shopping cart, checkout, and an admin dashboard for managing products and users.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    image: ecommerceImg,
    liveLink: "https://kids-footwear-frontend.vercel.app/", 
    githubLink: "https://github.com/Vijaykumar7055/kids-footwear-frontend", // Add your repository URL
  },
  {
    id: 3,
    title: "Blog Management Application",
    description:
      "A blog platform for publishing and exploring articles, with admin functionality to create, edit, and delete blogs and manage users.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    image: blogImg,
    liveLink: "", // Add your deployed frontend URL
    githubLink: "", // Add your repository URL
  },
  {
    id: 4,
    title: "YourTaskMyTask — CRM System",
    description:
      "A customer relationship management system for handling customers, employees, and follow-ups with role-based access and organized business workflows.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "React"],
    image: crmImg,
    liveLink: "", // Add your deployed frontend URL
    githubLink: "", // Add your repository URL
  },
  {
    id: 5,
    title: "Adkey Media Admin Panel",
    description:
      "An admin dashboard to manage leads, services, blogs, testimonials, FAQs, and customer enquiries through CRUD operations.",
    technologies: ["React", "Tailwind CSS", "Express", "MongoDB"],
    image: adkeyImg,
    liveLink: "", // Add your deployed frontend URL
    githubLink: "", // Add your repository URL
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 px-4 md:px-8 lg:px-12 border-b border-emerald-200 dark:border-[#26372F] bg-[#F4F7F2] dark:bg-[#0B0F14] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <Title title="Portfolio" desc="My Recent Projects" />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {projects.map((project) => (
            <article
              key={project.id}
              className="portfolioCard group overflow-hidden !p-0 flex flex-col"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-[16/10] bg-[#E8F1EA] dark:bg-[#111820]">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14]/50 to-transparent opacity-60" />
              </div>

              {/* Project Details */}
              <div className="p-5 md:p-6 flex flex-col flex-1">
                <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
                  PROJECT {String(project.id).padStart(2, "0")}
                </p>

                <h3 className="text-xl font-bold text-[#17251F] dark:text-[#E5F5EC] mb-3">
                  {project.title}
                </h3>

                <p className="text-sm leading-7 text-[#52645A] dark:text-[#A5B8AD] mb-5">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 text-xs font-medium text-emerald-800 dark:text-emerald-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="mt-auto flex flex-wrap gap-3">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-emerald-700"
                    >
                      Live Demo
                      <MdOutlineOpenInNew size={18} />
                    </a>
                  )}

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-emerald-600/40 px-4 py-3 text-sm font-semibold text-emerald-700 transition-all duration-300 hover:bg-emerald-50 dark:text-emerald-400 dark:hover:bg-emerald-950/40"
                    >
                      <FaGithub size={18} />
                      GitHub
                    </a>
                  )}

                  {!project.liveLink && !project.githubLink && (
                    <p className="text-xs text-[#52645A] dark:text-[#A5B8AD]">
                      Links coming soon
                    </p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
