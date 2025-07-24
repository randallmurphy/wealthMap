import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4"; // moon icon
import Brightness7Icon from "@mui/icons-material/Brightness7"; // sun icon

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <IconButton onClick={toggleDarkMode} color="inherit" aria-label="toggle dark mode">
      {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

export default DarkModeToggle;
