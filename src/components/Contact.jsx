import React from "react";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaLinkedin, FaDownload, FaEnvelope } from "../icons";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  const contacts = [
    {
      icon: FaEnvelope,
      name: "Email",
      value: "max.qb@icloud.com",
      link: "mailto:max.qb@icloud.com",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: FaGithub,
      name: "GitHub",
      value: "github.com/mxbv",
      link: "https://github.com/mxbv",
      color: "text-gray-800",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
    },
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      value: "linkedin.com/in/maximdev",
      link: "https://linkedin.com/in/maximdev",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-10 ${
            inView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4 animate-fade-in-up animate-delay-100">
            Let's Stay in Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            Ready to work together? I'm always interested in exciting projects.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div
            className={`space-y-8 ${
              inView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="flex flex-wrap gap-4 justify-center">
              {contacts.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <div
                    key={contact.name}
                    className={`inline-flex items-center space-x-3 px-6 py-4 rounded-lg border ${
                      contact.bgColor
                    } ${
                      contact.borderColor
                    } dark:bg-gray-700 dark:border-gray-600 shadow-card shadow-card-hover ${
                      contact.link ? "cursor-pointer" : "cursor-default"
                    } animate-fade-in-up`}
                    style={{ animationDelay: `${0.1 * index}s` }}
                    onClick={() =>
                      contact.link &&
                      window.open(
                        contact.link,
                        contact.link.startsWith("http") ? "_blank" : "_self"
                      )
                    }
                  >
                    <div className={`${contact.color} text-2xl`}>
                      <Icon />
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-gray-800 dark:text-gray-200 text-sm">
                        {contact.name}
                      </div>
                      <div className="text-gray-600 dark:text-gray-300 text-sm">
                        {contact.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Download CV */}
            <div className="bg-primary-500 dark:bg-primary-600 rounded-lg p-6 text-white animate-fade-in-up animate-delay-300 w-full">
              <div className="text-center">
                <h4 className="text-2xl font-semibold mb-2">View My CV</h4>
                <p className="text-xl text-primary-100 dark:text-primary-200 mb-4">
                  Get a detailed overview of my experience and skills
                </p>
              <a
                href="/assets/Max_Baranov_CV_2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                <FaDownload />
                <span>View PDF</span>
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
