import * as React from "react";
import { ThemeProvider, Typography } from "@mui/material";
import { theme } from "./stories/Typography/Typography.style";
import Button from "./Components/UI/Atoms/Button";

function App() {
  return (
    <div>
      <Button primary size="large" label={"Hello world"} />
      <ThemeProvider theme={theme}>
        <Typography variant="h1">H1 Example</Typography>
        <Typography variant="h2">H2 Example</Typography>
        <Typography variant="h3">H3 Example</Typography>
        <Typography variant="h4">H4 Example</Typography>
        <Typography variant="h5">H5 Example</Typography>
        <Typography variant="h6">H6 Example</Typography>
      </ThemeProvider>
    </div>
  );
}

export default App;
