import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#0A2540" },
    secondary: { main: "#38BDF8" },
    background: {
      default: "#cadbec",
      paper: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});

export default theme;
