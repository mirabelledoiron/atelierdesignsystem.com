import { useState, useEffect } from "react";

type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("atelier-theme") as Theme | null;
      if (stored) return stored;
      return document.documentElement.classList.contains("dark") ? "dark" : "light";
    }
    return "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("atelier-theme", theme);
  }, [theme]);

  const toggleTheme = () => setThemeState((prev) => (prev === "dark" ? "light" : "dark"));

  return { theme, setTheme: setThemeState, toggleTheme };
}
