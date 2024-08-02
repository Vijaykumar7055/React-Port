import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaSun, FaMoon } from "react-icons/fa";
import { navLinksData } from "../../Constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme from local storage or set to light mode by default
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    console.log("Loaded theme from localStorage:", savedTheme);
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  // Toggle dark mode
  const handleToggleTheme = () => {
    const newTheme = !isDarkMode ? "dark" : "light";
    console.log("Setting new theme:", newTheme);
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="w-full h-20 mx-auto flex justify-between items-center border-b-[1px] dark:border-gray-600">
      <div>
        <h3 className="text-2xl font-bold capitalize dark:text-white">Vijay Kumar</h3>
      </div>

      <div className="flex items-center">
        <ul className="hidden mdl:inline-flex items-center gap-5 lg:gap-10">
          {navLinksData.map(({ id, title, link }) => (
            <li
              key={id}
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 dark:text-gray-300"
            >
              <Link
                to={link}
                smooth={true}
                offset={-70}
                duration={500}
                spy={true}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={handleToggleTheme}
          className="text-xl ml-4 bg-gray-800 w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer dark:bg-gray-100 dark:text-black"
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer ml-4"
        >
          {showMenu ? <MdClose /> : <FiMenu />}
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide z-50 dark:bg-gray-800">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold capitalize text-white">Vijay Kumar</h3>
              <span
                onClick={() => setShowMenu(false)}
                className="text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
            <ul className="flex flex-col items-start gap-5">
              {navLinksData.map(({ id, title, link }) => (
                <li
                  key={id}
                  className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 dark:text-gray-300"
                >
                  <Link
                    to={link}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    spy={true}
                    onClick={() => setShowMenu(false)}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
            
      <div className="flex  flex-col lgl:flex-row gap-6 lgl:gap-0 items-center justify-between">
      <div className="mt-5">
          

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


     
      </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
