// src/context/ThemeProvider.jsx

import React, { createContext, useState, useMemo, useCallback } from "react";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Context to manage dark mode
const ThemeContext = createContext();

const CustomThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prev) => !prev);
  }, []);

  const theme = useMemo(() => 
    createTheme({
      palette: {
        mode: darkMode ? "dark" : "light",
      },
    }), [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export { CustomThemeProvider as ThemeProvider, ThemeContext };
