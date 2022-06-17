const Screen = ({ handleDelete, operand, answer }) => {
  return (
    <div className="calc-screen">
      <div className="calc-dark-mode">Dark</div>
      <div className="calc-history-answer">history</div>
      <div className="calc-compute">
        <button className="calc-reverse" value="rv" onClick={handleDelete}>
          <i className="fa-solid fa-rotate-left"></i>
        </button>
        <span>{operand ? operand : "0"}</span>
      </div>
      <div className="calc-answer">
        <div>=</div>
        <div>
          <span>{answer}</span>
        </div>
      </div>
    </div>
  );
};

export default Screen;
