import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

const CalcButton = () => {
  const numbers = [0, "00", ".", 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Container component="main">
      {numbers.map((number, index) => {
        return (
          <Button variant="outlined" key={index}>
            {number}
          </Button>
        );
      })}
    </Container>
  );
};

export default CalcButton;
