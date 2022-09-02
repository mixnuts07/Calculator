import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const CalcButton = ({
  tmpNumber,
  setTmpNumber,
  lastNumber,
  setLastNumber,
  output,
  setOutput,
}) => {
  const numbers = [
    { id: 0, symbol: "AC", func: true },
    { id: 1, symbol: "+/-", func: true },
    { id: 2, symbol: "%", func: true },
    { id: 3, symbol: "÷", func: true },
    { id: 4, symbol: 7 },
    { id: 5, symbol: 8 },
    { id: 6, symbol: 9 },
    { id: 7, symbol: "×", func: true },
    { id: 8, symbol: 4 },
    { id: 9, symbol: 5 },
    { id: 10, symbol: 6 },
    { id: 11, symbol: "-", func: true },
    { id: 12, symbol: 1 },
    { id: 13, symbol: 2 },
    { id: 14, symbol: 3 },
    { id: 15, symbol: "+", func: true },
    { id: 16, symbol: 0 },
    { id: 17, symbol: "00" },
    { id: 18, symbol: ".", func: true },
    { id: 19, symbol: "=", func: true },
  ];
  const inputNumber = (number) => {
    setOutput(() => Number(String(output) + String(number)));
  };
  const addNumber = () => {
    setTmpNumber(() => output);
    setOutput(() => Number(output) + Number(lastNumber));
  };
  return (
    <Container component="main" maxWidth="sm">
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 1, md: 3 }}>
        {numbers.map((number) => {
          return (
            <Grid item sm={3}>
              {number.func ? (
                <Button
                  variant="outlined"
                  key={number.id}
                  onClick={() => addNumber()}
                  sx={{
                    backgroundColor: "rgba(14, 122, 250, 0.8)",
                    color: "rgb(255,255,255)",
                  }}
                >
                  {number.symbol}
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  key={number.id}
                  onClick={() => inputNumber(number.symbol)}
                  sx={{
                    backgroundColor: "rgba(14, 122, 250, 0.8)",
                    color: "rgb(255,255,255)",
                  }}
                >
                  {number.symbol}
                </Button>
              )}
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default CalcButton;
