
import React from "react";
import LeftBanner from "./LeftBanner";
import { profile } from "../../assets/index";

const Banner = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-[calc(100vh-80px)] px-6 md:px-12 lg:px-20 pt-12 pb-16 flex flex-col lgl:flex-row items-center justify-between gap-12 border-b border-emerald-200 dark:border-[#26372F] bg-[#F4F7F2] dark:bg-[#0B0F14] text-[#17251F] dark:text-[#E5F5EC] transition-colors duration-300 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-400/10 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Left Content */}
      <div className="relative z-10 w-full lgl:w-1/2">
        <LeftBanner />
      </div>

      {/* Right Profile Image */}
      <div className="relative z-10 w-full lgl:w-1/2 flex justify-center items-center">
        {/* Decorative background */}
        <div className="absolute w-[260px] h-[320px] sm:w-[340px] sm:h-[420px] md:w-[400px] md:h-[480px] rounded-[2rem] bg-gradient-to-br from-emerald-400/30 via-emerald-600/10 to-transparent dark:from-emerald-500/20 dark:via-emerald-900/20 dark:to-transparent rotate-6" />

        {/* Image frame */}
        <div className="relative w-[260px] h-[320px] sm:w-[340px] sm:h-[420px] md:w-[400px] md:h-[480px] overflow-hidden rounded-[2rem] border border-emerald-300/60 dark:border-emerald-500/30 bg-white dark:bg-[#111820] shadow-xl shadow-emerald-900/10 dark:shadow-emerald-950/30 transition-transform duration-500 hover:-translate-y-2">
          <img
            src={profile}
            alt="Vijay Kumar - Developer Portfolio"
            className="w-full h-full object-cover object-top"
            loading="eager"
          />

          {/* Bottom gradient */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B0F14]/50 to-transparent pointer-events-none" />
        </div>

        {/* Emerald accent */}
        <div className="absolute -bottom-4 -left-2 sm:left-8 w-16 h-16 rounded-2xl bg-emerald-500/10 dark:bg-emerald-400/10 border border-emerald-400/30 backdrop-blur-sm -z-0" />
      </div>
    </section>
  );
};

export default Banner;
