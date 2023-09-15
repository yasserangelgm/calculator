import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  digit: 0,
};

const digitSlice = createSlice({
  name: "digitClick",
  initialState,
  reducers: {
    changeDigit: (state, action) => {
      state.digit = action.payload;
    },
  },
});

export const { changeDigit } = digitSlice.actions;
export default digitSlice.reducer;
