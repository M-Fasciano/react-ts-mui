import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { theme } from "./Heading.styles";

type HeadingProps = {
  level: number;
  children: React.ReactNode;
};

function Heading(props: HeadingProps) {
  const { level, children } = props;
  const headingTag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  return (
    <ThemeProvider theme={theme}>
      <Typography variant={headingTag}>{children}</Typography>
    </ThemeProvider>
  );
}

export default Heading;
