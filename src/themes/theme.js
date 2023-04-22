import { createTheme } from "@mui/material";
import { createBreakpoints } from "@mui/system";

const breakpoints = createBreakpoints({
  values: {
    xs: 375,
    sm: 768,
    md: 1024,
    lg: 1440,
    xl: 1920,
  },
});

export const theme = createTheme({
  typography: {
    fontFamily: '"Open Sans", "Arial", sans-serif',
    fontWeightRegular: 700,
    fontSize: 14, // 14 = 1rem (16px)
    h1: {
      fontSize: 52,
      lineHeight: 1.1,

      [breakpoints.up("lg")]: {
        fontSize: 56,
      },
    },
    h2: {
      fontSize: 44,
      lineHeight: 1.1,

      [breakpoints.up("lg")]: {
        fontSize: 48,
      },
    },
    h3: {
      fontSize: 32,
      lineHeight: 1.1,

      [breakpoints.up("lg")]: {
        fontSize: 36,
      },
    },
    h4: {
      fontSize: 28,
      lineHeight: 1.5,

      [breakpoints.up("lg")]: {
        fontSize: 32,
      },
    },
    h5: {
      fontSize: 24,
      lineHeight: 1.5,

      [breakpoints.up("lg")]: {
        fontSize: 28,
      },
    },
    h6: {
      fontSize: 20,
      lineHeight: 1.5,

      [breakpoints.up("lg")]: {
        fontSize: 24,
      },
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: 1.75,

      [breakpoints.up("lg")]: {
        fontSize: 20,
      },
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 700,
      lineHeight: 1.75,

      [breakpoints.up("lg")]: {
        fontSize: 16,
      },
    },
    body1: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 1.5,

      [breakpoints.up("lg")]: {
        fontSize: 16,
      },
    },
    body2: {
      fontSize: 12,
      fontWeight: 400,
      lineHeight: 1.5,

      [breakpoints.up("lg")]: {
        fontSize: 14,
      },
    },
    button: {
      fontSize: 14,
      fontWeight: 600,
      lineHeight: 1.5,

      [breakpoints.up("lg")]: {
        fontSize: 16,
      },
    },
    caption: {
      fontSize: 10,
      fontWeight: 400,
      lineHeight: 1.5,

      [breakpoints.up("lg")]: {
        fontSize: 12,
      },
    },
  },
  palette: {
    mode: "light",
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: "#3f51b5",
      light: "#757de8",
      dark: "#002984",
      contrastText: "#fff",
    },
    secondary: {
      main: "#f50057",
      light: "#ff337f",
      dark: "#ab003c",
      contrastText: "#fff",
    },
    error: {
      main: "#f44336",
      light: "#e57373",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    warning: {
      main: "#ff9800",
      light: "#ffb74d",
      dark: "#f57c00",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    info: {
      main: "#2196f3",
      light: "#64b5f6",
      dark: "#1976d2",
      contrastText: "#fff",
    },
    success: {
      main: "#4caf50",
      light: "#81c784",
      dark: "#388e3c",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    grey: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#d5d5d5",
      A200: "#aaaaaa",
      A400: "#303030",
      A700: "#616161",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: {
      paper: "#fff",
      default: "#fafafa",
    },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
    },
  },
});
