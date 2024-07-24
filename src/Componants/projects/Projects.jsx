import React from "react";
import Title from "../Layouts/Title";
import ProjectCard from "./ProjectCard";

import { Ecommerce,projectFour,
  projectfive,
  projectSix,
  Projectseven,
  projecteight, } from "../../assets/index";
const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full class py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center  items-center">
        <Title
          title="Visit my Portfolio projects Section"
          desc="fuck you all"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-y-14">
        <ProjectCard
          title="E-COMMERCE WEBSITE"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptas laborum animi distinctio. Vitae voluptate cumque earum repellat. Suscipit, blanditiis."
          src={Ecommerce}
          githublink="https://github.com/Vijaykumar7055/Blogging.git"
          url="https://blogging-five-mu.vercel.app/"

        />
        <ProjectCard
          title="CHAT APP"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptas laborum animi distinctio. Vitae voluptate cumque earum repellat. Suscipit, blanditiis."
          src={Projectseven}
          githublink="https://github.com/Vijaykumar7055/Blogging.git"
          url="https://blogging-five-mu.vercel.app/"
        />
        <ProjectCard
          title="TODO LIST"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptas laborum animi distinctio. Vitae voluptate cumque earum repellat. Suscipit, blanditiis."
          src={projecteight}
          githublink="https://github.com/Vijaykumar7055/Blogging.git"
          url="https://blogging-five-mu.vercel.app/"
        />
        <ProjectCard
          title="MOVIES API"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptas laborum animi distinctio. Vitae voluptate cumque earum repellat. Suscipit, blanditiis."
          src={projectFour}
          githublink="https://github.com/Vijaykumar7055/Blogging.git"
          url="https://blogging-five-mu.vercel.app/"
        />
        <ProjectCard
          title="REACT PORTFOLIO"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptas laborum animi distinctio. Vitae voluptate cumque earum repellat. Suscipit, blanditiis."
          src={projectfive}
          githublink="https://github.com/Vijaykumar7055/Blogging.git"
          url="https://blogging-five-mu.vercel.app/"
        />
        <ProjectCard
          title="MY PERSONAL BLOG WEBSITE"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptas laborum animi distinctio. Vitae voluptate cumque earum repellat. Suscipit, blanditiis."
          src={projectSix}
          githublink="https://github.com/Vijaykumar7055/Blogging.git"
          url="https://blogging-five-mu.vercel.app/"
        />
      
      </div>
    </section>
  );
};

export default Projects;
