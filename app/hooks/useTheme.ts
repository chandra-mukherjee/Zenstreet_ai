// hooks/useTheme.ts
import { useEffect, useState } from "react";

// Custom hook to manage the dark mode
export function useTheme() {
  const [theme, setTheme] = useState<string>(() => {
    if (typeof window !== "undefined") {
      // Get the current theme from localStorage or default to the system theme
      return localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    }
    return "light";
  });

  // Set theme in HTML class and localStorage
  useEffect(() => {
    const root = document.documentElement;  // 
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");  // theme:dark
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return [theme, setTheme] as const;
}
