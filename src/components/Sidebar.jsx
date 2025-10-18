import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaUser,
  FaCode,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaMoon,
  FaSun,
} from "../icons";
import { useTheme } from "../contexts/ThemeContext";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { id: "home", label: "Home", icon: FaHome },
    { id: "about", label: "About", icon: FaUser },
    { id: "skills", label: "Skills", icon: FaStar },
    { id: "projects", label: "Projects", icon: FaCode },
    { id: "contact", label: "Contact", icon: FaEnvelope },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 200) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Logo */}
      <div className="fixed top-4 right-4 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-full border border-gray-200 dark:border-gray-700">
        <a 
          href="https://mxbv.github.io" 
          target="_self" 
          rel="noopener noreferrer"
          className="block w-12 h-12"
          aria-label="Visit mxbv.github.io"
        >
          <img 
            src="/assets/img/favicon.png" 
            alt="mxbv" 
            className="w-12 h-12"
          />
        </a>
      </div>

      {/* Desktop sidebar toggle button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={`hidden md:block fixed top-4 z-50 p-3 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900 transition-all duration-300 ${
          isCollapsed ? "left-4" : "left-24"
        }`}
      >
        {isCollapsed ? (
          <FaChevronRight size={20} />
        ) : (
          <FaChevronLeft size={20} />
        )}
      </button>

      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-4 z-50 p-3 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900 transition-all duration-300 md:hidden ${
          isOpen ? "left-20" : "left-4"
        }`}
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full w-16 md:w-20 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-r border-gray-200 dark:border-gray-700 z-40 transition-all duration-300 ${
          isOpen
            ? "translate-x-0"
            : isCollapsed
            ? "-translate-x-full"
            : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          {/* Timeline Navigation */}
          <nav className="flex flex-col items-center space-y-4">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <div key={item.id} className="flex flex-col items-center">
                  {/* Timeline dot */}
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group ${
                      isActive
                        ? "bg-primary-500 text-white shadow-lg shadow-primary-500/30"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-500"
                    }`}
                  >
                    <Icon size={18} />

                    {/* Tooltip */}
                    <div className="hidden md:block absolute left-full ml-4 px-3 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-[1000]">
                      {item.label}
                    </div>
                  </button>

                  {/* Timeline line */}
                  {index < navItems.length - 1 && (
                    <div
                      className={`w-0.5 h-8 mt-4 ${
                        activeSection === item.id ||
                        navItems.findIndex((nav) => nav.id === activeSection) >
                          index
                          ? "bg-primary-500"
                          : "bg-gray-200 dark:bg-gray-600"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </nav>

          {/* Theme Toggle Button */}
          <div className="mt-8">
            <button
              onClick={toggleTheme}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-500"
            >
              {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}

              {/* Tooltip */}
              <div className="hidden md:block absolute left-full ml-4 px-3 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-[1000]">
                {isDark ? "Light Mode" : "Dark Mode"}
              </div>
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
