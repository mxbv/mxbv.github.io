import React from "react";
import { useInView } from "react-intersection-observer";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaNpm,
  FaSass,
  FaBootstrap,
} from "../icons";
import {
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiWebpack,
  SiVuedotjs,
} from "../icons";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  const skills = [
    {
      name: "React",
      icon: FaReact,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      name: "Vue.js",
      icon: SiVuedotjs,
      color: "text-green-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      name: "JavaScript",
      icon: FaJs,
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
    },
    {
      name: "CSS3",
      icon: FaCss3Alt,
      color: "text-blue-400",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "text-cyan-500",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
    },
    {
      name: "SASS/SCSS",
      icon: FaSass,
      color: "text-pink-500",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
    },
    {
      name: "Figma",
      icon: FaFigma,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      name: "Vite",
      icon: SiVite,
      color: "text-yellow-400",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
    },
    {
      name: "Webpack",
      icon: SiWebpack,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      name: "Git",
      icon: FaGitAlt,
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
    {
      name: "NPM",
      icon: FaNpm,
      color: "text-red-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
    {
      name: "Node.js",
      icon: FaNodeJs,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      name: "HTML5",
      icon: FaHtml5,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
    {
      name: "REST APIs",
      icon: FaJs,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      name: "IndexedDB",
      icon: FaJs,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-8 ${
            inView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4 animate-fade-in-up animate-delay-100">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            Technologies and tools I work with
          </p>
        </div>

        <div className="p-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, skillIndex) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className={`inline-flex items-center space-x-2 px-4 py-3 rounded-lg border ${skill.bgColor} ${skill.borderColor} dark:bg-gray-700 dark:border-gray-600 shadow-card shadow-card-hover cursor-pointer animate-fade-in-up`}
                  style={{ animationDelay: `${0.05 * skillIndex}s` }}
                >
                  <div className={`${skill.color} text-xl`}>
                    <Icon />
                  </div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
