import React from "react";
import { useInView } from "react-intersection-observer";
import { FaCode, FaBook, FaDumbbell, FaBrain } from "../icons";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const interests = [
    {
      icon: FaCode,
      title: "Coding",
      description: "Building modern web applications",
    },
    {
      icon: FaBook,
      title: "Reading",
      description: "Philosophy, tech, and personal growth",
    },
    {
      icon: FaDumbbell,
      title: "Fitness",
      description: "Staying active and healthy",
    },
    {
      icon: FaBrain,
      title: "Learning",
      description: "Exploring new technologies",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-16 ${
            inView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4 animate-fade-in-up animate-delay-100">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            A little about me and what drives my passion for development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div
            className={`space-y-6 ${
              inView ? "animate-fade-in-left" : "opacity-0"
            }`}
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed animate-fade-in-left animate-delay-100">
              I'm a passionate frontend developer with a love for creating
              simple, elegant solutions to complex problems. My journey in tech
              started with curiosity and has evolved into a deep appreciation
              for clean code and user-centered design.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed animate-fade-in-left animate-delay-200">
              When I'm not coding, you'll find me reading philosophy books,
              hitting the gym, or exploring new technologies. I believe that
              great software comes from a balanced life where creativity,
              physical health, and continuous learning work together.
            </p>
          </div>

          {/* Interests grid */}
          <div
            className={`grid grid-cols-2 gap-6 ${
              inView ? "animate-fade-in-right" : "opacity-0"
            }`}
          >
            {interests.map((interest, index) => {
              const Icon = interest.icon;
              return (
                <div
                  key={interest.title}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center hover:bg-primary-50 dark:hover:bg-primary-900/20 shadow-card shadow-card-hover animate-fade-in-right"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="text-primary-500 mb-3 flex justify-center">
                    <Icon size={32} />
                  </div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                    {interest.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {interest.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
