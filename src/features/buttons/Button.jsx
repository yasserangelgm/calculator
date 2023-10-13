import React from "react";
import {
  isDigit,
  isDecimal,
  isBack,
  isOperator,
  isEqual,
} from "../calculator/calculatorSlice";
import { useDispatch } from "react-redux";

const Button = (props) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    switch (props.type) {
      case "digit":
        dispatch(isDigit(props.text));
        break;
      case "decimal":
        dispatch(isDecimal());
        break;
      case "back":
        dispatch(isBack());
        break;
      case "operator":
        dispatch(isOperator(props.text));
        break;
      case "equal":
        dispatch(isEqual());
        break;
      default:
        break;
    }
  };
  return <button onClick={handleClick}>{props.text}</button>;
};

export default Button;
