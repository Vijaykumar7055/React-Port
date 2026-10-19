
import React from "react";
import ResumeCard from "./ResumeCard";

const Experence = () => {
  return (
    <section className="w-full py-10 bg-[#F4F7F2] dark:bg-[#0B0F14] transition-colors duration-300">
      <div className="w-full max-w-5xl mx-auto">

        {/* Job Experience */}
        <div>
          <div className="py-8">
            <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 tracking-[4px] uppercase">
              Career Journey
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-[#17251F] dark:text-[#E5F5EC]">
              Job Experience
            </h2>

            <p className="mt-3 leading-7 text-[#52645A] dark:text-[#A5B8AD]">
              My professional background and workplace experience.
            </p>
          </div>

          <div className="w-full border-l-2 border-emerald-300 dark:border-emerald-800 pl-4 md:pl-6 flex flex-col gap-8">
            <ResumeCard
              title="Officer Assistant"
              subTitle="Powergrid | 2025 - Present"
              result="Professional"
              des="Managing employee data entry, maintaining records, and preparing and verifying reports. Focused on accuracy, organization, and efficient administrative work."
            />

            <ResumeCard
              title="Frontend Development Intern"
              subTitle="Beyonist Company | 2 Months"
              result="Internship"
              des="Worked on real website pages using HTML, CSS, JavaScript, and Bootstrap. Gained practical experience in responsive web design and frontend development."
            />

            <ResumeCard
              title="Sales Executive"
              subTitle="Policybazaar | 4 Months"
              result="Experience"
              des="Gained experience in customer communication, understanding customer requirements, and working in a professional team environment."
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experence;
