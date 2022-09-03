import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CalcButton from "./components/CalcButton";

function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <>
        <Container
          component="main"
          maxWidth="sm"
          sx={{ backgroundColor: "rgb(00,00,00)", height: "100vh" }}
        >
          <CalcButton />
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
