import React, { useState, useEffect, useMemo } from "react";
import { FaDownload } from "../icons";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);

  const roles = useMemo(
    () => [
      "Frontend Developer",
      "Curious Mind",
      "Book & Tea Enjoyer",
      "Active Lifestyle Advocate",
      "Philosophy Explorer",
    ],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 md:pt-0"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Greeting */}
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-4 animate-fade-in-up">
              Hi, you've landed on my page.
            </p>

            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 dark:text-white mb-6 animate-fade-in-up animate-delay-100">
              I am <span className="text-primary-500">Max Baranov</span>
              <br />
              <span
                key={currentRole}
                className="inline-block animate-fade-in-up text-3xl sm:text-4xl lg:text-5xl xl:text-6xl"
              >
                {roles[currentRole]}
              </span>
            </h1>

            {/* Description */}
            <div className="max-w-3xl mx-auto lg:mx-0 mb-6 animate-fade-in-up animate-delay-200">
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                I enjoy staying active, reading, and exploring ideas that
                challenge how we think. I value balance — between mind and body,
                focus and rest, work and meaning.
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-500 dark:text-gray-400 mb-6 sm:mb-8 animate-fade-in-up animate-delay-300">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-xs sm:text-sm font-medium">
                Poland / Remote
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center lg:items-start animate-fade-in-up animate-delay-400">
              <a
                href="/assets/Max_Baranov_CV_2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center space-x-2 w-full sm:w-auto justify-center"
              >
                <FaDownload />
                <span>View CV</span>
              </a>

              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("projects")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-secondary inline-flex items-center space-x-2 w-full sm:w-auto justify-center"
              >
                <span>View My Work</span>
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] xl:w-[36rem] xl:h-[36rem] rounded-xl shadow-card animate-fade-in-up animate-delay-300 hero-image-3d cursor-pointer">
              <img
                src="/assets/img/hero-img.jpeg"
                alt="Max Baranov"
                className="w-full h-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
