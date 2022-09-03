import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "./button.css";

const OutputCalc = ({ output }) => {
  return (
    <>
      <Container
        component="div"
        maxWidth="sm"
        sx={{ paddingTop: "100px", paddingRight: "40px" }}
      >
        <Typography
          component="h2"
          sx={{
            color: "rgb(255,255,255)",
            textAlign: "right",
            fontSize: "30px",
          }}
        >
          {output}
        </Typography>
      </Container>
    </>
  );
};

const CalcButton = () => {
  const [tmpNumber, setTmpNumber] = useState(0);
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
  const [output, setOutput] = useState<number | string>(0);
  // 数字入力
  const Input = (number) => {
    setOutput(() => Number(String(output) + String(number)));
  };
  // +
  const Add = () => {
    setTmpNumber(Number(output));
    setOutput("+");
  };
  // =
  const Result = () => {
    setOutput(() => tmpNumber + Number(output));
    setTmpNumber(0);
  };
  useEffect(() => {
    console.log("OUTPUT:", output);
    console.log("TMP:", tmpNumber);
  }, [output, tmpNumber]);
  return (
    <Container component="main" maxWidth="sm">
      <OutputCalc output={output} />
      <Grid
        container
        rowSpacing={1}
        columnSpacing={1}
        sx={{ margin: "0 auto" }}
      >
        {numbers.map((number) => {
          return (
            <Grid item sm={3}>
              {/* 数字か記号か */}
              {number.func ? (
                <Button
                  variant="outlined"
                  key={number.id}
                  onClick={number.symbol === "+" ? () => Add() : () => Result()}
                  sx={{
                    backgroundColor: "rgba(14, 122, 250, 0.8)",
                    color: "rgb(255,255,255)",
                  }}
                >
                  {number.symbol}
                </Button>
              ) : (
                <Button
                  className="glow-on-hover"
                  variant="outlined"
                  key={number.id}
                  onClick={() => Input(number.symbol)}
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
