import React from "react";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

const OutputCalc = ({ output }) => {
  return (
    <>
      <Container component="div">
        <Typography component="h2">{output}</Typography>
      </Container>
    </>
  );
};

export default OutputCalc;
