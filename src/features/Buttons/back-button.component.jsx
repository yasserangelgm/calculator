import React from "react";
import { useDispatch } from "react-redux";
import { isBack } from "../display/displayValueSlice";

const BackButton = () => {
  const dispatch = useDispatch();
  const handleBackClick = () => {
    dispatch(isBack());
  };

  return <button onClick={handleBackClick}>{"←"}</button>;
};

export default BackButton;
