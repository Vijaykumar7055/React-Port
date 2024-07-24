import React from "react";
import ResumeCard from "./ResumeCard";
const Skills = () => {
  return (
    <div>
      <div className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20">
        <div className="w-full lgl:w-1/2">
          <div className="py-12">
            <p className="text-sm text-designColor tracking-[4px]">2008-2020</p>
            <h2 className="text-4xl font-bold">Devlopment Skills</h2>
          </div>
          <div className=" w-full h-full lgl:h-[1000px] ">
            <div className="mb-3">
              <p className="text-sm uppercase font-medium">Html</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <span
                  className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500
              rounded-md relative"
                >
                  <span className="absolute -top-8 right-0">100%</span>
                </span>
              </span>
            </div>

            <div className="mb-3">
              <p className="text-sm uppercase font-medium">CSS</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <span
                  className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500
              rounded-md relative"
                >
                  <span className="absolute -top-8 right-0">90%</span>
                </span>
              </span>
            </div>

            <div className="mb-3">
              <p className="text-sm uppercase font-medium">JavaScript</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <span
                  className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500
              rounded-md relative"
                >
                  <span className="absolute -top-8 right-0">80%</span>
                </span>
              </span>
            </div>

            <div className="mb-3">
              <p className="text-sm uppercase font-medium">ReactJS</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <span
                  className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500
              rounded-md relative"
                >
                  <span className="absolute -top-8 right-0">75%</span>
                </span>
              </span>
            </div>

            <div className="mb-3">
              <p className="text-sm uppercase font-medium">MongoDb</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <span
                  className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500
              rounded-md relative"
                >
                  <span className="absolute -top-8 right-0">70%</span>
                </span>
              </span>
            </div>

            <div className="mb-3">
              <p className="text-sm uppercase font-medium">NodeJs</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <span
                  className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500
              rounded-md relative"
                >
                  <span className="absolute -top-8 right-0">80%</span>
                </span>
              </span>
            </div>

            <div className="mb-3">
              <p className="text-sm uppercase font-medium">ExpressJs</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <span
                  className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500
              rounded-md relative"
                >
                  <span className="absolute -top-8 right-0">85%</span>
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="w-full lgl:w-1/2">
          <div className="py-12 ">
            <p className="text-sm text-designColor tracking-[4px]">2021-2024</p>
            <h2 className="text-4xl font-bold">Programming skills</h2>
          </div>
          <div className=" w-full h-full lgl:h-[100%] ">
            <div className="mb-3">
              <p className="text-sm uppercase font-medium">C language</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <span
                  className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500
              rounded-md relative"
                >
                  <span className="absolute -top-8 right-0">75%</span>
                </span>
              </span>
            </div>

            <div className="mb-3">
              <p className="text-sm uppercase font-medium">C++ </p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <span
                  className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500
              rounded-md relative"
                >
                  <span className="absolute -top-8 right-0">75%</span>
                </span>
              </span>
            </div>

            <div className="mb-3">
              <p className="text-sm uppercase font-medium">Java</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <span
                  className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500
              rounded-md relative"
                >
                  <span className="absolute -top-8 right-0">75%</span>
                </span>
              </span>
            </div>

            <div className="mb-3">
              <p className="text-sm uppercase font-medium">C#</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <span
                  className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500
              rounded-md relative"
                >
                  <span className="absolute -top-8 right-0">75%</span>
                </span>
              </span>
            </div>

            <div>
              <p className="text-sm uppercase font-medium">Python</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <span
                  className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500
              rounded-md relative"
                >
                  <span className="absolute -top-8 right-0">75%</span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
