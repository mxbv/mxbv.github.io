import React from "react";
import { FaGithub, FaEnvelope, FaLinkedin } from "../icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Logo and description */}
          <div className="text-center md:text-left">
            <a 
              href="https://mxbv.github.io" 
              target="_self" 
              rel="noopener noreferrer"
              className="inline-block"
              aria-label="Visit mxbv.github.io"
            >
              <h3 className="text-2xl font-bold text-primary-400 dark:text-primary-300 mb-2 hover:text-primary-300 dark:hover:text-primary-200 transition-colors duration-300">
                mxbv&nbsp;
                <span className="text-sm text-gray-400 dark:text-gray-500">&copy; {currentYear}</span>
              </h3>
            </a>
            
            <p className="text-gray-400 dark:text-gray-500">
              Let's create simple tools for a complex world
            </p>
          </div>

          {/* Social links */}
          <div className="flex justify-end space-x-6">
            <a
              href="https://github.com/mxbv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://linkedin.com/in/maximdev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href="mailto:max.qb@icloud.com"
              className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors duration-300"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
