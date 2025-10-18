import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage first, then system preference
    const saved = localStorage.getItem("theme");
    if (saved) {
      return saved === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Function to update scrollbar styles
  const updateScrollbarStyles = (darkMode) => {
    const style =
      document.getElementById("scrollbar-styles") ||
      document.createElement("style");
    style.id = "scrollbar-styles";

    const scrollbarStyles = darkMode
      ? `
      /* Dark theme scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
      }
      ::-webkit-scrollbar-track {
        background: #1f2937; /* gray-800 */
      }
      ::-webkit-scrollbar-thumb {
        background: #4b5563; /* gray-600 */
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #6b7280; /* gray-500 */
      }
      /* Firefox scrollbar */
      * {
        scrollbar-width: thin;
        scrollbar-color: #4b5563 #1f2937;
      }
    `
      : `
      /* Light theme scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
      }
      ::-webkit-scrollbar-track {
        background: #f3f4f6; /* gray-100 */
      }
      ::-webkit-scrollbar-thumb {
        background: #d1d5db; /* gray-300 */
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #9ca3af; /* gray-400 */
      }
      /* Firefox scrollbar */
      * {
        scrollbar-width: thin;
        scrollbar-color: #d1d5db #f3f4f6;
      }
    `;

    style.textContent = scrollbarStyles;
    document.head.appendChild(style);
  };

  useEffect(() => {
    // Update localStorage when theme changes
    localStorage.setItem("theme", isDark ? "dark" : "light");

    // Update document class and background color
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.backgroundColor = "#111827"; // gray-900
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.backgroundColor = "#f9fafb"; // gray-50
    }

    // Update scrollbar styles
    updateScrollbarStyles(isDark);
  }, [isDark]);

  // Set initial background color and scrollbar styles on mount
  useEffect(() => {
    if (isDark) {
      document.documentElement.style.backgroundColor = "#111827"; // gray-900
    } else {
      document.documentElement.style.backgroundColor = "#f9fafb"; // gray-50
    }
    updateScrollbarStyles(isDark);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
