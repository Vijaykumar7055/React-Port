
import React from "react";
import Title from "../Layouts/Title";
import Card from "./Card";

import { FaReact, FaBusinessTime } from "react-icons/fa";
import { GrCloudSoftware } from "react-icons/gr";
import { IoBriefcaseOutline } from "react-icons/io5";
import { MdOutlineSyncProblem } from "react-icons/md";
import { FaSquareWebAwesome } from "react-icons/fa6";

const Features = () => {
  return (
    <section
      id="features"
      className="
        w-full py-20 px-4 md:px-8
        border-b border-emerald-100
        dark:border-[#26372F]
        bg-gradient-to-b
        from-[#F4F7F2] to-[#EAF4ED]
        dark:from-[#0B0F14] dark:to-[#101A16]
        transition-colors duration-300
      "
    >
      {/* Section Heading */}
      <Title
        title="Features"
        desc="What I Do"
      />

      {/* Features Grid */}
      <div
        className="
          grid grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-6 xl:gap-8
          mt-10
        "
      >
        <Card
          title="Business Strategy"
          des="I analyze business needs and create practical strategies to support growth and improve digital performance."
          icon={<FaBusinessTime />}
        />

        <Card
          title="Web Development"
          des="I build responsive and modern websites using React, JavaScript, HTML, CSS, and Tailwind CSS."
          icon={<FaReact />}
        />

        <Card
          title="Software Development"
          des="I develop reliable software solutions using Java, Spring Boot, databases, and modern development tools."
          icon={<GrCloudSoftware />}
        />

        <Card
          title="SEO"
          des="I understand SEO fundamentals and website optimization to improve search visibility and user experience."
          icon={<IoBriefcaseOutline />}
        />

        <Card
          title="Problem Solving"
          des="I use logical thinking, debugging, and programming fundamentals to solve technical problems efficiently."
          icon={<MdOutlineSyncProblem />}
        />

        <Card
          title="Data Structures & Algorithms"
          des="I practice arrays, strings, searching, sorting, and other DSA concepts to strengthen my coding skills."
          icon={<FaSquareWebAwesome />}
        />
      </div>
    </section>
  );
};

export default Features;
