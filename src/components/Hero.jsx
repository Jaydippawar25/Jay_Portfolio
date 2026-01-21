import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-linear-to-r from-[#000000] via-[#46759f] to-[#9b9a9a]"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-blue">Jaydip Pawar</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 typerwriter">
            Developer | Taveller
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            A Web Developer Building modern,responsive websites.
          </p>
          <div className="flex space-x-4">
            <a
              href="#CV"
              className="px-6 py-3 bg-blue rounded-lg font-medium hover:bg-blue-700 transition duration-300"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="px-4 py-3 border border-blue rounded-lg font-medium hover:bg-blue/20 transition decoration-blue-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-90 md:h-90">
            <div className=" rounded-full overflow-hidden shadow-lg border-6 border-b-blue-700">
              <motion.img
                className="relative rounded-full w-64 h-64 md:w-90 md:h-90 object-cover  animate-float profile-i"
                src="Profileimg.jpg"
                alt="Profile"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
