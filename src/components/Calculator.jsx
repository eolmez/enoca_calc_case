import React, { useState } from "react";
import Keyboard from "./Keyboard";
import Screen from "./Screen";

function Calculator() {
  const [prevAnswer, setPrevAnswer] = useState("");
  const [answer, setAnswer] = useState("0");
  const [operand, setOperand] = useState("");

  const handleOperand = (e) => {
    const value = e.target.value;

    setOperand((operand) => operand + value);
  };

  const handleOperator = (e) => {
    const value = e.target.value;

    if (value === "=") {
      if (operand === "") return;
    }

    if (value === "ac") {
      setOperand("");
      setAnswer(0);

      if (answer > 0) setPrevAnswer(answer);
      return;
    }

    if (value === "pm") {
      if (operand === "") return;

      let calculated;
      if (Number(operand.slice(-1))) {
        calculated = eval(operand);

        if (Math.sign(calculated) < 0) {
          calculated = Math.abs(calculated);
          setOperand(calculated.toString());
        } else {
          setOperand(`-` + calculated.toString());
        }
      } else {
        calculated = eval(operand.slice(0, -1));
        if (Math.sign(calculated)) {
          setOperand(`-` + calculated.toString());
        } else {
          setOperand(calculated.toString());
        }
      }
      return;
    }

    if (value === "%") {
      if (operand === "") return;
    }

    let newOperand;
    if (operand.slice(-1) === value) {
      newOperand = operand.slice(0, -1);
      setOperand(newOperand + value);
    } else {
      if (!Number(operand.slice(-1))) {
        newOperand = operand.slice(0, -1);

        if (Number(operand.slice(-1)) === 0) {
          setOperand(newOperand + `0` + value);
          return;
        } else {
          setOperand(newOperand + value);
          return;
        }
      } else if (operand.slice(-1) === "ac") {
        setOperand("");
        if (answer > 0) setAnswer(0);
      } else if (operand.includes("/")) {
        newOperand = eval(operand);
        setOperand(newOperand);
      }
    }

    const lastDigit = operand.slice(-1);
    if (!Number(lastDigit)) return;

    if (!(operand === "." || operand.includes("."))) {
      setOperand((operand) => operand + value);
    }

    switch (value) {
      case "ac":
        setOperand("");
        break;
      case "+":
        setOperand(eval(operand) + value);
        break;
      case "-":
        setOperand(`${eval(operand)}${value}`);
        break;
      case "*":
        setOperand(`${eval(operand)}${value}`);
        break;
      case "%":
        break;
      case "/":
        setOperand(`${eval(operand)}${value}`);
        break;
      case "=":
        setOperand("");
        setAnswer(eval(operand));
        if (answer > 0) setPrevAnswer(answer);
        break;
      default:
        return;
    }
  };

  const handleDelete = () => {
    if (operand.length > 0) {
      setOperand((op) => op.slice(0, -1));
    }
  };

  return (
    <div className="calculator">
      <div className="calc-wrapper">
        <Screen handleDelete={handleDelete} operand={operand} answer={answer} />
        <Keyboard
          handleOperator={handleOperator}
          handleOperand={handleOperand}
        />
      </div>
    </div>
  );
}

export default Calculator;
