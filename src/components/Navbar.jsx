import { nav } from "framer-motion/client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="fixed w-full bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-md z-10">
      <div className="container mx-auto flex justify-between">
        <div>
          <a href="#" className="text-3xl font-bold text-white">
            Jay <span className="text-blue">Pawar</span>
          </a>
        </div>
        <div className="hidden md:flex space-x-10">
          <a
            href="#home"
            className="relative text-white/80 transition duration-300 hover:text-blue group"
          >
            <span>HOME</span>
            <span className=" absolute left-0 -bottom-1 w-0 h-0.5 bg-blue transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#about"
            className="relative text-white/80 transition duration-300 hover:text-blue group"
          >
            <span>ABOUT </span>
            <span className=" absolute left-0 -bottom-1 w-0 h-0.5 bg-blue transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#skills"
            className="relative text-white/80 transition duration-300 hover:text-blue group"
          >
            <span>SKILLE</span>
            <span className=" absolute left-0 -bottom-1 w-0 h-0.5 bg-blue transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#project"
            className="relative text-white/80 transition duration-300 hover:text-blue group"
          >
            <span>PROJECT</span>
            <span className=" absolute left-0 -bottom-1 w-0 h-0.5 bg-blue transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#contact"
            className="relative text-white/80 transition duration-300 hover:text-blue group"
          >
            <span>CONTACT</span>
            <span className=" absolute left-0 -bottom-1 w-0 h-0.5 bg-blue transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/* mobile button */}
        <div className="md:hidden">
          {showMenu ? (
            <FaXmark
              onClick={() => setShowMenu(!showMenu)}
              className="text-2xl cursor-pointer"
            />
          ) : (
            <FaBars
              onClick={() => setShowMenu(!showMenu)}
              className="text-2xl cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* mobile menus */}
      {showMenu && (
        <div className="md:hidden mt-4 bg-dark-300 h-screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-center">
          <a
            onClick={() => setShowMenu(!showMenu)}
            href="#home"
            className="relative text-white/80 transition duration-300 hover:text-blue group"
          >
            <span>HOME</span>
          </a>

          <a
            onClick={() => setShowMenu(!showMenu)}
            href="#about"
            className="relative text-white/80 transition duration-300 hover:text-blue group"
          >
            <span>ABOUT </span>
          </a>

          <a
            onClick={() => setShowMenu(!showMenu)}
            href="#skills"
            className="relative text-white/80 transition duration-300 hover:text-blue group"
          >
            <span>SKILLE</span>
          </a>

          <a
            onClick={() => setShowMenu(!showMenu)}
            href="project"
            className="relative text-white/80 transition duration-300 hover:text-blue group"
          >
            <span>PROJECT</span>
          </a>

          <a
            onClick={() => setShowMenu(!showMenu)}
            href="#contact"
            className="relative text-white/80 transition duration-300 hover:text-blue group"
          >
            <span>CONTACT</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
