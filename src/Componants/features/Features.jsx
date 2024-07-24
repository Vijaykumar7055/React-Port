import React from "react";
import { Link } from "react-scroll";
import Title from "../Layouts/Title";
import Card from "./Card";
import { FaSquareWebAwesome } from "react-icons/fa6";
const Features = () => {
  return (
    <section
      id="features"
      className="w-full  py-20  border-b-[1px] border-b-black"
    >
      <Title title="Features" desc="What I do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-10">
        <Card
          title="Business Strategy"
          des="     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, nobis."
          icon={<FaSquareWebAwesome />}
        />

        <Card
          title="Web Development"
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, nobis."
          icon={<FaSquareWebAwesome />}
        />
        <Card
          title="Web Development"
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, nobis."
          icon={<FaSquareWebAwesome />}
        />
        <Card
          title="Web Development"
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, nobis."
          icon={<FaSquareWebAwesome />}
        />
        <Card
          title="Web Development"
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, nobis."
          icon={<FaSquareWebAwesome />}
        />
        <Card
          title="Web Development"
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, nobis."
          icon={<FaSquareWebAwesome />}
        />
      </div>
    </section>
  );
};

export default Features;
