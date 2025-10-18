import React from "react";
import { useInView } from "react-intersection-observer";
import {
  FaExternalLinkAlt,
  FaGithub,
  SiVuedotjs,
  SiTypescript,
  SiTailwindcss,
} from "../icons";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: "Simpl",
      description:
        "A lightweight notes app focused on minimalism and speed. All data stays local — no cloud, no clutter. Built with Vue.js and IndexedDB for offline-first functionality.",
      image: "/assets/img/projects-img/simpl.webp",
      technologies: [
        { name: "Vue.js", icon: SiVuedotjs, color: "text-green-500" },
        { name: "IndexedDB", icon: SiTypescript, color: "text-blue-500" },
        { name: "CSS3", icon: SiTailwindcss, color: "text-blue-400" },
      ],
      liveUrl: "/simpl/",
      githubUrl: "https://github.com/mxbv/Simpl-web",
      featured: true,
    },
    {
      id: 2,
      title: "Stream",
      description:
        "A personal feed of news and articles I check from time to time. Clean interface, simple layout, just links that matter. Built with vanilla JavaScript and RSS API integration.",
      image: "/assets/img/projects-img/stream.webp",
      technologies: [
        { name: "JavaScript", icon: SiTypescript, color: "text-yellow-500" },
        { name: "RSS API", icon: SiTypescript, color: "text-orange-500" },
        { name: "CSS3", icon: SiTailwindcss, color: "text-blue-400" },
      ],
      liveUrl: "/stream/",
      githubUrl: "https://github.com/mxbv/Stream",
      featured: true,
    },
    {
      id: 3,
      title: "MovieX",
      description:
        "Discover trending movies with a clean, focused UI. Powered by a movie API and built with Vue.js. Features search, filtering, and detailed movie information.",
      image: "/assets/img/projects-img/moviex.webp",
      technologies: [
        { name: "Vue.js", icon: SiVuedotjs, color: "text-green-500" },
        { name: "Movie API", icon: SiTypescript, color: "text-purple-500" },
        { name: "CSS3", icon: SiTailwindcss, color: "text-blue-400" },
      ],
      liveUrl: "/moviex/",
      githubUrl: "https://github.com/mxbv/MovieX",
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-16 ${
            inView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4 animate-fade-in-up animate-delay-100">
            Selected Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-card overflow-hidden shadow-card-hover animate-fade-in-up ${
                project.featured ? "lg:col-span-1" : ""
              } ${inView ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden pt-6">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full aspect-[7/4] object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => {
                    const Icon = tech.icon;
                    return (
                      <span
                        key={techIndex}
                        className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium bg-gray-100 ${tech.color}`}
                      >
                        <Icon size={14} />
                        <span>{tech.name}</span>
                      </span>
                    );
                  })}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-medium text-center transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <FaExternalLinkAlt size={18} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-medium text-center transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <FaGithub size={18} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div
          className={`text-center mt-16 ${
            inView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl p-8 text-white animate-fade-in-up animate-delay-100">
            <h3 className="text-2xl font-semibold mb-4">
              Interested in my work?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Check out more projects on my GitHub or let's discuss your next
              project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/mxbv"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center space-x-2"
              >
                <FaGithub />
                <span>View GitHub</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-primary-600 transition-colors duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
