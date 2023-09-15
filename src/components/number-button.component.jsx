import { useCalculator } from "../context/Context";

const NumberButton = ({ digit, type }) => {
  const { displayValue, setDisplayValue } = useCalculator();

  const handleDigitClick = () => {
    if (displayValue === "0") {
      setDisplayValue(digit.toString());
    } else {
      setDisplayValue(displayValue + digit.toString());
    }
  };

  return (
    <button className={`${type}-button`} onClick={handleDigitClick}>
      {digit}
    </button>
  );
};

export default NumberButton;
