import React, { createContext, useState } from "react";
export const ThemeContext = createContext();

export function ThemeProvider(props) {
  const [theme, setTheme] = useState("true");
  const toggleTheme = (e) => setTheme(!theme);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
