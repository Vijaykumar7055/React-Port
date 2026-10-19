
import React from "react";
import { BsGithub, BsGlobe } from "react-icons/bs";

const ProjectCard = ({ title, des, src, githublink, liveLink }) => {
  return (
    <div
      className="
        w-full p-5 xl:px-8 xl:py-8
        rounded-2xl border
        border-emerald-100 dark:border-[#26372F]
        shadow-lg dark:shadow-black/20
        flex flex-col
        bg-gradient-to-br
        from-white via-[#F4F7F2] to-[#E5F3E9]
        dark:from-[#111820] dark:via-[#111C18] dark:to-[#17251F]
        group
        hover:border-emerald-400 dark:hover:border-emerald-500
        hover:shadow-emerald-500/10
        transition-all duration-500
      "
    >
      {/* Project Image */}
      <div className="w-full overflow-hidden rounded-xl">
        <img
          src={src}
          alt={title}
          loading="lazy"
          className="
            w-full h-60 object-cover
            group-hover:scale-105
            transition-transform duration-500
          "
        />
      </div>

      {/* Project Title and Links */}
      <div className="w-full mt-5">
        <div className="flex items-center justify-between gap-3">
          <h3
            className="
              text-base md:text-lg uppercase font-bold
              tracking-wide
              text-emerald-700 dark:text-emerald-400
              group-hover:text-emerald-600
              dark:group-hover:text-emerald-300
              transition-colors duration-300
            "
          >
            {title}
          </h3>

          <div className="flex gap-2 shrink-0">
            {/* GitHub Link */}
            {githublink && (
              <a
                href={githublink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} source code on GitHub`}
                title="GitHub Repository"
                className="
                  text-lg w-10 h-10 rounded-full
                  bg-emerald-50 dark:bg-[#20352B]
                  inline-flex justify-center items-center
                  text-gray-600 dark:text-gray-300
                  hover:bg-emerald-500 hover:text-white
                  dark:hover:bg-emerald-500
                  transition-all duration-300
                "
              >
                <BsGithub />
              </a>
            )}

            {/* Live Website Link */}
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${title} live website`}
                title="Live Website"
                className="
                  text-lg w-10 h-10 rounded-full
                  bg-emerald-50 dark:bg-[#20352B]
                  inline-flex justify-center items-center
                  text-gray-600 dark:text-gray-300
                  hover:bg-emerald-500 hover:text-white
                  dark:hover:bg-emerald-500
                  transition-all duration-300
                "
              >
                <BsGlobe />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Project Description */}
      <div className="mt-4">
        <p
          className="
            text-sm md:text-base leading-7
            tracking-wide
            text-gray-600 dark:text-gray-400
            group-hover:text-gray-800
            dark:group-hover:text-gray-200
            transition-colors duration-300
          "
        >
          {des}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
