import React, { createContext } from "react";
import useToggle from "../hooks/useToggleState";

export const ThemeContext = createContext();

export function ThemeProvider(props) {
  const [theme, toggleTheme] = useToggle(false);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
