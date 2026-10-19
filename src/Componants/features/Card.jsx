
import React from "react";
import { HiArrowRight } from "react-icons/hi";

const Card = ({ title, des, icon }) => {
  return (
    <div
      className="
        w-full min-h-80 px-8 md:px-10 py-8
        rounded-2xl border
        border-emerald-100 dark:border-[#26372F]
        shadow-lg dark:shadow-black/20
        flex items-center
        bg-gradient-to-br
        from-white via-[#F4F7F2] to-[#E5F3E9]
        dark:from-[#111820] dark:via-[#111C18] dark:to-[#17251F]
        group
        hover:border-emerald-400 dark:hover:border-emerald-500
        hover:shadow-emerald-500/10
        transition-all duration-500
      "
    >
      <div className="min-h-64 overflow-hidden w-full">
        <div
          className="
            flex h-full flex-col gap-6
            translate-y-12
            group-hover:translate-y-0
            transition-transform duration-700
          "
        >
          {/* Icon */}
          <div>
            <span
              className="
                inline-flex text-5xl
                text-emerald-600 dark:text-emerald-400
                group-hover:scale-110
                transition-transform duration-300
              "
            >
              {icon}
            </span>
          </div>

          {/* Title */}
          <div>
            <h2
              className="
                text-xl md:text-2xl font-bold
                text-gray-800 dark:text-gray-100
                group-hover:text-emerald-700
                dark:group-hover:text-emerald-400
                transition-colors duration-300
              "
            >
              {title}
            </h2>
          </div>

          {/* Description */}
          <div>
            <p
              className="
                text-sm md:text-base leading-7
                text-gray-600 dark:text-gray-400
              "
            >
              {des}
            </p>
          </div>

          {/* Arrow */}
          <div>
            <span
              className="
                inline-flex text-2xl
                text-emerald-600 dark:text-emerald-400
                group-hover:translate-x-2
                transition-transform duration-300
              "
            >
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
