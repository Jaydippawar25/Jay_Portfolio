import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false }}
      id="about"
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl  font-bold md:text-4xl text-center mb-4">
          About <span className="text-blue">Me</span>
        </h2>
        <p className="text-gray-400 text-center mx-w-2xl mx-auto mb-8">
          Get to know more about my background and passion
        </p>

        {/* image and about */}
        <div className="flex flex-col md:flex-row items-center gap-12 pt-20">
          {/* image */}
          <div className="md:1/2 flex justify-center ">
            <div className=" relative w-64 h-64 md:w-100 md:h-100">
              <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-blue ">
                <motion.img
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="w-full h-auto max-h-[400] object-cover "
                  src="Profileimg.jpg"
                  alt="aboutIMG"
                />
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:w-1/2"
          >
            <div className="rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <p className="text-gray-300 mb-6">
                I am passiomate MCA student with interest in wed
                devlopment,programming,databases, and learning(java,.net)web
                technologies and databases management System.
              </p>
              <p className="text-gray-300 mb-12">
                My career aspiration is work in the IT sector,especially in the
                areas like softwarw devlopment,cloud computing and data-driven
                applicatiob. I believe in continuous learning and self-growth
                and I am actively improving my technical expertise while buiding
                strong soft skill such as communication,adaptability and
                collaboration.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
