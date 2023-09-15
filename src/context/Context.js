import { createContext, useContext, useState } from "react";

const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
  const [symbol, setSymbol] = useState(0);
  const [displayValue, setDisplayValue] = useState("0");
  const [operator, setOperator] = useState(null);

  const contextValue = {
    symbol,
    displayValue,
    operator,
    setSymbol,
    setDisplayValue,
    setOperator,
  };

  return (
    <CalculatorContext.Provider value={contextValue}>
      {children}
    </CalculatorContext.Provider>
  );
};

export const useCalculator = () => {
  return useContext(CalculatorContext);
};
