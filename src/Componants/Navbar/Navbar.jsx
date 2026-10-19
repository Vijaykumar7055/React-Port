import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { navLinksData } from "../../Constants";
import { motion } from "framer-motion";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  // Apply theme when the component loads or theme changes
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const handleToggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const closeMenu = () => setShowMenu(false);

  return (
    <motion.nav
      className="sticky top-0 z-50 w-full h-20 mx-auto px-4
      flex justify-between items-center border-b
      border-gray-200 dark:border-slate-700
      bg-white/90 dark:bg-[#0B1120]/95
      text-gray-900 dark:text-white backdrop-blur-md
      transition-colors duration-300"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Logo */}
      <h3 className="text-2xl font-bold tracking-wide">
        Vijay <span className="text-cyan-500">Kumar</span>
      </h3>

      <div className="flex items-center gap-4">
        {/* Desktop Navigation */}
        <ul className="hidden mdl:inline-flex items-center gap-5 lg:gap-8">
          {navLinksData.map(({ id, title, link }) => (
            <motion.li
              key={id}
              className="text-sm font-medium tracking-wide
              text-gray-600 dark:text-gray-300
              hover:text-cyan-500 dark:hover:text-cyan-400
              cursor-pointer transition-colors duration-300"
              whileHover={{ scale: 1.08 }}
            >
              <Link
                to={link}
                smooth={true}
                offset={-80}
                duration={500}
                spy={true}
              >
                {title}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Theme Toggle */}
        <button
          type="button"
          onClick={handleToggleTheme}
          aria-label={
            isDarkMode ? "Switch to light mode" : "Switch to dark mode"
          }
          title={isDarkMode ? "Light Mode" : "Dark Mode"}
          className="w-10 h-10 flex items-center justify-center
          rounded-full border border-gray-200 dark:border-slate-700
          bg-gray-100 dark:bg-slate-800
          text-amber-500 dark:text-cyan-400
          hover:scale-110 transition-all duration-300"
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setShowMenu((prev) => !prev)}
          aria-label={showMenu ? "Close menu" : "Open menu"}
          className="mdl:hidden w-10 h-10 flex items-center
          justify-center rounded-full
          bg-gray-100 dark:bg-slate-800
          text-gray-900 dark:text-white
          hover:text-cyan-500 transition-colors"
        >
          {showMenu ? <MdClose /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {showMenu && (
        <motion.div
          className="fixed top-0 left-0 z-[60] h-screen w-[80%] max-w-sm
          overflow-y-auto p-6 shadow-2xl
          bg-white dark:bg-[#111C33]
          text-gray-900 dark:text-white
          border-r border-gray-200 dark:border-slate-700"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-2xl font-bold">
              Vijay <span className="text-cyan-500">Kumar</span>
            </h3>

            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close menu"
              className="text-2xl text-gray-500 hover:text-cyan-500"
            >
              <MdClose />
            </button>
          </div>

          <ul className="flex flex-col gap-6">
            {navLinksData.map(({ id, title, link }) => (
              <li
                key={id}
                className="text-base font-medium text-gray-600
                dark:text-gray-300 hover:text-cyan-500
                dark:hover:text-cyan-400 transition-colors"
              >
                <Link
                  to={link}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  spy={true}
                  onClick={closeMenu}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex gap-5 text-xl text-gray-500 dark:text-gray-300">
            <a href="#" aria-label="Facebook" className="hover:text-cyan-500">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-cyan-500">
              <FaTwitter />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-cyan-500">
              <FaLinkedin />
            </a>
          </div>

          <button
            type="button"
            onClick={handleToggleTheme}
            className="mt-8 flex items-center gap-3 rounded-lg
            bg-gray-100 dark:bg-slate-800 px-4 py-3
            hover:text-cyan-500 transition-colors"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
            {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
