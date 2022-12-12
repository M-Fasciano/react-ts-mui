import { ThemeProvider, Typography } from "@mui/material";
import { theme } from "../../stories/Typography/Typography.style";

function Heading() {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h1">H1 Example</Typography>
      <Typography variant="h2">H2 Example</Typography>
      <Typography variant="h3">H3 Example</Typography>
      <Typography variant="h4">H4 Example</Typography>
      <Typography variant="h5">H5 Example</Typography>
      <Typography variant="h6">H6 Example</Typography>
    </ThemeProvider>
  );
}

export default Heading;
