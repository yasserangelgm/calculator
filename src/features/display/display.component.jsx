import { useSelector } from "react-redux/es/hooks/useSelector";
import React from "react";

const Display = () => {
  const displayValue = useSelector((state) => state.buildNumber.displayValue);
  const digit = useSelector((state) => state.digitClick.digit);

  return (
    <section>
      <label htmlFor="displayValue">{displayValue} </label>
      <label htmlFor="displayValue">{digit} </label>
    </section>
  );
};

export default Display;
