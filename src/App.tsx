import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import OutputCalc from "./components/OutputCalc";
import CalcButton from "./components/CalcButton";

function App() {
  const theme = createTheme();
  const [output, setOutput] = useState<number>(0);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <>
        <Container
          component="main"
          maxWidth="sm"
          sx={{ backgroundColor: "#34c934" }}
        >
          <OutputCalc output={output} />
          <CalcButton />
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
