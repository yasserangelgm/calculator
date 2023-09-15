import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayValue: "0",
};

export const displayValueSlice = createSlice({
  name: "buildNumber",
  initialState,
  reducers: {
    isDigit: (state, action) => {
      if (state.displayValue === "0") {
        state.displayValue = action.payload.toString();
      } else {
        state.displayValue += action.payload.toString();
      }
    },
    isDecimal: (state) => {
      if (!state.displayValue.includes(".")) {
        state.displayValue += ".";
      }
    },
    isBack: (state) => {
      if (state.displayValue !== "0") {
        if (state.displayValue.length !== 1) {
          state.displayValue = state.displayValue.slice(0, -1);
        } else {
          state.displayValue = "0";
        }
      }
    },
  },
});

export const { isDigit, isDecimal, isBack } = displayValueSlice.actions;
export default displayValueSlice.reducer;
