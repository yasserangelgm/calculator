import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayValue: "0",
  editNumber: false,
  operation: {
    firstOperand: null,
    operator: "",
    secondOperand: null,
    result: null,
  },
  operationHistory: [],
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    isDigit: (state, action) => {
      if (state.editNumber === false) {
        state.editNumber = true;
        state.displayValue = action.payload;
      } else {
        if (state.displayValue === "0") {
          state.displayValue = action.payload;
        } else {
          state.displayValue += action.payload;
        }
      }
    },
    isDecimal: (state) => {
      state.editNumber = true;
      if (state.operation.firstOperand !== null) {
        state.displayValue = "0.";
      }
      if (state.operation.result !== null) {
        state.displayValue = "0.";
      }
      if (!state.displayValue.includes(".") || state.displayValue === "0") {
        state.displayValue += ".";
      }
    },
    isBack: (state) => {
      if (state.editNumber === false) return;
      if (state.displayValue !== "0") {
        if (state.displayValue.length !== 1) {
          state.displayValue = state.displayValue.slice(0, -1);
        } else {
          state.displayValue = "0";
        }
      }
    },
    isOperator: (state, action) => {
      if (state.operation.firstOperand === null) {
        state.editNumber = false;
        state.operation.firstOperand = Number(state.displayValue);
      }
      if (state.editNumber === false) {
        state.operation.operator = action.payload;
      }
      /*  */
    },
    isEqual: (state) => {
      if (
        state.operation.firstOperand !== null &&
        state.operation.operator !== ""
      ) {
        state.operation.secondOperand = Number(state.displayValue);
        switch (state.operation.operator) {
          case "+":
            state.operation.result =
              state.operation.firstOperand + state.operation.secondOperand;
            break;
          case "-":
            state.operation.result =
              state.operation.firstOperand - state.operation.secondOperand;
            break;
          case "*":
            state.operation.result =
              state.operation.firstOperand * state.operation.secondOperand;
            break;
          case "/":
            if (state.operation.secondOperand === 0) {
              state.operation.result = "No se puede dividir entre 0";
            } else {
              state.operation.result =
                state.operation.firstOperand + state.operation.secondOperand;
            }
            break;
          default:
            break;
        }
      }
      state.displayValue = state.operation.result.toString();
      state.operation.firstOperand = null;
      state.operation.secondOperand = null;
      state.operation.operator = "";
      state.editNumber = false;
    },
    getResult: (state) => {},
  },
});

export const { isDigit, isDecimal, isBack, isOperator, isEqual } =
  calculatorSlice.actions;
export default calculatorSlice.reducer;
