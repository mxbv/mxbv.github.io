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
      description: "Building thoughtful and simple web experiences",
    },
    {
      icon: FaBook,
      title: "Reading",
      description: "Philosophy, design, and the human side of tech",
    },
    {
      icon: FaDumbbell,
      title: "Fitness",
      description: "Keeping the body active, the mind clear",
    },
    {
      icon: FaBrain,
      title: "Learning",
      description: "Learning ideas that connect creativity and logic",
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
              I’ve always been drawn to creating things that make sense —
              simple, human, and well-crafted. My path in frontend development
              started from curiosity and a desire to understand how ideas become
              experiences.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed animate-fade-in-left animate-delay-200">
              When I’m not working, I read, move, and think. Philosophy helps me
              see patterns, fitness keeps me grounded, and learning keeps me
              curious.
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
