import React from "react";
import { useDispatch } from "react-redux";
import { isDecimal } from "../display/displayValueSlice";

const DecimalButton = () => {
  const dispatch = useDispatch();
  const handleDecimalClick = () => {
    dispatch(isDecimal());
  };

  return <button onClick={handleDecimalClick}>{"."}</button>;
};

export default DecimalButton;
