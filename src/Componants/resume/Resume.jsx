
import React, { useState } from "react";

import Title from "../Layouts/Title";
import Education from "./Education";
import Skills from "./Skills";
import Achivements from "./Achivements";
import Experence from "./Experence";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("education");

  const tabs = [
    { id: "education", label: "Education" },
    { id: "skills", label: "Professional Skills" },
    { id: "experience", label: "Experience" },
    { id: "achievements", label: "Achievements" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "education":
        return <Education />;

      case "skills":
        return <Skills />;

      case "experience":
        return <Experence />;

      case "achievements":
        return <Achivements />;

      default:
        return <Education />;
    }
  };

  return (
    <section
      id="resume"
      className="w-full py-20 border-b border-emerald-200 dark:border-[#26372F] transition-colors duration-300"
    >
      {/* Section Heading */}
      <div className="flex justify-center items-center">
        <Title
          title="My Professional Journey"
          desc="Resume"
        />
      </div>

      {/* Tabs Navigation */}
      <div className="mt-10 mb-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 p-2 rounded-2xl bg-[#E8F1EA] dark:bg-[#101A16] border border-emerald-100 dark:border-[#26372F]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              aria-pressed={activeTab === tab.id}
              className={`resumeLi min-h-16 px-3 py-4 text-sm md:text-base font-semibold ${
                activeTab === tab.id
                  ? "!bg-emerald-600 !text-white shadow-lg shadow-emerald-600/20"
                  : ""
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="w-full animate-fade-in">
        {renderContent()}
      </div>
    </section>
  );
};

export default Resume;
