
import React from "react";

const ResumeCard = ({ title, subTitle, result, des }) => {
  return (
    <div className="w-full group flex items-stretch gap-3 md:gap-4">
      {/* Timeline Indicator */}
      <div className="w-5 md:w-8 shrink-0 relative flex justify-center">
        <span className="absolute top-8 w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-950 border-2 border-emerald-500 dark:border-emerald-400 transition-all duration-300 group-hover:scale-125 group-hover:bg-emerald-500" />
      </div>

      {/* Card */}
      <div
        className="w-full min-w-0 rounded-2xl border border-emerald-100 dark:border-[#26372F] bg-white dark:bg-[#111820] p-5 md:p-7 flex flex-col gap-5 shadow-sm shadow-emerald-900/5 dark:shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400 dark:hover:border-emerald-500/60 hover:shadow-lg hover:shadow-emerald-900/10 dark:hover:shadow-emerald-950/20"
      >
        {/* Title and Result */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
          <div className="min-w-0">
            <h3 className="text-xl md:text-2xl font-bold text-[#17251F] dark:text-[#E5F5EC] transition-colors duration-300 group-hover:text-emerald-700 dark:group-hover:text-emerald-400">
              {title}
            </h3>

            <p className="text-sm mt-2 leading-6 text-[#52645A] dark:text-[#A5B8AD]">
              {subTitle}
            </p>
          </div>

          {result && (
            <span className="inline-flex w-fit max-w-full shrink-0 items-center justify-center rounded-lg border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-2 text-xs md:text-sm font-semibold text-emerald-800 dark:text-emerald-300">
              {result}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm md:text-base leading-7 text-[#52645A] dark:text-[#A5B8AD]">
          {des}
        </p>

        {/* Bottom Accent */}
        <div className="h-1 w-12 rounded-full bg-emerald-500/70 transition-all duration-300 group-hover:w-20 group-hover:bg-emerald-500" />
      </div>
    </div>
  );
};

export default ResumeCard;
