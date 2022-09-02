import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const CalcButton = ({
  firstNumber,
  setFirstNumber,
  lastNumber,
  setLastNumber,
  output,
  setOutput,
}) => {
  const numbers = [
    { id: 0, symbol: "AC" },
    { id: 1, symbol: "+/-" },
    { id: 2, symbol: "%" },
    { id: 3, symbol: "÷" },
    { id: 4, symbol: 7 },
    { id: 5, symbol: 8 },
    { id: 6, symbol: 9 },
    { id: 7, symbol: "×" },
    { id: 8, symbol: 4 },
    { id: 9, symbol: 5 },
    { id: 10, symbol: 6 },
    { id: 11, symbol: "-" },
    { id: 12, symbol: 1 },
    { id: 13, symbol: 2 },
    { id: 14, symbol: 3 },
    { id: 15, symbol: "+" },
    { id: 16, symbol: 0 },
    { id: 17, symbol: "00" },
    { id: 18, symbol: "." },
    { id: 19, symbol: "=" },
  ];
  const InputNumber = (number) => {
    if (number !== ".") {
      setOutput(() => Number(String(output) + String(number)));
    } else {
      setOutput(() => String(output) + String(number));
    }
  };
  return (
    <Container component="main" maxWidth="sm">
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 1, md: 3 }}>
        {numbers.map((number) => {
          return (
            <Grid item sm={3}>
              <Button
                variant="outlined"
                key={number.id}
                onClick={() => InputNumber(number.symbol)}
              >
                {number.symbol}
              </Button>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default CalcButton;
