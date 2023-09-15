import React from "react";

import { useDispatch } from "react-redux";
import { changeDigit } from "./digitSlice";
import { isDigit } from "../display/displayValueSlice";

const DigitButton = (props) => {
  const dispatch = useDispatch();
  const handleDigitClick = () => {
    dispatch(changeDigit(props.digit));
    dispatch(isDigit(props.digit));
  };
  return <button onClick={handleDigitClick}>{props.digit}</button>;
};

export default DigitButton;
