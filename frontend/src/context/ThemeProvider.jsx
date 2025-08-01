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
        primary: { main: '#1976d2' },
        secondary: { main: '#dc004e' },
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
