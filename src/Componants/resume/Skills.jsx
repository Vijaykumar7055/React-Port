
import React from "react";

const Skills = () => {
  const developmentSkills = [
    { name: "HTML5", level: 90 },
    { name: "CSS3", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React.js", level: 75 },
    { name: "MongoDB", level: 65 },
    { name: "Node.js", level: 65 },
    { name: "Express.js", level: 60 },
    { name: "Tailwind CSS", level: 80 },
  ];

  const programmingSkills = [
    { name: "Core Java", level: 75 },
    { name: "SQL / MySQL", level: 75 },
    { name: "C Language", level: 65 },
    { name: "C++", level: 60 },
    { name: "JDBC", level: 60 },
    { name: "Hibernate", level: 50 },
  ];

  const SkillBar = ({ name, level }) => (
    <div className="mb-6 group">
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
          {name}
        </p>

        <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">
          {level}%
        </span>
      </div>

      <div
        className="w-full h-2.5 rounded-full overflow-hidden bg-emerald-100 dark:bg-[#1C2923]"
        role="progressbar"
        aria-label={name}
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-600 to-emerald-400 transition-all duration-1000 ease-out group-hover:brightness-110"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );

  return (
    <section className="w-full py-12">
      {/* Section Heading */}
      <div className="mb-10">
        <p className="text-sm text-emerald-600 dark:text-emerald-400 tracking-[4px] uppercase">
          My Expertise
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mt-3 text-gray-900 dark:text-gray-100">
          Technical Skills
        </h2>

        <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl">
          Technologies and programming languages I use to develop
          responsive websites and modern applications.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-10">
        {/* Development Skills */}
        <div className="portfolioCard">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-emerald-100 text-emerald-700 dark:bg-[#19382C] dark:text-emerald-400 text-xl font-bold">
              {"</>"}
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Web Development
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Frontend & Backend Technologies
              </p>
            </div>
          </div>

          {developmentSkills.map((skill) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
            />
          ))}
        </div>

        {/* Programming Skills */}
        <div className="portfolioCard">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-emerald-100 text-emerald-700 dark:bg-[#19382C] dark:text-emerald-400 text-xl font-bold">
              {"{ }"}
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Programming & Database
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Languages, Frameworks & SQL
              </p>
            </div>
          </div>

          {programmingSkills.map((skill) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
