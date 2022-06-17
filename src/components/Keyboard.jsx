import Button from "./Button";

const Keyboard = ({ handleOperator, handleOperand }) => {
  const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "x"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [".", 0, "00", "="],
  ];
  return (
    <div className="calc-grid">
      {btnValues.flat().map((btn, i) => (
        <Button
          value={btn}
          key={i}
          handler={isNaN(btn) ? handleOperator : handleOperand}
        />
      ))}
    </div>
  );
};

export default Keyboard;
