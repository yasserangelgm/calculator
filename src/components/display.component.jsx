import { useCalculator } from "../context/Context";

const Display = () => {
  const { displayValue } = useCalculator();
  return <label>{displayValue}</label>;
};

export default Display;
