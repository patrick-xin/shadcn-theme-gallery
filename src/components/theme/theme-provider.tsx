// components/theme/theme-provider.tsx
"use client";

import { themes } from "@/lib/theme";
import { Theme } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: string;
  storageKey?: string;
};

type ThemeContextType = {
  currentTheme: Theme;
  setTheme: (themeId: string) => void;
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
  isSystemTheme: boolean;
  setIsSystemTheme: (isSystem: boolean) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({
  children,
  defaultTheme = "blue", // default theme id
  storageKey = "theme-preference",
}: ThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        const theme = themes.find((t) => t.id === stored);
        if (theme) return theme;
      }
    }
    return themes.find((t) => t.id === defaultTheme) || themes[0];
  });

  const [isDark, setIsDark] = useState<boolean>(false);
  const [isSystemTheme, setIsSystemTheme] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme-mode");
      return stored === "system" || !stored;
    }
    return true;
  });

  // Handle system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      if (isSystemTheme) {
        setIsDark(mediaQuery.matches);
      }
    };

    // Set initial value
    handleChange();

    // Listen for changes
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [isSystemTheme]);

  // Save preferences
  useEffect(() => {
    localStorage.setItem(storageKey, currentTheme.id);
    localStorage.setItem(
      "theme-mode",
      isSystemTheme ? "system" : isDark ? "dark" : "light"
    );

    // Apply theme
    const vars = currentTheme.colors[isDark ? "dark" : "light"];
    Object.entries(vars).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark, currentTheme, storageKey, isSystemTheme]);

  const setTheme = (themeId: string) => {
    const theme = themes.find((t) => t.id === themeId);
    if (theme) {
      setCurrentTheme(theme);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        setTheme,
        isDark,
        setIsDark,
        isSystemTheme,
        setIsSystemTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
