import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedin, FaReact } from "react-icons/fa";
import { SiTailwindcss,  SiReact, SiMongodb, SiNodedotjs } from "react-icons/si";
const LeftBanner = () => {
    const [text] = useTypewriter({
        words: [
          "Software Developer.",
          "Full stack Developer. ",
          "Web Developer. ",
          "UI Designer. ",
        ],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
      });
  return (
   
      <div className="w-full lgl:w-1/2 flex flex-col gap-20">
        <div className="flex flex-col gap-5">
          <h4 className="text-lg font-normal">WELCOME TO MY PORTFOLIO</h4>
          <h1 className="text-6xl font-bold text-white">
            HI, I'm{" "}
            <span className="text-designColor capitalize">Vijay Kumar</span>
          </h1>

          <h2 className="text-4xl font-bold text-white">
            a <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#ff014f"
            />
          </h2>

          <p className="leading-6 text-base tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            modi maxime non ratione quasi veritatis. Cum, ipsam, deleniti
            dolorum assumenda ipsum tempora non vel omnis recusandae, dicta
            corrupti soluta minus.
          </p>
        </div>

      <div className="flex  flex-col lgl:flex-row gap-6 lgl:gap-0 items-center justify-between">
      <div>
          <h1 className="text-base uppercase mb-4 ">Find me on social Media</h1>

          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>

            
            <span className="bannerIcon">
              <FaTwitter />
            </span>

            <span className="bannerIcon">
              <FaLinkedin />
            </span>


          </div>
        </div>


        <div>
          <h1 className="text-base text-center uppercase mb-4 ">Best Skill on</h1>

          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>

            
            <span className="bannerIcon">
              <SiReact />
            </span>

            <span className="bannerIcon">
              <SiMongodb />
            </span>
            <span className="bannerIcon">
              <SiNodedotjs />
            </span>


          </div>
        </div>

       
      </div>
      <div className='flex justify-center items-center  mb-5 lgl:mb-0'>
  <a href="../../vijay_web2024.pdf" download className='w-1/2 lgl:w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 text-center'>
    Download Resume
  </a>
</div>

      </div>
   
  )
}

export default LeftBanner