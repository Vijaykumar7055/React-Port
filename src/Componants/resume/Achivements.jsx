
import React from "react";
import ResumeCard from "./ResumeCard";

const Achivements = () => {
  return (
    <div className="w-full bg-[#F4F7F2] dark:bg-[#0B0F14] text-[#17251F] dark:text-[#E5F5EC] transition-colors duration-300">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-16">

        {/* Professional Journey */}
        <div>
          <div className="py-8">
            <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 tracking-[4px] uppercase mb-3">
              Professional Journey
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Work Experience
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#52645A] dark:text-[#A5B8AD]">
              My professional experience and practical workplace learning.
            </p>
          </div>

          <div className="relative border-l-2 border-emerald-300 dark:border-emerald-800 pl-6 md:pl-8 flex flex-col gap-8">
            <div className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-emerald-500" />

            <ResumeCard
              title="Officer Assistant"
              subTitle="Powergrid | 2025 - Present"
              result="Professional"
              des="Responsible for employee data entry, maintaining records, and preparing verification reports with attention to accuracy and detail."
            />

            <ResumeCard
              title="Frontend Development Intern"
              subTitle="Beyonist Company | 2 Months"
              result="Internship"
              des="Worked on website pages using HTML, CSS, JavaScript, and Bootstrap, gaining practical experience in responsive layouts and frontend development."
            />

            <ResumeCard
              title="Sales Executive"
              subTitle="Policybazaar | 4 Months"
              result="Work Experience"
              des="Developed professional communication, customer interaction, and problem-solving skills while working in a sales environment."
            />
          </div>
        </div>

        {/* Development Journey */}
        <div>
          <div className="py-8">
            <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 tracking-[4px] uppercase mb-3">
              Learning & Growth
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Development Journey
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#52645A] dark:text-[#A5B8AD]">
              My education, technical learning, and hands-on project work.
            </p>
          </div>

          <div className="relative border-l-2 border-emerald-300 dark:border-emerald-800 pl-6 md:pl-8 flex flex-col gap-8">
            <div className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-emerald-500" />

            <ResumeCard
              title="Bachelor of Computer Applications"
              subTitle="MDU University | 2021 - 2024"
              result="BCA"
              des="Completed a Bachelor's degree in Computer Applications, building a foundation in programming, databases, and software development."
            />

            <ResumeCard
              title="Java & Advanced Java"
              subTitle="QSpiders | Ongoing Learning"
              result="Technical Learning"
              des="Learning Core Java, JDBC, and Hibernate while strengthening programming fundamentals, database connectivity, and ORM concepts."
            />

            <ResumeCard
              title="Full Stack Development Projects"
              subTitle="Personal & Practical Projects"
              result="Hands-on"
              des="Built projects including a personal portfolio, kids footwear e-commerce application, blog management platform, and a CRM system using modern frontend and backend technologies."
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Achivements;
