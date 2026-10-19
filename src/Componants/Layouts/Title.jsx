
import React from "react";

const Title = ({ title, desc }) => {
  return (
    <div className="flex flex-col gap-4 mb-12 md:mb-14">
      {/* Small Label */}
      <div className="flex items-center gap-3">
        <span className="h-[2px] w-8 rounded-full bg-emerald-500" />

        <h3 className="text-sm md:text-base uppercase font-semibold tracking-[0.2em] text-emerald-700 dark:text-emerald-400">
          {title}
        </h3>
      </div>

      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#17251F] dark:text-[#E5F5EC] font-bold capitalize leading-tight tracking-tight">
        {desc}
        <span className="text-emerald-600 dark:text-emerald-400">.</span>
      </h1>

      {/* Bottom Accent */}
      <div className="h-1 w-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-300 dark:from-emerald-400 dark:to-emerald-700" />
    </div>
  );
};

export default Title;
