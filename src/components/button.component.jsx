const Button = ({ symbol, type, clickHandler, context }) => {
  return (
    <button
      className={`${type}-button`}
      type={type}
      onClick={() => clickHandler(symbol, context)}
    >
      {symbol}
    </button>
  );
};

export default Button;
