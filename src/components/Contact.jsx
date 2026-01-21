import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMapMarkedAlt,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Get In <span>Touch</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
          Have a project in mind or want to collaborate? Let's talk!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl max-auto">
          {/*contact*/}
          <div>
            <form action="" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                  type="text"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                  type="email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  className="w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                  type="text"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue rounded-lg font-medium hover:bg-blue-600 transition duration-300 cursor-pointer"
              >
                Send
              </button>
            </form>
          </div>
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="text-blue text-2xl mr-4">
                <FaMapMarkedAlt />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-gray-400">Urun Ishwarpur.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-blue text-2xl mr-4">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-400">jaydippawar2512@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-blue text-2xl mr-4">
                <FaPhone />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-gray-400">+91 7972940127</p>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Jaydippawar25"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-white hover:bg-white hover:text-dark-100 transition duration-300"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/jaydip-pawar-495514331"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue hover:bg-blue-600 hover:text-white transition duration-300"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://wa.me/917972940127"
                  target="_blank"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-white transition duration-300"
                >
                  <FaWhatsapp />
                </a>

                <a
                  href="https://www.instagram.com/jaydip_pawar.94/"
                  target="_blank"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-pink-600 hover:bg-linear-to-t from-[#fd1d1d] via-[#833AB4] to-[#9b9a9a]bg-pink-700 hover:text-white transition duration-300"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
