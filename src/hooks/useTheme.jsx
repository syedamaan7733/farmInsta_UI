import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeProviderContext = createContext();

export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "broKo-uconsti-theme",
  ...props
}) {
  const [theme, setTheme] = useState(() => {
    const storedTHeme = localStorage.getItem(storageKey);

    return storedTHeme || defaultTheme;
  });

  useEffect(() => {
    const root = window.document.documentElement;

    // remove exisiting them classses
    root.classList.remove("light", "dark");

    // add current theme classes
    root.classList.add(theme);
  }, [theme]);

  // store theme prefrence
  useEffect(() => {
    localStorage.setItem(storageKey, theme);
  }, [theme, storageKey]);

  const value = {
    theme,
    setTheme: (newTheme) => setTheme(newTheme),
    toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark"),
  };

  return (
    <ThemeProviderContext.Provider value={value} {...props}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error("useTheme must be  used within a THeme Provider.");
  }
  return context;
};
