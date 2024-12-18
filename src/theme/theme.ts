"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#D12985",
    },
    secondary: {
      main: "#FDF2F8",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F5E5EF",
    },

    mode: "light",
  },
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  shape: {
    borderRadius: 7,
  },
});

export default theme;
