import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
/* import { useDispatch } from "react-redux"; */

const Display = () => {
  const displayValue = useSelector((state) => state.calculator.displayValue);
  const operation = useSelector((state) => state.calculator.operation);
  return (
    <div className="display">
      <div className="operation">
        {operation.firstOperand}
        {operation.operator}
      </div>
      <div className="digit">{displayValue}</div>
    </div>
  );
};

export default Display;
