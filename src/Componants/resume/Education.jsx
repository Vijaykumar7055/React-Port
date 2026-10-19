
import React from "react";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full">

      <div className="w-full grid grid-cols-1 lgl:grid-cols-2 gap-12 xl:gap-16">

        {/* Education Section */}
        <div>
          <div className="py-10">
            <p className="text-sm text-emerald-600 dark:text-emerald-400 tracking-[4px] uppercase">
              2021 - 2024
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-gray-900 dark:text-gray-100">
              Education Quality
            </h2>

            <p className="mt-3 text-gray-600 dark:text-gray-400">
              My academic background and learning journey.
            </p>
          </div>

          <div
            className="
              w-full border-l-4
              border-emerald-200 dark:border-[#26372F]
              pl-5 md:pl-7
              flex flex-col gap-8
            "
          >
            <ResumeCard
              title="Bachelor of Computer Applications"
              subTitle="Maharshi Dayanand University (2021 - 2024)"
              result="BCA"
              des="Completed my Bachelor of Computer Applications in 2024, building a foundation in programming, databases, software development, and web technologies."
            />

            <ResumeCard
              title="Java Development"
              subTitle="QSpiders - Learning and Practice"
              result="Learning"
              des="Learning Core Java and Advanced Java concepts, including JDBC and Hibernate, while improving programming fundamentals and database skills."
            />
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <div className="py-10">
            <p className="text-sm text-emerald-600 dark:text-emerald-400 tracking-[4px] uppercase">
              Professional Journey
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-gray-900 dark:text-gray-100">
              Experience
            </h2>

            <p className="mt-3 text-gray-600 dark:text-gray-400">
              My professional experience and practical skills.
            </p>
          </div>

          <div
            className="
              w-full border-l-4
              border-emerald-200 dark:border-[#26372F]
              pl-5 md:pl-7
              flex flex-col gap-8
            "
          >
            <ResumeCard
              title="Frontend Development Intern"
              subTitle="Beyonist Company - 2 Months"
              result="Internship"
              des="Worked on real website pages using HTML, CSS, JavaScript, and Bootstrap, focusing on responsive layouts and frontend development."
            />

            <ResumeCard
              title="Officer Assistant"
              subTitle="Powergrid (2025 - Present)"
              result="Professional"
              des="Responsible for employee data entry, maintaining records, and preparing and verifying reports with attention to accuracy."
            />

            <ResumeCard
              title="Sales Executive"
              subTitle="Policybazaar - 4 Months"
              result="Experience"
              des="Gained professional experience in communication, customer interaction, and understanding customer requirements."
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Education;
