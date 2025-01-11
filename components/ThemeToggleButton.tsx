// components/ThemeToggleButton.tsx
import React from "react";
import { useTheme } from "@/app/hooks/useTheme"; // Import the hook

const ThemeToggleButton: React.FC = () => {
  const [theme, setTheme] = useTheme(); // Get the current theme and setter

  // Toggle between dark and light theme
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-full transition-colors duration-300"
    >
      {theme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
};

export default ThemeToggleButton;
