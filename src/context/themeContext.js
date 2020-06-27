import React, { createContext } from "react";

const themeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

export default themeContext;
