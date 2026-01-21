import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="project"
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          My <span className="text-blue">Projects</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mb-8  mx-auto">
          A selection of my recent work
        </p>
        <div className="grid grid-cols-1 gap-4 max-w-6xl mx-auto">
          <div className="bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer">
            <img
              src="hero_2.jpg"
              alt="ProjectIMG"
              className="w-full h-60 object-cover "
            />
            <div className="p-6 ">
              <h3 className="text-xl font-semibold mb-2">
                Boat Booking System
              </h3>
              <p className="text-gray-400 mb-4">
                Book ypur ride on water-quick,easy,reliable.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-dark-400 rounded-full text-sm">
                  PHP
                </span>
                <span className="px-3 py-1 bg-dark-400 rounded-full text-sm">
                  MySQL
                </span>
              </div>
              <div className="flex gap-2">
                <a
                  href="#"
                  className="flex-1 text-center px-4 py-2 bg-blue border border-blue rounded-lg font-medium hover:bg-blue-600  transition duration-300"
                >
                  View Demo
                </a>
                <a
                  href="#"
                  className="flex-1 text-center px-4 py-2 border border-blue font-medium rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
